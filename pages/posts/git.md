---
title: Git
date: 2021/7/27
description: Git related
tag: web development
author: You
---

# Git

## Clean history

Keeping a clean history help take mental shortcuts. Reduces complexity.

### Commit size : the smallest stable deliverable iteration possible

Helps with readability, `bisect` debugging, can ship to production whenever.
Feature toggles help with the "deliverable" part.

### Per commit automated code review

- Adds/removes behaviour: should add/remove both code+tests
- Change behaviour: same, if the changed behaviour didn't change tests, it might be best to add a test first, then change both to make the change explicit
- ISO refactor: should not modify tests (test first, lift tests up when tied to implementation...)

A proof of concept git history linter https://github.com/hvihvi/glnt
