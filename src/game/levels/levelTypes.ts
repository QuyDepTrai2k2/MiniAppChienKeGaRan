export type ChickenType = 'normal' | 'fast' | 'bomber';

export interface ChickenConfig {
  type: ChickenType;
  health: number;
  formationPos: { x: number; y: number }; // Normalized position (0.0 - 1.0)
}

export interface LevelWave {
  chickens: ChickenConfig[];
}

export interface LevelDefinition {
  level: number;
  waves: LevelWave[];
}
