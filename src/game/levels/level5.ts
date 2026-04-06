// src/game/levels/level5.ts
import { LevelDefinition } from "./levelTypes";

const level5: LevelDefinition = {
  level: 5,
  waves: [
    {
      chickens: [
        // Wave 1: A dense block of normal chickens
        { type: 'normal', health: 12, formationPos: { x: 0.2, y: 0.1 } },
        { type: 'normal', health: 12, formationPos: { x: 0.3, y: 0.1 } },
        { type: 'normal', health: 12, formationPos: { x: 0.4, y: 0.1 } },
        { type: 'normal', health: 12, formationPos: { x: 0.5, y: 0.1 } },
        { type: 'normal', health: 12, formationPos: { x: 0.6, y: 0.1 } },
        { type: 'normal', health: 12, formationPos: { x: 0.7, y: 0.1 } },
        { type: 'normal', health: 12, formationPos: { x: 0.8, y: 0.1 } },
      ],
    },
    {
      chickens: [
        // Wave 2: A V-formation of bombers and fast chickens
        { type: 'bomber', health: 33, formationPos: { x: 0.5, y: 0.1 } },
        { type: 'fast', health: 2, formationPos: { x: 0.4, y: 0.2 } },
        { type: 'fast', health: 2, formationPos: { x: 0.6, y: 0.2 } },
        { type: 'bomber', health: 33, formationPos: { x: 0.3, y: 0.3 } },
        { type: 'bomber', health: 33, formationPos: { x: 0.7, y: 0.3 } },
      ],
    },
    {
      chickens: [
        // Wave 3: Final assault
        { type: 'fast', health: 1, formationPos: { x: 0.1, y: 0.1 } },
        { type: 'fast', health: 1, formationPos: { x: 0.9, y: 0.1 } },
        { type: 'bomber', health: 20, formationPos: { x: 0.2, y: 0.2 } },
        { type: 'bomber', health: 20, formationPos: { x: 0.8, y: 0.2 } },
        { type: 'normal', health: 30, formationPos: { x: 0.5, y: 0.25 } },
      ],
    },
  ],
};

export default level5;