# Layout_For_Xhs Instructions

This repository is a local single-page web tool that turns Markdown into
Xiaohongshu/RedNote-style study layouts. It is a practical editor and preview
workspace for course notes, knowledge cards, question explanations, article
layouts, HTML export, and browser print/PDF workflows.

Main files:

- `index.html`: app shell, controls, preview markup.
- `styles.css`: themes, density, responsive layout, print/export styles.
- `app.js`: state, Markdown parsing, rendering, modes, import/export, UI logic.
- `server.js`: local Node server.
- `sample.md`: sample input.
- `scripts/`: remote/tunnel helpers.
- `tools/`, `deploy/`, `vendor/`: inspect only when needed.
- `node_modules/`: do not inspect or edit normally.

Commands:

- `npm start`
- `npm run remote:start`
- `npm run remote:stop`
- `npm run remote:named:start`
- `npm run remote:named:stop`

Editing:

- Keep changes narrow and follow the existing single-page app patterns.
- Preserve Chinese copy unless asked.
- In `app.js`, prefer existing helpers and keep Markdown features stable,
  including colored highlights, brush marks, paragraph blocks, tables, images,
  and mind-map blocks.
- For UI work, keep the dense editor/preview product shape. Avoid landing-page
  patterns, prevent overlap or clipped controls, check narrow widths when
  practical, and preserve print/export behavior.

Verification:

- Use the lightest useful check.
- For UI behavior, prefer local server plus browser or Playwright when
  available.
- For logic changes, inspect the affected render path and run focused checks.
- Generated screenshots, profiles, logs, and exports are not source.
