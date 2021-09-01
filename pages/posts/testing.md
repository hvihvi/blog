---
title: Jest & Testing Library
date: 2021/7/25
description: A memo for Jest & testing library...
tag: web development
author: You
---

# Testing Library

## React

#### Wait for async state updates

Use `await findBy*` queries to wait for async state updates.

```js
it('will wait for state updates and check DOM content', () => {
  const { findByText } = render(<Component />)
  const sentence = await findByText('I took a while to display')
  expect(sentence).toBeInTheDocument()
})
```

#### debug

```js
it('will print the DOM in the console', () => {
  const { debug } = render(<Component />)
  debug() // prints DOM in the console
})
```

# Jest

## Mocks

#### Clear mocks boilerplate

```js
beforeEach(() => {
  jest.clearAllMocks()
})
```

#### Mock API requests

```js
const postJsonMock = postJson as jest.Mock; // TS hack to get auto-completion
when(postJsonMock)
    .calledWith(expect.stringMatching(/.*api\/items.*/))
    .mockReturnValue(
        Promise.resolve({
            json: () => ({items: ["Hello World"]})
            })
    );
```
