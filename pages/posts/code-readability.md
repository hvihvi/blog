---
title: Code readability
date: 2022/08/24
description: Pros & Cons, readability examples...
tag: productivity, motivation, web development, developer experience
author: You
---

# Code readability

## Characters per line

Prettier defaults to 80 characters per line. The optimal line length to favor text readability is **around 50~60 characters**.  
Like for text, it's harder to jump the next line when you're at the end of a very long line.

## Removing unecessary characters

Examples:

```js
() => { return [1, 2]; }
// can be shortened to
() => [1, 2]

() => { return {/*an object*/}; }
// can be shortened to
() => ({/*an object*/})

[].map((x) => mapToY(x))
// can be shortened to
[].map(mapToY)

<Component field={'string'} />
// can be shortened to
<Component field="string" />

if(a!== null && a !== undefined) { return a; } else { return b; }
// can be shortened to
a ?? b

// use type inference :
const two: () => number = () => 2;
// can be shortened to
const two = (): number => 2;
// can be shortened to
const two = () => 2;
```

## Inlining small "magic strings" or "magic numbers" (pros & cons)

_Always_ extracting them is a cargo cult (https://en.wikipedia.org/wiki/Cargo_cult_programming).  
The best description for a "magic" string or number is often its value.  
For example, `if (user.age < 18)` vs `if (user.age < MIN_AGE)`  
where `const MIN_AGE = 18` is declared somewhere else in the code.  
The reader has to navigate to `MIN_AGE` to understand the code, which can create **context-switch**.  
Numbers and strings are immutable in JS. Extracting them doesn't help with equality.  
Typescript make them easy and safe to use via `type YesNo = "yes" | "no"`.  
If the value becomes hard to parse and equality check **for a human reader**, extracting will make it easier at the cost of navigation.  
An example where extracting helps is colors in a design-system, `grey100` is easier to understand, remember and use compared to `"#E1E1E1"`.

## Shortening too long and descriptive names (pros & cons)

Long and descriptive name favors understanding the writer's intent, but not what the code **actually does**.  
They increase line length & line wrap, are harder to parse for a human reader (it's hard to tell among long names which is which).  
As an example, `userFromDatabaseWithAge` can probably be shortened to `user`, and the extra information kept implicit.
Researches show that long and descriptive name **don't help prevent/fix bugs** : http://www2.unibas.it/gscanniello/Giuseppe_Scanniello%40unibas/Home_files/TOSEM.pdf (summary: https://hillelwayne.com/post/the-best-se-paper/
)
ex: https://www.codesimplicity.com/wp-content/uploads/2022/05/CodeSimplicity.pdf "Readability" chapter (long vs short, spaced vs compact...).

## Single character variables

In situations like map/filtering an array, the name of the variable is often redundant, using a single character won't obfuscate the code in simple scenarios.
ex:

```js
users.filter((u) => u.age >= 18)
```

## Number of line per file

No perfect size & quite subjective.

- too small = file navigation overhead => context-switch => productivity loss
- too long = scroll / parsing / carret navigation overhead => lose track of what you're doing => productivity loss

A 2K screen fits around 60 lines of code, a MacBook Pro 15" screen fits around 40 lines of code.  
Books tend to have around 50 lines per page.

Using organic navigation (via "go to reference" / "find implementations") exclusively with 1 file open can make small files easier to navigate.
On the other hand, someone who uses shortcuts like ctrl+tab to navigate between files might have a harder time when too many files are open.

## Component-based separation of concern: jsx & css & i18n & etc in the same file

It's often easier to picture what a component looks like when you can see the css and the i18n strings.
