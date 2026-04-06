// src/game/levels/level4.ts
import { LevelDefinition } from "./levelTypes";

const level4: LevelDefinition = {
  level: 4,
  waves: [
    {
      chickens: [
        // Wave 1: Mixed wave, fast chickens protected by normal ones
        { type: 'normal', health: 2, formationPos: { x: 0.3, y: 0.1 } },
        { type: 'normal', health: 2, formationPos: { x: 0.7, y: 0.1 } },
        { type: 'fast', health: 1, formationPos: { x: 0.5, y: 0.15 } },
        { type: 'normal', health: 2, formationPos: { x: 0.2, y: 0.2 } },
        { type: 'normal', health: 2, formationPos: { x: 0.8, y: 0.2 } },
      ],
    },
    {
      chickens: [
        // Wave 2: Bombers and fast chickens
        { type: 'bomber', health: 2, formationPos: { x: 0.2, y: 0.1 } },
        { type: 'bomber', health: 2, formationPos: { x: 0.8, y: 0.1 } },
        { type: 'fast', health: 1, formationPos: { x: 0.3, y: 0.2 } },
        { type: 'fast', health: 1, formationPos: { x: 0.5, y: 0.2 } },
        { type: 'fast', health: 1, formationPos: { x: 0.7, y: 0.2 } },
      ],
    },
  ],
};

export default level4;