# Markdown 自动排版工具

一个零依赖的本地网页工具。输入 Markdown 文档后，会自动生成接近参考图风格的学习笔记排版，适合课程笔记、知识卡片、题目讲解和长图文案整理。

## 使用方式

1. 直接用浏览器打开 [index.html](c:\Users\panshimao\IdeaProjects\Layout_For_Xhs\index.html)。
2. 在左侧输入或粘贴 Markdown，右侧会实时生成排版预览。
3. 可以切换三种模式：知识卡片模式、题目模式、文章模式。
4. 可以切换四套低饱和马卡龙配色：奶油杏、雾粉桃、鼠尾草、灰雾蓝。
5. 可以自己调节字体大小和行距，控制知识密度。
6. 可以在左侧输入框选中文本后点击笔刷按钮，自动插入重点标记语法。
7. 可以点击“导入 Markdown”加载本地 `.md` 文件。
8. 可以点击“导出 HTML”保存独立的排版文章，也可以点击“打印 / PDF”输出 PDF。

## 已支持的 Markdown 能力

- 标题：`#`、`##`、`###`
- 段落、引用、无序列表、有序列表
- 代码块：<code>\`\`\`</code>
- 表格
- 图片：`![说明](图片地址)`

## 扩展语法

### 彩色重点词

```md
{{red:重点}}
{{blue:术语}}
{{green:提示}}
{{gold:结论}}
==荧光笔==
```

### 笔刷标记

```md
{{brush-glow:重点句}}
{{brush-mist:核心定义}}
{{brush-underline:易错点}}
{{brush-tag:结论}}
```

### 段落笔刷

```md
:::brush-tag
这一整段会被渲染成重点知识段落。
:::
```

### 树状导图块

```md
:::mindmap 职能
- 基本职能
  - 核算职能
  - 监督职能
- 拓展职能
  - 预测经济前景
  - 参与经济决策
:::
```

## 模式说明

- 知识卡片模式：更适合知识点分块展示，默认知识密度更高，并会让定义、公式、结论类内容以更紧凑的卡片单元呈现。
- 题目模式：二级标题作为题型（如单选题、多选题、简答题），每道题用正文题号呈现为 `1.题目内容`；可在“逐题答案”和“答案后置”之间切换，答案与解析会合并到题目下方的答案块。
- 文章模式：正文留白更舒展，会突出导语段，并让背景、观点、案例这类内容更适合连续阅读。

## 主题说明

- 奶油杏：偏暖、最接近参考图的纸张感。
- 雾粉桃：柔和粉调，适合偏轻甜的知识卡片。
- 鼠尾草：安静低饱和绿色，适合课程笔记。
- 灰雾蓝：更冷静、更克制的阅读氛围。

## 示例文件

- 示例 Markdown：[sample.md](c:\Users\panshimao\IdeaProjects\Layout_For_Xhs\sample.md)
- 主页面：[index.html](c:\Users\panshimao\IdeaProjects\Layout_For_Xhs\index.html)
- 样式文件：[styles.css](c:\Users\panshimao\IdeaProjects\Layout_For_Xhs\styles.css)
- 渲染脚本：[app.js](c:\Users\panshimao\IdeaProjects\Layout_For_Xhs\app.js)
