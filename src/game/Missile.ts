export class Missile {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 15;
    this.color = 'yellow';
    this.speed = 7;
  }

  update() {
    this.y -= this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  isOffScreen(): boolean {
    return this.y + this.height < 0;
  }
}
