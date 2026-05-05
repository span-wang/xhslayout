# API v1 接口文档

本接口用于外部系统接入当前 Markdown 排版工具。当前服务默认运行在：

```txt
http://127.0.0.1:3210
```

如使用其他端口，请以实际启动地址为准。

## 通用约定

- 请求和响应均使用 UTF-8。
- JSON 请求请使用 `Content-Type: application/json; charset=utf-8`。
- 成功响应统一结构：

```json
{
  "success": true,
  "data": {}
}
```

- 失败响应统一结构：

```json
{
  "success": false,
  "error": {
    "message": "错误信息"
  }
}
```

## 1. 获取模式列表

```http
GET /api/v1/modes
```

用于前端或外部系统获取当前可用模式。后续新增模式后，此接口会自动返回新模式。

### 响应示例

```json
{
  "success": true,
  "data": [
    {
      "id": "knowledge",
      "name": "知识卡片",
      "title": "知识卡片模式",
      "summary": "同一考点集中成块，适合讲义式速读。",
      "highlights": ["考点集中", "题签清楚", "信息更密"],
      "sort": 10,
      "enabled": true,
      "renderMode": "knowledge",
      "templateVersion": "2026-05-04.1",
      "updatedAt": "2026-05-04T00:00:00.000Z",
      "templateUrl": "/api/v1/modes/knowledge/markdown-template",
      "templateAbsoluteUrl": "http://127.0.0.1:3210/api/v1/modes/knowledge/markdown-template"
    }
  ]
}
```

### 字段说明

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 模式唯一标识，只允许小写字母、数字、短横线 |
| `name` | string | 前端按钮显示名称 |
| `title` | string | 完整模式名称 |
| `summary` | string | 模式说明 |
| `highlights` | string[] | 模式亮点 |
| `sort` | number | 排序值，越小越靠前 |
| `enabled` | boolean | 是否启用 |
| `renderMode` | string | 复用的排版引擎，可选 `knowledge`、`lecture`、`question`、`exam`、`article` |
| `templateVersion` | string | 模板版本 |
| `updatedAt` | string | 更新时间 |
| `templateUrl` | string | 当前模式模板接口 |

## 2. 获取单个模式 Markdown 生成模板

```http
GET /api/v1/modes/:modeId/markdown-template
```

例如：

```http
GET /api/v1/modes/knowledge/markdown-template
```

此接口返回完整提示词模板，包含：

- 本项目支持的 Markdown 语法
- 禁止输出规则
- 当前模式的结构要求
- `{{sourceContent}}` 原始资料占位符

### 响应示例

```json
{
  "success": true,
  "data": {
    "modeId": "knowledge",
    "modeName": "知识卡片",
    "modeTitle": "知识卡片模式",
    "renderMode": "knowledge",
    "templateVersion": "2026-05-04.1",
    "syntaxVersion": "2026-05-04.1",
    "updatedAt": "2026-05-04T00:00:00.000Z",
    "syntax": "# 本项目 Markdown 输出规则\n...",
    "modeTemplate": "你是一个文档整理助手...",
    "template": "# 本项目 Markdown 输出规则\n...\n# 知识卡片模式生成模板\n...",
    "placeholders": [
      {
        "key": "sourceContent",
        "label": "原始资料",
        "required": true
      }
    ]
  }
}
```

### 字段说明

| 字段 | 类型 | 说明 |
|---|---|---|
| `syntax` | string | 公共语法说明，列出本项目支持的 Markdown 方言 |
| `modeTemplate` | string | 当前模式自己的结构模板 |
| `template` | string | 完整可用模板，等于 `syntax + modeTemplate` |
| `placeholders` | array | 模板占位符说明 |

调用方通常直接使用 `data.template`，将其中的 `{{sourceContent}}` 替换为原始资料后交给 AI。

## 3. 批量获取所有模式模板

```http
GET /api/v1/markdown-templates
```

用于一次性获取所有启用模式的完整模板。模板文本较长，普通前端页面建议优先按需调用单模式模板接口。

### 响应示例

```json
{
  "success": true,
  "data": [
    {
      "modeId": "knowledge",
      "modeName": "知识卡片",
      "templateVersion": "2026-05-04.1",
      "syntaxVersion": "2026-05-04.1",
      "template": "# 本项目 Markdown 输出规则\n..."
    }
  ]
}
```

## 4. 接收 Markdown 文档

```http
POST /api/v1/markdown-documents
```

用于外部系统把已生成或已整理好的 Markdown 推给排版工具。

### JSON 请求示例

```json
{
  "markdown": "# 接口测试\n\n这是一段 Markdown。",
  "modeId": "lecture",
  "title": "接口测试",
  "source": "external-app",
  "metadata": {
    "courseId": "course_001",
    "userId": "user_001",
    "tags": ["CPA", "经济法"]
  }
}
```

### 响应示例

```json
{
  "success": true,
  "data": {
    "id": "doc_20260504115627_800ae428",
    "title": "接口测试",
    "modeId": "lecture",
    "modeName": "精读讲义",
    "markdown": "# 接口测试\n\n这是一段 Markdown。",
    "stats": {
      "characters": 22,
      "lines": 3
    },
    "source": "external-app",
    "metadata": {
      "courseId": "course_001"
    },
    "createdAt": "2026-05-04T11:56:27.524Z"
  }
}
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `markdown` | string | 是 | Markdown 正文，最大 5MB |
| `modeId` | string | 否 | 模式 id，不传则使用默认模式 |
| `title` | string | 否 | 文档标题，不传则从第一个 `#` 标题提取 |
| `source` | string | 否 | 来源标识 |
| `metadata` | object | 否 | 外部系统自定义元数据 |

也支持 `Content-Type: text/markdown` 或 `text/plain` 直接提交 Markdown 正文，此时模式使用默认模式。

## 新增模式方法

新增模式只需要增加两个文件。

### 1. 新增模式注册文件

路径：

```txt
data/modes/new-mode.json
```

示例：

```json
{
  "id": "case-study",
  "name": "案例分析",
  "title": "案例分析模式",
  "summary": "适合案例背景、争议焦点、分析路径和结论整理。",
  "highlights": ["背景清楚", "焦点突出", "结论可扫"],
  "sort": 60,
  "enabled": true,
  "renderMode": "article",
  "templateFile": "case-study.md",
  "templateVersion": "2026-05-04.1",
  "updatedAt": "2026-05-04T00:00:00.000Z",
  "placeholders": [
    {
      "key": "sourceContent",
      "label": "原始资料",
      "required": true
    }
  ]
}
```

### 2. 新增模式模板文件

路径：

```txt
data/mode-templates/case-study.md
```

模板文件只写当前模式自己的结构要求即可，不需要重复写公共语法说明。接口会自动把 `data/mode-templates/_syntax.md` 拼到返回的 `template` 字段前面。

示例：

```md
你是一个案例分析整理助手。请把我提供的原始资料整理成适合本项目【案例分析模式】的 Markdown。

结构要求：

1. 使用 `#` 写案例主题。
2. 使用 `## 背景`、`## 争议焦点`、`## 分析路径`、`## 结论` 组织内容。
3. 关键结论使用 `{{gold:文字}}`。
4. 易错或易混点使用 `{{brush-underline:文字}}`。

原始资料：

{{sourceContent}}
```

刷新页面或重新请求 `GET /api/v1/modes` 后，新模式会自动出现在前端模式列表中。
