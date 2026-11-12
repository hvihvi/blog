---
title: Typescript
date: 2022/8/16
description: notes related to typescript...
tag: typescript, developer experience, tooling
author: You
---

# Typescript

## Filter undefined & properly type the output

https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

```typescript
export const isDefined = <T>(argument: T | undefined): argument is T =>
  argument !== undefined

const definedArray = withUndefined.filter(isDefined)
```

Otherwise TS doesn't infer that the result is defined.

## Remove unused exports

External library

```
ts-prune
```

or `knip`
