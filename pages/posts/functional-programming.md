---
title: Functional Programming
date: 2022/5/25
description: Resources and articles related to FP
tag: web development, developer experience, code quality, functional programming
author: You
---

# Functional Programming

## Resources & Articles

https://betterprogramming.pub/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7

Linus Torvalds on C++ http://harmful.cat-v.org/software/c++/linus

Joe Armstrong http://harmful.cat-v.org/software/OO_programming/why_oo_sucks

Simon Peyton Jones https://www.youtube.com/watch?v=iSmkqocn0oQ

> State is the root of all evil. In particular functions with side effects should be avoided.

## Terminology

- **Pure functions**: No side effects, predictable, the same input always returns the same output
- **First-class functions**: when functions in a language are treated like any other variables
- **Mutations**: change the value assigned to a variable, setters, change an object/array...
- **Side-effects**: mutations, I/O...
- **Memoïsation**: if a function is predictable, the input-output map can be cached
- **Currying**: f(a, b) becomes f(a)(b), favors reuse of partial functions
