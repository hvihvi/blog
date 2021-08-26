---
title: Design Systems
date: 2021/7/26
description: Anything related to design-systems, storybook...
tag: web development
author: You
---

# Design Systems

## Storybook

#### Write a story

```js
// Card.stories.tsx

export default {
  title: 'Components/Common/Card' // places the Card stories in a folder
}

export const HelloCard = () => <Card>Hello Card</Card> // Creates a story based on the CamelCase component name
```

## Meaningful errors

In development mode, we can display errors in the console when a component's API is misunderstood by the developer using them via:

```js
if (process.env.NODE_ENV === 'development') {
  throw new Error(
    'The Paragraph component is missing a boolean weight prop. Exemple: < Paragraph M /> (from XS to XL)'
  )
}
```

Webpack is able to tree-shake these out of production build.
