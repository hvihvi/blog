---
title: Text and Fonts
date: 2021/7/22
description: Notes related to texts and fonts, UX, performance, css tricks...
tag: web development
author: You
---

# Fonts

## Performance

### Google Fonts: preconnect

Use `rel=preconnect` to prepare DNS resolution, since google fonts loads CSS that then load the font at another URL

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,400;1,600&display=swap"
  rel="stylesheet"
/>
```

### Self-host

Self-hosting can make font loading a bit faster :

- you can inline styles in the html to avoid an extra **render-blocking** CSS request
- browsers don't need to look up 3 different URL

Browsers now use **partitioned caches**, so if a user has seen the font on another website they will have to download it regardless.

### Font display strategies

We want to prevent **layout shifts** when the font loads.

#### `font-display: swap` (used by google fonts)

Displays a fallback font asap, and swap when the font is loaded. Creates FOUT (Flash Of Unstyled Text) and probable layout shifts. Can be minimised by matching font sizes, for example with https://meowni.ca/font-style-matcher/. Support for `size-adjust` in `@font-faces` is missing but it will make this task easier.

#### `font-display: fallback` (good balance)

Waits for 100ms, then displays the fallback, and swaps if it was downloaded within 3s. Then give up and stick to fallback. Use font matching to cover the swap window.

#### `font-display: optional`

Use if fonts are not very important, gives up after 100ms and stick to the fallback. No font matching needed.

#### Reduce font size

Try to bundle only necessary characters:

- strip out characters used in the language
- If you use a specific font for a short text, load only the charaters used (via `&text=MYCUSTOMTEXT` in the google font api)

## Styling

Use `@font-face`s in a `<style>` tag in the html head to prevent render blocking requests, with a `font-display`strategy, and use `font-family` fallbacks.

Break long words that overflow:

```css
overflow-wrap: break-word;
hyphens: auto;
/* Safari */
-webkit-hyphens: auto;
```

#### Table headers

`nowrap` prevents going to the next line and `text-overflow` can leave overflowing words unfinished (verylongwor...).

```css
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

##### Unfinished text preview

If the text content is not mandatory or serves as a preview, leave it unfinished (...) after a few lines if it overflows.

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 4;
overflow: hidden;
```

## UX

For long lines with small text, increase `line-height` (easier to find next line). Decreasing `line-height` for big title is ok.

Readability is favored at around **50 to 75 characters per line**. Can be set with `max-width: 50ch`.
