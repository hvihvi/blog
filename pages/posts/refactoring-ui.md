---
title: Refactoring UI
date: 2021/12/01
description: Notes from the book...
tag: web development
author: You
---

# Refactoring UI

Book by Adam Wathan and Steve Schoger.

start with a feature => code > design > iterate

## Chosing a Personality

- Serif: sans serif is warm / serif is serious
- Colors: Blue = neutral / Pink = funny / Gold = expensive
- Border radius: more radius = more playful & less serious
- Tone of voice: Fiendly / Serious / Casual etc

## Hiararchy is everything

Size isn't everything, there are other way to build hierarchy.
We can also use:

- Font weight (bold)
- lighter/stronger font color contrast

Lighter colors based on background, not grey to tone down black text on a colored background.

## Emphasize by de-emphasizing

To make an element stand out, make other elements fade out.

## Labels to present data are last resort

Ex: "Name: Hugo" can likely be replaced by "Hugo". "Rooms: 3" can be replaced by "3 rooms".

De-emphasize labels when they are necessary, associated data is where the emphasize should be.

## Semantics are secondary

Ex: don't use same button size with different color for Create/Edit/Delete.
Colors can express red for delete etc, but it's best to give different size/weight to Create/Edit/Delete actions, to make the primary action obvious (ex: with a primary button), and secondary/tertiary actions with lighter buttons or links.

## Design system

A linear scale won't work, the gap between 2 sizes should increase as the size increase to be able to distinguish them.

Same goes for font sizes, colors ...

## Space

You don't have to fill the whole screen. It's best to center content on large screens and keep sides white.

## Grids are overrated

Grids are about giving % based space to a layout, but most of the time you don't want that.

Ex: A side menu works better with a fixed width.

Don't shrink elements until you need to.

## Responsive

As a general rule, elements that are large on large screens need to shrink faster than elements that are already fairly small.

Ex: a H1 heading font size needs to shrink on mobile more than paragraph font size.

## Avoid ambiguous spacing

Ex: Make a label closer to its question than to the previous question, not equi-distant. Same goes for titles etc.

## Text

Font: play it safe, sans serif, fallback to system fonts.
`-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;`

Line length **between 45 & 75 characters**. (easier to keep next line track)

**Line height is proportional:** The smaller the font is, the more space between lines is needed to keep it readable.

Use baseline over center.

Align-center works fine for max 3 lines, then it is usually better to go for align-left.

Right-align numbers in tables to have decimal always in the same place.

Can add letter spacing to all caps text to improve readability.

## Colors

To avoid contrast issue, use text based on background color.
For example, instead of a yellow tag with white text, use a light yellow tag with dark yellow text.

Don't rely on colors alone. An icon can help make sense of the color.

## Light / Shadows

Light comes from above.

Raised elements have light reflexion on top and shadow below, inset elements have top inner shadows and light on the bottom edge.

## Images

Text on top of images need contrast. Make the image transparent (and add a black overlay if it's white text). Or colorize the image. Or add text shadows.
