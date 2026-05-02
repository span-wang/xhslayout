const { chromium } = require("playwright-core");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const ACCESS_CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, ".access-password.json"), "utf8"));
const AUTH_COOKIE_NAME = "layout_for_xhs_auth";
const AUTH_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;
const AUTH_SESSION_SECRET = crypto
  .createHash("sha256")
  .update(`${ACCESS_CONFIG.salt}:${ACCESS_CONFIG.hash}`)
  .digest();

function signValue(value) {
  return crypto
    .createHmac("sha256", AUTH_SESSION_SECRET)
    .update(String(value))
    .digest("base64url");
}

function createSessionToken() {
  const expiresAt = String(Date.now() + (AUTH_SESSION_MAX_AGE_SECONDS * 1000));
  return `${expiresAt}.${signValue(expiresAt)}`;
}

async function clickAndReadGroup(page, selector, expected) {
  await page.locator(selector).first().click();
  const active = await page.locator("#elementStylePanel").getAttribute("data-active-element-style");
  console.log(`group ${selector} => ${active}`);
  if (expected && active !== expected) {
    throw new Error(`Expected group ${expected} for ${selector}, got ${active}`);
  }
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 1200 },
  });

  await context.addCookies([{
    name: AUTH_COOKIE_NAME,
    value: createSessionToken(),
    domain: "127.0.0.1",
    path: "/",
    httpOnly: true,
    sameSite: "Lax",
  }]);

  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3210", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForSelector("#articleCanvas .page-sheet", { timeout: 15000 });

  const markdown = [
    "# Smoke Test",
    "",
    "## Knowledge",
    "",
    "One line: this is a key knowledge row.",
    "",
    "![Demo](https://dummyimage.com/320x180/d8e6f4/204a73.png&text=Demo)",
    "",
    "$$",
    "E = mc^2",
    "$$",
    "",
    ":::mindmap Demo Map",
    "- Branch A",
    "  - Node A1",
    "- Branch B",
    "  - Node B1",
    ":::",
    "",
    "## Single Choice",
    "",
    "Question: which one is correct?",
    "Answer: A",
    "Analysis: this is the explanation.",
    "",
    "## Article",
    "",
    "Lead: this is the lead paragraph.",
  ].join("\n");

  await page.locator("#markdownInput").fill(markdown);
  await page.waitForTimeout(1500);
  await page.locator("#inspectorToggle").click();

  console.log("counts", {
    factRows: await page.locator(".fact-row").count(),
    imageCards: await page.locator(".image-card").count(),
    mathBlocks: await page.locator(".math-block").count(),
    mindmaps: await page.locator(".mindmap-card").count(),
  });

  if (await page.locator(".fact-row").count()) {
    await clickAndReadGroup(page, ".fact-row", "knowledge");
  }

  if (await page.locator(".image-card").count()) {
    await clickAndReadGroup(page, ".image-card", "image");
  }

  if (await page.locator(".math-block").count()) {
    await clickAndReadGroup(page, ".math-block", "math");
    if (await page.locator("#formulaEditorDialog:not([hidden])").count()) {
      await page.keyboard.press("Escape");
      await page.waitForTimeout(150);
    }
  }

  if (await page.locator(".mindmap-card").count()) {
    await clickAndReadGroup(page, ".mindmap-card", "mindmap");
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
