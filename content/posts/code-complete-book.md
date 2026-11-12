---
title: Code Complete (book)
date: 2022/09/01
description: Reading Notes
tag: architecture, book, productivity,
author: You
---

# Code Complete

One of the key idea is summarized in:

> Measure twice, cut once

Suggests reallocation of resources to prevent defects cheaply instead of fixing expensively.
**_Note: sometimes preventing defects is costly and fixing cheap_**

About pair programming, he matches notes about (mob)[./mob.md]:

- don't turn it into watching
- don't force it on easy stuff
- rotate regularly
- match pace
- highly reduce defects, increase quality, increase efficiency...
- 1 monitor, 1 keyboard...
- match senior/junior (avoid all junior) => knowledge transfer
- don't force pairing with person you don't like / mismatch => hard to move forward when both want to go opposite direction

Inspections (can be applied to code reviews):

- provide areas to focus
- focus on defect detection

On testing:

- A successful test is one that breaks the software
- Testing can never prove completely the absence of defects
- Testing by itself does not improve quality
- Testing requires to assume you'll find errors. In a **Glenford Myers** study, the average programmer found 5/15 defects, max was 9/15

On debugging:

defects as opportunities => helps learn the code, product, how to fix, mistakes made...

Inneffective approaches:

- guessing
- not trying to understand the **problem** (not the code)
- fixing the symptom (not looking for the root cause)

Scientific method:

- gather data through repeatable experiments
- form hypothesis
- test hypothesis
- draw conclusions

Self documenting code: comment only informations that cannot be expressed by the code itself.
ex:

```js
// computes the square root using Newton-Raphson method
const squareRoot = (n) => {
  // complex code implementation here
}
```

Another example is commenting on performance tricks that are not obvious and might get simplified if not hinted.
