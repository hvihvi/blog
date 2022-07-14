---
title: React Native
date: 2022/8/14
description: React Native notes taken from a react dev perspective...
tag: mobile, native, react, developer experience, tooling
author: You
---

# React Native

## Setup

Official doc : https://reactnative.dev/docs/environment-setup
Mac M1 might need

```
"EXCLUDED_ARCHS[sdk=iphonesimulator*]" = arm64;
```

## Architecture

React Native apps have an entry point like a client side React app.

```js
import { Text, AppRegistry } from 'react-native'

const App = (props) => (
  <View>
    <Text>App1</Text>
  </View>
)

AppRegistry.registerComponent('Appname', () => App)
```

Compared to React, React Native doesn't use react-dom (ex: `<div/>` jsx) but instead uses base components like `View` and `Text` to build the UI.

## Metro

https://facebook.github.io/metro/docs/api

Metro is a **bundler** (like Webpack) for React Native built by facebook. It turns the JS code into a single file.
`yarn start` runs a local server (like webpack dev server). It can the communicate with multiple devices/simulators.
`yarn start --reset-cache` to clear cache.
Metro does not support tree shaking. Make sure to remove unused code (eslint rules can help).

## Bridge

The "Old Architecture" uses a bridge to communicate between the native thread and JS thread. It marshalls JSON messages which can have a performance cost.

## New Architecture

### Fabric

New rendering system. No bridge. Instead uses JSI (JavaScript Interface) to communicate directly with native code (C++ and JS).
3 phases :

- render: JS executes JSX instructions, that generates a JS tree, from which a C++ tree is created (shadow tree).
- commit: promotes the tree as "next to be mounted"
- mount: mounts the host view tree (uses Yoga https://yogalayout.com/ to calculate the layout from 'CSS like' properties)

### Hermes

A Javascript engine (like Node, ex: `node test.js` => `hermes test.js`).
Optimized for React Native. https://hermesengine.dev/
Compiles JS to bytecode executable by Hermes. Ex: `hermes -emit-binary -out test.hbc test.js && hermes test.hbc`

## Debugging

React Native Debugger (easy to get started): https://github.com/jhen0409/react-native-debugger

Flipper (facebook's debugger): https://fbflipper.com/docs/features/react-native/

## Popular Libraries

### Animations:

React Native's Animated API (to get started)
Reanimated2: https://docs.swmansion.com/react-native-reanimated/docs
Gesture Handler: https://docs.swmansion.com/react-native-gesture-handler/docs/

### Components:

Native Base: https://docs.nativebase.io/
Mostly for prop based Layout Components (Chakra UI like) and building design-systems on top of good a11y

### Navigation:

React Navigation: https://reactnavigation.org/docs/getting-started

## IOS

### Cocoa Pods

https://cocoapods.org/

IOS's dependency management system (like **npm** or **yarn**).
Similar to npm install, `pod install` installs all dependencies.

Typically used together with npm/yarn whenever dependencies need to be updated.

```
npm install && cd ios && pod install && cd ..
```

Sometimes like `rm -rf node_modules` we can do:

```
cd ios && pod deintegrate && pod install && cd ..
```

### Simulator

#### Keyboard shortcuts

R => reloads app
D => opens debug menu
I => inspect
