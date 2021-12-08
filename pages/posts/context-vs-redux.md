---
title: React Context vs Redux
date: 2021/12/05
description: pros & cons, resources regarding redux replacement...
tag: web development
author: You
---

# React Context vs Redux

Coupling `useContext` and `useReducer` looks a lot like Redux. They both have:

- store
- reducers
- dispatching of actions
- a way to pass down that value and read it in nested components

The main issue with Context is that **all subscribed components will re-render**. This is not an issue most of the time.

Sebastian Markbage (React core team) quote: https://github.com/facebook/react/issues/14110#issuecomment-448074060

> My personal summary is that new context is ready to be used for low frequency unlikely updates (like locale/theme). It's also good to use it in the same way as old context was used. I.e. for static values and then propagate updates through subscriptions. It's not ready to be used as a replacement for all Flux-like state propagation.

In-depth article by Mark Erikson (Redux maintainer) https://blog.isquaredsoftware.com/2021/01/context-redux-differences/#comparing-context-and-redux
