---
title: Gamedev notes
date: 2026/8/3
description: gamedev learnings...
tag: gamedev
author: You
---

# Game Dev notes

## AABB

axis aligned bounding box -> cheap collision checks with rectangles.

```
const overlaps = (a: Rect, b: Rect) =>
  a.x < b.x + b.w && a.x + a.w > b.x &&
  a.y < b.y + b.h && a.y + a.h > b.y;
```
Use strict < so touching doesn't count as overlap (ex: standing on floor is not inside the floor)


## ECS

Entity Component System

An alternative to inheritance, where for example:

System:
The engine, ex: "each ticks, for entities with gravity, apply gravity"
Entity is just an ID, the data structure is a bit like a database, ex: id player_1 is in the "gravity table".

ex:

```
func create_entity() -> int:
        next_id += 1
        return next_id

func _ready() -> void:
        var player := create_entity()
        positions[player] = Vector2(10, 50)
        velocities[player] = Vector2.ZERO
        gravities[player] = 900.0

        var torch := create_entity()
        positions[torch] = Vector2(200, 10)

func _physics_process(dt: float) -> void:
        gravity_system(dt)
        movement_system(dt)

func gravity_system(dt: float) -> void:
        for id in gravities:
                if velocities.has(id):
                        velocities[id].y += gravities[id] * dt

func movement_system(dt: float) -> void:
        for id in velocities:
                positions[id] += velocities[id] * dt
```


## Rollback & determinism

state = step(input, state)

Favor int for physics instead of floats, seed all random calls...

## Follow the leader

ex: Madeline's hair, scarf, etc. Cheap compute.

```
nodes[0] = head_anchor # global positions
for i in 1..n:
    target = nodes[i-1] + rest_offset
    moved = move_toward(nodes[i], target, speed * dt)
    nodes[i] = nodes[i-1] + limit_length(moved - nodes[i-1], max_dist)
```

## Verlet integration (+ sleep) & more advanced physics

ex: ropes, hairs...
Put to sleep the simulation to save compute when below a min speed threshold. More expensive than "follow the leader".
Compute every N pixel and smooth the line for less compute.

"Advanced Character Physics" paper:
https://www.cs.cmu.edu/afs/cs/academic/class/15462-s13/www/lec_slides/Jakobsen.pdf

"Position based dynamics" paper:
https://matthias-research.github.io/pages/publications/posBasedDyn.pdf

Penalty physics: on impact, "sink" into the surface before bouncing back -> more playfull, bouncy, juicy
Pair with spring squash from physics + squash itself is a spring for wobble after bouncing back.

Procedural pixel-art squash n stretch -> keep volume


## Coyote, corner corrections, buffers, ground snap...

For coyote_remaining, we can check "was_on_ground and not is_on_ground", or simply assign it every frame we're on ground.
Buffers: simple approach -> jump_buffer_remaining = JUMP_BUFFER. Fighters, rollback -> ring buffer with all inputs pressed during this frame

## Juice etc

tweens -> function that completes inbetweens of "from A to B" (ex: easing functions).
squash n stretch -> Disney 12 principles
responsiveness -> user input -> no delay, instant feedback ex: instant jump with no startup, no attack startup...
permissive -> coyote time, corner corrections, buffers etc
emphasis via hitstop, freeze, slowmo, halfgrav...
anticipation, telegraphs -> ex: boss fights
recoil -> shooting pushes back the shooter (ex: bow shots, fireballs, guns...)
camera -> screenshake in the impact direction
vfx particles -> dust, splash, trails, flash tint on hit
sfx -> randomize pitch to avoid repeatitiveness, duck bgm on big hits, sync with impact/input
haptics, rumble -> match impact
ui -> squashy buttons, screen transitions, ticking numbers...
secondary motion -> ex: celeste hairs -> sells realism, more immersive

## NPC/enemies descision tree, boss fights

FSM with a central "CHOOSE" state (Hub-and-spoke FSM). Go back to CHOOSE after every action ends.
CHOOSE:
filter "can do it" (ex: don't jump off a ledge)
weighted pick (random + weights per action) + avoid repetition logic

+ imperative actions (ex: after hitstun > do this attack)
each attack are telegraph(distinct)>attack>recovery>choose
