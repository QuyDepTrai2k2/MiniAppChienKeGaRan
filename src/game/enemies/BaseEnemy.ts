import { IEnemy, FormationEnemyConfig, EnemyState } from './enemyTypes';
import { Egg } from '../Egg';

export abstract class BaseEnemy implements IEnemy {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  health: number;
  maxHealth: number;
  protected state: EnemyState = EnemyState.ENTERING;

  protected targetX: number;
  protected targetY: number;
  protected speed: number;

  protected eggLayTimer: number = 0;
  protected eggLayInterval: number = 0;

  constructor(config: FormationEnemyConfig, width: number, height: number, speed: number, eggLayInterval: number) {
    this.x = config.startX;
    this.y = config.startY;
    this.image = config.image;
    this.health = config.health;
    this.maxHealth = config.health;
    this.width = width;
    this.height = height;
    this.targetX = config.targetX;
    this.targetY = config.targetY;
    this.speed = speed;
    this.eggLayInterval = eggLayInterval;
    this.eggLayTimer = Math.random() * eggLayInterval;
  }

  // Shared ENTERING movement — returns true when arrived at target
  protected moveToTarget(): boolean {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.speed) {
      this.x = this.targetX;
      this.y = this.targetY;
      return true;
    }

    this.x += (dx / distance) * this.speed;
    this.y += (dy / distance) * this.speed;
    return false;
  }

  update(canvasWidth: number, canvasHeight: number): void {
    if (this.state === EnemyState.ENTERING) {
      if (this.moveToTarget()) {
        this.state = EnemyState.ACTIVE;
      }
    } else if (this.state === EnemyState.ACTIVE) {
      this.eggLayTimer--;
      this.onActive(canvasWidth, canvasHeight);
    }
  }

  // Subclasses override this for custom ACTIVE behavior (e.g. BomberChicken moves sideways)
  protected onActive(_canvasWidth: number, _canvasHeight: number): void {
    // Default: stay in place
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.drawHealthBar(ctx);
  }

  protected drawHealthBar(ctx: CanvasRenderingContext2D): void {
    if (this.maxHealth > 1 && this.health < this.maxHealth) {
      const barHeight = 5;
      const barY = this.y - barHeight - 2;
      const healthPercent = this.health / this.maxHealth;

      ctx.fillStyle = 'red';
      ctx.fillRect(this.x, barY, this.width, barHeight);

      ctx.fillStyle = 'green';
      ctx.fillRect(this.x, barY, this.width * healthPercent, barHeight);

      ctx.strokeStyle = 'black';
      ctx.strokeRect(this.x, barY, this.width, barHeight);
    }
  }

  takeDamage(amount: number): void {
    this.health -= amount;
  }

  isDead(): boolean {
    return this.health <= 0;
  }

  canLayEgg(): boolean {
    if (this.state === EnemyState.ACTIVE && this.eggLayTimer <= 0) {
      this.eggLayTimer = Math.random() * this.eggLayInterval;
      return true;
    }
    return false;
  }

  layEgg(): Egg {
    return new Egg(this.x + this.width / 2, this.y + this.height);
  }
}