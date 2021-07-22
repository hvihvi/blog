---
title: SVG
date: 2021/7/22
description: Memo for SVG related
tag: web development
author: You
---

# SVG

## Center

SVG elements default to `display: inline`, it is treated like text characters so it comes with space under it regardless of padding/margin.

```css
& > svg {
  display: block;
}
```

## Accessibility

Add css hidden text next to SVGs:

```html
<button>
  <SvgHelpLogo />
  <span class="visually-hidden">Help</span>
</button>
```
