---
title: Algorithms
date: 2023/09/25
description: Notes about algorithms & data structures
tag:  web performances
author: You
---

# Algorithms

## Big O Time complexity

Remove constants etc
O(2N) => O(N)
O(N² + N) => O(N²)

## Search Algorithms

### Linear Search

loop over an array from start/end and eq check. O(N)

### Binary Search

Only on ordered array.
Dichotomy (check middle, greater than? repeat left : right)
log2(N) time => O(logN)

### 2 crystal ball problem
N floor building, 2 crystal balls, find out which floor they break.
Whenever we loop check step by step it's O(N) => we have to jump by a unit that is not N to optimize.
If we jump by sqrt(N), we have sqrt(N) on the first ball, and sqrt(N) on the 2nd one. O(2sqrt(N)) => O(sqrt(N))

## Sort

### Bubble Sort

loop over array, check if greater than next item, swap.
Next, repeat but loop over array length -1, because the last one is sorted (greatest).
Next, repeat until length -2, 2 last items sorted.
...do this N times (wrapping loop).
This takes N x (N + (N-1) + (N-2) + ... + 1).
The sum if you add the last item to the first etc ends up being N/2 (+ constant maybe), so we have a complexity of O(N*N/2) => O(N²)

### Linked Lists
O(1) to add items (break & recreate links)
O(1) to get the front/tail
O(N) to traverse the array (ex: deletion in the middle)
vs Array : less cost to insert (array needs to shift items)