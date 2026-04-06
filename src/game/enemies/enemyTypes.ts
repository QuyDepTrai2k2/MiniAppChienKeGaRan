import { Egg } from '../Egg';

export enum EnemyState {
  ENTERING,
  ACTIVE,
  EXITING,
}

export interface FormationEnemyConfig {
  startX: number;
  startY: number;
  image: HTMLImageElement;
  health: number;
  targetX: number;
  targetY: number;
}

export interface IEnemy {
  x: number;
  y: number;
  width: number;
  height: number;
  health: number;

  update(canvasWidth: number, canvasHeight: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
  takeDamage(amount: number): void;
  isDead(): boolean;
  canLayEgg?(): boolean;
  layEgg?(): Egg;
}
