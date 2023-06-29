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

https://sandimetz.com/99bottles

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
2. Learns about DRY, SoC, IoC... enforces many abstractions
3. Avoids early abstraction, inlines a lot

> If the only tool you have is a hammer, you tend to see every problem as a nail. - Abraham Maslow

## Examples

- **Huge API Surface**: many params, need to know internals, too much to learn, framework-ish
- **All-in-one**: mapAtoB then mapBtoC might be easier to understand than mapAtoC
- **Too much indirection**: on the other hand, mapAtoC might be easier to understand than mapAtoB then mapBtoC. If someone asks how to go to the eiffel tower, telling them to go to Champs de Mars won't help, nor explaining how to walk and cross the street.
- **Separation of Concern as an argument on its own**: Tidying up socks in a "left" box and a "right" box separates concerns but it doesn't help get dressed faster in the morning
- **Excessive consistency**: again, keep a good ballance, consistency gives up on exploration
- **Inheritance**: tends to be missused

## Functional programming with low level of abstraction

Simple FP principles make it easier for the brain:

- Pure functions: predictability & determinism
- Immutability: removes the "time" dimension that is hard for the brain
- Isolate side effects

Try to make it easy to read, navigate and change:

- Minimising indirections, lowering navigation overhead: less context switching
- Using business/product/design's terminology: meaningful abstractions & less decision making
- Duplicate when extracted parts might not live together
- No universal right answer, only context specific pros & cons
