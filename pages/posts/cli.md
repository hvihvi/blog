---
title: CLI
date: 2022/03/14
description: Utilities, mac setup etc
tag: web development, tooling
author: You
---

# CLI

## Tooling

### Hyper

https://hyper.is/

CMD+D or CMD+SHIFT+D to split

### Oh My Zsh

https://github.com/ohmyzsh/ohmyzsh

easy to setup, auto updates itself

Current theme: `af-magic`

Edit `vim ~/.zshrc` to edit config (change theme, load plugins)

## Utilities

### Get an alert when a long script is done

On mac OS

```sh
myLongScript && say done
```

### N (node version management)

Easily switch between node versions.

https://github.com/tj/n

change version

```sh
sudo n
```

install version

```sh
sudo n latest
sudo n 6.2.0
```

### J (autojump)

A `cd` command that learns from your navigation.

https://github.com/wting/autojump

Ex: navigate to /Users/hugo/github.com/hvihvi/blog :

```sh
j blo
```
