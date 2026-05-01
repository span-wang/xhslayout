const STORAGE_KEYS = {
  markdown: "layout-for-xhs-markdown",
  theme: "layout-for-xhs-theme",
  mode: "layout-for-xhs-mode",
  questionAnswerLayout: "layout-for-xhs-question-answer-layout",
  bodyFontFamily: "layout-for-xhs-body-font-family",
  headingFontFamily: "layout-for-xhs-heading-font-family",
  paragraphAlign: "layout-for-xhs-paragraph-align",
  fontSize: "layout-for-xhs-font-size",
  heading1Size: "layout-for-xhs-heading1-size",
  heading2Size: "layout-for-xhs-heading2-size",
  heading3Size: "layout-for-xhs-heading3-size",
  heading4Size: "layout-for-xhs-heading4-size",
  tableFontSize: "layout-for-xhs-table-font-size",
  accentFontSize: "layout-for-xhs-accent-font-size",
  mindmapNodeWidth: "layout-for-xhs-mindmap-node-width",
  lineHeight: "layout-for-xhs-line-height",
  letterSpacing: "layout-for-xhs-letter-spacing",
  paragraphSpacing: "layout-for-xhs-paragraph-spacing",
  paragraphIndent: "layout-for-xhs-paragraph-indent",
  heading1LineHeight: "layout-for-xhs-heading1-line-height",
  heading2LineHeight: "layout-for-xhs-heading2-line-height",
  heading3LineHeight: "layout-for-xhs-heading3-line-height",
  heading4LineHeight: "layout-for-xhs-heading4-line-height",
  headingSpaceH1: "layout-for-xhs-heading-space-h1",
  headingSpaceH2: "layout-for-xhs-heading-space-h2",
  headingSpaceH3: "layout-for-xhs-heading-space-h3",
  headingSpaceH4: "layout-for-xhs-heading-space-h4",
  pageWidth: "layout-for-xhs-page-width",
  pageHeight: "layout-for-xhs-page-height",
  pageMarginTop: "layout-for-xhs-page-margin-top",
  pageMarginRight: "layout-for-xhs-page-margin-right",
  pageMarginBottom: "layout-for-xhs-page-margin-bottom",
  pageMarginLeft: "layout-for-xhs-page-margin-left",
  pageHeaderEnabled: "layout-for-xhs-page-header-enabled",
  pageHeaderText: "layout-for-xhs-page-header-text",
  watermarkEnabled: "layout-for-xhs-watermark-enabled",
  watermarkText: "layout-for-xhs-watermark-text",
  watermarkOpacity: "layout-for-xhs-watermark-opacity",
  exportBackgroundSrc: "layout-for-xhs-export-background-src",
  exportBackgroundName: "layout-for-xhs-export-background-name",
  elementStyles: "layout-for-xhs-element-styles",
  paginationStrategy: "layout-for-xhs-pagination-strategy",
  ribbonTab: "layout-for-xhs-ribbon-tab",
  layoutPreset: "layout-for-xhs-layout-preset",
  layoutPresetByMode: "layout-for-xhs-layout-preset-by-mode",
  tableLayouts: "layout-for-xhs-table-layouts",
  cardLayouts: "layout-for-xhs-card-layouts",
  cardOrder: "layout-for-xhs-card-order",
  typographyVersion: "layout-for-xhs-typography-version",
};

const THEME_LABELS = {
  oat: "奶油杏",
  blush: "雾粉桃",
  sage: "鼠尾草",
  mist: "灰雾蓝",
};

const MODE_METADATA = {
  knowledge: {
    title: "知识卡片模式",
    summary: "同一考点集中成块，适合讲义式速读。",
    highlights: [
      "考点集中",
      "题签清楚",
      "信息更密",
    ],
  },
  question: {
    title: "题目模式",
    summary: "题干、答案、解析分层展开，适合逐题复盘。",
    highlights: [
      "题号清楚",
      "答案分层",
      "复盘更快",
    ],
  },
  article: {
    title: "文章模式",
    summary: "保留长文节奏，适合教程和正文阅读。",
    highlights: [
      "导语突出",
      "节奏更顺",
      "适合长文",
    ],
  },
};

const MODE_LAYOUT_PRESETS = Object.freeze({
  knowledge: Object.freeze([
    Object.freeze({
      id: "knowledge-index",
      label: "\u7d22\u5f15\u5361",
      summary: "\u5de6\u4fa7\u7d22\u5f15\u7ebf\uff0c\u5185\u5bb9\u5757\u50cf\u8d44\u6599\u5361\u7247",
    }),
    Object.freeze({
      id: "knowledge-brief",
      label: "\u8bb2\u4e49\u9875",
      summary: "\u8f7b\u8fb9\u6846\u548c\u7ec6\u5206\u9694\uff0c\u9002\u5408\u9ad8\u5bc6\u5ea6\u7b14\u8bb0",
    }),
    Object.freeze({
      id: "knowledge-archive",
      label: "\u6863\u6848\u7eb8",
      summary: "\u9875\u7709\u6807\u5c3a\u548c\u76f4\u89d2\u5757\uff0c\u66f4\u50cf\u53ef\u5b58\u6863\u8bb0\u5f55",
    }),
    Object.freeze({
      id: "knowledge-botanical",
      label: "\u8349\u672c\u8fb9\u6ce8",
      summary: "\u53f6\u7247\u8fb9\u6ce8\u548c\u67d4\u548c\u89d2\u6807\uff0c\u9002\u5408\u6e05\u723d\u77e5\u8bc6\u6574\u7406",
    }),
    Object.freeze({
      id: "knowledge-lunar",
      label: "\u6708\u76f8\u6863\u6848",
      summary: "\u6708\u76f8\u9875\u7709\u548c\u6863\u6848\u7f16\u53f7\u611f\uff0c\u9002\u5408\u514b\u5236\u51b7\u9759\u7684\u6750\u6599",
    }),
    Object.freeze({
      id: "knowledge-pencil-lab",
      label: "铅笔研究室",
      summary: "铅笔、短尺和星点页眉，适合条理清晰的知识整理",
    }),
    Object.freeze({
      id: "knowledge-cream-post",
      label: "奶油邮票",
      summary: "邮戳齿孔与贴纸角标，适合柔和但精致的知识卡片",
    }),
    Object.freeze({
      id: "knowledge-blueprint",
      label: "蓝图档案",
      summary: "坐标点和圆规弧线，适合结构化知识与参数表",
    }),
    Object.freeze({
      id: "knowledge-cherry-ink",
      label: "樱桃墨水",
      summary: "深樱桃红小章与墨滴，适合醒目但克制的重点笔记",
    }),
    Object.freeze({
      id: "knowledge-ledger",
      label: "复古票据",
      summary: "票根编号和借阅卡纹样，适合资料归档和清单式笔记",
    }),
    Object.freeze({
      id: "knowledge-snowpeak",
      label: "雪岭档案",
      summary: "远山、雪点和冰蓝索引条，适合清透克制的知识整理",
    }),
    Object.freeze({
      id: "knowledge-spring-shoot",
      label: "新芽讲义",
      summary: "竹笋、叶签和浅绿节点，适合轻盈向上的分层笔记",
    }),
    Object.freeze({
      id: "knowledge-autumn-note",
      label: "秋日索引卡",
      summary: "枫叶、麦穗和旧书签，适合成熟温暖的复习提纲",
    }),
  ]),
  question: Object.freeze([
    Object.freeze({
      id: "question-proof",
      label: "\u89e3\u9898\u7a3f",
      summary: "\u9898\u5e72\u548c\u89e3\u6790\u5206\u5c42\uff0c\u6b65\u9aa4\u7ebf\u66f4\u6e05\u695a",
    }),
    Object.freeze({
      id: "question-sheet",
      label: "\u7ec3\u4e60\u5377",
      summary: "\u9875\u9762\u7ec6\u6846\u548c\u9898\u5757\u5e95\u7ebf\uff0c\u66f4\u50cf\u6253\u5370\u8bd5\u5377",
    }),
    Object.freeze({
      id: "question-review",
      label: "\u590d\u76d8\u5361",
      summary: "\u7b54\u6848\u3001\u9677\u9631\u3001\u603b\u7ed3\u533a\u5206\u66f4\u660e\u786e",
    }),
    Object.freeze({
      id: "question-botanical",
      label: "\u53f6\u7b7e\u89e3\u6790",
      summary: "\u53f6\u7247\u6807\u7b7e\u4e32\u8d77\u9898\u5e72\u4e0e\u89e3\u6790\uff0c\u590d\u76d8\u66f4\u8f7b\u76c8",
    }),
    Object.freeze({
      id: "question-lunar",
      label: "\u6708\u76f8\u6821\u6837",
      summary: "\u6708\u76f8\u6807\u5c3a\u548c\u6df1\u84dd\u9898\u5757\uff0c\u6b65\u9aa4\u66f4\u50cf\u6821\u5bf9\u7a3f",
    }),
    Object.freeze({
      id: "question-pencil-lab",
      label: "铅笔解题室",
      summary: "演算格、铅笔编号和步骤贴纸，适合逐题拆解",
    }),
    Object.freeze({
      id: "question-cream-post",
      label: "奶油邮答案",
      summary: "邮票页码和信封标签，让答案解析像轻复盘卡",
    }),
    Object.freeze({
      id: "question-blueprint",
      label: "蓝图演算稿",
      summary: "蓝图编号、测量点和模块框，适合公式步骤与推导",
    }),
    Object.freeze({
      id: "question-cherry-ink",
      label: "樱桃批改稿",
      summary: "红章、墨点和醒目答案区，适合错题与重点提示",
    }),
    Object.freeze({
      id: "question-ledger",
      label: "复古练习票",
      summary: "票据编号和分栏线，适合试卷感复盘",
    }),
    Object.freeze({
      id: "question-snowpeak",
      label: "雪岭解题路",
      summary: "登顶路线感步骤框，适合冷静拆解题干与解析",
    }),
    Object.freeze({
      id: "question-spring-shoot",
      label: "春笋复盘卡",
      summary: "嫩绿答案区和竹节标签，适合错题生长式复盘",
    }),
    Object.freeze({
      id: "question-autumn-note",
      label: "秋日错题本",
      summary: "暗红批注与麦色提示区，适合稳重的错题归纳",
    }),
  ]),
  article: Object.freeze([
    Object.freeze({
      id: "article-editorial",
      label: "\u4e13\u680f\u7a3f",
      summary: "\u7a84\u9875\u7709\u548c\u957f\u7ebf\u6807\u9898\uff0c\u9002\u5408\u6559\u7a0b\u578b\u957f\u6587",
    }),
    Object.freeze({
      id: "article-report",
      label: "\u7814\u62a5\u9875",
      summary: "\u6bb5\u843d\u8282\u594f\u7a33\uff0c\u8868\u683c\u548c\u5f15\u7528\u5757\u66f4\u5229\u843d",
    }),
    Object.freeze({
      id: "article-journal",
      label: "\u624b\u8bb0\u9875",
      summary: "\u8f7b\u7eb8\u611f\u548c\u5c0f\u6807\u7b7e\uff0c\u4fdd\u7559\u9605\u8bfb\u6e29\u5ea6",
    }),
    Object.freeze({
      id: "article-botanical",
      label: "\u8349\u672c\u672d\u8bb0",
      summary: "\u690d\u7269\u5c0f\u6807\u548c\u7559\u767d\u6807\u9898\uff0c\u9002\u5408\u6e29\u67d4\u4f46\u6e05\u6670\u7684\u957f\u6587",
    }),
    Object.freeze({
      id: "article-lunar",
      label: "\u6708\u76f8\u957f\u6587",
      summary: "\u51b7\u7070\u7eb8\u9762\u4e0e\u6708\u76f8\u89d2\u6807\uff0c\u9002\u5408\u66f4\u514b\u5236\u7684\u6559\u7a0b\u6587\u7ae0",
    }),
    Object.freeze({
      id: "article-pencil-lab",
      label: "铅笔专栏稿",
      summary: "手稿页眉与细腻铅笔边框，适合教程长文",
    }),
    Object.freeze({
      id: "article-cream-post",
      label: "奶油邮简报",
      summary: "邮戳页脚和轻贴纸标题，适合温柔叙事型文章",
    }),
    Object.freeze({
      id: "article-blueprint",
      label: "蓝图长报告",
      summary: "工程图纸式标题与表格，适合严谨报告和教程",
    }),
    Object.freeze({
      id: "article-cherry-ink",
      label: "樱桃墨专栏",
      summary: "樱桃红章与黑白正文形成清爽重点层次",
    }),
    Object.freeze({
      id: "article-ledger",
      label: "复古票据文",
      summary: "借阅卡与票根元素，适合资料型长文和清单文章",
    }),
    Object.freeze({
      id: "article-snowpeak",
      label: "雪岭长报告",
      summary: "冰蓝远山页眉和报告式标题，适合冷静严谨的长文",
    }),
    Object.freeze({
      id: "article-spring-shoot",
      label: "新芽札记",
      summary: "竹青边注和浅绿便签，适合温柔清新的学习文章",
    }),
    Object.freeze({
      id: "article-autumn-note",
      label: "秋日札记",
      summary: "暖纸感、枫叶角标和书签页码，适合复盘与读书笔记",
    }),
  ]),
});

const DEFAULT_LAYOUT_PRESET_BY_MODE = Object.freeze({
  knowledge: "knowledge-index",
  question: "question-proof",
  article: "article-editorial",
});

const LAYOUT_PRESET_LABELS = Object.freeze(
  Object.keys(MODE_LAYOUT_PRESETS).reduce((labels, mode) => {
    MODE_LAYOUT_PRESETS[mode].forEach((preset) => {
      labels[preset.id] = preset.label;
    });
    return labels;
  }, {}),
);

const BRUSH_LABELS = {
  glow: "柔光刷",
  mist: "雾面刷",
  underline: "下划刷",
  tag: "题签刷",
  tip: "提示刷",
};

const INLINE_STYLE_OPTIONS = {
  bold: {
    label: "加粗",
    tagName: "strong",
    wrapper: "**",
  },
  italic: {
    label: "斜体",
    tagName: "em",
    wrapper: "*",
  },
  underline: {
    label: "下划线",
    tagName: "u",
    wrapper: "++",
  },
  strikethrough: {
    label: "删除线",
    tagName: "del",
    wrapper: "~~",
  },
  code: {
    label: "行内代码",
    tagName: "code",
    wrapper: "`",
  },
};

const FONT_FAMILY_OPTIONS = {
  sans: {
    label: "雅黑",
    stack: '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif',
  },
  serif: {
    label: "宋体",
    stack: '"STSong", "Songti SC", "SimSun", "Noto Serif CJK SC", serif',
  },
  kaiti: {
    label: "楷体",
    stack: '"STKaiti", "KaiTi", "Kaiti SC", serif',
  },
  rounded: {
    label: "圆体",
    stack: '"YouYuan", "Microsoft YaHei", "PingFang SC", sans-serif',
  },
  xingkai: {
    label: "行楷",
    stack: '"STXingkai", "华文行楷", "Xingkai SC", "HanziPen SC", "Kaiti SC", "STKaiti", "KaiTi", cursive',
  },
  wenkai: {
    label: "文楷",
    stack: '"LXGW WenKai", "霞鹜文楷", "Kaiti SC", "STKaiti", "KaiTi", "SimKai", serif',
  },
  pen: {
    label: "钢笔",
    stack: '"HanziPen SC", "HanziPen TC", "Yuanti SC", "YouYuan", "STKaiti", "KaiTi", cursive',
  },
  notehand: {
    label: "手札",
    stack: '"Hannotate SC", "Hannotate TC", "HanziPen SC", "Kaiti SC", "STKaiti", "KaiTi", cursive',
  },
  xinwei: {
    label: "新魏",
    stack: '"STXinwei", "华文新魏", "FZShuTi", "方正舒体", "STXingkai", "华文行楷", cursive',
  },
  shuti: {
    label: "舒体",
    stack: '"FZShuTi", "方正舒体", "STXinwei", "华文新魏", "STKaiti", "KaiTi", cursive',
  },
  yaoti: {
    label: "姚体",
    stack: '"FZYaoti", "方正姚体", "YouYuan", "Microsoft YaHei", "PingFang SC", cursive',
  },
  handwriting: {
    label: "手写",
    stack: '"LXGW WenKai", "霞鹜文楷", "HanziPen SC", "Yuanti SC", "YouYuan", "STKaiti", "KaiTi", cursive',
  },
};

const PARAGRAPH_ALIGN_OPTIONS = {
  left: "左对齐",
  justify: "两端对齐",
  center: "居中",
  right: "右对齐",
};

const PREVIEW_INLINE_FONT_SIZE_OPTIONS = [12, 14, 16, 18, 20, 22, 24, 28, 32];
const PREVIEW_TEXT_COLOR_SWATCHES = ["#1f2933", "#204a73", "#9f3f36", "#355d4d", "#8b5d3b", "#7b4e91"];
const INLINE_TEXT_STYLE_TOKEN = "text-style";
const BLOCK_TEXT_STYLE_TOKEN = "block-style";
const BLOCK_CONTROL_TOKEN = "block";

const TABLE_SKIP_TOKEN = "{{table-skip}}";

const DEFAULT_THEME = "oat";
const DEFAULT_MODE = "knowledge";
const QUESTION_ANSWER_LAYOUTS = Object.freeze({
  inline: Object.freeze({
    label: "逐题答案",
    summary: "每道题后紧跟答案与解析",
  }),
  separated: Object.freeze({
    label: "答案后置",
    summary: "先集中展示题目，末尾统一汇总答案解析",
  }),
});
const DEFAULT_QUESTION_ANSWER_LAYOUT = "inline";
const DEFAULT_BODY_FONT_FAMILY = "sans";
const DEFAULT_HEADING_FONT_FAMILY = "sans";
const DEFAULT_PARAGRAPH_ALIGN = "left";
const DEFAULT_FONT_SIZE = 16;
const DEFAULT_HEADING1_SIZE = 34;
const DEFAULT_HEADING2_SIZE = 21;
const DEFAULT_HEADING3_SIZE = 17;
const DEFAULT_HEADING4_SIZE = 16;
const DEFAULT_TABLE_FONT_SIZE = 14;
const DEFAULT_TABLE_LINE_HEIGHT = 1.2;
const DEFAULT_ACCENT_FONT_SIZE = 14;
const DEFAULT_MINDMAP_NODE_WIDTH = 220;
const DEFAULT_LINE_HEIGHT = 1.62;
const DEFAULT_LETTER_SPACING = 0;
const DEFAULT_PARAGRAPH_SPACING = 10;
const DEFAULT_PARAGRAPH_INDENT = 0;
const DEFAULT_HEADING1_LINE_HEIGHT = 1.18;
const DEFAULT_HEADING2_LINE_HEIGHT = 1.28;
const DEFAULT_HEADING3_LINE_HEIGHT = 1.34;
const DEFAULT_HEADING4_LINE_HEIGHT = 1.38;
const DEFAULT_HEADING_SPACE_H1 = 16;
const DEFAULT_HEADING_SPACE_H2 = 10;
const DEFAULT_HEADING_SPACE_H3 = 8;
const DEFAULT_HEADING_SPACE_H4 = 6;
const DEFAULT_PAGE_WIDTH = 210;
const DEFAULT_PAGE_HEIGHT = 297;
const DEFAULT_PAGE_MARGIN_TOP = 14;
const DEFAULT_PAGE_MARGIN_RIGHT = 12;
const DEFAULT_PAGE_MARGIN_BOTTOM = 14;
const DEFAULT_PAGE_MARGIN_LEFT = 12;
const DEFAULT_PAGE_HEADER_ENABLED = true;
const DEFAULT_PAGE_HEADER_TEXT = "";
const DEFAULT_WATERMARK_ENABLED = false;
const DEFAULT_WATERMARK_TEXT = "CONFIDENTIAL";
const DEFAULT_WATERMARK_OPACITY = 0.12;
const DEFAULT_EXPORT_BACKGROUND_SRC = "";
const DEFAULT_EXPORT_BACKGROUND_NAME = "";
const DEFAULT_PAGINATION_STRATEGY = "split-first";
const TYPOGRAPHY_BASELINE_VERSION = "2026-04-controlled-readable-scale";
const MAX_PERSISTED_BACKGROUND_LENGTH = 1500000;
const CUSTOM_FONT_DB_NAME = "layout-for-xhs-custom-fonts";
const CUSTOM_FONT_DB_VERSION = 1;
const CUSTOM_FONT_STORE_NAME = "fonts";
const CUSTOM_FONT_KEY_PREFIX = "custom-font-";
const EXPORT_BACKGROUND_PRESETS = Object.freeze(createExportBackgroundPresets());
const DEFAULT_RIBBON_TAB = "home";
const PAGINATION_STRATEGIES = Object.freeze({
  "split-first": Object.freeze({
    label: "贴线分割",
    summary: "越线后先分割当前元素，只有手动分页符可提前分页。",
  }),
  "block-first": Object.freeze({
    label: "整块优先",
    summary: "越线后先尝试整块换页，整块仍放不下再分割。",
  }),
});
const LEGACY_COMPACT_DEFAULTS = Object.freeze({
  lineHeight: [1.48, 1.55],
  headingSpaceH1: 20,
  headingSpaceH2: 12,
  headingSpaceH3: 6,
});
let customFontEntries = [];
const loadedCustomFontKeys = new Set();
const READABLE_TYPOGRAPHY_BASELINE = Object.freeze({
  fontSize: DEFAULT_FONT_SIZE,
  heading1Size: DEFAULT_HEADING1_SIZE,
  heading2Size: DEFAULT_HEADING2_SIZE,
  heading3Size: DEFAULT_HEADING3_SIZE,
  heading4Size: DEFAULT_HEADING4_SIZE,
  tableFontSize: DEFAULT_TABLE_FONT_SIZE,
  accentFontSize: DEFAULT_ACCENT_FONT_SIZE,
  mindmapNodeWidth: DEFAULT_MINDMAP_NODE_WIDTH,
  lineHeight: DEFAULT_LINE_HEIGHT,
  letterSpacing: DEFAULT_LETTER_SPACING,
  paragraphSpacing: DEFAULT_PARAGRAPH_SPACING,
  paragraphIndent: DEFAULT_PARAGRAPH_INDENT,
  heading1LineHeight: DEFAULT_HEADING1_LINE_HEIGHT,
  heading2LineHeight: DEFAULT_HEADING2_LINE_HEIGHT,
  heading3LineHeight: DEFAULT_HEADING3_LINE_HEIGHT,
  heading4LineHeight: DEFAULT_HEADING4_LINE_HEIGHT,
  headingSpaceH1: DEFAULT_HEADING_SPACE_H1,
  headingSpaceH2: DEFAULT_HEADING_SPACE_H2,
  headingSpaceH3: DEFAULT_HEADING_SPACE_H3,
  headingSpaceH4: DEFAULT_HEADING_SPACE_H4,
});
const PAGE_HEADER_HEIGHT_MM = 6;
const PAGE_HEADER_GAP_MM = 2;
const PAGE_LAYOUT_FIT_TOLERANCE_PX = 2;
const PAGE_LAYOUT_SAFETY_PX = 4;
const PAGE_FOOTER_LOGO_HEIGHT_PX = 30;
const PAGE_FOOTER_LOGO_GAP_PX = 4;
const PARAGRAPH_PAGINATION_MIN_TEXT_LENGTH = 36;
const PARAGRAPH_PAGINATION_MIN_FRAGMENT_CHARS = 12;
const QUESTION_PAGINATION_FRAGMENT_END_CLASSES = Object.freeze([
  "question-card-fragment-end",
  "question-answer-item-fragment-end",
  "question-answer-box-fragment-end",
]);
const QUESTION_PAGINATION_FRAGMENT_START_CLASSES = Object.freeze([
  "question-card-fragment-start",
  "question-card-fragment-heading",
  "question-answer-item-fragment-start",
  "question-answer-item-fragment-heading",
  "question-answer-box-fragment-start",
]);
const MIN_TABLE_COLUMN_WIDTH = 72;
const MAX_TABLE_ROW_HEIGHT = 320;

function createSvgBackgroundDataUri(svgContent) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1528" viewBox="0 0 1080 1528" preserveAspectRatio="xMidYMid slice">${svgContent}</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createExportBackgroundPresets() {
  const presets = [
    {
      id: "plain-white",
      label: "\u5168\u767d",
      svg: `
        <rect width="1080" height="1528" fill="#ffffff"/>
      `,
    },
    {
      id: "red-white",
      label: "爆款红白",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fffefe"/>
            <stop offset="0.58" stop-color="#fff5f6"/>
            <stop offset="1" stop-color="#ffe8ec"/>
          </linearGradient>
          <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="#ff4d5f" stop-opacity="0.24"/>
            <stop offset="1" stop-color="#ff4d5f" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <circle cx="72" cy="130" r="300" fill="url(#redGlow)"/>
        <circle cx="1040" cy="1370" r="360" fill="url(#redGlow)"/>
        <path d="M0 318 C230 240 390 385 620 305 C790 247 930 228 1080 276 V0 H0 Z" fill="#ff5968" opacity="0.08"/>
        <path d="M96 216 H984" stroke="#e94757" stroke-opacity="0.12" stroke-width="3"/>
        <path d="M128 252 H520" stroke="#e94757" stroke-opacity="0.16" stroke-width="2"/>
      `,
    },
    {
      id: "cream-paper",
      label: "奶油纸感",
      svg: `
        <defs>
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="9" cy="12" r="1.6" fill="#d6b98e" opacity="0.16"/>
            <circle cx="30" cy="29" r="1.2" fill="#b88d58" opacity="0.12"/>
          </pattern>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#fffaf0"/>
            <stop offset="1" stop-color="#f7ead5"/>
          </linearGradient>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <rect width="1080" height="1528" fill="url(#dots)"/>
        <path d="M0 1280 C210 1214 418 1348 642 1284 C815 1234 945 1248 1080 1314 V1528 H0 Z" fill="#f0cfa6" opacity="0.18"/>
        <circle cx="940" cy="170" r="218" fill="#f4d8b8" opacity="0.24"/>
      `,
    },
    {
      id: "pink-mist",
      label: "粉雾渐变",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fff7fb"/>
            <stop offset="0.48" stop-color="#ffe6f1"/>
            <stop offset="1" stop-color="#fff0d8"/>
          </linearGradient>
          <radialGradient id="pink" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="#ff8fbc" stop-opacity="0.28"/>
            <stop offset="1" stop-color="#ff8fbc" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="peach" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="#ffc56f" stop-opacity="0.24"/>
            <stop offset="1" stop-color="#ffc56f" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <circle cx="240" cy="300" r="360" fill="url(#pink)"/>
        <circle cx="880" cy="1080" r="420" fill="url(#peach)"/>
        <circle cx="840" cy="320" r="190" fill="#ffffff" opacity="0.28"/>
        <path d="M120 1180 C280 1118 390 1242 548 1188 C668 1148 752 1118 906 1180" fill="none" stroke="#ffffff" stroke-width="22" stroke-opacity="0.32" stroke-linecap="round"/>
      `,
    },
    {
      id: "milk-tea-grid",
      label: "奶茶格纹",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fff9ee"/>
            <stop offset="1" stop-color="#f0dbc2"/>
          </linearGradient>
          <pattern id="grid" width="92" height="92" patternUnits="userSpaceOnUse">
            <path d="M0 0 H92 M0 46 H92 M0 0 V92 M46 0 V92" stroke="#a56f45" stroke-opacity="0.12" stroke-width="2"/>
          </pattern>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <rect width="1080" height="1528" fill="url(#grid)"/>
        <path d="M-90 310 C180 190 398 420 640 292 C816 199 960 210 1180 318" fill="none" stroke="#ffffff" stroke-width="58" stroke-opacity="0.42" stroke-linecap="round"/>
        <circle cx="950" cy="1240" r="260" fill="#c79265" opacity="0.12"/>
      `,
    },
    {
      id: "dopamine",
      label: "多巴胺彩点",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#fffdf8"/>
            <stop offset="1" stop-color="#f7fbff"/>
          </linearGradient>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <circle cx="140" cy="170" r="86" fill="#ff5a72" opacity="0.22"/>
        <circle cx="928" cy="260" r="132" fill="#ffd43b" opacity="0.24"/>
        <circle cx="842" cy="1260" r="182" fill="#5ec4ff" opacity="0.20"/>
        <circle cx="184" cy="1195" r="118" fill="#84db62" opacity="0.18"/>
        <circle cx="492" cy="132" r="42" fill="#9b7cff" opacity="0.16"/>
        <path d="M120 430 Q246 360 372 430 T624 430 T876 430" fill="none" stroke="#ff5a72" stroke-opacity="0.12" stroke-width="20" stroke-linecap="round"/>
        <path d="M160 1010 Q286 940 412 1010 T664 1010 T916 1010" fill="none" stroke="#5ec4ff" stroke-opacity="0.14" stroke-width="18" stroke-linecap="round"/>
      `,
    },
    {
      id: "sea-salt",
      label: "海盐蓝",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#f8fcff"/>
            <stop offset="0.58" stop-color="#eaf6ff"/>
            <stop offset="1" stop-color="#dcefff"/>
          </linearGradient>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <path d="M0 380 C180 320 300 430 482 372 C652 318 804 284 1080 350" fill="none" stroke="#78b9e9" stroke-width="56" stroke-opacity="0.12" stroke-linecap="round"/>
        <path d="M0 1240 C210 1188 332 1300 530 1246 C720 1194 884 1178 1080 1238" fill="none" stroke="#4da4de" stroke-width="64" stroke-opacity="0.12" stroke-linecap="round"/>
        <circle cx="900" cy="170" r="260" fill="#9bd5ff" opacity="0.18"/>
        <circle cx="180" cy="1360" r="240" fill="#bfe8ff" opacity="0.24"/>
      `,
    },
    {
      id: "mint-fresh",
      label: "薄荷绿",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fbfff9"/>
            <stop offset="0.54" stop-color="#eaf8ec"/>
            <stop offset="1" stop-color="#dff2e5"/>
          </linearGradient>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <path d="M126 248 C236 118 394 122 484 250 C350 276 242 330 126 248 Z" fill="#88c999" opacity="0.16"/>
        <path d="M876 1098 C986 968 1144 972 1234 1100 C1100 1126 992 1180 876 1098 Z" fill="#75bd89" opacity="0.16"/>
        <path d="M106 1064 C260 968 372 1110 528 1022 C646 956 736 956 884 1028" fill="none" stroke="#7ccf9a" stroke-width="34" stroke-opacity="0.14" stroke-linecap="round"/>
        <circle cx="892" cy="252" r="210" fill="#bfe8c9" opacity="0.26"/>
      `,
    },
    {
      id: "line-draft",
      label: "灰调线稿",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="1" stop-color="#f2f4f6"/>
          </linearGradient>
          <pattern id="lines" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M0 72 L72 0" stroke="#243447" stroke-opacity="0.05" stroke-width="2"/>
            <path d="M0 0 H72 V72" fill="none" stroke="#243447" stroke-opacity="0.045" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <rect width="1080" height="1528" fill="url(#lines)"/>
        <rect x="94" y="116" width="892" height="1296" rx="46" fill="none" stroke="#1f2933" stroke-width="4" stroke-opacity="0.05"/>
        <circle cx="926" cy="248" r="172" fill="#a7b3c2" opacity="0.12"/>
        <circle cx="180" cy="1288" r="210" fill="#d2d8df" opacity="0.18"/>
      `,
    },
    {
      id: "sticky-notes",
      label: "便签拼贴",
      svg: `
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fffdf7"/>
            <stop offset="1" stop-color="#f5f7ff"/>
          </linearGradient>
        </defs>
        <rect width="1080" height="1528" fill="url(#bg)"/>
        <rect x="78" y="122" width="250" height="170" rx="26" fill="#ffe58b" opacity="0.22" transform="rotate(-6 203 207)"/>
        <rect x="760" y="150" width="210" height="150" rx="24" fill="#ff9fbc" opacity="0.18" transform="rotate(7 865 225)"/>
        <rect x="118" y="1180" width="250" height="170" rx="26" fill="#8bd7ff" opacity="0.18" transform="rotate(5 243 1265)"/>
        <rect x="744" y="1188" width="240" height="168" rx="26" fill="#aee9ad" opacity="0.18" transform="rotate(-5 864 1272)"/>
        <path d="M120 430 H960" stroke="#20242a" stroke-opacity="0.05" stroke-width="4" stroke-linecap="round"/>
        <path d="M120 1038 H960" stroke="#20242a" stroke-opacity="0.05" stroke-width="4" stroke-linecap="round"/>
      `,
    },
  ];

  return Object.freeze(presets.map((preset) => Object.freeze({
    id: preset.id,
    label: preset.label,
    src: createSvgBackgroundDataUri(preset.svg),
  })));
}

function getExportBackgroundPreset(id) {
  const presetId = String(id || "");
  return EXPORT_BACKGROUND_PRESETS.find((preset) => preset.id === presetId) || null;
}

const RIBBON_TABS = {
  home: "home",
  layout: "layout",
  design: "design",
};

const ARTICLE_STYLE_CONTROLS = [
  {
    key: "fontSize",
    storageKey: STORAGE_KEYS.fontSize,
    inputId: "fontSizeRange",
    valueId: "fontSizeValue",
    cssVar: "--user-font-size",
    min: 0,
    max: 24,
    defaultValue: DEFAULT_FONT_SIZE,
  },
  {
    key: "heading1Size",
    storageKey: STORAGE_KEYS.heading1Size,
    inputId: "heading1SizeRange",
    valueId: "heading1SizeValue",
    cssVar: "--user-h1-size",
    min: 0,
    max: 64,
    defaultValue: DEFAULT_HEADING1_SIZE,
  },
  {
    key: "heading2Size",
    storageKey: STORAGE_KEYS.heading2Size,
    inputId: "heading2SizeRange",
    valueId: "heading2SizeValue",
    cssVar: "--user-h2-size",
    min: 0,
    max: 42,
    defaultValue: DEFAULT_HEADING2_SIZE,
  },
  {
    key: "heading3Size",
    storageKey: STORAGE_KEYS.heading3Size,
    inputId: "heading3SizeRange",
    valueId: "heading3SizeValue",
    cssVar: "--user-h3-size",
    min: 0,
    max: 34,
    defaultValue: DEFAULT_HEADING3_SIZE,
  },
  {
    key: "heading4Size",
    storageKey: STORAGE_KEYS.heading4Size,
    inputId: "heading4SizeRange",
    valueId: "heading4SizeValue",
    cssVar: "--user-h4-size",
    min: 0,
    max: 28,
    defaultValue: DEFAULT_HEADING4_SIZE,
  },
  {
    key: "tableFontSize",
    storageKey: STORAGE_KEYS.tableFontSize,
    inputId: "tableFontSizeRange",
    valueId: "tableFontSizeValue",
    cssVar: "--user-table-font-size",
    min: 0,
    max: 22,
    defaultValue: DEFAULT_TABLE_FONT_SIZE,
  },
  {
    key: "accentFontSize",
    storageKey: STORAGE_KEYS.accentFontSize,
    inputId: "accentFontSizeRange",
    valueId: "accentFontSizeValue",
    cssVar: "--user-accent-font-size",
    min: 0,
    max: 24,
    defaultValue: DEFAULT_ACCENT_FONT_SIZE,
  },
  {
    key: "mindmapNodeWidth",
    storageKey: STORAGE_KEYS.mindmapNodeWidth,
    inputId: "mindmapNodeWidthRange",
    valueId: "mindmapNodeWidthValue",
    cssVar: "--user-mindmap-node-width",
    min: 90,
    max: 320,
    defaultValue: DEFAULT_MINDMAP_NODE_WIDTH,
  },
];

const ARTICLE_PARAGRAPH_CONTROLS = [
  {
    key: "paragraphSpacing",
    storageKey: STORAGE_KEYS.paragraphSpacing,
    inputId: "paragraphSpacingRange",
    valueId: "paragraphSpacingValue",
    cssVar: "--user-paragraph-spacing",
    min: 0,
    max: 32,
    defaultValue: DEFAULT_PARAGRAPH_SPACING,
    formatValue: formatPixelValue,
  },
  {
    key: "paragraphIndent",
    storageKey: STORAGE_KEYS.paragraphIndent,
    inputId: "paragraphIndentRange",
    valueId: "paragraphIndentValue",
    cssVar: "--user-paragraph-indent",
    min: 0,
    max: 48,
    defaultValue: DEFAULT_PARAGRAPH_INDENT,
    formatValue: formatPixelValue,
  },
];

const HEADING_LINE_HEIGHT_CONTROLS = [
  {
    key: "heading1LineHeight",
    storageKey: STORAGE_KEYS.heading1LineHeight,
    inputId: "heading1LineHeightRange",
    valueId: "heading1LineHeightValue",
    cssVar: "--user-heading-h1-line-height",
    min: 0.8,
    max: 2.2,
    defaultValue: DEFAULT_HEADING1_LINE_HEIGHT,
    formatValue: formatLineHeight,
  },
  {
    key: "heading2LineHeight",
    storageKey: STORAGE_KEYS.heading2LineHeight,
    inputId: "heading2LineHeightRange",
    valueId: "heading2LineHeightValue",
    cssVar: "--user-heading-h2-line-height",
    min: 0.8,
    max: 2.2,
    defaultValue: DEFAULT_HEADING2_LINE_HEIGHT,
    formatValue: formatLineHeight,
  },
  {
    key: "heading3LineHeight",
    storageKey: STORAGE_KEYS.heading3LineHeight,
    inputId: "heading3LineHeightRange",
    valueId: "heading3LineHeightValue",
    cssVar: "--user-heading-h3-line-height",
    min: 0.8,
    max: 2.2,
    defaultValue: DEFAULT_HEADING3_LINE_HEIGHT,
    formatValue: formatLineHeight,
  },
  {
    key: "heading4LineHeight",
    storageKey: STORAGE_KEYS.heading4LineHeight,
    inputId: "heading4LineHeightRange",
    valueId: "heading4LineHeightValue",
    cssVar: "--user-heading-h4-line-height",
    min: 0.8,
    max: 2.2,
    defaultValue: DEFAULT_HEADING4_LINE_HEIGHT,
    formatValue: formatLineHeight,
  },
];

const HEADING_SPACE_CONTROLS = [
  {
    key: "headingSpaceH1",
    storageKey: STORAGE_KEYS.headingSpaceH1,
    inputId: "headingSpaceH1Range",
    valueId: "headingSpaceH1Value",
    cssVar: "--user-heading-h1-space",
    min: 0,
    max: 44,
    defaultValue: DEFAULT_HEADING_SPACE_H1,
    formatValue: formatPixelValue,
  },
  {
    key: "headingSpaceH2",
    storageKey: STORAGE_KEYS.headingSpaceH2,
    inputId: "headingSpaceH2Range",
    valueId: "headingSpaceH2Value",
    cssVar: "--user-heading-h2-space",
    min: 0,
    max: 36,
    defaultValue: DEFAULT_HEADING_SPACE_H2,
    formatValue: formatPixelValue,
  },
  {
    key: "headingSpaceH3",
    storageKey: STORAGE_KEYS.headingSpaceH3,
    inputId: "headingSpaceH3Range",
    valueId: "headingSpaceH3Value",
    cssVar: "--user-heading-h3-space",
    min: 0,
    max: 28,
    defaultValue: DEFAULT_HEADING_SPACE_H3,
    formatValue: formatPixelValue,
  },
  {
    key: "headingSpaceH4",
    storageKey: STORAGE_KEYS.headingSpaceH4,
    inputId: "headingSpaceH4Range",
    valueId: "headingSpaceH4Value",
    cssVar: "--user-heading-h4-space",
    min: 0,
    max: 24,
    defaultValue: DEFAULT_HEADING_SPACE_H4,
    formatValue: formatPixelValue,
  },
];

const ELEMENT_STYLE_SCHEMA = Object.freeze([
  Object.freeze({
    id: "heading1",
    label: "一级标题",
    selector: "h1",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-h1-font-size", min: 18, max: 64, step: 1, defaultValue: DEFAULT_HEADING1_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-h1-line-height", min: 0.9, max: 2.2, step: 0.05, defaultValue: DEFAULT_HEADING1_LINE_HEIGHT, formatValue: formatLineHeight }),
      Object.freeze({ key: "spaceBefore", label: "上间距", cssVar: "--element-h1-space-before", min: 0, max: 48, step: 1, defaultValue: 0, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-h1-space-after", min: 0, max: 52, step: 1, defaultValue: DEFAULT_HEADING_SPACE_H1, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "paddingBottom", label: "下内距", cssVar: "--element-h1-padding-bottom", min: 0, max: 30, step: 1, defaultValue: 12, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "heading2",
    label: "二级标题",
    selector: "h2",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-h2-font-size", min: 16, max: 48, step: 1, defaultValue: DEFAULT_HEADING2_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-h2-line-height", min: 0.9, max: 2.2, step: 0.05, defaultValue: DEFAULT_HEADING2_LINE_HEIGHT, formatValue: formatLineHeight }),
      Object.freeze({ key: "spaceBefore", label: "上间距", cssVar: "--element-h2-space-before", min: 0, max: 44, step: 1, defaultValue: DEFAULT_HEADING_SPACE_H2, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-h2-space-after", min: 0, max: 36, step: 1, defaultValue: Math.round(DEFAULT_HEADING_SPACE_H2 * 0.46), unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "paddingLeft", label: "左内距", cssVar: "--element-h2-padding-left", min: 0, max: 28, step: 1, defaultValue: 12, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "paddingBottom", label: "下内距", cssVar: "--element-h2-padding-bottom", min: 0, max: 24, step: 1, defaultValue: 8, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "heading3",
    label: "三级标题",
    selector: "h3",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-h3-font-size", min: 14, max: 38, step: 1, defaultValue: DEFAULT_HEADING3_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-h3-line-height", min: 0.9, max: 2.2, step: 0.05, defaultValue: DEFAULT_HEADING3_LINE_HEIGHT, formatValue: formatLineHeight }),
      Object.freeze({ key: "spaceBefore", label: "上间距", cssVar: "--element-h3-space-before", min: 0, max: 36, step: 1, defaultValue: DEFAULT_HEADING_SPACE_H3, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-h3-space-after", min: 0, max: 30, step: 1, defaultValue: Math.round(DEFAULT_HEADING_SPACE_H3 * 0.5), unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "paddingLeft", label: "左内距", cssVar: "--element-h3-padding-left", min: 0, max: 24, step: 1, defaultValue: 8, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "heading4",
    label: "四级标题",
    selector: "h4",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-h4-font-size", min: 12, max: 30, step: 1, defaultValue: DEFAULT_HEADING4_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-h4-line-height", min: 0.9, max: 2.2, step: 0.05, defaultValue: DEFAULT_HEADING4_LINE_HEIGHT, formatValue: formatLineHeight }),
      Object.freeze({ key: "spaceBefore", label: "上间距", cssVar: "--element-h4-space-before", min: 0, max: 28, step: 1, defaultValue: DEFAULT_HEADING_SPACE_H4, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-h4-space-after", min: 0, max: 24, step: 1, defaultValue: 4, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "paddingLeft", label: "左内距", cssVar: "--element-h4-padding-left", min: 0, max: 20, step: 1, defaultValue: 0, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "paragraph",
    label: "正文",
    selector: "p, li, blockquote",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-p-font-size", min: 10, max: 28, step: 1, defaultValue: DEFAULT_FONT_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-p-line-height", min: 1.05, max: 2.6, step: 0.05, defaultValue: DEFAULT_LINE_HEIGHT, formatValue: formatLineHeight }),
      Object.freeze({ key: "spaceBefore", label: "上间距", cssVar: "--element-p-space-before", min: 0, max: 30, step: 1, defaultValue: 0, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-p-space-after", min: 0, max: 36, step: 1, defaultValue: DEFAULT_PARAGRAPH_SPACING, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "indent", label: "首行缩进", cssVar: "--element-p-indent", min: 0, max: 64, step: 1, defaultValue: DEFAULT_PARAGRAPH_INDENT, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "list",
    label: "列表",
    selector: "ul, ol, li",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-list-font-size", min: 10, max: 28, step: 1, defaultValue: DEFAULT_FONT_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-list-line-height", min: 1.05, max: 2.6, step: 0.05, defaultValue: DEFAULT_LINE_HEIGHT, formatValue: formatLineHeight }),
      Object.freeze({ key: "itemGap", label: "项间距", cssVar: "--element-list-item-gap", min: 0, max: 24, step: 1, defaultValue: 4, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-list-space-after", min: 0, max: 36, step: 1, defaultValue: 12, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "markerWidth", label: "标记宽", cssVar: "--element-list-marker-width", min: 16, max: 60, step: 1, defaultValue: 34, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "callout",
    label: "强调块",
    selector: ".callout-box, .note-quote, .brush-block, blockquote",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-callout-font-size", min: 10, max: 28, step: 1, defaultValue: DEFAULT_FONT_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-callout-line-height", min: 1.05, max: 2.6, step: 0.05, defaultValue: DEFAULT_LINE_HEIGHT, formatValue: formatLineHeight }),
      Object.freeze({ key: "paddingX", label: "横内距", cssVar: "--element-callout-padding-x", min: 0, max: 42, step: 1, defaultValue: 16, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "paddingY", label: "纵内距", cssVar: "--element-callout-padding-y", min: 0, max: 36, step: 1, defaultValue: 12, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "radius", label: "圆角", cssVar: "--element-callout-radius", min: 0, max: 28, step: 1, defaultValue: 14, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-callout-space-after", min: 0, max: 40, step: 1, defaultValue: 12, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "table",
    label: "表格",
    selector: "table, .article-table-editor",
    fields: Object.freeze([
      Object.freeze({ key: "fontSize", label: "字号", cssVar: "--element-table-font-size", min: 9, max: 24, step: 1, defaultValue: DEFAULT_TABLE_FONT_SIZE, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "lineHeight", label: "行高", cssVar: "--element-table-line-height", min: 1, max: 2.2, step: 0.05, defaultValue: 1.2, formatValue: formatLineHeight }),
      Object.freeze({ key: "cellPaddingX", label: "单元格横", cssVar: "--element-table-cell-padding-x", min: 2, max: 30, step: 1, defaultValue: 10, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "cellPaddingY", label: "单元格纵", cssVar: "--element-table-cell-padding-y", min: 2, max: 24, step: 1, defaultValue: 8, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-table-space-after", min: 0, max: 44, step: 1, defaultValue: 14, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
  Object.freeze({
    id: "card",
    label: "卡片",
    selector: ".knowledge-cluster, .question-card, .question-panel, .mindmap-card, figure",
    fields: Object.freeze([
      Object.freeze({ key: "paddingX", label: "横内距", cssVar: "--element-card-padding-x", min: 0, max: 48, step: 1, defaultValue: 18, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "paddingY", label: "纵内距", cssVar: "--element-card-padding-y", min: 0, max: 44, step: 1, defaultValue: 16, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "radius", label: "圆角", cssVar: "--element-card-radius", min: 0, max: 32, step: 1, defaultValue: 16, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "gap", label: "内部间距", cssVar: "--element-card-gap", min: 0, max: 32, step: 1, defaultValue: 12, unit: "px", formatValue: formatPixelValue }),
      Object.freeze({ key: "spaceAfter", label: "下间距", cssVar: "--element-card-space-after", min: 0, max: 48, step: 1, defaultValue: 14, unit: "px", formatValue: formatPixelValue }),
    ]),
  }),
]);

const CARD_LAYOUT_DEFAULTS = Object.freeze({
  width: 0,
  height: 0,
  paddingX: 0,
  paddingY: 0,
  textScale: 100,
});
const CARD_LAYOUT_LIMITS = Object.freeze({
  width: Object.freeze({ min: 0, max: 1200, defaultValue: CARD_LAYOUT_DEFAULTS.width }),
  height: Object.freeze({ min: 0, max: 1600, defaultValue: CARD_LAYOUT_DEFAULTS.height }),
  paddingX: Object.freeze({ min: 0, max: 96, defaultValue: CARD_LAYOUT_DEFAULTS.paddingX }),
  paddingY: Object.freeze({ min: 0, max: 96, defaultValue: CARD_LAYOUT_DEFAULTS.paddingY }),
  textScale: Object.freeze({ min: 60, max: 140, defaultValue: CARD_LAYOUT_DEFAULTS.textScale }),
});
const CARD_LAYOUT_MAX_ENTRIES = 240;
const CARD_LAYOUT_FIELD_SCHEMA = Object.freeze([
  Object.freeze({
    key: "width",
    label: "宽度",
    unit: "px",
    min: CARD_LAYOUT_LIMITS.width.min,
    max: CARD_LAYOUT_LIMITS.width.max,
    step: 2,
    defaultValue: CARD_LAYOUT_LIMITS.width.defaultValue,
    formatValue: (value) => (Number(value) > 0 ? formatPixelValue(value) : "自动"),
  }),
  Object.freeze({
    key: "height",
    label: "高度",
    unit: "px",
    min: CARD_LAYOUT_LIMITS.height.min,
    max: CARD_LAYOUT_LIMITS.height.max,
    step: 2,
    defaultValue: CARD_LAYOUT_LIMITS.height.defaultValue,
    formatValue: (value) => (Number(value) > 0 ? formatPixelValue(value) : "自动"),
  }),
  Object.freeze({
    key: "paddingX",
    label: "左右边距",
    unit: "px",
    min: CARD_LAYOUT_LIMITS.paddingX.min,
    max: CARD_LAYOUT_LIMITS.paddingX.max,
    step: 1,
    defaultValue: CARD_LAYOUT_LIMITS.paddingX.defaultValue,
    formatValue: (value) => (Number(value) > 0 ? formatPixelValue(value) : "全局"),
  }),
  Object.freeze({
    key: "paddingY",
    label: "上下边距",
    unit: "px",
    min: CARD_LAYOUT_LIMITS.paddingY.min,
    max: CARD_LAYOUT_LIMITS.paddingY.max,
    step: 1,
    defaultValue: CARD_LAYOUT_LIMITS.paddingY.defaultValue,
    formatValue: (value) => (Number(value) > 0 ? formatPixelValue(value) : "全局"),
  }),
  Object.freeze({
    key: "textScale",
    label: "文字比例",
    unit: "%",
    min: CARD_LAYOUT_LIMITS.textScale.min,
    max: CARD_LAYOUT_LIMITS.textScale.max,
    step: 1,
    defaultValue: CARD_LAYOUT_LIMITS.textScale.defaultValue,
    formatValue: (value) => `${Math.round(Number(value) || 100)}%`,
  }),
]);

const PAGE_STYLE_CONTROLS = [
  {
    key: "pageWidth",
    storageKey: STORAGE_KEYS.pageWidth,
    inputId: "pageWidthRange",
    valueId: "pageWidthValue",
    min: 148,
    max: 240,
    defaultValue: DEFAULT_PAGE_WIDTH,
    formatValue: formatMillimeterValue,
  },
  {
    key: "pageHeight",
    storageKey: STORAGE_KEYS.pageHeight,
    inputId: "pageHeightRange",
    valueId: "pageHeightValue",
    min: 210,
    max: 340,
    defaultValue: DEFAULT_PAGE_HEIGHT,
    formatValue: formatMillimeterValue,
  },
  {
    key: "pageMarginTop",
    storageKey: STORAGE_KEYS.pageMarginTop,
    inputId: "pageMarginTopRange",
    valueId: "pageMarginTopValue",
    min: 0,
    max: 36,
    defaultValue: DEFAULT_PAGE_MARGIN_TOP,
    formatValue: formatMillimeterValue,
  },
  {
    key: "pageMarginRight",
    storageKey: STORAGE_KEYS.pageMarginRight,
    inputId: "pageMarginRightRange",
    valueId: "pageMarginRightValue",
    min: 0,
    max: 32,
    defaultValue: DEFAULT_PAGE_MARGIN_RIGHT,
    formatValue: formatMillimeterValue,
  },
  {
    key: "pageMarginBottom",
    storageKey: STORAGE_KEYS.pageMarginBottom,
    inputId: "pageMarginBottomRange",
    valueId: "pageMarginBottomValue",
    min: 0,
    max: 36,
    defaultValue: DEFAULT_PAGE_MARGIN_BOTTOM,
    formatValue: formatMillimeterValue,
  },
  {
    key: "pageMarginLeft",
    storageKey: STORAGE_KEYS.pageMarginLeft,
    inputId: "pageMarginLeftRange",
    valueId: "pageMarginLeftValue",
    min: 0,
    max: 32,
    defaultValue: DEFAULT_PAGE_MARGIN_LEFT,
    formatValue: formatMillimeterValue,
  },
  {
    key: "watermarkOpacity",
    storageKey: STORAGE_KEYS.watermarkOpacity,
    inputId: "watermarkOpacityRange",
    valueId: "watermarkOpacityValue",
    min: 0,
    max: 0.24,
    defaultValue: DEFAULT_WATERMARK_OPACITY,
    formatValue: formatPercentValue,
  },
];

const EMPTY_STATE_HTML = `
  <section class="empty-state">
    <div>
      <h2>等待 Markdown 输入</h2>
      <p>左侧输入内容后，这里会自动生成带纸张质感的排版文章。</p>
    </div>
  </section>
`;

const SAMPLE_MARKDOWN = `# 第一章 总论

## 专题2：会计基础框架
:::mindmap 专题2 会计基础
- 会计要素与会计等式
  - 会计要素
    - 静态要素：资产、负债、所有者权益
    - 动态要素：收入、费用、利润
  - 会计等式
    - 资产 = 负债 + 所有者权益
    - 收入 - 费用 = 利润
- 会计科目和借贷记账法
  - 会计科目
    - 按经济内容分类
    - 按提供信息详细程度分类
  - 借贷记账法
    - 有借必有贷，借贷必相等
    - 发生额试算平衡、余额试算平衡
- 会计凭证
  - 原始凭证
    - 自制原始凭证、外来原始凭证
    - 通用凭证、专用凭证
  - 记账凭证
    - 收款凭证、付款凭证、转账凭证
- 会计账簿
  - 按用途分类
    - 序时账簿、分类账簿、备查账簿
  - 对账
    - 账证核对、账账核对、账实核对、账表核对
- 财产清查
  - 清查种类
    - 全面清查、局部清查
    - 定期清查、不定期清查
  - 清查方法
    - 实地盘点、技术推算法、发函询证
- 会计账务处理程序
  - 记账凭证账务处理程序
    - 简单明了，适合规模较小单位
  - 汇总记账凭证账务处理程序
    - 减少登记总分类账工作量
  - 科目汇总表账务处理程序
    - 可起到试算平衡作用
- 会计信息化基础
  - 单位会计信息化建设
    - 单位负责人是第一责任人
  - 会计数据处理和应用
    - 电子会计资料、数据安全、系统控制
:::

一句话：会计基础要先抓住“要素、科目、凭证、账簿、清查、程序、信息化”这条主线。

## 考点1：会计职能

1. {{blue:核算}}：又称会计反映职能，是指会计以货币为主要计量单位，对特定主体的经济活动进行{{red:确认、计量、记录和报告}}。
2. {{blue:监督}}：又称会计控制职能，是指对特定主体经济活动和相关会计核算的{{red:真实性、完整性、合法性和合理性}}进行监督检查。
3. 两者关系：
   - {{brush-glow:相辅相成，辩证统一。}}
   - 核算是监督的{{brush-underline:基础、依据}}；监督是核算的{{brush-tag:质量保障}}。

## 单选题

第1题 企业发生销售业务后，何时确认收入？
答案：满足收入确认条件并完成相关履约义务时确认。
解析：要结合控制权转移、履约义务完成情况和合同约定综合判断。
易错：不能只看是否收到款项，收到款项并不一定等于收入确认。

第2题 下列哪项属于会计基本职能？
答案：核算和监督。
解析：会计基本职能包括核算职能和监督职能，预测、决策、评价等属于拓展职能。

## 多选题

第3题 下列各项中，属于会计静态要素的有？
答案：资产、负债、所有者权益。
解析：静态要素反映企业某一时点的财务状况，动态要素反映一定期间的经营成果。

## 简答题

第4题 简述核算与监督的关系。
答案：核算是监督的基础，监督是核算的质量保障。
解析：没有核算提供的信息，监督缺少依据；没有监督约束，核算质量难以保证。

## 文章模式示例

导语：学习会计时，如果只记定义而不理解适用情境，知识点很快就会变成零散碎片。
背景：同一个概念在不同题型里出现的方式不同，所以排版方式也应该服务于阅读目标。
观点：当内容用于复习时，信息密度比留白更重要；当内容用于连贯阅读时，节奏和呼吸感更重要。`;

const EXPORT_STYLE_FALLBACK = `
  body { margin: 0; font-family: "Microsoft YaHei", sans-serif; background: #f3f4f6; color: #111315; padding: 24px; }
  .article-canvas { max-width: 920px; margin: 0 auto; padding: 36px; background: #fffdfa; border: 1px solid #cfd5dd; }
`;

const PDF_PAGE_WIDTH = 595.28;
const PDF_PAGE_HEIGHT = 841.89;
const PDF_JPEG_QUALITY = 0.94;
const PDF_MAX_CANVAS_PIXELS = 28000000;
const PDF_CAPTURE_PADDING = 24;
const PDF_EXPORT_API_URL = "/api/export-pdf";
const PNG_EXPORT_SCALE = 2;
const PDF_INLINE_IMAGE_MAX_DIMENSION = 2200;
const PDF_INLINE_IMAGE_JPEG_QUALITY = 0.86;
const PDF_INLINE_IMAGE_OPTIMIZE_MIN_CHARS = 900000;
const STUDY_NOTES_API_URL = "/api/generate-study-notes";
const PDF_IMPORT_MODULE_SRC = "vendor/pdfjs/pdf.min.mjs";
const PDF_IMPORT_WORKER_SRC = "vendor/pdfjs/pdf.worker.min.mjs";
const PDF_IMPORT_CMAP_URL = "vendor/pdfjs/cmaps/";
const PDF_IMPORT_STANDARD_FONT_URL = "vendor/pdfjs/standard_fonts/";
const PDF_IMPORT_MAX_BYTES = 80 * 1024 * 1024;
const PDF_IMPORT_MAX_PAGES = 180;

let cachedExportStyles = "";

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

function normalizeMarkdown(markdown) {
  return String(markdown || "").replace(/\r\n?/g, "\n").trimEnd();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function formatPdfNumber(value) {
  return Number(value).toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
}

function safeUrl(url) {
  const value = String(url || "").trim();

  if (!value || /^(javascript|vbscript):/i.test(value)) {
    return "#";
  }

  return value;
}

function normalizeBackgroundSource(value, fallback = "") {
  const safe = safeUrl(value);
  return safe === "#" ? fallback : safe;
}

function normalizeBackgroundName(value, fallback = "") {
  return String(value == null ? fallback : value).trim();
}

function buildCssUrlValue(url) {
  const normalized = normalizeBackgroundSource(url, "");

  if (!normalized) {
    return "none";
  }

  return `url("${normalized}")`;
}

function getExportBackgroundLabel(name, src) {
  const normalizedName = normalizeBackgroundName(name, "");

  if (normalizedName) {
    return normalizedName;
  }

  return src ? "已上传背景" : "未上传";
}

function persistExportBackgroundStorage(state) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  try {
    if (!state.exportBackgroundSrc || state.exportBackgroundSrc.length > MAX_PERSISTED_BACKGROUND_LENGTH) {
      window.localStorage.removeItem(STORAGE_KEYS.exportBackgroundSrc);
      window.localStorage.removeItem(STORAGE_KEYS.exportBackgroundName);
      return;
    }

    window.localStorage.setItem(STORAGE_KEYS.exportBackgroundSrc, state.exportBackgroundSrc);
    window.localStorage.setItem(STORAGE_KEYS.exportBackgroundName, state.exportBackgroundName || "");
  } catch (_error) {
    try {
      window.localStorage.removeItem(STORAGE_KEYS.exportBackgroundSrc);
      window.localStorage.removeItem(STORAGE_KEYS.exportBackgroundName);
    } catch (_nestedError) {
      // Ignore storage failures in restricted browsers.
    }
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("读取文件失败，请重试。"));
    reader.readAsDataURL(file);
  });
}

function isOptimizablePdfImageDataUrl(dataUrl) {
  const match = String(dataUrl || "").match(/^data:image\/([^;,]+)/i);

  if (!match) {
    return false;
  }

  const subtype = match[1].toLowerCase();
  return subtype !== "svg+xml" && subtype !== "gif";
}

function loadDataUrlImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("图片压缩失败，请重试。"));
    image.src = dataUrl;
  });
}

async function optimizeImageDataUrlForPdf(dataUrl) {
  const source = String(dataUrl || "");

  if (!isOptimizablePdfImageDataUrl(source)) {
    return source;
  }

  let image = null;

  try {
    image = await loadDataUrlImage(source);
  } catch (_error) {
    return source;
  }

  const width = Math.max(1, image.naturalWidth || image.width || 1);
  const height = Math.max(1, image.naturalHeight || image.height || 1);
  const needsResize = Math.max(width, height) > PDF_INLINE_IMAGE_MAX_DIMENSION;
  const needsReencode = source.length > PDF_INLINE_IMAGE_OPTIMIZE_MIN_CHARS;

  if (!needsResize && !needsReencode) {
    return source;
  }

  const scale = needsResize
    ? Math.min(1, PDF_INLINE_IMAGE_MAX_DIMENSION / Math.max(width, height))
    : 1;
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const context = canvas.getContext("2d");

  if (!context) {
    return source;
  }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  try {
    const blob = await canvasToBlob(canvas, "image/jpeg", PDF_INLINE_IMAGE_JPEG_QUALITY);
    const optimized = await readBlobAsDataUrl(blob);
    return optimized.length < source.length * 0.94 ? optimized : source;
  } catch (_error) {
    return source;
  }
}

async function readImageFileAsExportDataUrl(file) {
  return optimizeImageDataUrlForPdf(await readFileAsDataUrl(file));
}

function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("读取文件失败，请重试。"));
    reader.readAsArrayBuffer(file);
  });
}

async function loadPdfJsLibrary() {
  const existingLibrary = typeof window !== "undefined" ? window.pdfjsLib : null;

  if (existingLibrary && typeof existingLibrary.getDocument === "function") {
    return existingLibrary;
  }

  if (typeof window === "undefined") {
    throw new Error("PDF 识别库只能在浏览器中加载。");
  }

  let library = null;

  try {
    const moduleUrl = new URL(PDF_IMPORT_MODULE_SRC, window.location.href).href;
    library = await import(moduleUrl);
  } catch (_error) {
    throw new Error("PDF 识别库未加载，请通过 npm start 打开页面后重试。");
  }

  if (!library || typeof library.getDocument !== "function") {
    throw new Error("PDF 识别库未加载，请刷新页面后重试。");
  }

  if (library.GlobalWorkerOptions) {
    library.GlobalWorkerOptions.workerSrc = new URL(PDF_IMPORT_WORKER_SRC, window.location.href).href;
  }

  window.pdfjsLib = library;
  return library;
}

function isPdfImportFile(file) {
  if (!file) {
    return false;
  }

  const fileName = String(file.name || "").toLowerCase();
  const mimeType = String(file.type || "").toLowerCase();
  return fileName.endsWith(".pdf") || mimeType === "application/pdf";
}

function getPdfImportDocumentTitle(fileName) {
  const title = String(fileName || "")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return title || "PDF 导入文档";
}

function normalizePdfLineText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\t+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?，。；：！？、）】》])/g, "$1")
    .replace(/([（【《])\s+/g, "$1")
    .trim();
}

function normalizePdfTextSegment(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTextVisualLength(value) {
  return Array.from(String(value || "")).reduce((total, char) => {
    if (/[\u2e80-\u9fff\uff00-\uffef]/.test(char)) {
      return total + 2;
    }

    return total + 1;
  }, 0);
}

function calculateMedian(values) {
  const numbers = values
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b);

  if (!numbers.length) {
    return 0;
  }

  const middle = Math.floor(numbers.length / 2);
  return numbers.length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
}

function calculateQuantile(values, ratio) {
  const numbers = values
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b);

  if (!numbers.length) {
    return 0;
  }

  const index = clampNumber(ratio, 0, 1, 0) * (numbers.length - 1);
  const lowerIndex = Math.floor(index);
  const upperIndex = Math.ceil(index);

  if (lowerIndex === upperIndex) {
    return numbers[lowerIndex];
  }

  const weight = index - lowerIndex;
  return numbers[lowerIndex] * (1 - weight) + numbers[upperIndex] * weight;
}

function isCjkTextBoundary(left, right) {
  return /[\u2e80-\u9fff\uff00-\uffef]$/.test(String(left || ""))
    && /^[\u2e80-\u9fff\uff00-\uffef]/.test(String(right || ""));
}

function getPdfSegmentSeparator(previousText, nextText, gap, fontSize) {
  const safeGap = Number.isFinite(gap) ? gap : 0;
  const safeFontSize = Math.max(6, Number(fontSize) || 10);

  if (safeGap > safeFontSize * 1.55) {
    return "\t";
  }

  if (safeGap <= safeFontSize * 0.32) {
    return "";
  }

  if (/^[,.;:!?，。；：！？、）】》]/.test(nextText)) {
    return "";
  }

  if (isCjkTextBoundary(previousText, nextText) && safeGap < safeFontSize * 0.72) {
    return "";
  }

  return " ";
}

function getPdfTextItemMetrics(item, pdfjsLibrary, viewport) {
  const baseTransform = Array.isArray(item.transform) ? item.transform : [1, 0, 0, 1, 0, 0];
  const transform = pdfjsLibrary && pdfjsLibrary.Util && viewport
    ? pdfjsLibrary.Util.transform(viewport.transform, baseTransform)
    : baseTransform;
  const x = Number(transform[4]) || 0;
  const y = Number(transform[5]) || 0;
  const fontSize = Math.max(
    Math.abs(Number(item.height) || 0),
    Math.hypot(Number(transform[0]) || 0, Number(transform[1]) || 0),
    Math.hypot(Number(transform[2]) || 0, Number(transform[3]) || 0),
    6,
  );
  const width = Math.max(
    Number(item.width) || 0,
    getTextVisualLength(item.str) * fontSize * 0.28,
  );

  return {
    text: normalizePdfTextSegment(item.str),
    x,
    y,
    width,
    endX: x + width,
    fontSize,
  };
}

function buildPdfLineFromSegments(segments, pageNumber) {
  const sortedSegments = segments
    .filter((segment) => segment && segment.text)
    .sort((a, b) => a.x - b.x);
  const fontSizes = sortedSegments.map((segment) => segment.fontSize);
  let rawText = "";
  let previousSegment = null;

  sortedSegments.forEach((segment) => {
    if (!rawText) {
      rawText = segment.text;
      previousSegment = segment;
      return;
    }

    const gap = segment.x - (previousSegment ? previousSegment.endX : segment.x);
    const separator = getPdfSegmentSeparator(
      previousSegment ? previousSegment.text : "",
      segment.text,
      gap,
      Math.max(segment.fontSize, previousSegment ? previousSegment.fontSize : 0),
    );

    rawText += `${separator}${segment.text}`;
    previousSegment = segment;
  });

  const text = normalizePdfLineText(rawText);

  return {
    pageNumber,
    rawText: rawText.trim(),
    text,
    x: sortedSegments.length ? Math.min(...sortedSegments.map((segment) => segment.x)) : 0,
    y: sortedSegments.length ? calculateMedian(sortedSegments.map((segment) => segment.y)) : 0,
    fontSize: calculateMedian(fontSizes) || 10,
    maxFontSize: fontSizes.length ? Math.max(...fontSizes) : 10,
  };
}

async function extractPdfPageLines(pdf, pageNumber, pdfjsLibrary) {
  const page = await pdf.getPage(pageNumber);

  try {
    const viewport = page.getViewport({ scale: 1 });
    const textContent = await page.getTextContent({
      normalizeWhitespace: true,
      disableCombineTextItems: false,
    });
    const segments = (textContent.items || [])
      .map((item) => getPdfTextItemMetrics(item, pdfjsLibrary, viewport))
      .filter((segment) => segment.text);
    const medianFontSize = calculateMedian(segments.map((segment) => segment.fontSize)) || 10;
    const lineTolerance = Math.max(2.2, medianFontSize * 0.42);
    const lineGroups = [];

    segments
      .sort((a, b) => (a.y - b.y) || (a.x - b.x))
      .forEach((segment) => {
        const currentLine = lineGroups[lineGroups.length - 1];

        if (currentLine && Math.abs(currentLine.y - segment.y) <= lineTolerance) {
          currentLine.segments.push(segment);
          currentLine.y = calculateMedian(currentLine.segments.map((entry) => entry.y));
          return;
        }

        lineGroups.push({
          y: segment.y,
          segments: [segment],
        });
      });

    return lineGroups
      .map((group) => buildPdfLineFromSegments(group.segments, pageNumber))
      .filter((line) => line.text);
  } finally {
    if (page && typeof page.cleanup === "function") {
      page.cleanup();
    }
  }
}

function getPdfNoiseLineKey(line) {
  return normalizePdfLineText(line && line.text)
    .toLowerCase()
    .replace(/\d+/g, "#");
}

function isPdfPageNumberLine(line, totalPages) {
  const text = normalizePdfLineText(line && line.text);

  if (!text) {
    return false;
  }

  const pageNumber = Number(line && line.pageNumber);
  const escapedPageNumber = String(pageNumber).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedTotalPages = String(totalPages).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`^${escapedPageNumber}$`),
    new RegExp(`^${escapedPageNumber}\\s*/\\s*${escapedTotalPages}$`),
    new RegExp(`^第\\s*${escapedPageNumber}\\s*页$`),
    new RegExp(`^${escapedPageNumber}\\s*/\\s*\\d+$`),
    /^page\s+\d+$/i,
  ];

  return patterns.some((pattern) => pattern.test(text));
}

function removePdfRepeatedHeadersAndFooters(pages, totalPages) {
  if (!Array.isArray(pages) || pages.length < 2) {
    return pages;
  }

  const counts = new Map();
  const pageEdgeKeys = pages.map((page) => {
    const lines = page.lines || [];
    const edgeLines = [
      ...lines.slice(0, 2),
      ...lines.slice(Math.max(0, lines.length - 2)),
    ];
    const keys = new Set(edgeLines
      .map(getPdfNoiseLineKey)
      .filter((key) => key && key.length >= 4));

    keys.forEach((key) => counts.set(key, (counts.get(key) || 0) + 1));
    return keys;
  });
  const repeatedThreshold = Math.max(2, Math.ceil(pages.length * 0.55));
  const repeatedKeys = new Set(Array.from(counts.entries())
    .filter(([, count]) => count >= repeatedThreshold)
    .map(([key]) => key));

  return pages.map((page, pageIndex) => {
    const lines = page.lines || [];
    const edgeKeys = pageEdgeKeys[pageIndex] || new Set();

    return {
      ...page,
      lines: lines.filter((line, lineIndex) => {
        const isEdgeLine = lineIndex < 2 || lineIndex >= lines.length - 2;
        const key = getPdfNoiseLineKey(line);

        if (isEdgeLine && isPdfPageNumberLine(line, totalPages)) {
          return false;
        }

        if (isEdgeLine && edgeKeys.has(key) && repeatedKeys.has(key)) {
          return false;
        }

        return true;
      }),
    };
  });
}

function getPdfExtractedTextQuality(pages) {
  const text = (pages || [])
    .flatMap((page) => page.lines || [])
    .map((line) => line.text || "")
    .join("\n");
  const compactText = text.replace(/\s/g, "");

  if (!compactText) {
    return {
      badCharacterRatio: 0,
      hasGarbledRun: false,
      text,
    };
  }

  const badCharacterCount = (compactText.match(/[?�□]/g) || []).length;

  return {
    badCharacterRatio: badCharacterCount / compactText.length,
    hasGarbledRun: /[?�□]{4,}/.test(compactText),
    text,
  };
}

function assertPdfExtractedTextQuality(pages) {
  const quality = getPdfExtractedTextQuality(pages);

  if (!quality.text.trim()) {
    throw new Error("没有识别到可复制文字。扫描版 PDF 需要先 OCR。");
  }

  if (quality.hasGarbledRun && quality.badCharacterRatio > 0.18) {
    throw new Error("PDF 文本层疑似乱码，请换可复制文本版 PDF，或先 OCR 后再导入。");
  }
}

function splitPdfTableCells(line) {
  const rawText = String(line && (line.rawText || line.text) || "").trim();

  if (!rawText) {
    return [];
  }

  let cells = rawText
    .split(/\t+/)
    .map(normalizePdfLineText)
    .filter(Boolean);

  if (cells.length < 2) {
    cells = rawText
      .split(/\s{3,}/)
      .map(normalizePdfLineText)
      .filter(Boolean);
  }

  if (cells.length < 2 || cells.some((cell) => getTextVisualLength(cell) > 110)) {
    return [];
  }

  return cells;
}

function getMostCommonNumber(numbers, fallback = 0) {
  const counts = new Map();

  numbers.forEach((number) => {
    counts.set(number, (counts.get(number) || 0) + 1);
  });

  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1] || b[0] - a[0])[0]?.[0] || fallback;
}

function detectPdfTableGroup(lines, startIndex) {
  const rows = [];
  let index = startIndex;

  while (index < lines.length) {
    const cells = splitPdfTableCells(lines[index]);

    if (cells.length < 2) {
      break;
    }

    rows.push(cells);
    index += 1;
  }

  if (rows.length < 2) {
    return null;
  }

  const columnCount = getMostCommonNumber(rows.map((row) => row.length), rows[0].length);
  const usableRows = rows.filter((row) => Math.abs(row.length - columnCount) <= 1);

  if (usableRows.length < 2 || columnCount < 2) {
    return null;
  }

  const averageCellLength = usableRows
    .flat()
    .reduce((total, cell) => total + getTextVisualLength(cell), 0) / usableRows.flat().length;

  if (columnCount === 2 && usableRows.length > 4 && averageCellLength > 34) {
    return null;
  }

  return {
    rows: usableRows.map((row) => {
      const normalized = row.slice(0, columnCount);

      while (normalized.length < columnCount) {
        normalized.push("");
      }

      return normalized;
    }),
    nextIndex: startIndex + usableRows.length,
  };
}

function escapeMarkdownTableCell(value) {
  return normalizePdfLineText(value)
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ");
}

function formatPdfMarkdownTable(rows) {
  if (!rows || rows.length < 2) {
    return "";
  }

  const header = rows[0].map((cell, index) => escapeMarkdownTableCell(cell) || `列 ${index + 1}`);
  const separator = header.map(() => "---");
  const bodyRows = rows.slice(1).map((row) => row.map(escapeMarkdownTableCell));

  return [
    `| ${header.join(" | ")} |`,
    `| ${separator.join(" | ")} |`,
    ...bodyRows.map((row) => `| ${row.join(" | ")} |`),
  ].join("\n");
}

function formatPdfListLine(text) {
  const normalized = normalizePdfLineText(text);
  const bulletMatch = normalized.match(/^[•●○◆◇▪▫□■]\s*(.+)$/);

  if (bulletMatch) {
    return `- ${bulletMatch[1].trim()}`;
  }

  const orderedMatch = normalized.match(/^(?:\(?([0-9]{1,3})\)?[.、)]|（([0-9]{1,3})）)\s*(.+)$/);

  if (orderedMatch) {
    const order = orderedMatch[1] || orderedMatch[2] || "1";
    return `${order}. ${orderedMatch[3].trim()}`;
  }

  return "";
}

function isPdfHeadingCandidateText(text) {
  const normalized = normalizePdfLineText(text);

  if (!normalized || getTextVisualLength(normalized) > 92) {
    return false;
  }

  if (formatPdfListLine(normalized) || /^[|:：,.;!?，。；！？、]/.test(normalized)) {
    return false;
  }

  if (/^(http|www\.)/i.test(normalized) || /^\d+([.,]\d+)*$/.test(normalized)) {
    return false;
  }

  return true;
}

function guessPdfHeadingLevel(line, context, lineIndex, pageIndex, hasTitle = false) {
  const text = normalizePdfLineText(line && line.text);

  if (!isPdfHeadingCandidateText(text)) {
    return 0;
  }

  const visualLength = getTextVisualLength(text);
  const hasTerminalPunctuation = /[。！？!?；;，,、]$/.test(text);
  const numberedHeading = text.match(/^(\d+(?:\.\d+){0,3})\s+(.+)$/);

  if (!hasTitle && pageIndex === 0 && lineIndex <= 1 && visualLength <= 80 && !hasTerminalPunctuation) {
    return 1;
  }

  if (/^第[一二三四五六七八九十百千万\d]+[章节篇部分]/.test(text)) {
    return 2;
  }

  if (/^[一二三四五六七八九十]+[、.．]\s*\S+/.test(text)) {
    return 2;
  }

  if (numberedHeading) {
    const depth = numberedHeading[1].split(".").length;
    return Math.min(4, Math.max(2, depth + 1));
  }

  if (hasTerminalPunctuation || !context.hasFontSpread) {
    return 0;
  }

  if (line.maxFontSize >= context.largeFontSize && visualLength <= 80) {
    return 2;
  }

  if (line.maxFontSize >= context.mediumFontSize && visualLength <= 72) {
    return 2;
  }

  return 0;
}

function formatInferredPdfListLine(line, context) {
  const text = normalizePdfLineText(line && line.text);

  if (!text || splitPdfTableCells(line).length >= 2) {
    return "";
  }

  const indent = (Number(line && line.x) || 0) - (Number(context && context.baseX) || 0);
  const minIndent = Math.max(18, (Number(context && context.medianFontSize) || 10) * 1.45);

  if (indent < minIndent || getTextVisualLength(text) > 86 || /[。！？!?；;]$/.test(text)) {
    return "";
  }

  return `- ${text}`;
}

function shouldStartNewPdfParagraph(currentLine, previousLine) {
  if (!currentLine || !previousLine) {
    return false;
  }

  const previousText = previousLine.text || "";
  const currentText = currentLine.text || "";

  if (/[:：]$/.test(previousText)) {
    return false;
  }

  if (/[。！？!?；;]$/.test(previousText)) {
    return true;
  }

  if (currentLine.x - previousLine.x > Math.max(18, previousLine.fontSize * 1.6)) {
    return true;
  }

  return getTextVisualLength(previousText) < 26
    && getTextVisualLength(currentText) < 42
    && previousLine.maxFontSize >= currentLine.maxFontSize * 1.08;
}

function joinPdfParagraphLines(lines) {
  let paragraph = "";

  lines.forEach((line) => {
    const text = normalizePdfLineText(line && line.text);

    if (!text) {
      return;
    }

    if (!paragraph) {
      paragraph = text;
      return;
    }

    if (/-$/.test(paragraph) && /^[a-z]/.test(text)) {
      paragraph = `${paragraph.slice(0, -1)}${text}`;
      return;
    }

    if (/^[,.;:!?，。；：！？、）】》]/.test(text) || isCjkTextBoundary(paragraph, text)) {
      paragraph += text;
      return;
    }

    paragraph += ` ${text}`;
  });

  return paragraph;
}

function createPdfMarkdownContext(pages) {
  const lines = pages.flatMap((page) => page.lines || []);
  const fontSizes = lines.map((line) => line.maxFontSize || line.fontSize);
  const medianFontSize = calculateMedian(fontSizes) || 10;
  const upperFontSize = calculateQuantile(fontSizes, 0.9) || medianFontSize;

  return {
    medianFontSize,
    mediumFontSize: Math.max(medianFontSize * 1.12, calculateQuantile(fontSizes, 0.75) || medianFontSize),
    largeFontSize: Math.max(medianFontSize * 1.22, upperFontSize),
    hasFontSpread: upperFontSize - medianFontSize > 1.1,
    baseX: calculateQuantile(lines.map((line) => line.x), 0.15) || 0,
  };
}

function convertPdfPagesToMarkdown(pages, fileName, totalPages) {
  const context = createPdfMarkdownContext(pages);
  const blocks = [];
  const stats = {
    headingCount: 0,
    listCount: 0,
    paragraphCount: 0,
    tableCount: 0,
  };
  let hasTitle = false;

  const commitParagraph = (paragraphLines) => {
    if (!paragraphLines.length) {
      return;
    }

    const paragraph = joinPdfParagraphLines(paragraphLines);

    if (paragraph) {
      blocks.push(paragraph);
      stats.paragraphCount += 1;
    }

    paragraphLines.length = 0;
  };

  pages.forEach((page, pageIndex) => {
    const paragraphLines = [];
    const lines = page.lines || [];
    let lineIndex = 0;

    while (lineIndex < lines.length) {
      const line = lines[lineIndex];
      const text = normalizePdfLineText(line.text);

      if (!text) {
        commitParagraph(paragraphLines);
        lineIndex += 1;
        continue;
      }

      const tableGroup = detectPdfTableGroup(lines, lineIndex);

      if (tableGroup) {
        commitParagraph(paragraphLines);
        blocks.push(formatPdfMarkdownTable(tableGroup.rows));
        stats.tableCount += 1;
        lineIndex = tableGroup.nextIndex;
        continue;
      }

      const headingLevel = guessPdfHeadingLevel(line, context, lineIndex, pageIndex, hasTitle);

      if (headingLevel) {
        commitParagraph(paragraphLines);
        blocks.push(`${"#".repeat(headingLevel)} ${text.replace(/^#+\s*/, "")}`);
        stats.headingCount += 1;
        hasTitle = hasTitle || headingLevel === 1;
        lineIndex += 1;
        continue;
      }

      const listLine = formatPdfListLine(text) || formatInferredPdfListLine(line, context);

      if (listLine) {
        commitParagraph(paragraphLines);
        blocks.push(listLine);
        stats.listCount += 1;
        lineIndex += 1;
        continue;
      }

      if (paragraphLines.length && shouldStartNewPdfParagraph(line, paragraphLines[paragraphLines.length - 1])) {
        commitParagraph(paragraphLines);
      }

      paragraphLines.push(line);
      lineIndex += 1;
    }

    commitParagraph(paragraphLines);

    if (pageIndex < pages.length - 1 && lines.length) {
      blocks.push("---");
    }
  });

  if (!hasTitle) {
    blocks.unshift(`# ${getPdfImportDocumentTitle(fileName)}`);
  }

  let markdown = blocks
    .filter((block) => block && String(block).trim())
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (pages.length < totalPages) {
    markdown += `\n\n> 已自动导入前 ${pages.length} / ${totalPages} 页，超出部分可分批导入以保持浏览器流畅。`;
  }

  return {
    markdown,
    stats,
  };
}

async function extractPdfFileToMarkdown(file, onProgress) {
  if (!isPdfImportFile(file)) {
    throw new Error("请选择 PDF 文件。");
  }

  if (file.size > PDF_IMPORT_MAX_BYTES) {
    throw new Error("PDF 文件过大，请先拆分后再导入。");
  }

  const pdfjsLibrary = await loadPdfJsLibrary();
  const arrayBuffer = await readFileAsArrayBuffer(file);
  const loadingTask = pdfjsLibrary.getDocument({
    data: new Uint8Array(arrayBuffer),
    cMapPacked: true,
    cMapUrl: new URL(PDF_IMPORT_CMAP_URL, window.location.href).href,
    standardFontDataUrl: new URL(PDF_IMPORT_STANDARD_FONT_URL, window.location.href).href,
  });

  try {
    const pdf = await loadingTask.promise;
    const totalPages = Number(pdf.numPages) || 0;
    const pageLimit = Math.min(totalPages, PDF_IMPORT_MAX_PAGES);
    const pages = [];

    for (let pageNumber = 1; pageNumber <= pageLimit; pageNumber += 1) {
      if (typeof onProgress === "function") {
        onProgress({
          pageNumber,
          pageLimit,
          totalPages,
        });
      }

      pages.push({
        pageNumber,
        lines: await extractPdfPageLines(pdf, pageNumber, pdfjsLibrary),
      });
    }

    const cleanedPages = removePdfRepeatedHeadersAndFooters(pages, totalPages);
    assertPdfExtractedTextQuality(cleanedPages);
    const converted = convertPdfPagesToMarkdown(cleanedPages, file.name, totalPages);

    if (!converted.markdown.replace(/[#|\-\s>.0-9/]/g, "").trim()) {
      throw new Error("没有识别到可复制文字。扫描版 PDF 需要先 OCR。");
    }

    return {
      ...converted,
      pageCount: pageLimit,
      totalPages,
    };
  } finally {
    if (loadingTask && typeof loadingTask.destroy === "function") {
      try {
        await loadingTask.destroy();
      } catch (_error) {
        // Ignore PDF.js cleanup failures.
      }
    }
  }
}

function chooseModeForImportedPdf(markdown, stats = {}) {
  const text = String(markdown || "");

  if (/(答案|解析|题目|选择题|正确答案|解题)/.test(text) && (stats.listCount || 0) >= 3) {
    return "question";
  }

  const structuredBlocks = (stats.headingCount || 0) + (stats.listCount || 0) + (stats.tableCount || 0) * 2;

  if (structuredBlocks >= Math.max(4, (stats.paragraphCount || 0) * 0.55)) {
    return "knowledge";
  }

  return "article";
}

function getCustomFontEntries() {
  return customFontEntries.slice();
}

function escapeCssString(value) {
  return String(value == null ? "" : value)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\A ");
}

function getCustomFontFormat(extension) {
  const normalized = String(extension || "").toLowerCase();

  if (normalized === "truetype" || normalized === "ttf") {
    return "truetype";
  }

  if (normalized === "opentype" || normalized === "otf") {
    return "opentype";
  }

  if (normalized === "woff2") {
    return "woff2";
  }

  if (normalized === "woff") {
    return "woff";
  }

  return "truetype";
}

function getFileExtension(fileName) {
  const match = String(fileName || "").trim().match(/\.([a-z0-9]+)$/i);
  return match ? match[1].toLowerCase() : "";
}

function isSupportedCustomFontFile(file) {
  if (!file) {
    return false;
  }

  const extension = getFileExtension(file.name);
  const mimeType = String(file.type || "").toLowerCase();
  return ["ttf", "otf", "woff", "woff2"].includes(extension)
    || mimeType.startsWith("font/")
    || mimeType.includes("font")
    || mimeType === "application/octet-stream";
}

function normalizeCustomFontLabel(name) {
  const baseName = String(name || "自定义字体")
    .replace(/\.[^.]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
  return (baseName || "自定义字体").slice(0, 28);
}

function normalizeCustomFontDataUrl(value) {
  const source = String(value || "").trim();
  return source.startsWith("data:") ? source : "";
}

function normalizeCustomFontEntry(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const key = String(entry.key || "");
  const dataUrl = normalizeCustomFontDataUrl(entry.dataUrl);

  if (!key.startsWith(CUSTOM_FONT_KEY_PREFIX) || !dataUrl) {
    return null;
  }

  const familyName = String(entry.familyName || `LayoutForXhsCustom_${key.slice(CUSTOM_FONT_KEY_PREFIX.length)}`)
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 80);

  return {
    key,
    dataUrl,
    familyName,
    label: normalizeCustomFontLabel(entry.label || entry.fileName),
    fileName: String(entry.fileName || entry.label || ""),
    format: getCustomFontFormat(entry.format || getFileExtension(entry.fileName)),
    createdAt: Number(entry.createdAt || Date.now()),
  };
}

function createCustomFontEntryFromFile(file, dataUrl) {
  const extension = getFileExtension(file.name);
  const hash = hashString(`${file.name}:${file.size}:${file.lastModified}:${dataUrl.slice(0, 96)}`);

  return normalizeCustomFontEntry({
    key: `${CUSTOM_FONT_KEY_PREFIX}${hash}`,
    familyName: `LayoutForXhsCustom_${hash}`,
    label: normalizeCustomFontLabel(file.name),
    fileName: file.name,
    format: extension,
    dataUrl,
    createdAt: Date.now(),
  });
}

function registerCustomFontOption(entry) {
  FONT_FAMILY_OPTIONS[entry.key] = {
    label: entry.label,
    stack: `"${entry.familyName}", "LXGW WenKai", "霞鹜文楷", "HanziPen SC", "STKaiti", "KaiTi", cursive`,
  };

  customFontEntries = [
    ...customFontEntries.filter((item) => item.key !== entry.key),
    entry,
  ].sort((a, b) => a.createdAt - b.createdAt);
}

async function loadCustomFontFace(entry) {
  if (
    !entry
    || loadedCustomFontKeys.has(entry.key)
    || typeof FontFace !== "function"
    || typeof document === "undefined"
    || !document.fonts
  ) {
    return;
  }

  const fontFace = new FontFace(entry.familyName, buildCssUrlValue(entry.dataUrl), {
    display: "swap",
  });
  await fontFace.load();
  document.fonts.add(fontFace);
  loadedCustomFontKeys.add(entry.key);
}

async function registerCustomFontEntry(entry) {
  const normalized = normalizeCustomFontEntry(entry);

  if (!normalized) {
    return null;
  }

  registerCustomFontOption(normalized);

  try {
    await loadCustomFontFace(normalized);
  } catch (_error) {
    // Keep the option available; the browser may still resolve a locally installed font fallback.
  }

  return normalized;
}

function openCustomFontDatabase() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("当前浏览器不支持本地字体持久化"));
      return;
    }

    const request = indexedDB.open(CUSTOM_FONT_DB_NAME, CUSTOM_FONT_DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(CUSTOM_FONT_STORE_NAME)) {
        db.createObjectStore(CUSTOM_FONT_STORE_NAME, { keyPath: "key" });
      }
    };
    request.onerror = () => reject(request.error || new Error("字体数据库打开失败"));
    request.onsuccess = () => resolve(request.result);
  });
}

async function getStoredCustomFonts() {
  let db;

  try {
    db = await openCustomFontDatabase();
  } catch (_error) {
    return [];
  }

  return new Promise((resolve) => {
    const transaction = db.transaction(CUSTOM_FONT_STORE_NAME, "readonly");
    const request = transaction.objectStore(CUSTOM_FONT_STORE_NAME).getAll();

    request.onsuccess = () => resolve(Array.isArray(request.result) ? request.result : []);
    request.onerror = () => resolve([]);
    transaction.oncomplete = () => db.close();
    transaction.onerror = () => {
      db.close();
      resolve([]);
    };
  });
}

async function persistCustomFontEntry(entry) {
  const normalized = normalizeCustomFontEntry(entry);

  if (!normalized) {
    return false;
  }

  let db;

  try {
    db = await openCustomFontDatabase();
  } catch (_error) {
    return false;
  }

  return new Promise((resolve) => {
    const transaction = db.transaction(CUSTOM_FONT_STORE_NAME, "readwrite");
    transaction.objectStore(CUSTOM_FONT_STORE_NAME).put(normalized);
    transaction.oncomplete = () => {
      db.close();
      resolve(true);
    };
    transaction.onerror = () => {
      db.close();
      resolve(false);
    };
  });
}

async function restoreCustomFontsFromStorage() {
  const entries = await getStoredCustomFonts();
  const restored = [];

  for (const entry of entries) {
    const normalized = await registerCustomFontEntry(entry);

    if (normalized) {
      restored.push(normalized);
    }
  }

  return restored;
}

function buildCustomFontFaceCss(entries = getCustomFontEntries()) {
  return entries
    .map(normalizeCustomFontEntry)
    .filter(Boolean)
    .map((entry) => [
      "@font-face{",
      `font-family:"${escapeCssString(entry.familyName)}";`,
      `src:${buildCssUrlValue(entry.dataUrl)} format("${escapeCssString(entry.format)}");`,
      "font-weight:400;",
      "font-style:normal;",
      "font-display:swap;",
      "}",
    ].join(""))
    .join("\n");
}

function sanitizeChoice(value, collection, fallback) {
  return Object.prototype.hasOwnProperty.call(collection, value) ? value : fallback;
}

function getLayoutPresetsForMode(mode) {
  const resolvedMode = sanitizeChoice(mode, MODE_METADATA, DEFAULT_MODE);
  return MODE_LAYOUT_PRESETS[resolvedMode] || MODE_LAYOUT_PRESETS[DEFAULT_MODE] || [];
}

function getDefaultLayoutPresetForMode(mode) {
  const resolvedMode = sanitizeChoice(mode, MODE_METADATA, DEFAULT_MODE);
  return DEFAULT_LAYOUT_PRESET_BY_MODE[resolvedMode] || getLayoutPresetsForMode(resolvedMode)[0]?.id || "";
}

function isLayoutPresetForMode(value, mode) {
  const presetId = String(value || "");
  return getLayoutPresetsForMode(mode).some((preset) => preset.id === presetId);
}

function sanitizeLayoutPresetForMode(value, mode) {
  return isLayoutPresetForMode(value, mode) ? String(value) : getDefaultLayoutPresetForMode(mode);
}

function getLayoutPresetMetadata(value, mode = DEFAULT_MODE) {
  const presetId = sanitizeLayoutPresetForMode(value, mode);
  return getLayoutPresetsForMode(mode).find((preset) => preset.id === presetId) || null;
}

function normalizeLayoutPresetByMode(rawValue) {
  const source = rawValue && typeof rawValue === "object" ? rawValue : {};

  return Object.keys(MODE_METADATA).reduce((result, mode) => {
    result[mode] = sanitizeLayoutPresetForMode(source[mode], mode);
    return result;
  }, {});
}

function parseLayoutPresetByMode(value) {
  if (!value) {
    return normalizeLayoutPresetByMode({});
  }

  try {
    return normalizeLayoutPresetByMode(JSON.parse(value));
  } catch (_error) {
    return normalizeLayoutPresetByMode({});
  }
}

function syncLayoutPresetWithMode(state) {
  if (!state) {
    return "";
  }

  state.mode = sanitizeChoice(state.mode, MODE_METADATA, DEFAULT_MODE);
  state.layoutPresetByMode = normalizeLayoutPresetByMode(state.layoutPresetByMode);

  if (isLayoutPresetForMode(state.layoutPreset, state.mode)) {
    state.layoutPresetByMode[state.mode] = state.layoutPreset;
    return state.layoutPreset;
  }

  state.layoutPreset = sanitizeLayoutPresetForMode(state.layoutPresetByMode[state.mode], state.mode);
  state.layoutPresetByMode[state.mode] = state.layoutPreset;
  return state.layoutPreset;
}

function resolveFontFamilyStack(key, fallback = DEFAULT_BODY_FONT_FAMILY) {
  const resolvedKey = sanitizeChoice(key, FONT_FAMILY_OPTIONS, fallback);
  return FONT_FAMILY_OPTIONS[resolvedKey].stack;
}

function getGlobalFontFamilyValue(state) {
  return state.bodyFontFamily === state.headingFontFamily ? state.bodyFontFamily : "";
}

function decodeHtmlEntities(value) {
  return String(value || "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

const INLINE_MATH_PLACEHOLDER_PREFIX = "%%LAYOUTMATH";
const FORMULA_EDITOR_EXAMPLES = [
  { label: "fraction", value: "\\frac{a}{b}" },
  { label: "sqrt", value: "\\sqrt{x^2 + y^2}" },
  { label: "sum", value: "\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}" },
  { label: "matrix", value: "\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}" },
  { label: "limit", value: "\\lim_{x\\to 0}\\frac{\\sin x}{x}=1" },
  { label: "chem", value: "\\ce{CO2 + C -> 2CO}" },
];

function getKatexRenderer() {
  if (typeof window !== "undefined" && window.katex) {
    return window.katex;
  }

  if (typeof katex !== "undefined") {
    return katex;
  }

  return null;
}

function renderMathContent(source, displayMode = false) {
  const latex = String(source || "").trim();

  if (!latex) {
    return "";
  }

  const renderer = getKatexRenderer();
  if (renderer && typeof renderer.renderToString === "function") {
    try {
      return renderer.renderToString(latex, {
        displayMode: Boolean(displayMode),
        throwOnError: false,
        strict: "ignore",
        trust: false,
      });
    } catch (_error) {
      // Fall back to escaped source so invalid formulas remain visible.
    }
  }

  return `<code class="math-source">${escapeHtml(latex)}</code>`;
}

function inferMathVariant(source) {
  return /\\ce\s*\{/.test(String(source || "")) ? "chem" : "math";
}

function renderMathInline(source, options = {}) {
  const latex = String(source || "").trim();

  if (!latex) {
    return "";
  }

  const variant = options.variant === "chem" || inferMathVariant(latex) === "chem" ? "chem" : "math";
  const className = variant === "chem" ? "math-inline chem-inline" : "math-inline";
  const attrs = [
    `data-md-math-source="${escapeAttribute(latex)}"`,
    `data-md-math-mode="inline"`,
    `data-md-math-variant="${variant}"`,
    options.chemSource ? `data-md-chem-source="${escapeAttribute(options.chemSource)}"` : "",
    'title="Click to edit LaTeX"',
    'tabindex="0"',
  ].filter(Boolean).join(" ");

  return `<span class="${className}" ${attrs}>${renderMathContent(latex, false)}</span>`;
}

function renderChemInline(source) {
  const chemSource = String(source || "").trim();
  return chemSource
    ? renderMathInline(`\\ce{${chemSource}}`, { variant: "chem", chemSource })
    : "";
}

function renderMathBlockElement(source, blockAttrs = "") {
  const latex = String(source || "").trim();

  if (!latex) {
    return "";
  }

  const variant = inferMathVariant(latex);
  const className = variant === "chem" ? "math-block chem-block" : "math-block";
  return `<div class="${className}" data-md-block="math"${blockAttrs} data-md-math-mode="block" data-md-math-variant="${variant}" data-md-math-source="${escapeAttribute(latex)}" title="Click to edit LaTeX" tabindex="0">${renderMathContent(latex, true)}</div>`;
}

function isEscapedAt(source, index) {
  let slashCount = 0;

  for (let cursor = index - 1; cursor >= 0 && source[cursor] === "\\"; cursor -= 1) {
    slashCount += 1;
  }

  return slashCount % 2 === 1;
}

function findUnescapedDelimiter(source, delimiter, startIndex) {
  for (let index = startIndex; index < source.length; index += 1) {
    if (source.startsWith(delimiter, index) && !isEscapedAt(source, index)) {
      return index;
    }
  }

  return -1;
}

function findBalancedBraceEnd(source, openBraceIndex) {
  if (source[openBraceIndex] !== "{") {
    return -1;
  }

  let depth = 0;

  for (let index = openBraceIndex; index < source.length; index += 1) {
    const char = source[index];

    if ((char === "{" || char === "}") && isEscapedAt(source, index)) {
      continue;
    }

    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;

      if (depth === 0) {
        return index;
      }
    }
  }

  return -1;
}

function readLatexCommandGroup(source, startIndex, commandName) {
  const command = `\\${commandName}`;

  if (isEscapedAt(source, startIndex) || !source.startsWith(command, startIndex)) {
    return null;
  }

  const afterCommand = startIndex + command.length;
  if (/[A-Za-z]/.test(source[afterCommand] || "")) {
    return null;
  }

  let cursor = afterCommand;
  while (cursor < source.length && /\s/.test(source[cursor])) {
    cursor += 1;
  }

  if (source[cursor] !== "{") {
    return null;
  }

  const closeIndex = findBalancedBraceEnd(source, cursor);
  if (closeIndex === -1) {
    return null;
  }

  return {
    body: source.slice(cursor + 1, closeIndex),
    latex: source.slice(startIndex, closeIndex + 1),
    nextIndex: closeIndex + 1,
  };
}

function tokenizeInlineMath(source, mathTokens) {
  let output = "";
  let index = 0;

  while (index < source.length) {
    if (source.startsWith("\\(", index)) {
      const endIndex = findUnescapedDelimiter(source, "\\)", index + 2);
      if (endIndex !== -1) {
        const latex = source.slice(index + 2, endIndex).trim();
        if (latex) {
          const token = `${INLINE_MATH_PLACEHOLDER_PREFIX}${mathTokens.length}%%`;
          mathTokens.push(renderMathInline(latex));
          output += token;
          index = endIndex + 2;
          continue;
        }
      }
    }

    if (source.startsWith("\\[", index)) {
      const endIndex = findUnescapedDelimiter(source, "\\]", index + 2);
      if (endIndex !== -1) {
        const latex = source.slice(index + 2, endIndex).trim();
        if (latex) {
          const token = `${INLINE_MATH_PLACEHOLDER_PREFIX}${mathTokens.length}%%`;
          mathTokens.push(renderMathInline(latex));
          output += token;
          index = endIndex + 2;
          continue;
        }
      }
    }

    const chemistryGroup = readLatexCommandGroup(source, index, "ce") || readLatexCommandGroup(source, index, "pu");
    if (chemistryGroup) {
      const token = `${INLINE_MATH_PLACEHOLDER_PREFIX}${mathTokens.length}%%`;
      mathTokens.push(renderMathInline(chemistryGroup.latex, {
        variant: "chem",
        chemSource: chemistryGroup.body,
      }));
      output += token;
      index = chemistryGroup.nextIndex;
      continue;
    }

    if (source[index] === "$" && source[index + 1] !== "$" && !isEscapedAt(source, index)) {
      const nextChar = source[index + 1] || "";
      if (nextChar && !/\s/.test(nextChar)) {
        const endIndex = findUnescapedDelimiter(source, "$", index + 1);
        const previousChar = endIndex > index ? source[endIndex - 1] : "";
        if (endIndex !== -1 && previousChar && !/\s/.test(previousChar)) {
          const latex = source.slice(index + 1, endIndex).trim();
          if (latex) {
            const token = `${INLINE_MATH_PLACEHOLDER_PREFIX}${mathTokens.length}%%`;
            mathTokens.push(renderMathInline(latex));
            output += token;
            index = endIndex + 1;
            continue;
          }
        }
      }
    }

    output += source[index];
    index += 1;
  }

  return output;
}

function getDisplayMathFence(trimmed) {
  if (trimmed.startsWith("$$")) {
    return { open: "$$", close: "$$" };
  }

  if (trimmed.startsWith("\\[")) {
    return { open: "\\[", close: "\\]" };
  }

  return null;
}

function isDisplayMathStart(trimmed) {
  return Boolean(getDisplayMathFence(String(trimmed || "")));
}

function normalizeHexColor(value, fallback = "") {
  const text = String(value == null ? "" : value).trim();

  if (!text) {
    return fallback;
  }

  const shortMatch = text.match(/^#([0-9a-f]{3})$/i);
  if (shortMatch) {
    const [r, g, b] = shortMatch[1].split("");
    return `#${(r + r + g + g + b + b).toLowerCase()}`;
  }

  const longMatch = text.match(/^#([0-9a-f]{6})$/i);
  return longMatch ? `#${longMatch[1].toLowerCase()}` : fallback;
}

function parseStyleDeclarationMap(source) {
  const result = {};

  String(source || "")
    .split(/[;,]/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .forEach((entry) => {
      const separatorIndex = entry.indexOf("=");

      if (separatorIndex === -1) {
        return;
      }

      const key = entry.slice(0, separatorIndex).trim().toLowerCase();
      const value = entry.slice(separatorIndex + 1).trim();

      if (!key || !value) {
        return;
      }

      result[key] = value;
    });

  return result;
}

function sanitizeInlineTextStyle(rawStyle = {}) {
  const font = sanitizeChoice(rawStyle.font, FONT_FAMILY_OPTIONS, "");
  const size = clampNumber(rawStyle.size, 10, 64, "");
  const color = normalizeHexColor(rawStyle.color, "");

  return {
    font,
    size: size === "" ? "" : size,
    color,
  };
}

function sanitizeBlockTextStyle(rawStyle = {}) {
  const font = sanitizeChoice(rawStyle.font, FONT_FAMILY_OPTIONS, "");
  const size = clampNumber(rawStyle.size, 10, 64, "");
  const color = normalizeHexColor(rawStyle.color, "");
  const align = sanitizeChoice(rawStyle.align, PARAGRAPH_ALIGN_OPTIONS, "");
  const indent = clampNumber(rawStyle.indent, 0, 96, "");
  const spacing = clampNumber(rawStyle.spacing, 0, 72, "");

  return {
    font,
    size: size === "" ? "" : size,
    color,
    align,
    indent: indent === "" ? "" : indent,
    spacing: spacing === "" ? "" : spacing,
  };
}

function hasInlineTextStyle(style) {
  return Boolean(style && (style.font || style.size || style.color));
}

function hasBlockTextStyle(style) {
  return Boolean(style && (style.font || style.size || style.color || style.align || style.indent !== "" || style.spacing !== ""));
}

function serializeTextStyleMap(style, keys) {
  if (!style) {
    return "";
  }

  return keys
    .map((key) => {
      const value = style[key];
      return value === "" || value == null ? "" : `${key}=${value}`;
    })
    .filter(Boolean)
    .join(";");
}

function buildInlineTextStyleCss(style) {
  const safeStyle = sanitizeInlineTextStyle(style);
  const declarations = [];

  if (safeStyle.color) {
    declarations.push(`color:${safeStyle.color}`);
  }

  if (safeStyle.size !== "") {
    declarations.push(`font-size:${safeStyle.size}px`);
  }

  if (safeStyle.font) {
    declarations.push(`font-family:${resolveFontFamilyStack(safeStyle.font, DEFAULT_BODY_FONT_FAMILY)}`);
  }

  return declarations.join(";");
}

function buildBlockTextStyleCss(style) {
  const safeStyle = sanitizeBlockTextStyle(style);
  const declarations = [];

  if (safeStyle.color) {
    declarations.push(`color:${safeStyle.color}`);
  }

  if (safeStyle.size !== "") {
    declarations.push(`font-size:${safeStyle.size}px`);
  }

  if (safeStyle.font) {
    declarations.push(`font-family:${resolveFontFamilyStack(safeStyle.font, DEFAULT_BODY_FONT_FAMILY)}`);
  }

  if (safeStyle.align) {
    declarations.push(`text-align:${safeStyle.align}`);
  }

  if (safeStyle.indent !== "") {
    declarations.push(`text-indent:${safeStyle.indent}px`);
  }

  if (safeStyle.spacing !== "") {
    declarations.push(`margin-bottom:${safeStyle.spacing}px`);
  }

  return declarations.join(";");
}

function extractLeadingBlockTextStyleToken(text) {
  const match = String(text || "").match(/^\s*\{\{block-style\s+([^}]+)\}\}\s*/i);

  if (!match) {
    return {
      matched: false,
      style: sanitizeBlockTextStyle({}),
      text: String(text || ""),
    };
  }

  return {
    matched: true,
    style: sanitizeBlockTextStyle(parseStyleDeclarationMap(match[1])),
    text: String(text || "").slice(match[0].length),
  };
}

function sanitizeBlockToken(value, fallback = "") {
  const normalized = String(value == null ? "" : value)
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

  return normalized || fallback;
}

function sanitizeBlockControl(rawControl = {}) {
  return {
    id: sanitizeBlockToken(rawControl.id || rawControl.anchor || rawControl.name || ""),
    role: sanitizeBlockToken(rawControl.role || rawControl.type || ""),
    variant: sanitizeBlockToken(rawControl.variant || rawControl.layout || ""),
  };
}

function parseBlockControlDeclaration(source) {
  const raw = String(source || "").trim();

  if (!raw) {
    return sanitizeBlockControl({});
  }

  if (!/[=;,]/.test(raw)) {
    return sanitizeBlockControl({ id: raw });
  }

  return sanitizeBlockControl(parseStyleDeclarationMap(raw.replace(/\s+(?=[a-zA-Z][\w-]*=)/g, ";")));
}

function extractLeadingBlockControlToken(text) {
  const input = String(text || "");
  const shortMatch = input.match(/^\s*\{\{#([^}]+)\}\}\s*/);
  const longMatch = input.match(/^\s*\{\{block\s+([^}]+)\}\}\s*/i);
  const match = shortMatch || longMatch;

  if (!match) {
    return {
      matched: false,
      control: sanitizeBlockControl({}),
      text: input,
    };
  }

  return {
    matched: true,
    control: parseBlockControlDeclaration(match[1]),
    text: input.slice(match[0].length),
  };
}

function parseStandaloneBlockControlLine(line) {
  const input = String(line || "").trim();
  const shortMatch = input.match(/^\{\{#([^}]+)\}\}$/);
  const longMatch = input.match(/^\{\{block\s+([^}]+)\}\}$/i);
  const match = shortMatch || longMatch;

  if (!match) {
    return {
      matched: false,
      control: sanitizeBlockControl({}),
    };
  }

  return {
    matched: true,
    control: parseBlockControlDeclaration(match[1]),
  };
}

function mergeBlockControls(...controls) {
  return sanitizeBlockControl(controls.reduce((merged, control) => ({
    ...merged,
    ...Object.fromEntries(
      Object.entries(sanitizeBlockControl(control)).filter(([, value]) => value),
    ),
  }), {}));
}

function extractLeadingBlockDirectives(text) {
  let rest = String(text || "");
  let style = sanitizeBlockTextStyle({});
  let control = sanitizeBlockControl({});

  for (let attempts = 0; attempts < 4; attempts += 1) {
    const blockControl = extractLeadingBlockControlToken(rest);

    if (blockControl.matched) {
      control = mergeBlockControls(control, blockControl.control);
      rest = blockControl.text;
      continue;
    }

    const blockStyle = extractLeadingBlockTextStyleToken(rest);

    if (blockStyle.matched) {
      style = blockStyle.style;
      rest = blockStyle.text;
      continue;
    }

    break;
  }

  return {
    control,
    style,
    text: rest,
  };
}

function createMarkdownRenderContext(options = {}) {
  return {
    tableSignatureCounts: options.tableSignatureCounts || Object.create(null),
    blockTracker: options.blockTracker || {
      count: 0,
      ids: Object.create(null),
    },
    lineOffset: Number.isFinite(Number(options.lineOffset)) ? Number(options.lineOffset) : 0,
  };
}

function normalizeMarkdownRenderContext(context = {}) {
  if (!context || typeof context !== "object") {
    return createMarkdownRenderContext();
  }

  if (!context.tableSignatureCounts) {
    context.tableSignatureCounts = Object.create(null);
  }

  if (!context.blockTracker) {
    context.blockTracker = {
      count: 0,
      ids: Object.create(null),
    };
  }

  if (!context.blockTracker.ids) {
    context.blockTracker.ids = Object.create(null);
  }

  if (!Number.isFinite(Number(context.lineOffset))) {
    context.lineOffset = 0;
  }

  return context;
}

function createChildRenderContext(context, lineOffset) {
  const parent = normalizeMarkdownRenderContext(context);
  return {
    tableSignatureCounts: parent.tableSignatureCounts,
    blockTracker: parent.blockTracker,
    lineOffset: Number.isFinite(Number(lineOffset)) ? Number(lineOffset) : parent.lineOffset,
  };
}

function getUniqueMarkdownBlockId(context, preferredId) {
  const tracker = normalizeMarkdownRenderContext(context).blockTracker;
  const base = sanitizeBlockToken(preferredId, `md-block-${String(tracker.count).padStart(3, "0")}`);
  const usedCount = tracker.ids[base] || 0;
  tracker.ids[base] = usedCount + 1;
  return usedCount ? `${base}-${usedCount + 1}` : base;
}

function buildMarkdownBlockTrackingAttributes(context, startIndex, nextIndex, options = {}) {
  const renderContext = normalizeMarkdownRenderContext(context);
  const control = sanitizeBlockControl(options.control);
  renderContext.blockTracker.count += 1;

  const blockIndex = renderContext.blockTracker.count;
  const blockId = getUniqueMarkdownBlockId(renderContext, control.id || `md-block-${String(blockIndex).padStart(3, "0")}`);
  const sourceStartIndex = Number.isFinite(Number(options.controlSourceIndex))
    ? Math.min(Number(options.controlSourceIndex), startIndex)
    : startIndex;
  const sourceStart = renderContext.lineOffset + sourceStartIndex + 1;
  const sourceEnd = renderContext.lineOffset + Math.max(sourceStartIndex, nextIndex - 1) + 1;
  const attrs = [
    ` data-md-block-id="${escapeAttribute(blockId)}"`,
    ` data-md-block-index="${blockIndex}"`,
    ` data-md-source-start="${sourceStart}"`,
    ` data-md-source-end="${sourceEnd}"`,
    ` data-md-source-range="${sourceStart}-${sourceEnd}"`,
  ];

  if (control.id) {
    attrs.push(` id="${escapeAttribute(blockId)}"`);
    attrs.push(` data-md-anchor="${escapeAttribute(control.id)}"`);
    attrs.push(' data-md-explicit-id="true"');
  }

  if (control.role) {
    attrs.push(` data-md-role="${escapeAttribute(control.role)}"`);
  }

  if (control.variant) {
    attrs.push(` data-md-variant="${escapeAttribute(control.variant)}"`);
  }

  return attrs.join("");
}

function injectMarkdownBlockTrackingAttributes(html, attrs) {
  if (!attrs) {
    return html;
  }

  return String(html || "").replace(/^(\s*<[a-zA-Z][\w:-]*)(?=[\s>])/, `$1${attrs}`);
}

function unwrapElementPreserveChildren(element) {
  if (!element || !element.parentNode) {
    return;
  }

  const parent = element.parentNode;
  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }
  element.remove();
}

function stripInlineTextStyleDescendants(root) {
  if (!root || typeof root.querySelectorAll !== "function") {
    return;
  }

  Array.from(root.querySelectorAll(".inline-text-style")).forEach(unwrapElementPreserveChildren);
}

function rangeSelectsEntireNodeContents(range, node) {
  if (!range || !node) {
    return false;
  }

  const probe = document.createRange();
  probe.selectNodeContents(node);
  return range.compareBoundaryPoints(Range.START_TO_START, probe) === 0
    && range.compareBoundaryPoints(Range.END_TO_END, probe) === 0;
}

function findSelectedInlineTextStyleAncestor(root, range) {
  if (!root || !range) {
    return null;
  }

  const startElement = range.startContainer.nodeType === Node.ELEMENT_NODE
    ? range.startContainer
    : range.startContainer.parentElement;
  const endElement = range.endContainer.nodeType === Node.ELEMENT_NODE
    ? range.endContainer
    : range.endContainer.parentElement;
  const startAncestor = startElement && typeof startElement.closest === "function"
    ? startElement.closest(".inline-text-style")
    : null;
  const endAncestor = endElement && typeof endElement.closest === "function"
    ? endElement.closest(".inline-text-style")
    : null;

  if (!startAncestor || startAncestor !== endAncestor || !root.contains(startAncestor)) {
    return null;
  }

  return rangeSelectsEntireNodeContents(range, startAncestor) ? startAncestor : null;
}

function findBalancedInlineTokenEnd(source, contentStartIndex) {
  let depth = 1;

  for (let index = contentStartIndex; index < source.length - 1; index += 1) {
    const pair = source.slice(index, index + 2);

    if (pair === "{{") {
      depth += 1;
      index += 1;
      continue;
    }

    if (pair === "}}") {
      depth -= 1;

      if (depth === 0) {
        return index;
      }

      index += 1;
    }
  }

  return -1;
}

function replaceBalancedInlineToken(source, tokenName, replacer) {
  const input = String(source || "");
  const opener = `{{${tokenName} `;
  let cursor = 0;
  let output = "";

  while (cursor < input.length) {
    const tokenStart = input.indexOf(opener, cursor);

    if (tokenStart === -1) {
      output += input.slice(cursor);
      break;
    }

    output += input.slice(cursor, tokenStart);
    const styleStart = tokenStart + opener.length;
    const separatorIndex = input.indexOf(":", styleStart);

    if (separatorIndex === -1) {
      output += input.slice(tokenStart);
      break;
    }

    const tokenEnd = findBalancedInlineTokenEnd(input, separatorIndex + 1);

    if (tokenEnd === -1) {
      output += input.slice(tokenStart);
      break;
    }

    const rawStyle = input.slice(styleStart, separatorIndex);
    const content = input.slice(separatorIndex + 1, tokenEnd);
    output += replacer(rawStyle, content);
    cursor = tokenEnd + 2;
  }

  return output;
}

function getInlineTextStyleFromElement(element) {
  if (!element || !element.dataset) {
    return sanitizeInlineTextStyle({});
  }

  return sanitizeInlineTextStyle({
    color: element.dataset.mdTextColor || "",
    font: element.dataset.mdTextFont || "",
    size: element.dataset.mdTextSize || "",
  });
}

function setInlineTextStyleOnElement(element, nextStyle) {
  if (!element || !element.dataset) {
    return sanitizeInlineTextStyle({});
  }

  const style = sanitizeInlineTextStyle({
    ...getInlineTextStyleFromElement(element),
    ...nextStyle,
  });
  const cssText = buildInlineTextStyleCss(style);

  element.classList.add("inline-text-style");

  if (style.color) {
    element.dataset.mdTextColor = style.color;
  } else {
    delete element.dataset.mdTextColor;
  }

  if (style.font) {
    element.dataset.mdTextFont = style.font;
  } else {
    delete element.dataset.mdTextFont;
  }

  if (style.size !== "") {
    element.dataset.mdTextSize = String(style.size);
  } else {
    delete element.dataset.mdTextSize;
  }

  if (cssText) {
    element.setAttribute("style", cssText);
  } else {
    element.removeAttribute("style");
  }

  return style;
}

function getBlockTextStyleFromElement(element) {
  if (!element || !element.dataset) {
    return sanitizeBlockTextStyle({});
  }

  return sanitizeBlockTextStyle({
    color: element.dataset.mdBlockColor || "",
    font: element.dataset.mdBlockFont || "",
    size: element.dataset.mdBlockSize || "",
    align: element.dataset.mdBlockAlign || "",
    indent: element.dataset.mdBlockIndent || "",
    spacing: element.dataset.mdBlockSpacing || "",
  });
}

function setBlockTextStyleOnElement(element, nextStyle) {
  if (!element || !element.dataset) {
    return sanitizeBlockTextStyle({});
  }

  const style = sanitizeBlockTextStyle({
    ...getBlockTextStyleFromElement(element),
    ...nextStyle,
  });
  const cssText = buildBlockTextStyleCss(style);

  element.classList.add("block-text-style");

  if (style.color) {
    element.dataset.mdBlockColor = style.color;
  } else {
    delete element.dataset.mdBlockColor;
  }

  if (style.font) {
    element.dataset.mdBlockFont = style.font;
  } else {
    delete element.dataset.mdBlockFont;
  }

  if (style.size !== "") {
    element.dataset.mdBlockSize = String(style.size);
  } else {
    delete element.dataset.mdBlockSize;
  }

  if (style.align) {
    element.dataset.mdBlockAlign = style.align;
  } else {
    delete element.dataset.mdBlockAlign;
  }

  if (style.indent !== "") {
    element.dataset.mdBlockIndent = String(style.indent);
  } else {
    delete element.dataset.mdBlockIndent;
  }

  if (style.spacing !== "") {
    element.dataset.mdBlockSpacing = String(style.spacing);
  } else {
    delete element.dataset.mdBlockSpacing;
  }

  if (cssText) {
    element.setAttribute("style", cssText);
  } else {
    element.removeAttribute("style");
  }

  return style;
}

function clearInlineTextStyleOnElement(element) {
  if (!element || !element.dataset) {
    return;
  }

  delete element.dataset.mdTextColor;
  delete element.dataset.mdTextFont;
  delete element.dataset.mdTextSize;
  element.classList.remove("inline-text-style");
  element.removeAttribute("style");
}

function clearBlockTextStyleOnElement(element) {
  if (!element || !element.dataset) {
    return;
  }

  delete element.dataset.mdBlockColor;
  delete element.dataset.mdBlockFont;
  delete element.dataset.mdBlockSize;
  delete element.dataset.mdBlockAlign;
  delete element.dataset.mdBlockIndent;
  delete element.dataset.mdBlockSpacing;
  element.classList.remove("block-text-style");
  element.removeAttribute("style");
}

function clampNumber(value, min, max, fallback) {
  if (value == null || (typeof value === "string" && value.trim() === "")) {
    return fallback;
  }

  const number = Number(value);

  if (!Number.isFinite(number)) {
    return fallback;
  }

  return Math.min(max, Math.max(min, number));
}

function migrateLegacyCompactValue(rawValue, legacyValue, nextValue) {
  if (rawValue == null) {
    return rawValue;
  }

  const numeric = Number(rawValue);

  if (!Number.isFinite(numeric)) {
    return rawValue;
  }

  const legacyValues = Array.isArray(legacyValue) ? legacyValue : [legacyValue];
  return legacyValues.some((value) => Math.abs(numeric - value) < 0.001) ? nextValue : rawValue;
}

function applyReadableTypographyBaseline(target) {
  if (!target) {
    return target;
  }

  Object.entries(READABLE_TYPOGRAPHY_BASELINE).forEach(([key, value]) => {
    target[key] = value;
  });

  return target;
}

function enforceTypeScale(target) {
  if (!target) {
    return target;
  }

  target.fontSize = clampNumber(target.fontSize, 0, 24, DEFAULT_FONT_SIZE);
  target.heading1Size = clampNumber(target.heading1Size, 0, 64, DEFAULT_HEADING1_SIZE);
  target.heading2Size = clampNumber(target.heading2Size, 0, 42, DEFAULT_HEADING2_SIZE);
  target.heading3Size = clampNumber(target.heading3Size, 0, 34, DEFAULT_HEADING3_SIZE);
  target.heading4Size = clampNumber(target.heading4Size, 0, 28, DEFAULT_HEADING4_SIZE);

  return target;
}

function getElementStyleSourceValue(source, groupId, field) {
  const sourceGroup = source[groupId] && typeof source[groupId] === "object" ? source[groupId] : {};
  const topLevelMappings = {
    heading1: {
      fontSize: "heading1Size",
      lineHeight: "heading1LineHeight",
      spaceAfter: "headingSpaceH1",
    },
    heading2: {
      fontSize: "heading2Size",
      lineHeight: "heading2LineHeight",
      spaceBefore: "headingSpaceH2",
    },
    heading3: {
      fontSize: "heading3Size",
      lineHeight: "heading3LineHeight",
      spaceBefore: "headingSpaceH3",
    },
    heading4: {
      fontSize: "heading4Size",
      lineHeight: "heading4LineHeight",
      spaceBefore: "headingSpaceH4",
    },
    paragraph: {
      fontSize: "fontSize",
      lineHeight: "lineHeight",
      spaceAfter: "paragraphSpacing",
      indent: "paragraphIndent",
    },
    list: {
      fontSize: "fontSize",
      lineHeight: "lineHeight",
    },
    callout: {
      fontSize: "fontSize",
      lineHeight: "lineHeight",
    },
    table: {
      fontSize: "tableFontSize",
    },
  };

  if (sourceGroup[field.key] != null) {
    return sourceGroup[field.key];
  }

  const mappedKey = topLevelMappings[groupId]?.[field.key];
  return mappedKey && source[mappedKey] != null ? source[mappedKey] : field.defaultValue;
}

function getElementStyleDefaults(source = {}) {
  return ELEMENT_STYLE_SCHEMA.reduce((result, group) => {
    result[group.id] = group.fields.reduce((groupResult, field) => {
      groupResult[field.key] = clampNumber(
        getElementStyleSourceValue(source, group.id, field),
        field.min,
        field.max,
        field.defaultValue,
      );
      return groupResult;
    }, {});
    return result;
  }, {});
}

function normalizeElementStyles(rawValue) {
  if (!rawValue) {
    return getElementStyleDefaults();
  }

  if (typeof rawValue === "string") {
    try {
      return getElementStyleDefaults(JSON.parse(rawValue));
    } catch (_error) {
      return getElementStyleDefaults();
    }
  }

  return getElementStyleDefaults(rawValue);
}

function resolveElementStyles(options = {}, resolvedOptions = {}) {
  if (options.elementStyles) {
    return normalizeElementStyles(options.elementStyles);
  }

  return getElementStyleDefaults({ ...options, ...resolvedOptions });
}

function getElementStyleGroup(groupId) {
  return ELEMENT_STYLE_SCHEMA.find((group) => group.id === groupId) || ELEMENT_STYLE_SCHEMA[0];
}

function getElementStyleField(groupId, fieldKey) {
  const group = getElementStyleGroup(groupId);
  return group.fields.find((field) => field.key === fieldKey) || null;
}

function formatElementStyleCssValue(field, value) {
  const normalizedValue = clampNumber(value, field.min, field.max, field.defaultValue);
  return field.unit === "px" ? `${normalizedValue}px` : String(normalizedValue);
}

function forEachElementStyleDeclaration(elementStyles, callback) {
  const normalized = normalizeElementStyles(elementStyles);

  ELEMENT_STYLE_SCHEMA.forEach((group) => {
    group.fields.forEach((field) => {
      callback(field.cssVar, formatElementStyleCssValue(field, normalized[group.id][field.key]), group, field);
    });
  });
}

function buildElementStyleDeclarations(elementStyles) {
  const declarations = [];

  forEachElementStyleDeclaration(elementStyles, (cssVar, cssValue) => {
    declarations.push(`${cssVar}:${cssValue}`);
  });

  return declarations;
}

function applyElementStyleProperties(target, elementStyles) {
  if (!target || !target.style) {
    return;
  }

  forEachElementStyleDeclaration(elementStyles, (cssVar, cssValue) => {
    target.style.setProperty(cssVar, cssValue);
  });
}

function syncElementStylesFromGlobalControl(elementStyles, controlKey, value) {
  const nextStyles = normalizeElementStyles(elementStyles);
  const mappings = {
    fontSize: [["paragraph", "fontSize"], ["list", "fontSize"], ["callout", "fontSize"]],
    heading1Size: [["heading1", "fontSize"]],
    heading2Size: [["heading2", "fontSize"]],
    heading3Size: [["heading3", "fontSize"]],
    heading4Size: [["heading4", "fontSize"]],
    tableFontSize: [["table", "fontSize"]],
    lineHeight: [["paragraph", "lineHeight"], ["list", "lineHeight"], ["callout", "lineHeight"]],
    paragraphSpacing: [["paragraph", "spaceAfter"]],
    paragraphIndent: [["paragraph", "indent"]],
    heading1LineHeight: [["heading1", "lineHeight"]],
    heading2LineHeight: [["heading2", "lineHeight"]],
    heading3LineHeight: [["heading3", "lineHeight"]],
    heading4LineHeight: [["heading4", "lineHeight"]],
    headingSpaceH1: [["heading1", "spaceAfter"]],
    headingSpaceH2: [["heading2", "spaceBefore"]],
    headingSpaceH3: [["heading3", "spaceBefore"]],
    headingSpaceH4: [["heading4", "spaceBefore"]],
  };

  (mappings[controlKey] || []).forEach(([groupId, fieldKey]) => {
    const field = getElementStyleField(groupId, fieldKey);
    if (!field) {
      return;
    }

    nextStyles[groupId][fieldKey] = clampNumber(value, field.min, field.max, field.defaultValue);
  });

  return nextStyles;
}

function normalizeCardLayoutEntry(rawValue = {}) {
  const source = rawValue && typeof rawValue === "object" ? rawValue : {};
  return {
    width: clampNumber(source.width, CARD_LAYOUT_LIMITS.width.min, CARD_LAYOUT_LIMITS.width.max, CARD_LAYOUT_DEFAULTS.width),
    height: clampNumber(source.height, CARD_LAYOUT_LIMITS.height.min, CARD_LAYOUT_LIMITS.height.max, CARD_LAYOUT_DEFAULTS.height),
    paddingX: clampNumber(source.paddingX, CARD_LAYOUT_LIMITS.paddingX.min, CARD_LAYOUT_LIMITS.paddingX.max, CARD_LAYOUT_DEFAULTS.paddingX),
    paddingY: clampNumber(source.paddingY, CARD_LAYOUT_LIMITS.paddingY.min, CARD_LAYOUT_LIMITS.paddingY.max, CARD_LAYOUT_DEFAULTS.paddingY),
    textScale: clampNumber(source.textScale, CARD_LAYOUT_LIMITS.textScale.min, CARD_LAYOUT_LIMITS.textScale.max, CARD_LAYOUT_DEFAULTS.textScale),
  };
}

function hasCustomCardLayout(entry) {
  const normalized = normalizeCardLayoutEntry(entry);
  return normalized.width !== CARD_LAYOUT_DEFAULTS.width
    || normalized.height !== CARD_LAYOUT_DEFAULTS.height
    || normalized.paddingX !== CARD_LAYOUT_DEFAULTS.paddingX
    || normalized.paddingY !== CARD_LAYOUT_DEFAULTS.paddingY
    || normalized.textScale !== CARD_LAYOUT_DEFAULTS.textScale;
}

function normalizeCardLayouts(rawValue) {
  let source = rawValue;

  if (typeof source === "string") {
    try {
      source = JSON.parse(source);
    } catch (_error) {
      source = {};
    }
  }

  if (!source || typeof source !== "object" || Array.isArray(source)) {
    return {};
  }

  const normalized = {};
  Object.entries(source).slice(0, CARD_LAYOUT_MAX_ENTRIES).forEach(([rawKey, rawEntry]) => {
    const key = sanitizeBlockToken(rawKey, "");
    const entry = normalizeCardLayoutEntry(rawEntry);

    if (key && hasCustomCardLayout(entry)) {
      normalized[key] = entry;
    }
  });

  return normalized;
}

function normalizeCardOrder(rawValue) {
  let source = rawValue;

  if (typeof source === "string") {
    try {
      source = JSON.parse(source);
    } catch (_error) {
      source = [];
    }
  }

  if (!Array.isArray(source)) {
    return [];
  }

  const seen = new Set();
  return source
    .map((key) => sanitizeBlockToken(key, ""))
    .filter((key) => {
      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, CARD_LAYOUT_MAX_ENTRIES);
}

function setCardLayoutEntry(cardLayouts, cardKey, patch) {
  const key = sanitizeBlockToken(cardKey, "");
  const nextLayouts = normalizeCardLayouts(cardLayouts);

  if (!key) {
    return nextLayouts;
  }

  const nextEntry = normalizeCardLayoutEntry({
    ...nextLayouts[key],
    ...(patch || {}),
  });

  if (hasCustomCardLayout(nextEntry)) {
    nextLayouts[key] = nextEntry;
  } else {
    delete nextLayouts[key];
  }

  return nextLayouts;
}

function getCardLayoutKey(card) {
  return card?.dataset ? String(card.dataset.cardLayoutKey || "") : "";
}

function getCardLayoutEntry(cardLayouts, cardKey) {
  const key = sanitizeBlockToken(cardKey, "");
  const normalizedLayouts = normalizeCardLayouts(cardLayouts);
  return normalizeCardLayoutEntry(key ? normalizedLayouts[key] : {});
}

function getCardLayoutTargets(root) {
  if (!root || !root.querySelectorAll) {
    return [];
  }

  return Array.from(root.querySelectorAll(":scope > .knowledge-cluster, :scope > .question-card, :scope > .question-answer-item"))
    .filter((card) => card.classList && !card.classList.contains("question-card-fragment"));
}

function getAllCardLayoutTargets(root) {
  if (!root || !root.querySelectorAll) {
    return [];
  }

  return Array.from(root.querySelectorAll(".knowledge-cluster, .knowledge-cluster-fragment, .question-card, .question-answer-item"));
}

function getInteractiveCardLayoutTargets(root) {
  if (!root || !root.querySelectorAll) {
    return [];
  }

  const cards = [];
  const seen = new Set();

  getAllCardLayoutTargets(root).forEach((card) => {
    const key = getCardLayoutKey(card);

    if (!key || seen.has(key)) {
      return;
    }

    seen.add(key);
    cards.push(card);
  });

  return cards;
}

function getStableCardBaseKey(card, mode, index) {
  const title = card.querySelector?.(":scope .knowledge-cluster-title, :scope .question-card-title, :scope .question-answer-item-title");
  const tracked = title?.dataset?.mdBlockId || card.dataset?.mdBlockId || "";
  const text = (title?.textContent || card.textContent || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 48);

  return sanitizeBlockToken(`${mode || "card"}-${tracked || text || index + 1}`, `card-${index + 1}`);
}

function syncDescendantCardLayoutKeys(card, key) {
  if (!card || !key || !card.querySelectorAll) {
    return;
  }

  Array.from(card.querySelectorAll(".question-card, .question-answer-item")).forEach((nestedCard) => {
    nestedCard.dataset.cardLayoutKey = key;
  });
}

function assignCardLayoutKeys(root, mode) {
  const seen = {};

  getCardLayoutTargets(root).forEach((card, index) => {
    const baseKey = getStableCardBaseKey(card, mode, index);
    const usedCount = seen[baseKey] || 0;
    seen[baseKey] = usedCount + 1;
    const key = usedCount ? `${baseKey}-${usedCount + 1}` : baseKey;

    card.dataset.cardLayoutKey = key;
    syncDescendantCardLayoutKeys(card, key);
  });
}

function applyCardOrder(root, order) {
  if (!root || !Array.isArray(order) || !order.length) {
    return;
  }

  const orderList = normalizeCardOrder(order);
  const orderIndex = new Map(orderList.map((key, index) => [key, index]));
  const children = Array.from(root.children || []);
  const runs = [];
  let currentRun = [];

  const flushRun = () => {
    if (currentRun.length > 1) {
      runs.push(currentRun);
    }
    currentRun = [];
  };

  children.forEach((child) => {
    if (child.matches?.(".knowledge-cluster, .question-card, .question-answer-item")) {
      currentRun.push(child);
      return;
    }

    flushRun();
  });
  flushRun();

  runs.forEach((run) => {
    const sortedRun = run
      .map((card, index) => ({
        card,
        index,
        key: getCardLayoutKey(card),
      }))
      .sort((left, right) => {
        const leftOrder = orderIndex.has(left.key) ? orderIndex.get(left.key) : Number.MAX_SAFE_INTEGER;
        const rightOrder = orderIndex.has(right.key) ? orderIndex.get(right.key) : Number.MAX_SAFE_INTEGER;

        if (leftOrder !== rightOrder) {
          return leftOrder - rightOrder;
        }

        return left.index - right.index;
      });

    if (!sortedRun.some((entry, index) => entry.card !== run[index])) {
      return;
    }

    const anchor = run[run.length - 1].nextSibling;
    sortedRun.forEach((entry) => {
      root.insertBefore(entry.card, anchor);
    });
  });
}

function compactCardOrder(root, order) {
  const cards = getCardLayoutTargets(root);
  const availableKeys = new Set(cards.map(getCardLayoutKey).filter(Boolean));
  const nextOrder = normalizeCardOrder(order).filter((key) => availableKeys.has(key));

  cards.forEach((card) => {
    const key = getCardLayoutKey(card);
    if (key && !nextOrder.includes(key)) {
      nextOrder.push(key);
    }
  });

  return nextOrder;
}

function applyCardLayouts(root, cardLayouts = {}) {
  const normalizedLayouts = normalizeCardLayouts(cardLayouts);

  getAllCardLayoutTargets(root).forEach((card) => {
    const layout = getCardLayoutEntry(normalizedLayouts, getCardLayoutKey(card));

    card.classList.add("layout-editable-card");
    card.style.removeProperty("--card-text-scale");
    card.style.removeProperty("--card-auto-text-scale");
    card.style.removeProperty("--card-padding-x");
    card.style.removeProperty("--card-padding-y");
    card.style.removeProperty("width");
    card.style.removeProperty("max-width");
    card.style.removeProperty("min-height");

    if (layout.width > 0) {
      card.style.width = `${layout.width}px`;
      card.style.maxWidth = "100%";
    }

    if (layout.height > 0) {
      card.style.minHeight = `${layout.height}px`;
    }

    if (layout.paddingX > 0) {
      card.style.setProperty("--card-padding-x", `${layout.paddingX}px`);
    }

    if (layout.paddingY > 0) {
      card.style.setProperty("--card-padding-y", `${layout.paddingY}px`);
    }

    if (layout.textScale !== CARD_LAYOUT_DEFAULTS.textScale) {
      card.style.setProperty("--card-text-scale", String(layout.textScale / 100));
    }
  });
}

function formatLineHeight(value) {
  return Number(value).toFixed(2).replace(/0$/, "").replace(/\.0$/, "");
}

function formatPixelValue(value) {
  return `${Math.round(Number(value) || 0)} px`;
}

function formatDecimalPixelValue(value) {
  const numericValue = Number(value) || 0;
  return `${numericValue.toFixed(1).replace(/\.0$/, "")} px`;
}

function formatMillimeterValue(value) {
  return `${Math.round(Number(value) || 0)} mm`;
}

function formatPercentValue(value) {
  return `${Math.round(clampNumber(value, 0, 1, 0) * 100)}%`;
}

function getStepPrecision(step) {
  const stepValue = String(step);
  const decimalIndex = stepValue.indexOf(".");
  return decimalIndex === -1 ? 0 : stepValue.length - decimalIndex - 1;
}

function formatNumericInputValue(value, step = 1) {
  const numericValue = Number(value) || 0;
  const precision = getStepPrecision(step);
  if (!precision) {
    return String(Math.round(numericValue));
  }

  return String(Number(numericValue.toFixed(precision)));
}

function snapValueToStep(value, min, step) {
  const stepValue = Number(step);
  if (!Number.isFinite(stepValue) || stepValue <= 0) {
    return value;
  }

  const precision = getStepPrecision(stepValue);
  const stepCount = Math.round((value - min) / stepValue);
  return Number((min + stepCount * stepValue).toFixed(precision));
}

function extractFormattedUnit(formattedValue) {
  const match = String(formattedValue || "").trim().match(/^-?\d+(?:\.\d+)?\s*(.*)$/);
  return match ? match[1].trim() : "";
}

function buildNumericOptionValues(min, max, step, defaultValue) {
  const minValue = Number(min);
  const maxValue = Number(max);
  const stepValue = Number(step);

  if (!Number.isFinite(minValue) || !Number.isFinite(maxValue) || !Number.isFinite(stepValue) || stepValue <= 0) {
    return [formatNumericInputValue(defaultValue, stepValue || 1)];
  }

  const optionCount = Math.floor((maxValue - minValue) / stepValue) + 1;
  const stride = optionCount > 180 ? Math.ceil(optionCount / 96) : 1;
  const values = new Set();
  const addValue = (value) => {
    const numericValue = snapValueToStep(clampNumber(value, minValue, maxValue, defaultValue), minValue, stepValue);
    values.add(formatNumericInputValue(numericValue, stepValue));
  };

  for (let index = 0; index < optionCount; index += stride) {
    addValue(minValue + index * stepValue);
  }

  addValue(defaultValue);
  addValue(maxValue);

  return Array.from(values).sort((left, right) => Number(left) - Number(right));
}

function ensureNumericOptionsList(rangeInput, min, max, step, formatter) {
  const listId = `${rangeInput.id || "numericControl"}Options`;
  let optionsList = document.getElementById(listId);

  if (!optionsList) {
    optionsList = document.createElement("datalist");
    optionsList.id = listId;
    rangeInput.insertAdjacentElement("afterend", optionsList);
  }

  const options = buildNumericOptionValues(min, max, step, rangeInput.value).map((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.label = formatter(value);
    return option;
  });

  optionsList.replaceChildren(...options);
  return listId;
}

function updateNumericDisplay(display, value, formatter, step = 1, disabled = false) {
  if (!display) {
    return;
  }

  const formattedValue = formatter(value);
  const scrubberInput = display.querySelector(".range-combo-input, .range-scrubber-input");
  const scrubberUnit = display.querySelector(".range-combo-unit, .range-scrubber-unit");
  const scrubberDecrease = display.querySelector(".range-scrubber-step[data-step-dir='down']");
  const scrubberIncrease = display.querySelector(".range-scrubber-step[data-step-dir='up']");

  if (!scrubberInput || !scrubberUnit) {
    display.textContent = formattedValue;
    return;
  }

  scrubberInput.value = formatNumericInputValue(value, step);
  scrubberInput.disabled = disabled;
  scrubberInput.setAttribute("aria-label", formattedValue);
  scrubberUnit.textContent = extractFormattedUnit(formattedValue);
  scrubberUnit.hidden = !scrubberUnit.textContent;
  if (scrubberDecrease) {
    scrubberDecrease.disabled = disabled;
  }
  if (scrubberIncrease) {
    scrubberIncrease.disabled = disabled;
  }
  display.title = formattedValue;
  display.classList.toggle("is-disabled", disabled);
}

function getRangeControlField(rangeInput) {
  return rangeInput?.closest?.(".range-field, .page-inline-item") || null;
}

function updateRangeControlVisual(rangeInput) {
  if (!rangeInput) {
    return;
  }

  const min = Number(rangeInput.min);
  const max = Number(rangeInput.max);
  const value = Number(rangeInput.value);
  const progress = Number.isFinite(min) && Number.isFinite(max) && max > min && Number.isFinite(value)
    ? ((value - min) / (max - min)) * 100
    : 0;
  const normalizedProgress = Math.max(0, Math.min(100, progress));
  const field = getRangeControlField(rangeInput);

  rangeInput.style.setProperty("--range-progress", `${normalizedProgress}%`);
  if (field) {
    field.style.setProperty("--range-progress", `${normalizedProgress}%`);
    field.classList.toggle("is-range-disabled", Boolean(rangeInput.disabled));
  }
}

function setRangeControlTuning(rangeInput, isTuning) {
  const field = getRangeControlField(rangeInput);

  rangeInput?.classList.toggle("is-tuning", Boolean(isTuning));
  field?.classList.toggle("is-tuning", Boolean(isTuning));
}

function syncRangeControlVisuals(root = document) {
  if (!root?.querySelectorAll) {
    return;
  }

  root.querySelectorAll(".range-field input[type='range'], .page-inline-item input[type='range']")
    .forEach(updateRangeControlVisual);
}

function initNumericScrubberLegacy({ rangeInput, display, min, max, step, defaultValue, formatValue }) {
  if (!rangeInput || !display) {
    return;
  }

  const resolvedStep = Number.isFinite(Number(step)) && Number(step) > 0 ? Number(step) : 1;
  const inputMode = resolvedStep < 1 ? "decimal" : "numeric";
  const decreaseButton = document.createElement("button");
  const editor = document.createElement("span");
  const numberInput = document.createElement("input");
  const unit = document.createElement("span");
  const increaseButton = document.createElement("button");

  decreaseButton.type = "button";
  decreaseButton.className = "range-scrubber-step";
  decreaseButton.dataset.stepDir = "down";
  decreaseButton.textContent = "-";
  decreaseButton.setAttribute("aria-label", "减少");

  dragHandle.type = "button";
  dragHandle.className = "range-scrubber-drag";
  dragHandle.textContent = "::";
  dragHandle.setAttribute("aria-label", "左右拖动调整数值");
  dragHandle.setAttribute("aria-label", "左右拖动调整数值");

  numberInput.type = "number";
  numberInput.className = "range-scrubber-input";
  numberInput.min = String(min);
  numberInput.max = String(max);
  numberInput.step = String(resolvedStep);
  numberInput.inputMode = inputMode;

  unit.className = "range-scrubber-unit";

  increaseButton.type = "button";
  increaseButton.className = "range-scrubber-step";
  increaseButton.dataset.stepDir = "up";
  increaseButton.textContent = "+";
  increaseButton.setAttribute("aria-label", "增加");

  display.textContent = "";
  display.classList.add("range-value-scrubber");
  display.append(decreaseButton, dragHandle, numberInput, unit, increaseButton);

  rangeInput.classList.add("range-native-input");

  const commitValue = (nextValue) => {
    const normalized = snapValueToStep(clampNumber(nextValue, min, max, defaultValue), min, resolvedStep);
    rangeInput.value = formatNumericInputValue(normalized, resolvedStep);
    rangeInput.dispatchEvent(new Event("input", { bubbles: true }));
    updateNumericDisplay(display, normalized, formatValue, resolvedStep, Boolean(rangeInput.disabled));
  };

  numberInput.addEventListener("change", () => {
    commitValue(numberInput.value);
  });

  numberInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    commitValue(numberInput.value);
    numberInput.blur();
  });

  numberInput.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = event.deltaY < 0 ? resolvedStep : -resolvedStep;
    commitValue(Number(numberInput.value || rangeInput.value || defaultValue) + delta);
  });

  decreaseButton.addEventListener("click", () => {
    commitValue(Number(numberInput.value || rangeInput.value || defaultValue) - resolvedStep);
  });

  increaseButton.addEventListener("click", () => {
    commitValue(Number(numberInput.value || rangeInput.value || defaultValue) + resolvedStep);
  });

  let dragPointerId = null;
  let dragStartX = 0;
  let dragStartValue = defaultValue;
  let lastDragStep = 0;

  const finishDrag = (event) => {
    if (dragPointerId == null || event.pointerId !== dragPointerId) {
      return;
    }

    if (dragHandle.hasPointerCapture(event.pointerId)) {
      dragHandle.releasePointerCapture(event.pointerId);
    }

    dragHandle.classList.remove("is-dragging");
    dragPointerId = null;
    lastDragStep = 0;
  };

  dragHandle.addEventListener("pointerdown", (event) => {
    if (rangeInput.disabled) {
      return;
    }

    dragPointerId = event.pointerId;
    dragStartX = event.clientX;
    dragStartValue = clampNumber(rangeInput.value, min, max, defaultValue);
    lastDragStep = 0;
    dragHandle.setPointerCapture(event.pointerId);
    dragHandle.classList.add("is-dragging");
    event.preventDefault();
  });

  dragHandle.addEventListener("pointermove", (event) => {
    if (dragPointerId == null || event.pointerId !== dragPointerId) {
      return;
    }

    const pixelStep = resolvedStep < 1 ? 18 : 12;
    const dragStep = Math.round((event.clientX - dragStartX) / pixelStep);

    if (dragStep === lastDragStep) {
      return;
    }

    lastDragStep = dragStep;
    commitValue(dragStartValue + dragStep * resolvedStep);
  });

  dragHandle.addEventListener("pointerup", finishDrag);
  dragHandle.addEventListener("pointercancel", finishDrag);

  updateNumericDisplay(display, rangeInput.value, formatValue, resolvedStep, Boolean(rangeInput.disabled));
}

function initNumericScrubber({ rangeInput, display, min, max, step, defaultValue, formatValue }) {
  if (!rangeInput || !display) {
    return;
  }

  const resolvedStep = Number.isFinite(Number(step)) && Number(step) > 0 ? Number(step) : 1;
  const inputMode = resolvedStep < 1 ? "decimal" : "numeric";
  const editor = document.createElement("span");
  const numberInput = document.createElement("input");
  const unit = document.createElement("span");
  const optionsListId = ensureNumericOptionsList(rangeInput, min, max, resolvedStep, formatValue);

  if (display.dataset.numericControl === "combo") {
    updateNumericDisplay(display, rangeInput.value, formatValue, resolvedStep, Boolean(rangeInput.disabled));
    return;
  }

  editor.className = "range-combo-editor";

  numberInput.type = "text";
  numberInput.className = "range-combo-input";
  numberInput.setAttribute("list", optionsListId);
  numberInput.autocomplete = "off";
  numberInput.inputMode = inputMode;
  numberInput.spellcheck = false;
  numberInput.dataset.min = String(min);
  numberInput.dataset.max = String(max);
  numberInput.dataset.step = String(resolvedStep);

  unit.className = "range-combo-unit";

  editor.append(numberInput, unit);

  display.textContent = "";
  display.dataset.numericControl = "combo";
  display.classList.add("range-value-combo");
  display.classList.remove("range-value-scrubber");
  display.append(editor);

  rangeInput.classList.add("range-native-input", "precision-range");

  let pendingCommitTimer = null;

  const commitValue = (nextValue) => {
    window.clearTimeout(pendingCommitTimer);
    const normalized = snapValueToStep(clampNumber(nextValue, min, max, defaultValue), min, resolvedStep);
    rangeInput.value = formatNumericInputValue(normalized, resolvedStep);
    updateRangeControlVisual(rangeInput);
    rangeInput.dispatchEvent(new Event("input", { bubbles: true }));
    updateNumericDisplay(display, normalized, formatValue, resolvedStep, Boolean(rangeInput.disabled));
  };

  rangeInput.addEventListener("input", () => {
    updateRangeControlVisual(rangeInput);
  });

  rangeInput.addEventListener("pointerdown", (event) => {
    if (rangeInput.disabled) {
      return;
    }

    setRangeControlTuning(rangeInput, true);

    const finishTuning = () => {
      setRangeControlTuning(rangeInput, false);
    };

    window.addEventListener("pointerup", finishTuning, { once: true });
    window.addEventListener("pointercancel", finishTuning, { once: true });
    event.stopPropagation();
  });

  rangeInput.addEventListener("focus", () => setRangeControlTuning(rangeInput, true));
  rangeInput.addEventListener("blur", () => setRangeControlTuning(rangeInput, false));

  rangeInput.addEventListener("wheel", (event) => {
    if (rangeInput.disabled) {
      return;
    }

    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    const multiplier = event.shiftKey ? 5 : 1;
    const currentValue = Number(rangeInput.value || defaultValue);
    commitValue(currentValue + direction * resolvedStep * multiplier);
  }, { passive: false });

  numberInput.addEventListener("input", () => {
    const nextValue = String(numberInput.value || "").trim();

    window.clearTimeout(pendingCommitTimer);

    if (!nextValue || nextValue === "-" || nextValue.endsWith(".") || !Number.isFinite(Number(nextValue))) {
      return;
    }

    pendingCommitTimer = window.setTimeout(() => {
      commitValue(nextValue);
    }, 280);
  });

  numberInput.addEventListener("change", () => {
    commitValue(numberInput.value);
  });

  numberInput.addEventListener("blur", () => {
    commitValue(numberInput.value);
  });

  numberInput.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown"].includes(event.key)) {
      event.preventDefault();
      const direction = event.key === "ArrowUp" || event.key === "PageUp" ? 1 : -1;
      const multiplier = event.key.startsWith("Page") || event.shiftKey ? 5 : 1;
      const currentValue = Number(numberInput.value || rangeInput.value || defaultValue);
      commitValue(currentValue + direction * resolvedStep * multiplier);
      return;
    }

    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    commitValue(numberInput.value);
    numberInput.blur();
  });

  numberInput.addEventListener("wheel", (event) => {
    if (document.activeElement !== numberInput || rangeInput.disabled) {
      return;
    }

    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    const multiplier = event.shiftKey ? 5 : 1;
    const currentValue = Number(numberInput.value || rangeInput.value || defaultValue);
    commitValue(currentValue + direction * resolvedStep * multiplier);
  }, { passive: false });

  updateRangeControlVisual(rangeInput);
  updateNumericDisplay(display, rangeInput.value, formatValue, resolvedStep, Boolean(rangeInput.disabled));
}

function normalizeBoolean(value, fallback = false) {
  if (value == null || value === "") {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  const normalized = String(value).trim().toLowerCase();

  if (["1", "true", "yes", "on"].includes(normalized)) {
    return true;
  }

  if (["0", "false", "no", "off"].includes(normalized)) {
    return false;
  }

  return fallback;
}

function mmToPx(value) {
  return roundNumber((Number(value) * 96) / 25.4, 3);
}

function roundNumber(value, precision = 2) {
  const factor = 10 ** precision;
  return Math.round(Number(value) * factor) / factor;
}

function hashString(value) {
  const source = String(value || "");
  let hash = 2166136261;

  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return (hash >>> 0).toString(36);
}

function resolveArticleOptions(options = {}) {
  const mode = sanitizeChoice(options.mode, MODE_METADATA, DEFAULT_MODE);
  const resolved = {
    theme: sanitizeChoice(options.theme, THEME_LABELS, DEFAULT_THEME),
    mode,
    questionAnswerLayout: sanitizeChoice(
      options.questionAnswerLayout,
      QUESTION_ANSWER_LAYOUTS,
      DEFAULT_QUESTION_ANSWER_LAYOUT,
    ),
    layoutPreset: sanitizeLayoutPresetForMode(options.layoutPreset, mode),
    bodyFontFamily: sanitizeChoice(options.bodyFontFamily, FONT_FAMILY_OPTIONS, DEFAULT_BODY_FONT_FAMILY),
    headingFontFamily: sanitizeChoice(options.headingFontFamily, FONT_FAMILY_OPTIONS, DEFAULT_HEADING_FONT_FAMILY),
    paragraphAlign: sanitizeChoice(options.paragraphAlign, PARAGRAPH_ALIGN_OPTIONS, DEFAULT_PARAGRAPH_ALIGN),
    lineHeight: clampNumber(options.lineHeight, 1.1, 2.4, DEFAULT_LINE_HEIGHT),
    letterSpacing: clampNumber(options.letterSpacing, -0.5, 2, DEFAULT_LETTER_SPACING),
  };

  ARTICLE_STYLE_CONTROLS.forEach((control) => {
    resolved[control.key] = clampNumber(options[control.key], control.min, control.max, control.defaultValue);
  });
  ARTICLE_PARAGRAPH_CONTROLS.forEach((control) => {
    resolved[control.key] = clampNumber(options[control.key], control.min, control.max, control.defaultValue);
  });
  HEADING_LINE_HEIGHT_CONTROLS.forEach((control) => {
    resolved[control.key] = clampNumber(options[control.key], control.min, control.max, control.defaultValue);
  });
  HEADING_SPACE_CONTROLS.forEach((control) => {
    resolved[control.key] = clampNumber(options[control.key], control.min, control.max, control.defaultValue);
  });

  enforceTypeScale(resolved);
  resolved.elementStyles = resolveElementStyles(options, resolved);
  resolved.cardLayouts = normalizeCardLayouts(options.cardLayouts);
  resolved.cardOrder = normalizeCardOrder(options.cardOrder);
  return resolved;
}

function buildArticleStyleAttribute(options, articleWidth) {
  const resolved = resolveArticleOptions(options);
  const declarations = [
    ...ARTICLE_STYLE_CONTROLS.map((control) => `${control.cssVar}:${resolved[control.key]}px`),
    ...ARTICLE_PARAGRAPH_CONTROLS.map((control) => `${control.cssVar}:${resolved[control.key]}px`),
    ...HEADING_LINE_HEIGHT_CONTROLS.map((control) => `${control.cssVar}:${resolved[control.key]}`),
    ...HEADING_SPACE_CONTROLS.map((control) => `${control.cssVar}:${resolved[control.key]}px`),
    ...buildElementStyleDeclarations(resolved.elementStyles),
    `--user-body-font-family:${resolveFontFamilyStack(resolved.bodyFontFamily, DEFAULT_BODY_FONT_FAMILY)}`,
    `--user-heading-font-family:${resolveFontFamilyStack(resolved.headingFontFamily, DEFAULT_HEADING_FONT_FAMILY)}`,
    `--user-paragraph-align:${resolved.paragraphAlign}`,
    `--user-line-height:${resolved.lineHeight}`,
    `--user-letter-spacing:${resolved.letterSpacing}px`,
  ].join(";");
  const questionLayoutAttr = resolved.mode === "question"
    ? `;--question-answer-layout:${resolved.questionAnswerLayout}`
    : "";
  const widthDeclarations = articleWidth == null
    ? ""
    : `;--canvas-width:${articleWidth}px;width:${articleWidth}px;max-width:${articleWidth}px;margin:0 auto;`;

  return `${declarations}${questionLayoutAttr}${widthDeclarations}`;
}

function applyArticleStyleProperties(target, options, articleWidth) {
  const resolved = resolveArticleOptions(options);

  target.dataset.mode = resolved.mode;
  target.dataset.layoutPreset = resolved.layoutPreset;
  target.dataset.questionAnswerLayout = resolved.questionAnswerLayout;

  ARTICLE_STYLE_CONTROLS.forEach((control) => {
    target.style.setProperty(control.cssVar, `${resolved[control.key]}px`);
  });
  ARTICLE_PARAGRAPH_CONTROLS.forEach((control) => {
    target.style.setProperty(control.cssVar, `${resolved[control.key]}px`);
  });
  HEADING_LINE_HEIGHT_CONTROLS.forEach((control) => {
    target.style.setProperty(control.cssVar, String(resolved[control.key]));
  });
  HEADING_SPACE_CONTROLS.forEach((control) => {
    target.style.setProperty(control.cssVar, `${resolved[control.key]}px`);
  });
  applyElementStyleProperties(target, resolved.elementStyles);

  target.style.setProperty("--user-body-font-family", resolveFontFamilyStack(resolved.bodyFontFamily, DEFAULT_BODY_FONT_FAMILY));
  target.style.setProperty("--user-heading-font-family", resolveFontFamilyStack(resolved.headingFontFamily, DEFAULT_HEADING_FONT_FAMILY));
  target.style.setProperty("--user-paragraph-align", resolved.paragraphAlign);
  target.style.setProperty("--user-line-height", String(resolved.lineHeight));
  target.style.setProperty("--user-letter-spacing", `${resolved.letterSpacing}px`);

  if (articleWidth != null) {
    target.style.setProperty("--canvas-width", `${articleWidth}px`);
    target.style.width = `${articleWidth}px`;
    target.style.maxWidth = `${articleWidth}px`;
    target.style.margin = "0 auto";
  }

  return resolved;
}

function getArticleExportOptions(state) {
  const options = {
    theme: state.theme,
    mode: state.mode,
    questionAnswerLayout: state.questionAnswerLayout,
    layoutPreset: state.layoutPreset,
    bodyFontFamily: state.bodyFontFamily,
    headingFontFamily: state.headingFontFamily,
    paragraphAlign: state.paragraphAlign,
    lineHeight: state.lineHeight,
    letterSpacing: state.letterSpacing,
    elementStyles: normalizeElementStyles(state.elementStyles),
    cardLayouts: normalizeCardLayouts(state.cardLayouts),
    cardOrder: normalizeCardOrder(state.cardOrder),
  };

  ARTICLE_STYLE_CONTROLS.forEach((control) => {
    options[control.key] = state[control.key];
  });
  ARTICLE_PARAGRAPH_CONTROLS.forEach((control) => {
    options[control.key] = state[control.key];
  });
  HEADING_LINE_HEIGHT_CONTROLS.forEach((control) => {
    options[control.key] = state[control.key];
  });
  HEADING_SPACE_CONTROLS.forEach((control) => {
    options[control.key] = state[control.key];
  });

  return options;
}

function resolvePageOptions(options = {}) {
  return {
    pageWidth: clampNumber(options.pageWidth, 148, 240, DEFAULT_PAGE_WIDTH),
    pageHeight: clampNumber(options.pageHeight, 210, 340, DEFAULT_PAGE_HEIGHT),
    pageMarginTop: clampNumber(options.pageMarginTop, 0, 36, DEFAULT_PAGE_MARGIN_TOP),
    pageMarginRight: clampNumber(options.pageMarginRight, 0, 32, DEFAULT_PAGE_MARGIN_RIGHT),
    pageMarginBottom: clampNumber(options.pageMarginBottom, 0, 36, DEFAULT_PAGE_MARGIN_BOTTOM),
    pageMarginLeft: clampNumber(options.pageMarginLeft, 0, 32, DEFAULT_PAGE_MARGIN_LEFT),
    pageHeaderEnabled: normalizeBoolean(options.pageHeaderEnabled, DEFAULT_PAGE_HEADER_ENABLED),
    pageHeaderText: String(options.pageHeaderText == null ? DEFAULT_PAGE_HEADER_TEXT : options.pageHeaderText).trim(),
    watermarkEnabled: normalizeBoolean(options.watermarkEnabled, DEFAULT_WATERMARK_ENABLED),
    watermarkText: String(options.watermarkText == null ? DEFAULT_WATERMARK_TEXT : options.watermarkText).trim(),
    watermarkOpacity: clampNumber(options.watermarkOpacity, 0, 0.24, DEFAULT_WATERMARK_OPACITY),
    exportBackgroundSrc: normalizeBackgroundSource(options.exportBackgroundSrc, DEFAULT_EXPORT_BACKGROUND_SRC),
    exportBackgroundName: normalizeBackgroundName(options.exportBackgroundName, DEFAULT_EXPORT_BACKGROUND_NAME),
    paginationStrategy: sanitizeChoice(
      options.paginationStrategy,
      PAGINATION_STRATEGIES,
      DEFAULT_PAGINATION_STRATEGY,
    ),
  };
}

function getPageLayoutOptions(state) {
  return {
    pageWidth: state.pageWidth,
    pageHeight: state.pageHeight,
    pageMarginTop: state.pageMarginTop,
    pageMarginRight: state.pageMarginRight,
    pageMarginBottom: state.pageMarginBottom,
    pageMarginLeft: state.pageMarginLeft,
    pageHeaderEnabled: state.pageHeaderEnabled,
    pageHeaderText: state.pageHeaderText,
    watermarkEnabled: state.watermarkEnabled,
    watermarkText: state.watermarkText,
    watermarkOpacity: state.watermarkOpacity,
    exportBackgroundSrc: state.exportBackgroundSrc,
    exportBackgroundName: state.exportBackgroundName,
    paginationStrategy: state.paginationStrategy,
  };
}

function getResolvedDocumentOptions(options = {}) {
  return {
    ...resolveArticleOptions(options),
    ...resolvePageOptions(options),
  };
}

function getPageMetrics(options = {}) {
  const resolved = resolvePageOptions(options);
  const headerHeightMm = resolved.pageHeaderEnabled ? PAGE_HEADER_HEIGHT_MM : 0;
  const headerGapMm = resolved.pageHeaderEnabled ? PAGE_HEADER_GAP_MM : 0;
  const contentWidthMm = Math.max(80, resolved.pageWidth - resolved.pageMarginLeft - resolved.pageMarginRight);
  const contentHeightMm = Math.max(
    100,
    resolved.pageHeight - resolved.pageMarginTop - resolved.pageMarginBottom - headerHeightMm - headerGapMm,
  );

  return {
    ...resolved,
    headerHeightMm,
    headerGapMm,
    contentWidthMm,
    contentHeightMm,
    pageWidthPx: mmToPx(resolved.pageWidth),
    pageHeightPx: mmToPx(resolved.pageHeight),
    contentWidthPx: mmToPx(contentWidthMm),
    contentHeightPx: mmToPx(contentHeightMm),
  };
}

function applyPageShellStyleProperties(target, options) {
  const metrics = getPageMetrics(options);
  const hasCustomBackground = Boolean(metrics.exportBackgroundSrc);
  target.style.setProperty("--page-width-mm", String(metrics.pageWidth));
  target.style.setProperty("--page-height-mm", String(metrics.pageHeight));
  target.style.setProperty("--page-margin-top-mm", String(metrics.pageMarginTop));
  target.style.setProperty("--page-margin-right-mm", String(metrics.pageMarginRight));
  target.style.setProperty("--page-margin-bottom-mm", String(metrics.pageMarginBottom));
  target.style.setProperty("--page-margin-left-mm", String(metrics.pageMarginLeft));
  target.style.setProperty("--page-header-height-mm", String(metrics.headerHeightMm));
  target.style.setProperty("--page-header-gap-mm", String(metrics.headerGapMm));
  target.style.setProperty("--page-watermark-opacity", String(metrics.watermarkOpacity));
  target.style.backgroundImage = hasCustomBackground
    ? `${buildCssUrlValue(metrics.exportBackgroundSrc)}, var(--page-background-gradient)`
    : "var(--page-background-gradient)";
  target.style.backgroundPosition = hasCustomBackground ? "center center, center center" : "center center";
  target.style.backgroundSize = hasCustomBackground ? "cover, 100% 100%" : "100% 100%";
  target.style.backgroundRepeat = hasCustomBackground ? "no-repeat, no-repeat" : "no-repeat";
  target.dataset.backgroundMode = hasCustomBackground ? "custom" : "theme";
  return metrics;
}

function buildPageBackgroundStyleAttribute(options = {}) {
  const resolved = resolvePageOptions(options);
  return `--page-background-image:${buildCssUrlValue(resolved.exportBackgroundSrc)};`;
}

function applyPageBackgroundStyleProperties(target, options = {}) {
  const resolved = resolvePageOptions(options);
  target.style.setProperty("--page-background-image", buildCssUrlValue(resolved.exportBackgroundSrc));
  target.dataset.backgroundMode = resolved.exportBackgroundSrc ? "custom" : "theme";
  return resolved;
}

function normalizeTableLayouts(rawValue) {
  if (!rawValue || typeof rawValue !== "object") {
    return {};
  }

  const entries = Object.entries(rawValue);
  const result = {};

  entries.forEach(([tableId, layout]) => {
    if (!layout || typeof layout !== "object") {
      return;
    }

    result[tableId] = {
      columns: Array.isArray(layout.columns)
        ? layout.columns.map((value) => clampNumber(value, 0, 100, 0))
        : [],
      rows: Array.isArray(layout.rows)
        ? layout.rows.map((value) => clampNumber(value, 0, MAX_TABLE_ROW_HEIGHT, 0))
        : [],
    };
  });

  return result;
}

function getStableTableId(tableLines, context) {
  const signatureSource = tableLines.slice(0, 2).join("\n");
  const tableSignature = `table-${hashString(signatureSource)}`;
  const nextCount = (context.tableSignatureCounts[tableSignature] || 0) + 1;
  context.tableSignatureCounts[tableSignature] = nextCount;
  return nextCount === 1 ? tableSignature : `${tableSignature}-${nextCount}`;
}

function buildTableGrid(table) {
  if (!table) {
    return {
      anchors: [],
      columnCount: 0,
      matrix: [],
      rowCount: 0,
    };
  }

  const rows = Array.from(table.rows || []);
  const matrix = [];
  const anchors = [];
  let columnCount = 0;

  rows.forEach((row, rowIndex) => {
    if (!matrix[rowIndex]) {
      matrix[rowIndex] = [];
    }

    let columnIndex = 0;

    Array.from(row.cells || []).forEach((cell) => {
      while (matrix[rowIndex][columnIndex]) {
        columnIndex += 1;
      }

      const rowspan = Math.max(1, Number(cell.rowSpan) || 1);
      const colspan = Math.max(1, Number(cell.colSpan) || 1);
      const entry = {
        cell,
        col: columnIndex,
        colspan,
        row: rowIndex,
        rowElement: row,
        rowspan,
      };

      anchors.push(entry);

      for (let rowOffset = 0; rowOffset < rowspan; rowOffset += 1) {
        if (!matrix[rowIndex + rowOffset]) {
          matrix[rowIndex + rowOffset] = [];
        }

        for (let columnOffset = 0; columnOffset < colspan; columnOffset += 1) {
          matrix[rowIndex + rowOffset][columnIndex + columnOffset] = {
            ...entry,
            isAnchor: rowOffset === 0 && columnOffset === 0,
          };
        }
      }

      columnIndex += colspan;
      columnCount = Math.max(columnCount, columnIndex);
    });
  });

  return {
    anchors,
    columnCount,
    matrix,
    rowCount: rows.length,
  };
}

function annotateManagedTableCellGrid(table) {
  const grid = buildTableGrid(table);

  if (table) {
    table._tableGrid = grid;
    table.dataset.columnCount = String(grid.columnCount);
    table.dataset.rowCount = String(grid.rowCount);
  }

  grid.anchors.forEach((entry) => {
    entry.cell.dataset.tableRow = String(entry.row);
    entry.cell.dataset.tableCol = String(entry.col);
    entry.cell.dataset.tableRowspan = String(entry.rowspan);
    entry.cell.dataset.tableColspan = String(entry.colspan);
    entry.cell.dataset.tableSection = entry.rowElement && entry.rowElement.parentElement
      ? String(entry.rowElement.parentElement.tagName || "").toLowerCase()
      : "";
  });

  return grid;
}

function getTableColumnCount(table) {
  return buildTableGrid(table).columnCount;
}

function normalizeColumnPercentages(values, columnCount, fallback = []) {
  if (!columnCount) {
    return [];
  }

  const safeValues = Array.from({ length: columnCount }, (_, index) => {
    const fallbackValue = fallback[index] != null ? fallback[index] : 100 / columnCount;
    return clampNumber(values[index], 0, 100, fallbackValue);
  });
  const total = safeValues.reduce((sum, value) => sum + value, 0);

  if (!total) {
    return Array.from({ length: columnCount }, (_, index) => {
      if (index === columnCount - 1) {
        return roundNumber(100 - (100 / columnCount) * (columnCount - 1), 4);
      }

      return roundNumber(100 / columnCount, 4);
    });
  }

  const result = [];
  let assigned = 0;

  safeValues.forEach((value, index) => {
    if (index === columnCount - 1) {
      result.push(roundNumber(Math.max(0, 100 - assigned), 4));
      return;
    }

    const normalized = roundNumber((value / total) * 100, 4);
    assigned += normalized;
    result.push(normalized);
  });

  return result;
}

function getTableMeasurementWidth(table) {
  if (!table) {
    return 0;
  }

  const tableWidth = Math.round(table.getBoundingClientRect().width);
  if (tableWidth > 0) {
    return tableWidth;
  }

  const parentWidth = table.parentElement ? Math.round(table.parentElement.getBoundingClientRect().width) : 0;
  if (parentWidth > 0) {
    return parentWidth;
  }

  return 720;
}

function createTableMeasurementClone(table) {
  if (typeof document === "undefined" || !document.body || !table) {
    return null;
  }

  const host = document.createElement("div");
  const clone = table.cloneNode(true);
  const measurementWidth = getTableMeasurementWidth(table);

  host.style.position = "absolute";
  host.style.left = "-20000px";
  host.style.top = "0";
  host.style.width = `${measurementWidth}px`;
  host.style.visibility = "hidden";
  host.style.pointerEvents = "none";
  host.style.overflow = "hidden";
  host.style.zIndex = "-1";

  Array.from(clone.querySelectorAll("colgroup[data-managed-layout='true']")).forEach((colGroup) => {
    colGroup.remove();
  });

  Array.from(clone.rows).forEach((row) => {
    row.style.height = "";
    row.style.minHeight = "";
    row.style.maxHeight = "";
  });

  Array.from(clone.querySelectorAll("th, td")).forEach((cell) => {
    cell.style.width = "";
    cell.style.minWidth = "";
    cell.style.maxWidth = "";
    cell.style.height = "";
    cell.style.minHeight = "";
    cell.style.maxHeight = "";
  });

  clone.style.width = `${measurementWidth}px`;
  clone.style.maxWidth = `${measurementWidth}px`;
  clone.style.tableLayout = "auto";

  host.appendChild(clone);
  document.body.appendChild(host);

  return { clone, host };
}

function measurePreferredTableLayout(table, columnCount) {
  if (!table || !columnCount) {
    return {
      columns: [],
      rows: [],
    };
  }

  const measurement = createTableMeasurementClone(table);
  if (!measurement) {
    return {
      columns: measureTableColumnPercentages(table, columnCount),
      rows: measureTableRowHeights(table),
    };
  }

  const { clone, host } = measurement;

  try {
    const cloneWidth = Math.max(1, clone.getBoundingClientRect().width);
    const grid = buildTableGrid(clone);
    const columnPixels = Array.from({ length: columnCount }, () => 0);

    grid.anchors.forEach((entry) => {
      const width = entry.cell.getBoundingClientRect().width;

      if (!Number.isFinite(width) || width <= 0) {
        return;
      }

      const distributedWidth = width / Math.max(1, entry.colspan);

      for (let index = 0; index < entry.colspan; index += 1) {
        const columnIndex = entry.col + index;

        if (columnIndex >= columnPixels.length) {
          continue;
        }

        columnPixels[columnIndex] = Math.max(columnPixels[columnIndex], distributedWidth);
      }
    });

    const columnPercentages = normalizeColumnPercentages(
      columnPixels.map((width) => roundNumber((width / cloneWidth) * 100, 4)),
      columnCount,
      measureTableColumnPercentages(table, columnCount),
    );
    const minRowHeight = getMinimumTableRowHeight(clone);
    const rowHeights = Array.from(clone.rows).map((row) => Math.max(minRowHeight, Math.round(row.getBoundingClientRect().height)));

    return {
      columns: columnPercentages,
      rows: rowHeights,
    };
  } finally {
    host.remove();
  }
}

function measureTableColumnPercentages(table, columnCount) {
  if (!columnCount) {
    return [];
  }

  const managedColGroup = table.querySelector("colgroup[data-managed-layout='true']");
  if (managedColGroup && managedColGroup.children.length === columnCount) {
    const managedWidths = Array.from(managedColGroup.children).map((column) => {
      const width = Number.parseFloat(column.style.width || "");
      return Number.isFinite(width) && width > 0 ? width : 0;
    });

    if (managedWidths.some((value) => value > 0)) {
      return normalizeColumnPercentages(managedWidths, columnCount);
    }
  }

  const firstRow = table.rows[0];
  const canMeasureFirstRow = firstRow && Array.from(firstRow.cells || []).every((cell) => Math.max(1, Number(cell.colSpan) || 1) === 1);

  if (!canMeasureFirstRow) {
    return normalizeColumnPercentages([], columnCount);
  }

  const tableWidth = Math.max(1, table.getBoundingClientRect().width);
  const measured = Array.from({ length: columnCount }, (_, index) => {
    const cell = firstRow && firstRow.cells[index];

    if (!cell) {
      return 0;
    }

    return roundNumber((cell.getBoundingClientRect().width / tableWidth) * 100, 4);
  });

  return normalizeColumnPercentages(measured, columnCount);
}

function getReferenceTableCell(table) {
  return table ? table.querySelector("th, td") : null;
}

function getTableLineHeightPixels(table) {
  const cell = getReferenceTableCell(table);

  if (!cell) {
    return DEFAULT_TABLE_FONT_SIZE * DEFAULT_TABLE_LINE_HEIGHT;
  }

  const styles = window.getComputedStyle(cell);
  const computedLineHeight = Number.parseFloat(styles.lineHeight);

  if (Number.isFinite(computedLineHeight) && computedLineHeight > 0) {
    return computedLineHeight;
  }

  const fontSize = Number.parseFloat(styles.fontSize);
  const resolvedFontSize = Number.isFinite(fontSize) && fontSize > 0 ? fontSize : DEFAULT_TABLE_FONT_SIZE;
  return resolvedFontSize * DEFAULT_TABLE_LINE_HEIGHT;
}

function getMinimumTableRowHeight(table) {
  const cell = getReferenceTableCell(table);
  const lineHeight = getTableLineHeightPixels(table);

  if (!cell) {
    return Math.max(1, Math.round(lineHeight));
  }

  const styles = window.getComputedStyle(cell);
  const paddingTop = Number.parseFloat(styles.paddingTop) || 0;
  const paddingBottom = Number.parseFloat(styles.paddingBottom) || 0;
  return Math.max(1, Math.round(lineHeight + paddingTop + paddingBottom));
}

function measureTableRowHeights(table) {
  const minRowHeight = getMinimumTableRowHeight(table);
  return Array.from(table.rows).map((row) => Math.max(minRowHeight, Math.round(row.getBoundingClientRect().height)));
}

function getElementScale(element) {
  if (!element) {
    return { x: 1, y: 1 };
  }

  const rect = element.getBoundingClientRect();
  const scaleX = element.offsetWidth > 0 ? rect.width / element.offsetWidth : 1;
  const scaleY = element.offsetHeight > 0 ? rect.height / element.offsetHeight : 1;

  return {
    x: Number.isFinite(scaleX) && scaleX > 0 ? scaleX : 1,
    y: Number.isFinite(scaleY) && scaleY > 0 ? scaleY : 1,
  };
}

function getTableRectInWrapper(editor) {
  const wrapperRect = editor.wrapper.getBoundingClientRect();
  const tableRect = editor.table.getBoundingClientRect();
  const wrapperScale = getElementScale(editor.wrapper);

  return {
    height: tableRect.height / wrapperScale.y,
    left: (tableRect.left - wrapperRect.left) / wrapperScale.x,
    top: (tableRect.top - wrapperRect.top) / wrapperScale.y,
    width: tableRect.width / wrapperScale.x,
  };
}

function getRenderedTableColumnBoundaries(table, columnCount, fallbackColumns) {
  const tableRect = table.getBoundingClientRect();
  const tableScale = getElementScale(table);
  const tableWidth = tableRect.width / tableScale.x;
  const fallback = normalizeColumnPercentages(fallbackColumns, columnCount);
  const boundaries = [];

  if (!columnCount || tableWidth <= 0) {
    return boundaries;
  }

  const grid = buildTableGrid(table);
  let accumulatedPercent = 0;

  for (let boundaryIndex = 1; boundaryIndex < columnCount; boundaryIndex += 1) {
    accumulatedPercent += fallback[boundaryIndex - 1] || 0;

    const candidates = [];
    grid.anchors.forEach((entry) => {
      const entryStart = entry.col;
      const entryEnd = entry.col + entry.colspan;

      if (entryEnd === boundaryIndex || entryStart === boundaryIndex) {
        const rect = entry.cell.getBoundingClientRect();
        const viewportBoundary = entryEnd === boundaryIndex ? rect.right : rect.left;
        const localBoundary = (viewportBoundary - tableRect.left) / tableScale.x;

        if (Number.isFinite(localBoundary) && localBoundary > 0 && localBoundary < tableWidth) {
          candidates.push(localBoundary);
        }
      }
    });

    if (candidates.length) {
      const averageBoundary = candidates.reduce((sum, value) => sum + value, 0) / candidates.length;
      boundaries.push(roundNumber(averageBoundary, 4));
      continue;
    }

    boundaries.push(roundNumber((accumulatedPercent / 100) * tableWidth, 4));
  }

  return boundaries;
}

function getRenderedTableRowBoundaries(table) {
  const tableRect = table.getBoundingClientRect();
  const tableScale = getElementScale(table);

  return Array.from(table.rows).map((row) => {
    const rowRect = row.getBoundingClientRect();
    return roundNumber((rowRect.bottom - tableRect.top) / tableScale.y, 4);
  });
}

function ensureManagedColGroup(table, columnCount) {
  let colGroup = table.querySelector("colgroup[data-managed-layout='true']");

  if (!colGroup) {
    colGroup = document.createElement("colgroup");
    colGroup.dataset.managedLayout = "true";
    table.prepend(colGroup);
  }

  while (colGroup.children.length < columnCount) {
    colGroup.appendChild(document.createElement("col"));
  }

  while (colGroup.children.length > columnCount) {
    colGroup.lastElementChild.remove();
  }

  return colGroup;
}

function buildManagedTableLayout(table, savedLayout) {
  const columnCount = getTableColumnCount(table);
  const preferredLayout = measurePreferredTableLayout(table, columnCount);
  const measuredColumns = preferredLayout.columns.length ? preferredLayout.columns : measureTableColumnPercentages(table, columnCount);
  const measuredRows = preferredLayout.rows.length ? preferredLayout.rows : measureTableRowHeights(table);
  const minRowHeight = getMinimumTableRowHeight(table);
  const rowCount = table ? table.rows.length : 0;
  const headerRowCount = getTableHeaderRowCount(table);
  const bodyRowOffset = getTableBodyRowOffset(table);
  const isRowFragment = Boolean(table && table.dataset && table.dataset.tableRowOffset !== undefined);
  const savedColumns = savedLayout && Array.isArray(savedLayout.columns) && savedLayout.columns.length === columnCount
    ? savedLayout.columns
    : null;
  const savedRows = savedLayout && Array.isArray(savedLayout.rows)
    ? savedLayout.rows
    : null;
  const getSavedRowHeight = (rowIndex) => {
    if (!savedRows) {
      return undefined;
    }

    if (!isRowFragment) {
      return savedRows.length === rowCount ? savedRows[rowIndex] : undefined;
    }

    const sourceRowIndex = rowIndex < headerRowCount
      ? rowIndex
      : headerRowCount + bodyRowOffset + (rowIndex - headerRowCount);
    return savedRows[sourceRowIndex];
  };

  return {
    columns: normalizeColumnPercentages(savedColumns || measuredColumns, columnCount, measuredColumns),
    rows: measuredRows.map((height, index) => clampNumber(getSavedRowHeight(index), minRowHeight, MAX_TABLE_ROW_HEIGHT, height)),
  };
}

function applyManagedTableLayout(table, layout, options = {}) {
  const columnCount = getTableColumnCount(table);
  const rows = Array.from(table.rows);
  const preferredLayout = (options.remeasureColumns || options.remeasureRows)
    ? measurePreferredTableLayout(table, columnCount)
    : null;
  const columnFallback = preferredLayout && preferredLayout.columns.length
    ? preferredLayout.columns
    : measureTableColumnPercentages(table, columnCount);
  const normalizedColumns = normalizeColumnPercentages(layout.columns, columnCount, columnFallback);
  const colGroup = ensureManagedColGroup(table, columnCount);
  const minRowHeight = getMinimumTableRowHeight(table);

  Array.from(colGroup.children).forEach((column, index) => {
    column.style.width = `${normalizedColumns[index]}%`;
  });

  const rowFallbacks = preferredLayout && preferredLayout.rows.length === rows.length
    ? preferredLayout.rows
    : rows.map((row) => Math.max(
      minRowHeight,
      Math.max(0, Number.parseFloat(row.style.height) || Math.round(row.getBoundingClientRect().height)),
    ));
  const normalizedRows = rows.map((row, index) => {
    const measuredHeight = rowFallbacks[index] != null ? rowFallbacks[index] : Math.max(minRowHeight, Math.round(row.getBoundingClientRect().height));
    return clampNumber(layout.rows[index], minRowHeight, MAX_TABLE_ROW_HEIGHT, measuredHeight);
  });

  rows.forEach((row, index) => {
    row.style.height = `${normalizedRows[index]}px`;
  });

  layout.columns = normalizedColumns;
  const renderedRows = measureTableRowHeights(table);
  layout.rows = normalizedRows.map((height, index) => Math.max(height, renderedRows[index] || height));
  annotateManagedTableCellGrid(table);
}

function applyManagedTableLayoutsToTables(root, state) {
  if (!root) {
    return;
  }

  Array.from(root.querySelectorAll("table.article-table[data-table-id]")).forEach((table) => {
    const tableId = table.dataset.tableId;
    const layout = buildManagedTableLayout(table, state.tableLayouts[tableId]);
    applyManagedTableLayout(table, layout);
  });
}

function syncTableEditorHandles(editor) {
  const { table, overlay, columnHandles, rowHandles } = editor;
  const columnCount = getTableColumnCount(table);
  const rowCount = table.rows.length;
  const targetColumnHandleCount = Math.max(0, columnCount - 1);

  while (columnHandles.length < targetColumnHandleCount) {
    const handle = document.createElement("div");
    handle.className = "table-resize-handle table-resize-handle-column";
    handle.setAttribute("aria-hidden", "true");
    handle.addEventListener("pointerdown", (event) => {
      startTableColumnResize(event, editor, Number(handle.dataset.index));
    });
    overlay.appendChild(handle);
    columnHandles.push(handle);
  }

  while (columnHandles.length > targetColumnHandleCount) {
    columnHandles.pop().remove();
  }

  while (rowHandles.length < rowCount) {
    const handle = document.createElement("div");
    handle.className = "table-resize-handle table-resize-handle-row";
    handle.setAttribute("aria-hidden", "true");
    handle.addEventListener("pointerdown", (event) => {
      startTableRowResize(event, editor, Number(handle.dataset.index));
    });
    overlay.appendChild(handle);
    rowHandles.push(handle);
  }

  while (rowHandles.length > rowCount) {
    rowHandles.pop().remove();
  }

  const layoutColumns = normalizeColumnPercentages(editor.layout.columns, columnCount, measureTableColumnPercentages(table, columnCount));
  const tableRect = getTableRectInWrapper(editor);
  const columnBoundaries = getRenderedTableColumnBoundaries(table, columnCount, layoutColumns);
  const rowBoundaries = getRenderedTableRowBoundaries(table);

  overlay.style.left = `${roundNumber(tableRect.left, 4)}px`;
  overlay.style.top = `${roundNumber(tableRect.top, 4)}px`;
  overlay.style.width = `${roundNumber(tableRect.width, 4)}px`;
  overlay.style.height = `${roundNumber(tableRect.height, 4)}px`;

  columnHandles.forEach((handle, index) => {
    handle.dataset.index = String(index);
    handle.style.left = `${columnBoundaries[index] || 0}px`;
  });

  Array.from(table.rows).forEach((row, index) => {
    const handle = rowHandles[index];
    handle.dataset.index = String(index);
    handle.style.top = `${rowBoundaries[index] || 0}px`;
  });
}

function persistManagedTableLayout(editor) {
  const nextColumns = editor.layout.columns.map((value) => roundNumber(value, 4));
  const nextRows = editor.layout.rows.map((value) => Math.round(value));

  if (editor.table && editor.table.dataset && editor.table.dataset.tableRowOffset !== undefined) {
    const existingLayout = editor.state.tableLayouts[editor.tableId] || {};
    const mergedRows = Array.isArray(existingLayout.rows) ? existingLayout.rows.slice() : [];
    const headerRowCount = getTableHeaderRowCount(editor.table);
    const bodyRowOffset = getTableBodyRowOffset(editor.table);

    nextRows.forEach((height, index) => {
      const sourceRowIndex = index < headerRowCount
        ? index
        : headerRowCount + bodyRowOffset + (index - headerRowCount);
      mergedRows[sourceRowIndex] = height;
    });

    editor.state.tableLayouts[editor.tableId] = {
      columns: nextColumns,
      rows: mergedRows,
    };
  } else {
    editor.state.tableLayouts[editor.tableId] = {
      columns: nextColumns,
      rows: nextRows,
    };
  }

  editor.saveUiState();
  if (typeof editor.onLayoutChange === "function") {
    editor.onLayoutChange();
  }
}

function beginTableResizeInteraction(editor, cursor) {
  const previousUserSelect = document.body.style.userSelect;
  const previousCursor = document.body.style.cursor;
  editor.wrapper.classList.add("is-resizing");
  document.body.style.userSelect = "none";
  document.body.style.cursor = cursor;

  return () => {
    editor.wrapper.classList.remove("is-resizing");
    document.body.style.userSelect = previousUserSelect;
    document.body.style.cursor = previousCursor;
  };
}

function startTableColumnResize(event, editor, columnIndex) {
  if (!Number.isInteger(columnIndex) || columnIndex < 0 || columnIndex >= editor.layout.columns.length - 1) {
    return;
  }

  event.preventDefault();
  const activeHandle = event.currentTarget;
  const tableWidth = Math.max(1, editor.table.getBoundingClientRect().width);
  const startX = event.clientX;
  const initialLeft = tableWidth * (editor.layout.columns[columnIndex] / 100);
  const initialRight = tableWidth * (editor.layout.columns[columnIndex + 1] / 100);
  const pairWidth = initialLeft + initialRight;

  if (pairWidth <= MIN_TABLE_COLUMN_WIDTH * 2) {
    return;
  }

  const finishInteraction = beginTableResizeInteraction(editor, "col-resize");
  activeHandle?.classList.add("is-active-resize");

  const onPointerMove = (moveEvent) => {
    const delta = moveEvent.clientX - startX;
    const nextLeft = clampNumber(initialLeft + delta, MIN_TABLE_COLUMN_WIDTH, pairWidth - MIN_TABLE_COLUMN_WIDTH, initialLeft);
    const nextRight = pairWidth - nextLeft;

    editor.layout.columns[columnIndex] = roundNumber((nextLeft / tableWidth) * 100, 4);
    editor.layout.columns[columnIndex + 1] = roundNumber((nextRight / tableWidth) * 100, 4);
    applyManagedTableLayout(editor.table, editor.layout, { remeasureColumns: false, remeasureRows: false });
    syncTableEditorHandles(editor);
  };

  const stop = () => {
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", stop);
    window.removeEventListener("pointercancel", stop);
    activeHandle?.classList.remove("is-active-resize");
    finishInteraction();
    persistManagedTableLayout(editor);
    syncTableEditorHandles(editor);
  };

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", stop);
  window.addEventListener("pointercancel", stop);
}

function startTableRowResize(event, editor, rowIndex) {
  if (!Number.isInteger(rowIndex) || rowIndex < 0 || rowIndex >= editor.layout.rows.length) {
    return;
  }

  event.preventDefault();
  const activeHandle = event.currentTarget;
  const startY = event.clientY;
  const tableScale = getElementScale(editor.table);
  const initialRows = measureTableRowHeights(editor.table);
  const initialHeight = initialRows[rowIndex];
  const minRowHeight = getMinimumTableRowHeight(editor.table);
  const finishInteraction = beginTableResizeInteraction(editor, "row-resize");
  activeHandle?.classList.add("is-active-resize");

  const onPointerMove = (moveEvent) => {
    const delta = (moveEvent.clientY - startY) / tableScale.y;
    editor.layout.rows = initialRows.slice();
    editor.layout.rows[rowIndex] = clampNumber(initialHeight + delta, minRowHeight, MAX_TABLE_ROW_HEIGHT, initialHeight);
    applyManagedTableLayout(editor.table, editor.layout, { remeasureColumns: false, remeasureRows: false });
    syncTableEditorHandles(editor);
  };

  const stop = () => {
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", stop);
    window.removeEventListener("pointercancel", stop);
    activeHandle?.classList.remove("is-active-resize");
    finishInteraction();
    persistManagedTableLayout(editor);
    syncTableEditorHandles(editor);
  };

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", stop);
  window.addEventListener("pointercancel", stop);
}

function mountManagedTableEditors(root, state, saveUiState, onLayoutChange) {
  if (!root) {
    return;
  }

  const tables = Array.from(root.querySelectorAll("table.article-table[data-table-id]"));

  tables.forEach((table) => {
    if (table.parentElement && table.parentElement.classList.contains("article-table-editor")) {
      return;
    }

    const tableId = table.dataset.tableId;
    const wrapper = document.createElement("div");
    const overlay = document.createElement("div");

    wrapper.className = "article-table-editor";
    wrapper.dataset.tableId = tableId;
    overlay.className = "table-resize-overlay";
    overlay.setAttribute("aria-hidden", "true");

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    wrapper.appendChild(overlay);

    const editor = {
      tableId,
      table,
      wrapper,
      overlay,
      layout: buildManagedTableLayout(table, state.tableLayouts[tableId]),
      columnHandles: [],
      rowHandles: [],
      state,
      saveUiState,
      onLayoutChange,
    };

    wrapper._tableEditor = editor;
    applyManagedTableLayout(table, editor.layout);
    syncTableEditorHandles(editor);
  });
}

function syncMountedTableEditors(root) {
  if (!root) {
    return;
  }

  Array.from(root.querySelectorAll(".article-table-editor")).forEach((wrapper) => {
    const editor = wrapper._tableEditor;

    if (!editor) {
      return;
    }

    applyManagedTableLayout(editor.table, editor.layout);
    syncTableEditorHandles(editor);
  });
}

function getTableSelectionRect(selection) {
  if (!selection) {
    return null;
  }

  const top = Math.min(selection.startRow, selection.endRow);
  const bottom = Math.max(selection.startRow, selection.endRow);
  const left = Math.min(selection.startCol, selection.endCol);
  const right = Math.max(selection.startCol, selection.endCol);

  return {
    bottom,
    height: bottom - top + 1,
    left,
    right,
    top,
    width: right - left + 1,
  };
}

function getUniqueTableEntriesInRect(table, selection) {
  const rect = getTableSelectionRect(selection);

  if (!table || !rect) {
    return [];
  }

  const grid = annotateManagedTableCellGrid(table);
  const entries = new Map();

  for (let rowIndex = rect.top; rowIndex <= rect.bottom; rowIndex += 1) {
    for (let columnIndex = rect.left; columnIndex <= rect.right; columnIndex += 1) {
      const entry = grid.matrix[rowIndex] && grid.matrix[rowIndex][columnIndex];

      if (!entry) {
        continue;
      }

      entries.set(`${entry.row}:${entry.col}`, entry);
    }
  }

  return Array.from(entries.values()).sort((leftEntry, rightEntry) => (
    leftEntry.row === rightEntry.row
      ? leftEntry.col - rightEntry.col
      : leftEntry.row - rightEntry.row
  ));
}

function getTableSelectionSection(entries) {
  const firstEntry = entries[0];
  return firstEntry && firstEntry.rowElement && firstEntry.rowElement.parentElement
    ? String(firstEntry.rowElement.parentElement.tagName || "").toLowerCase()
    : "";
}

function canMergeTableSelection(table, selection) {
  const rect = getTableSelectionRect(selection);

  if (!table || !rect || rect.width * rect.height <= 1) {
    return false;
  }

  const entries = getUniqueTableEntriesInRect(table, selection);
  const section = getTableSelectionSection(entries);

  if (!entries.length || entries.length !== rect.width * rect.height || !section) {
    return false;
  }

  return entries.every((entry) => (
    entry.colspan === 1
    && entry.rowspan === 1
    && entry.rowElement
    && entry.rowElement.parentElement
    && String(entry.rowElement.parentElement.tagName || "").toLowerCase() === section
  ));
}

function canSplitTableSelection(table, selection) {
  const rect = getTableSelectionRect(selection);

  if (!table || !rect || rect.width !== 1 || rect.height !== 1) {
    return false;
  }

  const grid = annotateManagedTableCellGrid(table);
  const entry = grid.matrix[rect.top] && grid.matrix[rect.top][rect.left];

  return Boolean(
    entry
    && entry.row === rect.top
    && entry.col === rect.left
    && (entry.colspan > 1 || entry.rowspan > 1)
  );
}

function serializeTableCellHtmlForMerge(cell) {
  if (!cell) {
    return "";
  }

  const clone = cell.cloneNode(true);
  Array.from(clone.querySelectorAll("[data-preview-caret='true']")).forEach((node) => {
    node.remove();
  });

  return clone.innerHTML.replace(/\u200B/g, "").trim();
}

function getTableColumnTextAlign(grid, columnIndex) {
  if (!grid) {
    return "";
  }

  for (let rowIndex = 0; rowIndex < grid.rowCount; rowIndex += 1) {
    const entry = grid.matrix[rowIndex] && grid.matrix[rowIndex][columnIndex];

    if (!entry || !entry.cell) {
      continue;
    }

    const align = String(entry.cell.style.textAlign || entry.cell.getAttribute("align") || "").trim().toLowerCase();
    if (align) {
      return align;
    }
  }

  return "";
}

function mergeTableSelection(table, selection) {
  if (!canMergeTableSelection(table, selection)) {
    return null;
  }

  const rect = getTableSelectionRect(selection);
  const entries = getUniqueTableEntriesInRect(table, selection);
  const anchor = entries.find((entry) => entry.row === rect.top && entry.col === rect.left);

  if (!anchor) {
    return null;
  }

  const mergedHtml = entries
    .map((entry) => serializeTableCellHtmlForMerge(entry.cell))
    .filter((html) => html)
    .join("<br>");

  anchor.cell.rowSpan = rect.height;
  anchor.cell.colSpan = rect.width;
  anchor.cell.innerHTML = mergedHtml;

  entries.forEach((entry) => {
    if (entry === anchor) {
      return;
    }

    entry.cell.remove();
  });

  annotateManagedTableCellGrid(table);
  return {
    col: rect.left,
    row: rect.top,
  };
}

function splitTableSelection(table, selection) {
  if (!canSplitTableSelection(table, selection)) {
    return null;
  }

  const rect = getTableSelectionRect(selection);
  const grid = annotateManagedTableCellGrid(table);
  const anchor = grid.matrix[rect.top][rect.left];
  const sectionTag = anchor.rowElement && anchor.rowElement.parentElement && anchor.rowElement.parentElement.tagName === "THEAD"
    ? "th"
    : "td";
  const anchorRowspan = anchor.rowspan;
  const anchorColspan = anchor.colspan;
  const rowAnchors = new Map();

  grid.anchors.forEach((entry) => {
    const bucket = rowAnchors.get(entry.row) || [];
    bucket.push(entry);
    rowAnchors.set(entry.row, bucket);
  });

  anchor.cell.rowSpan = 1;
  anchor.cell.colSpan = 1;

  for (let rowIndex = anchor.row; rowIndex < anchor.row + anchorRowspan; rowIndex += 1) {
    const rowElement = table.rows[rowIndex];
    const anchorsInRow = (rowAnchors.get(rowIndex) || [])
      .filter((entry) => entry.cell !== anchor.cell)
      .sort((leftEntry, rightEntry) => leftEntry.col - rightEntry.col);

    for (let columnIndex = anchor.col; columnIndex < anchor.col + anchorColspan; columnIndex += 1) {
      if (rowIndex === anchor.row && columnIndex === anchor.col) {
        continue;
      }

      const newCell = document.createElement(sectionTag);
      const align = getTableColumnTextAlign(grid, columnIndex);
      const referenceEntry = anchorsInRow.find((entry) => entry.col > columnIndex);

      if (align) {
        newCell.style.textAlign = align;
      }

      rowElement.insertBefore(newCell, referenceEntry ? referenceEntry.cell : null);
      anchorsInRow.push({
        col: columnIndex,
        row: rowIndex,
        cell: newCell,
      });
      anchorsInRow.sort((leftEntry, rightEntry) => leftEntry.col - rightEntry.col);
    }
  }

  annotateManagedTableCellGrid(table);
  return {
    col: rect.left,
    row: rect.top,
  };
}

let pageLayoutWorkbench = null;

function getPageLayoutWorkbench() {
  if (pageLayoutWorkbench && pageLayoutWorkbench.isConnected) {
    return pageLayoutWorkbench;
  }

  pageLayoutWorkbench = document.createElement("div");
  pageLayoutWorkbench.className = "page-layout-workbench";
  pageLayoutWorkbench.setAttribute("aria-hidden", "true");
  document.body.appendChild(pageLayoutWorkbench);
  return pageLayoutWorkbench;
}

function resolveHeaderText(documentTitle, options) {
  const pageOptions = resolvePageOptions(options);
  const trimmedTitle = String(documentTitle || "").trim();

  if (pageOptions.pageHeaderText) {
    return pageOptions.pageHeaderText;
  }

  if (trimmedTitle) {
    return trimmedTitle;
  }

  const modeMeta = MODE_METADATA[options.mode];
  return modeMeta ? modeMeta.title : "Markdown Document";
}

function createPaginatedPage(options, pageNumber, documentTitle) {
  const resolved = getResolvedDocumentOptions(options);
  const page = document.createElement("section");
  const frame = document.createElement("div");
  const article = document.createElement("article");
  const body = document.createElement("div");
  const footer = document.createElement("div");

  page.className = "page-sheet";
  page.dataset.pageNumber = String(pageNumber);
  page.dataset.layoutPreset = resolved.layoutPreset;
  applyPageShellStyleProperties(page, resolved);

  if (resolved.watermarkEnabled && resolved.watermarkText) {
    const watermark = document.createElement("div");
    const watermarkLabel = document.createElement("span");
    watermark.className = "page-sheet-watermark";
    watermarkLabel.textContent = resolved.watermarkText;
    watermark.appendChild(watermarkLabel);
    page.appendChild(watermark);
  }

  frame.className = "page-sheet-frame";
  footer.className = "page-sheet-footer";
  footer.setAttribute("aria-hidden", "true");

  if (resolved.pageHeaderEnabled) {
    const header = document.createElement("header");
    const headerText = document.createElement("span");
    const pageLabel = document.createElement("span");

    header.className = "page-sheet-header";
    headerText.className = "page-sheet-header-text";
    pageLabel.className = "page-sheet-page-number";
    headerText.textContent = resolveHeaderText(documentTitle, resolved);
    pageLabel.textContent = `${pageNumber}`;
    header.appendChild(headerText);
    header.appendChild(pageLabel);
    frame.appendChild(header);
  }

  body.className = "page-sheet-body";
  article.className = "article-canvas page-sheet-article";
  article.dataset.mode = resolved.mode;
  article.dataset.layoutPreset = resolved.layoutPreset;
  article.dataset.questionAnswerLayout = resolved.questionAnswerLayout;
  applyArticleStyleProperties(article, resolved);
  body.appendChild(article);
  frame.appendChild(body);
  page.appendChild(frame);
  page.appendChild(footer);

  return {
    page,
    article,
    resolved,
  };
}

function getPaginatedArticleHeightLimit(pageContext, fallbackPx) {
  if (!pageContext || !pageContext.page || !pageContext.article) {
    return fallbackPx;
  }

  const pageRect = pageContext.page.getBoundingClientRect();
  const articleRect = pageContext.article.getBoundingClientRect();
  const resolved = pageContext.resolved || {};
  const pageHeightPx = mmToPx(resolved.pageHeight || DEFAULT_PAGE_HEIGHT);
  const bottomMarginPx = mmToPx(resolved.pageMarginBottom || DEFAULT_PAGE_MARGIN_BOTTOM);
  const pageContentBottom = pageRect.top + pageHeightPx - bottomMarginPx;
  const footerLogoBottomPx = Math.max(mmToPx(2), bottomMarginPx - mmToPx(9));
  const footerLogoReservePx = resolved.layoutPreset
    ? Math.max(0, footerLogoBottomPx + PAGE_FOOTER_LOGO_HEIGHT_PX + PAGE_FOOTER_LOGO_GAP_PX - bottomMarginPx)
    : 0;
  const measuredLimit = pageContentBottom - articleRect.top - PAGE_LAYOUT_SAFETY_PX - footerLogoReservePx;

  if (!Number.isFinite(measuredLimit) || measuredLimit <= 0) {
    return fallbackPx;
  }

  return Math.max(1, measuredLimit);
}

function shouldForcePageBreakBeforeBlock(block) {
  return false;
}

function shouldKeepPaginatedBlockWithNext(block) {
  if (!block || block.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }

  if (/^H[1-6]$/.test(block.tagName || "")) {
    return true;
  }

  const classList = block.classList;
  return Boolean(classList && (
    classList.contains("knowledge-cluster-fragment-header")
    || classList.contains("knowledge-group-fragment-title")
    || classList.contains("knowledge-cluster-title")
    || classList.contains("knowledge-subtitle")
    || classList.contains("question-card-title")
    || classList.contains("question-card-fragment-heading")
    || classList.contains("question-answer-bank-title")
    || classList.contains("question-answer-item-title")
    || classList.contains("question-answer-item-fragment-heading")
    || classList.contains("question-body-title")
  ));
}

function isManualPageBreakBlock(block) {
  return Boolean(block && block.tagName === "HR");
}

function getTableBodyRowsForPagination(table) {
  if (!table) {
    return [];
  }

  const bodies = Array.from(table.tBodies || []);
  if (bodies.length) {
    return bodies.flatMap((body) => Array.from(body.rows));
  }

  return Array.from(table.rows || []).filter((row) => row.parentElement && row.parentElement.tagName !== "THEAD");
}

function getTableHeaderRowCount(table) {
  return table && table.tHead ? table.tHead.rows.length : 0;
}

function getTableBodyRowOffset(table) {
  const value = Number.parseInt(table && table.dataset ? table.dataset.tableRowOffset : "", 10);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function getTablePaginationFragmentKey(table) {
  return table && table.dataset && table.dataset.tableRowOffset !== undefined
    ? String(getTableBodyRowOffset(table))
    : "";
}

function getTablePaginationRowGroups(table) {
  const rows = getTableBodyRowsForPagination(table);
  const groups = [];
  let index = 0;

  while (index < rows.length) {
    let groupEnd = index;
    let cursor = index;

    while (cursor <= groupEnd && cursor < rows.length) {
      Array.from(rows[cursor].cells || []).forEach((cell) => {
        const rowSpan = Math.max(1, Number.parseInt(cell.getAttribute("rowspan") || "1", 10) || 1);
        groupEnd = Math.max(groupEnd, cursor + rowSpan - 1);
      });
      cursor += 1;
    }

    groupEnd = Math.min(groupEnd, rows.length - 1);
    groups.push({
      start: index,
      end: groupEnd,
      count: groupEnd - index + 1,
    });
    index = groupEnd + 1;
  }

  return groups;
}

function getSingleSplittableTableFromBlock(block) {
  if (!block || block.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  if (block.tagName === "TABLE" && block.classList.contains("article-table")) {
    return getTableBodyRowsForPagination(block).length ? block : null;
  }

  const tables = Array.from(block.querySelectorAll("table.article-table"));
  if (tables.length !== 1 || !getTableBodyRowsForPagination(tables[0]).length) {
    return null;
  }

  const table = tables[0];
  const elementChildren = Array.from(block.children).filter((child) => (
    !child.classList.contains("table-resize-overlay")
    && !child.classList.contains("table-resize-handle")
  ));

  if (block.classList.contains("article-table-editor")) {
    return table;
  }

  if (elementChildren.length === 1 && (elementChildren[0] === table || elementChildren[0].contains(table))) {
    return table;
  }

  return null;
}

function createPaginatedTableSlice(table, startRowIndex, rowCount, isLastSlice = true) {
  const bodyRows = getTableBodyRowsForPagination(table);
  const rowOffset = getTableBodyRowOffset(table) + startRowIndex;
  const slice = table.cloneNode(false);
  const endRowIndex = Math.min(bodyRows.length, startRowIndex + rowCount);
  const body = document.createElement("tbody");

  Array.from(table.children).forEach((child) => {
    if (["CAPTION", "COLGROUP", "THEAD"].includes(child.tagName)) {
      slice.appendChild(child.cloneNode(true));
    }
  });

  for (let index = startRowIndex; index < endRowIndex; index += 1) {
    body.appendChild(bodyRows[index].cloneNode(true));
  }

  slice.appendChild(body);

  if (endRowIndex >= bodyRows.length && table.tFoot) {
    slice.appendChild(table.tFoot.cloneNode(true));
  }

  slice.classList.add("article-table-page-fragment");
  if (startRowIndex > 0) {
    slice.classList.add("article-table-continuation");
  }
  if (!isLastSlice) {
    slice.classList.remove("knowledge-group-fragment-end", "knowledge-cluster-fragment-end");
  }
  slice.dataset.tableRowOffset = String(rowOffset);
  slice.dataset.tableOriginalRowCount = String(bodyRows.length);
  return slice;
}

function replaceTableInClonedBlock(originalBlock, originalTable, tableSlice, isLastSlice = true) {
  if (originalBlock === originalTable || originalBlock.classList.contains("article-table-editor")) {
    return tableSlice;
  }

  const blockClone = originalBlock.cloneNode(true);
  const originalTables = Array.from(originalBlock.querySelectorAll("table.article-table"));
  const clonedTables = Array.from(blockClone.querySelectorAll("table.article-table"));
  const tableIndex = originalTables.indexOf(originalTable);
  const tableToReplace = clonedTables[tableIndex >= 0 ? tableIndex : 0];

  Array.from(blockClone.querySelectorAll(".table-resize-overlay, .table-resize-handle")).forEach((node) => {
    node.remove();
  });

  if (tableToReplace) {
    tableToReplace.replaceWith(tableSlice);
  } else {
    blockClone.replaceChildren(tableSlice);
  }

  blockClone.dataset.tableSplitFragment = "true";
  if (!isLastSlice) {
    blockClone.classList.remove("knowledge-group-fragment-end", "knowledge-cluster-fragment-end");
    blockClone.classList.remove(...QUESTION_PAGINATION_FRAGMENT_END_CLASSES);
  }
  if (getTableBodyRowOffset(tableSlice) > 0) {
    blockClone.classList.remove(...QUESTION_PAGINATION_FRAGMENT_START_CLASSES);
    markQuestionAnswerBoxNestedContinuation(blockClone);
  }
  return blockClone;
}

function createPaginatedTableBlockSlice(block, table, startRowIndex, rowCount, isLastSlice = true) {
  return replaceTableInClonedBlock(
    block,
    table,
    createPaginatedTableSlice(table, startRowIndex, rowCount, isLastSlice),
    isLastSlice,
  );
}

function getPaginatedListItems(list) {
  if (!list || !["OL", "UL"].includes(list.tagName || "")) {
    return [];
  }

  return Array.from(list.children || []).filter((child) => child.tagName === "LI");
}

function isSplittablePaginatedList(list) {
  if (!list || !["OL", "UL"].includes(list.tagName || "")) {
    return false;
  }

  const classList = list.classList;
  return Boolean(
    classList
    && (classList.contains("note-list") || classList.contains("ordered-list") || classList.contains("bullet-list"))
    && getPaginatedListItems(list).length > 1,
  );
}

function getPaginatedListItemOffset(list) {
  const value = Number.parseInt(list && list.dataset ? list.dataset.listItemOffset : "", 10);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function getSingleSplittableListFromBlock(block) {
  if (!block || block.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  if (isSplittablePaginatedList(block)) {
    return block;
  }

  const lists = Array.from(block.querySelectorAll("ol.note-list, ul.note-list"))
    .filter(isSplittablePaginatedList);

  if (lists.length !== 1) {
    return null;
  }

  const list = lists[0];
  const elementChildren = Array.from(block.children || []).filter((child) => (
    !child.classList.contains("table-resize-overlay")
    && !child.classList.contains("table-resize-handle")
  ));

  if (elementChildren.length === 1 && (elementChildren[0] === list || elementChildren[0].contains(list))) {
    return list;
  }

  return null;
}

function createPaginatedListSlice(list, startItemIndex, itemCount, isLastSlice = true) {
  const items = getPaginatedListItems(list);
  const itemOffset = getPaginatedListItemOffset(list) + startItemIndex;
  const slice = list.cloneNode(false);
  const endItemIndex = Math.min(items.length, startItemIndex + itemCount);

  for (let index = startItemIndex; index < endItemIndex; index += 1) {
    slice.appendChild(items[index].cloneNode(true));
  }

  slice.classList.add("article-list-page-fragment");
  if (startItemIndex > 0) {
    slice.classList.add("article-list-continuation");
  }
  if (!isLastSlice) {
    slice.classList.remove("knowledge-group-fragment-end", "knowledge-cluster-fragment-end");
  }
  slice.dataset.listItemOffset = String(itemOffset);
  slice.dataset.listOriginalItemCount = String(items.length);
  return slice;
}

function replaceListInClonedBlock(originalBlock, originalList, listSlice, isLastSlice = true) {
  if (originalBlock === originalList) {
    return listSlice;
  }

  const blockClone = originalBlock.cloneNode(true);
  const originalLists = Array.from(originalBlock.querySelectorAll("ol.note-list, ul.note-list"))
    .filter(isSplittablePaginatedList);
  const clonedLists = Array.from(blockClone.querySelectorAll("ol.note-list, ul.note-list"))
    .filter(isSplittablePaginatedList);
  const listIndex = originalLists.indexOf(originalList);
  const listToReplace = clonedLists[listIndex >= 0 ? listIndex : 0];

  Array.from(blockClone.querySelectorAll(".table-resize-overlay, .table-resize-handle")).forEach((node) => {
    node.remove();
  });

  if (listToReplace) {
    listToReplace.replaceWith(listSlice);
  } else {
    blockClone.replaceChildren(listSlice);
  }

  blockClone.dataset.listSplitFragment = "true";
  if (!isLastSlice) {
    blockClone.classList.remove("knowledge-group-fragment-end", "knowledge-cluster-fragment-end");
    blockClone.classList.remove(...QUESTION_PAGINATION_FRAGMENT_END_CLASSES);
  }
  if (getPaginatedListItemOffset(listSlice) > 0) {
    blockClone.classList.remove(...QUESTION_PAGINATION_FRAGMENT_START_CLASSES);
    markQuestionAnswerBoxNestedContinuation(blockClone);
  }
  return blockClone;
}

function createPaginatedListBlockSlice(block, list, startItemIndex, itemCount, isLastSlice = true) {
  return replaceListInClonedBlock(
    block,
    list,
    createPaginatedListSlice(list, startItemIndex, itemCount, isLastSlice),
    isLastSlice,
  );
}

function createKeepWithNextPaginationProbeBlock(block) {
  if (block?.classList?.contains("question-answer-box")) {
    const fragments = expandQuestionAnswerBoxForPagination(block);
    if (fragments.length > 1) {
      return fragments[0];
    }
  }

  const list = getSingleSplittableListFromBlock(block);

  if (list) {
    const items = getPaginatedListItems(list);

    if (items.length > 1) {
      return createPaginatedListBlockSlice(block, list, 0, 1, false);
    }
  }

  const table = getSingleSplittableTableFromBlock(block);

  if (table) {
    const groups = getTablePaginationRowGroups(table);
    const firstGroup = groups[0];

    if (groups.length > 1 && firstGroup) {
      return createPaginatedTableBlockSlice(block, table, firstGroup.start, firstGroup.count, false);
    }
  }

  const paragraph = getSingleSplittableParagraphFromBlock(block);

  if (paragraph) {
    const textLength = getParagraphTextLength(paragraph);

    if (textLength > PARAGRAPH_PAGINATION_MIN_FRAGMENT_CHARS * 2) {
      return createPaginatedParagraphBlockSlice(
        block,
        paragraph,
        0,
        Math.min(textLength, PARAGRAPH_PAGINATION_MIN_FRAGMENT_CHARS * 2),
        false,
      );
    }
  }

  return block;
}

function getParagraphTextLength(paragraph) {
  return paragraph && paragraph.tagName === "P"
    ? String(paragraph.textContent || "").length
    : 0;
}

function isSplittablePaginatedParagraph(paragraph) {
  if (!paragraph || paragraph.tagName !== "P") {
    return false;
  }

  if (paragraph.closest("li")) {
    return false;
  }

  return getParagraphTextLength(paragraph) >= PARAGRAPH_PAGINATION_MIN_TEXT_LENGTH;
}

function getSingleSplittableParagraphFromBlock(block) {
  if (!block || block.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  if (isSplittablePaginatedParagraph(block)) {
    return block;
  }

  const paragraphs = Array.from(block.querySelectorAll("p[data-md-block='paragraph']"))
    .filter(isSplittablePaginatedParagraph);

  if (paragraphs.length !== 1) {
    return null;
  }

  const paragraph = paragraphs[0];
  const elementChildren = Array.from(block.children || []).filter((child) => (
    !child.classList.contains("table-resize-overlay")
    && !child.classList.contains("table-resize-handle")
  ));

  if (elementChildren.length === 1 && (elementChildren[0] === paragraph || elementChildren[0].contains(paragraph))) {
    return paragraph;
  }

  return null;
}

function getPaginatedParagraphOffset(paragraph) {
  const value = Number.parseInt(paragraph && paragraph.dataset ? paragraph.dataset.paragraphCharOffset : "", 10);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function getRangeTextPosition(root, textOffset) {
  const totalLength = getParagraphTextLength(root);

  if (!root || textOffset <= 0) {
    return { node: root, offset: 0 };
  }

  if (textOffset >= totalLength) {
    return { node: root, offset: root.childNodes.length };
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let consumed = 0;
  let node = walker.nextNode();

  while (node) {
    const length = String(node.nodeValue || "").length;

    if (consumed + length >= textOffset) {
      return {
        node,
        offset: Math.max(0, Math.min(length, textOffset - consumed)),
      };
    }

    consumed += length;
    node = walker.nextNode();
  }

  return { node: root, offset: root.childNodes.length };
}

function getPreferredParagraphBreakOffset(paragraph, startOffset, targetOffset, minOffset, maxOffset) {
  const text = String(paragraph?.textContent || "");
  const min = Math.max(startOffset + 1, Math.min(text.length, Number(minOffset) || startOffset + 1));
  const max = Math.max(min, Math.min(text.length, Number(maxOffset) || text.length));
  let best = 0;

  for (let offset = Math.min(targetOffset, max); offset >= min; offset -= 1) {
    const previous = text[offset - 1] || "";
    const next = text[offset] || "";

    if (
      /\s/.test(previous)
      || /[，。！？；：、,.!?;:)]/.test(previous)
      || /[（(]/.test(next)
      || /[\u3400-\u9fff]/.test(previous)
    ) {
      best = offset;
      break;
    }
  }

  return best || clampNumber(targetOffset, min, max, min);
}

function createPaginatedParagraphSlice(paragraph, startOffset, endOffset, isLastSlice = true) {
  const textLength = getParagraphTextLength(paragraph);
  const slice = paragraph.cloneNode(false);
  const normalizedStart = Math.max(0, Math.min(textLength, Number(startOffset) || 0));
  const normalizedEnd = Math.max(normalizedStart, Math.min(textLength, Number(endOffset) || textLength));
  const range = document.createRange();
  const rangeStart = getRangeTextPosition(paragraph, normalizedStart);
  const rangeEnd = getRangeTextPosition(paragraph, normalizedEnd);

  range.setStart(rangeStart.node, rangeStart.offset);
  range.setEnd(rangeEnd.node, rangeEnd.offset);
  slice.appendChild(range.cloneContents());
  range.detach();

  slice.classList.add("article-paragraph-page-fragment");
  if (normalizedStart > 0) {
    slice.classList.add("article-paragraph-continuation");
    slice.removeAttribute("id");
  }
  if (isLastSlice) {
    slice.classList.add("article-paragraph-fragment-end");
  }
  slice.dataset.paragraphCharOffset = String(normalizedStart);
  slice.dataset.paragraphOriginalTextLength = String(textLength);
  return slice;
}

function replaceParagraphInClonedBlock(originalBlock, originalParagraph, paragraphSlice, isLastSlice = true) {
  if (originalBlock === originalParagraph) {
    return paragraphSlice;
  }

  const blockClone = originalBlock.cloneNode(true);
  const originalParagraphs = Array.from(originalBlock.querySelectorAll("p[data-md-block='paragraph']"))
    .filter(isSplittablePaginatedParagraph);
  const clonedParagraphs = Array.from(blockClone.querySelectorAll("p[data-md-block='paragraph']"))
    .filter(isSplittablePaginatedParagraph);
  const paragraphIndex = originalParagraphs.indexOf(originalParagraph);
  const paragraphToReplace = clonedParagraphs[paragraphIndex >= 0 ? paragraphIndex : 0];

  Array.from(blockClone.querySelectorAll(".table-resize-overlay, .table-resize-handle")).forEach((node) => {
    node.remove();
  });

  if (paragraphToReplace) {
    paragraphToReplace.replaceWith(paragraphSlice);
  } else {
    blockClone.replaceChildren(paragraphSlice);
  }

  blockClone.dataset.paragraphSplitFragment = "true";
  if (!isLastSlice) {
    blockClone.classList.remove("knowledge-group-fragment-end", "knowledge-cluster-fragment-end");
    blockClone.classList.remove(...QUESTION_PAGINATION_FRAGMENT_END_CLASSES);
  }
  if (getPaginatedParagraphOffset(paragraphSlice) > 0) {
    blockClone.classList.remove(...QUESTION_PAGINATION_FRAGMENT_START_CLASSES);
    markQuestionAnswerBoxNestedContinuation(blockClone);
  }
  return blockClone;
}

function createPaginatedParagraphBlockSlice(block, paragraph, startOffset, endOffset, isLastSlice = true) {
  return replaceParagraphInClonedBlock(
    block,
    paragraph,
    createPaginatedParagraphSlice(paragraph, startOffset, endOffset, isLastSlice),
    isLastSlice,
  );
}

function cloneBlockWithClasses(block, classNames = []) {
  if (!block) {
    return null;
  }

  const clone = block.cloneNode(true);
  if (clone.classList && classNames.length) {
    clone.classList.add(...classNames);
  }
  return clone;
}

function expandKnowledgeGroupForPagination(group) {
  if (!group) {
    return [];
  }

  const fragments = [];
  const subtitle = group.querySelector(":scope > .knowledge-subtitle");
  const content = group.querySelector(":scope > .knowledge-group-content");

  if (subtitle) {
    fragments.push(cloneBlockWithClasses(subtitle, ["knowledge-cluster-fragment", "knowledge-group-fragment-title"]));
  }

  if (content) {
    const contentBlocks = Array.from(content.children);

    contentBlocks.forEach((child, index) => {
      const fragment = document.createElement("div");
      fragment.className = "knowledge-group-content knowledge-group-content-fragment knowledge-cluster-fragment";
      if (index === contentBlocks.length - 1) {
        fragment.classList.add("knowledge-group-fragment-end");
      }
      fragment.appendChild(child.cloneNode(true));
      fragments.push(fragment);
    });
  }

  return fragments.length ? fragments : [group.cloneNode(true)];
}

function expandKnowledgeClusterForPagination(cluster) {
  if (!cluster) {
    return [];
  }

  const fragments = [];
  const header = cluster.querySelector(":scope > .knowledge-cluster-header");
  const body = cluster.querySelector(":scope > .knowledge-cluster-body");

  if (header) {
    const headerFragment = cloneBlockWithClasses(header, ["knowledge-cluster-fragment", "knowledge-cluster-fragment-header"]);
    if (cluster.dataset?.cardLayoutKey) {
      headerFragment.dataset.cardLayoutKey = cluster.dataset.cardLayoutKey;
    }
    fragments.push(headerFragment);
  }

  if (body) {
    Array.from(body.children).forEach((child) => {
      if (child.classList && child.classList.contains("knowledge-group")) {
        expandKnowledgeGroupForPagination(child).forEach((fragment) => {
          if (cluster.dataset?.cardLayoutKey) {
            fragment.dataset.cardLayoutKey = cluster.dataset.cardLayoutKey;
          }
          fragments.push(fragment);
        });
        return;
      }

      const fragment = cloneBlockWithClasses(child, ["knowledge-cluster-fragment"]);
      if (fragment) {
        if (cluster.dataset?.cardLayoutKey) {
          fragment.dataset.cardLayoutKey = cluster.dataset.cardLayoutKey;
        }
        fragments.push(fragment);
      }
    });
  }

  if (!fragments.length) {
    return [cluster.cloneNode(true)];
  }

  const lastFragment = fragments[fragments.length - 1];
  if (lastFragment.classList) {
    lastFragment.classList.add("knowledge-cluster-fragment-end");
  }

  if (cluster.dataset?.cardLayoutKey) {
    fragments.forEach((fragment) => {
      fragment.dataset.cardLayoutKey = cluster.dataset.cardLayoutKey;
    });
  }

  return fragments;
}

function removePaginationFragmentIdentity(fragment) {
  if (!fragment || fragment.nodeType !== Node.ELEMENT_NODE) {
    return;
  }

  fragment.removeAttribute("id");
  if (fragment.dataset) {
    delete fragment.dataset.mdBlockId;
    delete fragment.dataset.mdBlockIndex;
  }
}

function markQuestionAnswerBoxNestedContinuation(fragment) {
  if (!fragment || fragment.nodeType !== Node.ELEMENT_NODE) {
    return;
  }

  const rows = [];
  if (fragment.classList && fragment.classList.contains("question-answer-box-row")) {
    rows.push(fragment);
  }
  rows.push(...Array.from(fragment.querySelectorAll(".question-answer-box-row")));

  rows.forEach((row) => {
    row.classList.add("question-answer-box-row-continuation");
    const label = row.querySelector(":scope > .question-answer-box-label");
    if (label) {
      label.remove();
    }
  });
}

function markQuestionPaginationFragmentBoundaries(fragments, startClass, endClass) {
  const filteredFragments = fragments.filter(Boolean);

  filteredFragments.forEach((fragment, index) => {
    if (!fragment.classList) {
      return;
    }

    if (index === 0) {
      fragment.classList.add(startClass);
    } else {
      fragment.classList.add("question-pagination-fragment-continuation");
      removePaginationFragmentIdentity(fragment);
    }

    if (index === filteredFragments.length - 1) {
      fragment.classList.add(endClass);
    }
  });

  return filteredFragments;
}

function cloneQuestionPaginationContainer(source, tagName, className) {
  if (source) {
    return source.cloneNode(false);
  }

  const container = document.createElement(tagName);
  container.className = className;
  return container;
}

function createQuestionCardPaginationFragment(card, classNames = []) {
  const fragment = card.cloneNode(false);
  fragment.classList.add("question-card-fragment", ...classNames);
  if (card.dataset?.cardLayoutKey) {
    fragment.dataset.cardLayoutKey = card.dataset.cardLayoutKey;
  }
  return fragment;
}

function createQuestionAnswerItemPaginationFragment(item, classNames = []) {
  const fragment = item.cloneNode(false);
  fragment.classList.add("question-answer-item-fragment", ...classNames);
  if (item.dataset?.cardLayoutKey) {
    fragment.dataset.cardLayoutKey = item.dataset.cardLayoutKey;
  }
  return fragment;
}

function getQuestionAnswerBoxRowSlices(block) {
  if (!block || !block.classList || !block.classList.contains("question-answer-box")) {
    return null;
  }

  const rows = Array.from(block.children || [])
    .filter((child) => child.classList && child.classList.contains("question-answer-box-row"));

  if (rows.length < 2) {
    return null;
  }

  return rows.map((row, index) => {
    const slice = block.cloneNode(false);
    slice.classList.add("question-answer-box-page-fragment");
    if (index > 0) {
      slice.classList.add("question-answer-box-continuation");
    }
    slice.appendChild(row.cloneNode(true));
    return slice;
  });
}

function createQuestionAnswerBoxPaginationFragment(box, classNames = []) {
  const fragment = box.cloneNode(false);
  fragment.classList.add("question-answer-box-page-fragment", "question-answer-box-fragment", ...classNames);
  return fragment;
}

function createQuestionAnswerBoxRowSlice(row, classNames = []) {
  const slice = row.cloneNode(false);
  slice.classList.add("question-answer-box-row-fragment", ...classNames);

  Array.from(row.children || []).forEach((child) => {
    slice.appendChild(child.cloneNode(true));
  });

  return slice;
}

function appendQuestionAnswerBoxRowFragments(fragments, box, row) {
  if (!row) {
    return;
  }

  const label = row.querySelector(":scope > .question-answer-box-label");
  const contentBlocks = Array.from(row.children || []).filter((child) => child !== label);

  if (!contentBlocks.length) {
    const fragment = createQuestionAnswerBoxPaginationFragment(box);
    fragment.appendChild(createQuestionAnswerBoxRowSlice(row));
    fragments.push(fragment);
    return;
  }

  contentBlocks.forEach((content, index) => {
    getQuestionPaginationContentSlices(content).forEach((contentSlice, sliceIndex) => {
      const fragment = createQuestionAnswerBoxPaginationFragment(box);
      const rowSlice = row.cloneNode(false);

      rowSlice.classList.add("question-answer-box-row-fragment");
      if (index > 0 || sliceIndex > 0) {
        rowSlice.classList.add("question-answer-box-row-continuation");
      }
      if (label && index === 0 && sliceIndex === 0) {
        rowSlice.appendChild(label.cloneNode(true));
      }
      rowSlice.appendChild(contentSlice);
      fragment.appendChild(rowSlice);
      fragments.push(fragment);
    });
  });
}

function expandQuestionAnswerBoxForPagination(box) {
  if (!box || !box.classList || !box.classList.contains("question-answer-box")) {
    return [];
  }

  const fragments = [];
  const rows = Array.from(box.children || [])
    .filter((child) => child.classList && child.classList.contains("question-answer-box-row"));

  rows.forEach((row) => appendQuestionAnswerBoxRowFragments(fragments, box, row));

  return fragments.length
    ? markQuestionPaginationFragmentBoundaries(
      fragments,
      "question-answer-box-fragment-start",
      "question-answer-box-fragment-end",
    )
    : [box.cloneNode(true)];
}

function getQuestionListItemBody(item) {
  return item?.querySelector?.(":scope > .list-item-body") || item || null;
}

function isQuestionListItemAnswerBox(item, child) {
  return Boolean(
    item
    && child
    && child.classList
    && child.classList.contains("question-answer-box")
    && child.closest("li") === item
  );
}

function hasQuestionListItemFragmentContent(children) {
  return children.some((child) => {
    if (!child) {
      return false;
    }

    const text = String(child.textContent || "").replace(/\s+/g, "").trim();
    return Boolean(
      text
      || ["IMG", "TABLE", "PRE", "FIGURE"].includes(child.tagName)
      || child.querySelector?.("img, table, pre, figure, .math-block, .mindmap-card")
    );
  });
}

function createQuestionListItemFragment(item, children, classNames = []) {
  const itemClone = item.cloneNode(false);
  const itemBody = getQuestionListItemBody(item);
  const bodyClone = itemBody && itemBody !== item
    ? itemBody.cloneNode(false)
    : itemClone;

  itemClone.classList.add("question-list-item-fragment", ...classNames);

  children.forEach((child) => {
    bodyClone.appendChild(child.cloneNode(true));
  });

  if (bodyClone !== itemClone) {
    itemClone.appendChild(bodyClone);
  }

  return itemClone;
}

function createQuestionListBlockFragment(list, item, children, itemIndex, classNames = []) {
  const fragment = list.cloneNode(false);
  const isContinuation = classNames.includes("question-list-item-continuation");

  fragment.classList.add("article-list-page-fragment", "question-list-page-fragment");
  if (itemIndex > 0 || isContinuation) {
    fragment.classList.add("article-list-continuation");
  }
  fragment.dataset.listItemOffset = String(itemIndex);
  fragment.dataset.listOriginalItemCount = String(getPaginatedListItems(list).length);
  fragment.appendChild(createQuestionListItemFragment(item, children, classNames));
  return fragment;
}

function expandQuestionListItemForPagination(list, item, itemIndex) {
  const itemBody = getQuestionListItemBody(item);
  const bodyChildren = Array.from(itemBody?.children || []);

  if (!bodyChildren.some((child) => isQuestionListItemAnswerBox(item, child))) {
    return [];
  }

  const fragments = [];
  let bufferedChildren = [];
  let hasPassedAnswerBox = false;

  const flushBufferedChildren = () => {
    if (!hasQuestionListItemFragmentContent(bufferedChildren)) {
      bufferedChildren = [];
      return;
    }

    fragments.push(createQuestionListBlockFragment(
      list,
      item,
      bufferedChildren,
      itemIndex,
      hasPassedAnswerBox ? ["question-list-item-continuation"] : ["question-list-item-start"],
    ));
    bufferedChildren = [];
  };

  bodyChildren.forEach((child) => {
    if (!isQuestionListItemAnswerBox(item, child)) {
      bufferedChildren.push(child);
      return;
    }

    flushBufferedChildren();
    expandQuestionAnswerBoxForPagination(child).forEach((fragment) => {
      fragment.classList.add("question-list-answer-fragment");
      fragments.push(fragment);
    });
    hasPassedAnswerBox = true;
  });

  flushBufferedChildren();
  return fragments;
}

function expandQuestionBodyListForPagination(list) {
  if (!list || !["OL", "UL"].includes(list.tagName || "")) {
    return [];
  }

  const items = getPaginatedListItems(list);
  const fragments = [];
  let rangeStart = 0;

  const flushRange = (rangeEnd) => {
    if (rangeEnd <= rangeStart) {
      return;
    }

    fragments.push(createPaginatedListSlice(
      list,
      rangeStart,
      rangeEnd - rangeStart,
      rangeEnd >= items.length,
    ));
    rangeStart = rangeEnd;
  };

  items.forEach((item, itemIndex) => {
    const itemFragments = expandQuestionListItemForPagination(list, item, itemIndex);

    if (!itemFragments.length) {
      return;
    }

    flushRange(itemIndex);
    fragments.push(...itemFragments);
    rangeStart = itemIndex + 1;
  });

  flushRange(items.length);
  return fragments.length ? fragments : [list.cloneNode(true)];
}

function getQuestionPaginationContentSlices(block) {
  const answerBoxSlices = getQuestionAnswerBoxRowSlices(block);
  return answerBoxSlices || [block.cloneNode(true)];
}

function appendQuestionCardStemTitleFragment(fragments, card, stemPanel, title) {
  if (!title) {
    return;
  }

  const fragment = createQuestionCardPaginationFragment(card, [
    "question-card-fragment-stem",
    "question-card-fragment-heading",
  ]);
  const panel = cloneQuestionPaginationContainer(stemPanel, "section", "question-panel question-panel-stem");

  panel.appendChild(title.cloneNode(true));
  fragment.appendChild(panel);
  fragments.push(fragment);
}

function appendQuestionCardStemContentFragments(fragments, card, stemPanel, stemBody, block) {
  getQuestionPaginationContentSlices(block).forEach((contentSlice) => {
    const fragment = createQuestionCardPaginationFragment(card, ["question-card-fragment-stem"]);
    const panel = cloneQuestionPaginationContainer(stemPanel, "section", "question-panel question-panel-stem");
    const body = cloneQuestionPaginationContainer(stemBody, "div", "question-panel-body question-panel-body-stem");

    body.appendChild(contentSlice);
    panel.appendChild(body);
    fragment.appendChild(panel);
    fragments.push(fragment);
  });
}

function appendQuestionCardDetailFragment(fragments, card, detailPanel, detailBody, content, section = null) {
  const fragment = createQuestionCardPaginationFragment(card, ["question-card-fragment-detail"]);
  const panel = cloneQuestionPaginationContainer(detailPanel, "section", "question-panel question-panel-detail question-followup-box");
  const body = cloneQuestionPaginationContainer(detailBody, "div", "question-panel-body question-panel-body-detail");

  if (section) {
    const sectionClone = section.cloneNode(false);
    sectionClone.classList.add("question-detail-section-fragment");
    sectionClone.appendChild(content);
    body.appendChild(sectionClone);
  } else {
    body.appendChild(content);
  }

  panel.appendChild(body);
  fragment.appendChild(panel);
  fragments.push(fragment);
}

function appendQuestionCardDetailFragments(fragments, card, detailPanel) {
  if (!detailPanel) {
    return;
  }

  const detailBody = detailPanel.querySelector(":scope > .question-panel-body-detail");
  const detailChildren = Array.from((detailBody || detailPanel).children || []);

  detailChildren.forEach((child) => {
    if (child.classList && child.classList.contains("question-detail-section")) {
      const sectionChildren = Array.from(child.children || []);

      if (!sectionChildren.length) {
        appendQuestionCardDetailFragment(fragments, card, detailPanel, detailBody, child.cloneNode(true));
        return;
      }

      sectionChildren.forEach((sectionChild) => {
        getQuestionPaginationContentSlices(sectionChild).forEach((contentSlice) => {
          appendQuestionCardDetailFragment(fragments, card, detailPanel, detailBody, contentSlice, child);
        });
      });
      return;
    }

    getQuestionPaginationContentSlices(child).forEach((contentSlice) => {
      appendQuestionCardDetailFragment(fragments, card, detailPanel, detailBody, contentSlice);
    });
  });
}

function expandQuestionCardForPagination(card) {
  if (!card) {
    return [];
  }

  const fragments = [];
  const stemPanel = card.querySelector(":scope > .question-panel-stem");
  const stemBody = stemPanel?.querySelector?.(":scope > .question-panel-body-stem");
  const title = stemPanel?.querySelector?.(":scope > .question-card-title");
  const detailPanel = card.querySelector(":scope > .question-panel-detail");

  appendQuestionCardStemTitleFragment(fragments, card, stemPanel, title);
  Array.from(stemBody?.children || []).forEach((child) => {
    appendQuestionCardStemContentFragments(fragments, card, stemPanel, stemBody, child);
  });
  appendQuestionCardDetailFragments(fragments, card, detailPanel);

  return fragments.length
    ? markQuestionPaginationFragmentBoundaries(
      fragments,
      "question-card-fragment-start",
      "question-card-fragment-end",
    )
    : [card.cloneNode(true)];
}

function appendQuestionAnswerItemTitleFragment(fragments, item, title) {
  if (!title) {
    return;
  }

  const fragment = createQuestionAnswerItemPaginationFragment(item, [
    "question-answer-item-fragment-heading",
  ]);

  fragment.appendChild(title.cloneNode(true));
  fragments.push(fragment);
}

function appendQuestionAnswerItemContentFragment(fragments, item, content, classNames = []) {
  const fragment = createQuestionAnswerItemPaginationFragment(item, classNames);
  fragment.appendChild(content);
  fragments.push(fragment);
}

function appendQuestionAnswerItemDetailFragment(fragments, item, detailPanel, detailBody, content, section = null) {
  const panel = cloneQuestionPaginationContainer(detailPanel, "section", "question-panel question-panel-detail question-answer-item-detail question-followup-box");
  const body = cloneQuestionPaginationContainer(detailBody, "div", "question-panel-body question-panel-body-detail");

  if (section) {
    const sectionClone = section.cloneNode(false);
    sectionClone.classList.add("question-detail-section-fragment");
    sectionClone.appendChild(content);
    body.appendChild(sectionClone);
  } else {
    body.appendChild(content);
  }

  panel.appendChild(body);
  appendQuestionAnswerItemContentFragment(fragments, item, panel, ["question-answer-item-fragment-detail"]);
}

function appendQuestionAnswerItemDetailFragments(fragments, item, detailPanel) {
  const detailBody = detailPanel.querySelector(":scope > .question-panel-body-detail");
  const detailChildren = Array.from((detailBody || detailPanel).children || []);

  detailChildren.forEach((child) => {
    if (child.classList && child.classList.contains("question-detail-section")) {
      const sectionChildren = Array.from(child.children || []);

      if (!sectionChildren.length) {
        appendQuestionAnswerItemDetailFragment(fragments, item, detailPanel, detailBody, child.cloneNode(true));
        return;
      }

      sectionChildren.forEach((sectionChild) => {
        getQuestionPaginationContentSlices(sectionChild).forEach((contentSlice) => {
          appendQuestionAnswerItemDetailFragment(fragments, item, detailPanel, detailBody, contentSlice, child);
        });
      });
      return;
    }

    getQuestionPaginationContentSlices(child).forEach((contentSlice) => {
      appendQuestionAnswerItemDetailFragment(fragments, item, detailPanel, detailBody, contentSlice);
    });
  });
}

function expandQuestionAnswerItemForPagination(item) {
  if (!item) {
    return [];
  }

  const fragments = [];
  const title = item.querySelector(":scope > .question-answer-item-title");

  appendQuestionAnswerItemTitleFragment(fragments, item, title);

  Array.from(item.children || []).forEach((child) => {
    if (child === title) {
      return;
    }

    if (child.classList && child.classList.contains("question-panel-detail")) {
      appendQuestionAnswerItemDetailFragments(fragments, item, child);
      return;
    }

    getQuestionPaginationContentSlices(child).forEach((contentSlice) => {
      appendQuestionAnswerItemContentFragment(fragments, item, contentSlice, ["question-answer-item-fragment-content"]);
    });
  });

  return fragments.length
    ? markQuestionPaginationFragmentBoundaries(
      fragments,
      "question-answer-item-fragment-start",
      "question-answer-item-fragment-end",
    )
    : [item.cloneNode(true)];
}

function collectPaginatedBlocks(sourceRoot) {
  if (!sourceRoot) {
    return [];
  }

  const blocks = [];

  Array.from(sourceRoot.children).forEach((block) => {
    if (block.classList && block.classList.contains("question-card")) {
      blocks.push(...expandQuestionCardForPagination(block));
      return;
    }

    if (block.classList && block.classList.contains("question-answer-item")) {
      blocks.push(...expandQuestionAnswerItemForPagination(block));
      return;
    }

    if (block.classList && block.classList.contains("question-answer-box")) {
      blocks.push(...expandQuestionAnswerBoxForPagination(block));
      return;
    }

    if (
      sourceRoot.classList?.contains("question-body-layout")
      && ["OL", "UL"].includes(block.tagName || "")
      && block.classList.contains("note-list")
    ) {
      blocks.push(...expandQuestionBodyListForPagination(block));
      return;
    }

    if (block.classList && block.classList.contains("knowledge-cluster")) {
      blocks.push(...expandKnowledgeClusterForPagination(block));
      return;
    }

    blocks.push(block.cloneNode(true));
  });

  return blocks;
}

function buildPaginatedPreview(sourceRoot, options = {}, documentTitle = "") {
  const resolved = getResolvedDocumentOptions(options);
  const pageMetrics = getPageMetrics(resolved);
  const workbench = getPageLayoutWorkbench();
  const preview = document.createElement("div");
  const pendingBlocks = collectPaginatedBlocks(sourceRoot);
  const pages = [];
  const sourceClassNames = sourceRoot?.classList ? Array.from(sourceRoot.classList) : [];
  let currentPage = null;
  const paginationStrategy = sanitizeChoice(
    resolved.paginationStrategy,
    PAGINATION_STRATEGIES,
    DEFAULT_PAGINATION_STRATEGY,
  );
  const isBlockFirstPagination = paginationStrategy === "block-first";

  workbench.innerHTML = "";
  preview.className = "page-preview";
  preview.dataset.mode = resolved.mode;
  preview.dataset.layoutPreset = resolved.layoutPreset;
  preview.dataset.questionAnswerLayout = resolved.questionAnswerLayout;
  applyPageBackgroundStyleProperties(preview, resolved);

  const commitCurrentPage = () => {
    if (!currentPage) {
      return;
    }

    pages.push(currentPage.page);
    preview.appendChild(currentPage.page);
    currentPage = null;
  };

  const startNewPage = () => {
    currentPage = createPaginatedPage(resolved, pages.length + 1, documentTitle);
    currentPage.article.classList.add(...sourceClassNames.filter((className) => (
      className !== "article-canvas"
      && className !== "article-measure-canvas"
    )));
    workbench.appendChild(currentPage.page);
    return currentPage;
  };

  const pageHasRoom = () => (
    currentPage
    && currentPage.article.scrollHeight <= getPaginatedArticleHeightLimit(currentPage, pageMetrics.contentHeightPx) + PAGE_LAYOUT_FIT_TOLERANCE_PX
  );

  const canMoveOverflowBlockToNextPage = (block) => {
    if (!currentPage || !block || !block.isConnected || currentPage.article.childElementCount <= 1) {
      return false;
    }

    return !(
      currentPage.article.childElementCount === 2
      && shouldKeepPaginatedBlockWithNext(block.previousElementSibling)
    );
  };

  const moveOverflowBlockToNextPage = (block) => {
    if (!canMoveOverflowBlockToNextPage(block)) {
      return false;
    }

    block.remove();
    commitCurrentPage();
    startNewPage();
    currentPage.article.appendChild(block);
    return true;
  };

  const measureTableGroupFit = (block, table, groups, startGroupIndex, groupCount) => {
    if (!currentPage || groupCount <= 0) {
      return false;
    }

    const startRowIndex = groups[startGroupIndex].start;
    const endGroup = groups[startGroupIndex + groupCount - 1];
    const rowCount = endGroup.end - startRowIndex + 1;
    const candidate = createPaginatedTableBlockSlice(
      block,
      table,
      startRowIndex,
      rowCount,
      startGroupIndex + groupCount >= groups.length,
    );

    currentPage.article.appendChild(candidate);
    const fits = pageHasRoom();
    candidate.remove();
    return fits;
  };

  const findFittingTableGroupCount = (block, table, groups, startGroupIndex) => {
    let low = 1;
    let high = groups.length - startGroupIndex;
    let best = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (measureTableGroupFit(block, table, groups, startGroupIndex, mid)) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return best;
  };

  const measureListItemFit = (block, list, startItemIndex, itemCount) => {
    if (!currentPage || itemCount <= 0) {
      return false;
    }

    const items = getPaginatedListItems(list);
    const candidate = createPaginatedListBlockSlice(
      block,
      list,
      startItemIndex,
      itemCount,
      startItemIndex + itemCount >= items.length,
    );

    currentPage.article.appendChild(candidate);
    const fits = pageHasRoom();
    candidate.remove();
    return fits;
  };

  const findFittingListItemCount = (block, list, startItemIndex) => {
    const items = getPaginatedListItems(list);
    let low = 1;
    let high = items.length - startItemIndex;
    let best = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (measureListItemFit(block, list, startItemIndex, mid)) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return best;
  };

  const measureParagraphSliceFit = (block, paragraph, startOffset, endOffset) => {
    if (!currentPage || endOffset <= startOffset) {
      return false;
    }

    const textLength = getParagraphTextLength(paragraph);
    const candidate = createPaginatedParagraphBlockSlice(
      block,
      paragraph,
      startOffset,
      endOffset,
      endOffset >= textLength,
    );

    currentPage.article.appendChild(candidate);
    const fits = pageHasRoom();
    candidate.remove();
    return fits;
  };

  const findFittingParagraphEndOffset = (block, paragraph, startOffset) => {
    const textLength = getParagraphTextLength(paragraph);
    let low = startOffset + PARAGRAPH_PAGINATION_MIN_FRAGMENT_CHARS;
    let high = textLength;
    let best = startOffset;

    if (textLength - startOffset < PARAGRAPH_PAGINATION_MIN_FRAGMENT_CHARS * 2) {
      low = startOffset + 1;
    }

    low = Math.min(textLength, low);

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (measureParagraphSliceFit(block, paragraph, startOffset, mid)) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    if (best <= startOffset) {
      return best;
    }

    if (best < textLength) {
      const minBreak = startOffset + PARAGRAPH_PAGINATION_MIN_FRAGMENT_CHARS;
      best = getPreferredParagraphBreakOffset(paragraph, startOffset, best, minBreak, best);
    }

    return best;
  };

  const paginateTableBlock = (block) => {
    const table = getSingleSplittableTableFromBlock(block);

    if (!table) {
      return false;
    }

    const groups = getTablePaginationRowGroups(table);

    if (groups.length < 2) {
      return false;
    }

    if (block.isConnected) {
      block.remove();
    }

    let groupIndex = 0;

    while (groupIndex < groups.length) {
      if (!currentPage) {
        startNewPage();
      }

      let fittingGroupCount = findFittingTableGroupCount(block, table, groups, groupIndex);

      const hasOnlyKeepWithNextBlock = currentPage.article.childElementCount === 1
        && shouldKeepPaginatedBlockWithNext(currentPage.article.firstElementChild);

      if (fittingGroupCount === 0 && currentPage.article.childElementCount > 0 && !hasOnlyKeepWithNextBlock) {
        commitCurrentPage();
        startNewPage();
        continue;
      }

      if (fittingGroupCount === 0) {
        fittingGroupCount = 1;
      }

      const startRowIndex = groups[groupIndex].start;
      const endGroup = groups[groupIndex + fittingGroupCount - 1];
      const rowCount = endGroup.end - startRowIndex + 1;
      const isLastSlice = groupIndex + fittingGroupCount >= groups.length;
      const slice = createPaginatedTableBlockSlice(block, table, startRowIndex, rowCount, isLastSlice);

      currentPage.article.appendChild(slice);
      groupIndex += fittingGroupCount;

      if (groupIndex < groups.length) {
        commitCurrentPage();
        startNewPage();
      }
    }

    return true;
  };

  const paginateListBlock = (block) => {
    const list = getSingleSplittableListFromBlock(block);

    if (!list) {
      return false;
    }

    const items = getPaginatedListItems(list);

    if (items.length < 2) {
      return false;
    }

    if (block.isConnected) {
      block.remove();
    }

    let itemIndex = 0;

    while (itemIndex < items.length) {
      if (!currentPage) {
        startNewPage();
      }

      let fittingItemCount = findFittingListItemCount(block, list, itemIndex);

      const hasOnlyKeepWithNextBlock = currentPage.article.childElementCount === 1
        && shouldKeepPaginatedBlockWithNext(currentPage.article.firstElementChild);

      if (fittingItemCount === 0 && currentPage.article.childElementCount > 0 && !hasOnlyKeepWithNextBlock) {
        commitCurrentPage();
        startNewPage();
        continue;
      }

      if (fittingItemCount === 0) {
        fittingItemCount = 1;
      }

      const isLastSlice = itemIndex + fittingItemCount >= items.length;
      const slice = createPaginatedListBlockSlice(block, list, itemIndex, fittingItemCount, isLastSlice);

      currentPage.article.appendChild(slice);
      itemIndex += fittingItemCount;

      if (itemIndex < items.length) {
        commitCurrentPage();
        startNewPage();
      }
    }

    return true;
  };

  const paginateParagraphBlock = (block) => {
    const paragraph = getSingleSplittableParagraphFromBlock(block);

    if (!paragraph) {
      return false;
    }

    const textLength = getParagraphTextLength(paragraph);

    if (textLength < PARAGRAPH_PAGINATION_MIN_TEXT_LENGTH) {
      return false;
    }

    if (block.isConnected) {
      block.remove();
    }

    let offset = 0;

    while (offset < textLength) {
      if (!currentPage) {
        startNewPage();
      }

      let fittingEndOffset = findFittingParagraphEndOffset(block, paragraph, offset);

      const hasOnlyKeepWithNextBlock = currentPage.article.childElementCount === 1
        && shouldKeepPaginatedBlockWithNext(currentPage.article.firstElementChild);

      if (fittingEndOffset <= offset && currentPage.article.childElementCount > 0 && !hasOnlyKeepWithNextBlock) {
        commitCurrentPage();
        startNewPage();
        continue;
      }

      if (fittingEndOffset <= offset) {
        fittingEndOffset = Math.min(textLength, offset + PARAGRAPH_PAGINATION_MIN_FRAGMENT_CHARS);
      }

      const isLastSlice = fittingEndOffset >= textLength;
      const slice = createPaginatedParagraphBlockSlice(block, paragraph, offset, fittingEndOffset, isLastSlice);

      currentPage.article.appendChild(slice);
      offset = fittingEndOffset;

      if (offset < textLength) {
        commitCurrentPage();
        startNewPage();
      }
    }

    return true;
  };

  const splitOverflowBlock = (block) => (
    paginateTableBlock(block)
    || paginateListBlock(block)
    || paginateParagraphBlock(block)
  );

  startNewPage();

  while (pendingBlocks.length) {
    const block = pendingBlocks.shift();

    if (!block) {
      continue;
    }

    if (isManualPageBreakBlock(block)) {
      if (currentPage && currentPage.article.childElementCount > 0) {
        commitCurrentPage();
      }

      if (pendingBlocks.length) {
        startNewPage();
      }

      continue;
    }

    if (!currentPage) {
      startNewPage();
    }

    if (
      isBlockFirstPagination
      && shouldForcePageBreakBeforeBlock(block)
      && currentPage.article.childElementCount > 0
    ) {
      commitCurrentPage();
      startNewPage();
    }

    if (
      isBlockFirstPagination
      && shouldKeepPaginatedBlockWithNext(block)
      && pendingBlocks.length
      && currentPage.article.childElementCount > 0
    ) {
      const nextBlock = pendingBlocks[0];
      const nextProbeBlock = createKeepWithNextPaginationProbeBlock(nextBlock);

      currentPage.article.appendChild(block);
      currentPage.article.appendChild(nextProbeBlock);

      const pairFits = pageHasRoom();

      nextProbeBlock.remove();
      block.remove();

      if (!pairFits) {
        commitCurrentPage();
        startNewPage();
      }
    }

    currentPage.article.appendChild(block);

    if (pageHasRoom()) {
      continue;
    }

    if (isBlockFirstPagination && moveOverflowBlockToNextPage(block)) {
      if (pageHasRoom()) {
        continue;
      }

      if (splitOverflowBlock(block)) {
        continue;
      }

      if (currentPage.article.childElementCount === 1) {
        continue;
      }
    } else if (splitOverflowBlock(block)) {
      continue;
    }

    if (currentPage.article.childElementCount === 1) {
      continue;
    }

    if (
      isBlockFirstPagination
      && currentPage.article.childElementCount === 2
      && shouldKeepPaginatedBlockWithNext(block.previousElementSibling)
    ) {
      continue;
    }

    block.remove();
    commitCurrentPage();
    startNewPage();
    currentPage.article.appendChild(block);
  }

  commitCurrentPage();
  workbench.innerHTML = "";

  return {
    element: preview,
    pageCount: Math.max(1, pages.length),
    metrics: pageMetrics,
  };
}

function getIndent(line) {
  const match = String(line || "").replace(/\t/g, "  ").match(/^\s*/);
  return match ? match[0].length : 0;
}

function stripIndent(line, indent) {
  const expanded = String(line || "").replace(/\t/g, "  ");
  return expanded.startsWith(" ".repeat(indent)) ? expanded.slice(indent) : expanded.trimStart();
}

function getListMatch(line) {
  return String(line || "").match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
}

function isListMarker(line, baseIndent) {
  const match = getListMatch(line);
  return Boolean(match && getIndent(line) === baseIndent);
}

function isHorizontalRule(trimmed) {
  return /^(-{3,}|\*{3,}|_{3,})$/.test(trimmed);
}

function isTableStart(lines, index, baseIndent) {
  if (index + 1 >= lines.length || getIndent(lines[index]) !== baseIndent) {
    return false;
  }

  const current = lines[index].trim();
  const next = lines[index + 1].trim();
  return current.includes("|") && /^[:|\-\s]+$/.test(next);
}

function splitTableRow(row) {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseTableAlignments(separatorRow) {
  return splitTableRow(separatorRow).map((cell) => {
    if (/^:-+:$/.test(cell)) {
      return "center";
    }

    if (/^-+:$/.test(cell)) {
      return "right";
    }

    if (/^:-+$/.test(cell)) {
      return "left";
    }

    return "";
  });
}

function parseTableCellDescriptor(cell) {
  const source = String(cell || "");
  const trimmed = source.trim();

  if (/^\{\{table-skip\}\}$/i.test(trimmed)) {
    return {
      content: "",
      skip: true,
      rowspan: 1,
      colspan: 1,
    };
  }

  const spanMatch = source.match(/^\s*\{\{table-span:(\d+)x(\d+)\}\}/i);
  const rowspan = spanMatch ? clampNumber(spanMatch[1], 1, 99, 1) : 1;
  const colspan = spanMatch ? clampNumber(spanMatch[2], 1, 99, 1) : 1;
  const content = spanMatch ? source.slice(spanMatch[0].length).replace(/^\s+/, "") : source;

  return {
    content,
    skip: false,
    rowspan,
    colspan,
  };
}

function formatTableSpanToken(rowspan, colspan) {
  return `{{table-span:${rowspan}x${colspan}}}`;
}

function parseStandaloneImage(line) {
  const match = String(line || "").trim().match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/);

  if (!match) {
    return null;
  }

  return {
    alt: match[1] || "",
    src: match[2] || "",
    title: match[3] || "",
  };
}

function renderImageFigure(image, blockAttrs = "") {
  const src = escapeAttribute(safeUrl(image.src));
  const alt = escapeAttribute(image.alt || image.title || "image");
  const caption = image.title || image.alt;

  return `
    <figure class="image-card" data-md-block="image"${blockAttrs} data-image-src="${src}" data-image-alt="${alt}" data-image-title="${escapeAttribute(image.title || "")}">
      <img src="${src}" alt="${alt}">
      ${caption ? `<figcaption>${parseInlines(caption)}</figcaption>` : ""}
    </figure>
  `;
}

function parseInlines(text, depth = 0) {
  const codeTokens = [];
  const mathTokens = [];
  const renderNestedInlineContent = (content) => {
    const decoded = decodeHtmlEntities(content);
    return depth >= 6 ? escapeHtml(decoded) : parseInlines(decoded, depth + 1);
  };
  let source = String(text || "").replace(/`([^`]+)`/g, (_match, code) => {
    const token = `%%LAYOUTCODE${codeTokens.length}%%`;
    codeTokens.push(`<code>${escapeHtml(code)}</code>`);
    return token;
  });

  source = tokenizeInlineMath(source, mathTokens);

  let html = escapeHtml(source);
  html = html.replace(/&lt;br\s*\/?&gt;/gi, "<br>");
  html = collapseHtmlBreakRuns(html);
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) => {
    const safe = escapeAttribute(safeUrl(url));
    return `<a href="${safe}" target="_blank" rel="noreferrer">${label}</a>`;
  });

  html = replaceBalancedInlineToken(html, INLINE_TEXT_STYLE_TOKEN, (rawStyle, content) => {
    const style = sanitizeInlineTextStyle(parseStyleDeclarationMap(rawStyle));
    const styleAttr = buildInlineTextStyleCss(style);
    const dataAttrs = [
      style.color ? ` data-md-text-color="${escapeAttribute(style.color)}"` : "",
      style.font ? ` data-md-text-font="${escapeAttribute(style.font)}"` : "",
      style.size !== "" ? ` data-md-text-size="${escapeAttribute(String(style.size))}"` : "",
    ].join("");
    const styleHtml = styleAttr ? ` style="${escapeAttribute(styleAttr)}"` : "";
    return `<span class="inline-text-style"${dataAttrs}${styleHtml}>${renderNestedInlineContent(content)}</span>`;
  });

  html = html.replace(/\{\{chem:([^}]+)\}\}/g, (_match, content) => {
    return renderChemInline(decodeHtmlEntities(content));
  });

  html = html.replace(/\{\{(red|blue|green|gold):([^}]+)\}\}/g, (_match, tone, content) => {
    return `<span class="tone-${tone}">${renderNestedInlineContent(content)}</span>`;
  });

  html = html.replace(/\{\{brush-(glow|mist|underline|tag):([^}]+)\}\}/g, (_match, brush, content) => {
    return `<span class="brush-inline brush-inline-${brush}">${renderNestedInlineContent(content)}</span>`;
  });

  html = html.replace(/==(.+?)==/g, '<span class="brush-mark">$1</span>');
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
  html = html.replace(/\+\+([^+]+)\+\+/g, "<u>$1</u>");
  html = html.replace(/~~([^~]+)~~/g, "<del>$1</del>");

  codeTokens.forEach((tokenHtml, index) => {
    html = html.replace(`%%LAYOUTCODE${index}%%`, tokenHtml);
  });

  mathTokens.forEach((tokenHtml, index) => {
    html = html.replace(`${INLINE_MATH_PLACEHOLDER_PREFIX}${index}%%`, tokenHtml);
  });

  return html;
}

function normalizeInlineBreakLineEdges(lines) {
  const normalized = Array.from(lines || [], (line) => collapseHtmlBreakRuns(String(line || "")));

  return normalized.map((line, index) => {
    let nextLine = line;

    if (index > 0) {
      nextLine = nextLine.replace(/^(?:[ \t]*<br\s*\/?>[ \t]*)+/gi, "");
    }

    if (index < normalized.length - 1) {
      nextLine = nextLine.replace(/(?:[ \t]*<br\s*\/?>[ \t]*)+$/gi, "");
    }

    return nextLine;
  });
}

function renderInlineLines(lines) {
  return collapseHtmlBreakRuns(
    normalizeInlineBreakLineEdges(lines)
      .map((line) => parseInlines(line))
      .join("<br>"),
  );
}

function startsBlock(lines, index, baseIndent) {
  const raw = lines[index] || "";
  const trimmed = raw.trim();

  if (!trimmed) {
    return false;
  }

  if (getIndent(raw) < baseIndent) {
    return true;
  }

  return (
    /^```/.test(trimmed) ||
    isDisplayMathStart(trimmed) ||
    parseStandaloneBlockControlLine(trimmed).matched ||
    /^:::[a-zA-Z][\w-]*/.test(trimmed) ||
    /^#{1,6}\s+/.test(trimmed) ||
    isHorizontalRule(trimmed) ||
    /^>\s?/.test(trimmed) ||
    isListMarker(raw, baseIndent) ||
    isTableStart(lines, index, baseIndent)
  );
}

function renderCodeBlock(lines, startIndex, blockAttrs = "") {
  const opener = lines[startIndex].trim();
  const language = opener.slice(3).trim();
  const codeLines = [];
  let index = startIndex + 1;

  while (index < lines.length && !/^```/.test(lines[index].trim())) {
    codeLines.push(lines[index]);
    index += 1;
  }

  if (index < lines.length) {
    index += 1;
  }

  const code = escapeHtml(codeLines.join("\n"));
  const className = language ? ` class="language-${escapeAttribute(language)}"` : "";

  return {
    html: `<pre data-md-block="code"${blockAttrs} data-md-language="${escapeAttribute(language)}"><code${className}>${code}</code></pre>`,
    nextIndex: index,
  };
}

function renderDisplayMathBlock(lines, startIndex) {
  const openerLine = String(lines[startIndex] || "").trim();
  const fence = getDisplayMathFence(openerLine);

  if (!fence) {
    return {
      html: "",
      nextIndex: startIndex + 1,
    };
  }

  const firstBody = openerLine.slice(fence.open.length);
  const mathLines = [];
  let index = startIndex + 1;

  if (firstBody.endsWith(fence.close) && firstBody.length > fence.close.length) {
    mathLines.push(firstBody.slice(0, -fence.close.length));
    return {
      html: renderMathBlockElement(mathLines.join("\n")),
      nextIndex: index,
    };
  }

  if (firstBody.trim()) {
    mathLines.push(firstBody);
  }

  while (index < lines.length) {
    const raw = String(lines[index] || "");
    const trimmed = raw.trim();

    if (trimmed.endsWith(fence.close)) {
      const beforeClose = raw.slice(0, raw.lastIndexOf(fence.close));
      if (beforeClose.trim()) {
        mathLines.push(beforeClose);
      }
      index += 1;
      break;
    }

    mathLines.push(raw);
    index += 1;
  }

  return {
    html: renderMathBlockElement(mathLines.join("\n")),
    nextIndex: index,
  };
}

function renderBlockquote(lines, startIndex, baseIndent, context, options = {}) {
  const quoteLines = [];
  let index = startIndex;

  while (index < lines.length) {
    const raw = lines[index];

    if (!raw.trim()) {
      quoteLines.push("");
      index += 1;
      continue;
    }

    if (getIndent(raw) < baseIndent || !/^>\s?/.test(raw.trim())) {
      break;
    }

    quoteLines.push(raw.trim().replace(/^>\s?/, ""));
    index += 1;
  }

  const leadingControl = quoteLines.length ? extractLeadingBlockControlToken(quoteLines[0]) : { matched: false };
  const control = mergeBlockControls(options.control, leadingControl.matched ? leadingControl.control : {});

  if (leadingControl.matched) {
    quoteLines[0] = leadingControl.text;
  }

  const blockAttrs = buildMarkdownBlockTrackingAttributes(context, startIndex, index, {
    control,
    controlSourceIndex: options.controlSourceIndex,
  });
  const rendered = renderBlocks(
    quoteLines,
    0,
    0,
    createChildRenderContext(context, normalizeMarkdownRenderContext(context).lineOffset + startIndex),
  ).html;
  return {
    html: `<blockquote class="note-quote" data-md-block="quote"${blockAttrs}>${rendered}</blockquote>`,
    nextIndex: index,
  };
}

function renderParagraph(lines, startIndex, baseIndent, context, options = {}) {
  const paragraphLines = [];
  let index = startIndex;

  while (index < lines.length) {
    const raw = lines[index];

    if (!raw.trim() || getIndent(raw) < baseIndent) {
      break;
    }

    if (index !== startIndex && startsBlock(lines, index, baseIndent)) {
      break;
    }

    paragraphLines.push(raw.trim());
    index += 1;
  }

  const directives = extractLeadingBlockDirectives(paragraphLines[0] || "");
  const control = mergeBlockControls(options.control, directives.control);
  const blockAttrs = buildMarkdownBlockTrackingAttributes(context, startIndex, index, {
    control,
    controlSourceIndex: options.controlSourceIndex,
  });

  if (paragraphLines.length === 1) {
    const image = parseStandaloneImage(directives.text);

    if (image) {
      return {
        html: renderImageFigure(image, blockAttrs),
        nextIndex: index,
      };
    }
  }

  const { style, text: firstLine } = directives;
  const contentLines = paragraphLines.length ? [firstLine, ...paragraphLines.slice(1)] : paragraphLines;
  const styleAttr = buildBlockTextStyleCss(style);
  const dataAttrs = [
    style.color ? ` data-md-block-color="${escapeAttribute(style.color)}"` : "",
    style.font ? ` data-md-block-font="${escapeAttribute(style.font)}"` : "",
    style.size !== "" ? ` data-md-block-size="${escapeAttribute(String(style.size))}"` : "",
    style.align ? ` data-md-block-align="${escapeAttribute(style.align)}"` : "",
    style.indent !== "" ? ` data-md-block-indent="${escapeAttribute(String(style.indent))}"` : "",
    style.spacing !== "" ? ` data-md-block-spacing="${escapeAttribute(String(style.spacing))}"` : "",
  ].join("");
  const styleHtml = styleAttr ? ` style="${escapeAttribute(styleAttr)}"` : "";

  return {
    html: `<p data-md-block="paragraph"${blockAttrs}${dataAttrs}${styleHtml}>${renderInlineLines(contentLines)}</p>`,
    nextIndex: index,
  };
}

function renderList(lines, startIndex, baseIndent, context, options = {}) {
  const firstMatch = getListMatch(lines[startIndex]);
  const ordered = /^\d+\.$/.test(firstMatch[2]);
  const className = ordered ? "note-list ordered-list" : "note-list bullet-list";
  const items = [];
  const nestedRenderJobs = [];
  let index = startIndex;
  let firstItemControl = sanitizeBlockControl({});

  while (index < lines.length) {
    const match = getListMatch(lines[index]);

    if (!match || getIndent(lines[index]) !== baseIndent) {
      break;
    }

    if (/^\d+\.$/.test(match[2]) !== ordered) {
      break;
    }

    let itemLead = match[3];

    if (index === startIndex) {
      const leadingControl = extractLeadingBlockControlToken(itemLead);

      if (leadingControl.matched) {
        firstItemControl = leadingControl.control;
        itemLead = leadingControl.text;
      }
    }

    const itemLines = [itemLead];
    const nestedLines = [];
    let nestedLineOffset = null;
    index += 1;

    while (index < lines.length) {
      const raw = lines[index];

      if (!raw.trim()) {
        if (nestedLines.length) {
          nestedLines.push("");
        } else {
          itemLines.push("");
        }
        index += 1;
        continue;
      }

      const indent = getIndent(raw);
      const nextMatch = getListMatch(raw);

      if (indent < baseIndent || (nextMatch && indent === baseIndent) || (indent === baseIndent && startsBlock(lines, index, baseIndent))) {
        break;
      }

      if (indent >= baseIndent + 2) {
        if (nestedLineOffset == null) {
          nestedLineOffset = index;
        }
        nestedLines.push(stripIndent(raw, baseIndent + 2));
      } else {
        itemLines.push(raw.trim());
      }

      index += 1;
    }

    const itemParts = [];
    const visibleLines = itemLines.filter((line) => line.trim() || line === "");

    if (visibleLines.some((line) => line.trim())) {
      const { style, text: firstLine } = extractLeadingBlockTextStyleToken(visibleLines[0] || "");
      const contentLines = visibleLines.length ? [firstLine, ...visibleLines.slice(1)] : visibleLines;
      const markerText = ordered ? match[2] : "";
      const marker = ordered
        ? `<span class="inline-list-marker inline-list-marker-ordered" aria-hidden="true">${escapeHtml(markerText)}</span>`
        : '<span class="inline-list-marker inline-list-marker-bullet" aria-hidden="true">•</span>';
      const lineClass = ordered
        ? "list-item-line list-item-line-ordered"
        : "list-item-line list-item-line-bullet";
      const styleAttr = buildBlockTextStyleCss(style);
      const dataAttrs = [
        style.color ? ` data-md-block-color="${escapeAttribute(style.color)}"` : "",
        style.font ? ` data-md-block-font="${escapeAttribute(style.font)}"` : "",
        style.size !== "" ? ` data-md-block-size="${escapeAttribute(String(style.size))}"` : "",
        style.align ? ` data-md-block-align="${escapeAttribute(style.align)}"` : "",
        style.indent !== "" ? ` data-md-block-indent="${escapeAttribute(String(style.indent))}"` : "",
        style.spacing !== "" ? ` data-md-block-spacing="${escapeAttribute(String(style.spacing))}"` : "",
      ].join("");
      const styleHtml = styleAttr ? ` style="${escapeAttribute(styleAttr)}"` : "";
      itemParts.push(
        `<div class="list-item-copy"><p class="${lineClass}"${dataAttrs}${styleHtml}>${marker}<span class="list-item-text">${renderInlineLines(contentLines)}</span></p></div>`,
      );
    }

    if (nestedLines.some((line) => line.trim())) {
      const token = `%%LAYOUTNESTEDBLOCK${nestedRenderJobs.length}%%`;
      nestedRenderJobs.push({
        token,
        lines: nestedLines,
        lineOffset: normalizeMarkdownRenderContext(context).lineOffset + (nestedLineOffset == null ? startIndex : nestedLineOffset),
      });
      itemParts.push(token);
    }

    items.push(`<li><div class="list-item-body">${itemParts.join("")}</div></li>`);
  }

  const blockAttrs = buildMarkdownBlockTrackingAttributes(context, startIndex, index, {
    control: mergeBlockControls(options.control, firstItemControl),
    controlSourceIndex: options.controlSourceIndex,
  });
  let itemsHtml = items.join("");

  nestedRenderJobs.forEach((job) => {
    itemsHtml = itemsHtml.replace(
      job.token,
      renderBlocks(job.lines, 0, 0, createChildRenderContext(context, job.lineOffset)).html,
    );
  });

  return {
    html: `<${ordered ? "ol" : "ul"} class="${className}" data-md-block="list"${blockAttrs} data-md-list-kind="${ordered ? "ordered" : "bullet"}">${itemsHtml}</${ordered ? "ol" : "ul"}>`,
    nextIndex: index,
  };
}

function buildMindmapTree(title, lines) {
  const contentLines = lines.filter((line) => line.trim());

  if (!contentLines.length) {
    return title ? { label: title, children: [] } : null;
  }

  let rootLabel = title ? title.trim() : "";
  let treeLines = contentLines;

  if (!getListMatch(contentLines[0])) {
    rootLabel = contentLines[0].trim();
    treeLines = contentLines.slice(1);
  }

  const root = { children: [] };
  const stack = [{ indent: -1, node: root }];

  treeLines.forEach((line) => {
    const match = getListMatch(line);

    if (!match) {
      return;
    }

    const node = { label: match[3].trim(), children: [] };
    const indent = getIndent(line);

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    stack[stack.length - 1].node.children.push(node);
    stack.push({ indent, node });
  });

  if (!rootLabel && root.children.length === 1) {
    return root.children[0];
  }

  return {
    label: rootLabel || "知识结构",
    children: root.children,
  };
}

function hasMindmapTopicIndex(label) {
  return /^\s*考点\s*\d+/u.test(String(label || ""));
}

function normalizeMindmapTopicLabel(label, depth = 0) {
  const text = String(label || "").trim();

  if (depth !== 0) {
    return text;
  }

  return text.replace(/^\s*考点\s*\d+\s*[：:、.\-]?\s*/u, "").trim() || text;
}

function renderMindmapItem(node, order = null, depth = 0) {
  const displayLabel = normalizeMindmapTopicLabel(node.label, depth);
  const children = node.children.length
    ? `<ul class="mindmap-list mindmap-list-depth-${Math.min(depth + 1, 4)}">${node.children
      .map((child) => renderMindmapItem(child, null, depth + 1))
      .join("")}</ul>`
    : "";
  const orderAttr = order === null ? "" : ` data-mindmap-order="${escapeAttribute(String(order))}"`;
  const itemClasses = [
    "mindmap-item",
    depth === 0 ? "mindmap-topic-item" : "mindmap-detail-item",
    node.children.length ? "mindmap-item-branch" : "mindmap-item-leaf",
    `mindmap-item-depth-${Math.min(depth, 4)}`,
  ];
  const nodeClasses = [
    "mindmap-node",
    depth === 0 ? "mindmap-node-topic" : "mindmap-node-detail",
    depth === 0 && hasMindmapTopicIndex(node.label) ? "mindmap-node-indexed" : "",
  ].filter(Boolean);

  return `<li class="${itemClasses.join(" ")}"${orderAttr} data-mindmap-depth="${escapeAttribute(String(depth))}"><div class="${nodeClasses.join(" ")}">${parseInlines(displayLabel)}</div>${children}</li>`;
}

function renderMindmapBlock(title, lines, blockAttrs = "") {
  const tree = buildMindmapTree(title, lines);

  if (!tree) {
    return "";
  }

  const root = tree.label ? `<div class="mindmap-root">${parseInlines(tree.label)}</div>` : "";
  const items = tree.children
    .map((node, order) => renderMindmapItem(node, order, 0))
    .join("");

  return `
    <section class="mindmap-card mindmap-card-axis" data-md-block="mindmap" data-mindmap-layout="axis"${blockAttrs}>
      <div class="mindmap-axis-shell">
        ${root}
        ${items ? `<ul class="mindmap-list mindmap-axis-list">${items}</ul>` : ""}
      </div>
    </section>
  `;
}

const MINDMAP_SVG_NS = "http://www.w3.org/2000/svg";
const pendingMindmapSvgRoots = new Set();
let pendingMindmapSvgFrame = null;
let mindmapResizeHandlerBound = false;
let mindmapMeasureCanvas = null;

function createMindmapSvgElement(tagName) {
  return document.createElementNS(MINDMAP_SVG_NS, tagName);
}

function getMindmapRelativeRect(element, baseRect) {
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left - baseRect.left,
    right: rect.right - baseRect.left,
    top: rect.top - baseRect.top,
    bottom: rect.bottom - baseRect.top,
    width: rect.width,
    height: rect.height,
    centerX: rect.left - baseRect.left + rect.width / 2,
    centerY: rect.top - baseRect.top + rect.height / 2,
  };
}

function formatMindmapPathNumber(value) {
  if (typeof value === "string") {
    return value;
  }

  return Number.isFinite(value) ? String(Math.round(value * 10) / 10) : "0";
}

function createMindmapConnectorPath(segments) {
  return segments
    .map((segment) => segment.map(formatMindmapPathNumber).join(" "))
    .join(" ");
}

function getDirectMindmapChildNodes(list) {
  if (!list) {
    return [];
  }

  return Array.from(list.children)
    .map((item) => item.querySelector(":scope > .mindmap-node"))
    .filter(Boolean);
}

function getMindmapMeasureContext() {
  if (typeof document === "undefined") {
    return null;
  }

  if (!mindmapMeasureCanvas) {
    mindmapMeasureCanvas = document.createElement("canvas");
  }

  return mindmapMeasureCanvas.getContext("2d");
}

function getMindmapCanvasFont(computedStyle) {
  return [
    computedStyle.fontStyle || "normal",
    computedStyle.fontVariant || "normal",
    computedStyle.fontWeight || "400",
    computedStyle.fontSize || `${DEFAULT_ACCENT_FONT_SIZE}px`,
    computedStyle.fontFamily || "sans-serif",
  ].join(" ");
}

function getMindmapElementSingleLineWidth(element) {
  if (!element || typeof window === "undefined") {
    return 0;
  }

  const computedStyle = window.getComputedStyle(element);
  const context = getMindmapMeasureContext();
  const text = String(element.textContent || "").replace(/\s+/g, " ").trim();
  const fontSize = parseFloat(computedStyle.fontSize) || DEFAULT_ACCENT_FONT_SIZE;
  const padding =
    (parseFloat(computedStyle.paddingLeft) || 0)
    + (parseFloat(computedStyle.paddingRight) || 0)
    + (parseFloat(computedStyle.borderLeftWidth) || 0)
    + (parseFloat(computedStyle.borderRightWidth) || 0);

  if (context) {
    context.font = getMindmapCanvasFont(computedStyle);
    return Math.ceil(context.measureText(text).width + padding + 2);
  }

  return Math.ceil(text.length * fontSize * 0.9 + padding + 2);
}

function getMindmapNodeWidthLimit(card) {
  if (!card || typeof window === "undefined") {
    return DEFAULT_MINDMAP_NODE_WIDTH;
  }

  const computedStyle = window.getComputedStyle(card);
  const rawValue = computedStyle.getPropertyValue("--user-mindmap-node-width");

  return clampNumber(parseFloat(rawValue), 90, 320, DEFAULT_MINDMAP_NODE_WIDTH);
}

function applyAdaptiveMindmapRootWidth(card, shell) {
  if (!card || !shell) {
    return;
  }

  const root = shell.querySelector(":scope > .mindmap-root");

  if (!root) {
    return;
  }

  const computedRootStyle = window.getComputedStyle(root);

  if (computedRootStyle.writingMode && computedRootStyle.writingMode.startsWith("vertical")) {
    const nextHeight = Math.max(88, Math.ceil(root.scrollHeight || root.getBoundingClientRect().height || 0));

    if (nextHeight) {
      card.style.setProperty("--mindmap-root-height", `${nextHeight}px`);
      shell.style.setProperty("--mindmap-root-height", `${nextHeight}px`);
    }

    card.style.removeProperty("--mindmap-root-width");
    shell.style.removeProperty("--mindmap-root-width");
    return;
  }

  const shellRect = shell.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const availableWidth = Math.max(90, (shellRect.width || cardRect.width || DEFAULT_MINDMAP_NODE_WIDTH) - 34);
  const maxWidth = Math.min(getMindmapNodeWidthLimit(card), availableWidth);
  const measuredWidth = getMindmapElementSingleLineWidth(root);
  const nextWidth = clampNumber(measuredWidth, 90, maxWidth, Math.min(DEFAULT_MINDMAP_NODE_WIDTH, maxWidth));

  card.style.setProperty("--mindmap-root-width", `${Math.round(nextWidth)}px`);
  shell.style.setProperty("--mindmap-root-width", `${Math.round(nextWidth)}px`);
}

function drawMindmapConnector(svg, shellRect, parentNode, childNodes) {
  if (!svg || !parentNode || !childNodes.length) {
    return;
  }

  const parentRect = getMindmapRelativeRect(parentNode, shellRect);
  const childRects = childNodes
    .map((childNode) => getMindmapRelativeRect(childNode, shellRect))
    .filter((rect) => rect.width > 0 && rect.height > 0);

  if (!childRects.length) {
    return;
  }

  const startX = parentRect.right - 1;
  const startY = parentRect.centerY;
  const endX = Math.min(...childRects.map((rect) => rect.left)) + 1;
  const childYs = childRects.map((rect) => rect.centerY);
  const minY = Math.min(startY, ...childYs);
  const maxY = Math.max(startY, ...childYs);
  const distance = endX - startX;
  const midX = distance > 8
    ? startX + distance / 2
    : startX + Math.max(6, distance / 2);

  const segments = [
    ["M", startX, startY, "H", midX],
    ["M", midX, minY, "V", maxY],
    ...childYs.map((childY) => ["M", midX, childY, "H", endX]),
  ];
  const path = createMindmapSvgElement("path");

  path.setAttribute("class", "mindmap-link-path");
  path.setAttribute("d", createMindmapConnectorPath(segments));
  svg.appendChild(path);
}

function mountSvgMindmap(card) {
  if (!card || !card.querySelector) {
    return;
  }

  const shell = card.querySelector(":scope > .mindmap-axis-shell");

  if (!shell) {
    return;
  }

  applyAdaptiveMindmapRootWidth(card, shell);

  let svg = shell.querySelector(":scope > .mindmap-link-layer");

  if (!svg) {
    svg = createMindmapSvgElement("svg");
    svg.setAttribute("class", "mindmap-link-layer");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("contenteditable", "false");
    shell.insertBefore(svg, shell.firstChild);
  }

  svg.replaceChildren();

  const shellRect = shell.getBoundingClientRect();
  const width = Math.max(1, Math.ceil(shell.scrollWidth || shellRect.width));
  const height = Math.max(1, Math.ceil(shell.scrollHeight || shellRect.height));

  svg.setAttribute("width", String(width));
  svg.setAttribute("height", String(height));
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const root = shell.querySelector(":scope > .mindmap-root");
  const axisList = shell.querySelector(":scope > .mindmap-axis-list");

  if (root && axisList) {
    drawMindmapConnector(svg, shellRect, root, getDirectMindmapChildNodes(axisList));
  }

  Array.from(shell.querySelectorAll(".mindmap-item-branch")).forEach((item) => {
    const parentNode = item.querySelector(":scope > .mindmap-node");
    const childList = item.querySelector(":scope > .mindmap-list");

    drawMindmapConnector(svg, shellRect, parentNode, getDirectMindmapChildNodes(childList));
  });
}

function mountSvgMindmaps(root = document) {
  if (typeof document === "undefined" || !root || !root.querySelectorAll) {
    return;
  }

  Array.from(root.querySelectorAll(".mindmap-card.mindmap-card-axis")).forEach(mountSvgMindmap);
}

function scheduleSvgMindmapUpdate(root = document) {
  if (typeof window === "undefined" || !root) {
    return;
  }

  pendingMindmapSvgRoots.add(root);

  if (pendingMindmapSvgFrame !== null) {
    return;
  }

  pendingMindmapSvgFrame = window.requestAnimationFrame(() => {
    const roots = Array.from(pendingMindmapSvgRoots);
    pendingMindmapSvgRoots.clear();
    pendingMindmapSvgFrame = null;
    roots.forEach((entry) => mountSvgMindmaps(entry));
  });
}

function bindMindmapSvgResizeUpdates() {
  if (typeof window === "undefined" || mindmapResizeHandlerBound) {
    return;
  }

  mindmapResizeHandlerBound = true;
  window.addEventListener("resize", () => scheduleSvgMindmapUpdate(document));
}

async function mountSvgMindmapsForDetachedRoot(root) {
  if (typeof document === "undefined" || !root) {
    return;
  }

  if (root.isConnected) {
    mountSvgMindmaps(root);
    return;
  }

  const host = document.createElement("div");

  host.style.position = "absolute";
  host.style.left = "-10000px";
  host.style.top = "0";
  host.style.visibility = "hidden";
  host.style.pointerEvents = "none";
  host.appendChild(root);
  document.body.appendChild(host);
  await waitForNextPaint();
  mountSvgMindmaps(root);
  host.removeChild(root);
  host.remove();
}

function renderCustomBlock(lines, startIndex, context, options = {}) {
  const header = lines[startIndex].trim();
  const match = header.match(/^:::(\w[\w-]*)(?:\s+(.*))?$/);

  if (!match) {
    return { html: "", nextIndex: startIndex + 1 };
  }

  const type = match[1].toLowerCase();
  const titleControl = extractLeadingBlockControlToken(match[2] || "");
  const title = titleControl.matched ? titleControl.text : (match[2] || "");
  const control = mergeBlockControls(options.control, titleControl.matched ? titleControl.control : {});
  let endIndex = -1;

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (lines[index].trim() === ":::") {
      endIndex = index;
      break;
    }
  }

  const isBrushBlock = /^brush-(glow|mist|underline|tag|tip)$/.test(type);

  if (endIndex === -1) {
    const blockAttrs = buildMarkdownBlockTrackingAttributes(context, startIndex, startIndex + 1, {
      control,
      controlSourceIndex: options.controlSourceIndex,
    });

    if (type === "label" || type === "stamp") {
      return {
        html: `<div class="section-stamp" data-md-block="${escapeAttribute(type)}"${blockAttrs}>${parseInlines(title)}</div>`,
        nextIndex: startIndex + 1,
      };
    }

    if (type === "mindmap") {
      return { html: renderMindmapBlock(title, [], blockAttrs), nextIndex: startIndex + 1 };
    }

    if (isBrushBlock) {
      const brushKind = type.replace("brush-", "");
      return {
        html: `<section class="brush-block brush-block-${brushKind}" data-md-block="brush"${blockAttrs} data-md-brush="${escapeAttribute(brushKind)}">${title ? `<p class="brush-block-title">${parseInlines(title)}</p>` : ""}</section>`,
        nextIndex: startIndex + 1,
      };
    }

    return {
      html: `<section class="callout-box" data-md-block="${escapeAttribute(type)}"${blockAttrs}>${title ? `<h3 class="callout-title">${parseInlines(title)}</h3>` : ""}</section>`,
      nextIndex: startIndex + 1,
    };
  }

  const innerLines = lines.slice(startIndex + 1, endIndex);
  const blockAttrs = buildMarkdownBlockTrackingAttributes(context, startIndex, endIndex + 1, {
    control,
    controlSourceIndex: options.controlSourceIndex,
  });
  const innerContext = createChildRenderContext(
    context,
    normalizeMarkdownRenderContext(context).lineOffset + startIndex + 1,
  );
  let html = "";

  if (type === "label" || type === "stamp") {
    const content = title || innerLines.join(" ");
    html = `<div class="section-stamp" data-md-block="${escapeAttribute(type)}"${blockAttrs}>${parseInlines(content)}</div>`;
  } else if (type === "mindmap") {
    html = renderMindmapBlock(title, innerLines, blockAttrs);
  } else if (isBrushBlock) {
    const brushKind = type.replace("brush-", "");
    const body = renderBlocks(innerLines, 0, 0, innerContext).html;
    html = `
      <section class="brush-block brush-block-${brushKind}" data-md-block="brush"${blockAttrs} data-md-brush="${escapeAttribute(brushKind)}">
        ${title ? `<p class="brush-block-title">${parseInlines(title)}</p>` : ""}
        <div class="callout-body">${body}</div>
      </section>
    `;
  } else {
    const body = renderBlocks(innerLines, 0, 0, innerContext).html;
    html = `
      <section class="callout-box" data-md-block="${escapeAttribute(type)}"${blockAttrs}>
        ${title ? `<h3 class="callout-title">${parseInlines(title)}</h3>` : ""}
        <div class="callout-body">${body}</div>
      </section>
    `;
  }

  return {
    html,
    nextIndex: endIndex + 1,
  };
}

function renderTable(lines, startIndex, baseIndent, context, options = {}) {
  const tableLines = [];
  let index = startIndex;

  while (index < lines.length) {
    const raw = lines[index];

    if (!raw.trim() || getIndent(raw) < baseIndent || !raw.includes("|")) {
      break;
    }

    tableLines.push(raw.trim());
    index += 1;
  }

  const leadingControl = tableLines.length ? extractLeadingBlockControlToken(tableLines[0]) : { matched: false };
  const control = mergeBlockControls(options.control, leadingControl.matched ? leadingControl.control : {});

  if (leadingControl.matched) {
    tableLines[0] = leadingControl.text;
  }

  const blockAttrs = buildMarkdownBlockTrackingAttributes(context, startIndex, index, {
    control,
    controlSourceIndex: options.controlSourceIndex,
  });
  const headers = splitTableRow(tableLines[0]);
  const rows = tableLines.slice(2).map(splitTableRow);
  const tableId = getStableTableId(tableLines, context);

  const headHtml = headers.map((header, columnIndex) => {
    const descriptor = parseTableCellDescriptor(header);

    if (descriptor.skip) {
      return "";
    }

    const span = `${descriptor.colspan > 1 ? ` colspan="${descriptor.colspan}"` : ""}${descriptor.rowspan > 1 ? ` rowspan="${descriptor.rowspan}"` : ""}`;
    return `<th${span}>${parseInlines(descriptor.content)}</th>`;
  }).join("");

  const bodyHtml = rows.map((row) => {
    const cells = row.map((cell, columnIndex) => {
      const descriptor = parseTableCellDescriptor(cell);

      if (descriptor.skip) {
        return "";
      }

      const span = `${descriptor.colspan > 1 ? ` colspan="${descriptor.colspan}"` : ""}${descriptor.rowspan > 1 ? ` rowspan="${descriptor.rowspan}"` : ""}`;
      return `<td${span}>${parseInlines(descriptor.content)}</td>`;
    }).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  return {
    html: `<table class="article-table" data-md-block="table"${blockAttrs} data-table-id="${escapeAttribute(tableId)}"><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`,
    nextIndex: index,
  };
}

function renderBlocks(lines, startIndex, baseIndent, context = createMarkdownRenderContext()) {
  const renderContext = normalizeMarkdownRenderContext(context);
  const parts = [];
  let index = startIndex;
  let pendingBlockControl = null;

  const takeBlockOptions = (inlineControl = {}) => {
    const options = {
      control: mergeBlockControls(pendingBlockControl?.control, inlineControl),
      controlSourceIndex: pendingBlockControl?.index,
    };
    pendingBlockControl = null;
    return options;
  };

  while (index < lines.length) {
    const raw = lines[index] || "";
    const trimmed = raw.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (getIndent(raw) < baseIndent) {
      break;
    }

    const standaloneControl = parseStandaloneBlockControlLine(trimmed);

    if (standaloneControl.matched) {
      pendingBlockControl = {
        control: mergeBlockControls(pendingBlockControl?.control, standaloneControl.control),
        index,
      };
      index += 1;
      continue;
    }

    if (/^```/.test(trimmed)) {
      const codeBlock = renderCodeBlock(lines, index);
      const blockAttrs = buildMarkdownBlockTrackingAttributes(renderContext, index, codeBlock.nextIndex, takeBlockOptions());
      parts.push(injectMarkdownBlockTrackingAttributes(codeBlock.html, blockAttrs));
      index = codeBlock.nextIndex;
      continue;
    }

    if (isDisplayMathStart(trimmed)) {
      const mathBlock = renderDisplayMathBlock(lines, index);
      const blockAttrs = buildMarkdownBlockTrackingAttributes(renderContext, index, mathBlock.nextIndex, takeBlockOptions());
      parts.push(injectMarkdownBlockTrackingAttributes(mathBlock.html, blockAttrs));
      index = mathBlock.nextIndex;
      continue;
    }

    if (/^:::[a-zA-Z][\w-]*/.test(trimmed)) {
      const customBlock = renderCustomBlock(lines, index, renderContext, takeBlockOptions());
      parts.push(customBlock.html);
      index = customBlock.nextIndex;
      continue;
    }

    if (/^#{1,6}\s+/.test(trimmed)) {
      const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
      const level = Math.min(4, headingMatch[1].length);
      const { control, style, text: headingText } = extractLeadingBlockDirectives(headingMatch[2]);
      const blockAttrs = buildMarkdownBlockTrackingAttributes(renderContext, index, index + 1, takeBlockOptions(control));
      const styleAttr = buildBlockTextStyleCss(style);
      const dataAttrs = [
        style.color ? ` data-md-block-color="${escapeAttribute(style.color)}"` : "",
        style.font ? ` data-md-block-font="${escapeAttribute(style.font)}"` : "",
        style.size !== "" ? ` data-md-block-size="${escapeAttribute(String(style.size))}"` : "",
        style.align ? ` data-md-block-align="${escapeAttribute(style.align)}"` : "",
        style.indent !== "" ? ` data-md-block-indent="${escapeAttribute(String(style.indent))}"` : "",
        style.spacing !== "" ? ` data-md-block-spacing="${escapeAttribute(String(style.spacing))}"` : "",
      ].join("");
      const styleHtml = styleAttr ? ` style="${escapeAttribute(styleAttr)}"` : "";
      parts.push(`<h${level} data-md-block="heading"${blockAttrs} data-md-level="${level}"${dataAttrs}${styleHtml}>${parseInlines(headingText)}</h${level}>`);
      index += 1;
      continue;
    }

    if (isHorizontalRule(trimmed)) {
      const blockAttrs = buildMarkdownBlockTrackingAttributes(renderContext, index, index + 1, takeBlockOptions());
      parts.push(`<hr class="manual-page-break" data-md-block="page-break"${blockAttrs}>`);
      index += 1;
      continue;
    }

    if (isTableStart(lines, index, baseIndent)) {
      const table = renderTable(lines, index, baseIndent, renderContext, takeBlockOptions());
      parts.push(table.html);
      index = table.nextIndex;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quote = renderBlockquote(lines, index, baseIndent, renderContext, takeBlockOptions());
      parts.push(quote.html);
      index = quote.nextIndex;
      continue;
    }

    if (isListMarker(raw, baseIndent)) {
      const list = renderList(lines, index, baseIndent, renderContext, takeBlockOptions());
      parts.push(list.html);
      index = list.nextIndex;
      continue;
    }

    const paragraph = renderParagraph(lines, index, baseIndent, renderContext, takeBlockOptions());
    parts.push(paragraph.html);
    index = paragraph.nextIndex;
  }

  return {
    html: parts.join("\n"),
    nextIndex: index,
  };
}

function renderMarkdown(markdown) {
  const normalized = normalizeMarkdown(markdown);

  if (!normalized.trim()) {
    return EMPTY_STATE_HTML;
  }

  const html = renderBlocks(normalized.split("\n"), 0, 0, createMarkdownRenderContext()).html;
  return html || EMPTY_STATE_HTML;
}

function escapeMarkdownPlainText(value) {
  return String(value || "")
    .replace(/\u200B/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/\r\n?/g, "\n")
    .replace(/\\/g, "\\\\")
    .replace(/([`*_[\]])/g, "\\$1");
}

function serializeInlineMarkdownNode(node) {
  if (!node) {
    return "";
  }

  if (node.nodeType === Node.TEXT_NODE) {
    return escapeMarkdownPlainText(node.textContent || "");
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const element = node;
  const tagName = element.tagName;
  const classList = element.classList;

  if (tagName === "BR") {
    return "<br>";
  }

  if (classList.contains("inline-list-marker")) {
    return "";
  }

  if (classList.contains("math-inline") || element.dataset.mdMathMode === "inline") {
    const source = String(element.dataset.mdMathSource || element.textContent || "").trim();

    if (!source) {
      return "";
    }

    if (element.dataset.mdMathVariant === "chem" && element.dataset.mdChemSource) {
      return `{{chem:${escapeMarkdownPlainText(element.dataset.mdChemSource)}}}`;
    }

    return `$${source}$`;
  }

  if (classList.contains("content-kicker")) {
    if (element.dataset.mdLabel) {
      return `${element.dataset.mdLabel}：`;
    }

    return serializeInlineMarkdownChildren(element);
  }

  if (classList.contains("inline-text-style") || element.dataset.mdTextColor || element.dataset.mdTextFont || element.dataset.mdTextSize) {
    const style = getInlineTextStyleFromElement(element);
    const styleText = serializeTextStyleMap(style, ["color", "font", "size"]);
    return styleText
      ? `{{${INLINE_TEXT_STYLE_TOKEN} ${styleText}:${serializeInlineMarkdownChildren(element)}}}`
      : serializeInlineMarkdownChildren(element);
  }

  if (classList.contains("tone-red")) {
    return `{{red:${serializeInlineMarkdownChildren(element)}}}`;
  }

  if (classList.contains("tone-blue")) {
    return `{{blue:${serializeInlineMarkdownChildren(element)}}}`;
  }

  if (classList.contains("tone-green")) {
    return `{{green:${serializeInlineMarkdownChildren(element)}}}`;
  }

  if (classList.contains("tone-gold")) {
    return `{{gold:${serializeInlineMarkdownChildren(element)}}}`;
  }

  if (classList.contains("brush-mark")) {
    return `==${serializeInlineMarkdownChildren(element)}==`;
  }

  if (classList.contains("brush-inline")) {
    const brushKind = ["glow", "mist", "underline", "tag"].find((kind) => classList.contains(`brush-inline-${kind}`));
    return brushKind
      ? `{{brush-${brushKind}:${serializeInlineMarkdownChildren(element)}}}`
      : serializeInlineMarkdownChildren(element);
  }

  if (tagName === "STRONG") {
    return `**${serializeInlineMarkdownChildren(element)}**`;
  }

  if (tagName === "EM") {
    return `*${serializeInlineMarkdownChildren(element)}*`;
  }

  if (tagName === "U") {
    return `++${serializeInlineMarkdownChildren(element)}++`;
  }

  if (tagName === "DEL") {
    return `~~${serializeInlineMarkdownChildren(element)}~~`;
  }

  if (tagName === "CODE" && element.parentElement && element.parentElement.tagName !== "PRE") {
    return `\`${element.textContent || ""}\``;
  }

  if (tagName === "A") {
    const label = serializeInlineMarkdownChildren(element);
    const href = safeUrl(element.getAttribute("href") || "#");
    return `[${label}](${href})`;
  }

  return serializeInlineMarkdownChildren(element);
}

function serializeInlineMarkdownChildren(element) {
  if (!element) {
    return "";
  }

  return normalizeRedundantHtmlBreaks(Array.from(element.childNodes)
    .map(serializeInlineMarkdownNode)
    .join(""))
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function indentMarkdownBlock(markdown, indent) {
  const text = String(markdown || "").replace(/\s+$/g, "");

  if (!text || !indent) {
    return text;
  }

  const prefix = " ".repeat(indent);
  return text
    .split("\n")
    .map((line) => (line ? `${prefix}${line}` : line))
    .join("\n");
}

function getBlockControlFromElement(element) {
  if (!element || !element.dataset) {
    return sanitizeBlockControl({});
  }

  return sanitizeBlockControl({
    id: element.dataset.mdExplicitId === "true" ? (element.dataset.mdAnchor || element.dataset.mdBlockId || "") : "",
    role: element.dataset.mdRole || "",
    variant: element.dataset.mdVariant || "",
  });
}

function serializeBlockControlPrefix(element) {
  const control = getBlockControlFromElement(element);
  const parts = [];

  if (control.id) {
    parts.push(`id=${control.id}`);
  }

  if (control.role) {
    parts.push(`role=${control.role}`);
  }

  if (control.variant) {
    parts.push(`variant=${control.variant}`);
  }

  return parts.length ? `{{${BLOCK_CONTROL_TOKEN} ${parts.join(";")}}}` : "";
}

function serializeMarkdownBlockWithControl(markdown, element, indent = 0) {
  const body = String(markdown || "").replace(/\s+$/g, "");
  const controlPrefix = serializeBlockControlPrefix(element);
  const controlled = controlPrefix ? `${controlPrefix}${body ? `\n${body}` : ""}` : body;
  return indentMarkdownBlock(controlled, indent);
}

function serializeTableCellMarkdown(cell) {
  return serializeInlineMarkdownChildren(cell)
    .split(/<br>/i)
    .map((segment) => segment.replace(/\s+/g, " ").trim())
    .join("<br>")
    .trim();
}

function serializeMindmapItemLines(item, indent = 0) {
  if (!item || item.tagName !== "LI") {
    return [];
  }

  const lines = [];
  const node = item.querySelector(":scope > .mindmap-node");
  const nested = item.querySelector(":scope > ul");
  const label = node ? serializeInlineMarkdownChildren(node).trim() : "";

  if (label) {
    lines.push(`${" ".repeat(indent)}- ${label}`);
  }

  if (nested) {
    lines.push(...serializeMindmapLines(nested, indent + 2));
  }

  return lines;
}

function serializeMindmapLines(list, indent = 0) {
  if (!list) {
    return [];
  }

  return Array.from(list.children).flatMap((item) => serializeMindmapItemLines(item, indent));
}

function serializeMindmapCardLines(element) {
  const sideItems = Array.from(element.querySelectorAll(":scope .mindmap-side > .mindmap-list > li"));

  if (sideItems.length) {
    return sideItems
      .map((item, fallbackOrder) => ({
        item,
        order: Number.isFinite(Number(item.dataset.mindmapOrder))
          ? Number(item.dataset.mindmapOrder)
          : fallbackOrder,
      }))
      .sort((a, b) => a.order - b.order)
      .flatMap((entry) => serializeMindmapItemLines(entry.item, 0));
  }

  return serializeMindmapLines(element.querySelector(":scope > .mindmap-list, :scope .mindmap-list"));
}

function serializeListMarkdown(list, indent = 0) {
  const ordered = list.tagName === "OL" || list.dataset.mdListKind === "ordered";
  const lines = [];

  Array.from(list.children).forEach((item, index) => {
    if (!item || item.tagName !== "LI") {
      return;
    }

    const body = item.querySelector(":scope > .list-item-body") || item;
    const copy = body.querySelector(":scope > .list-item-copy") || body;
    const paragraph = copy.querySelector(":scope > p") || copy;
    const marker = ordered ? `${index + 1}. ` : "- ";
    const blockStyle = getBlockTextStyleFromElement(paragraph);
    const stylePrefix = hasBlockTextStyle(blockStyle)
      ? `{{${BLOCK_TEXT_STYLE_TOKEN} ${serializeTextStyleMap(blockStyle, ["align", "indent", "spacing", "font", "size", "color"])}}}`
      : "";
    const text = `${stylePrefix}${serializeInlineMarkdownChildren(paragraph).trim()}`;
    const textLines = text ? text.split("\n") : [""];

    lines.push(`${" ".repeat(indent)}${marker}${textLines[0]}`.trimEnd());

    textLines.slice(1).forEach((line) => {
      lines.push(`${" ".repeat(indent + 2)}${line}`.trimEnd());
    });

    Array.from(body.children).forEach((child) => {
      if (child === copy) {
        return;
      }

      const nestedBlocks = serializeBlockNode(child, indent + 2);
      if (!nestedBlocks) {
        return;
      }

      if (Array.isArray(nestedBlocks)) {
        nestedBlocks.forEach((block) => {
          if (block) {
            lines.push(block);
          }
        });
        return;
      }

      lines.push(nestedBlocks);
    });
  });

  const controlPrefix = serializeBlockControlPrefix(list);

  if (controlPrefix) {
    lines.unshift(`${" ".repeat(indent)}${controlPrefix}`);
  }

  return lines.join("\n");
}

function serializeTableMarkdown(table, indent = 0) {
  const headerRow = table.querySelector("thead tr") || table.querySelector("tr");

  if (!headerRow) {
    return "";
  }

  const grid = buildTableGrid(table);
  const columnCount = grid.columnCount;

  if (!columnCount) {
    return "";
  }

  const matrix = Array.from({ length: grid.rowCount }, () => Array.from({ length: columnCount }, () => ""));

  grid.anchors.forEach((entry) => {
    const content = serializeTableCellMarkdown(entry.cell);
    matrix[entry.row][entry.col] = entry.rowspan > 1 || entry.colspan > 1
      ? `${formatTableSpanToken(entry.rowspan, entry.colspan)}${content}`
      : content;

    for (let rowIndex = entry.row; rowIndex < entry.row + entry.rowspan; rowIndex += 1) {
      for (let columnIndex = entry.col; columnIndex < entry.col + entry.colspan; columnIndex += 1) {
        if (rowIndex === entry.row && columnIndex === entry.col) {
          continue;
        }

        matrix[rowIndex][columnIndex] = TABLE_SKIP_TOKEN;
      }
    }
  });

  const headerCells = matrix[0];
  if (!headerCells.length) {
    return "";
  }

  const alignments = Array.from({ length: columnCount }, () => "---");

  const lines = [
    `| ${headerCells.join(" | ")} |`,
    `| ${alignments.join(" | ")} |`,
    ...matrix.slice(1).map((row) => `| ${row.join(" | ")} |`),
  ];

  return serializeMarkdownBlockWithControl(lines.join("\n"), table, indent);
}

function createMergedTableFromPaginatedFragments(fragments) {
  const sortedFragments = fragments
    .filter(Boolean)
    .slice()
    .sort((leftTable, rightTable) => getTableBodyRowOffset(leftTable) - getTableBodyRowOffset(rightTable));
  const firstTable = sortedFragments[0];

  if (!firstTable) {
    return null;
  }

  const mergedTable = firstTable.cloneNode(false);
  const body = document.createElement("tbody");
  const lastTable = sortedFragments[sortedFragments.length - 1];

  mergedTable.classList.remove("article-table-page-fragment", "article-table-continuation");
  delete mergedTable.dataset.tableRowOffset;
  delete mergedTable.dataset.tableOriginalRowCount;

  Array.from(firstTable.children).forEach((child) => {
    if (["CAPTION", "COLGROUP", "THEAD"].includes(child.tagName)) {
      mergedTable.appendChild(child.cloneNode(true));
    }
  });

  sortedFragments.forEach((fragmentTable) => {
    getTableBodyRowsForPagination(fragmentTable).forEach((row) => {
      body.appendChild(row.cloneNode(true));
    });
  });

  mergedTable.appendChild(body);

  if (lastTable && lastTable.tFoot) {
    mergedTable.appendChild(lastTable.tFoot.cloneNode(true));
  }

  return mergedTable;
}

function createMergedListFromPaginatedFragments(fragments) {
  const sortedFragments = fragments
    .filter(Boolean)
    .slice()
    .sort((leftList, rightList) => getPaginatedListItemOffset(leftList) - getPaginatedListItemOffset(rightList));
  const firstList = sortedFragments[0];

  if (!firstList) {
    return null;
  }

  const mergedList = firstList.cloneNode(false);

  mergedList.classList.remove("article-list-page-fragment", "article-list-continuation");
  delete mergedList.dataset.listItemOffset;
  delete mergedList.dataset.listOriginalItemCount;

  sortedFragments.forEach((fragmentList) => {
    getPaginatedListItems(fragmentList).forEach((item) => {
      mergedList.appendChild(item.cloneNode(true));
    });
  });

  return mergedList;
}

function createMergedParagraphFromPaginatedFragments(fragments) {
  const sortedFragments = fragments
    .filter(Boolean)
    .slice()
    .sort((leftParagraph, rightParagraph) => getPaginatedParagraphOffset(leftParagraph) - getPaginatedParagraphOffset(rightParagraph));
  const firstParagraph = sortedFragments[0];

  if (!firstParagraph) {
    return null;
  }

  const mergedParagraph = firstParagraph.cloneNode(false);

  mergedParagraph.classList.remove(
    "article-paragraph-page-fragment",
    "article-paragraph-continuation",
    "article-paragraph-fragment-end",
  );
  delete mergedParagraph.dataset.paragraphCharOffset;
  delete mergedParagraph.dataset.paragraphOriginalTextLength;

  sortedFragments.forEach((fragmentParagraph) => {
    Array.from(fragmentParagraph.childNodes).forEach((node) => {
      mergedParagraph.appendChild(node.cloneNode(true));
    });
  });

  return mergedParagraph;
}

function cloneWithMergedPaginatedFragmentsForSerialization(root) {
  if (!root || !root.querySelectorAll) {
    return root;
  }

  const paginatedTables = Array.from(root.querySelectorAll("table.article-table-page-fragment[data-table-id]"));
  const paginatedLists = Array.from(root.querySelectorAll(
    "ol.article-list-page-fragment[data-md-block-id], ul.article-list-page-fragment[data-md-block-id]",
  ));
  const paginatedParagraphs = Array.from(root.querySelectorAll("p.article-paragraph-page-fragment[data-md-block-id]"));

  if (paginatedTables.length < 2 && paginatedLists.length < 2 && paginatedParagraphs.length < 2) {
    return root;
  }

  const clone = root.cloneNode(true);
  const tablesById = new Map();
  const listsById = new Map();
  const paragraphsById = new Map();

  Array.from(clone.querySelectorAll("table.article-table-page-fragment[data-table-id]")).forEach((table) => {
    const tableId = table.dataset.tableId;

    if (!tableId) {
      return;
    }

    if (!tablesById.has(tableId)) {
      tablesById.set(tableId, []);
    }

    tablesById.get(tableId).push(table);
  });

  tablesById.forEach((tables) => {
    if (tables.length < 2) {
      return;
    }

    const sortedTables = tables
      .slice()
      .sort((leftTable, rightTable) => getTableBodyRowOffset(leftTable) - getTableBodyRowOffset(rightTable));
    const mergedTable = createMergedTableFromPaginatedFragments(sortedTables);

    if (!mergedTable) {
      return;
    }

    sortedTables[0].replaceWith(mergedTable);
    sortedTables.slice(1).forEach((table) => {
      table.dataset.serializationSkip = "true";
    });
  });

  Array.from(clone.querySelectorAll("ol.article-list-page-fragment[data-md-block-id], ul.article-list-page-fragment[data-md-block-id]")).forEach((list) => {
    const blockId = list.dataset.mdBlockId;

    if (!blockId) {
      return;
    }

    if (!listsById.has(blockId)) {
      listsById.set(blockId, []);
    }

    listsById.get(blockId).push(list);
  });

  listsById.forEach((lists) => {
    if (lists.length < 2) {
      return;
    }

    const sortedLists = lists
      .slice()
      .sort((leftList, rightList) => getPaginatedListItemOffset(leftList) - getPaginatedListItemOffset(rightList));
    const mergedList = createMergedListFromPaginatedFragments(sortedLists);

    if (!mergedList) {
      return;
    }

    sortedLists[0].replaceWith(mergedList);
    sortedLists.slice(1).forEach((list) => {
      list.dataset.serializationSkip = "true";
    });
  });

  Array.from(clone.querySelectorAll("p.article-paragraph-page-fragment[data-md-block-id]")).forEach((paragraph) => {
    const blockId = paragraph.dataset.mdBlockId;

    if (!blockId) {
      return;
    }

    if (!paragraphsById.has(blockId)) {
      paragraphsById.set(blockId, []);
    }

    paragraphsById.get(blockId).push(paragraph);
  });

  paragraphsById.forEach((paragraphs) => {
    if (paragraphs.length < 2) {
      return;
    }

    const sortedParagraphs = paragraphs
      .slice()
      .sort((leftParagraph, rightParagraph) => getPaginatedParagraphOffset(leftParagraph) - getPaginatedParagraphOffset(rightParagraph));
    const mergedParagraph = createMergedParagraphFromPaginatedFragments(sortedParagraphs);

    if (!mergedParagraph) {
      return;
    }

    sortedParagraphs[0].replaceWith(mergedParagraph);
    sortedParagraphs.slice(1).forEach((paragraph) => {
      paragraph.dataset.serializationSkip = "true";
    });
  });

  return clone;
}

function serializeBlockContainer(container, indent = 0) {
  if (!container) {
    return [];
  }

  const blocks = [];

  Array.from(container.childNodes).forEach((node) => {
    const serialized = serializeBlockNode(node, indent);

    if (!serialized) {
      return;
    }

    if (Array.isArray(serialized)) {
      serialized.forEach((block) => {
        if (block) {
          blocks.push(block);
        }
      });
      return;
    }

    blocks.push(serialized);
  });

  return blocks;
}

function serializeBlockNode(node, indent = 0) {
  if (!node) {
    return "";
  }

  if (node.nodeType === Node.TEXT_NODE) {
    const text = String(node.textContent || "").trim();
    return text ? indentMarkdownBlock(escapeMarkdownPlainText(text), indent) : "";
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const element = node;
  const tagName = element.tagName;
  const classList = element.classList;

  if (
    classList.contains("empty-state")
    || classList.contains("table-resize-overlay")
    || classList.contains("table-resize-handle")
    || classList.contains("page-sheet-watermark")
    || classList.contains("page-sheet-header")
    || classList.contains("page-sheet-header-text")
    || classList.contains("page-sheet-page-number")
    || element.dataset.serializationSkip === "true"
  ) {
    return "";
  }

  if (
    classList.contains("knowledge-cluster")
    || classList.contains("knowledge-cluster-header")
    || classList.contains("knowledge-cluster-body")
    || classList.contains("knowledge-group")
    || classList.contains("knowledge-group-content")
    || classList.contains("knowledge-group-content-fragment")
    || classList.contains("question-answer-box")
    || classList.contains("question-answer-box-row")
    || classList.contains("page-sheet")
    || classList.contains("page-sheet-frame")
    || classList.contains("page-sheet-body")
    || classList.contains("article-table-editor")
  ) {
    return serializeBlockContainer(element, indent);
  }

  if (/^H[1-4]$/.test(tagName)) {
    const level = clampNumber(element.dataset.mdLevel || tagName.slice(1), 1, 4, Number(tagName.slice(1)));
    const blockStyle = getBlockTextStyleFromElement(element);
    const stylePrefix = hasBlockTextStyle(blockStyle)
      ? `{{${BLOCK_TEXT_STYLE_TOKEN} ${serializeTextStyleMap(blockStyle, ["align", "indent", "spacing", "font", "size", "color"])}}}`
      : "";
    return serializeMarkdownBlockWithControl(`${"#".repeat(level)} ${stylePrefix}${serializeInlineMarkdownChildren(element).trim()}`, element, indent);
  }

  if (tagName === "P") {
    const blockStyle = getBlockTextStyleFromElement(element);
    const stylePrefix = hasBlockTextStyle(blockStyle)
      ? `{{${BLOCK_TEXT_STYLE_TOKEN} ${serializeTextStyleMap(blockStyle, ["align", "indent", "spacing", "font", "size", "color"])}}}`
      : "";
    return serializeMarkdownBlockWithControl(`${stylePrefix}${serializeInlineMarkdownChildren(element).trim()}`, element, indent);
  }

  if (tagName === "BLOCKQUOTE") {
    const inner = serializeBlockContainer(element, 0).join("\n\n").trim();

    if (!inner) {
      return serializeMarkdownBlockWithControl("> ", element, indent);
    }

    return serializeMarkdownBlockWithControl(inner
      .split("\n")
      .map((line) => `> ${line}`.trimEnd())
      .join("\n"), element, indent);
  }

  if (tagName === "UL" || tagName === "OL") {
    return serializeListMarkdown(element, indent);
  }

  if (tagName === "TABLE") {
    return serializeTableMarkdown(element, indent);
  }

  if (tagName === "HR") {
    return serializeMarkdownBlockWithControl("---", element, indent);
  }

  if (tagName === "PRE") {
    const code = element.querySelector("code");
    const language = String(element.dataset.mdLanguage || "").trim();
    const body = code ? code.textContent || "" : element.textContent || "";
    const fence = `\`\`\`${language}`.trimEnd();
    return serializeMarkdownBlockWithControl(`${fence}\n${body.replace(/\r\n?/g, "\n")}\n\`\`\``, element, indent);
  }

  if (classList.contains("math-block") || element.dataset.mdMathMode === "block") {
    const source = String(element.dataset.mdMathSource || element.textContent || "").trim();
    return source ? serializeMarkdownBlockWithControl(`$$\n${source}\n$$`, element, indent) : "";
  }

  if (tagName === "FIGURE") {
    const image = element.querySelector("img");

    if (!image) {
      return "";
    }

    const alt = escapeMarkdownPlainText(element.dataset.imageAlt || image.getAttribute("alt") || "");
    const src = safeUrl(element.dataset.imageSrc || image.getAttribute("src") || "");
    const title = String(element.dataset.imageTitle || "").trim();
    const titlePart = title ? ` "${title.replace(/"/g, '\\"')}"` : "";
    return serializeMarkdownBlockWithControl(`![${alt}](${src}${titlePart})`, element, indent);
  }

  if (classList.contains("mindmap-card")) {
    const title = serializeInlineMarkdownChildren(element.querySelector(":scope > .mindmap-root, :scope .mindmap-root")).trim();
    const lines = [`:::mindmap${title ? ` ${title}` : ""}`];
    lines.push(...serializeMindmapCardLines(element));
    lines.push(":::");
    return serializeMarkdownBlockWithControl(lines.join("\n"), element, indent);
  }

  if (classList.contains("brush-block") || classList.contains("callout-box")) {
    const isBrushBlock = classList.contains("brush-block");
    const brushKind = isBrushBlock
      ? String(element.dataset.mdBrush || ["glow", "mist", "underline", "tag", "tip"].find((kind) => classList.contains(`brush-block-${kind}`)) || "glow")
      : "";
    const blockType = isBrushBlock ? `brush-${brushKind}` : String(element.dataset.mdBlock || "note").trim() || "note";
    const titleElement = element.querySelector(isBrushBlock ? ":scope > .brush-block-title" : ":scope > .callout-title");
    const bodyElement = element.querySelector(":scope > .callout-body");
    const body = bodyElement ? serializeBlockContainer(bodyElement, 0).join("\n\n").trim() : "";
    const header = `:::${blockType}${titleElement ? ` ${serializeInlineMarkdownChildren(titleElement).trim()}` : ""}`;
    const markdown = body ? `${header}\n${body}\n:::` : `${header}\n:::`;
    return serializeMarkdownBlockWithControl(markdown, element, indent);
  }

  if (classList.contains("section-stamp")) {
    const blockType = String(element.dataset.mdBlock || "label").trim() || "label";
    return serializeMarkdownBlockWithControl(`:::${blockType} ${serializeInlineMarkdownChildren(element).trim()}`.trimEnd(), element, indent);
  }

  return serializeBlockContainer(element, indent);
}

function serializeEditableArticleToMarkdown(root) {
  if (!root || root.querySelector(".empty-state")) {
    return "";
  }

  const serializationRoot = cloneWithMergedPaginatedFragmentsForSerialization(root);

  return normalizeMarkdown(
    serializeBlockContainer(serializationRoot, 0)
      .join("\n\n")
      .replace(/\n{3,}/g, "\n\n"),
  );
}

function countTrackedBlocks(root) {
  if (!root) {
    return 0;
  }

  const trackedBlocks = root.querySelectorAll("[data-md-block-id]");
  return trackedBlocks.length || root.querySelectorAll("h1, h2, h3, h4, p, blockquote, ol, ul, table, figure, pre, hr, .math-block").length;
}

function markPreviewEditableNodes(root) {
  if (!root) {
    return;
  }

  const editableSelector = [
    "h1",
    "h2",
    "h3",
    "h4",
    "p",
    ".mindmap-root",
    ".mindmap-node",
    "figcaption",
    "th",
    "td",
  ].join(",");

  Array.from(root.querySelectorAll(editableSelector)).forEach((element) => {
    if (element.closest(".empty-state") || element.closest("[data-serialization-skip='true']")) {
      return;
    }

    element.setAttribute("contenteditable", "true");
    element.setAttribute("data-preview-editable", "true");
    element.setAttribute("spellcheck", "false");
  });

  Array.from(root.querySelectorAll(".inline-list-marker, .table-resize-overlay, .table-resize-handle, .mindmap-link-layer, .mindmap-link-layer *, .math-inline, .math-block, .katex, .katex *")).forEach((element) => {
    element.setAttribute("contenteditable", "false");
  });
}

function getEditablePreviewHost(root, target) {
  if (!root || !target) {
    return null;
  }

  const base = target.nodeType === Node.ELEMENT_NODE ? target : target.parentElement;
  return base && typeof base.closest === "function"
    ? base.closest("[data-preview-editable='true']")
    : null;
}

function isBlockStyleEditableHost(element) {
  return Boolean(element && element.tagName && /^(H[1-4]|P)$/i.test(element.tagName));
}

function isRangeInsideRoot(root, range) {
  if (!root || !range) {
    return false;
  }

  const common = range.commonAncestorContainer;
  const element = common && common.nodeType === Node.ELEMENT_NODE ? common : common && common.parentElement;
  return Boolean(element && root.contains(element));
}

function restoreSelectionRange(range) {
  if (!range) {
    return false;
  }

  const selection = window.getSelection();
  if (!selection) {
    return false;
  }

  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}

function insertNodesAtSelection(nodes) {
  const selection = window.getSelection();

  if (!selection || !selection.rangeCount) {
    return false;
  }

  const range = selection.getRangeAt(0);
  range.deleteContents();

  const fragment = document.createDocumentFragment();
  nodes.forEach((node) => {
    fragment.appendChild(node);
  });

  range.insertNode(fragment);

  const lastNode = nodes[nodes.length - 1];
  if (lastNode) {
    range.setStartAfter(lastNode);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  return true;
}

function insertPlainTextAtSelection(text) {
  const normalized = String(text || "").replace(/\r\n?/g, "\n");
  const nodes = [];

  normalized.split("\n").forEach((line, index) => {
    if (index > 0) {
      nodes.push(document.createElement("br"));
    }

    if (line) {
      nodes.push(document.createTextNode(line));
    }
  });

  if (!nodes.length) {
    nodes.push(document.createTextNode(""));
  }

  return insertNodesAtSelection(nodes);
}

function insertLineBreakAtSelection() {
  const selection = window.getSelection();

  if (!selection || !selection.rangeCount) {
    return false;
  }

  const range = selection.getRangeAt(0);
  const lineBreak = document.createElement("br");
  const cursorAnchor = document.createElement("span");
  const cursorText = document.createTextNode("\u200B");
  const fragment = document.createDocumentFragment();

  cursorAnchor.dataset.previewCaret = "true";
  cursorAnchor.appendChild(cursorText);

  range.deleteContents();
  fragment.appendChild(lineBreak);
  fragment.appendChild(cursorAnchor);
  range.insertNode(fragment);

  selection.removeAllRanges();
  const nextRange = document.createRange();
  nextRange.setStart(cursorText, 1);
  nextRange.collapse(true);
  selection.addRange(nextRange);
  return true;
}

function applyInlineStyleToPreviewSelection(root, styleKey, savedRange) {
  const style = INLINE_STYLE_OPTIONS[styleKey];

  if (!root || !style || !savedRange) {
    return false;
  }

  const range = savedRange.cloneRange();
  if (range.collapsed || !isRangeInsideRoot(root, range)) {
    return false;
  }

  const startHost = getEditablePreviewHost(root, range.startContainer);
  const endHost = getEditablePreviewHost(root, range.endContainer);

  if (!startHost || startHost !== endHost) {
    return false;
  }

  const wrapper = document.createElement(style.tagName);
  const extracted = range.extractContents();

  if (!extracted.textContent || !extracted.textContent.trim()) {
    return false;
  }

  wrapper.appendChild(extracted);
  range.insertNode(wrapper);

  const selection = window.getSelection();
  if (selection) {
    const nextRange = document.createRange();
    nextRange.selectNodeContents(wrapper);
    selection.removeAllRanges();
    selection.addRange(nextRange);
  }

  return true;
}

function applyInlineTextStyleToPreviewSelection(root, stylePatch, savedRange) {
  if (!root || !savedRange) {
    return false;
  }

  const range = savedRange.cloneRange();
  if (range.collapsed || !isRangeInsideRoot(root, range)) {
    return false;
  }

  const startHost = getEditablePreviewHost(root, range.startContainer);
  const endHost = getEditablePreviewHost(root, range.endContainer);

  if (!startHost || startHost !== endHost) {
    return false;
  }

  const existingWrapper = findSelectedInlineTextStyleAncestor(root, range);
  if (existingWrapper) {
    setInlineTextStyleOnElement(existingWrapper, stylePatch);

    const selection = window.getSelection();
    if (selection) {
      const nextRange = document.createRange();
      nextRange.selectNodeContents(existingWrapper);
      selection.removeAllRanges();
      selection.addRange(nextRange);
    }

    return true;
  }

  const extracted = range.extractContents();
  if (!extracted.textContent || !extracted.textContent.trim()) {
    return false;
  }

  const fragmentRoot = document.createElement("div");
  fragmentRoot.appendChild(extracted);
  stripInlineTextStyleDescendants(fragmentRoot);

  const wrapper = document.createElement("span");
  setInlineTextStyleOnElement(wrapper, stylePatch);
  while (fragmentRoot.firstChild) {
    wrapper.appendChild(fragmentRoot.firstChild);
  }
  range.insertNode(wrapper);

  const selection = window.getSelection();
  if (selection) {
    const nextRange = document.createRange();
    nextRange.selectNodeContents(wrapper);
    selection.removeAllRanges();
    selection.addRange(nextRange);
  }

  return true;
}

function getPreviewBlockStyleTargets(root, savedRange, fallbackHost = null) {
  if (!root) {
    return [];
  }

  const blocks = Array.from(root.querySelectorAll("[data-preview-editable='true']")).filter(isBlockStyleEditableHost);

  if (savedRange && isRangeInsideRoot(root, savedRange)) {
    const matches = blocks.filter((element) => {
      try {
        return savedRange.intersectsNode(element);
      } catch (_error) {
        return false;
      }
    });

    if (matches.length) {
      return matches;
    }
  }

  return fallbackHost && isBlockStyleEditableHost(fallbackHost) ? [fallbackHost] : [];
}

function applyBlockTextStyleToPreviewTargets(root, stylePatch, savedRange, fallbackHost = null) {
  const targets = getPreviewBlockStyleTargets(root, savedRange, fallbackHost);

  if (!targets.length) {
    return false;
  }

  targets.forEach((element) => {
    setBlockTextStyleOnElement(element, stylePatch);
  });

  return true;
}

function clearBlockTextStyleFromPreviewTargets(root, savedRange, fallbackHost = null) {
  const targets = getPreviewBlockStyleTargets(root, savedRange, fallbackHost);

  if (!targets.length) {
    return false;
  }

  targets.forEach(clearBlockTextStyleOnElement);
  return true;
}

function clearInlineTextStyleFromPreviewSelection(root, savedRange) {
  if (!root || !savedRange) {
    return false;
  }

  const range = savedRange.cloneRange();
  if (range.collapsed || !isRangeInsideRoot(root, range)) {
    return false;
  }

  const startHost = getEditablePreviewHost(root, range.startContainer);
  const endHost = getEditablePreviewHost(root, range.endContainer);

  if (!startHost || startHost !== endHost) {
    return false;
  }

  const existingWrapper = findSelectedInlineTextStyleAncestor(root, range);
  if (existingWrapper) {
    unwrapElementPreserveChildren(existingWrapper);
    return true;
  }

  const extracted = range.extractContents();
  const fragmentRoot = document.createElement("div");
  fragmentRoot.appendChild(extracted);
  stripInlineTextStyleDescendants(fragmentRoot);

  const content = document.createDocumentFragment();
  while (fragmentRoot.firstChild) {
    content.appendChild(fragmentRoot.firstChild);
  }

  range.insertNode(content);
  return true;
}

function applyBrushToPreviewSelection(root, brushStyle, savedRange) {
  if (!root || !BRUSH_LABELS[brushStyle] || !savedRange) {
    return false;
  }

  const range = savedRange.cloneRange();
  if (range.collapsed || !isRangeInsideRoot(root, range)) {
    return false;
  }

  const startHost = getEditablePreviewHost(root, range.startContainer);
  const endHost = getEditablePreviewHost(root, range.endContainer);

  if (!startHost || startHost !== endHost) {
    return false;
  }

  const wrapper = document.createElement("span");
  wrapper.className = `brush-inline brush-inline-${brushStyle}`;

  const extracted = range.extractContents();
  if (!extracted.textContent || !extracted.textContent.trim()) {
    return false;
  }

  wrapper.appendChild(extracted);
  range.insertNode(wrapper);

  const selection = window.getSelection();
  if (selection) {
    const nextRange = document.createRange();
    nextRange.selectNodeContents(wrapper);
    selection.removeAllRanges();
    selection.addRange(nextRange);
  }

  return true;
}

function extractTitle(markdown) {
  const lines = normalizeMarkdown(markdown).split("\n");
  const heading = lines.find((line) => /^#\s+/.test(line.trim()));

  if (heading) {
    return heading.trim().replace(/^#\s+/, "");
  }

  const firstLine = lines.find((line) => line.trim());
  return firstLine ? firstLine.trim().slice(0, 24) : "排版文章";
}

function sanitizeFileName(value) {
  return String(value || "排版文章")
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, "-")
    .slice(0, 50);
}

function readStylesFromDocument() {
  if (typeof document === "undefined") {
    return "";
  }

  const chunks = [];

  Array.from(document.styleSheets).forEach((sheet) => {
    try {
      Array.from(sheet.cssRules || []).forEach((rule) => {
        chunks.push(rule.cssText);
      });
    } catch (_error) {
      // Ignore inaccessible sheets.
    }
  });

  return chunks.join("\n");
}

function normalizeExportStyles(styles) {
  return String(styles || "")
    .replace(/url\((["']?)fonts\//g, "url($1vendor/katex/fonts/");
}

function getDocumentBaseHref() {
  if (typeof window === "undefined" || !window.location) {
    return "";
  }

  const href = String(window.location.href || "");
  return href ? href.replace(/[#?].*$/, "").replace(/\/[^/]*$/, "/") : "";
}

function getExportStyles() {
  if (cachedExportStyles) {
    return cachedExportStyles;
  }

  const documentStyles = readStylesFromDocument();
  if (documentStyles) {
    cachedExportStyles = normalizeExportStyles(documentStyles);
    return cachedExportStyles;
  }

  if (typeof require === "function") {
    try {
      const fs = require("fs");
      const path = require("path");
      const katexCssPath = path.join(process.cwd(), "vendor", "katex", "katex.min.css");
      const katexCss = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, "utf8") : "";
      cachedExportStyles = normalizeExportStyles(`${katexCss}\n${fs.readFileSync(path.join(process.cwd(), "styles.css"), "utf8")}`);
      return cachedExportStyles;
    } catch (_error) {
      // Ignore filesystem failures in browser-like runtimes.
    }
  }

  return EXPORT_STYLE_FALLBACK;
}

function buildExportHtml(articleHtml, title, options = {}) {
  const resolved = resolveArticleOptions(options);
  const documentTitle = typeof options.documentTitle === "string" ? options.documentTitle : title;
  const baseHref = getDocumentBaseHref();
  const customFontCss = buildCustomFontFaceCss(options.customFonts);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${baseHref ? `<base href="${escapeAttribute(baseHref)}">` : ""}
  <title>${escapeHtml(documentTitle)}</title>
  <style>${customFontCss ? `${customFontCss}\n` : ""}${getExportStyles()}</style>
</head>
<body data-theme="${escapeAttribute(resolved.theme)}">
  <main class="article-export article-canvas" data-mode="${escapeAttribute(resolved.mode)}" data-layout-preset="${escapeAttribute(resolved.layoutPreset)}" data-question-answer-layout="${escapeAttribute(resolved.questionAnswerLayout)}" style="${escapeAttribute(buildArticleStyleAttribute(resolved))}">
    ${articleHtml}
  </main>
</body>
</html>`;
}

function buildPagedExportHtml(pagesHtml, title, options = {}) {
  const resolved = getResolvedDocumentOptions(options);
  const documentTitle = typeof options.documentTitle === "string" ? options.documentTitle : title;
  const baseHref = getDocumentBaseHref();
  const customFontCss = buildCustomFontFaceCss(options.customFonts);
  const pageCss = `
    @page {
      size: ${resolved.pageWidth}mm ${resolved.pageHeight}mm;
      margin: 0;
    }

    html,
    body {
      margin: 0;
      min-height: auto;
      background: #ffffff !important;
    }

    body {
      padding: 0;
    }

    .page-preview {
      display: block !important;
      gap: 0 !important;
      min-height: auto !important;
    }

    .page-export .page-sheet {
      width: calc(var(--page-width-mm, ${resolved.pageWidth}) * 1mm) !important;
      margin: 0 auto !important;
      border: 0 !important;
      box-shadow: none !important;
      break-after: page;
      page-break-after: always;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .page-export .page-sheet:last-child {
      break-after: auto;
      page-break-after: auto;
    }

    .page-export .page-sheet::before {
      display: none !important;
    }
  `;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${baseHref ? `<base href="${escapeAttribute(baseHref)}">` : ""}
  <title>${escapeHtml(documentTitle)}</title>
  <style>${customFontCss ? `${customFontCss}\n` : ""}${getSvgSafeExportStyles()}</style>
  <style>${pageCss}</style>
</head>
<body data-theme="${escapeAttribute(resolved.theme)}">
  <main class="page-preview page-export" data-mode="${escapeAttribute(resolved.mode)}" data-layout-preset="${escapeAttribute(resolved.layoutPreset)}" data-question-answer-layout="${escapeAttribute(resolved.questionAnswerLayout)}" style="${escapeAttribute(buildPageBackgroundStyleAttribute(resolved))}">
    ${pagesHtml}
  </main>
</body>
</html>`;
}

function collectCustomProperties(style) {
  let declarations = "";

  for (let index = 0; index < style.length; index += 1) {
    const name = style[index];

    if (!name || !name.startsWith("--")) {
      continue;
    }

    const value = style.getPropertyValue(name).trim();

    if (!value) {
      continue;
    }

    declarations += `${name}:${value};`;
  }

  return declarations;
}

function waitForImage(image) {
  return new Promise((resolve) => {
    if (!image || image.complete) {
      resolve();
      return;
    }

    const done = () => {
      image.removeEventListener("load", done);
      image.removeEventListener("error", done);
      resolve();
    };

    image.addEventListener("load", done, { once: true });
    image.addEventListener("error", done, { once: true });
  });
}

async function waitForDocumentFonts(doc) {
  if (!doc || !doc.fonts || !doc.fonts.ready) {
    return;
  }

  try {
    await doc.fonts.ready;
  } catch (_error) {
    // Ignore font loading failures and use browser fallbacks.
  }
}

function readBlobAsDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Failed to read blob."));
    reader.readAsDataURL(blob);
  });
}

async function resolveImageDataUrl(image) {
  const source = String(image?.currentSrc || image?.src || "").trim();

  if (!source) {
    return "";
  }

  if (source.startsWith("data:")) {
    return source;
  }

  try {
    const response = await fetch(source);

    if (!response.ok) {
      throw new Error(`Unexpected response: ${response.status}`);
    }

    return await readBlobAsDataUrl(await response.blob());
  } catch (_error) {
    if (image?.naturalWidth && image?.naturalHeight) {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext("2d");

        if (context) {
          context.drawImage(image, 0, 0);
          return canvas.toDataURL("image/png");
        }
      } catch (_canvasError) {
        // Fall back to the original source if the browser blocks canvas access.
      }
    }
  }

  return source;
}

async function inlineImagesForPdf(sourceRoot, cloneRoot) {
  const sourceImages = Array.from(sourceRoot.querySelectorAll("img"));
  const cloneImages = Array.from(cloneRoot.querySelectorAll("img"));

  await Promise.all(sourceImages.map(async (image, index) => {
    const cloneImage = cloneImages[index];

    if (!cloneImage) {
      return;
    }

    await waitForImage(image);
    const resolvedSource = await optimizeImageDataUrlForPdf(await resolveImageDataUrl(image));

    if (resolvedSource) {
      cloneImage.setAttribute("src", resolvedSource);
    }
  }));
}

function getPdfRenderScale(width, height) {
  const baseScale = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const dimensionLimit = 32760 / Math.max(width, height, 1);
  const areaLimit = Math.sqrt(PDF_MAX_CANVAS_PIXELS / Math.max(width * height, 1));

  return Math.max(1, Math.min(baseScale, dimensionLimit, areaLimit));
}

function serializeElementToXhtml(element) {
  return new XMLSerializer().serializeToString(element);
}

function stripCssAtRule(cssText, rulePrefix) {
  const source = String(cssText || "");
  let index = 0;
  let output = "";

  while (index < source.length) {
    const next = source.indexOf(rulePrefix, index);

    if (next === -1) {
      output += source.slice(index);
      break;
    }

    output += source.slice(index, next);
    const blockStart = source.indexOf("{", next);

    if (blockStart === -1) {
      break;
    }

    let depth = 1;
    let cursor = blockStart + 1;

    while (cursor < source.length && depth > 0) {
      const char = source[cursor];

      if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
      }

      cursor += 1;
    }

    index = cursor;
  }

  return output;
}

function getSvgSafeExportStyles() {
  let styles = getExportStyles();
  styles = stripCssAtRule(styles, "@page");
  styles = stripCssAtRule(styles, "@media print");
  return styles;
}

function buildPdfSnapshotMarkup(articleMarkup, sourceCanvas) {
  const bodyStyles = window.getComputedStyle(document.body);
  const articleRect = sourceCanvas.getBoundingClientRect();
  const articleWidth = Math.max(1, Math.ceil(articleRect.width));
  const articleHeight = Math.max(1, Math.ceil(sourceCanvas.scrollHeight || articleRect.height));
  const exportPadding = Math.max(24, Math.round(articleWidth * 0.04));
  const totalWidth = articleWidth + exportPadding * 2;
  const totalHeight = articleHeight + exportPadding * 2;
  const extraStyles = `
    .pdf-export-body,
    .pdf-export-body * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      box-sizing: border-box;
    }

    .pdf-export-body {
      margin: 0;
      overflow: hidden;
    }

    .pdf-export-body .article-export {
      margin: 0 auto !important;
    }
  `;
  const backgroundDeclarations = [
    `background-color:${bodyStyles.backgroundColor}`,
    bodyStyles.backgroundImage && bodyStyles.backgroundImage !== "none" ? `background-image:${bodyStyles.backgroundImage}` : "",
    bodyStyles.backgroundRepeat ? `background-repeat:${bodyStyles.backgroundRepeat}` : "",
    bodyStyles.backgroundPosition ? `background-position:${bodyStyles.backgroundPosition}` : "",
    bodyStyles.backgroundSize ? `background-size:${bodyStyles.backgroundSize}` : "",
  ].filter(Boolean).join(";");
  const rootStyle = [
    collectCustomProperties(bodyStyles),
    `width:${totalWidth}px`,
    `min-height:${totalHeight}px`,
    `padding:${exportPadding}px`,
    `color:${bodyStyles.color}`,
    `font-family:${bodyStyles.fontFamily}`,
    backgroundDeclarations,
  ].filter(Boolean).join(";");

  return {
    totalWidth,
    totalHeight,
    markup: `<html xmlns="http://www.w3.org/1999/xhtml"><head><style><![CDATA[${getSvgSafeExportStyles()}
${extraStyles}]]></style></head><body class="pdf-export-body" style="${escapeAttribute(rootStyle)}">${articleMarkup}</body></html>`,
  };
}

function loadObjectUrlImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "sync";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Failed to load the rendered export image."));
    image.src = url;
  });
}

async function renderMarkupToCanvas(markup, width, height) {
  const scale = getPdfRenderScale(width, height);
  const canvasWidth = Math.max(1, Math.round(width * scale));
  const canvasHeight = Math.max(1, Math.round(height * scale));
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${width} ${height}">
  <foreignObject x="0" y="0" width="100%" height="100%">${markup}</foreignObject>
</svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  try {
    const image = await loadObjectUrlImage(url);
    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas rendering is unavailable in this browser.");
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }

      reject(new Error("Failed to create a downloadable file."));
    }, type, quality);
  });
}

async function sliceCanvasToJpegs(sourceCanvas) {
  const pages = [];
  const sourceWidth = sourceCanvas.width;
  const pageSliceHeight = Math.max(1, Math.floor(sourceWidth * PDF_PAGE_HEIGHT / PDF_PAGE_WIDTH));
  const pageCanvas = document.createElement("canvas");
  pageCanvas.width = sourceWidth;
  const context = pageCanvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas slicing is unavailable in this browser.");
  }

  for (let offsetY = 0; offsetY < sourceCanvas.height; offsetY += pageSliceHeight) {
    const sliceHeight = Math.min(pageSliceHeight, sourceCanvas.height - offsetY);
    pageCanvas.height = sliceHeight;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
    context.drawImage(
      sourceCanvas,
      0,
      offsetY,
      sourceWidth,
      sliceHeight,
      0,
      0,
      sourceWidth,
      sliceHeight
    );

    const jpegBlob = await canvasToBlob(pageCanvas, "image/jpeg", PDF_JPEG_QUALITY);
    pages.push({
      width: sourceWidth,
      height: sliceHeight,
      bytes: new Uint8Array(await jpegBlob.arrayBuffer()),
    });
  }

  return pages;
}

function buildPdfBlob(pages) {
  const encoder = new TextEncoder();
  const chunks = [];
  const offsets = [0];
  let cursor = 0;
  const objectCount = 2 + pages.length * 3;

  const pushBytes = (value) => {
    const bytes = value instanceof Uint8Array ? value : new Uint8Array(value);
    chunks.push(bytes);
    cursor += bytes.length;
  };

  const pushText = (value) => {
    pushBytes(encoder.encode(value));
  };

  const startObject = (number) => {
    offsets[number] = cursor;
    pushText(`${number} 0 obj\n`);
  };

  pushBytes(new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34, 0x0a, 0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a]));

  startObject(1);
  pushText("<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

  startObject(2);
  pushText(`<< /Type /Pages /Count ${pages.length} /Kids [${pages.map((_, index) => `${3 + index * 3} 0 R`).join(" ")}] >>\nendobj\n`);

  pages.forEach((page, index) => {
    const pageObject = 3 + index * 3;
    const contentObject = pageObject + 1;
    const imageObject = pageObject + 2;
    const pageHeight = Math.min(PDF_PAGE_HEIGHT, PDF_PAGE_WIDTH * (page.height / page.width));
    const pageYOffset = Math.max(0, PDF_PAGE_HEIGHT - pageHeight);
    const contentStream = encoder.encode(
      `q\n${formatPdfNumber(PDF_PAGE_WIDTH)} 0 0 ${formatPdfNumber(pageHeight)} 0 ${formatPdfNumber(pageYOffset)} cm\n/Im${index + 1} Do\nQ`
    );

    startObject(pageObject);
    pushText(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${formatPdfNumber(PDF_PAGE_WIDTH)} ${formatPdfNumber(PDF_PAGE_HEIGHT)}] /Resources << /ProcSet [/PDF /ImageC] /XObject << /Im${index + 1} ${imageObject} 0 R >> >> /Contents ${contentObject} 0 R >>\nendobj\n`
    );

    startObject(contentObject);
    pushText(`<< /Length ${contentStream.length} >>\nstream\n`);
    pushBytes(contentStream);
    pushText("\nendstream\nendobj\n");

    startObject(imageObject);
    pushText(
      `<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.bytes.length} >>\nstream\n`
    );
    pushBytes(page.bytes);
    pushText("\nendstream\nendobj\n");
  });

  const xrefOffset = cursor;
  pushText(`xref\n0 ${objectCount + 1}\n`);
  pushText("0000000000 65535 f \n");

  for (let objectNumber = 1; objectNumber <= objectCount; objectNumber += 1) {
    pushText(`${String(offsets[objectNumber] || 0).padStart(10, "0")} 00000 n \n`);
  }

  pushText(`trailer\n<< /Size ${objectCount + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);

  return new Blob(chunks, { type: "application/pdf" });
}

function downloadBlob(fileName, blob) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}

async function buildExportDocumentHtml(sourceCanvas, options) {
  const resolved = getResolvedDocumentOptions(options);
  const title = String(options && options.title ? options.title : "");
  const paginated = buildPaginatedPreview(sourceCanvas, resolved, title);

  await waitForDocumentFonts(document);
  await inlineImagesForPdf(sourceCanvas, paginated.element);
  await mountSvgMindmapsForDetachedRoot(paginated.element);

  return buildPagedExportHtml(paginated.element.innerHTML, title, {
    documentTitle: title,
    customFonts: options.customFonts,
    ...resolved,
  });
}

function getPageExportCanvasScale(page) {
  const rect = page.getBoundingClientRect();
  const width = Math.max(1, Math.ceil(rect.width || page.scrollWidth || 1));
  const height = Math.max(1, Math.ceil(rect.height || page.scrollHeight || 1));
  const dimensionLimit = 32760 / Math.max(width, height, 1);
  const areaLimit = Math.sqrt(PDF_MAX_CANVAS_PIXELS / Math.max(width * height, 1));

  return Math.max(1, Math.min(PNG_EXPORT_SCALE, window.devicePixelRatio || 1, dimensionLimit, areaLimit));
}

async function preparePngExportPreview(sourceCanvas, options) {
  const resolved = getResolvedDocumentOptions(options);
  const title = String(options && options.title ? options.title : "");
  const paginated = buildPaginatedPreview(sourceCanvas, resolved, title);
  const host = document.createElement("div");

  host.setAttribute("aria-hidden", "true");
  host.style.position = "absolute";
  host.style.left = "-20000px";
  host.style.top = "0";
  host.style.width = `${paginated.metrics.pageWidthPx}px`;
  host.style.margin = "0";
  host.style.padding = "0";
  host.style.zIndex = "-1";
  host.style.pointerEvents = "none";
  host.style.overflow = "visible";

  paginated.element.classList.add("page-export");
  host.appendChild(paginated.element);
  document.body.appendChild(host);

  try {
    await waitForDocumentFonts(document);
    await inlineImagesForPdf(sourceCanvas, paginated.element);
    mountSvgMindmaps(paginated.element);
    await waitForNextPaint();

    return {
      element: paginated.element,
      pages: Array.from(paginated.element.querySelectorAll(".page-sheet")),
      cleanup() {
        host.remove();
      },
    };
  } catch (error) {
    host.remove();
    throw error;
  }
}

async function renderPageToPngBlob(page) {
  const html2canvasLib = typeof window !== "undefined" ? window.html2canvas : null;

  if (typeof html2canvasLib !== "function") {
    throw new Error("PNG export library is unavailable.");
  }

  const rect = page.getBoundingClientRect();
  const width = Math.max(1, Math.ceil(rect.width || page.scrollWidth || 1));
  const height = Math.max(1, Math.ceil(rect.height || page.scrollHeight || 1));
  const canvas = await html2canvasLib(page, {
    backgroundColor: null,
    scale: getPageExportCanvasScale(page),
    useCORS: true,
    logging: false,
    imageTimeout: 0,
    removeContainer: true,
    foreignObjectRendering: false,
    width,
    height,
    scrollX: 0,
    scrollY: 0,
    windowWidth: width,
    windowHeight: height,
  });

  if (!canvas.width || !canvas.height) {
    throw new Error("The export result is empty.");
  }

  return canvasToBlob(canvas, "image/png");
}

async function buildPngPageBlobs(sourceCanvas, options) {
  const preview = await preparePngExportPreview(sourceCanvas, options);

  try {
    const pages = preview.pages.length ? preview.pages : [preview.element];
    const blobs = [];

    for (const page of pages) {
      blobs.push(await renderPageToPngBlob(page));
    }

    return blobs;
  } finally {
    preview.cleanup();
  }
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || typeof window.requestAnimationFrame !== "function") {
      resolve();
      return;
    }

    window.requestAnimationFrame(() => resolve());
  });
}

function shouldPreserveWordWidth(element) {
  const tagName = element && element.tagName ? element.tagName.toUpperCase() : "";
  return tagName === "IMG"
    || tagName === "TABLE"
    || tagName === "COL"
    || tagName === "COLGROUP"
    || tagName === "TD"
    || tagName === "TH";
}

function shouldSkipWordComputedProperty(name, element) {
  return !name
    || name.startsWith("--")
    || name.startsWith("animation")
    || name.startsWith("transition")
    || name.startsWith("grid")
    || name.startsWith("flex")
    || name.startsWith("place-")
    || name.startsWith("align-")
    || name.startsWith("justify-")
    || name === "gap"
    || name === "row-gap"
    || name === "column-gap"
    || name === "order"
    || name === "aspect-ratio"
    || name === "contain"
    || name === "content-visibility"
    || name === "caret-color"
    || name === "cursor"
    || name === "height"
    || name === "min-height"
    || name === "max-height"
    || name === "block-size"
    || name === "min-block-size"
    || name === "max-block-size"
    || (
      (name === "width"
        || name === "min-width"
        || name === "max-width"
        || name === "inline-size"
        || name === "min-inline-size"
        || name === "max-inline-size")
      && !shouldPreserveWordWidth(element)
    );
}

function serializeComputedStyleForWord(style, element) {
  if (!style) {
    return "";
  }

  let declarations = "";

  for (let index = 0; index < style.length; index += 1) {
    const name = style[index];

    if (shouldSkipWordComputedProperty(name, element)) {
      continue;
    }

    const value = style.getPropertyValue(name);

    if (!value) {
      continue;
    }

    declarations += `${name}:${value};`;
  }

  return declarations;
}

function cloneNodeWithWordStyles(node) {
  if (!node) {
    return null;
  }

  if (node.nodeType === Node.TEXT_NODE) {
    return node.cloneNode(true);
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const element = node;
  const clone = element.cloneNode(false);

  clone.removeAttribute("contenteditable");
  clone.removeAttribute("spellcheck");
  clone.removeAttribute("tabindex");
  clone.setAttribute("style", serializeComputedStyleForWord(window.getComputedStyle(element), element));

  Array.from(element.childNodes).forEach((child) => {
    const childClone = cloneNodeWithWordStyles(child);

    if (childClone) {
      clone.appendChild(childClone);
    }
  });

  return clone;
}

function moveChildNodes(source, target) {
  if (!source || !target) {
    return;
  }

  while (source.firstChild) {
    target.appendChild(source.firstChild);
  }
}

function flattenWordListItemLine(line) {
  if (!line) {
    return;
  }

  const marker = line.querySelector(":scope > .inline-list-marker");
  const text = line.querySelector(":scope > .list-item-text");

  line.innerHTML = "";
  line.style.display = "block";
  line.style.margin = "0";
  line.style.padding = "0";
  line.style.border = "0";
  line.style.background = "transparent";
  line.style.boxShadow = "none";
  line.style.minHeight = "0";
  line.style.height = "auto";

  if (marker) {
    const markerSpan = document.createElement("span");
    markerSpan.textContent = marker.textContent || "";
    markerSpan.style.display = "inline";
    markerSpan.style.fontWeight = "700";
    markerSpan.style.marginRight = "0.35em";
    markerSpan.style.whiteSpace = "nowrap";
    line.appendChild(markerSpan);
  }

  if (text) {
    const textSpan = document.createElement("span");
    textSpan.style.display = "inline";
    moveChildNodes(text, textSpan);
    line.appendChild(textSpan);
  }
}

function compactWordListLayout(article) {
  if (!article) {
    return;
  }

  Array.from(article.querySelectorAll(".ordered-list, .bullet-list")).forEach((list) => {
    list.style.display = "block";
    list.style.margin = "0.12em 0 0";
    list.style.padding = "0";
    list.style.gap = "0";
    list.style.listStyle = "none";
  });

  Array.from(article.querySelectorAll(".ordered-list > li, .bullet-list > li")).forEach((item) => {
    item.style.display = "block";
    item.style.margin = "0";
    item.style.padding = "0.14em 0";
    item.style.border = "0";
    item.style.borderTop = "0";
    item.style.borderRight = "0";
    item.style.borderBottom = "0";
    item.style.borderLeft = "0";
    item.style.borderRadius = "0";
    item.style.background = "transparent";
    item.style.boxShadow = "none";
    item.style.minHeight = "0";
    item.style.height = "auto";
  });

  Array.from(article.querySelectorAll(".list-item-copy")).forEach((copy) => {
    copy.style.display = "block";
    copy.style.margin = "0";
    copy.style.padding = "0";
  });

  Array.from(article.querySelectorAll(".list-item-line, .list-item-line-bullet, .list-item-line-ordered")).forEach(flattenWordListItemLine);
}

function compactWordQuestionLayout(article) {
  if (!article) {
    return;
  }

  const cards = Array.from(article.querySelectorAll(".question-card"));

  cards.forEach((card, index) => {
    card.style.display = "block";
    card.style.margin = index === 0 ? "0" : "0.75em 0 0";
    card.style.padding = "0";
    card.style.border = "0";
    card.style.borderRadius = "0";
    card.style.background = "transparent";
    card.style.boxShadow = "none";
  });

  Array.from(article.querySelectorAll(".question-panel, .question-panel-body, .question-panel-body-stem, .question-panel-body-detail, .question-detail-section, .question-answer-box, .question-answer-box-row")).forEach((section) => {
    section.style.display = "block";
    section.style.gap = "0";
    section.style.margin = "0";
    section.style.padding = "0";
    section.style.border = "0";
    section.style.borderRadius = "0";
    section.style.background = "transparent";
    section.style.boxShadow = "none";
    section.style.minHeight = "0";
    section.style.height = "auto";
  });

  Array.from(article.querySelectorAll(".question-panel-detail")).forEach((detail) => {
    detail.style.marginTop = "8px";
    detail.style.paddingTop = "8px";
    detail.style.borderTop = "1px solid rgba(17, 19, 21, 0.12)";
  });

  Array.from(article.querySelectorAll(".question-card-title")).forEach((title) => {
    title.style.margin = "0 0 8px";
    title.style.padding = "0 0 6px";
  });

  Array.from(article.querySelectorAll(".question-role")).forEach((block) => {
    block.style.display = "block";
    block.style.margin = "0 0 4px";
    block.style.padding = "0";
    block.style.border = "0";
    block.style.borderRadius = "0";
    block.style.background = "transparent";
    block.style.boxShadow = "none";
    block.style.minHeight = "0";
    block.style.height = "auto";
  });

  Array.from(article.querySelectorAll(".question-role .content-kicker")).forEach((label) => {
    label.style.display = "inline";
    label.style.minWidth = "0";
    label.style.width = "auto";
    label.style.minHeight = "0";
    label.style.height = "auto";
    label.style.marginRight = "0.28em";
    label.style.padding = "0";
    label.style.border = "0";
    label.style.background = "transparent";
    label.style.boxShadow = "none";
  });

  Array.from(article.querySelectorAll(".question-answer-box")).forEach((box) => {
    box.style.margin = "0.45em 0 0.65em";
    box.style.padding = "8px 10px";
    box.style.border = "1px solid rgba(17, 19, 21, 0.12)";
    box.style.background = "rgba(246, 248, 245, 0.75)";
  });

  Array.from(article.querySelectorAll(".question-answer-box-row + .question-answer-box-row")).forEach((row) => {
    row.style.marginTop = "6px";
  });

  Array.from(article.querySelectorAll(".question-answer-box-label")).forEach((label) => {
    label.style.display = "block";
    label.style.margin = "0 0 2px";
    label.style.fontWeight = "700";
  });

  Array.from(article.querySelectorAll(".question-answer-box .question-role .content-kicker")).forEach((label) => {
    label.style.display = "none";
  });
}

function compactWordExportArticle(article, options = {}) {
  if (!article) {
    return article;
  }

  const resolved = resolveArticleOptions(options);

  Array.from(article.querySelectorAll("*")).forEach((element) => {
    const tagName = element.tagName ? element.tagName.toUpperCase() : "";

    if (!["TABLE", "THEAD", "TBODY", "TFOOT", "TR", "TD", "TH", "COLGROUP", "COL", "IMG"].includes(tagName)) {
      element.style.minHeight = "0";
      element.style.height = "auto";
      element.style.maxHeight = "none";
    }
  });

  compactWordListLayout(article);

  if (resolved.mode === "question") {
    compactWordQuestionLayout(article);
  }

  return article;
}

function createWordExportStage() {
  const stage = document.createElement("div");
  stage.setAttribute("aria-hidden", "true");
  stage.style.position = "absolute";
  stage.style.left = "-100000px";
  stage.style.top = "0";
  stage.style.opacity = "0";
  stage.style.pointerEvents = "none";
  stage.style.zIndex = "-1";
  stage.style.background = "#ffffff";
  stage.style.overflow = "visible";
  document.body.appendChild(stage);
  return stage;
}

function finalizeWordExportPreview(root, options = {}) {
  if (!root) {
    return root;
  }

  const metrics = getPageMetrics(options);

  Array.from(root.querySelectorAll(".page-sheet-watermark")).forEach((watermark) => {
    watermark.remove();
  });

  root.style.display = "block";
  root.style.gap = "0";
  root.style.minHeight = "auto";
  root.style.margin = "0";
  root.style.padding = "0";

  const pages = Array.from(root.querySelectorAll(".page-sheet"));

  pages.forEach((page, index) => {
    const isLastPage = index === pages.length - 1;

    page.style.display = "block";
    page.style.marginLeft = "auto";
    page.style.marginRight = "auto";
    page.style.boxShadow = "none";
    page.style.breakInside = "avoid";
    page.style.pageBreakInside = "avoid";
    page.style.breakAfter = isLastPage ? "auto" : "page";
    page.style.pageBreakAfter = isLastPage ? "auto" : "always";
    page.style.width = `${metrics.pageWidth}mm`;
    page.style.minHeight = `${metrics.pageHeight}mm`;
    page.style.paddingTop = `${metrics.pageMarginTop}mm`;
    page.style.paddingRight = `${metrics.pageMarginRight}mm`;
    page.style.paddingBottom = `${metrics.pageMarginBottom}mm`;
    page.style.paddingLeft = `${metrics.pageMarginLeft}mm`;
    page.style.boxSizing = "border-box";

    const frame = page.querySelector(":scope > .page-sheet-frame");
    const header = page.querySelector(":scope > .page-sheet-frame > .page-sheet-header");
    const body = page.querySelector(":scope > .page-sheet-frame > .page-sheet-body");
    const article = page.querySelector(":scope > .page-sheet-frame > .page-sheet-body > .page-sheet-article");

    if (frame) {
      frame.style.display = "block";
      frame.style.minHeight = `${metrics.pageHeight - metrics.pageMarginTop - metrics.pageMarginBottom}mm`;
    }

    if (header) {
      header.style.display = "block";
      header.style.minHeight = `${metrics.headerHeightMm}mm`;
      header.style.marginBottom = `${metrics.headerGapMm}mm`;
    }

    if (body) {
      body.style.display = "block";
      body.style.minHeight = `${metrics.contentHeightMm}mm`;
    }

    if (article) {
      article.style.width = `${metrics.contentWidthMm}mm`;
      article.style.maxWidth = `${metrics.contentWidthMm}mm`;
      article.style.marginLeft = "0";
      article.style.marginRight = "0";
    }
  });

  return root;
}

function buildWordPageMarkup(root, options = {}) {
  if (!root) {
    return "";
  }

  const resolved = getResolvedDocumentOptions(options);
  const metrics = getPageMetrics(resolved);
  const innerPageHeightMm = metrics.pageHeight - metrics.pageMarginTop - metrics.pageMarginBottom;
  const pages = Array.from(root.querySelectorAll(".page-sheet"));

  return pages.map((page, index) => {
    const isLastPage = index === pages.length - 1;
    const headerText = page.querySelector(":scope > .page-sheet-frame > .page-sheet-header > .page-sheet-header-text");
    const pageNumber = page.querySelector(":scope > .page-sheet-frame > .page-sheet-header > .page-sheet-page-number");
    const article = page.querySelector(":scope > .page-sheet-frame > .page-sheet-body > .page-sheet-article");

    if (article) {
      compactWordExportArticle(article, resolved);
      article.style.width = "100%";
      article.style.maxWidth = "100%";
      article.style.margin = "0";
      article.style.padding = "0";
      article.style.border = "0";
      article.style.boxShadow = "none";
    }

    const pageWrapperStyle = [
      "width:100%",
      "margin:0",
      isLastPage ? "page-break-after:auto" : "page-break-after:always",
      isLastPage ? "break-after:auto" : "break-after:page",
    ].join(";");
    const pageTableStyle = [
      "width:100%",
      `height:${innerPageHeightMm}mm`,
      "table-layout:fixed",
      "border-collapse:collapse",
      "border-spacing:0",
      "mso-table-lspace:0pt",
      "mso-table-rspace:0pt",
    ].join(";");
    const pageSurfaceStyle = [
      "vertical-align:top",
      "box-sizing:border-box",
      page.style.backgroundColor ? `background-color:${page.style.backgroundColor}` : "background-color:#fffefb",
      page.style.backgroundImage && page.style.backgroundImage !== "none" ? `background-image:${page.style.backgroundImage}` : "",
      page.style.backgroundRepeat ? `background-repeat:${page.style.backgroundRepeat}` : "",
      page.style.backgroundPosition ? `background-position:${page.style.backgroundPosition}` : "",
      page.style.backgroundSize ? `background-size:${page.style.backgroundSize}` : "",
    ].filter(Boolean).join(";");
    const frameTableStyle = [
      "width:100%",
      `height:${innerPageHeightMm}mm`,
      "table-layout:fixed",
      "border-collapse:collapse",
      "border-spacing:0",
      "mso-table-lspace:0pt",
      "mso-table-rspace:0pt",
    ].join(";");
    const headerMarkup = resolved.pageHeaderEnabled && headerText
      ? `<tr><td style="padding:0;vertical-align:bottom;height:${metrics.headerHeightMm}mm;">
          <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;">
            <tr>
              <td style="padding:0;vertical-align:bottom;">${headerText.outerHTML}</td>
              <td style="padding:0;vertical-align:bottom;text-align:right;width:12mm;">${pageNumber ? pageNumber.outerHTML : ""}</td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:0;height:${metrics.headerGapMm}mm;line-height:0;font-size:0;">&nbsp;</td></tr>`
      : "";

    return `<div class="word-page" style="${escapeAttribute(pageWrapperStyle)}">
      <table role="presentation" cellspacing="0" cellpadding="0" style="${escapeAttribute(pageTableStyle)}">
        <tr>
          <td style="${escapeAttribute(pageSurfaceStyle)}">
            <table role="presentation" cellspacing="0" cellpadding="0" style="${escapeAttribute(frameTableStyle)}">
              ${headerMarkup}
              <tr>
                <td style="padding:0;vertical-align:top;height:${metrics.contentHeightMm}mm;">${article ? article.outerHTML : ""}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>`;
  }).join("");
}

function buildWordHtml(previewMarkup, title, options = {}) {
  const resolved = getResolvedDocumentOptions(options);
  const metrics = getPageMetrics(resolved);
  const customFontCss = buildCustomFontFaceCss(options.customFonts);
  const innerPageHeightMm = metrics.pageHeight - metrics.pageMarginTop - metrics.pageMarginBottom;
  const pageCss = `
    @page WordSection1 {
      size: ${resolved.pageWidth}mm ${resolved.pageHeight}mm;
      margin: ${metrics.pageMarginTop}mm ${metrics.pageMarginRight}mm ${metrics.pageMarginBottom}mm ${metrics.pageMarginLeft}mm;
      mso-header-margin: 0mm;
      mso-footer-margin: 0mm;
    }

    body {
      margin: 0;
      background: #ffffff;
    }

    div.WordSection1 {
      page: WordSection1;
      width: 100%;
      margin: 0;
    }

    .word-page {
      width: 100%;
      margin: 0;
    }

    .word-page:not(:last-child) {
      break-after: page;
      page-break-after: always;
    }

    table {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    .word-page > table {
      height: ${innerPageHeightMm}mm;
    }
  `;

  return `\uFEFF<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="ProgId" content="Word.Document">
  <meta name="Generator" content="Layout For XHS">
  <meta name="Originator" content="Layout For XHS">
  <title>${escapeHtml(title)}</title>
  <!--[if gte mso 9]><xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
  </o:OfficeDocumentSettings>
  <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>100</w:Zoom>
    <w:DoNotOptimizeForBrowser/>
  </w:WordDocument>
  </xml><![endif]-->
  <style>${customFontCss ? `${customFontCss}\n` : ""}${pageCss}</style>
</head>
<body>
  <div class="WordSection1">${previewMarkup}</div>
</body>
</html>`;
}

async function buildWordDocumentHtml(sourceCanvas, options = {}) {
  const resolved = getResolvedDocumentOptions(options);
  const title = String(options && options.title ? options.title : "");
  const paginated = buildPaginatedPreview(sourceCanvas, resolved, title);
  const stage = createWordExportStage();

  try {
    paginated.element.style.visibility = "visible";
    stage.appendChild(paginated.element);

    await waitForNextFrame();
    await waitForDocumentFonts(document);
    await inlineImagesForPdf(sourceCanvas, paginated.element);
    mountSvgMindmaps(paginated.element);

    const clonedPreview = finalizeWordExportPreview(cloneNodeWithWordStyles(paginated.element), resolved);
    const editableMarkup = buildWordPageMarkup(clonedPreview, resolved);

    return buildWordHtml(editableMarkup, title, {
      ...resolved,
      customFonts: options.customFonts,
    });
  } finally {
    stage.remove();
  }
}

function getDispositionFileName(headerValue) {
  const value = String(headerValue || "");
  const utf8Match = value.match(/filename\*=UTF-8''([^;]+)/i);

  if (utf8Match) {
    try {
      return decodeURIComponent(utf8Match[1]);
    } catch (_error) {
      return utf8Match[1];
    }
  }

  const quotedMatch = value.match(/filename="([^"]+)"/i);

  if (quotedMatch) {
    return quotedMatch[1];
  }

  return "";
}

async function requestNativePdfExport(html, fileName) {
  const response = await fetch(PDF_EXPORT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      html,
      fileName,
    }),
  });

  if (!response.ok) {
    let message = `PDF export failed with status ${response.status}.`;

    try {
      const payload = await response.json();

      if (payload && payload.error) {
        message = payload.error;
      }
    } catch (_error) {
      // Ignore non-JSON error bodies.
    }

    throw new Error(message);
  }

  return {
    blob: await response.blob(),
    fileName: getDispositionFileName(response.headers.get("content-disposition")) || fileName,
  };
}

async function requestStudyNotesGeneration({ subject, topic, sourceText }) {
  const response = await fetch(STUDY_NOTES_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sourceText,
      subject,
      topic,
    }),
  });

  let payload = null;

  try {
    payload = await response.json();
  } catch (_error) {
    // Ignore non-JSON error bodies.
  }

  if (!response.ok) {
    throw new Error(payload && payload.error ? payload.error : `生成失败，状态码 ${response.status}。`);
  }

  const markdown = normalizeMarkdown(normalizeRedundantHtmlBreaksOutsideFences(payload && payload.markdown));

  if (!markdown) {
    throw new Error("大模型没有返回可用的 Markdown。");
  }

  return markdown;
}

function getPdfRuntime() {
  const html2canvasLib = typeof window !== "undefined" ? window.html2canvas : null;
  const jsPdfCtor = typeof window !== "undefined" && window.jspdf ? window.jspdf.jsPDF : null;

  if (typeof html2canvasLib !== "function" || typeof jsPdfCtor !== "function") {
    throw new Error("PDF export libraries are unavailable.");
  }

  return {
    html2canvas: html2canvasLib,
    jsPDF: jsPdfCtor,
  };
}

function copyBackgroundStyles(target, sourceStyles) {
  target.style.backgroundColor = sourceStyles.backgroundColor;
  target.style.backgroundImage = sourceStyles.backgroundImage;
  target.style.backgroundRepeat = sourceStyles.backgroundRepeat;
  target.style.backgroundPosition = sourceStyles.backgroundPosition;
  target.style.backgroundSize = sourceStyles.backgroundSize;
}

function waitForNextPaint() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}

async function createPdfCaptureSurface(sourceCanvas, options) {
  const bodyStyles = window.getComputedStyle(document.body);
  const articleWidth = Math.max(1, Math.ceil(sourceCanvas.getBoundingClientRect().width));
  const resolved = resolveArticleOptions(options);
  const surfaceRoot = document.createElement("div");
  const contentWrap = document.createElement("div");
  const article = sourceCanvas.cloneNode(true);

  await inlineImagesForPdf(sourceCanvas, article);

  surfaceRoot.className = "pdf-capture-root";
  surfaceRoot.setAttribute("aria-hidden", "true");
  surfaceRoot.style.position = "absolute";
  surfaceRoot.style.left = "-20000px";
  surfaceRoot.style.top = "0";
  surfaceRoot.style.width = `${articleWidth + PDF_CAPTURE_PADDING * 2}px`;
  surfaceRoot.style.padding = `${PDF_CAPTURE_PADDING}px`;
  surfaceRoot.style.margin = "0";
  surfaceRoot.style.zIndex = "-1";
  surfaceRoot.style.pointerEvents = "none";
  surfaceRoot.style.overflow = "visible";
  copyBackgroundStyles(surfaceRoot, bodyStyles);

  contentWrap.className = "pdf-capture-content";
  contentWrap.style.width = `${articleWidth}px`;
  contentWrap.style.margin = "0 auto";
  contentWrap.style.padding = "0";
  contentWrap.style.overflow = "visible";
  contentWrap.style.background = "transparent";
  contentWrap.style.border = "0";
  contentWrap.style.boxShadow = "none";
  contentWrap.style.backdropFilter = "none";

  article.removeAttribute("id");
  article.classList.add("article-export");
  article.dataset.mode = resolved.mode;
  applyArticleStyleProperties(article, resolved, articleWidth);

  contentWrap.appendChild(article);
  surfaceRoot.appendChild(contentWrap);
  document.body.appendChild(surfaceRoot);

  await waitForDocumentFonts(document);
  await Promise.all(Array.from(surfaceRoot.querySelectorAll("img")).map(waitForImage));
  await waitForNextPaint();
  mountSvgMindmaps(article);
  await waitForNextPaint();

  return {
    element: surfaceRoot,
    cleanup() {
      surfaceRoot.remove();
    },
  };
}

async function renderCaptureSurfaceToCanvas(surfaceElement) {
  const { html2canvas } = getPdfRuntime();
  const captureWidth = Math.max(1, Math.ceil(surfaceElement.scrollWidth || surfaceElement.getBoundingClientRect().width));
  const captureHeight = Math.max(1, Math.ceil(surfaceElement.scrollHeight || surfaceElement.getBoundingClientRect().height));
  const scale = getPdfRenderScale(captureWidth, captureHeight);

  return html2canvas(surfaceElement, {
    backgroundColor: null,
    scale,
    useCORS: true,
    logging: false,
    imageTimeout: 0,
    removeContainer: true,
    foreignObjectRendering: false,
    width: captureWidth,
    height: captureHeight,
    scrollX: 0,
    scrollY: 0,
    windowWidth: captureWidth,
    windowHeight: captureHeight,
  });
}

function buildPdfWithJsPdf(sourceCanvas) {
  const { jsPDF } = getPdfRuntime();
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
    compress: true,
  });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const sourceWidth = sourceCanvas.width;
  const pageSliceHeight = Math.max(1, Math.floor(sourceWidth * pageHeight / pageWidth));
  const pageCanvas = document.createElement("canvas");
  const context = pageCanvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas PDF rendering is unavailable in this browser.");
  }

  pageCanvas.width = sourceWidth;

  for (let offsetY = 0, pageIndex = 0; offsetY < sourceCanvas.height; offsetY += pageSliceHeight, pageIndex += 1) {
    const sliceHeight = Math.min(pageSliceHeight, sourceCanvas.height - offsetY);
    const renderHeight = pageWidth * (sliceHeight / sourceWidth);

    pageCanvas.height = sliceHeight;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
    context.drawImage(
      sourceCanvas,
      0,
      offsetY,
      sourceWidth,
      sliceHeight,
      0,
      0,
      sourceWidth,
      sliceHeight
    );

    if (pageIndex > 0) {
      pdf.addPage();
    }

    pdf.addImage(
      pageCanvas.toDataURL("image/jpeg", PDF_JPEG_QUALITY),
      "JPEG",
      0,
      0,
      pageWidth,
      renderHeight,
      undefined,
      "FAST"
    );
  }

  return pdf.output("blob");
}

async function exportCanvasToPdf(sourceCanvas, options) {
  const captureSurface = await createPdfCaptureSurface(sourceCanvas, options);

  try {
    const renderedCanvas = await renderCaptureSurfaceToCanvas(captureSurface.element);

    if (!renderedCanvas.width || !renderedCanvas.height) {
      throw new Error("The export result is empty.");
    }

    return buildPdfWithJsPdf(renderedCanvas);
  } finally {
    captureSurface.cleanup();
  }
}

function openPrintPreview(html) {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      reject(new Error("Print preview is unavailable in this environment."));
      return;
    }

    const iframe = document.createElement("iframe");
    let settled = false;

    iframe.setAttribute("aria-hidden", "true");
    iframe.tabIndex = -1;
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.style.opacity = "0";
    iframe.style.pointerEvents = "none";
    iframe.style.border = "0";

    const finalize = (callback) => {
      if (settled) {
        return;
      }

      settled = true;
      window.setTimeout(() => {
        iframe.remove();
      }, 1500);
      callback();
    };

    iframe.addEventListener("load", async () => {
      try {
        const frameWindow = iframe.contentWindow;
        const frameDocument = iframe.contentDocument;

        if (!frameWindow || !frameDocument) {
          throw new Error("Print preview frame is unavailable.");
        }

        await waitForDocumentFonts(frameDocument);
        await Promise.all(Array.from(frameDocument.images || []).map(waitForImage));

        const handleAfterPrint = () => {
          frameWindow.removeEventListener("afterprint", handleAfterPrint);
          finalize(resolve);
        };

        frameWindow.addEventListener("afterprint", handleAfterPrint);
        frameWindow.focus();

        window.setTimeout(() => {
          try {
            frameWindow.print();
          } catch (error) {
            finalize(() => reject(error));
          }
        }, 80);

        window.setTimeout(() => {
          frameWindow.removeEventListener("afterprint", handleAfterPrint);
          finalize(resolve);
        }, 1200);
      } catch (error) {
        finalize(() => reject(error));
      }
    }, { once: true });

    iframe.srcdoc = html;
    document.body.appendChild(iframe);
  });
}

function bindPdfExportButton(button, textarea, canvas, state, exportState, flashStatus) {
  if (!button) {
    return;
  }

  button.addEventListener("click", async () => {
    if (exportState.busy) {
      return;
    }

    exportState.busy = true;
    button.disabled = true;
    flashStatus("正在导出 PDF...");

    try {
      const title = extractTitle(textarea.value);
      const fileName = `${sanitizeFileName(title)}.pdf`;
      const html = await buildExportDocumentHtml(canvas, {
        title,
        ...getArticleExportOptions(state),
      });
      const result = await requestNativePdfExport(html, fileName);

      downloadBlob(result.fileName || fileName, result.blob);
      flashStatus("PDF 已导出");
    } catch (error) {
      console.error(error);
      const message = error && error.message ? error.message : "";
      const needsServerHint = /fetch|network|failed|127\.0\.0\.1|ECONNREFUSED|ERR_CONNECTION_REFUSED/i.test(message);
      flashStatus(needsServerHint ? "请先运行 npm start，再导出 PDF" : "PDF 导出失败，请重试");
    } finally {
      exportState.busy = false;
      button.disabled = false;
    }
  });
}

function bindWordExportButton(button, textarea, sourceCanvas, buildOptions, exportState, flashStatus) {
  if (!button) {
    return;
  }

  button.addEventListener("click", async () => {
    if (exportState.busy) {
      return;
    }

    exportState.busy = true;
    button.disabled = true;
    flashStatus("正在导出 Word...");

    try {
      const title = extractTitle(textarea.value);
      const options = typeof buildOptions === "function" ? buildOptions(title) : { title };
      const wordHtml = await buildWordDocumentHtml(sourceCanvas, options);
      downloadFile(`${sanitizeFileName(title)}.doc`, wordHtml, "application/msword;charset=utf-8");
      flashStatus("Word 已导出");
    } catch (error) {
      console.error(error);
      flashStatus("Word 导出失败，请重试");
    } finally {
      exportState.busy = false;
      button.disabled = false;
    }
  });
}

function decorateLeadingLabel(element, rules) {
  if (!element || !element.innerHTML || element.querySelector(".content-kicker")) {
    return false;
  }

  const source = element.innerHTML.trim();

  for (const rule of rules) {
    const regex = new RegExp(`^(${rule.labels.join("|")})([:：]\\s*)`);

    if (regex.test(source)) {
      element.innerHTML = source.replace(regex, `<span class="content-kicker">$1$2</span>`);
      element.classList.add(...rule.classNames);
      return true;
    }
  }

  return false;
}

function createKnowledgeGroup(subtitle = null) {
  const group = document.createElement("section");
  group.className = "knowledge-group";

  if (subtitle) {
    subtitle.classList.add("knowledge-subtitle");
    group.classList.add("knowledge-group-topic");
    group.appendChild(subtitle);
  } else {
    group.classList.add("knowledge-group-root");
  }

  const content = document.createElement("div");
  content.className = "knowledge-group-content";
  group.appendChild(content);

  return { group, content };
}

function classifyKnowledgeBlock(block) {
  if (!block || !block.tagName) {
    return "knowledge-block-flow";
  }

  if (block.classList && block.classList.contains("section-stamp")) {
    return "knowledge-block-emphasis";
  }

  if (block.tagName === "TABLE") {
    return "knowledge-block-table";
  }

  if (["UL", "OL"].includes(block.tagName)) {
    return "knowledge-block-list";
  }

  if (block.tagName === "BLOCKQUOTE") {
    return "knowledge-block-emphasis";
  }

  if (["FIGURE", "PRE"].includes(block.tagName) || block.classList.contains("math-block")) {
    return "knowledge-block-feature";
  }

  if (block.tagName === "SECTION") {
    if (block.classList.contains("mindmap-card")) {
      return "knowledge-block-feature";
    }

    if (block.classList.contains("callout-box") || block.classList.contains("brush-block")) {
      return "knowledge-block-emphasis";
    }
  }

  return "knowledge-block-flow";
}

function enhanceKnowledgeMode(root) {
  const children = Array.from(root.children);
  const fragment = document.createDocumentFragment();
  let index = 0;

  while (index < children.length) {
    const element = children[index];

    if (element.tagName !== "H2") {
      fragment.appendChild(element);
      index += 1;
      continue;
    }

    const cluster = document.createElement("section");
    cluster.className = "knowledge-cluster";
    const header = document.createElement("div");
    header.className = "knowledge-cluster-header";
    element.classList.add("knowledge-cluster-title");
    header.appendChild(element);
    cluster.appendChild(header);

    const blocks = [];
    index += 1;

    while (index < children.length && !["H1", "H2"].includes(children[index].tagName)) {
      blocks.push(children[index]);
      index += 1;
    }

    const body = document.createElement("div");
    body.className = "knowledge-cluster-body";
    let currentGroup = createKnowledgeGroup();

    const commitGroup = () => {
      if (currentGroup.content.childElementCount) {
        body.appendChild(currentGroup.group);
      }
    };

    blocks.forEach((block) => {
      if (block.tagName === "H3") {
        commitGroup();
        currentGroup = createKnowledgeGroup(block);
        return;
      }

      if (block.tagName === "HR") {
        commitGroup();
        block.classList.add("knowledge-divider");
        body.appendChild(block);
        currentGroup = createKnowledgeGroup();
        return;
      }

      decorateLeadingLabel(block, [
        { labels: ["一句话", "结论", "核心", "重点", "定义", "特点", "公式", "步骤", "对比", "关键词", "注意", "例子"], classNames: ["fact-row"] },
      ]);

      block.classList.add("knowledge-block", classifyKnowledgeBlock(block));
      currentGroup.content.appendChild(block);
    });

    commitGroup();

    if (body.children.length) {
      body.classList.toggle("knowledge-cluster-body-single", body.children.length === 1);
      cluster.appendChild(body);
    }

    fragment.appendChild(cluster);
  }

  root.innerHTML = "";
  root.appendChild(fragment);
}

function getQuestionRoleKind(element) {
  if (!element || !element.classList) {
    return null;
  }

  if (element.classList.contains("question-role-stem")) {
    return "stem";
  }

  if (element.classList.contains("question-role-answer")) {
    return "answer";
  }

  if (element.classList.contains("question-role-analysis")) {
    return "analysis";
  }

  if (element.classList.contains("question-role-tip")) {
    return "tip";
  }

  if (element.classList.contains("question-role-trap")) {
    return "trap";
  }

  if (element.classList.contains("question-role-summary")) {
    return "summary";
  }

  if (element.classList.contains("question-role-other")) {
    return "other";
  }

  return null;
}

const QUESTION_ROLE_LABELS = [
  "题干",
  "问题",
  "答案",
  "结论",
  "解析",
  "思路",
  "技巧",
  "方法",
  "提示",
  "易错",
  "陷阱",
  "总结",
  "复盘",
  "其他",
  "补充",
];

const QUESTION_ROLE_LINE_REGEX = new RegExp(`^(${QUESTION_ROLE_LABELS.join("|")})([:：\\s])`);
const QUESTION_ANSWER_LAYOUT_SEPARATED = "separated";
const QUESTION_TYPE_HEADING_REGEX = /^(?:[一二三四五六七八九十]+[、.．]\s*)?(?:单选题|单项选择题|多选题|多项选择题|不定项选择题|判断题|填空题|简答题|问答题|计算题|计算分析题|综合题|案例分析题|材料题|名词解释|辨析题|选择题|客观题|主观题|真题|练习题|模拟题)(?:[\s（(：:：、].*)?$/;
const QUESTION_ANSWER_BANK_HEADING_REGEX = /^(?:参考答案|答案解析|答案与解析|答案及解析|答案|解析)(?:[\s：:、].*)?$/;
const QUESTION_ANSWER_BANK_BLOCK_REGEX = /^(?:参考答案|答案解析|答案与解析|答案及解析|答案|解析)$/;
const QUESTION_NUMBER_PREFIX_REGEX = /^(?:第\s*)?([0-9０-９一二三四五六七八九十百]+)\s*(?:题|[、.．)）:：])/;

function extractPlainTextFromHtml(html) {
  const probe = document.createElement("div");
  probe.innerHTML = String(html || "");
  return (probe.textContent || "").replace(/\u00a0/g, " ").trim();
}

function splitQuestionParagraphs(root) {
  Array.from(root.querySelectorAll("p, li > .list-item-copy > p")).forEach((paragraph) => {
    const listText = paragraph.querySelector(":scope > .list-item-text");
    const listMarker = paragraph.querySelector(":scope > .inline-list-marker");
    const source = String((listText || paragraph).innerHTML || "");

    if (!/<br\s*\/?>/i.test(source)) {
      return;
    }

    const lines = source
      .split(/<br\s*\/?>/i)
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length < 2) {
      return;
    }

    const shouldSplit = lines.some((line) => QUESTION_ROLE_LINE_REGEX.test(extractPlainTextFromHtml(line)));

    if (!shouldSplit) {
      return;
    }

    const fragment = document.createDocumentFragment();

    lines.forEach((line) => {
      const nextParagraph = paragraph.cloneNode(false);

      if (listText) {
        if (!fragment.childElementCount && listMarker) {
          nextParagraph.appendChild(listMarker.cloneNode(true));
          const nextText = document.createElement("span");
          nextText.className = "list-item-text";
          nextText.innerHTML = line;
          nextParagraph.appendChild(nextText);
        } else {
          nextParagraph.classList.remove("list-item-line", "list-item-line-ordered", "list-item-line-bullet");
          nextParagraph.innerHTML = line;
        }
      } else {
        nextParagraph.innerHTML = line;
      }

      fragment.appendChild(nextParagraph);
    });

    paragraph.replaceWith(fragment);
  });
}

function createQuestionDetailSection(kind = "other") {
  const section = document.createElement("section");
  section.className = `question-detail-section question-detail-${kind}`;
  return section;
}

function getQuestionLayoutPreset(root) {
  return String(root?.dataset?.layoutPreset || "");
}

function getQuestionAnswerLayout(root) {
  return sanitizeChoice(
    root?.dataset?.questionAnswerLayout,
    QUESTION_ANSWER_LAYOUTS,
    DEFAULT_QUESTION_ANSWER_LAYOUT,
  );
}

function getQuestionTitleText(card, fallbackIndex) {
  const title = card?.querySelector?.(":scope .question-card-title");
  const text = (title?.textContent || "").replace(/\s+/g, " ").trim();
  return text || `第 ${fallbackIndex + 1} 题`;
}

function createGeneratedQuestionLabel(className, text) {
  const label = document.createElement("div");
  label.className = className;
  label.dataset.serializationSkip = "true";
  label.textContent = text;
  return label;
}

function createPlainQuestionBodyLabel(className, text) {
  const label = document.createElement("p");
  label.className = className;
  label.dataset.serializationSkip = "true";
  label.textContent = text;
  return label;
}

function normalizeQuestionHeadingText(element) {
  return (element?.textContent || "")
    .replace(/\s+/g, " ")
    .trim();
}

function isQuestionAnswerBankText(text) {
  return QUESTION_ANSWER_BANK_HEADING_REGEX.test(String(text || "").replace(/\s+/g, " ").trim());
}

function isQuestionAnswerBankHeading(element) {
  return Boolean(
    element
    && ["H2", "H3"].includes(element.tagName)
    && isQuestionAnswerBankText(normalizeQuestionHeadingText(element)),
  );
}

function isQuestionAnswerBankBlock(element) {
  if (!element || !element.tagName) {
    return false;
  }

  if (isQuestionAnswerBankHeading(element)) {
    return true;
  }

  return element.tagName === "P" && QUESTION_ANSWER_BANK_BLOCK_REGEX.test(normalizeQuestionHeadingText(element));
}

function isQuestionTypeHeading(element) {
  if (!element || element.tagName !== "H2" || isQuestionAnswerBankHeading(element)) {
    return false;
  }

  return QUESTION_TYPE_HEADING_REGEX.test(normalizeQuestionHeadingText(element));
}

function hasQuestionTypeHeadings(root) {
  return Array.from(root.querySelectorAll(":scope > h2")).some(isQuestionTypeHeading);
}

function isQuestionDetailKind(kind) {
  return Boolean(kind && kind !== "stem");
}

const QUESTION_DETAIL_KIND_LABELS = Object.freeze({
  answer: "答案",
  analysis: "解析",
  tip: "提示",
  trap: "易错",
  summary: "总结",
  other: "补充",
});

function isQuestionAnswerBoxKind(kind) {
  return isQuestionDetailKind(kind);
}

function getQuestionNumberFromText(text) {
  const normalized = String(text || "")
    .replace(/[０-９]/g, (char) => String(char.charCodeAt(0) - 65248))
    .replace(/\s+/g, " ")
    .trim();
  const match = normalized.match(QUESTION_NUMBER_PREFIX_REGEX);
  return match ? match[1] : "";
}

function normalizeQuestionBodyNumberText(value) {
  const normalized = String(value || "").replace(/[０-９]/g, (char) => String(char.charCodeAt(0) - 65248));

  if (/^\d+$/.test(normalized)) {
    return normalized;
  }

  const digits = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  };

  if (normalized === "十") {
    return "10";
  }

  if (/^十[一二三四五六七八九]$/.test(normalized)) {
    return String(10 + digits[normalized.slice(1)]);
  }

  if (/^[一二三四五六七八九]十$/.test(normalized)) {
    return String(digits[normalized[0]] * 10);
  }

  if (/^[一二三四五六七八九]十[一二三四五六七八九]$/.test(normalized)) {
    return String(digits[normalized[0]] * 10 + digits[normalized.slice(2)]);
  }

  return normalized;
}

function normalizeQuestionBodyNumberedBlock(block) {
  if (!block || !block.innerHTML || block.querySelector?.(":scope > .content-kicker")) {
    return;
  }

  const source = String(block.innerHTML || "");
  const match = source.match(/^(?:第\s*)?([0-9０-９一二三四五六七八九十]+)\s*(?:题|[、.．)）:：])(?:\s|&nbsp;)*/i);

  if (!match) {
    return;
  }

  block.innerHTML = source.replace(match[0], `${normalizeQuestionBodyNumberText(match[1])}.`);
}

function isQuestionNumberedBlock(element) {
  if (!element || !element.textContent) {
    return false;
  }

  return Boolean(getQuestionNumberFromText(element.textContent));
}

function formatQuestionAnswerItemLabel(index) {
  return `第${index}题`;
}

function hasQuestionDetailContent(detailPanel) {
  return Boolean(
    detailPanel
    && detailPanel.querySelector("p, li, table, blockquote, pre, figure, .math-block, .question-detail-section"),
  );
}

function buildQuestionCard(title, blocks) {
  const card = document.createElement("section");
  card.className = "question-card";

  const stemPanel = document.createElement("section");
  stemPanel.className = "question-panel question-panel-stem";

  const stemBody = document.createElement("div");
  stemBody.className = "question-panel-body question-panel-body-stem";

  if (title) {
    title.classList.add("question-card-title");
    stemPanel.appendChild(title);
  }

  stemPanel.appendChild(stemBody);

  const detailPanel = document.createElement("section");
  detailPanel.className = "question-panel question-panel-detail question-followup-box";

  const detailBody = document.createElement("div");
  detailBody.className = "question-panel-body question-panel-body-detail";
  detailPanel.appendChild(detailBody);

  let currentDetailSection = null;
  let enteredDetail = false;

  const startDetailSection = (kind) => {
    currentDetailSection = createQuestionDetailSection(kind);
    detailBody.appendChild(currentDetailSection);
    enteredDetail = true;
    return currentDetailSection;
  };

  blocks.forEach((block) => {
    const roleKind = getQuestionRoleKind(block);

    if (roleKind && roleKind !== "stem") {
      startDetailSection(roleKind).appendChild(block);
      return;
    }

    if (!enteredDetail) {
      stemBody.appendChild(block);
      return;
    }

    if (!currentDetailSection) {
      startDetailSection(roleKind || "other");
    }

    currentDetailSection.appendChild(block);
  });

  if (title || stemBody.childElementCount) {
    card.appendChild(stemPanel);
  }

  if (detailBody.childElementCount) {
    card.appendChild(detailPanel);
  }

  return card;
}

function moveQuestionDetailsToAnswerBank(root) {
  const cards = Array.from(root.querySelectorAll(":scope > .question-card"));
  const answerItems = [];

  cards.forEach((card, index) => {
    const detailPanel = card.querySelector(":scope > .question-panel-detail");

    if (!hasQuestionDetailContent(detailPanel)) {
      return;
    }

    const item = document.createElement("section");
    const title = createGeneratedQuestionLabel("question-answer-item-title", getQuestionTitleText(card, index));

    item.className = "question-answer-item";
    item.dataset.questionIndex = String(index + 1);
    detailPanel.classList.add("question-answer-item-detail");
    item.appendChild(title);
    item.appendChild(detailPanel);
    answerItems.push(item);
  });

  if (!answerItems.length) {
    return;
  }

  const title = createGeneratedQuestionLabel("question-answer-bank-title", "答案解析");
  root.appendChild(title);
  answerItems.forEach((item) => root.appendChild(item));
}

function createQuestionAnswerBankTitle() {
  const title = document.createElement("p");
  title.className = "question-answer-bank-title question-answer-bank-title-plain";
  title.dataset.serializationSkip = "true";
  title.textContent = "答案解析";
  return title;
}

function getQuestionAnswerEntryText(block, fallbackIndex) {
  const source = block?.textContent || "";
  const number = getQuestionNumberFromText(source) || String(fallbackIndex + 1);
  return formatQuestionAnswerItemLabel(number);
}

function getQuestionListItemEntryText(item, fallbackIndex) {
  const markerText = (item?.querySelector?.(":scope .inline-list-marker")?.textContent || "")
    .replace(/\s+/g, "")
    .trim();
  const number = markerText || getQuestionNumberFromText(item?.textContent || "") || String(fallbackIndex + 1);
  return formatQuestionAnswerItemLabel(number);
}

function createQuestionAnswerEntryTitle(block, index) {
  return createPlainQuestionBodyLabel(
    "question-answer-item-title question-answer-item-title-plain",
    getQuestionAnswerEntryText(block, index),
  );
}

function createQuestionListAnswerEntryTitle(item, index) {
  return createPlainQuestionBodyLabel(
    "question-answer-item-title question-answer-item-title-plain",
    getQuestionListItemEntryText(item, index),
  );
}

function hasQuestionDetailRole(element) {
  return isQuestionDetailKind(getQuestionRoleKind(element));
}

function getQuestionRoleLabelText(block, fallback) {
  const kicker = block?.querySelector?.(":scope > .content-kicker");
  const source = (kicker?.textContent || fallback || "").replace(/\s+/g, " ").trim();
  return source.replace(/[：:\s]+$/g, "") || fallback || "";
}

function createQuestionAnswerBox() {
  const box = document.createElement("section");
  box.className = "question-answer-box question-followup-box";
  return box;
}

function appendToQuestionAnswerBox(container, block, kind) {
  if (!container || !block) {
    return;
  }

  const row = document.createElement("section");
  const labelText = getQuestionRoleLabelText(block, QUESTION_DETAIL_KIND_LABELS[kind] || "补充");
  const label = document.createElement("div");

  row.className = `question-answer-box-row question-answer-box-row-${kind}`;
  label.className = "question-answer-box-label content-kicker";
  label.dataset.serializationSkip = "true";
  label.dataset.mdLabel = labelText;
  label.textContent = `【${labelText}】`;
  row.appendChild(label);
  row.appendChild(normalizeQuestionPlainRoleBlock(block));
  container.appendChild(row);
}

function wrapSequentialQuestionAnswerBlocks(container) {
  if (!container || !container.children) {
    return;
  }

  let currentBox = null;

  Array.from(container.children).forEach((child) => {
    if (!child || child.parentElement !== container) {
      return;
    }

    const roleKind = getQuestionRoleKind(child);

    if (!isQuestionAnswerBoxKind(roleKind)) {
      currentBox = null;
      return;
    }

    if (!currentBox) {
      currentBox = createQuestionAnswerBox();
      container.insertBefore(currentBox, child);
    }

    appendToQuestionAnswerBox(currentBox, child, roleKind);
  });
}

function wrapQuestionAnswerBlocks(root) {
  if (!root || !root.querySelectorAll) {
    return;
  }

  if (!root.classList.contains("question-body-layout")) {
    return;
  }

  wrapSequentialQuestionAnswerBlocks(root);
  Array.from(root.querySelectorAll("li, .list-item-copy, .list-item-body, .question-answer-item, .question-panel-body-detail")).forEach((container) => {
    wrapSequentialQuestionAnswerBlocks(container);
  });
}

function normalizeQuestionPlainRoleBlock(block) {
  if (!block || !block.classList) {
    return block;
  }

  block.classList.remove("list-item-line", "list-item-line-ordered", "list-item-line-bullet");
  Array.from(block.querySelectorAll(":scope > .inline-list-marker")).forEach((marker) => marker.remove());

  const textWrapper = block.querySelector(":scope > .list-item-text");
  if (textWrapper) {
    while (textWrapper.firstChild) {
      block.insertBefore(textWrapper.firstChild, textWrapper);
    }
    textWrapper.remove();
  }

  return block;
}

function cleanupEmptyQuestionListContainers(container) {
  if (!container || !container.querySelectorAll) {
    return;
  }

  Array.from(container.querySelectorAll(".list-item-copy, .list-item-body")).forEach((element) => {
    const hasVisibleText = (element.textContent || "").replace(/\s+/g, "").trim();
    const hasMeaningfulElement = Array.from(element.children || []).some((child) => (
      child.textContent.replace(/\s+/g, "").trim()
      || ["IMG", "TABLE", "PRE", "FIGURE"].includes(child.tagName)
      || child.querySelector?.("img, table, pre, figure")
    ));

    if (!hasVisibleText && !hasMeaningfulElement) {
      element.remove();
    }
  });
}

function collectQuestionListAnswerItems(list, answerItems) {
  if (!list || !["OL", "UL"].includes(list.tagName || "")) {
    return 0;
  }

  let questionCount = 0;

  Array.from(list.children).forEach((item, index) => {
    if (!item || item.tagName !== "LI") {
      return;
    }

    questionCount += 1;
    const detailBlocks = Array.from(item.querySelectorAll(".question-role")).filter(hasQuestionDetailRole);

    if (!detailBlocks.length) {
      return;
    }

    const answerItem = document.createElement("section");
    answerItem.className = "question-answer-item question-answer-item-plain";
    answerItem.dataset.questionIndex = String(index + 1);
    answerItem.appendChild(createQuestionListAnswerEntryTitle(item, index));

    detailBlocks.forEach((detailBlock) => {
      answerItem.appendChild(normalizeQuestionPlainRoleBlock(detailBlock));
    });

    cleanupEmptyQuestionListContainers(item);
    answerItems.push(answerItem);
  });

  return questionCount;
}

function normalizeQuestionInlineRoleBlocks(root) {
  if (!root || !root.querySelectorAll) {
    return;
  }

  Array.from(root.querySelectorAll(".question-role")).forEach((block) => {
    const roleKind = getQuestionRoleKind(block);

    if (isQuestionAnswerBoxKind(roleKind)) {
      return;
    }

    if (isQuestionDetailKind(roleKind)) {
      normalizeQuestionPlainRoleBlock(block);
    }
  });
}

function normalizeQuestionBodyHeadings(root) {
  if (!root || !root.querySelectorAll) {
    return;
  }

  Array.from(root.querySelectorAll(":scope > h3, :scope > h4")).forEach((heading) => {
    if (!isQuestionNumberedBlock(heading)) {
      return;
    }

    const paragraph = document.createElement("p");
    paragraph.className = "question-body-title";
    paragraph.innerHTML = heading.innerHTML;
    paragraph.dataset.mdBlock = "paragraph";
    heading.replaceWith(paragraph);
  });

  Array.from(root.querySelectorAll(":scope > p, :scope > .question-body-title")).forEach((block) => {
    if (isQuestionNumberedBlock(block)) {
      block.classList.add("question-body-title");
      normalizeQuestionBodyNumberedBlock(block);
    }
  });
}

function moveQuestionBlockDetailsToAnswerBank(root) {
  const blocks = Array.from(root.children);
  const answerItems = [];
  let currentItem = null;
  let currentDetailItem = null;
  let itemIndex = 0;
  let collectingExistingAnswerBank = false;

  blocks.forEach((block) => {
    if (!block || !block.tagName || block.parentElement !== root) {
      return;
    }

    if (isQuestionAnswerBankBlock(block)) {
      collectingExistingAnswerBank = true;
      block.remove();
      return;
    }

    if (isQuestionTypeHeading(block)) {
      collectingExistingAnswerBank = false;
      currentItem = null;
      currentDetailItem = null;
      return;
    }

    if (collectingExistingAnswerBank) {
      const item = document.createElement("section");
      item.className = "question-answer-item question-answer-item-plain";
      item.appendChild(block);
      answerItems.push(item);
      return;
    }

    if (["OL", "UL"].includes(block.tagName)) {
      itemIndex += collectQuestionListAnswerItems(block, answerItems);
      currentDetailItem = null;
      return;
    }

    if (isQuestionNumberedBlock(block)) {
      itemIndex += 1;
      currentItem = {
        index: itemIndex,
        sourceBlock: block,
      };
      currentDetailItem = null;
    }

    const roleKind = getQuestionRoleKind(block);

    if (!isQuestionDetailKind(roleKind)) {
      return;
    }

    if (!currentItem) {
      itemIndex += 1;
      currentItem = {
        index: itemIndex,
        sourceBlock: block,
      };
    }

    if (!currentDetailItem) {
      currentDetailItem = document.createElement("section");
      currentDetailItem.className = "question-answer-item question-answer-item-plain";
      currentDetailItem.dataset.questionIndex = String(currentItem.index);
      currentDetailItem.appendChild(createQuestionAnswerEntryTitle(currentItem.sourceBlock, currentItem.index - 1));
      answerItems.push(currentDetailItem);
    }

    currentDetailItem.appendChild(normalizeQuestionPlainRoleBlock(block));
  });

  if (!answerItems.length) {
    return;
  }

  root.appendChild(createQuestionAnswerBankTitle());
  answerItems.forEach((item) => root.appendChild(item));
}

function applyQuestionLayoutPreset(root) {
  const answerLayout = getQuestionAnswerLayout(root);

  if (answerLayout === QUESTION_ANSWER_LAYOUT_SEPARATED) {
    if (hasQuestionTypeHeadings(root)) {
      moveQuestionBlockDetailsToAnswerBank(root);
      wrapQuestionAnswerBlocks(root);
      return;
    }

    moveQuestionDetailsToAnswerBank(root);
    wrapQuestionAnswerBlocks(root);
    return;
  }

  wrapQuestionAnswerBlocks(root);
}

function hasQuestionRoleContent(elements) {
  return elements.some((element) => {
    if (!element || !element.classList) {
      return false;
    }

    return Boolean(getQuestionRoleKind(element) || element.querySelector?.(".question-role"));
  });
}

function groupQuestionCards(root) {
  const children = Array.from(root.children);

  if (!children.length) {
    return;
  }

  if (hasQuestionTypeHeadings(root)) {
    return;
  }

  const fragment = document.createDocumentFragment();
  const hasQuestionTitle = children.some((element) => element.tagName === "H2");

  if (!hasQuestionTitle) {
    const leadBlock = children[0]?.tagName === "H1" ? children[0] : null;
    const questionBlocks = leadBlock ? children.slice(1) : children;

    if (!hasQuestionRoleContent(questionBlocks)) {
      return;
    }

    if (leadBlock) {
      fragment.appendChild(leadBlock);
    }

    fragment.appendChild(buildQuestionCard(null, questionBlocks));
    root.replaceChildren(fragment);
    return;
  }

  let index = 0;

  while (index < children.length) {
    const element = children[index];

    if (element.tagName !== "H2") {
      fragment.appendChild(element);
      index += 1;
      continue;
    }

    const blocks = [];
    index += 1;

    while (index < children.length && !["H1", "H2"].includes(children[index].tagName)) {
      blocks.push(children[index]);
      index += 1;
    }

    if (hasQuestionRoleContent(blocks)) {
      fragment.appendChild(buildQuestionCard(element, blocks));
    } else {
      fragment.appendChild(element);
      blocks.forEach((block) => fragment.appendChild(block));
    }
  }

  root.replaceChildren(fragment);
}

function enhanceQuestionMode(root) {
  splitQuestionParagraphs(root);
  const useQuestionBodyLayout = hasQuestionTypeHeadings(root);
  root.classList.toggle("question-body-layout", useQuestionBodyLayout);

  if (useQuestionBodyLayout) {
    normalizeQuestionBodyHeadings(root);
  }

  root.querySelectorAll("p, li > .list-item-copy > p").forEach((paragraph) => {
    decorateLeadingLabel(paragraph, [
      { labels: ["题干", "问题"], classNames: ["question-role", "question-role-stem"] },
      { labels: ["答案", "结论"], classNames: ["question-role", "question-role-answer"] },
      { labels: ["解析", "思路"], classNames: ["question-role", "question-role-analysis"] },
      { labels: ["技巧", "方法", "提示"], classNames: ["question-role", "question-role-tip"] },
      { labels: ["易错", "陷阱"], classNames: ["question-role", "question-role-trap"] },
      { labels: ["总结", "复盘"], classNames: ["question-role", "question-role-summary"] },
      { labels: ["其他", "补充"], classNames: ["question-role", "question-role-other"] },
    ]);
  });

  if (useQuestionBodyLayout) {
    normalizeQuestionInlineRoleBlocks(root);
  }

  groupQuestionCards(root);
  applyQuestionLayoutPreset(root);
}

function enhanceArticleMode(root) {
  const firstParagraph = Array.from(root.children).find((element) => element.tagName === "P");
  if (firstParagraph) {
    firstParagraph.classList.add("lead-paragraph");
  }

  root.querySelectorAll("blockquote").forEach((blockquote) => {
    blockquote.classList.add("article-pullquote");
  });

  root.querySelectorAll(":scope > p").forEach((paragraph) => {
    decorateLeadingLabel(paragraph, [
      { labels: ["导语", "背景", "观点", "案例", "结论"], classNames: ["article-insight"] },
    ]);
  });
}

function enhanceRenderedArticle(root, mode) {
  if (!root) {
    return;
  }

  if (mode === "knowledge") {
    enhanceKnowledgeMode(root);
    return;
  }

  if (mode === "question") {
    enhanceQuestionMode(root);
    return;
  }

  enhanceArticleMode(root);
}

function downloadFile(fileName, content, mimeType) {
  downloadBlob(fileName, new Blob([content], { type: mimeType }));
}

function expandSelectionToLineBounds(text, start, end) {
  const lineStart = text.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
  const nextBreak = text.indexOf("\n", end);
  const lineEnd = nextBreak === -1 ? text.length : nextBreak;

  return [lineStart, lineEnd];
}

function replaceSelection(textarea, start, end, replacement) {
  const value = textarea.value;
  textarea.value = `${value.slice(0, start)}${replacement}${value.slice(end)}`;
  textarea.focus();
  textarea.setSelectionRange(start, start + replacement.length);
}

function insertManualPageBreakAtTextarea(textarea) {
  if (!textarea) {
    return false;
  }

  const value = String(textarea.value || "");
  const start = clampNumber(textarea.selectionStart, 0, value.length, value.length);
  const before = value.slice(0, start);
  const after = value.slice(start);
  const prefix = before.length === 0
    ? ""
    : before.endsWith("\n\n")
      ? ""
      : before.endsWith("\n")
        ? "\n"
        : "\n\n";
  const suffix = after.length === 0
    ? "\n"
    : after.startsWith("\n\n")
      ? ""
      : after.startsWith("\n")
        ? "\n"
        : "\n\n";
  const marker = `${prefix}---${suffix}`;

  replaceSelection(textarea, start, start, marker);
  return true;
}

function applyInlineStyleToTextarea(textarea, styleKey) {
  const style = INLINE_STYLE_OPTIONS[styleKey];

  if (!textarea || !style) {
    return false;
  }

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  if (start === end) {
    return false;
  }

  const selection = textarea.value.slice(start, end);
  if (!selection.trim()) {
    return false;
  }

  replaceSelection(textarea, start, end, `${style.wrapper}${selection}${style.wrapper}`);
  return true;
}

function applyInlineTextStyleToTextarea(textarea, stylePatch) {
  if (!textarea) {
    return false;
  }

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  if (start === end) {
    return false;
  }

  const selection = textarea.value.slice(start, end);
  if (!selection.trim()) {
    return false;
  }

  const style = sanitizeInlineTextStyle(stylePatch);
  const styleText = serializeTextStyleMap(style, ["color", "font", "size"]);

  if (!styleText) {
    return false;
  }

  replaceSelection(textarea, start, end, `{{${INLINE_TEXT_STYLE_TOKEN} ${styleText}:${selection}}}`);
  return true;
}

function applyBrushToTextarea(textarea, brushStyle) {
  if (!textarea || !BRUSH_LABELS[brushStyle]) {
    return false;
  }

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;

  if (start === end) {
    return false;
  }

  const selection = value.slice(start, end);

  if (!selection.trim()) {
    return false;
  }

  if (!selection.includes("\n")) {
    replaceSelection(textarea, start, end, `{{brush-${brushStyle}:${selection}}}`);
    return true;
  }

  const [lineStart, lineEnd] = expandSelectionToLineBounds(value, start, end);
  const blockSelection = value.slice(lineStart, lineEnd).replace(/^\n+|\n+$/g, "");
  replaceSelection(textarea, lineStart, lineEnd, `:::brush-${brushStyle}\n${blockSelection}\n:::`);
  return true;
}

function stripFormulaDelimiters(source) {
  let text = String(source || "").trim();

  if ((text.startsWith("$$") && text.endsWith("$$")) || (text.startsWith("\\[") && text.endsWith("\\]"))) {
    text = text.slice(2, -2).trim();
  } else if (text.startsWith("\\(") && text.endsWith("\\)")) {
    text = text.slice(2, -2).trim();
  } else if (text.startsWith("$") && text.endsWith("$")) {
    text = text.slice(1, -1).trim();
  }

  return text;
}

function buildFormulaMarkdown(source, mode) {
  const normalizedMode = ["inline", "block", "chem"].includes(mode) ? mode : "inline";
  let latex = stripFormulaDelimiters(source);

  if (!latex) {
    latex = normalizedMode === "chem" ? "H2O" : "x^2 + y^2 = z^2";
  }

  if (normalizedMode === "chem" && !/^\\ce\s*\{[\s\S]*\}$/.test(latex)) {
    latex = `\\ce{${latex}}`;
  }

  return normalizedMode === "block" ? `$$\n${latex}\n$$` : `$${latex}$`;
}

function unwrapChemFormulaSource(source) {
  const latex = stripFormulaDelimiters(source);
  const match = latex.match(/^\\ce\s*\{([\s\S]*)\}$/);
  return match ? match[1].trim() : latex;
}

function getFormulaEditorModeForMathElement(element) {
  if (!element) {
    return "inline";
  }

  if (element.dataset.mdMathMode === "block" || element.classList.contains("math-block")) {
    return "block";
  }

  if (element.dataset.mdMathVariant === "chem" || element.classList.contains("chem-inline")) {
    return "chem";
  }

  return "inline";
}

function getPreviewMathElement(root, target) {
  if (!root || !target) {
    return null;
  }

  const element = target.nodeType === Node.ELEMENT_NODE ? target : target.parentElement;
  const mathElement = element && typeof element.closest === "function"
    ? element.closest(".math-inline, .math-block, [data-md-math-mode]")
    : null;

  return mathElement && root.contains(mathElement) ? mathElement : null;
}

function updatePreviewMathElement(element, latex, mode, rawInput = "") {
  if (!element) {
    return false;
  }

  const normalizedLatex = stripFormulaDelimiters(latex);
  if (!normalizedLatex) {
    return false;
  }

  const normalizedMode = ["inline", "block", "chem"].includes(mode)
    ? mode
    : getFormulaEditorModeForMathElement(element);
  const isBlock = normalizedMode === "block";
  const variant = normalizedMode === "chem" || inferMathVariant(normalizedLatex) === "chem" ? "chem" : "math";

  element.dataset.mdMathSource = normalizedLatex;
  element.dataset.mdMathMode = isBlock ? "block" : "inline";
  element.dataset.mdMathVariant = variant;

  if (normalizedMode === "chem") {
    element.dataset.mdChemSource = unwrapChemFormulaSource(rawInput || normalizedLatex);
  } else {
    delete element.dataset.mdChemSource;
  }

  element.classList.toggle("math-inline", !isBlock);
  element.classList.toggle("math-block", isBlock);
  element.classList.toggle("chem-inline", !isBlock && variant === "chem");
  element.classList.toggle("chem-block", isBlock && variant === "chem");
  element.innerHTML = renderMathContent(normalizedLatex, isBlock);
  return true;
}

function ensureFormulaEditorDialog() {
  let dialog = document.getElementById("formulaEditorDialog");

  if (dialog) {
    return dialog;
  }

  dialog = document.createElement("div");
  dialog.id = "formulaEditorDialog";
  dialog.className = "formula-editor-backdrop";
  dialog.hidden = true;
  dialog.innerHTML = `
    <section class="formula-editor-panel" role="dialog" aria-modal="true" aria-labelledby="formulaEditorTitle">
      <div class="formula-editor-head">
        <h2 id="formulaEditorTitle">LaTeX Formula</h2>
        <button type="button" class="formula-editor-close" data-formula-close aria-label="Close">×</button>
      </div>
      <div class="formula-editor-modes" role="group" aria-label="Formula mode">
        <label><input type="radio" name="formulaEditorMode" value="inline" checked> Inline</label>
        <label><input type="radio" name="formulaEditorMode" value="block"> Block</label>
        <label><input type="radio" name="formulaEditorMode" value="chem"> Chem</label>
      </div>
      <textarea class="formula-editor-input" spellcheck="false" rows="5"></textarea>
      <div class="formula-editor-examples" aria-label="Formula templates"></div>
      <div class="formula-editor-preview" aria-live="polite"></div>
      <div class="formula-editor-actions">
        <button type="button" class="formula-editor-secondary" data-formula-close>Cancel</button>
        <button type="button" class="formula-editor-primary" data-formula-insert>Insert</button>
      </div>
    </section>
  `;

  const examples = dialog.querySelector(".formula-editor-examples");
  FORMULA_EDITOR_EXAMPLES.forEach((example) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = example.label;
    button.dataset.formulaExample = example.value;
    examples.appendChild(button);
  });

  document.body.appendChild(dialog);
  return dialog;
}

function openFormulaEditor(options = {}) {
  const textarea = options.textarea;

  if (!textarea && typeof options.onApply !== "function") {
    return;
  }

  const dialog = ensureFormulaEditorDialog();
  const panel = dialog.querySelector(".formula-editor-panel");
  const title = dialog.querySelector("#formulaEditorTitle");
  const input = dialog.querySelector(".formula-editor-input");
  const preview = dialog.querySelector(".formula-editor-preview");
  const actionButton = dialog.querySelector("[data-formula-insert]");
  const modeInputs = Array.from(dialog.querySelectorAll("input[name='formulaEditorMode']"));
  const start = textarea ? textarea.selectionStart || 0 : 0;
  const end = textarea ? textarea.selectionEnd || start : start;
  const selectedText = textarea ? textarea.value.slice(start, end).trim() : "";
  const initialMode = ["inline", "block", "chem"].includes(options.mode) ? options.mode : "inline";
  const initialSource = options.source != null ? String(options.source) : selectedText;
  const initialChemSource = options.chemSource != null ? String(options.chemSource) : "";
  const isEditingExisting = typeof options.onApply === "function";
  const previewFontFamily = String(options.fontFamily || "").trim();

  if (preview) {
    if (previewFontFamily) {
      preview.style.setProperty("--formula-preview-font-family", previewFontFamily);
    } else {
      preview.style.removeProperty("--formula-preview-font-family");
    }
  }

  dialog.dataset.selectionStart = String(start);
  dialog.dataset.selectionEnd = String(end);
  dialog.classList.toggle("is-editing-existing", isEditingExisting);
  if (title) {
    title.textContent = isEditingExisting ? "Edit LaTeX Formula" : "LaTeX Formula";
  }
  if (actionButton) {
    actionButton.textContent = isEditingExisting ? "Update" : "Insert";
  }

  input.value = initialMode === "chem"
    ? initialChemSource || unwrapChemFormulaSource(initialSource) || "H2O"
    : stripFormulaDelimiters(initialSource) || "x^2 + y^2 = z^2";
  modeInputs.forEach((modeInput) => {
    modeInput.checked = modeInput.value === initialMode;
    modeInput.disabled = Boolean(options.lockMode);
  });

  const getMode = () => {
    const selectedMode = modeInputs.find((modeInput) => modeInput.checked);
    return selectedMode ? selectedMode.value : "inline";
  };

  const updatePreview = () => {
    const mode = getMode();
    const markdown = buildFormulaMarkdown(input.value, mode);
    const latex = stripFormulaDelimiters(markdown);
    preview.innerHTML = mode === "block"
      ? renderMathBlockElement(latex)
      : renderMathInline(latex, { variant: mode === "chem" ? "chem" : "math" });
  };

  const closeDialog = () => {
    dialog.hidden = true;
    document.removeEventListener("keydown", handleKeydown);
    if (textarea) {
      textarea.focus();
    } else if (options.focusTarget && typeof options.focusTarget.focus === "function") {
      options.focusTarget.focus();
    }
  };

  const insertFormula = () => {
    const markdown = buildFormulaMarkdown(input.value, getMode());
    const latex = stripFormulaDelimiters(markdown);

    if (isEditingExisting) {
      const didApply = options.onApply({
        input: input.value,
        latex,
        markdown,
        mode: getMode(),
      });

      if (didApply === false) {
        return;
      }
    } else if (textarea) {
      const replaceStart = clampNumber(dialog.dataset.selectionStart, 0, textarea.value.length, start);
      const replaceEnd = clampNumber(dialog.dataset.selectionEnd, replaceStart, textarea.value.length, end);

      replaceSelection(textarea, replaceStart, replaceEnd, markdown);
    }

    closeDialog();

    if (!isEditingExisting && typeof options.renderNow === "function") {
      options.renderNow();
    }

    if (typeof options.flashStatus === "function") {
      options.flashStatus(isEditingExisting ? "Formula updated" : "Formula inserted");
    }
  };

  function handleKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
      return;
    }

    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      insertFormula();
    }
  }

  dialog.querySelectorAll("[data-formula-close]").forEach((button) => {
    button.onclick = closeDialog;
  });
  dialog.querySelector("[data-formula-insert]").onclick = insertFormula;
  dialog.querySelectorAll("[data-formula-example]").forEach((button) => {
    button.onclick = () => {
      input.value = button.dataset.formulaExample || "";
      updatePreview();
      input.focus();
    };
  });
  modeInputs.forEach((modeInput) => {
    modeInput.onchange = updatePreview;
  });
  input.oninput = updatePreview;

  dialog.hidden = false;
  updatePreview();
  document.addEventListener("keydown", handleKeydown);
  window.requestAnimationFrame(() => {
    input.focus();
    input.select();
  });

  if (panel) {
    panel.onclick = (event) => event.stopPropagation();
  }
  dialog.onclick = (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  };
}

function formatLayoutPresetShortLabel(label) {
  const normalized = String(label || "预设").replace(/\s+/g, "");
  return Array.from(normalized).slice(0, 4).join("") || "预设";
}

function getLayoutPresetPreviewKind(presetId, mode) {
  const id = String(presetId || "");

  if (mode === "question" || id.includes("question-")) {
    return id.includes("review") || id.includes("journal") || id.includes("autumn") ? "question-review" : "question";
  }
  if (mode === "article" || id.includes("article-")) {
    if (id.includes("editorial") || id.includes("minimal")) return "editorial";
    if (id.includes("journal") || id.includes("study") || id.includes("cream")) return "journal";
    return "article";
  }
  if (id.includes("research") || id.includes("brief") || id.includes("report")) return "research";
  if (id.includes("minimal") || id.includes("editorial")) return "editorial";
  if (id.includes("journal") || id.includes("study") || id.includes("cream") || id.includes("pencil")) return "journal";
  if (id.includes("blueprint")) return "blueprint";
  if (id.includes("ledger") || id.includes("archive")) return "ledger";
  if (id.includes("lunar") || id.includes("snowpeak")) return "lunar";
  if (id.includes("botanical") || id.includes("spring")) return "botanical";
  if (id.includes("cherry") || id.includes("autumn")) return "marked";
  return "index";
}

function getLayoutPresetPreviewTheme(presetId) {
  const id = String(presetId || "");

  if (id.includes("botanical")) return "botanical";
  if (id.includes("lunar")) return "lunar";
  if (id.includes("blueprint")) return "blueprint";
  if (id.includes("cherry")) return "cherry";
  if (id.includes("ledger") || id.includes("archive")) return "ledger";
  if (id.includes("snowpeak")) return "snowpeak";
  if (id.includes("spring")) return "spring";
  if (id.includes("autumn")) return "autumn";
  if (id.includes("cream")) return "cream";
  if (id.includes("pencil")) return "pencil";
  if (id.includes("research") || id.includes("report")) return "research";
  if (id.includes("minimal") || id.includes("editorial")) return "minimal";
  if (id.includes("journal") || id.includes("study")) return "journal";
  return "classic";
}

function createSvgElement(tagName, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, String(value));
  });
  return el;
}

function createLayoutPresetPreviewSvg(preset, mode) {
  const wrap = document.createElement("span");
  const svg = createSvgElement("svg", {
    viewBox: "0 0 120 72",
    "aria-hidden": "true",
    focusable: "false",
  });
  const kind = getLayoutPresetPreviewKind(preset?.id, mode);
  const theme = getLayoutPresetPreviewTheme(preset?.id);
  const line = (x, y, width, className = "layout-preset-svg-line") => {
    svg.appendChild(createSvgElement("rect", { x, y, width, height: 3, rx: 1.5, class: className }));
  };
  const card = (x, y, width, height, className = "layout-preset-svg-card") => {
    svg.appendChild(createSvgElement("rect", { x, y, width, height, rx: 4, class: className }));
  };

  wrap.className = `layout-preset-preview layout-preset-preview-${kind} layout-preset-theme-${theme}`;
  svg.classList.add("layout-preset-svg");
  svg.appendChild(createSvgElement("rect", { x: 0, y: 0, width: 120, height: 72, rx: 10, class: "layout-preset-svg-backdrop" }));
  svg.appendChild(createSvgElement("path", { d: "M0 0H120V22C91 16 77 28 55 21C34 14 18 17 0 24Z", class: "layout-preset-svg-wash" }));
  svg.appendChild(createSvgElement("rect", { x: 10, y: 9, width: 102, height: 56, rx: 8, class: "layout-preset-svg-shadow" }));
  svg.appendChild(createSvgElement("rect", { x: 7, y: 6, width: 104, height: 58, rx: 8, class: "layout-preset-svg-page" }));
  svg.appendChild(createSvgElement("rect", { x: 13, y: 11, width: 32, height: 4, rx: 2, class: "layout-preset-svg-topbar" }));
  svg.appendChild(createSvgElement("circle", { cx: 100, cy: 13, r: 2, class: "layout-preset-svg-dot" }));
  svg.appendChild(createSvgElement("circle", { cx: 94, cy: 13, r: 2, class: "layout-preset-svg-dot-muted" }));

  if (kind === "blueprint") {
    [24, 44, 64, 84].forEach((x) => svg.appendChild(createSvgElement("path", { d: `M${x} 8V64`, class: "layout-preset-svg-grid" })));
    [20, 36, 52].forEach((y) => svg.appendChild(createSvgElement("path", { d: `M10 ${y}H110`, class: "layout-preset-svg-grid" })));
    card(15, 16, 30, 16);
    card(55, 18, 40, 12, "layout-preset-svg-muted");
    card(50, 42, 45, 12);
    svg.appendChild(createSvgElement("circle", { cx: 30, cy: 49, r: 5, class: "layout-preset-svg-accent" }));
  } else if (kind === "research") {
    line(14, 15, 42, "layout-preset-svg-accent");
    card(14, 24, 92, 12, "layout-preset-svg-muted");
    line(19, 29, 48);
    card(14, 43, 28, 14);
    card(48, 43, 58, 14);
    line(54, 49, 34);
  } else if (kind === "editorial") {
    line(16, 17, 72, "layout-preset-svg-accent");
    line(16, 28, 38);
    line(16, 39, 84);
    line(16, 48, 74);
    line(16, 57, 45);
    svg.appendChild(createSvgElement("path", { d: "M100 14V58", class: "layout-preset-svg-rule" }));
  } else if (kind === "journal") {
    card(14, 14, 42, 28, "layout-preset-svg-muted");
    line(20, 23, 24, "layout-preset-svg-accent");
    line(20, 32, 28);
    card(63, 18, 36, 12);
    card(63, 38, 42, 14, "layout-preset-svg-muted");
    svg.appendChild(createSvgElement("path", { d: "M18 51H101", class: "layout-preset-svg-rule" }));
  } else if (kind === "question" || kind === "question-review") {
    card(14, 13, 92, 16, "layout-preset-svg-muted");
    line(20, 20, 56, "layout-preset-svg-accent");
    card(14, 36, 42, 18);
    card(64, 36, 42, 18);
    line(20, 45, 22);
    line(70, 45, 22);
    if (kind === "question-review") svg.appendChild(createSvgElement("path", { d: "M18 60H102", class: "layout-preset-svg-mark" }));
  } else if (kind === "article") {
    line(15, 16, 56, "layout-preset-svg-accent");
    line(15, 27, 85);
    line(15, 36, 78);
    line(15, 45, 88);
    card(15, 55, 90, 5, "layout-preset-svg-muted");
  } else {
    svg.appendChild(createSvgElement("path", { d: "M16 12V60", class: "layout-preset-svg-rule" }));
    line(25, 16, 46, "layout-preset-svg-accent");
    card(25, 27, 36, 13);
    card(67, 27, 35, 13, "layout-preset-svg-muted");
    card(25, 47, 77, 10);
  }

  if (theme === "botanical") {
    svg.appendChild(createSvgElement("path", { d: "M93 49C82 49 79 58 79 58C90 59 97 54 93 49Z", class: "layout-preset-svg-motif" }));
    svg.appendChild(createSvgElement("path", { d: "M79 58C84 53 88 51 93 50", class: "layout-preset-svg-motif-line" }));
  } else if (theme === "lunar") {
    svg.appendChild(createSvgElement("circle", { cx: 100, cy: 52, r: 6, class: "layout-preset-svg-motif" }));
    svg.appendChild(createSvgElement("circle", { cx: 103, cy: 50, r: 6, class: "layout-preset-svg-cutout" }));
  } else if (theme === "blueprint") {
    svg.appendChild(createSvgElement("path", { d: "M74 55A16 16 0 0 0 99 45", class: "layout-preset-svg-motif-line" }));
    svg.appendChild(createSvgElement("circle", { cx: 74, cy: 55, r: 2, class: "layout-preset-svg-motif" }));
    svg.appendChild(createSvgElement("circle", { cx: 99, cy: 45, r: 2, class: "layout-preset-svg-motif" }));
  } else if (theme === "cherry") {
    svg.appendChild(createSvgElement("circle", { cx: 95, cy: 53, r: 4, class: "layout-preset-svg-motif" }));
    svg.appendChild(createSvgElement("circle", { cx: 102, cy: 49, r: 4, class: "layout-preset-svg-motif" }));
    svg.appendChild(createSvgElement("path", { d: "M96 49C96 43 100 41 105 40", class: "layout-preset-svg-motif-line" }));
  } else if (theme === "ledger" || theme === "cream" || theme === "research") {
    svg.appendChild(createSvgElement("rect", { x: 78, y: 48, width: 27, height: 12, rx: 2, class: "layout-preset-svg-ticket" }));
    svg.appendChild(createSvgElement("path", { d: "M82 52H101M82 56H96", class: "layout-preset-svg-motif-line" }));
  } else if (theme === "snowpeak") {
    svg.appendChild(createSvgElement("path", { d: "M74 59L85 43L94 58L101 50L109 59Z", class: "layout-preset-svg-motif" }));
    svg.appendChild(createSvgElement("path", { d: "M85 43L88 51L92 48", class: "layout-preset-svg-cutline" }));
  } else if (theme === "spring") {
    svg.appendChild(createSvgElement("path", { d: "M90 60V44M90 48C82 48 80 39 80 39C88 39 90 44 90 48ZM91 53C99 53 102 45 102 45C94 44 91 49 91 53Z", class: "layout-preset-svg-motif-line" }));
  } else if (theme === "autumn") {
    svg.appendChild(createSvgElement("path", { d: "M92 44C83 47 84 57 94 59C104 54 101 44 92 44Z", class: "layout-preset-svg-motif" }));
    svg.appendChild(createSvgElement("path", { d: "M92 44L96 60M87 51H101", class: "layout-preset-svg-cutline" }));
  } else if (theme === "pencil") {
    svg.appendChild(createSvgElement("path", { d: "M78 58L100 36L106 42L84 64L77 65Z", class: "layout-preset-svg-pencil" }));
    svg.appendChild(createSvgElement("path", { d: "M96 40L102 46", class: "layout-preset-svg-cutline" }));
  } else if (theme === "minimal") {
    svg.appendChild(createSvgElement("path", { d: "M78 17H105M78 56H105", class: "layout-preset-svg-motif-line" }));
  } else if (theme === "journal") {
    svg.appendChild(createSvgElement("path", { d: "M80 45H106V61H80z M85 45V61", class: "layout-preset-svg-motif-line" }));
    svg.appendChild(createSvgElement("path", { d: "M90 50H101M90 56H99", class: "layout-preset-svg-motif-line" }));
  }

  wrap.appendChild(svg);
  return wrap;
}

function createRibbonTabIcon(tabName) {
  const svg = createSvgElement("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false" });

  svg.classList.add("ribbon-tab-icon");
  svg.appendChild(createSvgElement("rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 5, class: "ribbon-tab-icon-surface" }));

  if (tabName === "layout") {
    svg.appendChild(createSvgElement("rect", { x: 6.5, y: 6.5, width: 11, height: 11, rx: 2, class: "ribbon-tab-icon-line" }));
    svg.appendChild(createSvgElement("path", { d: "M6.5 10.2h11M10.2 6.5v11M13.5 10.2v7.3", class: "ribbon-tab-icon-line" }));
    svg.appendChild(createSvgElement("rect", { x: 13.7, y: 12.4, width: 3, height: 3.6, rx: 1, class: "ribbon-tab-icon-fill" }));
  } else if (tabName === "design") {
    svg.appendChild(createSvgElement("path", { d: "M12 6.2c3.5 0 5.8 2 5.8 4.8 0 1.7-.9 2.6-2.4 2.6h-1.1c-.8 0-1.2.4-1.2 1.2 0 1-.8 1.8-2.1 1.8-2.7 0-4.9-2.1-4.9-5 0-3.1 2.4-5.4 5.9-5.4z", class: "ribbon-tab-icon-line" }));
    svg.appendChild(createSvgElement("circle", { cx: 9, cy: 10.5, r: 0.9, class: "ribbon-tab-icon-fill" }));
    svg.appendChild(createSvgElement("circle", { cx: 11.2, cy: 8.7, r: 0.9, class: "ribbon-tab-icon-fill" }));
    svg.appendChild(createSvgElement("circle", { cx: 13.8, cy: 9.2, r: 0.9, class: "ribbon-tab-icon-fill" }));
  } else {
    svg.appendChild(createSvgElement("path", { d: "M7 6.4h7.2l3.1 3.1v8.1H7z", class: "ribbon-tab-icon-line" }));
    svg.appendChild(createSvgElement("path", { d: "M14.2 6.4v3.1h3.1M9.5 12.2h5.2M9.5 15h6.6", class: "ribbon-tab-icon-line" }));
    svg.appendChild(createSvgElement("rect", { x: 8.8, y: 8.3, width: 3.2, height: 1.5, rx: 0.75, class: "ribbon-tab-icon-fill" }));
  }

  return svg;
}

function setupRibbonTabIcons(ribbonTabs) {
  ribbonTabs.forEach((button) => {
    if (button.querySelector(".ribbon-tab-icon")) {
      return;
    }

    const label = document.createElement("span");
    label.className = "ribbon-tab-label";
    label.textContent = button.textContent.trim();
    button.textContent = "";
    button.append(createRibbonTabIcon(button.getAttribute("data-ribbon-tab")), label);
  });
}

function setupWorkspaceViewTabs() {
  const shell = document.querySelector(".workspace-shell");
  const tabs = Array.from(document.querySelectorAll(".workspace-tab[data-workspace-view]"));

  if (!shell || !tabs.length || shell.dataset.workspaceTabsBound === "true") {
    return;
  }

  const setWorkspaceView = (view) => {
    shell.dataset.workspaceView = view;
    tabs.forEach((tab) => {
      const isActive = tab.getAttribute("data-workspace-view") === view;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-pressed", String(isActive));
    });
  };

  shell.dataset.workspaceTabsBound = "true";
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setWorkspaceView(tab.getAttribute("data-workspace-view") || "preview");
    });
  });
  setWorkspaceView(shell.dataset.workspaceView || "preview");
}

async function initPagedApp() {
  if (typeof document === "undefined") {
    return;
  }

  const textarea = document.getElementById("markdownInput");
  const canvas = document.getElementById("articleCanvas");
  const statusText = document.getElementById("statusText");
  const previewNote = document.querySelector(".preview-note");
  const fileInput = document.getElementById("fileInput");
  const pdfInput = document.getElementById("pdfInput");
  const pdfImportLabel = document.getElementById("pdfImportLabel");
  const loadSampleBtn = document.getElementById("loadSampleBtn");
  const toolbarExportToggle = document.getElementById("toolbarExportToggle");
  const toolbarExportMenu = document.getElementById("toolbarExportMenu");
  const downloadHtmlBtn = document.getElementById("downloadHtmlBtn");
  const downloadWordBtn = document.getElementById("downloadWordBtn");
  const printBtn = document.getElementById("printBtn");
  const downloadPngBtn = document.getElementById("downloadPngBtn");
  const downloadImageGroupBtn = document.getElementById("downloadImageGroupBtn");
  const aiSubjectInput = document.getElementById("aiSubjectInput");
  const aiTopicInput = document.getElementById("aiTopicInput");
  const aiSourceInput = document.getElementById("aiSourceInput");
  const aiGenerateBtn = document.getElementById("generateStudyNotesBtn");
  const aiNoteStatus = document.getElementById("aiNoteStatus");
  const modeBenefitTitle = document.getElementById("modeBenefitTitle");
  const modeBenefitSummary = document.getElementById("modeBenefitSummary");
  const modeBenefitList = document.getElementById("modeBenefitList");
  const layoutPresetPicker = ensureLayoutPresetPicker();
  const questionAnswerLayoutPicker = ensureQuestionAnswerLayoutPicker();
  const articleStyleControls = ARTICLE_STYLE_CONTROLS.map((control) => ({
    ...control,
    range: document.getElementById(control.inputId),
    value: document.getElementById(control.valueId),
  }));
  const paragraphControls = ARTICLE_PARAGRAPH_CONTROLS.map((control) => ({
    ...control,
    range: document.getElementById(control.inputId),
    value: document.getElementById(control.valueId),
  }));
  const headingLineHeightControls = HEADING_LINE_HEIGHT_CONTROLS.map((control) => ({
    ...control,
    range: document.getElementById(control.inputId),
    value: document.getElementById(control.valueId),
  }));
  const headingSpaceControls = HEADING_SPACE_CONTROLS.map((control) => ({
    ...control,
    range: document.getElementById(control.inputId),
    value: document.getElementById(control.valueId),
  }));
  const pageStyleControls = PAGE_STYLE_CONTROLS.map((control) => ({
    ...control,
    range: document.getElementById(control.inputId),
    value: document.getElementById(control.valueId),
  }));
  const globalFontFamilySelect = document.getElementById("globalFontFamilySelect");
  const bodyFontFamilySelect = document.getElementById("bodyFontFamilySelect");
  const headingFontFamilySelect = document.getElementById("headingFontFamilySelect");
  const customFontInput = document.getElementById("customFontInput");
  const customFontStatus = document.getElementById("customFontStatus");
  const previewFontFamilySelect = document.getElementById("previewFontFamilySelect");
  const previewFontSizeSelect = document.getElementById("previewFontSizeSelect");
  const previewTextColorInput = document.getElementById("previewTextColorInput");
  const previewToolsToggle = document.getElementById("previewToolsToggle");
  const inspectorToggle = document.getElementById("inspectorToggle");
  const previewEditorTools = document.getElementById("previewEditorTools");
  const elementStylePanel = document.getElementById("elementStylePanel");
  const elementStyleTitle = elementStylePanel?.querySelector(".element-style-title");
  const elementStyleNote = elementStylePanel?.querySelector(".element-style-note");
  const elementStyleGrid = elementStylePanel?.querySelector(".element-style-grid");
  let cardLayoutPanel = null;
  let cardLayoutFields = null;
  let cardLayoutTarget = null;
  let cardLayoutResetBtn = null;
  let cardLayoutControls = [];
  const textColorButtons = Array.from(document.querySelectorAll("[data-text-color]"));
  const selectionAlignButtons = Array.from(document.querySelectorAll("[data-selection-align]"));
  const paragraphStepButtons = Array.from(document.querySelectorAll("[data-paragraph-step]"));
  const clearTextStyleBtn = document.getElementById("clearTextStyleBtn");
  const clearParagraphStyleBtn = document.getElementById("clearParagraphStyleBtn");
  const lineHeightRange = document.getElementById("lineHeightRange");
  const lineHeightValue = document.getElementById("lineHeightValue");
  const letterSpacingRange = document.getElementById("letterSpacingRange");
  const letterSpacingValue = document.getElementById("letterSpacingValue");
  const pageHeaderToggle = document.getElementById("pageHeaderToggle");
  const pageHeaderInput = document.getElementById("pageHeaderInput");
  const watermarkToggle = document.getElementById("watermarkToggle");
  const watermarkInput = document.getElementById("watermarkInput");
  const paginationStrategySelect = document.getElementById("paginationStrategySelect");
  const previewPaginationStrategySelect = document.getElementById("previewPaginationStrategySelect");
  const exportBackgroundInput = document.getElementById("exportBackgroundInput");
  const exportBackgroundName = document.getElementById("exportBackgroundName");
  const clearExportBackgroundBtn = document.getElementById("clearExportBackgroundBtn");
  const exportBackgroundPresetGrid = document.getElementById("exportBackgroundPresetGrid");
  let exportBackgroundPresetButtons = [];
  let layoutPresetButtons = [];
  let questionAnswerLayoutButtons = [];
  let mountedLayoutPresetMode = "";
  const ribbonTabs = Array.from(document.querySelectorAll("[data-ribbon-tab]"));
  const ribbonPanels = Array.from(document.querySelectorAll("[data-ribbon-panel]"));
  const themeButtons = Array.from(document.querySelectorAll("[data-theme-option]"));
  const modeButtons = Array.from(document.querySelectorAll("[data-mode-option]"));
  const brushButtons = Array.from(document.querySelectorAll("[data-brush-style]"));
  const inlineStyleButtons = Array.from(document.querySelectorAll("[data-inline-style]"));
  const formulaEditorBtn = document.getElementById("formulaEditorBtn");
  const paragraphAlignButtons = Array.from(document.querySelectorAll("[data-paragraph-align]"));
  const mergeCellsBtn = document.getElementById("mergeCellsBtn");
  const splitCellBtn = document.getElementById("splitCellBtn");
  const forcePageBreakBtn = document.getElementById("forcePageBreakBtn");

  if (!textarea || !canvas || !statusText) {
    return;
  }

  function ensureLayoutPresetPicker() {
    const existingPicker = document.getElementById("layoutPresetPicker");

    if (existingPicker) {
      return existingPicker;
    }

    const anchor = modeBenefitList?.closest(".mode-benefit-card") || document.querySelector(".option-panel-mode");

    if (!anchor) {
      return null;
    }

    const panel = document.createElement("div");
    const heading = document.createElement("div");
    const kicker = document.createElement("p");
    const note = document.createElement("p");
    const select = document.createElement("select");
    const picker = document.createElement("div");

    panel.className = "layout-preset-panel";
    heading.className = "layout-preset-head";
    kicker.className = "layout-preset-kicker";
    note.className = "layout-preset-note";
    select.id = "layoutPresetSelect";
    select.className = "layout-preset-select";
    select.setAttribute("aria-label", "\u9009\u62e9\u7248\u5f0f\u9884\u8bbe");
    picker.id = "layoutPresetPicker";
    picker.className = "layout-preset-grid";
    picker.setAttribute("role", "group");
    picker.setAttribute("aria-label", "\u9009\u62e9\u7248\u5f0f\u9884\u8bbe");

    kicker.textContent = "\u7248\u5f0f\u9884\u89c8";
    note.textContent = "\u5148\u7528\u4e0b\u62c9\u9009\u7248\u5f0f\uff0c\u4e5f\u53ef\u6a2a\u5411\u6d4f\u89c8\u5361\u7247";

    heading.appendChild(kicker);
    heading.appendChild(note);
    panel.appendChild(heading);
    panel.appendChild(select);
    panel.appendChild(picker);
    anchor.insertAdjacentElement("afterend", panel);

    return picker;
  }

  function ensureQuestionAnswerLayoutPicker() {
    const existingPicker = document.getElementById("questionAnswerLayoutPicker");

    if (existingPicker) {
      return existingPicker;
    }

    const anchor = document.getElementById("layoutPresetPicker")?.closest(".layout-preset-panel")
      || modeBenefitList?.closest(".mode-benefit-card")
      || document.querySelector(".option-panel-mode");

    if (!anchor) {
      return null;
    }

    const panel = document.createElement("div");
    const heading = document.createElement("div");
    const kicker = document.createElement("p");
    const note = document.createElement("p");
    const select = document.createElement("select");
    const picker = document.createElement("div");

    panel.className = "question-answer-layout-panel";
    heading.className = "question-answer-layout-head";
    kicker.className = "question-answer-layout-kicker";
    note.className = "question-answer-layout-note";
    select.id = "questionAnswerLayoutSelect";
    select.className = "question-answer-layout-select";
    select.setAttribute("aria-label", "Select answer layout");
    picker.id = "questionAnswerLayoutPicker";
    picker.className = "question-answer-layout-grid";
    picker.setAttribute("role", "group");
    picker.setAttribute("aria-label", "选择答案结构");

    kicker.textContent = "答案结构";
    note.textContent = "逐题 / 后置";

    Object.entries(QUESTION_ANSWER_LAYOUTS).forEach(([layout, meta]) => {
      const button = document.createElement("button");
      const title = document.createElement("span");
      const summary = document.createElement("span");

      button.type = "button";
      button.className = "question-answer-layout-button";
      button.dataset.questionAnswerLayout = layout;
      button.setAttribute("aria-pressed", "false");

      title.className = "question-answer-layout-title";
      summary.className = "question-answer-layout-summary";
      title.textContent = meta.label;
      summary.textContent = meta.summary;

      button.appendChild(title);
      button.appendChild(summary);
      picker.appendChild(button);
    });

    heading.appendChild(kicker);
    heading.appendChild(note);
    panel.appendChild(heading);
    panel.appendChild(select);
    panel.appendChild(picker);
    anchor.insertAdjacentElement("afterend", panel);

    return picker;
  }

  const workbench = getPageLayoutWorkbench();
  workbench.innerHTML = "";
  canvas.classList.add("page-preview");
  canvas.classList.remove("article-canvas");

  const measureCanvas = document.createElement("article");
  measureCanvas.className = "article-canvas article-measure-canvas";
  measureCanvas.dataset.mode = DEFAULT_MODE;
  measureCanvas.setAttribute("aria-hidden", "true");
  workbench.appendChild(measureCanvas);

  const state = {
    theme: DEFAULT_THEME,
    mode: DEFAULT_MODE,
    questionAnswerLayout: DEFAULT_QUESTION_ANSWER_LAYOUT,
    layoutPreset: getDefaultLayoutPresetForMode(DEFAULT_MODE),
    layoutPresetByMode: normalizeLayoutPresetByMode({}),
    bodyFontFamily: DEFAULT_BODY_FONT_FAMILY,
    headingFontFamily: DEFAULT_HEADING_FONT_FAMILY,
    paragraphAlign: DEFAULT_PARAGRAPH_ALIGN,
    fontSize: DEFAULT_FONT_SIZE,
    heading1Size: DEFAULT_HEADING1_SIZE,
    heading2Size: DEFAULT_HEADING2_SIZE,
    heading3Size: DEFAULT_HEADING3_SIZE,
    heading4Size: DEFAULT_HEADING4_SIZE,
    tableFontSize: DEFAULT_TABLE_FONT_SIZE,
    accentFontSize: DEFAULT_ACCENT_FONT_SIZE,
    mindmapNodeWidth: DEFAULT_MINDMAP_NODE_WIDTH,
    lineHeight: DEFAULT_LINE_HEIGHT,
    letterSpacing: DEFAULT_LETTER_SPACING,
    paragraphSpacing: DEFAULT_PARAGRAPH_SPACING,
    paragraphIndent: DEFAULT_PARAGRAPH_INDENT,
    heading1LineHeight: DEFAULT_HEADING1_LINE_HEIGHT,
    heading2LineHeight: DEFAULT_HEADING2_LINE_HEIGHT,
    heading3LineHeight: DEFAULT_HEADING3_LINE_HEIGHT,
    heading4LineHeight: DEFAULT_HEADING4_LINE_HEIGHT,
    headingSpaceH1: DEFAULT_HEADING_SPACE_H1,
    headingSpaceH2: DEFAULT_HEADING_SPACE_H2,
    headingSpaceH3: DEFAULT_HEADING_SPACE_H3,
    headingSpaceH4: DEFAULT_HEADING_SPACE_H4,
    pageWidth: DEFAULT_PAGE_WIDTH,
    pageHeight: DEFAULT_PAGE_HEIGHT,
    pageMarginTop: DEFAULT_PAGE_MARGIN_TOP,
    pageMarginRight: DEFAULT_PAGE_MARGIN_RIGHT,
    pageMarginBottom: DEFAULT_PAGE_MARGIN_BOTTOM,
    pageMarginLeft: DEFAULT_PAGE_MARGIN_LEFT,
    pageHeaderEnabled: DEFAULT_PAGE_HEADER_ENABLED,
    pageHeaderText: DEFAULT_PAGE_HEADER_TEXT,
    watermarkEnabled: DEFAULT_WATERMARK_ENABLED,
    watermarkText: DEFAULT_WATERMARK_TEXT,
    watermarkOpacity: DEFAULT_WATERMARK_OPACITY,
    exportBackgroundSrc: DEFAULT_EXPORT_BACKGROUND_SRC,
    exportBackgroundName: DEFAULT_EXPORT_BACKGROUND_NAME,
    paginationStrategy: DEFAULT_PAGINATION_STRATEGY,
    elementStyles: getElementStyleDefaults(),
    cardLayouts: {},
    cardOrder: [],
    activeElementStyleGroup: ELEMENT_STYLE_SCHEMA[0].id,
    tableLayouts: {},
    latestCharacterCount: 0,
    latestBlockCount: 0,
    latestPageCount: 0,
  };

  function mountExportBackgroundPresets() {
    if (!exportBackgroundPresetGrid) {
      return;
    }

    exportBackgroundPresetGrid.replaceChildren();

    EXPORT_BACKGROUND_PRESETS.forEach((preset) => {
      const button = document.createElement("button");
      const thumb = document.createElement("span");
      const label = document.createElement("span");

      button.type = "button";
      button.className = "background-preset-button";
      button.dataset.backgroundPreset = preset.id;
      button.setAttribute("aria-pressed", "false");
      button.title = preset.label;
      button.style.setProperty("--background-preset-image", buildCssUrlValue(preset.src));

      thumb.className = "background-preset-thumb";
      label.className = "background-preset-label";
      label.textContent = preset.label;

      button.appendChild(thumb);
      button.appendChild(label);
      exportBackgroundPresetGrid.appendChild(button);
    });

    exportBackgroundPresetButtons = Array.from(exportBackgroundPresetGrid.querySelectorAll("[data-background-preset]"));
    exportBackgroundPresetButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const preset = getExportBackgroundPreset(button.getAttribute("data-background-preset"));

        if (!preset) {
          return;
        }

        state.exportBackgroundSrc = preset.src;
        state.exportBackgroundName = preset.label;
        applyUiState({ rerender: true });
        flashStatus(`已应用${preset.label}背景，导出会同步带上`);
      });
    });
  }

  function syncExportBackgroundPresets() {
    exportBackgroundPresetButtons.forEach((button) => {
      const preset = getExportBackgroundPreset(button.getAttribute("data-background-preset"));
      const isActive = Boolean(preset && preset.src === state.exportBackgroundSrc);

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function mountLayoutPresetPicker() {
    if (!layoutPresetPicker) {
      return;
    }

    const layoutPresetSelect = document.getElementById("layoutPresetSelect");

    if (mountedLayoutPresetMode === state.mode && layoutPresetButtons.length) {
      return;
    }

    mountedLayoutPresetMode = state.mode;
    layoutPresetPicker.replaceChildren();
    layoutPresetSelect?.replaceChildren();

    getLayoutPresetsForMode(state.mode).forEach((preset) => {
      const button = document.createElement("button");
      const preview = createLayoutPresetPreviewSvg(preset, state.mode);
      const title = document.createElement("span");
      const summary = document.createElement("span");
      const option = document.createElement("option");

      button.type = "button";
      button.className = "layout-preset-button";
      button.dataset.layoutPreset = preset.id;
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-label", `${preset.label} - ${preset.summary}`);
      button.title = `${preset.label} - ${preset.summary}`;

      title.className = "layout-preset-title";
      summary.className = "layout-preset-summary";
      title.textContent = formatLayoutPresetShortLabel(preset.label);
      summary.textContent = preset.summary;

      button.appendChild(preview);
      button.appendChild(title);
      button.appendChild(summary);
      layoutPresetPicker.appendChild(button);

      option.value = preset.id;
      option.textContent = `${preset.label} - ${preset.summary}`;
      option.label = `${preset.label} - ${preset.summary}`;
      layoutPresetSelect?.appendChild(option);

      button.addEventListener("click", () => {
        state.layoutPreset = sanitizeLayoutPresetForMode(button.dataset.layoutPreset, state.mode);
        state.layoutPresetByMode[state.mode] = state.layoutPreset;
        applyUiState({ rerender: true });

        const meta = getLayoutPresetMetadata(state.layoutPreset, state.mode);
        flashStatus(meta ? `\u5df2\u5e94\u7528 ${meta.label} \u7248\u5f0f` : "\u5df2\u5e94\u7528\u7248\u5f0f\u9884\u8bbe");
      });
    });

    layoutPresetButtons = Array.from(layoutPresetPicker.querySelectorAll("[data-layout-preset]"));

    if (layoutPresetSelect && layoutPresetSelect.dataset.bound !== "true") {
      layoutPresetSelect.dataset.bound = "true";
      layoutPresetSelect.addEventListener("change", () => {
        state.layoutPreset = sanitizeLayoutPresetForMode(layoutPresetSelect.value, state.mode);
        state.layoutPresetByMode[state.mode] = state.layoutPreset;
        applyUiState({ rerender: true });

        const meta = getLayoutPresetMetadata(state.layoutPreset, state.mode);
        flashStatus(meta ? `\u5df2\u5e94\u7528 ${meta.label} \u7248\u5f0f` : "\u5df2\u5e94\u7528\u7248\u5f0f\u9884\u8bbe");
      });
    }
  }

  function syncLayoutPresetButtons() {
    mountLayoutPresetPicker();

    layoutPresetButtons.forEach((button) => {
      const isActive = button.getAttribute("data-layout-preset") === state.layoutPreset;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const layoutPresetSelect = document.getElementById("layoutPresetSelect");
    if (layoutPresetSelect) {
      layoutPresetSelect.value = state.layoutPreset;
    }
  }

  function syncQuestionAnswerLayoutControls() {
    if (!questionAnswerLayoutPicker) {
      return;
    }

    const questionAnswerLayoutSelect = document.getElementById("questionAnswerLayoutSelect");

    if (questionAnswerLayoutSelect && !questionAnswerLayoutSelect.options.length) {
      Object.entries(QUESTION_ANSWER_LAYOUTS).forEach(([layout, meta]) => {
        const option = document.createElement("option");
        option.value = layout;
        option.textContent = meta.label;
        option.label = meta.summary;
        questionAnswerLayoutSelect.appendChild(option);
      });
    }

    if (questionAnswerLayoutSelect && questionAnswerLayoutSelect.dataset.bound !== "true") {
      questionAnswerLayoutSelect.dataset.bound = "true";
      questionAnswerLayoutSelect.addEventListener("change", () => {
        state.questionAnswerLayout = sanitizeChoice(
          questionAnswerLayoutSelect.value,
          QUESTION_ANSWER_LAYOUTS,
          DEFAULT_QUESTION_ANSWER_LAYOUT,
        );
        applyUiState({ rerender: true });

        const meta = QUESTION_ANSWER_LAYOUTS[state.questionAnswerLayout];
        flashStatus(meta ? `\u5df2\u5207\u6362\u4e3a ${meta.label}` : "\u5df2\u5207\u6362\u7b54\u6848\u7ed3\u6784");
      });
    }

    if (!questionAnswerLayoutButtons.length) {
      questionAnswerLayoutButtons = Array.from(questionAnswerLayoutPicker.querySelectorAll("[data-question-answer-layout]"));
      questionAnswerLayoutButtons.forEach((button) => {
        button.addEventListener("click", () => {
          state.questionAnswerLayout = sanitizeChoice(
            button.dataset.questionAnswerLayout,
            QUESTION_ANSWER_LAYOUTS,
            DEFAULT_QUESTION_ANSWER_LAYOUT,
          );
          applyUiState({ rerender: true });

          const meta = QUESTION_ANSWER_LAYOUTS[state.questionAnswerLayout];
          flashStatus(meta ? `已切换为${meta.label}` : "已切换答案结构");
        });
      });
    }

    const isQuestionMode = state.mode === "question";
    const panel = questionAnswerLayoutPicker.closest(".question-answer-layout-panel");
    if (panel) {
      panel.hidden = !isQuestionMode;
    }

    questionAnswerLayoutButtons.forEach((button) => {
      const isActive = button.dataset.questionAnswerLayout === state.questionAnswerLayout;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (questionAnswerLayoutSelect) {
      questionAnswerLayoutSelect.value = state.questionAnswerLayout;
    }
  }

  let renderTimer = null;
  let statusTimer = null;
  let previewSyncTimer = null;
  let exportBusy = false;
  let activeRibbonTab = DEFAULT_RIBBON_TAB;
  let previewHasPendingSync = false;
  let previewSelectionRange = null;
  let previewSelectionHost = null;
  let preservePreviewSelection = false;
  let activeTableCellSelection = null;
  let tableCellSelectionDrag = null;
  let suppressNextTableClick = false;
  let activeCardLayoutKey = "";
  let activeCardElement = null;
  let cardDragState = null;

  [
    ...articleStyleControls.map((control) => ({
      rangeInput: control.range,
      display: control.value,
      min: control.min,
      max: control.max,
      step: control.range ? Number(control.range.step || 1) : 1,
      defaultValue: control.defaultValue,
      formatValue: formatPixelValue,
    })),
    ...paragraphControls.map((control) => ({
      rangeInput: control.range,
      display: control.value,
      min: control.min,
      max: control.max,
      step: control.range ? Number(control.range.step || 1) : 1,
      defaultValue: control.defaultValue,
      formatValue: control.formatValue,
    })),
    ...headingLineHeightControls.map((control) => ({
      rangeInput: control.range,
      display: control.value,
      min: control.min,
      max: control.max,
      step: control.range ? Number(control.range.step || 0.05) : 0.05,
      defaultValue: control.defaultValue,
      formatValue: control.formatValue,
    })),
    ...headingSpaceControls.map((control) => ({
      rangeInput: control.range,
      display: control.value,
      min: control.min,
      max: control.max,
      step: control.range ? Number(control.range.step || 1) : 1,
      defaultValue: control.defaultValue,
      formatValue: control.formatValue,
    })),
    ...pageStyleControls.map((control) => ({
      rangeInput: control.range,
      display: control.value,
      min: control.min,
      max: control.max,
      step: control.range ? Number(control.range.step || 1) : 1,
      defaultValue: control.defaultValue,
      formatValue: control.formatValue,
    })),
    {
      rangeInput: lineHeightRange,
      display: lineHeightValue,
      min: 1.1,
      max: 2.4,
      step: 0.05,
      defaultValue: DEFAULT_LINE_HEIGHT,
      formatValue: formatLineHeight,
    },
    {
      rangeInput: letterSpacingRange,
      display: letterSpacingValue,
      min: -0.5,
      max: 2,
      step: 0.1,
      defaultValue: DEFAULT_LETTER_SPACING,
      formatValue: formatDecimalPixelValue,
    },
  ].forEach(initNumericScrubber);

  document.body.classList.add("has-compact-controls");

  if (previewNote) {
    previewNote.textContent = "按实际纸张分页预览，表格线仍可拖动调整，导出结果与当前预览一致。";
  }

  function syncOptionButtons(buttons, attributeName, activeValue) {
    buttons.forEach((button) => {
      const selected = button.getAttribute(attributeName) === activeValue;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function applyRibbonTab(nextTab) {
    activeRibbonTab = sanitizeChoice(nextTab, RIBBON_TABS, DEFAULT_RIBBON_TAB);

    ribbonTabs.forEach((button) => {
      const selected = button.getAttribute("data-ribbon-tab") === activeRibbonTab;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-selected", selected ? "true" : "false");
      button.tabIndex = selected ? 0 : -1;
    });

    ribbonPanels.forEach((panel) => {
      const isVisible = panel.getAttribute("data-ribbon-panel") === activeRibbonTab;
      panel.hidden = !isVisible;
    });

    try {
      window.localStorage.setItem(STORAGE_KEYS.ribbonTab, activeRibbonTab);
    } catch (_error) {
      // Ignore storage failures in restricted browsers.
    }
  }

  function setPreviewDrawer(openPanel) {
    const showTools = openPanel === "tools";
    const showInspector = openPanel === "inspector";

    if (previewEditorTools) {
      previewEditorTools.hidden = !showTools;
    }

    if (elementStylePanel) {
      elementStylePanel.hidden = !showInspector;
    }

    previewToolsToggle?.classList.toggle("is-active", showTools);
    previewToolsToggle?.setAttribute("aria-expanded", String(showTools));
    inspectorToggle?.classList.toggle("is-active", showInspector);
    inspectorToggle?.setAttribute("aria-expanded", String(showInspector));
  }

  function getGroupIdForPreviewElement(element) {
    const target = element?.closest?.([
      ".knowledge-cluster",
      ".question-card",
      ".question-panel",
      ".mindmap-card",
      ".callout-box",
      ".note-quote",
      ".brush-block",
      ".article-table-editor",
      "figure",
      "table",
      "blockquote",
      "h1",
      "h2",
      "h3",
      "h4",
      "ul",
      "ol",
      "li",
      "p",
    ].join(","));

    if (!target) {
      return state.activeElementStyleGroup || ELEMENT_STYLE_SCHEMA[0].id;
    }

    if (target.matches("h1")) return "heading1";
    if (target.matches("h2")) return "heading2";
    if (target.matches("h3")) return "heading3";
    if (target.matches("h4")) return "heading4";
    if (target.matches("ul, ol, li")) return "list";
    if (target.matches(".callout-box, .note-quote, .brush-block, blockquote")) return "callout";
    if (target.matches("table, .article-table-editor")) return "table";
    if (target.matches(".knowledge-cluster, .question-card, .question-panel, .mindmap-card, figure")) return "card";
    return "paragraph";
  }

  function syncElementStylePanel() {
    if (!elementStyleGrid) {
      return;
    }

    const activeGroup = getElementStyleGroup(state.activeElementStyleGroup);

    if (elementStylePanel) {
      elementStylePanel.dataset.activeElementStyle = activeGroup.id;
    }

    elementStyleGrid.querySelectorAll("[data-element-style-group]").forEach((button) => {
      const isActive = button.getAttribute("data-element-style-group") === activeGroup.id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    elementStyleGrid.querySelectorAll("[data-element-style-field]").forEach((range) => {
      const groupId = range.getAttribute("data-element-style-group-field");
      const fieldKey = range.getAttribute("data-element-style-field");
      const field = getElementStyleField(groupId, fieldKey);
      const group = state.elementStyles?.[groupId];

      if (!field || !group) {
        return;
      }

      const value = clampNumber(group[fieldKey], field.min, field.max, field.defaultValue);
      const fieldEl = range.closest(".element-style-field");
      const valueEl = fieldEl?.querySelector(".element-style-value");

      range.value = String(value);
      updateRangeControlVisual(range);
      if (valueEl) {
        valueEl.textContent = field.formatValue ? field.formatValue(value) : String(value);
      }
    });

    if (elementStyleNote) {
      elementStyleNote.textContent = `当前：${activeGroup.label}`;
    }
  }

  function selectElementStyleGroup(groupId, { open = true } = {}) {
    state.activeElementStyleGroup = getElementStyleGroup(groupId).id;

    if (elementStylePanel) {
      elementStylePanel.dataset.activeElementStyle = state.activeElementStyleGroup;
    }

    syncElementStylePanel();

    if (open) {
      setPreviewDrawer("inspector");
    }
  }

  function mountElementStylePanel() {
    if (!elementStylePanel || !elementStyleGrid || elementStylePanel.dataset.mounted === "true") {
      return;
    }

    elementStylePanel.dataset.mounted = "true";

    const groupPicker = document.createElement("div");
    const fieldsWrap = document.createElement("div");
    const resetBtn = document.createElement("button");

    groupPicker.className = "element-style-picker";
    groupPicker.setAttribute("role", "tablist");
    fieldsWrap.className = "element-style-fields";
    resetBtn.type = "button";
    resetBtn.className = "element-style-reset";
    resetBtn.textContent = "重置当前";

    ELEMENT_STYLE_SCHEMA.forEach((group) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "element-style-chip";
      button.dataset.elementStyleGroup = group.id;
      button.textContent = group.label;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => selectElementStyleGroup(group.id));
      groupPicker.appendChild(button);

      const groupFields = document.createElement("div");
      groupFields.className = "element-style-group-fields";
      groupFields.dataset.elementStyleFieldsGroup = group.id;

      group.fields.forEach((field) => {
        const fieldEl = document.createElement("label");
        const label = document.createElement("span");
        const value = document.createElement("span");
        const range = document.createElement("input");

        fieldEl.className = "element-style-field";
        label.className = "element-style-label";
        value.className = "element-style-value";
        range.type = "range";
        range.className = "precision-range";
        range.min = String(field.min);
        range.max = String(field.max);
        range.step = String(field.step || 1);
        range.dataset.elementStyleGroupField = group.id;
        range.dataset.elementStyleField = field.key;

        label.textContent = field.label;
        fieldEl.append(label, value, range);
        groupFields.appendChild(fieldEl);

        range.addEventListener("input", () => {
          const normalizedStyles = normalizeElementStyles(state.elementStyles);
          normalizedStyles[group.id][field.key] = clampNumber(range.value, field.min, field.max, field.defaultValue);
          state.elementStyles = normalizedStyles;
          applyElementStyleProperties(measureCanvas, state.elementStyles);
          syncElementStylePanel();
          applyUiState({ rerender: true });
        });
      });

      fieldsWrap.appendChild(groupFields);
    });

    resetBtn.addEventListener("click", () => {
      const group = getElementStyleGroup(state.activeElementStyleGroup);
      const normalizedStyles = normalizeElementStyles(state.elementStyles);
      const defaults = getElementStyleDefaults(state);

      normalizedStyles[group.id] = { ...defaults[group.id] };
      state.elementStyles = normalizedStyles;
      syncElementStylePanel();
      applyUiState({ rerender: true });
    });

    elementStyleGrid.prepend(groupPicker, fieldsWrap, resetBtn);

    if (elementStyleTitle) {
      elementStyleTitle.textContent = "元素参数";
    }

    syncElementStylePanel();
  }

  function ensureCardLayoutPanel() {
    if (cardLayoutPanel) {
      return cardLayoutPanel;
    }

    if (!elementStylePanel || !elementStyleGrid) {
      return null;
    }

    const panel = document.createElement("section");
    const head = document.createElement("div");
    const title = document.createElement("p");
    const target = document.createElement("p");
    const fields = document.createElement("div");
    const resetButton = document.createElement("button");

    panel.id = "cardLayoutPanel";
    panel.className = "card-layout-panel";
    panel.hidden = true;
    head.className = "card-layout-head";
    title.className = "card-layout-title";
    target.id = "cardLayoutTarget";
    target.className = "card-layout-target";
    fields.id = "cardLayoutFields";
    fields.className = "card-layout-fields";
    resetButton.id = "cardLayoutResetBtn";
    resetButton.type = "button";
    resetButton.className = "element-style-reset card-layout-reset";

    title.textContent = "卡片参数";
    target.textContent = "点击预览里的卡片";
    resetButton.textContent = "重置卡片";

    head.append(title, target, resetButton);
    panel.append(head, fields);
    elementStyleGrid.insertAdjacentElement("afterend", panel);

    cardLayoutPanel = panel;
    cardLayoutFields = fields;
    cardLayoutTarget = target;
    cardLayoutResetBtn = resetButton;
    return panel;
  }

  function mountCardLayoutPanel() {
    ensureCardLayoutPanel();

    if (!cardLayoutPanel || !cardLayoutFields || cardLayoutPanel.dataset.mounted === "true") {
      return;
    }

    cardLayoutPanel.dataset.mounted = "true";
    cardLayoutFields.replaceChildren();
    cardLayoutControls = CARD_LAYOUT_FIELD_SCHEMA.map((field) => {
      const fieldEl = document.createElement("label");
      const label = document.createElement("span");
      const value = document.createElement("span");
      const range = document.createElement("input");

      fieldEl.className = "element-style-field card-layout-field";
      label.className = "element-style-label";
      value.className = "element-style-value";
      range.type = "range";
      range.className = "precision-range";
      range.min = String(field.min);
      range.max = String(field.max);
      range.step = String(field.step || 1);
      range.value = String(field.defaultValue);
      range.dataset.cardLayoutField = field.key;

      label.textContent = field.label;
      fieldEl.append(label, value, range);
      cardLayoutFields.appendChild(fieldEl);

      initNumericScrubber({
        rangeInput: range,
        display: value,
        min: field.min,
        max: field.max,
        step: field.step || 1,
        defaultValue: field.defaultValue,
        formatValue: field.formatValue,
      });

      range.addEventListener("input", () => {
        if (!activeCardLayoutKey) {
          return;
        }

        state.cardLayouts = setCardLayoutEntry(state.cardLayouts, activeCardLayoutKey, {
          [field.key]: clampNumber(range.value, field.min, field.max, field.defaultValue),
        });
        applyCardLayouts(canvas, state.cardLayouts);
        fitCardTextToFixedHeight(canvas);
        syncCardLayoutPanel();
        saveUiState();
        scheduleRender();
      });

      return { field, range, value };
    });

    cardLayoutResetBtn?.addEventListener("click", () => {
      if (!activeCardLayoutKey) {
        flashStatus("请先点击预览里的卡片");
        return;
      }

      state.cardLayouts = setCardLayoutEntry(state.cardLayouts, activeCardLayoutKey, CARD_LAYOUT_DEFAULTS);
      applyCardLayouts(canvas, state.cardLayouts);
      fitCardTextToFixedHeight(canvas);
      syncCardLayoutPanel();
      saveUiState();
      scheduleRender();
      flashStatus("已重置当前卡片参数");
    });

    syncCardLayoutPanel();
  }

  function getCardLayoutElementFromTarget(target) {
    const element = target && target.nodeType === Node.ELEMENT_NODE
      ? target
      : target?.parentElement;
    const card = element?.closest?.("[data-card-layout-key].layout-editable-card, .knowledge-cluster-fragment[data-card-layout-key]");

    return card && canvas.contains(card) ? card : null;
  }

  function getCardTitleForPanel(card) {
    const title = card?.querySelector?.(":scope .knowledge-cluster-title, :scope .question-card-title, :scope .question-answer-item-title");
    const text = (title?.textContent || card?.textContent || "")
      .replace(/\s+/g, " ")
      .trim();

    return text ? text.slice(0, 28) : "已选卡片";
  }

  function syncCardLayoutPanel() {
    mountCardLayoutPanel();

    if (!cardLayoutPanel || !cardLayoutFields) {
      return;
    }

    const hasActiveCard = Boolean(activeCardLayoutKey && activeCardElement);
    const entry = getCardLayoutEntry(state.cardLayouts, activeCardLayoutKey);

    cardLayoutPanel.hidden = !hasActiveCard;

    if (cardLayoutTarget) {
      cardLayoutTarget.textContent = hasActiveCard
        ? getCardTitleForPanel(activeCardElement)
        : "点击预览里的卡片";
    }

    cardLayoutControls.forEach((control) => {
      const value = hasActiveCard ? entry[control.field.key] : control.field.defaultValue;

      control.range.disabled = !hasActiveCard;
      control.range.value = String(value);
      updateRangeControlVisual(control.range);
      updateNumericDisplay(
        control.value,
        value,
        control.field.formatValue,
        control.field.step,
        !hasActiveCard,
      );
    });
  }

  function syncCardLayoutSelection() {
    Array.from(canvas.querySelectorAll(".is-card-layout-selected")).forEach((element) => {
      element.classList.remove("is-card-layout-selected");
    });

    activeCardElement = activeCardLayoutKey
      ? getInteractiveCardLayoutTargets(canvas).find((card) => getCardLayoutKey(card) === activeCardLayoutKey) || null
      : null;

    if (activeCardLayoutKey) {
      getInteractiveCardLayoutTargets(canvas).forEach((card) => {
        card.classList.toggle("is-card-layout-selected", getCardLayoutKey(card) === activeCardLayoutKey);
      });
    }

    syncCardLayoutPanel();
  }

  function selectCardLayout(card, { flash = false } = {}) {
    const key = getCardLayoutKey(card);

    if (!key) {
      return false;
    }

    activeCardLayoutKey = key;
    activeCardElement = card;
    selectElementStyleGroup("card");
    syncCardLayoutSelection();

    if (flash) {
      flashStatus("已选中卡片，可调宽高、边距和文字比例");
    }

    return true;
  }

  function clearCardLayoutSelection() {
    activeCardLayoutKey = "";
    activeCardElement = null;
    syncCardLayoutSelection();
  }

  function getCurrentPreviewCardOrder() {
    const keys = [];
    const seen = new Set();

    getInteractiveCardLayoutTargets(canvas).forEach((card) => {
      const key = getCardLayoutKey(card);

      if (!key || seen.has(key)) {
        return;
      }

      seen.add(key);
      keys.push(key);
    });

    return keys;
  }

  function moveCardOrderKey(order, key, targetKey, position) {
    if (!key || !targetKey || key === targetKey) {
      return normalizeCardOrder(order);
    }

    const keys = normalizeCardOrder(order).filter((item) => item !== key);
    const targetIndex = keys.indexOf(targetKey);

    if (targetIndex === -1) {
      keys.push(key);
      return keys;
    }

    keys.splice(position === "after" ? targetIndex + 1 : targetIndex, 0, key);
    return keys;
  }

  function clearCardLayoutDropState() {
    Array.from(canvas.querySelectorAll(".is-card-drop-before, .is-card-drop-after")).forEach((element) => {
      element.classList.remove("is-card-drop-before", "is-card-drop-after");
    });
  }

  function markCardLayoutDropTarget(card, position) {
    clearCardLayoutDropState();

    if (!card || !position) {
      return;
    }

    card.classList.add(position === "before" ? "is-card-drop-before" : "is-card-drop-after");
  }

  function getCardDropTargetFromPoint(event, draggedKey = "") {
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const card = getCardLayoutElementFromTarget(target);
    const targetKey = getCardLayoutKey(card);

    if (!card || !targetKey || targetKey === draggedKey) {
      return { card: null, targetKey: "", position: "" };
    }

    const rect = card.getBoundingClientRect();
    return {
      card,
      targetKey,
      position: event.clientY > rect.top + rect.height / 2 ? "after" : "before",
    };
  }

  function getAdjacentCardDropTarget(order, key, deltaY) {
    const keys = normalizeCardOrder(order);
    const currentIndex = keys.indexOf(key);

    if (currentIndex === -1 || Math.abs(deltaY) < 10) {
      return { targetKey: "", position: "" };
    }

    if (deltaY > 0) {
      return { targetKey: keys[currentIndex + 1] || "", position: "after" };
    }

    return { targetKey: keys[currentIndex - 1] || "", position: "before" };
  }

  function mountCardDragHandles(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }

    Array.from(root.querySelectorAll(".card-layout-drag-handle")).forEach((handle) => handle.remove());

    getInteractiveCardLayoutTargets(root).forEach((card) => {
      const key = getCardLayoutKey(card);

      if (!key || card.querySelector(":scope > .card-layout-drag-handle")) {
        return;
      }

      const handle = document.createElement("button");
      handle.type = "button";
      handle.className = "card-layout-drag-handle";
      handle.dataset.serializationSkip = "true";
      handle.setAttribute("contenteditable", "false");
      handle.setAttribute("aria-label", "上下拖动卡片");
      handle.title = "上下拖动卡片";
      handle.textContent = "::";
      card.appendChild(handle);
    });
  }

  function startCardLayoutDrag(card, handle, event) {
    const key = getCardLayoutKey(card);

    if (!key) {
      return false;
    }

    selectCardLayout(card);
    cardDragState = {
      key,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      targetKey: "",
      position: "",
      didMove: false,
    };

    card.classList.add("is-card-layout-dragging");
    try {
      handle.setPointerCapture?.(event.pointerId);
    } catch (_error) {
      // Synthetic pointer events may not create an active capture target.
    }
    event.preventDefault();
    event.stopPropagation();
    window.getSelection()?.removeAllRanges();
    return true;
  }

  function updateCardLayoutDrag(event) {
    if (!cardDragState || event.pointerId !== cardDragState.pointerId) {
      return;
    }

    const distance = Math.hypot(event.clientX - cardDragState.startX, event.clientY - cardDragState.startY);
    cardDragState.lastX = event.clientX;
    cardDragState.lastY = event.clientY;
    cardDragState.didMove = true;

    if (distance < 4) {
      return;
    }

    const { card, targetKey, position } = getCardDropTargetFromPoint(event, cardDragState.key);

    if (!card || !targetKey || !position) {
      cardDragState.targetKey = "";
      cardDragState.position = "";
      clearCardLayoutDropState();
      return;
    }

    cardDragState.targetKey = targetKey;
    cardDragState.position = position;
    markCardLayoutDropTarget(card, position);
    event.preventDefault();
  }

  function finishCardLayoutDrag(event) {
    if (!cardDragState || event.pointerId !== cardDragState.pointerId) {
      return;
    }

    Array.from(canvas.querySelectorAll(".is-card-layout-dragging")).forEach((card) => {
      card.classList.remove("is-card-layout-dragging");
    });
    clearCardLayoutDropState();

    const { key, startY, lastY, didMove } = cardDragState;
    let { targetKey, position } = cardDragState;
    cardDragState = null;

    const baseOrder = getCurrentPreviewCardOrder();
    const pointTarget = getCardDropTargetFromPoint(event, key);
    if (pointTarget.targetKey && pointTarget.position) {
      targetKey = pointTarget.targetKey;
      position = pointTarget.position;
    }

    if (!targetKey || !position) {
      const endY = Number.isFinite(event.clientY) ? event.clientY : lastY;
      const fallbackTarget = getAdjacentCardDropTarget(baseOrder, key, endY - startY);
      targetKey = fallbackTarget.targetKey;
      position = fallbackTarget.position;
    }

    if (!didMove || !targetKey || !position) {
      return;
    }

    state.cardOrder = moveCardOrderKey(baseOrder, key, targetKey, position);
    saveUiState();
    renderNow();
    flashStatus("已调整卡片顺序");
  }

  function fitCardTextToFixedHeight(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }

    getAllCardLayoutTargets(root).forEach((card) => {
      const layout = getCardLayoutEntry(state.cardLayouts, getCardLayoutKey(card));
      card.style.removeProperty("--card-auto-text-scale");

      if (layout.height <= 0) {
        return;
      }

      const maxHeight = Math.max(1, layout.height);
      let scale = 1;

      while (scale > 0.68 && card.scrollHeight > maxHeight + 2) {
        scale = Number((scale - 0.04).toFixed(2));
        card.style.setProperty("--card-auto-text-scale", String(scale));
      }
    });
  }

  function getDocumentOptions(title = "") {
    return {
      title,
      customFonts: getCustomFontEntries(),
      ...getArticleExportOptions(state),
      ...getPageLayoutOptions(state),
    };
  }

  function updateStatusText() {
    const modeLabel = MODE_METADATA[state.mode].title;
    const themeLabel = THEME_LABELS[state.theme];

    statusText.textContent = state.latestCharacterCount
      ? `已更新 ${state.latestCharacterCount} 字 · ${Math.max(1, state.latestPageCount)} 页 · ${modeLabel} · ${themeLabel}`
      : `等待输入 · ${modeLabel} · ${themeLabel}`;
  }

  function flashStatus(message) {
    window.clearTimeout(statusTimer);
    statusText.textContent = message;
    statusTimer = window.setTimeout(updateStatusText, 1800);
  }

  function showPersistentStatus(message) {
    window.clearTimeout(statusTimer);
    statusText.textContent = message;
  }

  function setAiNoteStatus(message) {
    if (aiNoteStatus) {
      aiNoteStatus.textContent = message || "";
    }
  }

  function updateCustomFontStatus(message = "") {
    if (!customFontStatus) {
      return;
    }

    if (message) {
      customFontStatus.textContent = message;
      return;
    }

    const entries = getCustomFontEntries();
    customFontStatus.textContent = entries.length
      ? `已导入 ${entries.length} 个字体`
      : "支持 TTF / OTF / WOFF";
  }

  function syncCustomFontSelectOptions() {
    const selects = [
      globalFontFamilySelect,
      bodyFontFamilySelect,
      headingFontFamilySelect,
      previewFontFamilySelect,
    ].filter(Boolean);
    const entries = getCustomFontEntries();

    selects.forEach((select) => {
      Array.from(select.querySelectorAll("[data-custom-font-option]")).forEach((option) => {
        option.remove();
      });

      entries.forEach((entry) => {
        const option = document.createElement("option");
        option.value = entry.key;
        option.textContent = `自定义：${entry.label}`;
        option.dataset.customFontOption = "true";
        select.appendChild(option);
      });
    });

    updateCustomFontStatus();
  }

  async function importCustomFontFiles(files) {
    const fileList = Array.from(files || []);
    const imported = [];

    for (const file of fileList) {
      if (!isSupportedCustomFontFile(file)) {
        continue;
      }

      const dataUrl = await readFileAsDataUrl(file);
      const entry = createCustomFontEntryFromFile(file, dataUrl);
      const registered = entry ? await registerCustomFontEntry(entry) : null;

      if (!registered) {
        continue;
      }

      await persistCustomFontEntry(registered);
      imported.push(registered);
    }

    return imported;
  }

  mountExportBackgroundPresets();
  mountElementStylePanel();
  mountCardLayoutPanel();
  await restoreCustomFontsFromStorage();
  syncCustomFontSelectOptions();

  function preserveSelectionForToolbar() {
    preservePreviewSelection = true;
  }

  function releaseSelectionAfterToolbar() {
    window.setTimeout(() => {
      preservePreviewSelection = false;
    }, 0);
  }

  function commitPreviewFormatting(message, { rerender = true, deferRerender = false } = {}) {
    syncPreviewToTextarea();

    if (rerender) {
      renderNow();
    } else if (deferRerender) {
      window.clearTimeout(renderTimer);
      renderTimer = window.setTimeout(renderNow, 900);
    }

    if (message) {
      flashStatus(message);
    }
  }

  function applySelectedTextStyle(stylePatch, message) {
    preserveSelectionForToolbar();

    if (applyInlineTextStyleToPreviewSelection(canvas, stylePatch, previewSelectionRange)) {
      commitPreviewFormatting(message, { rerender: false, deferRerender: true });
      releaseSelectionAfterToolbar();
      return true;
    }

    if (applyBlockTextStyleToPreviewTargets(canvas, stylePatch, previewSelectionRange, previewSelectionHost)) {
      commitPreviewFormatting(message, { rerender: false, deferRerender: true });
      releaseSelectionAfterToolbar();
      return true;
    }

    if (document.activeElement === textarea && applyInlineTextStyleToTextarea(textarea, stylePatch)) {
      renderNow();
      flashStatus(message);
      releaseSelectionAfterToolbar();
      return true;
    }

    releaseSelectionAfterToolbar();
    return false;
  }

  function applySelectedParagraphStyle(stylePatch, message) {
    preserveSelectionForToolbar();

    if (!applyBlockTextStyleToPreviewTargets(canvas, stylePatch, previewSelectionRange, previewSelectionHost)) {
      releaseSelectionAfterToolbar();
      return false;
    }

    commitPreviewFormatting(message, { rerender: false, deferRerender: true });
    releaseSelectionAfterToolbar();
    return true;
  }

  function stepSelectedParagraphStyle(action) {
    const targets = getPreviewBlockStyleTargets(canvas, previewSelectionRange, previewSelectionHost);

    if (!targets.length) {
      return false;
    }

    targets.forEach((element) => {
      const currentStyle = getBlockTextStyleFromElement(element);

      if (action === "indent-increase") {
        setBlockTextStyleOnElement(element, { indent: Math.min(96, (Number(currentStyle.indent) || 0) + 8) });
        return;
      }

      if (action === "indent-decrease") {
        setBlockTextStyleOnElement(element, { indent: Math.max(0, (Number(currentStyle.indent) || 0) - 8) });
        return;
      }

      if (action === "spacing-increase") {
        setBlockTextStyleOnElement(element, { spacing: Math.min(72, (Number(currentStyle.spacing) || 0) + 4) });
        return;
      }

      if (action === "spacing-decrease") {
        setBlockTextStyleOnElement(element, { spacing: Math.max(0, (Number(currentStyle.spacing) || 0) - 4) });
      }
    });

    commitPreviewFormatting("已调整段落", { rerender: false, deferRerender: true });
    return true;
  }

  function findPreviewTableById(tableId, tableRowOffset = null) {
    const tables = Array.from(canvas.querySelectorAll("table.article-table[data-table-id]"))
      .filter((table) => table.dataset.tableId === tableId);

    if (tableRowOffset != null) {
      const offsetKey = String(tableRowOffset);
      const offsetMatch = tables.find((table) => getTablePaginationFragmentKey(table) === offsetKey);

      if (offsetMatch) {
        return offsetMatch;
      }

      return null;
    }

    return tables[0] || null;
  }

  function getTableCellFromEventTarget(target) {
    const element = target && target.nodeType === 1
      ? target
      : target?.parentElement;

    if (!element || element.closest?.(".table-resize-handle")) {
      return null;
    }

    const cell = element.closest?.("th, td");

    if (!cell || !canvas.contains(cell)) {
      return null;
    }

    const table = cell.closest("table.article-table[data-table-id]");
    const row = Number(cell.dataset.tableRow);
    const col = Number(cell.dataset.tableCol);

    if (!table || !Number.isInteger(row) || !Number.isInteger(col)) {
      return null;
    }

    return {
      cell,
      col,
      row,
      table,
      tableId: table.dataset.tableId,
      tableRowOffset: getTablePaginationFragmentKey(table),
    };
  }

  function setTableToolButtonState(button, available, unavailableTitle) {
    if (!button) {
      return;
    }

    button.disabled = false;
    button.classList.toggle("is-unavailable", !available);
    button.setAttribute("aria-disabled", available ? "false" : "true");
    button.title = available ? "" : unavailableTitle;
  }

  function refreshActiveTableCellSelection() {
    Array.from(canvas.querySelectorAll(".is-table-cell-selected")).forEach((cell) => {
      cell.classList.remove("is-table-cell-selected");
    });
    Array.from(canvas.querySelectorAll(".article-table-editor.has-cell-selection")).forEach((wrapper) => {
      wrapper.classList.remove("has-cell-selection");
    });

    const table = activeTableCellSelection
      ? findPreviewTableById(activeTableCellSelection.tableId, activeTableCellSelection.tableRowOffset)
      : null;

    if (!table) {
      activeTableCellSelection = null;
    } else {
      getUniqueTableEntriesInRect(table, activeTableCellSelection).forEach((entry) => {
        entry.cell.classList.add("is-table-cell-selected");
      });
      table.closest(".article-table-editor")?.classList.add("has-cell-selection");
    }

    setTableToolButtonState(
      mergeCellsBtn,
      Boolean(table && activeTableCellSelection && canMergeTableSelection(table, activeTableCellSelection)),
      "先在表格里拖拽框选连续单元格，或点一个格后按 Shift 点另一个格",
    );
    setTableToolButtonState(
      splitCellBtn,
      Boolean(table && activeTableCellSelection && canSplitTableSelection(table, activeTableCellSelection)),
      "先选中一个已经合并的单元格",
    );
  }

  function setActiveTableCellSelection(nextSelection) {
    activeTableCellSelection = nextSelection
      ? {
        anchorCol: Number(nextSelection.anchorCol),
        anchorRow: Number(nextSelection.anchorRow),
        endCol: Number(nextSelection.endCol),
        endRow: Number(nextSelection.endRow),
        startCol: Number(nextSelection.startCol),
        startRow: Number(nextSelection.startRow),
        tableId: String(nextSelection.tableId || ""),
        tableRowOffset: String(nextSelection.tableRowOffset ?? ""),
      }
      : null;

    refreshActiveTableCellSelection();
  }

  function openPreviewFormulaEditor(mathElement) {
    if (!mathElement) {
      return false;
    }

    const mathStyles = window.getComputedStyle(mathElement);
    const mathFontFamily = mathStyles.getPropertyValue("--user-body-font-family") || mathStyles.fontFamily;

    openFormulaEditor({
      source: mathElement.dataset.mdMathSource || "",
      chemSource: mathElement.dataset.mdChemSource || "",
      mode: getFormulaEditorModeForMathElement(mathElement),
      lockMode: true,
      fontFamily: mathFontFamily,
      focusTarget: canvas,
      onApply: ({ input, latex, mode }) => {
        if (!updatePreviewMathElement(mathElement, latex, mode, input)) {
          return false;
        }

        syncPreviewToTextarea();
        renderNow();
        return true;
      },
      flashStatus,
    });
    return true;
  }

  function handlePreviewPointerDown(event) {
    if (event.button !== 0 || event.target.closest?.(".table-resize-handle")) {
      return;
    }

    const dragHandle = event.target.closest?.(".card-layout-drag-handle");
    if (dragHandle) {
      const card = getCardLayoutElementFromTarget(dragHandle);
      if (card && startCardLayoutDrag(card, dragHandle, event)) {
        return;
      }
    }

    const anchor = getTableCellFromEventTarget(event.target);

    if (!anchor) {
      return;
    }

    tableCellSelectionDrag = {
      anchorCol: anchor.col,
      anchorRow: anchor.row,
      didDrag: false,
      startX: event.clientX,
      startY: event.clientY,
      tableId: anchor.tableId,
      tableRowOffset: anchor.tableRowOffset,
    };

    const wrapper = anchor.table.closest(".article-table-editor");
    wrapper?.classList.add("is-selecting-cells");

    const updateDragSelection = (target) => {
      const current = getTableCellFromEventTarget(target);

      if (
        !current
        || current.tableId !== tableCellSelectionDrag.tableId
        || current.tableRowOffset !== tableCellSelectionDrag.tableRowOffset
      ) {
        return false;
      }

      setActiveTableCellSelection({
        anchorCol: tableCellSelectionDrag.anchorCol,
        anchorRow: tableCellSelectionDrag.anchorRow,
        endCol: current.col,
        endRow: current.row,
        startCol: tableCellSelectionDrag.anchorCol,
        startRow: tableCellSelectionDrag.anchorRow,
        tableId: tableCellSelectionDrag.tableId,
        tableRowOffset: tableCellSelectionDrag.tableRowOffset,
      });
      return true;
    };

    const onPointerMove = (moveEvent) => {
      if (!tableCellSelectionDrag) {
        return;
      }

      const distance = Math.hypot(moveEvent.clientX - tableCellSelectionDrag.startX, moveEvent.clientY - tableCellSelectionDrag.startY);
      const target = document.elementFromPoint(moveEvent.clientX, moveEvent.clientY);

      if (distance < 4 && !tableCellSelectionDrag.didDrag) {
        return;
      }

      if (updateDragSelection(target)) {
        tableCellSelectionDrag.didDrag = true;
        moveEvent.preventDefault();
        window.getSelection()?.removeAllRanges();
      }
    };

    const stopDrag = (upEvent) => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", stopDrag);
      window.removeEventListener("pointercancel", stopDrag);
      wrapper?.classList.remove("is-selecting-cells");

      if (tableCellSelectionDrag?.didDrag) {
        suppressNextTableClick = true;
        upEvent.preventDefault();
        window.getSelection()?.removeAllRanges();
        window.setTimeout(() => {
          suppressNextTableClick = false;
        }, 0);
      }

      tableCellSelectionDrag = null;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);
  }

  function handlePreviewClick(event) {
    const clickedCard = getCardLayoutElementFromTarget(event.target);
    if (clickedCard && !event.target.closest?.(".card-layout-drag-handle")) {
      selectCardLayout(clickedCard);
      selectElementStyleGroup("card", { open: false });
    } else if (!event.target.closest?.(".element-style-panel, .card-layout-panel")) {
      clearCardLayoutSelection();
      selectElementStyleGroup(getGroupIdForPreviewElement(event.target), { open: false });
    }

    const mathElement = getPreviewMathElement(canvas, event.target);

    if (mathElement) {
      event.preventDefault();
      setActiveTableCellSelection(null);
      openPreviewFormulaEditor(mathElement);
      return;
    }

    if (suppressNextTableClick) {
      suppressNextTableClick = false;
      event.preventDefault();
      return;
    }

    const selectedCell = getTableCellFromEventTarget(event.target);

    if (!selectedCell) {
      setActiveTableCellSelection(null);
      return;
    }

    if (
      event.shiftKey
      && activeTableCellSelection
      && activeTableCellSelection.tableId === selectedCell.tableId
      && activeTableCellSelection.tableRowOffset === selectedCell.tableRowOffset
    ) {
      setActiveTableCellSelection({
        anchorCol: activeTableCellSelection.anchorCol,
        anchorRow: activeTableCellSelection.anchorRow,
        endCol: selectedCell.col,
        endRow: selectedCell.row,
        startCol: activeTableCellSelection.anchorCol,
        startRow: activeTableCellSelection.anchorRow,
        tableId: selectedCell.tableId,
        tableRowOffset: selectedCell.tableRowOffset,
      });
      return;
    }

    setActiveTableCellSelection({
      anchorCol: selectedCell.col,
      anchorRow: selectedCell.row,
      endCol: selectedCell.col,
      endRow: selectedCell.row,
      startCol: selectedCell.col,
      startRow: selectedCell.row,
      tableId: selectedCell.tableId,
      tableRowOffset: selectedCell.tableRowOffset,
    });
  }

  function syncPreviewToTextarea() {
    window.clearTimeout(previewSyncTimer);

    const markdown = serializeEditableArticleToMarkdown(canvas);
    textarea.value = markdown;
    previewHasPendingSync = false;

    state.latestCharacterCount = markdown.trim().length;
    state.latestBlockCount = countTrackedBlocks(canvas);

    try {
      window.localStorage.setItem(STORAGE_KEYS.markdown, markdown);
    } catch (_error) {
      // Ignore storage failures in restricted browsers.
    }

    updateStatusText();
    return markdown;
  }

  function schedulePreviewSync() {
    previewHasPendingSync = true;
    window.clearTimeout(previewSyncTimer);
    previewSyncTimer = window.setTimeout(() => {
      syncPreviewToTextarea();
      window.requestAnimationFrame(() => {
        syncMountedTableEditors(canvas);
        mountSvgMindmaps(canvas);
      });
    }, 120);
  }

  function handlePreviewSelectionChange() {
    const selection = window.getSelection();

    if (!selection || !selection.rangeCount) {
      previewSelectionRange = null;
      return;
    }

    const range = selection.getRangeAt(0);
    if (!isRangeInsideRoot(canvas, range)) {
      previewSelectionRange = null;
      return;
    }

    const selectedElement = range.startContainer.nodeType === Node.ELEMENT_NODE
      ? range.startContainer
      : range.startContainer.parentElement;

    if (selectedElement) {
      const selectedCard = getCardLayoutElementFromTarget(selectedElement);
      if (selectedCard) {
        selectCardLayout(selectedCard);
        selectElementStyleGroup("card", { open: false });
        if (range.collapsed) {
          return;
        }
        previewSelectionRange = range.cloneRange();
        return;
      }

      selectElementStyleGroup(getGroupIdForPreviewElement(selectedElement), { open: false });
    }

    if (range.collapsed) {
      return;
    }

    previewSelectionRange = range.cloneRange();
  }

  function handlePreviewKeydown(event) {
    const mathElement = getPreviewMathElement(canvas, event.target);

    if (mathElement && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openPreviewFormulaEditor(mathElement);
      return;
    }

    const editableHost = getEditablePreviewHost(canvas, event.target);

    if (!editableHost) {
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      insertLineBreakAtSelection();
      schedulePreviewSync();
    }
  }

  function handlePreviewPaste(event) {
    const editableHost = getEditablePreviewHost(canvas, event.target);

    if (!editableHost) {
      return;
    }

    event.preventDefault();
    insertPlainTextAtSelection(event.clipboardData ? event.clipboardData.getData("text/plain") : "");
    schedulePreviewSync();
  }

  function handlePreviewInput(event) {
    if (!getEditablePreviewHost(canvas, event.target)) {
      return;
    }

    schedulePreviewSync();
  }

  function handleMergeSelectedCells() {
    const table = activeTableCellSelection
      ? findPreviewTableById(activeTableCellSelection.tableId, activeTableCellSelection.tableRowOffset)
      : null;

    if (!table || !canMergeTableSelection(table, activeTableCellSelection)) {
      flashStatus("请先在预览区框选同一张表格里的连续单元格");
      return;
    }

    const mergedCell = mergeTableSelection(table, activeTableCellSelection);

    if (!mergedCell) {
      flashStatus("当前单元格区域暂时无法合并");
      return;
    }

    setActiveTableCellSelection({
      anchorCol: mergedCell.col,
      anchorRow: mergedCell.row,
      endCol: mergedCell.col,
      endRow: mergedCell.row,
      startCol: mergedCell.col,
      startRow: mergedCell.row,
      tableId: table.dataset.tableId,
      tableRowOffset: getTablePaginationFragmentKey(table),
    });
    syncPreviewToTextarea();
    renderNow();
    flashStatus("已合并单元格");
  }

  function handleSplitSelectedCell() {
    const table = activeTableCellSelection
      ? findPreviewTableById(activeTableCellSelection.tableId, activeTableCellSelection.tableRowOffset)
      : null;

    if (!table || !canSplitTableSelection(table, activeTableCellSelection)) {
      flashStatus("请先选中一个已合并的单元格");
      return;
    }

    const splitCell = splitTableSelection(table, activeTableCellSelection);

    if (!splitCell) {
      flashStatus("当前单元格暂时无法取消合并");
      return;
    }

    setActiveTableCellSelection({
      anchorCol: splitCell.col,
      anchorRow: splitCell.row,
      endCol: splitCell.col,
      endRow: splitCell.row,
      startCol: splitCell.col,
      startRow: splitCell.row,
      tableId: table.dataset.tableId,
      tableRowOffset: getTablePaginationFragmentKey(table),
    });
    syncPreviewToTextarea();
    renderNow();
    flashStatus("已取消合并");
  }

  function saveUiState() {
    try {
      window.localStorage.setItem(STORAGE_KEYS.theme, state.theme);
      window.localStorage.setItem(STORAGE_KEYS.mode, state.mode);
      window.localStorage.setItem(STORAGE_KEYS.questionAnswerLayout, state.questionAnswerLayout);
      window.localStorage.setItem(STORAGE_KEYS.layoutPreset, state.layoutPreset);
      window.localStorage.setItem(STORAGE_KEYS.layoutPresetByMode, JSON.stringify(state.layoutPresetByMode));
      window.localStorage.setItem(STORAGE_KEYS.bodyFontFamily, state.bodyFontFamily);
      window.localStorage.setItem(STORAGE_KEYS.headingFontFamily, state.headingFontFamily);
      window.localStorage.setItem(STORAGE_KEYS.paragraphAlign, state.paragraphAlign);
      ARTICLE_STYLE_CONTROLS.forEach((control) => {
        window.localStorage.setItem(control.storageKey, String(state[control.key]));
      });
      ARTICLE_PARAGRAPH_CONTROLS.forEach((control) => {
        window.localStorage.setItem(control.storageKey, String(state[control.key]));
      });
      HEADING_LINE_HEIGHT_CONTROLS.forEach((control) => {
        window.localStorage.setItem(control.storageKey, String(state[control.key]));
      });
      HEADING_SPACE_CONTROLS.forEach((control) => {
        window.localStorage.setItem(control.storageKey, String(state[control.key]));
      });
      PAGE_STYLE_CONTROLS.forEach((control) => {
        window.localStorage.setItem(control.storageKey, String(state[control.key]));
      });
      window.localStorage.setItem(STORAGE_KEYS.lineHeight, String(state.lineHeight));
      window.localStorage.setItem(STORAGE_KEYS.letterSpacing, String(state.letterSpacing));
      window.localStorage.setItem(STORAGE_KEYS.pageHeaderEnabled, String(state.pageHeaderEnabled));
      window.localStorage.setItem(STORAGE_KEYS.pageHeaderText, state.pageHeaderText);
      window.localStorage.setItem(STORAGE_KEYS.watermarkEnabled, String(state.watermarkEnabled));
      window.localStorage.setItem(STORAGE_KEYS.watermarkText, state.watermarkText);
      window.localStorage.setItem(STORAGE_KEYS.paginationStrategy, state.paginationStrategy);
      window.localStorage.setItem(STORAGE_KEYS.typographyVersion, TYPOGRAPHY_BASELINE_VERSION);
      window.localStorage.setItem(STORAGE_KEYS.elementStyles, JSON.stringify(normalizeElementStyles(state.elementStyles)));
      window.localStorage.setItem(STORAGE_KEYS.tableLayouts, JSON.stringify(state.tableLayouts));
      window.localStorage.setItem(STORAGE_KEYS.cardLayouts, JSON.stringify(normalizeCardLayouts(state.cardLayouts)));
      window.localStorage.setItem(STORAGE_KEYS.cardOrder, JSON.stringify(normalizeCardOrder(state.cardOrder)));
    } catch (_error) {
      // Ignore storage failures in restricted browsers.
    }

    persistExportBackgroundStorage(state);
  }

  function updateModeBenefitCard() {
    const meta = MODE_METADATA[state.mode];

    if (!meta || !modeBenefitTitle || !modeBenefitSummary || !modeBenefitList) {
      return;
    }

    modeBenefitTitle.textContent = meta.title;
    modeBenefitSummary.textContent = meta.summary;
    modeBenefitList.innerHTML = meta.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function applyUiState({ rerender = false } = {}) {
    syncLayoutPresetWithMode(state);
    state.paginationStrategy = sanitizeChoice(
      state.paginationStrategy,
      PAGINATION_STRATEGIES,
      DEFAULT_PAGINATION_STRATEGY,
    );
    state.elementStyles = normalizeElementStyles(state.elementStyles);
    state.cardLayouts = normalizeCardLayouts(state.cardLayouts);
    state.cardOrder = normalizeCardOrder(state.cardOrder);
    enforceTypeScale(state);
    const pageMetrics = getPageMetrics(state);

    document.body.dataset.theme = state.theme;
    document.body.dataset.layoutPreset = state.layoutPreset;
    canvas.dataset.mode = state.mode;
    canvas.dataset.layoutPreset = state.layoutPreset;
    canvas.dataset.questionAnswerLayout = state.questionAnswerLayout;
    measureCanvas.dataset.mode = state.mode;
    measureCanvas.dataset.layoutPreset = state.layoutPreset;
    measureCanvas.dataset.questionAnswerLayout = state.questionAnswerLayout;
    applyPageBackgroundStyleProperties(canvas, state);
    textarea.style.fontSize = `${Math.max(10, state.fontSize - 1)}px`;
    textarea.style.lineHeight = String(Math.max(1.1, state.lineHeight));
    textarea.style.letterSpacing = `${state.letterSpacing}px`;
    textarea.style.fontFamily = resolveFontFamilyStack(state.bodyFontFamily, DEFAULT_BODY_FONT_FAMILY);

    articleStyleControls.forEach((control) => {
      if (control.range) {
        control.range.value = String(state[control.key]);
      }

      if (control.value) {
        updateNumericDisplay(
          control.value,
          state[control.key],
          formatPixelValue,
          control.range ? Number(control.range.step || 1) : 1,
          Boolean(control.range && control.range.disabled),
        );
      }
    });
    paragraphControls.forEach((control) => {
      if (control.range) {
        control.range.value = String(state[control.key]);
      }

      if (control.value) {
        updateNumericDisplay(
          control.value,
          state[control.key],
          control.formatValue,
          control.range ? Number(control.range.step || 1) : 1,
          Boolean(control.range && control.range.disabled),
        );
      }
    });
    headingLineHeightControls.forEach((control) => {
      if (control.range) {
        control.range.value = String(state[control.key]);
      }

      if (control.value) {
        updateNumericDisplay(
          control.value,
          state[control.key],
          control.formatValue,
          control.range ? Number(control.range.step || 0.05) : 0.05,
          Boolean(control.range && control.range.disabled),
        );
      }
    });
    headingSpaceControls.forEach((control) => {
      if (control.range) {
        control.range.value = String(state[control.key]);
      }

      if (control.value) {
        updateNumericDisplay(
          control.value,
          state[control.key],
          control.formatValue,
          control.range ? Number(control.range.step || 1) : 1,
          Boolean(control.range && control.range.disabled),
        );
      }
    });

    pageStyleControls.forEach((control) => {
      if (control.range) {
        control.range.value = String(state[control.key]);
      }

      if (control.value) {
        updateNumericDisplay(
          control.value,
          state[control.key],
          control.formatValue,
          control.range ? Number(control.range.step || 1) : 1,
          Boolean(control.range && control.range.disabled),
        );
      }
    });

    if (lineHeightRange) {
      lineHeightRange.value = String(state.lineHeight);
    }

    if (lineHeightValue) {
      updateNumericDisplay(
        lineHeightValue,
        state.lineHeight,
        formatLineHeight,
        0.05,
        Boolean(lineHeightRange && lineHeightRange.disabled),
      );
    }

    if (letterSpacingRange) {
      letterSpacingRange.value = String(state.letterSpacing);
    }

    if (letterSpacingValue) {
      updateNumericDisplay(
        letterSpacingValue,
        state.letterSpacing,
        formatDecimalPixelValue,
        0.1,
        Boolean(letterSpacingRange && letterSpacingRange.disabled),
      );
    }

    if (globalFontFamilySelect) {
      globalFontFamilySelect.value = getGlobalFontFamilyValue(state);
    }

    if (bodyFontFamilySelect) {
      bodyFontFamilySelect.value = state.bodyFontFamily;
    }

    if (headingFontFamilySelect) {
      headingFontFamilySelect.value = state.headingFontFamily;
    }

    if (pageHeaderToggle) {
      pageHeaderToggle.checked = Boolean(state.pageHeaderEnabled);
    }

    if (pageHeaderInput) {
      pageHeaderInput.value = state.pageHeaderText;
      pageHeaderInput.disabled = !state.pageHeaderEnabled;
    }

    if (watermarkToggle) {
      watermarkToggle.checked = Boolean(state.watermarkEnabled);
    }

    if (watermarkInput) {
      watermarkInput.value = state.watermarkText;
      watermarkInput.disabled = !state.watermarkEnabled;
    }

    if (paginationStrategySelect) {
      paginationStrategySelect.value = sanitizeChoice(
        state.paginationStrategy,
        PAGINATION_STRATEGIES,
        DEFAULT_PAGINATION_STRATEGY,
      );
    }

    if (previewPaginationStrategySelect) {
      previewPaginationStrategySelect.value = sanitizeChoice(
        state.paginationStrategy,
        PAGINATION_STRATEGIES,
        DEFAULT_PAGINATION_STRATEGY,
      );
    }

    if (exportBackgroundName) {
      exportBackgroundName.textContent = getExportBackgroundLabel(state.exportBackgroundName, state.exportBackgroundSrc);
      exportBackgroundName.title = state.exportBackgroundName || "";
    }

    if (clearExportBackgroundBtn) {
      clearExportBackgroundBtn.disabled = !state.exportBackgroundSrc;
    }

    syncExportBackgroundPresets();

    const watermarkOpacityControl = pageStyleControls.find((control) => control.key === "watermarkOpacity");
    if (watermarkOpacityControl && watermarkOpacityControl.range) {
      watermarkOpacityControl.range.disabled = !state.watermarkEnabled;
      updateNumericDisplay(
        watermarkOpacityControl.value,
        state.watermarkOpacity,
        watermarkOpacityControl.formatValue,
        Number(watermarkOpacityControl.range.step || 1),
        Boolean(watermarkOpacityControl.range.disabled),
      );
    }

    applyArticleStyleProperties(measureCanvas, state, pageMetrics.contentWidthPx);
    measureCanvas.style.margin = "0";
    canvas.style.margin = "0";

    syncOptionButtons(themeButtons, "data-theme-option", state.theme);
    syncOptionButtons(modeButtons, "data-mode-option", state.mode);
    syncOptionButtons(paragraphAlignButtons, "data-paragraph-align", state.paragraphAlign);
    syncRangeControlVisuals();
    syncElementStylePanel();
    syncLayoutPresetButtons();
    syncQuestionAnswerLayoutControls();
    updateModeBenefitCard();
    saveUiState();
    updateStatusText();

    if (rerender) {
      scheduleRender();
      return;
    }

    window.requestAnimationFrame(() => {
      syncMountedTableEditors(canvas);
      mountSvgMindmaps(canvas);
      mountCardDragHandles(canvas);
      syncCardLayoutSelection();
      fitCardTextToFixedHeight(canvas);
      refreshActiveTableCellSelection();
    });
  }

  function renderNow() {
    if (previewHasPendingSync) {
      syncPreviewToTextarea();
    }

    const markdown = textarea.value;
    const html = renderMarkdown(markdown);
    const title = extractTitle(markdown);
    const pageMetrics = getPageMetrics(state);

    measureCanvas.innerHTML = html;
    measureCanvas.dataset.mode = state.mode;
    measureCanvas.dataset.layoutPreset = state.layoutPreset;
    measureCanvas.dataset.questionAnswerLayout = state.questionAnswerLayout;
    applyArticleStyleProperties(measureCanvas, state, pageMetrics.contentWidthPx);
    enhanceRenderedArticle(measureCanvas, state.mode);
    assignCardLayoutKeys(measureCanvas, state.mode);
    state.cardOrder = compactCardOrder(measureCanvas, state.cardOrder);
    applyCardOrder(measureCanvas, state.cardOrder);
    applyCardLayouts(measureCanvas, state.cardLayouts);
    fitCardTextToFixedHeight(measureCanvas);
    applyManagedTableLayoutsToTables(measureCanvas, state);

    canvas.dataset.mode = state.mode;
    canvas.dataset.layoutPreset = state.layoutPreset;
    canvas.dataset.questionAnswerLayout = state.questionAnswerLayout;
    canvas.style.margin = "0";
    const paginated = buildPaginatedPreview(measureCanvas, getDocumentOptions(title), title);
    canvas.replaceChildren(...Array.from(paginated.element.childNodes));
    markPreviewEditableNodes(canvas);
    applyCardLayouts(canvas, state.cardLayouts);
    mountCardDragHandles(canvas);
    syncCardLayoutSelection();
    fitCardTextToFixedHeight(canvas);
    mountManagedTableEditors(canvas, state, saveUiState, scheduleRender);
    mountSvgMindmaps(canvas);
    refreshActiveTableCellSelection();

    state.latestCharacterCount = markdown.trim().length;
    state.latestBlockCount = countTrackedBlocks(measureCanvas);
    state.latestPageCount = paginated.pageCount;
    previewHasPendingSync = false;

    try {
      window.localStorage.setItem(STORAGE_KEYS.markdown, markdown);
    } catch (_error) {
      // Ignore storage failures in restricted browsers.
    }

    updateStatusText();
    window.requestAnimationFrame(() => {
      syncMountedTableEditors(canvas);
      mountSvgMindmaps(canvas);
      mountCardDragHandles(canvas);
      syncCardLayoutSelection();
      fitCardTextToFixedHeight(canvas);
      refreshActiveTableCellSelection();
    });
  }

  function scheduleRender() {
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(renderNow, 80);
  }

  textarea.addEventListener("input", scheduleRender);
  textarea.addEventListener("focus", () => {
    previewSelectionRange = null;
    previewSelectionHost = null;
  });
  canvas.addEventListener("pointerdown", handlePreviewPointerDown);
  canvas.addEventListener("click", handlePreviewClick);
  canvas.addEventListener("keydown", handlePreviewKeydown);
  canvas.addEventListener("paste", handlePreviewPaste);
  canvas.addEventListener("input", handlePreviewInput);
  window.addEventListener("pointermove", updateCardLayoutDrag);
  window.addEventListener("pointerup", finishCardLayoutDrag);
  window.addEventListener("pointercancel", finishCardLayoutDrag);
  document.addEventListener("selectionchange", handlePreviewSelectionChange);
  bindMindmapSvgResizeUpdates();

  previewToolsToggle?.addEventListener("click", () => {
    setPreviewDrawer(previewEditorTools?.hidden ? "tools" : "");
  });

  inspectorToggle?.addEventListener("click", () => {
    setPreviewDrawer(elementStylePanel?.hidden ? "inspector" : "");
  });

  [
    ...textColorButtons,
    ...selectionAlignButtons,
    ...paragraphStepButtons,
    previewFontFamilySelect,
    previewFontSizeSelect,
    previewTextColorInput,
    clearTextStyleBtn,
    clearParagraphStyleBtn,
  ].filter(Boolean).forEach((control) => {
    control.addEventListener("mousedown", preserveSelectionForToolbar);
    control.addEventListener("blur", releaseSelectionAfterToolbar);
  });

  articleStyleControls.forEach((control) => {
    control.range?.addEventListener("input", (event) => {
      state[control.key] = clampNumber(event.target.value, control.min, control.max, control.defaultValue);
      state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      applyUiState({ rerender: true });
    });
  });

  paragraphControls.forEach((control) => {
    control.range?.addEventListener("input", (event) => {
      state[control.key] = clampNumber(event.target.value, control.min, control.max, control.defaultValue);
      state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      applyUiState({ rerender: true });
    });
  });

  headingLineHeightControls.forEach((control) => {
    control.range?.addEventListener("input", (event) => {
      state[control.key] = clampNumber(event.target.value, control.min, control.max, control.defaultValue);
      state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      applyUiState({ rerender: true });
    });
  });

  headingSpaceControls.forEach((control) => {
    control.range?.addEventListener("input", (event) => {
      state[control.key] = clampNumber(event.target.value, control.min, control.max, control.defaultValue);
      state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      applyUiState({ rerender: true });
    });
  });

  pageStyleControls.forEach((control) => {
    control.range?.addEventListener("input", (event) => {
      state[control.key] = clampNumber(event.target.value, control.min, control.max, control.defaultValue);
      applyUiState({ rerender: true });
    });
  });

  lineHeightRange?.addEventListener("input", (event) => {
    state.lineHeight = clampNumber(event.target.value, 1.1, 2.4, DEFAULT_LINE_HEIGHT);
    state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, "lineHeight", state.lineHeight);
    applyUiState({ rerender: true });
  });

  letterSpacingRange?.addEventListener("input", (event) => {
    state.letterSpacing = clampNumber(event.target.value, -0.5, 2, DEFAULT_LETTER_SPACING);
    applyUiState({ rerender: true });
  });

  globalFontFamilySelect?.addEventListener("change", (event) => {
    const font = sanitizeChoice(event.target.value, FONT_FAMILY_OPTIONS, "");
    if (!font) {
      applyUiState();
      return;
    }

    state.bodyFontFamily = font;
    state.headingFontFamily = font;
    applyUiState({ rerender: true });
  });

  bodyFontFamilySelect?.addEventListener("change", (event) => {
    state.bodyFontFamily = sanitizeChoice(event.target.value, FONT_FAMILY_OPTIONS, DEFAULT_BODY_FONT_FAMILY);
    applyUiState({ rerender: true });
  });

  headingFontFamilySelect?.addEventListener("change", (event) => {
    state.headingFontFamily = sanitizeChoice(event.target.value, FONT_FAMILY_OPTIONS, DEFAULT_HEADING_FONT_FAMILY);
    applyUiState({ rerender: true });
  });

  customFontInput?.addEventListener("change", async (event) => {
    const target = event.target;
    const files = target.files;

    if (!files || !files.length) {
      return;
    }

    customFontInput.disabled = true;
    updateCustomFontStatus("正在导入字体...");

    try {
      const imported = await importCustomFontFiles(files);

      if (!imported.length) {
        updateCustomFontStatus();
        flashStatus("请选择 .ttf / .otf / .woff / .woff2 字体文件");
        return;
      }

      syncCustomFontSelectOptions();
      const activeFont = imported[imported.length - 1];
      state.bodyFontFamily = activeFont.key;
      state.headingFontFamily = activeFont.key;
      applyUiState({ rerender: true });
      flashStatus(`已导入并应用字体：${activeFont.label}`);
    } catch (error) {
      console.error(error);
      updateCustomFontStatus();
      flashStatus("字体导入失败，请换一个字体文件试试");
    } finally {
      customFontInput.disabled = false;
      target.value = "";
    }
  });

  paragraphAlignButtons.forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });

    button.addEventListener("click", () => {
      state.paragraphAlign = sanitizeChoice(button.getAttribute("data-paragraph-align"), PARAGRAPH_ALIGN_OPTIONS, DEFAULT_PARAGRAPH_ALIGN);
      applyUiState({ rerender: true });
    });
  });

  previewFontFamilySelect?.addEventListener("change", (event) => {
    const font = sanitizeChoice(event.target.value, FONT_FAMILY_OPTIONS, "");

    if (!font || !applySelectedTextStyle({ font }, "已更新文字字体")) {
      flashStatus("请先在右侧预览中选中文字，或把光标放在目标段落里");
    }

    event.target.value = "";
  });

  previewFontSizeSelect?.addEventListener("change", (event) => {
    const size = clampNumber(event.target.value, 10, 64, "");

    if (size === "" || !applySelectedTextStyle({ size }, "已更新文字字号")) {
      flashStatus("请先在右侧预览中选中文字，或把光标放在目标段落里");
    }

    event.target.value = "";
  });

  previewTextColorInput?.addEventListener("input", (event) => {
    const color = normalizeHexColor(event.target.value, "");

    if (!color || !applySelectedTextStyle({ color }, "已更新文字颜色")) {
      flashStatus("请先在右侧预览中选中文字，或把光标放在目标段落里");
    }
  });

  textColorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const color = normalizeHexColor(button.getAttribute("data-text-color"), "");

      if (!color || !applySelectedTextStyle({ color }, "已更新文字颜色")) {
        flashStatus("请先在右侧预览中选中文字，或把光标放在目标段落里");
        return;
      }

      if (previewTextColorInput) {
        previewTextColorInput.value = color;
      }
    });
  });

  selectionAlignButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const align = sanitizeChoice(button.getAttribute("data-selection-align"), PARAGRAPH_ALIGN_OPTIONS, "");

      if (!align || !applySelectedParagraphStyle({ align }, "已更新段落对齐")) {
        flashStatus("请先在右侧预览中选中目标段落，或把光标放在段落里");
      }
    });
  });

  paragraphStepButtons.forEach((button) => {
    button.addEventListener("click", () => {
      preserveSelectionForToolbar();

      if (!stepSelectedParagraphStyle(String(button.getAttribute("data-paragraph-step") || ""))) {
        flashStatus("请先在右侧预览中选中目标段落，或把光标放在段落里");
      }

      releaseSelectionAfterToolbar();
    });
  });

  clearTextStyleBtn?.addEventListener("click", () => {
    preserveSelectionForToolbar();

    if (clearInlineTextStyleFromPreviewSelection(canvas, previewSelectionRange)) {
      commitPreviewFormatting("已清除局部文字样式");
      releaseSelectionAfterToolbar();
      return;
    }

    if (applyBlockTextStyleToPreviewTargets(
      canvas,
      { color: "", font: "", size: "" },
      previewSelectionRange,
      previewSelectionHost,
    )) {
      commitPreviewFormatting("已清除段落文字样式");
      releaseSelectionAfterToolbar();
      return;
    }

    releaseSelectionAfterToolbar();
    flashStatus("请先在右侧预览中选中文字，或把光标放在目标段落里");
  });

  clearParagraphStyleBtn?.addEventListener("click", () => {
    preserveSelectionForToolbar();

    if (applyBlockTextStyleToPreviewTargets(
      canvas,
      { align: "", indent: "", spacing: "" },
      previewSelectionRange,
      previewSelectionHost,
    )) {
      commitPreviewFormatting("已清除段落格式");
      releaseSelectionAfterToolbar();
      return;
    }

    releaseSelectionAfterToolbar();
    flashStatus("请先在右侧预览中选中目标段落，或把光标放在段落里");
  });

  pageHeaderToggle?.addEventListener("change", (event) => {
    state.pageHeaderEnabled = Boolean(event.target.checked);
    applyUiState({ rerender: true });
  });

  pageHeaderInput?.addEventListener("input", (event) => {
    state.pageHeaderText = String(event.target.value || "");
    applyUiState({ rerender: true });
  });

  watermarkToggle?.addEventListener("change", (event) => {
    state.watermarkEnabled = Boolean(event.target.checked);
    applyUiState({ rerender: true });
  });

  watermarkInput?.addEventListener("input", (event) => {
    state.watermarkText = String(event.target.value || "");
    applyUiState({ rerender: true });
  });

  paginationStrategySelect?.addEventListener("change", (event) => {
    state.paginationStrategy = sanitizeChoice(
      event.target.value,
      PAGINATION_STRATEGIES,
      DEFAULT_PAGINATION_STRATEGY,
    );
    applyUiState({ rerender: true });
  });

  previewPaginationStrategySelect?.addEventListener("change", (event) => {
    state.paginationStrategy = sanitizeChoice(
      event.target.value,
      PAGINATION_STRATEGIES,
      DEFAULT_PAGINATION_STRATEGY,
    );
    applyUiState({ rerender: true });
  });

  exportBackgroundInput?.addEventListener("change", async (event) => {
    const target = event.target;
    const file = target.files && target.files[0];

    if (!file) {
      return;
    }

    if (file.type && !file.type.startsWith("image/")) {
      flashStatus("请选择图片文件作为导出背景");
      target.value = "";
      return;
    }

    try {
      state.exportBackgroundSrc = normalizeBackgroundSource(await readImageFileAsExportDataUrl(file), DEFAULT_EXPORT_BACKGROUND_SRC);
      state.exportBackgroundName = normalizeBackgroundName(file.name, DEFAULT_EXPORT_BACKGROUND_NAME);
      applyUiState({ rerender: true });
      flashStatus("背景图已更新，预览和导出会同步使用");
    } catch (error) {
      console.error(error);
      flashStatus("背景图读取失败，请重试");
    } finally {
      target.value = "";
    }
  });

  clearExportBackgroundBtn?.addEventListener("click", () => {
    state.exportBackgroundSrc = DEFAULT_EXPORT_BACKGROUND_SRC;
    state.exportBackgroundName = DEFAULT_EXPORT_BACKGROUND_NAME;
    applyUiState({ rerender: true });
    flashStatus("已清除导出背景");
  });

  ribbonTabs.forEach((button, index) => {
    button.addEventListener("click", () => {
      applyRibbonTab(button.getAttribute("data-ribbon-tab"));
    });

    button.addEventListener("keydown", (event) => {
      if (!ribbonTabs.length) {
        return;
      }

      let nextIndex = null;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % ribbonTabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + ribbonTabs.length) % ribbonTabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = ribbonTabs.length - 1;
      }

      if (nextIndex == null) {
        return;
      }

      event.preventDefault();
      const nextButton = ribbonTabs[nextIndex];
      applyRibbonTab(nextButton.getAttribute("data-ribbon-tab"));
      nextButton.focus();
    });
  });

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.theme = sanitizeChoice(button.getAttribute("data-theme-option"), THEME_LABELS, DEFAULT_THEME);
      applyUiState({ rerender: true });
    });
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (isLayoutPresetForMode(state.layoutPreset, state.mode)) {
        state.layoutPresetByMode[state.mode] = state.layoutPreset;
      }

      state.mode = sanitizeChoice(button.getAttribute("data-mode-option"), MODE_METADATA, DEFAULT_MODE);
      state.layoutPreset = sanitizeLayoutPresetForMode(state.layoutPresetByMode[state.mode], state.mode);
      applyUiState({ rerender: true });
    });
  });

  brushButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const brushStyle = sanitizeChoice(button.getAttribute("data-brush-style"), BRUSH_LABELS, "glow");

      if (!applyBrushToTextarea(textarea, brushStyle)) {
        flashStatus("先在左侧 Markdown 输入框中选中文字，再点击笔刷");
        return;
      }

      renderNow();
      flashStatus(`已添加 ${BRUSH_LABELS[brushStyle]}`);
    });
  });

  loadSampleBtn?.addEventListener("click", () => {
    textarea.value = SAMPLE_MARKDOWN;
    state.mode = DEFAULT_MODE;
    applyUiState();
    renderNow();
  });

  fileInput?.addEventListener("change", (event) => {
    const target = event.target;
    const file = target.files && target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      textarea.value = String(reader.result || "");
      renderNow();
    };
    reader.readAsText(file, "utf-8");
    target.value = "";
  });

  aiGenerateBtn?.addEventListener("click", async () => {
    const subject = String(aiSubjectInput?.value || "").trim();
    const topic = String(aiTopicInput?.value || "").trim();
    const sourceText = String(aiSourceInput?.value || "").trim() || textarea.value.trim();

    if (!sourceText) {
      setAiNoteStatus("先粘贴原始资料，或在下方源文档区放入内容。");
      aiSourceInput?.focus();
      return;
    }

    aiGenerateBtn.disabled = true;
    setAiNoteStatus("正在生成...");
    showPersistentStatus("正在调用大模型生成学习笔记...");

    try {
      const markdown = await requestStudyNotesGeneration({
        sourceText,
        subject,
        topic,
      });

      textarea.value = markdown;
      state.mode = "knowledge";
      applyUiState();
      renderNow();
      setAiNoteStatus("已返回到 Markdown 源文档区。");
      flashStatus("学习笔记已生成");
    } catch (error) {
      console.error(error);
      const message = error && error.message ? error.message : "生成失败，请稍后重试。";
      setAiNoteStatus(message);
      flashStatus(message);
    } finally {
      aiGenerateBtn.disabled = false;
    }
  });

  pdfInput?.addEventListener("change", async (event) => {
    const target = event.target;
    const file = target.files && target.files[0];

    if (!file) {
      return;
    }

    pdfInput.disabled = true;
    pdfImportLabel?.classList.add("is-busy");
    showPersistentStatus("正在识别 PDF...");

    try {
      const result = await extractPdfFileToMarkdown(file, ({ pageNumber, pageLimit, totalPages }) => {
        const totalLabel = totalPages > pageLimit ? `${pageLimit}/${totalPages}` : String(totalPages);
        showPersistentStatus(`正在识别 PDF：第 ${pageNumber} / ${totalLabel} 页`);
      });

      textarea.value = result.markdown;
      state.mode = chooseModeForImportedPdf(result.markdown, result.stats);
      applyUiState();
      renderNow();

      const pageLabel = result.pageCount === result.totalPages
        ? `${result.totalPages} 页`
        : `${result.pageCount} / ${result.totalPages} 页`;
      flashStatus(`PDF 已转为 Markdown：${pageLabel}`);
    } catch (error) {
      console.error(error);
      flashStatus(error && error.message ? error.message : "PDF 识别失败，请换一个文件试试");
    } finally {
      pdfInput.disabled = false;
      pdfImportLabel?.classList.remove("is-busy");
      target.value = "";
    }
  });

  function setToolbarExportMenuOpen(isOpen) {
    if (!toolbarExportToggle || !toolbarExportMenu) {
      return;
    }

    toolbarExportMenu.hidden = !isOpen;
    toolbarExportToggle.setAttribute("aria-expanded", String(isOpen));
  }

  function closeToolbarExportMenu() {
    setToolbarExportMenuOpen(false);
  }

  toolbarExportToggle?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setToolbarExportMenuOpen(Boolean(toolbarExportMenu?.hidden));
  });

  toolbarExportMenu?.addEventListener("click", (event) => {
    event.stopPropagation();

    if (event.target && event.target.closest("button")) {
      closeToolbarExportMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      toolbarExportMenu?.hidden
      || toolbarExportMenu?.contains(event.target)
      || toolbarExportToggle?.contains(event.target)
    ) {
      return;
    }

    closeToolbarExportMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeToolbarExportMenu();
    }
  });

  downloadHtmlBtn?.addEventListener("click", () => {
    renderNow();
  }, { capture: true });

  downloadHtmlBtn?.addEventListener("click", async () => {
    try {
      const title = extractTitle(textarea.value);
      const html = await buildExportDocumentHtml(measureCanvas, getDocumentOptions(title));
      downloadFile(`${sanitizeFileName(title)}.html`, html, "text/html;charset=utf-8");
      flashStatus("HTML 已导出");
    } catch (error) {
      console.error(error);
      flashStatus("HTML 导出失败，请重试");
    }
  });

  downloadWordBtn?.addEventListener("click", () => {
    renderNow();
  }, { capture: true });

  bindWordExportButton(
    downloadWordBtn,
    textarea,
    measureCanvas,
    (title) => getDocumentOptions(title),
    { busy: false },
    flashStatus,
  );

  downloadPngBtn?.addEventListener("click", () => {
    renderNow();
  }, { capture: true });

  downloadPngBtn?.addEventListener("click", async () => {
    if (exportBusy) {
      return;
    }

    exportBusy = true;
    downloadPngBtn.disabled = true;
    flashStatus("正在导出 PNG...");

    try {
      const title = extractTitle(textarea.value);
      const blobs = await buildPngPageBlobs(measureCanvas, getDocumentOptions(title));
      downloadBlob(`${sanitizeFileName(title)}.png`, blobs[0]);
      flashStatus("PNG 已导出");
    } catch (error) {
      console.error(error);
      flashStatus("PNG 导出失败，请重试");
    } finally {
      exportBusy = false;
      downloadPngBtn.disabled = false;
    }
  });

  downloadImageGroupBtn?.addEventListener("click", () => {
    renderNow();
  }, { capture: true });

  downloadImageGroupBtn?.addEventListener("click", async () => {
    if (exportBusy) {
      return;
    }

    exportBusy = true;
    downloadImageGroupBtn.disabled = true;
    flashStatus("正在导出图片组...");

    try {
      const title = extractTitle(textarea.value);
      const fileBaseName = sanitizeFileName(title);
      const blobs = await buildPngPageBlobs(measureCanvas, getDocumentOptions(title));

      blobs.forEach((blob, index) => {
        const pageSuffix = String(index + 1).padStart(2, "0");
        window.setTimeout(() => {
          downloadBlob(`${fileBaseName}-${pageSuffix}.png`, blob);
        }, index * 150);
      });

      flashStatus(`图片组已导出 ${blobs.length} 张`);
    } catch (error) {
      console.error(error);
      flashStatus("图片组导出失败，请重试");
    } finally {
      exportBusy = false;
      downloadImageGroupBtn.disabled = false;
    }
  });

  brushButtons.forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
    }, { capture: true });

    button.addEventListener("click", (event) => {
      const brushStyle = sanitizeChoice(button.getAttribute("data-brush-style"), BRUSH_LABELS, "glow");

      if (!applyBrushToPreviewSelection(canvas, brushStyle, previewSelectionRange)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      syncPreviewToTextarea();
      flashStatus(`宸叉坊鍔?${BRUSH_LABELS[brushStyle]}`);
    }, { capture: true });
  });

  inlineStyleButtons.forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
    }, { capture: true });

    button.addEventListener("click", (event) => {
      const styleKey = sanitizeChoice(button.getAttribute("data-inline-style"), INLINE_STYLE_OPTIONS, "bold");

      if (!applyInlineStyleToPreviewSelection(canvas, styleKey, previewSelectionRange)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      syncPreviewToTextarea();
      flashStatus(`已应用${INLINE_STYLE_OPTIONS[styleKey].label}`);
    }, { capture: true });

    button.addEventListener("click", () => {
      const styleKey = sanitizeChoice(button.getAttribute("data-inline-style"), INLINE_STYLE_OPTIONS, "bold");

      if (!applyInlineStyleToTextarea(textarea, styleKey)) {
        flashStatus("请先在左侧 Markdown 或右侧预览里选中文本");
        return;
      }

      renderNow();
      flashStatus(`已应用${INLINE_STYLE_OPTIONS[styleKey].label}`);
    });
  });

  formulaEditorBtn?.addEventListener("mousedown", (event) => {
    event.preventDefault();
  }, { capture: true });

  formulaEditorBtn?.addEventListener("click", () => {
    const canvasStyles = window.getComputedStyle(canvas);
    openFormulaEditor({
      textarea,
      fontFamily: canvasStyles.getPropertyValue("--user-body-font-family") || canvasStyles.fontFamily,
      renderNow,
      flashStatus,
    });
  });

  forcePageBreakBtn?.addEventListener("mousedown", (event) => {
    event.preventDefault();
  }, { capture: true });

  forcePageBreakBtn?.addEventListener("click", (event) => {
    event.preventDefault();

    if (previewHasPendingSync) {
      syncPreviewToTextarea();
    }

    if (!insertManualPageBreakAtTextarea(textarea)) {
      return;
    }

    renderNow();
    flashStatus("已插入强制分页");
  });

  mergeCellsBtn?.addEventListener("mousedown", (event) => {
    event.preventDefault();
  }, { capture: true });

  mergeCellsBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    handleMergeSelectedCells();
  });

  splitCellBtn?.addEventListener("mousedown", (event) => {
    event.preventDefault();
  }, { capture: true });

  splitCellBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    handleSplitSelectedCell();
  });

  let exportButton = printBtn;

  if (printBtn && printBtn.parentNode) {
    const replacementPrintBtn = printBtn.cloneNode(true);
    replacementPrintBtn.textContent = "导出 PDF";
    replacementPrintBtn.setAttribute("aria-label", "导出 PDF");
    printBtn.replaceWith(replacementPrintBtn);
    exportButton = replacementPrintBtn;
  }

  exportButton?.addEventListener("click", () => {
    renderNow();
  }, { capture: true });

  exportButton?.addEventListener("click", async () => {
    if (exportBusy) {
      return;
    }

    exportBusy = true;
    exportButton.disabled = true;
    flashStatus("正在导出 PDF...");

    try {
      const title = extractTitle(textarea.value);
      const fileName = `${sanitizeFileName(title)}.pdf`;
      const html = await buildExportDocumentHtml(measureCanvas, getDocumentOptions(title));
      const result = await requestNativePdfExport(html, fileName);

      downloadBlob(result.fileName || fileName, result.blob);
      flashStatus("PDF 已导出");
    } catch (error) {
      console.error(error);
      const message = error && error.message ? error.message : "";
      const needsServerHint = /fetch|network|failed|127\.0\.0\.1|ECONNREFUSED|ERR_CONNECTION_REFUSED/i.test(message);
      flashStatus(needsServerHint ? "请先运行 npm start，再导出 PDF" : "PDF 导出失败，请重试");
    } finally {
      exportBusy = false;
      exportButton.disabled = false;
    }
  });

  let initialText = SAMPLE_MARKDOWN;

  try {
    const savedMarkdown = window.localStorage.getItem(STORAGE_KEYS.markdown);
    const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);
    const savedMode = window.localStorage.getItem(STORAGE_KEYS.mode);
    const savedQuestionAnswerLayout = window.localStorage.getItem(STORAGE_KEYS.questionAnswerLayout);
    const savedLayoutPreset = window.localStorage.getItem(STORAGE_KEYS.layoutPreset);
    const savedLayoutPresetByMode = window.localStorage.getItem(STORAGE_KEYS.layoutPresetByMode);
    const savedBodyFontFamily = window.localStorage.getItem(STORAGE_KEYS.bodyFontFamily);
    const savedHeadingFontFamily = window.localStorage.getItem(STORAGE_KEYS.headingFontFamily);
    const savedParagraphAlign = window.localStorage.getItem(STORAGE_KEYS.paragraphAlign);
    const savedLineHeight = window.localStorage.getItem(STORAGE_KEYS.lineHeight);
    const savedLetterSpacing = window.localStorage.getItem(STORAGE_KEYS.letterSpacing);
    const savedPageHeaderEnabled = window.localStorage.getItem(STORAGE_KEYS.pageHeaderEnabled);
    const savedPageHeaderText = window.localStorage.getItem(STORAGE_KEYS.pageHeaderText);
    const savedWatermarkEnabled = window.localStorage.getItem(STORAGE_KEYS.watermarkEnabled);
    const savedWatermarkText = window.localStorage.getItem(STORAGE_KEYS.watermarkText);
    const savedExportBackgroundSrc = window.localStorage.getItem(STORAGE_KEYS.exportBackgroundSrc);
    const savedExportBackgroundName = window.localStorage.getItem(STORAGE_KEYS.exportBackgroundName);
    const savedPaginationStrategy = window.localStorage.getItem(STORAGE_KEYS.paginationStrategy);
    const savedRibbonTab = window.localStorage.getItem(STORAGE_KEYS.ribbonTab);
    const savedTypographyVersion = window.localStorage.getItem(STORAGE_KEYS.typographyVersion);
    const savedElementStyles = window.localStorage.getItem(STORAGE_KEYS.elementStyles);
    const savedTableLayouts = window.localStorage.getItem(STORAGE_KEYS.tableLayouts);
    const savedCardLayouts = window.localStorage.getItem(STORAGE_KEYS.cardLayouts);
    const savedCardOrder = window.localStorage.getItem(STORAGE_KEYS.cardOrder);

    if (savedMarkdown && savedMarkdown.trim()) {
      initialText = savedMarkdown;
    }

    state.theme = sanitizeChoice(savedTheme, THEME_LABELS, DEFAULT_THEME);
    state.mode = sanitizeChoice(savedMode, MODE_METADATA, DEFAULT_MODE);
    state.questionAnswerLayout = sanitizeChoice(
      savedQuestionAnswerLayout,
      QUESTION_ANSWER_LAYOUTS,
      DEFAULT_QUESTION_ANSWER_LAYOUT,
    );
    state.layoutPresetByMode = parseLayoutPresetByMode(savedLayoutPresetByMode);
    state.layoutPreset = isLayoutPresetForMode(savedLayoutPreset, state.mode)
      ? savedLayoutPreset
      : sanitizeLayoutPresetForMode(state.layoutPresetByMode[state.mode], state.mode);
    state.bodyFontFamily = sanitizeChoice(savedBodyFontFamily, FONT_FAMILY_OPTIONS, DEFAULT_BODY_FONT_FAMILY);
    state.headingFontFamily = sanitizeChoice(savedHeadingFontFamily, FONT_FAMILY_OPTIONS, DEFAULT_HEADING_FONT_FAMILY);
    state.paragraphAlign = sanitizeChoice(savedParagraphAlign, PARAGRAPH_ALIGN_OPTIONS, DEFAULT_PARAGRAPH_ALIGN);
    const hadSavedElementStyles = Boolean(savedElementStyles);

    ARTICLE_STYLE_CONTROLS.forEach((control) => {
      const savedValue = window.localStorage.getItem(control.storageKey);
      state[control.key] = clampNumber(savedValue, control.min, control.max, control.defaultValue);
      if (!hadSavedElementStyles) {
        state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      }
    });
    ARTICLE_PARAGRAPH_CONTROLS.forEach((control) => {
      const savedValue = window.localStorage.getItem(control.storageKey);
      state[control.key] = clampNumber(savedValue, control.min, control.max, control.defaultValue);
      if (!hadSavedElementStyles) {
        state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      }
    });
    HEADING_LINE_HEIGHT_CONTROLS.forEach((control) => {
      const savedValue = window.localStorage.getItem(control.storageKey);
      state[control.key] = clampNumber(savedValue, control.min, control.max, control.defaultValue);
      if (!hadSavedElementStyles) {
        state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      }
    });
    HEADING_SPACE_CONTROLS.forEach((control) => {
      const savedValue = window.localStorage.getItem(control.storageKey);
      state[control.key] = clampNumber(savedValue, control.min, control.max, control.defaultValue);
      if (!hadSavedElementStyles) {
        state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, control.key, state[control.key]);
      }
    });

    PAGE_STYLE_CONTROLS.forEach((control) => {
      const savedValue = window.localStorage.getItem(control.storageKey);
      state[control.key] = clampNumber(savedValue, control.min, control.max, control.defaultValue);
    });

    state.lineHeight = clampNumber(
      migrateLegacyCompactValue(savedLineHeight, LEGACY_COMPACT_DEFAULTS.lineHeight, DEFAULT_LINE_HEIGHT),
      1.1,
      2.4,
      DEFAULT_LINE_HEIGHT,
    );
    if (!hadSavedElementStyles) {
      state.elementStyles = syncElementStylesFromGlobalControl(state.elementStyles, "lineHeight", state.lineHeight);
    }
    state.letterSpacing = clampNumber(savedLetterSpacing, -0.5, 2, DEFAULT_LETTER_SPACING);
    state.headingSpaceH1 = clampNumber(
      migrateLegacyCompactValue(state.headingSpaceH1, LEGACY_COMPACT_DEFAULTS.headingSpaceH1, DEFAULT_HEADING_SPACE_H1),
      0,
      44,
      DEFAULT_HEADING_SPACE_H1,
    );
    state.headingSpaceH2 = clampNumber(
      migrateLegacyCompactValue(state.headingSpaceH2, LEGACY_COMPACT_DEFAULTS.headingSpaceH2, DEFAULT_HEADING_SPACE_H2),
      0,
      36,
      DEFAULT_HEADING_SPACE_H2,
    );
    state.headingSpaceH3 = clampNumber(
      migrateLegacyCompactValue(state.headingSpaceH3, LEGACY_COMPACT_DEFAULTS.headingSpaceH3, DEFAULT_HEADING_SPACE_H3),
      0,
      28,
      DEFAULT_HEADING_SPACE_H3,
    );
    if (savedTypographyVersion !== TYPOGRAPHY_BASELINE_VERSION) {
      applyReadableTypographyBaseline(state);
    }
    state.pageHeaderEnabled = normalizeBoolean(savedPageHeaderEnabled, DEFAULT_PAGE_HEADER_ENABLED);
    state.pageHeaderText = savedPageHeaderText == null ? DEFAULT_PAGE_HEADER_TEXT : String(savedPageHeaderText);
    state.watermarkEnabled = normalizeBoolean(savedWatermarkEnabled, DEFAULT_WATERMARK_ENABLED);
    state.watermarkText = savedWatermarkText == null ? DEFAULT_WATERMARK_TEXT : String(savedWatermarkText);
    state.paginationStrategy = sanitizeChoice(
      savedPaginationStrategy,
      PAGINATION_STRATEGIES,
      DEFAULT_PAGINATION_STRATEGY,
    );
    state.elementStyles = hadSavedElementStyles
      ? normalizeElementStyles(savedElementStyles)
      : getElementStyleDefaults(state);
    state.exportBackgroundSrc = normalizeBackgroundSource(savedExportBackgroundSrc, DEFAULT_EXPORT_BACKGROUND_SRC);
    state.exportBackgroundName = state.exportBackgroundSrc
      ? normalizeBackgroundName(savedExportBackgroundName, DEFAULT_EXPORT_BACKGROUND_NAME)
      : DEFAULT_EXPORT_BACKGROUND_NAME;
    activeRibbonTab = sanitizeChoice(savedRibbonTab, RIBBON_TABS, DEFAULT_RIBBON_TAB);
    state.tableLayouts = normalizeTableLayouts(savedTableLayouts ? JSON.parse(savedTableLayouts) : {});
    state.cardLayouts = normalizeCardLayouts(savedCardLayouts);
    state.cardOrder = normalizeCardOrder(savedCardOrder);
  } catch (_error) {
    // Ignore storage failures in restricted browsers.
  }

  textarea.value = initialText;
  setupRibbonTabIcons(ribbonTabs);
  setupWorkspaceViewTabs();
  applyRibbonTab(activeRibbonTab);
  applyUiState();
  setPreviewDrawer("tools");
  renderNow();
  cachedExportStyles = getExportStyles();
}

if (typeof document !== "undefined") {
  initPagedApp();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    applyBrushToTextarea,
    buildExportHtml,
    buildMindmapTree,
    enhanceRenderedArticle,
    extractTitle,
    formatLineHeight,
    parseInlines,
    renderMarkdown,
  };
}
