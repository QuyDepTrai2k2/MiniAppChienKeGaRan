export class Egg {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;

  constructor(x: number, y: number) {
    this.width = 15;
    this.height = 20;
    this.x = x - this.width / 2;
    this.y = y;
    this.color = 'white';
    this.speed = 3;
  }

  update() {
    this.y += this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  isOffScreen(canvasHeight: number): boolean {
    return this.y > canvasHeight;
  }
}
