# hugovi.net

Personal blog / portfolio. React 19 + Vite + MDX, prerendered to static HTML, hosted on Vercel.

## Develop

Requires Node ≥ 22.12.

```bash
npm install
npm run dev        # http://localhost:5173, live reload
npm run build      # production build into dist/ (RSS + prerendered HTML)
npm run preview    # serve dist/ at http://localhost:4173
npm run typecheck
```

## Write a post

Add a file to `content/posts/`. The filename is the URL: `content/posts/my-post.mdx` → `/posts/my-post`.

```mdx
---
title: My post
date: 2026/11/12
description: One line shown in the post list and link previews
tag: css, react
---

# My post

Markdown, plus JSX when needed:

<div style={{ display: 'flex', gap: 8 }}>...</div>
```

- `.md` and `.mdx` are both compiled as MDX, so a literal `<` or `{` in prose must be escaped (`\<`, `\{`) or put in backticks.
- Images go in `public/images/` and are referenced as `/images/name.png`.

## How it works

- `src/posts.ts` loads every post via `import.meta.glob` and sorts them by date.
- `src/App.tsx` holds the layout and routes; pages live in `src/pages/`.
- `src/meta.ts` defines each page's `<title>` and share-preview tags.
- `npm run build` runs `scripts/gen-rss.js` (→ `public/feed.xml`), the Vite client build, an SSR build of `src/entry-server.tsx`, then `scripts/prerender.js`, which writes one HTML file per route plus `404.html`.
- `api/` holds Vercel Functions (legacy `koober://` deep-link redirects).
- Styling is plain CSS in `src/styles.css`; design tokens are at the top.

## Deploy

Vercel builds on every push to `main` (config in `vercel.json`). The domain is registered at Name.com and its DNS is managed by Vercel.
