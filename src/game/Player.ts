import { Missile } from './Missile';

export class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number, image: HTMLImageElement) {
    this.width = 60;
    this.height = 60;
    this.x = canvasWidth / 2 - this.width / 2;
    this.y = canvasHeight - this.height - 20;
    this.image = image;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  update(inputX: number, inputY: number) {
    this.x = inputX - this.width / 2;
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > this.canvasWidth) this.x = this.canvasWidth - this.width;

    this.y = inputY - this.height / 2;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > this.canvasHeight) this.y = this.canvasHeight - this.height;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  shoot(): Missile {
    const missileX = this.x + this.width / 2 - 2.5;
    const missileY = this.y;
    return new Missile(missileX, missileY);
  }
}
