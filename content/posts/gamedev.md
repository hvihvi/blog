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
