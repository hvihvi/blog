---
title: Full width wrapper
date: 2021/8/23
description: CSS hack for a full width inside a layout with gutter
tag: web development
author: You
---

# Full width wrapper

Inside content that has padding/margin on sides, sometimes we need to add a slider or something inside that takes the full viewport width.
It can be achieved via translations and hard coded values when you know the parent's padding/margin, but this hack allows you to perform this without parent component knowledge :

```css
margin-left: calc(50% - 50vw);
margin-right: calc(50% - 50vw);
```

The way I picture it is that it "compresses" the component with its size in margin, then stretches it to full width.
