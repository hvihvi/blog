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
const useOptimistToggle = (isActive, toggle) => {
  const [optimistActive, setOptimistActive] = useState(isActive)

  const optimistToggle = () => {
    setOptimistActive(!optimistActive)
    toggle()
  }
  return { optimistActive, optimistToggle }
}

export default function App() {
  const { isActive, toggle } = useSlowToggle()

  const { optimistActive, optimistToggle } = useOptimistToggle(isActive, toggle)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="checkbox"
        checked={optimistActive}
        onClick={optimistToggle}
      />
    </div>
  )
}
```

## Debounce flickery state
