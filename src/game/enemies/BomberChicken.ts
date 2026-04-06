import { BaseEnemy } from './BaseEnemy';
import { FormationEnemyConfig } from './enemyTypes';

export class BomberChicken extends BaseEnemy {
  private speedX = 1.5;
  private directionX = 1;

  constructor(config: FormationEnemyConfig) {
    super(config, 80, 80, /* speed */ 1, /* eggLayInterval */ 45);
  }

  // BomberChicken moves horizontally when ACTIVE
  protected onActive(canvasWidth: number): void {
    this.x += this.speedX * this.directionX;

    if (this.x <= 0 || this.x + this.width >= canvasWidth) {
      this.directionX *= -1;
    }
  }
}
