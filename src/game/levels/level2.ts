// src/game/levels/level2.ts
import { LevelDefinition } from "./levelTypes";

const level2: LevelDefinition = {
  level: 2,
  waves: [
    {
      chickens: [
        // Wave 1: V-formation of fast chickens
        { type: 'fast', health: 1, formationPos: { x: 0.5, y: 0.1 } },
        { type: 'fast', health: 1, formationPos: { x: 0.4, y: 0.2 } },
        { type: 'fast', health: 1, formationPos: { x: 0.6, y: 0.2 } },
        { type: 'normal', health: 2, formationPos: { x: 0.3, y: 0.3 } },
        { type: 'normal', health: 2, formationPos: { x: 0.7, y: 0.3 } },
      ],
    },
    {
      chickens: [
        // Wave 2: Two lines of normal chickens as guards
        { type: 'normal', health: 1, formationPos: { x: 0.2, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.8, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.2, y: 0.3 } },
        { type: 'normal', health: 1, formationPos: { x: 0.8, y: 0.3 } },
        // A fast chicken in the middle
        { type: 'fast', health: 2, formationPos: { x: 0.5, y: 0.25 } },
      ],
    },
  ],
};

export default level2;