import { IEnemy, FormationEnemyConfig } from './enemyTypes';
import { NormalChicken } from './NormalChicken';
import { FastChicken } from './FastChicken';
import { BomberChicken } from './BomberChicken';

import chickenImgUrl from '@/static/images/chicken.png';
import fastChickenImgUrl from '@/static/images/fastchicken.png';
import bomberChickenImgUrl from '@/static/images/bomberchicken.png';

type EnemyConstructor = new (config: FormationEnemyConfig) => IEnemy;

interface EnemyRegistryEntry {
  constructor: EnemyConstructor;
  imageUrl: string;
}

const enemyRegistryData: Record<string, EnemyRegistryEntry> = {
  'normal': { constructor: NormalChicken, imageUrl: chickenImgUrl },
  'fast': { constructor: FastChicken, imageUrl: fastChickenImgUrl },
  'bomber': { constructor: BomberChicken, imageUrl: bomberChickenImgUrl },
};

export function createEnemy(
  type: string,
  baseConfig: Omit<FormationEnemyConfig, 'image'>,
  loadedImages: { [imageUrl: string]: HTMLImageElement },
): IEnemy | null {
  const entry = enemyRegistryData[type];
  if (!entry) {
    console.error(`Unknown enemy type: "${type}"`);
    return null;
  }

  const image = loadedImages[entry.imageUrl];
  if (!image) {
    console.error(`Image not loaded for enemy type "${type}": ${entry.imageUrl}`);
    return null;
  }

  return new entry.constructor({ ...baseConfig, image });
}

export const requiredEnemyImageUrls = Object.values(enemyRegistryData).map(e => e.imageUrl);
