---
title: Solving the Set game
date: 2021/12/21
description: An interesting coding exercise
tag: web development
author: You
---

# Solving the Set game

Our team at LesFurets likes to play https://setwithfriends.com so we decided to solve it with TypeScript in a kata fashion.

The code can be found here: https://github.com/hvihvi/set-with-friends-solver.

## Rules

cards are displayed and we need to find 3 cards that are either all same or all different for each dimension (color/shape/number/fill).

The impure part was to scrap the page's DOM to get the displayed cards' array as an input, and be able to clic our solution.

The pure part takes an array of cards as input, and returns the solution (3 cards).

## FP constraint

Anything solvable via imperative, sequential, mutable, or OO programming, should be solvable via FP (pure functions, no mutations...), according to **Alonzo Church**'s researches on lambda-calculus, in the Church-Turing thesis (1935-1936).
(Thanks to @NickServ on Reactiflux Discord and Lambda calcul Devoxx 2021 presentation for this pointer).

Solving it in an imperative way at first was fairly easy but quite verbose and not very expressive. We wanted to find a functional algorithm, therefore mutability and for loops were prohibed.

We found this solution as a pointer for the recursion https://stackoverflow.com/a/60590411.

## Solution

To iterate over all cards, we try to solve it for the first card (destructured param), or else we solve it for the remaining cards :

```ts
export const solve = ([firstCard, ...remainingCards]: Card[]): Card[] => {
  const resultat = solveForCard(firstCard, remainingCards)
  if (resultat.length) {
    return resultat
  }
  return solve(remainingCards)
}
```

To solve it for a given card, we pick a second card, compute the missing one and check if it's in the set.

```ts
const solveForCard = (firstCard: Card, remainingCards: Card[]): Card[] =>
  remainingCards
    .map((card) => [firstCard, card, findMissing(firstCard, card)])
    .find((it) => containsCard(remainingCards, it[2])) ?? []
```

To compute the missing one we map all dimension values to 0, 1 or 2, and used a modulo trick to find the missing one. But since JavaScript's modulo is broken we had to create a working one first:

```ts
export const findMissing = (card1: Card, card2: Card) => ({
  color: findMissingDimension(card1.color, card2.color),
  motif: findMissingDimension(card1.motif, card2.motif),
  number: findMissingDimension(card1.number, card2.number),
  shape: findMissingDimension(card1.shape, card2.shape)
})

export const findMissingDimension = (d1: 0 | 1 | 2, d2: 0 | 1 | 2) =>
  modulo3(3 - (d1 + d2))

// % operator is not a real modulo, -1%3 equals -1:
// https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
export const modulo3 = (n: number) => ((n % 3) + 3) % 3
```

https://github.com/hvihvi/set-with-friends-solver/blob/main/src/solve.ts

That's it :)
