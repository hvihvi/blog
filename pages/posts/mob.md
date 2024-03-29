---
title: Mob Programming & Teamwork
date: 2022/10/07
description: About mob programming, psychological safety...
tag: productivity, management, motivation, learning
author: You
---

import Image from 'next/image'

# Mob Programming

Mob programming and the power of Flow (Woody Zuill):
https://www.youtube.com/watch?v=28S4CVkYhWA

Developer productivity (lots of great illustrations) https://about.sourcegraph.com/blog/developer-productivity-thoughts

All the team working on the same thing.

- Knowledge sharing / learning
- Continuous peer review
- Faster feedback
- Focus on the right thing
- Higher quality
- Eliminates queues & inventory
- Lower mental stack
- Onboarding
- less context-switching & downtime
- More engaging, fun, less stressful...
- trunk-based development
- one piece flow / Just-In-Time

## "How can you be productive with 5 people at one computer?"

Productivity = Getting things done  
Effectiveness = Getting the right things done

Reduce "Question Queue Time", the amount of time one must wait to get an answer to a blocking question.

Value stream map diagram https://youtu.be/28S4CVkYhWA?t=1206

A blocked single individual working on something else generates more stock.

Longer cycle time, inventory, lower quality.

Context switching is mitigated.

As a group, the right things get done faster, the wrong things fade away.

Parallelism can coexist with Mob Programming:

- Someone can chose to pick up a simplistic task on the side
- Research on the side
- Documentation on the side
- When long task like tests/deploys run, someone can keep an eye on it to do manual tests, merge or ship to production
- Taking notes (red bin, docs etc)

## Psychological safety

**Project Aristole** is a research from Google (over 180+ teams) that points **psychological safety** as the most notable factor to their team's success, and confirms some of what's in the **Drive** book (autonomy, meaning, impact...).

In a **Mob Programming** group, people need to **feel safe leaving/joining** whenever they feel like they need time to think or work alone for a bit. Introvert friendly environment.  
This includes feeling safe experimenting, exploring, discovery, asking...  
NASA engineers enforce an environment where it is very welcome to not know something and ask, to minimise errors.

The group also need to **feel safe speaking**. For example, juniors should be heard in priority to not feel left out, and seniors should try not to take too much space and pick oportunities to share knowledge. When multiple solutions come up, it is ok to experiment with them all, and not shut down prematurely someone's idea.

Talk on psychological safety: https://youtu.be/LhoLuui9gX8.
Orthogonal to motivation :

- low psychological-safety / low motivation : apathy zone
- low psychological-safety / high motivation : anxiety zone
- high psychological-safety / low motivation : comfort zone
- high psychological-safety / high motivation : learning zone :stonks:

## Workflow / Setup (personal preferences)

Extreme programming style with **timers** and quick switches can create a stressful environment (harms psychological safety & motivation). I find it best to ask every 2h/half-day "want me to pick up the keyboard?", or ask if "anyone wants to take over?" when I'm tired.

Coding on someone else's keyboard/IDE can be a painful experience. **Remote working with a shared screen** is perfect for mob programming, everyone can focus on the driver's screen and help him navigate.

Slack's **drawing feature** or Gather's **dot feature** displayed on the streamer's screen facilitate communication on the shared screen to draw attention.

**Trunk based development** fits mob programming perfectly. Merge per commit into the `main` branch as soon as a commit is valid, **no merge requests** needed (can be used for validation pipelines), code reviews and manual tests are done live.

## Mob compared to Kanban/Scrum

With a **single piece flow**, Kanban boards are much less necessary. No WIP (WIP=1), no swimlanes, no spec/dev/test/etc columns.

Kanban creates **wait times** and try to make them visible. Any issue that isn't being worked on is **stock/waste**. Typical solutions to reduce wait time is to split into shorter tasks, and reduce WIP. Mob pushes this to the limit with **WIP=1** and tasks are single commits (smallest deliverable step forward possible).

Daily **stand-up meetings** are much shorter.

Scrum Poker planings are **prematurate work**. Heavy ticket specifications as well. If the mob includes a PO/PM most this work is done on the fly, when we start working on it.
The result is of higher quality as it benefits from the same "brain to brain" effort and question/dialog takes place, just like it does for code.

A lot of **rework** in scrum/kanban come from misunderstandings between devs and PO/PMs.
If devs don't have to wait for a PO/PM to get feedback, a lot of time is saved.

No parallel branches and no long lived branches = **no conflicts**.

No need for shared "staging" environments in the team.

No **context-switching** (or reduced). If you forget what you were doing due to a context-switch, the group is more likely to get back on track quickly than a single individual. Someone in the group can get ready for the next task and pick up the keyboard/screen-share as soon as the previous task ends.

<Image
  src="/images/mob-schema.png"
  alt="mob schema"
  width={2522}
  height={5073}
/>

## Iteration time, Cooldown time, empathy

The trend to shorten Cycle times as much as possible has shifted towards a more balanced approach, long enough to build something **meaningful** (increases intrinsic motivation).  
Short cycle times tend to go in the wrong direction, it's a poor metric.

Allowing time to work on ideation and user calls to **build user empathy**. Devs are more likely to make the right move when a product person isn't around (reduces blocking time), they feel more invested and requires less specifications.

Minimise fragmented meetings to favor flow (defragment devs' calendar, like a hard drive)
Context-switch cost on average **20min of flow** (according to Netlify)

> "shipping is the heartbeat of your team"

Shipping rate != Shipping finished feature rate
Shipping features at all cost creates **burnout factories**.
Shipping rate measures the ability to ship to production fast & often, not finished features.
shipping rate #1 engineering metric (TODO: find source)  
From a tech manager perspective, pushing devs to ship faster is counter-productive, remove things in the way instead. Devs want to ship.

Examples of longer cycle times & cooldown times:

- Netlify: 6 weeks product, 2 weeks free
- "Maker weeks" at Slack
- "Innovation days" at Slack, Google, Ambassador labs...
