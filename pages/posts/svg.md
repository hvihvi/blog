---
title: SVG
date: 2021/7/22
description: Anything SVG related
tag: web development, css, a11y, web performances
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

The Font svgs method lacks a11y and should be avoided. Inline SVGs get processed on first browser paint. If they are heavy and can be displayed after the initial paint, we can use an `img` tag (with `loading="lazy"`).
