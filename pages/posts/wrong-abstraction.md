---
title: The Wrong Abstraction
date: 2022/05/30
description: About building better abstractions, or none...
tag: productivity, web development, developer experience, code quality, functional programming
author: You
---

# The Wrong Abstraction

## Resources

Sandi Metz "The wrong abstraction" https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction

Chen Lou "On the spectrum of abstractions" https://www.youtube.com/watch?v=mVVNJKv9esE

Dan Abramov "The WET codebase" https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase

https://overreacted.io/fix-like-no-ones-watching/

Sebatian Markbage "Minimal API Surface area" https://www.youtube.com/watch?v=4anAwXYqLG8

An article I wrote a few years ago https://dev.to/hvihvi/expensive-abstractions-51if

## TL;DR

> Duplication is far cheaper than the wrong abstraction. - Sandi Metz

1. developer A sees duplication -> he enforces an abstraction
2. developer B needs something almost similar. He modifies the abstraction
3. time passes, loop over step (2) multiple time
4. you join the party and take a look at the code, it's a total mess

This applies to DRY, Inversion of Control, Separation of Concerns, consistency... and could be worded as

> No abstraction is far cheaper than the wrong abstraction.

For long term team sanity, **inline** frequently and avoid hasty abstractions.

Devs often go through 3 phases:

1. Doesn't care about abstractions
2. Wants to remove duplication at all cost, enforces many abstractions
3. Avoids early abstraction

> If the only tool you have is a hammer, you tend to see every problem as a nail. - Abraham Maslow
