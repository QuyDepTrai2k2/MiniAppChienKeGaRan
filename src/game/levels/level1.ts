// src/game/levels/level1.ts
import { LevelDefinition } from "./levelTypes";

const level1: LevelDefinition = {
  level: 1,
  waves: [
    {
      chickens: [
        // Wave 1: A simple line of 5 normal chickens
        { type: 'normal', health: 1, formationPos: { x: 0.2, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.3, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.4, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.5, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.6, y: 0.2 } },
      ],
    },
    {
      chickens: [
        // Wave 2: Another line, slightly lower
        { type: 'normal', health: 1, formationPos: { x: 0.4, y: 0.3 } },
        { type: 'normal', health: 1, formationPos: { x: 0.5, y: 0.3 } },
        { type: 'normal', health: 1, formationPos: { x: 0.6, y: 0.3 } },
        { type: 'normal', health: 1, formationPos: { x: 0.7, y: 0.3 } },
        { type: 'normal', health: 1, formationPos: { x: 0.8, y: 0.3 } },
      ],
    },
  ],
};

export default level1;