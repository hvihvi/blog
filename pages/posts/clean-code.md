---
title: Clean code
date: 2021/7/25
description: Resources and articles with coding practice
tag: web development
author: You
---

# Clean Code

## The wrong abstraction

Sandi Metz "The wrong abstraction" https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction

Chen Lou "On the spectrum of abstractions" https://www.youtube.com/watch?v=mVVNJKv9esE

Dan Abramov "The WET codebase" https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase

https://overreacted.io/fix-like-no-ones-watching/

Sebatian Markbage "Minimal API Surface area" https://www.youtube.com/watch?v=4anAwXYqLG8

An article I wrote a few years ago https://dev.to/hvihvi/expensive-abstractions-51if

## Functional Programming

https://betterprogramming.pub/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7

Linus Torvalds on C++ http://harmful.cat-v.org/software/c++/linus

Joe Armstrong http://harmful.cat-v.org/software/OO_programming/why_oo_sucks

Simon Peyton Jones https://www.youtube.com/watch?v=iSmkqocn0oQ

> State is the root of all evil. In particular functions with side effects should be avoided.

### Terminology

- **Pure functions**: No side effects, predictable, the same input always returns the same output
- **First-class functions**: when functions in a language are treated like any other variables
- **Mutations**: change the value assigned to a variable, setters, change an object/array...
- **Side-effects**: mutations, I/O...
- **Memoïsation**: if a function is predictable, the input-output map can be cached
- **Currying**: f(a, b) becomes f(a)(b), favors reuse of partial functions
