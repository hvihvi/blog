---
title: Layouts
date: 2022/08/24
description: layout recipes...
tag: css, web development
author: You
---

# Layouts

## Icon left + centered title

Add a placeholder to the right side + flex 1 on both sides to push the title to the center

```jsx
<Header>
  <Row alignItems="center">
    <Box ml="2" flex="1">
      <BackButton />
    </Box>
    <Title />
    <Box mr="2" flex="1" />
  </Row>
</Header>
```
