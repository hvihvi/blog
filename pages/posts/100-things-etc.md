---
title: 100 Things Every Designer Needs to Know About People (Susan Weinschenk)
date: 2023/6/12
description: Book notes
tag: user experience, book, developer experience, design, code quality, font
author: You
---

# 100 Things Every Designer Needs to Know About People (Susan Weinschenk)

This books cover 100 topics, mostly behavioural science, that can be used to improve user experience. Each topic is covered in about 2 pages making it easy to read and resume reading, each with a summary, a description of the research with links to sources and how to apply it.

Notes:

- [online readability formula calculator](https://readabilityformulas.com/free-readability-formula-tests.php), can be used to check code readability (no formula is perfect but it's a good start)
- Mary Dyson (2004) conducted research on line length and combed other studies to determine what line length people prefer. Her work showed that 100 characters per line is the optimal length for onscreen reading speed, but we prefer a short or medium line length (45 to 72 characters per line). Speed is affected by line breaks. Same for multiple columns, people prefer them even if it means reading slower. They perceive the text as easier and faster to read.
- Limit the number of choices to 3 or 4. The 4 item rule for short term memory also applies to long term memory, recollection drops past 4 items.
- Cognitive dissonance: When 2 ideas conflict people tend to get rid of 1 of them. Researches show that uncertain people argue harder. Ask for small commitments (ex: free trial) to be less likely to have a strong reaction against your product. Also applicable to tech discussions, there might be multiple solutions to a problem, to drag people to yours, make the commitment small instead of enforcing it (ex: "let's write a couple lines and revert if needed").
- Conceptual Model (actual product) and Mental Model (user's expected representation of the product) should be as close as possible. If not, the user will have to learn the product. Ex: a button that looks like a button but doesn't behave like one. The user will have to learn that it's not a button. The more the user has to learn, the more likely they are to make mistakes. Also applicable to code abstractions, if the abstraction doesn't match the mental model of the developer, they will have to learn it and make mistakes.
- People Screen out Information that Doesn’t Fit their Beliefs. Confirmation biais is a cognitive illusion where people pay attention to what they believe and filter out what doesn't fit. This is why it's hard to change people's mind. One way to get their attention is to start with an idea they already believe in, they will nod along, and then introduce the new information. Another way is via small commitments to the new idea.
- Flow State:
- - Occurs when people have very focused attention on a task
- - Needs a specific, clear and achievable goal
- - Need to feel there is a good chance of success. Difficulty should be challenging enough to hold attention and not give up
- - Need constant feedback to maintain flow
- - Need to feel in control
- - "Self" should not be threatened
- Sustained attention lasts about 7 to 10 minutes. Drops exponentially.
- Salient cues: People only pay attention to what you need for the task at hand. Design so that the salient cues are obvious. Ex: people don't pay attention to coin details, mostly size and color.
- Overhearing a call is more disturbing than hearing both sides of the conversation. We can't help but try to fill in the blanks. This is why it's hard to focus in an open space where people talk on the phone.
- People are worse at multitasking than they think. They are actually switching between tasks. Even when experimenting with trivial tasks like walking, people who walk and talk or watch phone ran into people more often. Another experiment shows that people who think they are good at multitasking are actually worse at it.
- People are more motivated as they get close to a goal. This is why it's important to show progress. Ex: progress bar, number of steps left, etc. A trick with fidelity cards is to stamp 2 slots and have 12 slots instead of 10 empty slots (called "goal-gradient effect"). Motivation plumets right after the goal is reached.
- Satisfy+Suffice=Satisfice. Term coined to describe descision strategy that picks "good enough" over "optimal". The book "Don't make me think" applies this, expect people to quickly glance at a website, don't expect them to read. This also applies to reading code, people more likely quickly glance at it looking for cues based on what they expect (=> make them obvious).
- The N (number) effect: When competing against 10 vs against 100, people are more motivated when they can assess where they stand.
- Dunbar's number: social limit of 150 people (holds across time and different cultures).
- Mirror neurons: people are hard wired for imitation and empathy. Mimicking someone's body language makes them like you more. Show someone doing a task to influence behaviour.
- Moral disengagement theory: people can and will become unethical as they distance themselves from the bad consequences of their actions. Ex: with a QA team or when someone else tests the devs' code, they are more likely to not care about bugs as they distance themselves from the consequences. People lie more on the phone and emails. Customer feedback is more accurate when gathered in person.
- Laughter bonds people together: risk with remote teams.
- Groupthink: people like to be part of group that has a “shared sense of reality.” The downside, though, is that people who are part of a well-working group tend to want to minimize conflict. This means sometimes important issues are not dealt with. To counter this, establish debate and disagreement as social norms for the group. Or ask for an outsider's review.
- Stories and Anecdotes Persuade more than Data Alone. Use stories in talks and presentations. Stories are processed in the brain differently than data, they evoke feelings and emotions. Therefore stories are more memorable and persuasive, more likely to be shared and remembered...
- No Emotions = No Decisions: people with damaged brain parts that handle emotions were unable to make decisions
- "Old brain": the author refers to the old brain as the parts that were hard wired in the brain through evolution. For example reaction time is better when something happen at the edge of our field of view. The brain looks for and craves the unexpected. To grab attention, design something new and novel. Uniform code might lower attention.
- People are happier when busy: example: 2min walk + 10min wait for a luggage, vs 12min walk. People are much happier in the second option because they are busy. Waiting is a flow killer (ex: long test suites, build times, slow IDE etc). People will do a task rather than be idle, but the task has to be seen as worthwhile. If people perceive it to be busywork, they prefer to stay idle.
- People are Poor Predictors: people greatly overestimate their own reactions to both pleasant and unpleasant events in their lives. Some people are generally happier or unhappier than others, and this level of happiness stays constant no matter what happens to them. This means that people are not very accurate in their predictions of future happiness.
- Yerkes-Donson law: Arousal(stress) increase performance up to a certain point then it drops drastically. It drops much sooner for complex tasks.
