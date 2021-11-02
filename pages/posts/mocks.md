---
title: Mocks
date: 2021/10/29
description: Jest http mocks, localhost mock flags, webpack dev mode...
tag: web development
author: You
---

# Mocks

## Mocking HTTP calls with Jest

It's easier to mock an import, so we can simply extract `fetch` calls to a separate file (http.js in this example).

```js
import mockSomething from "./mock_something.json";

jest.mock("./http");
const http = require("./http");

it("should...", () => {
  // given
  http.fetchSomething.mockResolvedValue(mockSomething);
});
```

### Customize mocks with jest-when

This is a dsl library to help a bit with jest mocks.
It might be confusing to use "when" in a "given" statement.

```js
import { when } from "jest-when";

when(myMock).calledWith("input").mockResolvedValue(mockSomething);
```

## Localhost mock flags / feature flags

To setup quick flags, we can use url parameters, and return a mocked implementation:

```js
// true if &flag is in the url
const flag = new URL(window.location.href).searchParams.get("flag")) !== null;
```

## Webpack development mode

We can check if we're running the app in dev mode via:

```js
process.env.NODE_ENV === "development";
```
