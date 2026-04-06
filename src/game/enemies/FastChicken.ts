import { BaseEnemy } from './BaseEnemy';
import { FormationEnemyConfig } from './enemyTypes';

export class FastChicken extends BaseEnemy {
  constructor(config: FormationEnemyConfig) {
    super(config, 60, 60, /* speed */ 3, /* eggLayInterval */ 300);
  }
}
