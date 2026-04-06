import { Player, Missile, checkCollision } from '@/game';
import { Egg } from './Egg';
import { allLevels } from './levels/index';
import { LevelDefinition } from './levels/levelTypes';
import { createEnemy } from './enemies/enemyRegistry';
import { IEnemy } from './enemies/enemyTypes';
import { loadAllAssets, ImageMap, spaceshipImgUrl, backgroundImgUrl } from './AssetLoader';
import { InputManager } from './InputManager';

interface GameEngineProps {
  onGameOver: () => void;
  onGameWin: () => void;
  setScore: (updater: (prevScore: number) => number) => void;
}

export class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private props: GameEngineProps;

  private player!: Player;
  private enemies: IEnemy[] = [];
  private missiles: Missile[] = [];
  private eggs: Egg[] = [];

  private currentLevelIndex = 0;
  private currentWaveIndex = 0;
  private allLevels: LevelDefinition[] = allLevels;

  private shootTimer = 0;
  private shootInterval = 20;

  private input!: InputManager;
  private gameStarted = false;
  private gameLoopRef?: number;
  private images: ImageMap = {};

  constructor(canvas: HTMLCanvasElement, props: GameEngineProps) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.props = props;
    this.runGameLoop = this.runGameLoop.bind(this);
  }

  // --- Level / Wave ---

  private loadLevel(levelIndex: number) {
    if (levelIndex >= this.allLevels.length) {
      this.props.onGameWin();
      this.stop();
      return;
    }
    this.currentLevelIndex = levelIndex;
    this.currentWaveIndex = 0;
    this.enemies = [];
    this.eggs = [];
    this.missiles = [];
    this.loadWave(0);
  }

  private loadWave(waveIndex: number) {
    const levelData = this.allLevels[this.currentLevelIndex];
    if (waveIndex >= levelData.waves.length) {
      this.props.onGameWin();
      this.stop();
      return;
    }
    this.currentWaveIndex = waveIndex;
    const waveData = levelData.waves[waveIndex];

    waveData.chickens.forEach(config => {
      const targetX = config.formationPos.x * this.canvas.width;
      const targetY = config.formationPos.y * this.canvas.height;

      const enemy = createEnemy(
        config.type,
        {
          startX: Math.random() * this.canvas.width,
          startY: -50,
          targetX,
          targetY,
          health: config.health,
        },
        this.images,
      );
      if (enemy) this.enemies.push(enemy);
    });
  }

  // --- Update ---

  private update() {
    const pos = this.input.currentPos;
    this.player.update(pos.x, pos.y);

    // Auto-fire
    this.shootTimer++;
    if (this.shootTimer >= this.shootInterval) {
      this.missiles.push(this.player.shoot());
      this.shootTimer = 0;
    }

    // Update missiles
    for (let i = this.missiles.length - 1; i >= 0; i--) {
      this.missiles[i].update();
      if (this.missiles[i].isOffScreen()) this.missiles.splice(i, 1);
    }

    // Update enemies
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      enemy.update(this.canvas.width, this.canvas.height);

      // Egg laying
      if (enemy.canLayEgg?.()) {
        const egg = enemy.layEgg?.();
        if (egg) this.eggs.push(egg);
      }

      // Missile-Enemy collision
      let enemyHit = false;
      for (let j = this.missiles.length - 1; j >= 0; j--) {
        if (checkCollision(this.missiles[j], enemy)) {
          enemy.takeDamage(1);
          this.missiles.splice(j, 1);
          if (enemy.isDead()) {
            this.enemies.splice(i, 1);
            enemyHit = true;
            this.props.setScore(prev => prev + 10);
          }
          break;
        }
      }
      if (enemyHit) continue;

      // Player-Enemy collision
      if (checkCollision(this.player, enemy)) {
        this.props.onGameOver();
        this.stop();
        return;
      }
    }

    // Update eggs
    for (let i = this.eggs.length - 1; i >= 0; i--) {
      this.eggs[i].update();
      if (checkCollision(this.player, this.eggs[i])) {
        this.props.onGameOver();
        this.stop();
        return;
      }
      if (this.eggs[i].isOffScreen(this.canvas.height)) {
        this.eggs.splice(i, 1);
      }
    }

    // Next wave
    if (this.enemies.length === 0 && this.eggs.length === 0) {
      this.loadWave(this.currentWaveIndex + 1);
    }
  }

  // --- Render ---

  private render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const bg = this.images[backgroundImgUrl];
    if (bg) {
      this.ctx.drawImage(bg, 0, 0, this.canvas.width, this.canvas.height);
    } else {
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.player.draw(this.ctx);
    this.missiles.forEach(m => m.draw(this.ctx));
    this.enemies.forEach(e => e.draw(this.ctx));
    this.eggs.forEach(e => e.draw(this.ctx));
  }

  // --- Game Loop ---

  private runGameLoop() {
    if (!this.gameStarted) return;
    this.update();
    this.render();
    this.gameLoopRef = requestAnimationFrame(this.runGameLoop);
  }

  // --- Start / Stop ---

  public async start(levelToLoad: number) {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.input = new InputManager(
      this.canvas,
      this.canvas.width / 2,
      this.canvas.height - 80,
    );
    this.input.attach();

    try {
      this.images = await loadAllAssets();

      const playerImage = this.images[spaceshipImgUrl];
      if (!playerImage) throw new Error('Player image failed to load!');
      this.player = new Player(this.canvas.width, this.canvas.height, playerImage);

      this.loadLevel(levelToLoad);
      this.gameStarted = true;
      this.runGameLoop();
    } catch (error) {
      console.error('Failed to start the game:', error);
    }
  }

  public stop() {
    this.gameStarted = false;
    if (this.gameLoopRef) {
      cancelAnimationFrame(this.gameLoopRef);
    }
    this.input?.detach();
    this.enemies = [];
    this.missiles = [];
    this.eggs = [];
  }
}
