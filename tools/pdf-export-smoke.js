const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = require(path.join(root, "app.js"));

async function main() {
  const sourcePath = path.join(root, "sample.md");
  const outputHtmlPath = path.join(root, "tools", ".tmp-export.html");
  const outputRequestPath = path.join(root, "tools", ".tmp-export-request.json");
  const markdown = fs.readFileSync(sourcePath, "utf8");
  const title = "Smoke Export";
  const articleHtml = app.renderMarkdownToHtml(markdown, {
    mode: "knowledge",
  });
  const html = app.buildExportHtml(articleHtml, title, {
    title,
    documentTitle: title,
    mode: "knowledge",
    theme: "oat",
    layoutPreset: "knowledge-index",
    questionAnswerLayout: "compact",
    pageWidth: 210,
    pageHeight: 297,
    pageMarginTop: 18,
    pageMarginRight: 16,
    pageMarginBottom: 18,
    pageMarginLeft: 16,
    pageHeaderEnabled: true,
    pageHeaderText: title,
    watermarkEnabled: false,
    watermarkText: "",
    exportBackgroundSrc: "",
    exportBackgroundName: "",
    customFonts: [],
  });

  fs.writeFileSync(outputHtmlPath, html, "utf8");
  fs.writeFileSync(outputRequestPath, JSON.stringify({
    fileName: "smoke-export.pdf",
    html,
  }), "utf8");
  console.log(outputHtmlPath);
  console.log(outputRequestPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
