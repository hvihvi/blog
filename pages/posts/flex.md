---
title: Flexbox
date: 2021/7/26
description: Solutions solved via display flex
tag: web development
author: You
---

# Display Flex

## Align titles and form inputs via baseline

Via `baseline` all items are aligned based on the invisible line where characters are written.

```css
display: flex,
align-items: baseline,
```

Example:

  <div style={{
      display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline"
  }}>
    <div style={{fontSize: "32px"}}>Homepage</div>
    <div>Item 1</div>
    <div>Item 2</div>
  </div>

## All children take same width

Use `flex: 1` on each child. It tells them to "flex-grow" evenly, and have a "flex-basis" of 0%.

Example:

```css
parent {
  display: flex;
}

child {
  flex: 1;
}
```

<div style={{display: "flex"}}>
 <div style={{flex: "1", border: "1px solid black", padding: "16px"}}>Very long content aaaa aa aa aaaaaa</div>
 <div style={{flex: "1", border: "1px solid black", padding: "16px"}}>short content</div>
 <div style={{flex: "1", border: "1px solid black", padding: "16px"}}>more content</div>
</div>
