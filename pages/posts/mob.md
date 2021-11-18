---
title: Mob Programming
date: 2021/11/02
description: About mob programming, psychological safety...
tag: web development
author: You
---

# Mob Programming

Mob programming and the power of Flow (Woody Zuill):
https://www.youtube.com/watch?v=28S4CVkYhWA

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
