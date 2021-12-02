---
title: Property Based Testing
date: 2021/11/21
description: A functional testing strategy...
tag: web development
author: You
---

# Property Based Testing

Introduced in Haskell via the QuickCheck framework.

JS/TS library : `yarn add fast-check -dev`

Difference with typical test by example:

```js
// test by example
it('should...', () => {
  // given
  // example input
  // when
  // function call
  // then
  // expect example output
})

// property based testing
it('should...', () => {
  // given
  // input property
  // when
  // function call
  // then
  // expect output property
})
```

For example

> GIVEN any array of numbers, WHEN `sort` is called, THEN the output array has the same length

The framework generates a large number of inputs and checks the output for given condition.
