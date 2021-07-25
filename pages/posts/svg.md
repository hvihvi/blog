---
title: SVG
date: 2021/7/22
description: Anything SVG related
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

Add css hidden text next to SVGs that can be parsed by screen readers:

```html
<button>
  <SvgHelpLogo />
  <span class="visually-hidden">Help</span>
</button>
```

```css
.visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
```

## Font SVG vs Inline SVG

Inline SVGs are better for performance and accessibility, avoid font svgs.
