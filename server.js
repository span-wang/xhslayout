const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const mysql = require("mysql2/promise");
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
const PDF_EXPORT_SCALE = 1.5;
const PNG_EXPORT_TIMEOUT_MS = Math.max(30000, Number(process.env.PNG_EXPORT_TIMEOUT_MS) || 180000);
const PNG_EXPORT_DEVICE_SCALE_FACTOR = Math.max(1, Math.min(3, Number(process.env.PNG_EXPORT_DEVICE_SCALE_FACTOR) || 2));
const LOGIN_PATH = "/login";
const LOGOUT_PATH = "/logout";
const LLM_API_KEY = process.env.LLM_API_KEY || process.env.OPENAI_API_KEY || "";
const LLM_BASE_URL = process.env.LLM_BASE_URL || process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
const LLM_CHAT_COMPLETIONS_URL = process.env.LLM_CHAT_COMPLETIONS_URL || buildChatCompletionsUrl(LLM_BASE_URL);
const LLM_MODEL = process.env.LLM_MODEL || process.env.OPENAI_MODEL || "gpt-4o-mini";
const LLM_MAX_TOKENS = Number(process.env.LLM_MAX_TOKENS || 6500);
const LLM_TIMEOUT_MS = Number(process.env.LLM_TIMEOUT_MS || 90000);
const LLM_PROMPT_CACHE_KEY = String(process.env.LLM_PROMPT_CACHE_KEY || process.env.OPENAI_PROMPT_CACHE_KEY || "").trim();
const LLM_PROMPT_CACHE_RETENTION = String(process.env.LLM_PROMPT_CACHE_RETENTION || process.env.OPENAI_PROMPT_CACHE_RETENTION || "").trim();
const LLM_ENABLE_PROMPT_CACHE = parseEnvBoolean(process.env.LLM_ENABLE_PROMPT_CACHE || process.env.OPENAI_ENABLE_PROMPT_CACHE);
const MYSQL_HOST = String(process.env.MYSQL_HOST || "127.0.0.1").trim() || "127.0.0.1";
const MYSQL_PORT = Math.max(1, Number(process.env.MYSQL_PORT || 3306) || 3306);
const MYSQL_USER = String(process.env.MYSQL_USER || "").trim();
const MYSQL_PASSWORD = String(process.env.MYSQL_PASSWORD || "");
const MYSQL_DATABASE = String(process.env.MYSQL_DATABASE || "layout_for_xhs").trim() || "layout_for_xhs";
const MYSQL_CHARSET = String(process.env.MYSQL_CHARSET || "utf8mb4").trim() || "utf8mb4";
const MYSQL_CONNECT_TIMEOUT_MS = Math.max(1000, Number(process.env.MYSQL_CONNECT_TIMEOUT_MS || 10000) || 10000);
const LAYOUT_HISTORY_TABLE = "layout_history_entries";
const LAYOUT_HISTORY_MAX_ENTRIES = 24;
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
let mysqlReadyPromise = null;

function buildZipCrc32Table() {
  const table = new Uint32Array(256);

  for (let index = 0; index < table.length; index += 1) {
    let value = index;

    for (let bit = 0; bit < 8; bit += 1) {
      value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
    }

    table[index] = value >>> 0;
  }

  return table;
}

const ZIP_CRC32_TABLE = buildZipCrc32Table();

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

function parseEnvBoolean(value) {
  if (typeof value !== "string") {
    return false;
  }

  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
}

function shouldAttachPromptCacheOptions() {
  return LLM_ENABLE_PROMPT_CACHE && (
    /^https:\/\/api\.openai\.com(?:\/|$)/i.test(LLM_BASE_URL)
    || /^https:\/\/api\.openai\.com(?:\/|$)/i.test(LLM_CHAT_COMPLETIONS_URL)
  );
}

function buildPromptCacheOptions() {
  if (!shouldAttachPromptCacheOptions()) {
    return {};
  }

  const options = {};

  if (LLM_PROMPT_CACHE_KEY) {
    options.prompt_cache_key = LLM_PROMPT_CACHE_KEY;
  }

  if (LLM_PROMPT_CACHE_RETENTION) {
    options.prompt_cache_retention = LLM_PROMPT_CACHE_RETENTION;
  }

  return options;
}

function quoteMysqlIdentifier(value) {
  return `\`${String(value || "").replace(/`/g, "``")}\``;
}

function normalizeLayoutHistorySnapshot(snapshot = {}) {
  return snapshot && typeof snapshot === "object" && !Array.isArray(snapshot) ? snapshot : {};
}

function normalizeLayoutHistoryEntryPayload(entry = {}) {
  const markdown = String(entry.markdown || "").replace(/\r\n?/g, "\n").trim();

  if (!markdown) {
    return null;
  }

  const source = entry.source === "manual" ? "manual" : "auto";
  const snapshot = normalizeLayoutHistorySnapshot(entry.snapshot);
  const savedAtValue = Number(entry.savedAt);
  const savedAtDate = Number.isFinite(savedAtValue) ? new Date(savedAtValue) : new Date();
  const savedAt = Number.isNaN(savedAtDate.getTime()) ? new Date() : savedAtDate;
  const idCandidate = String(entry.id || "").trim();

  return {
    id: idCandidate || `layout-history-${savedAt.getTime()}-${crypto.randomBytes(4).toString("hex")}`,
    name: String(entry.name || "").trim().slice(0, 120),
    title: String(entry.title || "").trim().slice(0, 120),
    summary: String(entry.summary || "").trim().slice(0, 500),
    markdown,
    savedAt,
    source,
    snapshot,
  };
}

function mapLayoutHistoryRow(row = {}) {
  return {
    id: String(row.id || ""),
    name: String(row.name || ""),
    title: String(row.title || ""),
    summary: String(row.summary || ""),
    markdown: String(row.markdown || ""),
    savedAt: row.saved_at instanceof Date
      ? row.saved_at.getTime()
      : Number.isFinite(Number(row.saved_at))
        ? Number(row.saved_at)
        : Date.now(),
    source: row.source === "manual" ? "manual" : "auto",
    snapshot: normalizeLayoutHistorySnapshot(row.snapshot_json),
  };
}

async function withMysqlConnection(config, callback) {
  const connection = await mysql.createConnection({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
    charset: config.charset,
    connectTimeout: config.connectTimeoutMs,
    timezone: "local",
  });

  try {
    return await callback(connection);
  } finally {
    await connection.end();
  }
}

function getMysqlRuntimeConfig(includeDatabase = true) {
  if (!MYSQL_USER) {
    throw new Error("Missing MYSQL_USER. Please configure MySQL credentials in .env.local.");
  }

  return {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: includeDatabase ? MYSQL_DATABASE : undefined,
    charset: MYSQL_CHARSET,
    connectTimeoutMs: MYSQL_CONNECT_TIMEOUT_MS,
  };
}

function ensureMysqlReady() {
  if (!mysqlReadyPromise) {
    mysqlReadyPromise = (async () => {
      await withMysqlConnection(getMysqlRuntimeConfig(false), async (connection) => {
        await connection.query(`
          CREATE DATABASE IF NOT EXISTS ${quoteMysqlIdentifier(MYSQL_DATABASE)}
          CHARACTER SET ${MYSQL_CHARSET}
          COLLATE ${MYSQL_CHARSET}_unicode_ci
        `);
      });

      await withMysqlConnection(getMysqlRuntimeConfig(true), async (connection) => {
        await connection.query(`
          CREATE TABLE IF NOT EXISTS ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)} (
            id VARCHAR(64) NOT NULL,
            name VARCHAR(120) NOT NULL DEFAULT '',
            title VARCHAR(120) NOT NULL DEFAULT '',
            summary VARCHAR(500) NOT NULL DEFAULT '',
            markdown LONGTEXT NOT NULL,
            saved_at DATETIME(3) NOT NULL,
            source ENUM('auto','manual') NOT NULL DEFAULT 'auto',
            snapshot_json JSON NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY idx_layout_history_saved_at (saved_at DESC)
          ) ENGINE=InnoDB DEFAULT CHARSET=${MYSQL_CHARSET} COLLATE=${MYSQL_CHARSET}_unicode_ci
        `);
      });
    })().catch((error) => {
      mysqlReadyPromise = null;
      throw error;
    });
  }

  return mysqlReadyPromise;
}

async function listLayoutHistoryEntries() {
  await ensureMysqlReady();

  return withMysqlConnection(getMysqlRuntimeConfig(true), async (connection) => {
    const [rows] = await connection.query(`
      SELECT id, name, title, summary, markdown, saved_at, source, snapshot_json
      FROM ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}
      ORDER BY saved_at DESC, updated_at DESC
      LIMIT ${LAYOUT_HISTORY_MAX_ENTRIES}
    `);
    return rows.map(mapLayoutHistoryRow);
  });
}

async function upsertLayoutHistoryEntry(entry) {
  const normalized = normalizeLayoutHistoryEntryPayload(entry);

  if (!normalized) {
    throw new Error("Missing layout history markdown.");
  }

  await ensureMysqlReady();

  return withMysqlConnection(getMysqlRuntimeConfig(true), async (connection) => {
    const [existingRows] = await connection.query(`
      SELECT id
      FROM ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}
      WHERE markdown = ?
        AND source = ?
        AND JSON_UNQUOTE(JSON_EXTRACT(snapshot_json, '$.mode')) = ?
        AND JSON_UNQUOTE(JSON_EXTRACT(snapshot_json, '$.layoutPreset')) = ?
        AND JSON_UNQUOTE(JSON_EXTRACT(snapshot_json, '$.theme')) = ?
        AND JSON_UNQUOTE(JSON_EXTRACT(snapshot_json, '$.questionAnswerLayout')) = ?
      ORDER BY saved_at DESC, updated_at DESC
      LIMIT 1
    `, [
      normalized.markdown,
      normalized.source,
      String(normalized.snapshot.mode || ""),
      String(normalized.snapshot.layoutPreset || ""),
      String(normalized.snapshot.theme || ""),
      String(normalized.snapshot.questionAnswerLayout || ""),
    ]);

    if (existingRows.length) {
      normalized.id = String(existingRows[0].id || normalized.id);
    }

    await connection.query(`
      INSERT INTO ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}
        (id, name, title, summary, markdown, saved_at, source, snapshot_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, CAST(? AS JSON))
      ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        title = VALUES(title),
        summary = VALUES(summary),
        markdown = VALUES(markdown),
        saved_at = VALUES(saved_at),
        source = VALUES(source),
        snapshot_json = VALUES(snapshot_json)
    `, [
      normalized.id,
      normalized.name,
      normalized.title,
      normalized.summary,
      normalized.markdown,
      normalized.savedAt,
      normalized.source,
      JSON.stringify(normalized.snapshot),
    ]);

    await connection.query(`
      DELETE FROM ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}
      WHERE id NOT IN (
        SELECT id FROM (
          SELECT id
          FROM ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}
          ORDER BY saved_at DESC, updated_at DESC
          LIMIT ${LAYOUT_HISTORY_MAX_ENTRIES}
        ) AS latest_entries
      )
    `);

    const [rows] = await connection.query(`
      SELECT id, name, title, summary, markdown, saved_at, source, snapshot_json
      FROM ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}
      WHERE id = ?
      LIMIT 1
    `, [normalized.id]);

    return rows.length ? mapLayoutHistoryRow(rows[0]) : mapLayoutHistoryRow(normalized);
  });
}

async function deleteLayoutHistoryEntry(entryId) {
  const normalizedId = String(entryId || "").trim();

  if (!normalizedId) {
    throw new Error("Missing layout history id.");
  }

  await ensureMysqlReady();

  return withMysqlConnection(getMysqlRuntimeConfig(true), async (connection) => {
    await connection.query(`
      DELETE FROM ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}
      WHERE id = ?
    `, [normalizedId]);
  });
}

async function clearLayoutHistoryEntries() {
  await ensureMysqlReady();

  return withMysqlConnection(getMysqlRuntimeConfig(true), async (connection) => {
    await connection.query(`TRUNCATE TABLE ${quoteMysqlIdentifier(LAYOUT_HISTORY_TABLE)}`);
  });
}

async function handleLayoutHistoryRequest(request, response, requestUrl) {
  if (request.method === "GET") {
    sendJson(response, 200, {
      entries: await listLayoutHistoryEntries(),
    });
    return;
  }

  if (request.method === "POST") {
    const rawBody = await collectRequestBody(request);
    const payload = JSON.parse(rawBody || "{}");
    const entry = await upsertLayoutHistoryEntry(payload.entry || payload);

    sendJson(response, 200, {
      entry,
    });
    return;
  }

  if (request.method === "DELETE") {
    const entryId = String(requestUrl.searchParams.get("id") || "").trim();

    if (entryId) {
      await deleteLayoutHistoryEntry(entryId);
      sendJson(response, 200, {
        ok: true,
      });
      return;
    }

    await clearLayoutHistoryEntries();
    sendJson(response, 200, {
      ok: true,
    });
    return;
  }

  sendJson(response, 405, {
    error: "Method not allowed.",
  });
}

function getPublicErrorMessage(error) {
  if (!error) {
    return "Unexpected server error.";
  }

  if (typeof error.message === "string" && error.message.trim()) {
    if (
      error.message.includes("MYSQL_")
      || error.message.includes("MySQL")
      || error.message.includes("layout history")
    ) {
      return error.message;
    }
  }

  if (error && (error.code === "ER_ACCESS_DENIED_ERROR" || error.code === "ER_BAD_DB_ERROR")) {
    return "MySQL connection failed. Please check MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE in .env.local.";
  }

  return error.message || "Unexpected server error.";
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

async function withExportPage(html, options, callback) {
  const browser = await getPdfBrowser();
  const context = await browser.newContext({
    viewport: {
      width: 1440,
      height: 900,
    },
    deviceScaleFactor: Math.max(1, Number(options && options.deviceScaleFactor) || 1),
  });

  try {
    const timeoutMs = Math.max(1000, Number(options && options.timeoutMs) || PDF_EXPORT_TIMEOUT_MS);

    context.setDefaultTimeout(timeoutMs);
    context.setDefaultNavigationTimeout(timeoutMs);
    await context.route("**/*", fulfillExportAsset);

    const page = await context.newPage();

    await page.setContent(String(html || ""), {
      waitUntil: "domcontentloaded",
      timeout: timeoutMs,
    });
    await waitForNetworkAssets(page);
    return await callback(page, timeoutMs);
  } finally {
    await context.close();
  }
}

async function exportPdfFromHtml(html) {
  return withExportPage(html, {
    timeoutMs: PDF_EXPORT_TIMEOUT_MS,
    deviceScaleFactor: 1,
  }, async (page, timeoutMs) => {
    await page.emulateMedia({
      media: "print",
    });

    return page.pdf({
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      scale: PDF_EXPORT_SCALE,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
      timeout: timeoutMs,
    });
  });
}

function getZipCrc32(bytes) {
  let crc = 0xffffffff;

  for (let index = 0; index < bytes.length; index += 1) {
    crc = ZIP_CRC32_TABLE[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function writeZipUint16(target, offset, value) {
  target[offset] = value & 0xff;
  target[offset + 1] = (value >>> 8) & 0xff;
}

function writeZipUint32(target, offset, value) {
  target[offset] = value & 0xff;
  target[offset + 1] = (value >>> 8) & 0xff;
  target[offset + 2] = (value >>> 16) & 0xff;
  target[offset + 3] = (value >>> 24) & 0xff;
}

function getZipDateTime(date = new Date()) {
  const year = Math.max(1980, Math.min(2107, Number(date.getFullYear()) || 1980));
  const month = Math.max(1, Math.min(12, (Number(date.getMonth()) || 0) + 1));
  const day = Math.max(1, Math.min(31, Number(date.getDate()) || 1));
  const hours = Math.max(0, Math.min(23, Number(date.getHours()) || 0));
  const minutes = Math.max(0, Math.min(59, Number(date.getMinutes()) || 0));
  const seconds = Math.max(0, Math.min(29, Math.floor((Number(date.getSeconds()) || 0) / 2)));

  return {
    date: ((year - 1980) << 9) | (month << 5) | day,
    time: (hours << 11) | (minutes << 5) | seconds,
  };
}

function buildZipBuffer(entries) {
  const encoder = new TextEncoder();
  const zipDateTime = getZipDateTime();
  const chunks = [];
  const centralDirectory = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(String(entry.name || "file"));
    const dataBytes = Buffer.isBuffer(entry.data) ? entry.data : Buffer.from(entry.data || []);
    const crc32 = getZipCrc32(dataBytes);
    const localHeader = Buffer.alloc(30 + nameBytes.length);
    const localOffset = offset;

    writeZipUint32(localHeader, 0, 0x04034b50);
    writeZipUint16(localHeader, 4, 20);
    writeZipUint16(localHeader, 6, 0x0800);
    writeZipUint16(localHeader, 8, 0);
    writeZipUint16(localHeader, 10, zipDateTime.time);
    writeZipUint16(localHeader, 12, zipDateTime.date);
    writeZipUint32(localHeader, 14, crc32);
    writeZipUint32(localHeader, 18, dataBytes.length);
    writeZipUint32(localHeader, 22, dataBytes.length);
    writeZipUint16(localHeader, 26, nameBytes.length);
    writeZipUint16(localHeader, 28, 0);
    Buffer.from(nameBytes).copy(localHeader, 30);

    chunks.push(localHeader, dataBytes);
    offset += localHeader.length + dataBytes.length;

    const centralHeader = Buffer.alloc(46 + nameBytes.length);

    writeZipUint32(centralHeader, 0, 0x02014b50);
    writeZipUint16(centralHeader, 4, 20);
    writeZipUint16(centralHeader, 6, 20);
    writeZipUint16(centralHeader, 8, 0x0800);
    writeZipUint16(centralHeader, 10, 0);
    writeZipUint16(centralHeader, 12, zipDateTime.time);
    writeZipUint16(centralHeader, 14, zipDateTime.date);
    writeZipUint32(centralHeader, 16, crc32);
    writeZipUint32(centralHeader, 20, dataBytes.length);
    writeZipUint32(centralHeader, 24, dataBytes.length);
    writeZipUint16(centralHeader, 28, nameBytes.length);
    writeZipUint16(centralHeader, 30, 0);
    writeZipUint16(centralHeader, 32, 0);
    writeZipUint16(centralHeader, 34, 0);
    writeZipUint16(centralHeader, 36, 0);
    writeZipUint32(centralHeader, 38, 0);
    writeZipUint32(centralHeader, 42, localOffset);
    Buffer.from(nameBytes).copy(centralHeader, 46);
    centralDirectory.push(centralHeader);
  }

  const centralDirectoryOffset = offset;
  const centralDirectorySize = centralDirectory.reduce((sum, chunk) => sum + chunk.length, 0);

  centralDirectory.forEach((chunk) => {
    chunks.push(chunk);
    offset += chunk.length;
  });

  const endRecord = Buffer.alloc(22);

  writeZipUint32(endRecord, 0, 0x06054b50);
  writeZipUint16(endRecord, 4, 0);
  writeZipUint16(endRecord, 6, 0);
  writeZipUint16(endRecord, 8, entries.length);
  writeZipUint16(endRecord, 10, entries.length);
  writeZipUint32(endRecord, 12, centralDirectorySize);
  writeZipUint32(endRecord, 16, centralDirectoryOffset);
  writeZipUint16(endRecord, 20, 0);
  chunks.push(endRecord);

  return Buffer.concat(chunks);
}

async function captureExportPages(page) {
  await page.emulateMedia({
    media: "screen",
  });

  const pageInfos = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".page-sheet")).map((element, index) => {
      const rect = element.getBoundingClientRect();
      return {
        index,
        width: Math.max(1, Math.round(rect.width)),
        height: Math.max(1, Math.round(rect.height)),
      };
    });
  });

  if (!pageInfos.length) {
    throw new Error("Missing paginated export pages.");
  }

  const results = [];

  for (const info of pageInfos) {
    const handle = await page.locator(".page-sheet").nth(info.index).elementHandle();

    if (!handle) {
      throw new Error(`Missing export page at index ${info.index}.`);
    }

    const pngBuffer = await handle.screenshot({
      type: "png",
      omitBackground: false,
    });
    await handle.dispose();
    results.push({
      ...info,
      pngBuffer,
    });
  }

  return results;
}

async function exportPngZipFromHtml(html, fileBaseName) {
  return withExportPage(html, {
    timeoutMs: PNG_EXPORT_TIMEOUT_MS,
    deviceScaleFactor: PNG_EXPORT_DEVICE_SCALE_FACTOR,
  }, async (page) => {
    const pages = await captureExportPages(page);
    const digitWidth = String(pages.length).length < 2 ? 2 : String(pages.length).length;
    const entries = [];

    for (const info of pages) {
      entries.push({
        name: `${fileBaseName}-${String(info.index + 1).padStart(digitWidth, "0")}.png`,
        data: info.pngBuffer,
      });
    }

    return {
      buffer: buildZipBuffer(entries),
      count: entries.length,
    };
  });
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
  const promptCacheOptions = buildPromptCacheOptions();

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
        ...promptCacheOptions,
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

async function handleExportPngZip(request, response) {
  const rawBody = await collectRequestBody(request);
  const payload = JSON.parse(rawBody || "{}");
  const requestedFileName = String(payload.fileName || "export.zip").replace(/[\\/:*?\"<>|]/g, "-");
  const html = String(payload.html || "");

  if (!html.trim()) {
    sendJson(response, 400, {
      error: "Missing export HTML.",
    });
    return;
  }

  const zipFileName = requestedFileName.toLowerCase().endsWith(".zip") ? requestedFileName : `${requestedFileName}.zip`;
  const fileBaseName = zipFileName.replace(/\.zip$/i, "") || "export";
  const result = await exportPngZipFromHtml(html, fileBaseName);

  setCorsHeaders(response);
  response.writeHead(200, {
    "Content-Type": "application/zip",
    "Content-Disposition": `attachment; filename="${encodeURIComponent(zipFileName)}"`,
    "Content-Length": result.buffer.length,
    "Cache-Control": "no-store",
    "X-Export-Page-Count": String(result.count),
  });
  response.end(result.buffer);
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

    if (request.method === "POST" && requestUrl.pathname === "/api/export-png-zip") {
      await handleExportPngZip(request, response);
      return;
    }

    if (request.method === "POST" && requestUrl.pathname === "/api/generate-study-notes") {
      await handleGenerateStudyNotes(request, response);
      return;
    }

    if (requestUrl.pathname === "/api/layout-history") {
      await handleLayoutHistoryRequest(request, response, requestUrl);
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
      error: getPublicErrorMessage(error),
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
