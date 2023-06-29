---
title: Optimistic UI
date: 2022/8/3
description: Optimistic UI ticks...
tag: web development, web performances, react, user experience, code quality
author: You
---

# Optimistic UI

## Optimistic toggle

Naive solution:

```jsx
const useOptimistToggle = (checked, toggle) => {
  const [optimistChecked, setOptimistChecked] = useState(checked)

  const optimistToggle = () => {
    setOptimistActive(!optimistActive)
    toggle()
  }
  return { optimistActive, optimistToggle }
}

export default function App() {
  const { checked, toggle } = useSlowToggle()
  const { optimistChecked, optimistToggle } = useOptimistToggle(checked, toggle)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="checkbox"
        checked={optimistChecked}
        onClick={optimistToggle}
      />
    </div>
  )
}
```

React-Query is good at handling optimistic UI, it's an **async state manager** (despite having "query" in its name, it can work with any async state).

## Debounce flickery state
