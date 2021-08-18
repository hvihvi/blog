---
title: Images
date: 2021/7/22
description: Anything image related
tag: web development
author: You
---

# Images

## Web performance

#### width and height

Add `width` and `height` (the initial image dimensions), it allows browsers to reserve space on the first render and **avoids layout shifts** when the image loads later.

#### Lazy-loading

Lazy-load with `<img loading="lazy" />` only when necessary (far from initial viewport). It will load the image when they get near the viewport, but it might slow down loading images in the initial viewport.

#### WEBP support

Add webp support with fallbacks via `picture tag`:

```html
<picture>
  <source srcset="img.webp" type="image/webp" />
  <source srcset="img.jpg" type="image/jpeg" />
  <img src="img.jpg" />
</picture>
```

Generate image with webp format via the CLI:

```sh
cwebp -q 80 initial_image.png -o output_image.webp
```

#### LCP

Check if an image is the LCP in devtools with the Lighthouse plugin or Performance tab.  
Images are slow to render, shifting the LCP to a textual element improves the score (LCP=FP).

## Accessibility

Add alt text, or `alt=""` if it has no semantic meaning. Avoid `background-image` if there is a semantic meaning.

## Styling

The css properties `object-fit` and `object-position` help crop and position `img` like a background image.

#### Responsive

Make an image resize until its height is 100px and then keep the size and crop sides instead.

```css
img {
  width: 100%;
  min-height: 100px;
  object-fit: cover;
}
```
