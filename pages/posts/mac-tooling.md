---
title: Mac Setup & Tooling
date: 2022/11/13
description: Personal setup, apps etc
tag: tooling
author: You
---

# Mac tooling

- Flycut (copy/paste history)
- Karabiner (remap keys, config ./karabiner_config.zip at this repo root, config folder can be found at ~/.config/karabiner after installing)

# Mac setup

- Keyboard: Key repeat rate + Delay until repeat maxed (arrow nav becomes faster)
- Keyboard > Shortcuts > Modifier Keys > set Caps Lock to Control > Function Key > check "use F1 etc as standard key"
- Trackpad: speed maxed
- intall Chrome & Firefox Developer Edition
- install iTerm2
- Preferences... > Profiles > Keys > Key Mapping tab > presets... > natural text editing
- change cursor color: Settings>Profile>Colors rgb 254 1 249
- cmd (shift) S => split (hori)vertically
- ctrl (shift) @ => next (prev) Pane
- font Menlo
- install Homebrew (https://brew.sh/ : copy past the command & follow "Next steps" at the end)
- git should be already installed (git --version)
- add aliases to ~/.gitconfig (st / co / br)
- install oh-my-zsh
- change ~/.zshrc to use af-magic theme
- install zsh-autosuggestions https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh
- install zsh-syntax-highlighting https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md
- install Xcode from App Store (big download)
- `brew install autojump` : needs to add line to zshrc line (check brew output)
- install VSCode
- check VSCode post for config & plugins
- install node (from website or brew)
- install `n` from npm
- might require `sudo chown -R $(whoami) ~/.npm` or `sudo chown -R $USER /usr/local/lib/node_modules` if npm can't global install
- follow React Native docs https://reactnative.dev/docs/environment-setup
- `brew install tig`
- install steerMouse (Settings>SteerMouse>disable acceleration & sensitivity) + licence

```sh
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.cm commit
$ git config --global alias.st status
```

- `brew install node`
- `npm install -g n`
