import { BaseEnemy } from './BaseEnemy';
import { FormationEnemyConfig } from './enemyTypes';

export class NormalChicken extends BaseEnemy {
  constructor(config: FormationEnemyConfig) {
    super(config, 60, 60, /* speed */ 2.5, /* eggLayInterval */ 500);
  }
}
