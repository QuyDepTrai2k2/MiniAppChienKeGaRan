// src/game/levels/level3.ts
import { LevelDefinition } from "./levelTypes";

const level3: LevelDefinition = {
  level: 3,
  waves: [
    {
      chickens: [
        // Wave 1: Introduce bombers in a block
        { type: 'bomber', health: 2, formationPos: { x: 0.4, y: 0.1 } },
        { type: 'bomber', health: 2, formationPos: { x: 0.6, y: 0.1 } },
        { type: 'normal', health: 1, formationPos: { x: 0.3, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.5, y: 0.2 } },
        { type: 'normal', health: 1, formationPos: { x: 0.7, y: 0.2 } },
      ],
    },
    {
      chickens: [
        // Wave 2: A line of bombers
        { type: 'bomber', health: 2, formationPos: { x: 0.2, y: 0.2 } },
        { type: 'bomber', health: 2, formationPos: { x: 0.4, y: 0.2 } },
        { type: 'bomber', health: 2, formationPos: { x: 0.6, y: 0.2 } },
        { type: 'bomber', health: 2, formationPos: { x: 0.8, y: 0.2 } },
      ],
    },
  ],
};

export default level3;