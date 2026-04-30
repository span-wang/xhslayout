const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { chromium } = require("playwright-core");

const HOST = "127.0.0.1";
const PORT = Number(process.env.PORT || 3210);
const ROOT = __dirname;
const ACCESS_CONFIG_PATH = path.join(ROOT, ".access-password.json");
loadLocalEnvFile(path.join(ROOT, ".env.local"));
loadLocalEnvFile(path.join(ROOT, ".env"));
const AUTH_COOKIE_NAME = "layout_for_xhs_auth";
const AUTH_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;
const MAX_REQUEST_BODY_BYTES = 80 * 1024 * 1024;
const MAX_STUDY_NOTES_SOURCE_CHARS = 60000;
const PDF_EXPORT_TIMEOUT_MS = Math.max(30000, Number(process.env.PDF_EXPORT_TIMEOUT_MS) || 180000);
const PDF_ASSET_READY_TIMEOUT_MS = Math.max(3000, Number(process.env.PDF_ASSET_READY_TIMEOUT_MS) || 12000);
const LOGIN_PATH = "/login";
const LOGOUT_PATH = "/logout";
const LLM_API_KEY = process.env.LLM_API_KEY || process.env.OPENAI_API_KEY || "";
const LLM_BASE_URL = process.env.LLM_BASE_URL || process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
const LLM_CHAT_COMPLETIONS_URL = process.env.LLM_CHAT_COMPLETIONS_URL || buildChatCompletionsUrl(LLM_BASE_URL);
const LLM_MODEL = process.env.LLM_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini";
const LLM_MAX_TOKENS = Number(process.env.LLM_MAX_TOKENS || 6500);
const LLM_TIMEOUT_MS = Number(process.env.LLM_TIMEOUT_MS || 90000);
const EDGE_CANDIDATES = [
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];
const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".bcmap": "application/octet-stream",
  ".pfb": "application/octet-stream",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};
const BLOCKED_PATH_SEGMENTS = new Set([
  ".git",
  ".npm-cache",
  "deploy",
  "node_modules",
  "scripts",
  "tools",
]);
const BLOCKED_FILE_NAMES = new Set([
  "package-lock.json",
  "package.json",
  "readme.md",
  "server.js",
]);

const ACCESS_CONFIG = loadAccessConfig();
const AUTH_SESSION_SECRET = crypto
  .createHash("sha256")
  .update(`${ACCESS_CONFIG.salt}:${ACCESS_CONFIG.hash}`)
  .digest();
let pdfBrowserPromise = null;

function collapseHtmlBreakRuns(value, maxBreaks = 2) {
  const limit = Math.max(1, Math.floor(Number(maxBreaks) || 1));
  const breakRunPattern = new RegExp(`(?:[ \\t]*<br\\s*\\/?>[ \\t]*){${limit + 1},}`, "gi");
  return String(value || "").replace(breakRunPattern, "<br>".repeat(limit));
}

function normalizeRedundantHtmlBreaks(value) {
  return collapseHtmlBreakRuns(value)
    .replace(/(?:[ \t]*<br\s*\/?>[ \t]*)+\n/gi, "\n")
    .replace(/\n(?:[ \t]*<br\s*\/?>[ \t]*)+/gi, "\n");
}

function normalizeRedundantHtmlBreaksOutsideFences(value) {
  const lines = String(value || "").split("\n");
  const output = [];
  let buffer = [];
  let inFence = false;

  const flushBuffer = () => {
    if (!buffer.length) {
      return;
    }

    output.push(normalizeRedundantHtmlBreaks(buffer.join("\n")));
    buffer = [];
  };

  lines.forEach((line) => {
    if (/^\s*```/.test(line)) {
      if (inFence) {
        output.push(line);
        inFence = false;
        return;
      }

      flushBuffer();
      output.push(line);
      inFence = true;
      return;
    }

    if (inFence) {
      output.push(line);
      return;
    }

    buffer.push(line);
  });

  flushBuffer();
  return output.join("\n");
}

function loadLocalEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");

  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex <= 0) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (!key || Object.prototype.hasOwnProperty.call(process.env, key)) {
      return;
    }

    if (
      (value.startsWith("\"") && value.endsWith("\""))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  });
}

function buildChatCompletionsUrl(baseUrl) {
  const normalized = String(baseUrl || "").trim().replace(/\/+$/, "");
  return `${normalized || "https://api.openai.com/v1"}/chat/completions`;
}

function loadAccessConfig() {
  if (!fs.existsSync(ACCESS_CONFIG_PATH)) {
    throw new Error(`Missing access password config at ${ACCESS_CONFIG_PATH}`);
  }

  const payload = JSON.parse(fs.readFileSync(ACCESS_CONFIG_PATH, "utf8"));

  if (
    !payload
    || typeof payload.salt !== "string"
    || !payload.salt
    || typeof payload.hash !== "string"
    || !payload.hash
  ) {
    throw new Error(`Invalid access password config at ${ACCESS_CONFIG_PATH}`);
  }

  return payload;
}

function findBrowserExecutable() {
  for (const candidate of EDGE_CANDIDATES) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error("No local Edge/Chrome executable was found.");
}

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendHtml(response, statusCode, html) {
  const body = Buffer.from(String(html || ""), "utf8");
  setCorsHeaders(response);
  response.writeHead(statusCode, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Length": body.length,
    "Cache-Control": "no-store",
  });
  response.end(body);
}

function sendJson(response, statusCode, payload) {
  const body = Buffer.from(JSON.stringify(payload), "utf8");
  setCorsHeaders(response);
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": body.length,
    "Cache-Control": "no-store",
  });
  response.end(body);
}

function redirect(response, location, statusCode = 302, headers = {}) {
  setCorsHeaders(response);
  response.writeHead(statusCode, {
    Location: location,
    "Cache-Control": "no-store",
    ...headers,
  });
  response.end();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getRequestUrl(request) {
  return new URL(request.url || "/", `http://${request.headers.host || `${HOST}:${PORT}`}`);
}

function parseCookies(request) {
  const cookieHeader = request.headers.cookie || "";
  const cookies = {};

  cookieHeader.split(";").forEach((entry) => {
    const separatorIndex = entry.indexOf("=");

    if (separatorIndex === -1) {
      return;
    }

    const name = entry.slice(0, separatorIndex).trim();
    const value = entry.slice(separatorIndex + 1).trim();

    if (!name) {
      return;
    }

    cookies[name] = decodeURIComponent(value);
  });

  return cookies;
}

function normalizeNextPath(value) {
  const candidate = String(value || "/").trim();

  if (!candidate.startsWith("/") || candidate.startsWith("//")) {
    return "/";
  }

  return candidate;
}

function isSecureRequest(request) {
  const forwardedProto = String(request.headers["x-forwarded-proto"] || "")
    .split(",")[0]
    .trim()
    .toLowerCase();

  return forwardedProto === "https" || Boolean(request.socket && request.socket.encrypted);
}

function buildAuthCookie(token, request) {
  const attributes = [
    `${AUTH_COOKIE_NAME}=${encodeURIComponent(token)}`,
    "Path=/",
    `Max-Age=${AUTH_SESSION_MAX_AGE_SECONDS}`,
    "HttpOnly",
    "SameSite=Lax",
  ];

  if (isSecureRequest(request)) {
    attributes.push("Secure");
  }

  return attributes.join("; ");
}

function buildLogoutCookie(request) {
  const attributes = [
    `${AUTH_COOKIE_NAME}=`,
    "Path=/",
    "Max-Age=0",
    "HttpOnly",
    "SameSite=Lax",
  ];

  if (isSecureRequest(request)) {
    attributes.push("Secure");
  }

  return attributes.join("; ");
}

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

function verifySessionToken(token) {
  if (!token || typeof token !== "string") {
    return false;
  }

  const separatorIndex = token.indexOf(".");

  if (separatorIndex === -1) {
    return false;
  }

  const expiresAt = token.slice(0, separatorIndex);
  const signature = token.slice(separatorIndex + 1);
  const expectedSignature = signValue(expiresAt);

  if (!/^\d+$/.test(expiresAt) || !signature) {
    return false;
  }

  const receivedBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(expectedSignature, "utf8");

  if (receivedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  if (!crypto.timingSafeEqual(receivedBuffer, expectedBuffer)) {
    return false;
  }

  return Number(expiresAt) > Date.now();
}

function isAuthenticated(request) {
  const cookies = parseCookies(request);
  return verifySessionToken(cookies[AUTH_COOKIE_NAME]);
}

function verifyPassword(password) {
  const candidateHash = crypto.scryptSync(String(password || ""), ACCESS_CONFIG.salt, 64).toString("hex");
  const candidateBuffer = Buffer.from(candidateHash, "hex");
  const expectedBuffer = Buffer.from(ACCESS_CONFIG.hash, "hex");

  if (candidateBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(candidateBuffer, expectedBuffer);
}

function renderLoginPage(nextPath = "/", errorMessage = "") {
  const next = escapeHtml(normalizeNextPath(nextPath));
  const errorHtml = errorMessage
    ? `<p class="login-error">${escapeHtml(errorMessage)}</p>`
    : "";

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Protected Access</title>
  <style>
    :root {
      color-scheme: light;
      --bg-a: #f8f1e7;
      --bg-b: #e8ddd0;
      --panel: rgba(255, 252, 247, 0.94);
      --ink: #231b15;
      --muted: #6f6356;
      --border: rgba(62, 45, 31, 0.12);
      --accent: #9e5f2d;
      --accent-deep: #7f4317;
      --danger: #b24432;
      --shadow: 0 24px 64px rgba(56, 39, 24, 0.14);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
      font-family: "Segoe UI", "Microsoft YaHei", sans-serif;
      color: var(--ink);
      background:
        radial-gradient(circle at top left, rgba(255, 255, 255, 0.72), transparent 36%),
        linear-gradient(145deg, var(--bg-a), var(--bg-b));
    }

    .login-card {
      width: min(420px, 100%);
      padding: 32px;
      border-radius: 24px;
      border: 1px solid var(--border);
      background: var(--panel);
      box-shadow: var(--shadow);
      backdrop-filter: blur(14px);
    }

    .eyebrow {
      margin: 0 0 10px;
      font-size: 12px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
    }

    h1 {
      margin: 0 0 12px;
      font-size: 28px;
      line-height: 1.15;
    }

    p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
    }

    form {
      margin-top: 22px;
      display: grid;
      gap: 14px;
    }

    label {
      display: grid;
      gap: 8px;
      font-size: 14px;
      color: var(--ink);
    }

    input[type="password"] {
      width: 100%;
      padding: 14px 16px;
      border-radius: 14px;
      border: 1px solid rgba(77, 58, 42, 0.18);
      background: rgba(255, 255, 255, 0.84);
      font-size: 16px;
      outline: none;
    }

    input[type="password"]:focus {
      border-color: rgba(158, 95, 45, 0.5);
      box-shadow: 0 0 0 4px rgba(158, 95, 45, 0.12);
    }

    button {
      border: 0;
      border-radius: 14px;
      padding: 14px 16px;
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      background: linear-gradient(135deg, var(--accent), var(--accent-deep));
      cursor: pointer;
    }

    .login-error {
      margin-top: 18px;
      padding: 12px 14px;
      border-radius: 14px;
      color: var(--danger);
      background: rgba(178, 68, 50, 0.08);
      border: 1px solid rgba(178, 68, 50, 0.16);
    }
  </style>
</head>
<body>
  <main class="login-card">
    <p class="eyebrow">Layout For XHS</p>
    <h1>Enter Access Password</h1>
    <p>This page is now protected. Enter the password to open the editor.</p>
    ${errorHtml}
    <form method="post" action="${LOGIN_PATH}">
      <input type="hidden" name="next" value="${next}">
      <label>
        <span>Password</span>
        <input type="password" name="password" autocomplete="current-password" autofocus required>
      </label>
      <button type="submit">Unlock</button>
    </form>
  </main>
</body>
</html>`;
}

function shouldBypassAuth(pathname) {
  return pathname === "/health"
    || pathname === LOGIN_PATH
    || pathname === LOGOUT_PATH
    || String(pathname || "").startsWith("/vendor/katex/");
}

function isAllowedPublicPath(relativePath) {
  const normalized = String(relativePath || "").replace(/\\/g, "/");
  const segments = normalized.split("/").filter(Boolean);

  if (!segments.length) {
    return true;
  }

  if (segments.some((segment) => segment.startsWith("."))) {
    return false;
  }

  if (segments.some((segment) => BLOCKED_PATH_SEGMENTS.has(segment.toLowerCase()))) {
    return false;
  }

  const fileName = path.basename(normalized).toLowerCase();

  if (BLOCKED_FILE_NAMES.has(fileName)) {
    return false;
  }

  return true;
}

function sanitizeLocalPath(urlPath) {
  const decodedPath = decodeURIComponent((urlPath || "/").split("?")[0]);
  const relativePath = decodedPath === "/" ? "index.html" : decodedPath.replace(/^\/+/, "");
  const normalized = path.normalize(relativePath);

  if (normalized.startsWith("..") || path.isAbsolute(normalized) || !isAllowedPublicPath(normalized)) {
    return null;
  }

  const absolutePath = path.join(ROOT, normalized);
  const resolvedRoot = path.resolve(ROOT) + path.sep;
  const resolvedPath = path.resolve(absolutePath);

  if (!resolvedPath.startsWith(resolvedRoot) && resolvedPath !== path.resolve(ROOT)) {
    return null;
  }

  return resolvedPath;
}

async function getPdfBrowser() {
  if (!pdfBrowserPromise) {
    const executablePath = findBrowserExecutable();

    pdfBrowserPromise = chromium.launch({
      executablePath,
      headless: true,
      args: [
        "--disable-background-networking",
        "--disable-dev-shm-usage",
        "--disable-extensions",
        "--disable-sync",
        "--no-first-run",
      ],
    }).then((browser) => {
      browser.on("disconnected", () => {
        pdfBrowserPromise = null;
      });
      return browser;
    }).catch((error) => {
      pdfBrowserPromise = null;
      throw error;
    });
  }

  return pdfBrowserPromise;
}

async function closePdfBrowser() {
  const browserPromise = pdfBrowserPromise;
  pdfBrowserPromise = null;

  if (!browserPromise) {
    return;
  }

  try {
    const browser = await browserPromise;
    await browser.close();
  } catch (_error) {
    // Ignore shutdown cleanup failures.
  }
}

async function fulfillExportAsset(route) {
  const request = route.request();

  if (request.method() !== "GET") {
    await route.continue();
    return;
  }

  let requestUrl = null;

  try {
    requestUrl = new URL(request.url());
  } catch (_error) {
    await route.abort();
    return;
  }

  const filePath = sanitizeLocalPath(requestUrl.pathname);

  if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (request.resourceType() === "image") {
      await route.continue();
      return;
    }

    await route.abort();
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const mimeType = MIME_TYPES[extension] || "application/octet-stream";
  const fileBuffer = await fs.promises.readFile(filePath);

  await route.fulfill({
    status: 200,
    headers: {
      "Content-Type": mimeType,
      "Cache-Control": "public, max-age=31536000",
    },
    body: fileBuffer,
  });
}

function waitForNetworkAssets(page, timeoutMs = PDF_ASSET_READY_TIMEOUT_MS) {
  return page.evaluate(async (assetTimeoutMs) => {
    const timeoutPromise = new Promise((resolve) => {
      window.setTimeout(resolve, Math.max(1000, Number(assetTimeoutMs) || 1000));
    });
    const imagePromises = Array.from(document.images || []).map((image) => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const done = () => {
          image.removeEventListener("load", done);
          image.removeEventListener("error", done);
          resolve();
        };

        image.addEventListener("load", done, { once: true });
        image.addEventListener("error", done, { once: true });
      });
    });

    const fontPromise = document.fonts && document.fonts.ready
      ? document.fonts.ready.catch(() => undefined)
      : Promise.resolve();

    await Promise.race([
      Promise.all([fontPromise, ...imagePromises]),
      timeoutPromise,
    ]);
  }, timeoutMs);
}

async function exportPdfFromHtml(html) {
  const browser = await getPdfBrowser();
  const context = await browser.newContext({
    viewport: {
      width: 1440,
      height: 900,
    },
    deviceScaleFactor: 1,
  });

  try {
    context.setDefaultTimeout(PDF_EXPORT_TIMEOUT_MS);
    context.setDefaultNavigationTimeout(PDF_EXPORT_TIMEOUT_MS);
    await context.route("**/*", fulfillExportAsset);

    const page = await context.newPage();

    await page.setContent(String(html || ""), {
      waitUntil: "domcontentloaded",
      timeout: PDF_EXPORT_TIMEOUT_MS,
    });
    await waitForNetworkAssets(page);
    await page.emulateMedia({
      media: "print",
    });

    const pdfBuffer = await page.pdf({
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
      timeout: PDF_EXPORT_TIMEOUT_MS,
    });

    return pdfBuffer;
  } finally {
    await context.close();
  }
}

function collectRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let totalLength = 0;

    request.on("data", (chunk) => {
      totalLength += chunk.length;

      if (totalLength > MAX_REQUEST_BODY_BYTES) {
        reject(new Error("Request body is too large."));
        request.destroy();
        return;
      }

      chunks.push(chunk);
    });

    request.on("end", () => {
      resolve(Buffer.concat(chunks).toString("utf8"));
    });

    request.on("error", reject);
  });
}

function parseLoginPayload(rawBody, contentType) {
  const normalizedType = String(contentType || "").toLowerCase();

  if (normalizedType.includes("application/json")) {
    const payload = JSON.parse(rawBody || "{}");
    return {
      password: String(payload.password || ""),
      next: normalizeNextPath(payload.next),
    };
  }

  const params = new URLSearchParams(rawBody || "");
  return {
    password: String(params.get("password") || ""),
    next: normalizeNextPath(params.get("next")),
  };
}

async function handleLogin(request, response) {
  const rawBody = await collectRequestBody(request);
  const payload = parseLoginPayload(rawBody, request.headers["content-type"]);

  if (!verifyPassword(payload.password)) {
    sendHtml(response, 401, renderLoginPage(payload.next, "Password is incorrect."));
    return;
  }

  redirect(response, payload.next || "/", 303, {
    "Set-Cookie": buildAuthCookie(createSessionToken(), request),
  });
}

function handleLogout(request, response) {
  redirect(response, LOGIN_PATH, 303, {
    "Set-Cookie": buildLogoutCookie(request),
  });
}

function normalizeGeneratedMarkdown(value) {
  return normalizeRedundantHtmlBreaksOutsideFences(String(value || "")
    .replace(/\r\n?/g, "\n")
    .replace(/^```(?:markdown|md)?\s*\n/i, "")
    .replace(/\n```\s*$/i, ""))
    .trim();
}

function getChatCompletionText(payload) {
  const choice = payload && Array.isArray(payload.choices) ? payload.choices[0] : null;
  const messageContent = choice && choice.message ? choice.message.content : "";

  if (Array.isArray(messageContent)) {
    return messageContent
      .map((part) => {
        if (typeof part === "string") {
          return part;
        }

        return part && typeof part.text === "string" ? part.text : "";
      })
      .join("");
  }

  return String(messageContent || "");
}

function buildStudyNotesMessages({ subject, topic, sourceText }) {
  const subjectLabel = subject || "CPA经济法";
  const topicLabel = topic || "第一章";

  return [
    {
      role: "system",
      content: [
        "你是一名${subjectLabel}考试辅导老师，擅长将教材、各个主流机构的培训、真题等结合考试大纲整理成高密度、可背诵、适合制作知识卡片的结构化学习笔记。",
        "只输出 Markdown 正文，不要输出解释、寒暄、脚注、来源说明或代码围栏。",
      ].join("\n"),
    },
    {
      role: "user",
      content: [
        `考试/学科：${subjectLabel}`,
        `章节/主题：${topicLabel}`,
        "",
        "请生成一份结构化考试学习笔记，严格遵循以下要求。",
        "",
        "一、输出结构（按此顺序）",
        `1. # ${topicLabel} 章节标题`,
        "2. 考情概述：使用表格，包含三列：考试分值、考查形式、复习权重",
        "3. 核心考点：至少3个，必须完整覆盖本章重点内容",
        "4. 本章知识导图",
        "5. 备考建议",
        "",
        "二、考情概述",
        "必须使用下列表格格式：",
        "",
        "| 考试分值 | 考查形式 | 复习权重 |",
        "|---|---|---|",
        "| 待补充 | 待补充 | 待补充 |",
        "",
        "三、核心考点",
        "每个考点标题必须使用二级标题，格式为：",
        "## 考点X：考点名称 ⭐⭐",
        "",
        "星级标准：",
        "- ⭐⭐⭐：高频核心，必背",
        "- ⭐⭐：中频重要，常考",
        "- ⭐：低频了解，偶尔出现",
        "",
        "每个考点内部必须严格按以下顺序输出；标签名称不可改：",
        "",
        "一句话：用{{red:文字}}标记最核心结论。",
        "",
        "定义：",
        ":::brush-mist",
        "用简洁语言解释概念。定义中的关键概念可用{{blue:文字}}标记。",
        ":::",
        "",
        "核心要素：",
        "- 要素1",
        "- 要素2",
        "- 要素3",
        "",
        "对比/分类：",
        "如教材中存在可比较、可分类、易混淆的内容，必须用表格呈现；如无可比内容，则省略本部分。",
        "表格列数控制在3～5列，表头简洁，单元格内容短小。",
        "",
        "经典真题/母题+解析：",
        "可根据教材内容设计典型母题，题目和解析必须紧扣教材，不得引入教材外知识。若该考点不适合出题，可省略本部分。",
        "",
        "易错提醒：",
        "必须使用{{brush-underline:文字}}标记易错点，语言要短、准、适合考前提醒。",
        "",
        "记忆口诀/结论：",
        "{{gold:用一句或几句高度压缩的话总结该考点，适合直接背诵。}}",
        "",
        "四、格式规范",
        "1. 标题层级只能使用：# 一级标题、## 二级标题、### 三级标题；禁止四级及以下标题。",
        "2. 颜色标记仅允许使用：{{blue:文字}}、{{red:文字}}、{{green:文字}}、{{gold:文字}}、{{brush-underline:文字}}。",
        "3. 特殊区块仅允许使用：:::brush-mist、:::brush-tag、:::mindmap、:::brush-tip。",
        "4. 定义性内容整段必须用:::brush-mist包裹。",
        "5. 重要总结整段可用:::brush-tag包裹。",
        "6. 表格仅用于对比、分类、条件关系；列数3～5列，表头简洁，单元格内容短小。",
        "7. 每段只讲一个意思，避免长段落、重复解释、无关例子。",
        "8. 禁止出现HTML标签、脚注、解释性开场白或结尾说明。",
        "",
        "五、本章知识导图",
        "必须使用以下格式，且:::mindmap内部只能使用无序列表，不得出现表格、编号、颜色标记或解释性段落：",
        "",
        "本章知识导图：",
        ":::mindmap",
        "- 一级知识点",
        "  - 二级知识点",
        "  - 二级知识点",
        "- 一级知识点",
        "  - 二级知识点",
        ":::",
        "",
        "六、备考建议",
        "必须使用以下格式：",
        "",
        "备考建议：",
        ":::brush-tip",
        "用简洁语言说明本章复习优先级、背诵重点、易错点和做题策略。",
        ":::",
        "",
        "七、生成前自检",
        "- 是否只依据教材内容",
        "- 是否至少包含3个核心考点",
        "- 每个考点是否包含固定标签且顺序正确",
        "- 星级是否符合重要程度",
        "- 定义是否使用:::brush-mist",
        "- 易错提醒是否使用{{brush-underline:文字}}",
        "- 记忆结论是否整段使用{{gold:文字}}",
        "- 本章知识导图是否只包含无序列表",
        "- 是否没有HTML标签、脚注和多余说明",
        "",
        "【教材原文】",
        "<<<",
        sourceText,
        ">>>",
      ].join("\n"),
    },
  ];
}

async function callStudyNotesModel({ subject, topic, sourceText }) {
  if (!LLM_API_KEY) {
    throw new Error("缺少 LLM_API_KEY 或 OPENAI_API_KEY。请在 .env.local 或启动命令里配置后重启服务。");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), LLM_TIMEOUT_MS);

  try {
    const response = await fetch(LLM_CHAT_COMPLETIONS_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LLM_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        messages: buildStudyNotesMessages({ subject, topic, sourceText }),
        temperature: 0.25,
        max_tokens: LLM_MAX_TOKENS,
      }),
      signal: controller.signal,
    });

    const responseText = await response.text();
    let payload = {};

    try {
      payload = responseText ? JSON.parse(responseText) : {};
    } catch (_error) {
      payload = {};
    }

    if (!response.ok) {
      const message = payload && payload.error && payload.error.message
        ? payload.error.message
        : `LLM request failed with status ${response.status}.`;
      throw new Error(message);
    }

    return normalizeGeneratedMarkdown(getChatCompletionText(payload));
  } catch (error) {
    if (error && error.name === "AbortError") {
      throw new Error("大模型请求超时。请缩短原始资料，或调大 LLM_TIMEOUT_MS。");
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function handleGenerateStudyNotes(request, response) {
  const rawBody = await collectRequestBody(request);
  const payload = JSON.parse(rawBody || "{}");
  const subject = String(payload.subject || "").trim().slice(0, 80);
  const topic = String(payload.topic || "").trim().slice(0, 120);
  const sourceText = String(payload.sourceText || "").trim();

  if (!sourceText) {
    sendJson(response, 400, {
      error: "缺少原始资料。",
    });
    return;
  }

  if (sourceText.length > MAX_STUDY_NOTES_SOURCE_CHARS) {
    sendJson(response, 400, {
      error: `原始资料过长，请控制在 ${MAX_STUDY_NOTES_SOURCE_CHARS} 字以内。`,
    });
    return;
  }

  const markdown = await callStudyNotesModel({
    sourceText,
    subject,
    topic,
  });

  if (!markdown) {
    sendJson(response, 502, {
      error: "大模型返回了空内容。",
    });
    return;
  }

  sendJson(response, 200, {
    markdown,
  });
}

async function handleExportPdf(request, response) {
  const rawBody = await collectRequestBody(request);
  const payload = JSON.parse(rawBody || "{}");
  const fileName = String(payload.fileName || "export.pdf").replace(/[\\/:*?\"<>|]/g, "-");
  const html = String(payload.html || "");

  if (!html.trim()) {
    sendJson(response, 400, {
      error: "Missing export HTML.",
    });
    return;
  }

  const pdfBuffer = await exportPdfFromHtml(html);

  setCorsHeaders(response);
  response.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${encodeURIComponent(fileName)}"`,
    "Content-Length": pdfBuffer.length,
    "Cache-Control": "no-store",
  });
  response.end(pdfBuffer);
}

function handleStaticFile(requestUrl, response) {
  const filePath = sanitizeLocalPath(requestUrl.pathname);

  if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    sendJson(response, 404, {
      error: "Not found.",
    });
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const mimeType = MIME_TYPES[extension] || "application/octet-stream";
  const fileBuffer = fs.readFileSync(filePath);

  setCorsHeaders(response);
  response.writeHead(200, {
    "Content-Type": mimeType,
    "Content-Length": fileBuffer.length,
    "Cache-Control": "no-store",
  });
  response.end(fileBuffer);
}

function handleAuthenticationGate(request, response, requestUrl) {
  if (shouldBypassAuth(requestUrl.pathname)) {
    return false;
  }

  if (isAuthenticated(request)) {
    return false;
  }

  if (requestUrl.pathname.startsWith("/api/")) {
    sendJson(response, 401, {
      error: "Authentication required.",
      loginUrl: LOGIN_PATH,
    });
    return true;
  }

  const next = normalizeNextPath(`${requestUrl.pathname}${requestUrl.search || ""}`);
  redirect(response, `${LOGIN_PATH}?next=${encodeURIComponent(next)}`);
  return true;
}

const server = http.createServer(async (request, response) => {
  try {
    if (!request.url) {
      sendJson(response, 400, {
        error: "Invalid request.",
      });
      return;
    }

    const requestUrl = getRequestUrl(request);

    if (request.method === "OPTIONS") {
      setCorsHeaders(response);
      response.writeHead(204);
      response.end();
      return;
    }

    if (requestUrl.pathname === "/health") {
      sendJson(response, 200, {
        ok: true,
      });
      return;
    }

    if (request.method === "GET" && requestUrl.pathname === LOGIN_PATH) {
      if (isAuthenticated(request)) {
        redirect(response, normalizeNextPath(requestUrl.searchParams.get("next")));
        return;
      }

      sendHtml(response, 200, renderLoginPage(requestUrl.searchParams.get("next")));
      return;
    }

    if (request.method === "POST" && requestUrl.pathname === LOGIN_PATH) {
      await handleLogin(request, response);
      return;
    }

    if (request.method === "GET" && requestUrl.pathname === LOGOUT_PATH) {
      handleLogout(request, response);
      return;
    }

    if (handleAuthenticationGate(request, response, requestUrl)) {
      return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/export-pdf") {
      await handleExportPdf(request, response);
      return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/generate-study-notes") {
      await handleGenerateStudyNotes(request, response);
      return;
    }

    if (request.method === "GET") {
      handleStaticFile(requestUrl, response);
      return;
    }

    sendJson(response, 405, {
      error: "Method not allowed.",
    });
  } catch (error) {
    sendJson(response, 500, {
      error: error && error.message ? error.message : "Unexpected server error.",
    });
  }
});

server.requestTimeout = Math.max(server.requestTimeout || 0, PDF_EXPORT_TIMEOUT_MS + 60000);
server.headersTimeout = Math.max(server.headersTimeout || 0, PDF_EXPORT_TIMEOUT_MS + 65000);

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.once(signal, async () => {
    await closePdfBrowser();
    process.exit(0);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Layout For XHS server running at http://${HOST}:${PORT}`);
});
