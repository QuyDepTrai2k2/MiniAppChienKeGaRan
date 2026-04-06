export class InputManager {
  private canvas: HTMLCanvasElement;
  private isMouseDown = false;

  public currentPos = { x: 0, y: 0 };

  constructor(canvas: HTMLCanvasElement, initialX: number, initialY: number) {
    this.canvas = canvas;
    this.currentPos = { x: initialX, y: initialY };

    this.handleTouch = this.handleTouch.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  private handleTouch(e: TouchEvent) {
    e.preventDefault();
    const touch = e.touches[0];
    this.currentPos.x = touch.clientX;
    this.currentPos.y = touch.clientY;
  }

  private handleMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    this.currentPos.x = e.clientX;
    this.currentPos.y = e.clientY;
  }

  private handleMouseMove(e: MouseEvent) {
    if (!this.isMouseDown) return;
    this.currentPos.x = e.clientX;
    this.currentPos.y = e.clientY;
  }

  private handleMouseUp() {
    this.isMouseDown = false;
  }

  attach() {
    this.canvas.addEventListener('touchstart', this.handleTouch, { passive: false });
    this.canvas.addEventListener('touchmove', this.handleTouch, { passive: false });
    this.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
    this.canvas.addEventListener('mouseup', this.handleMouseUp);
    this.canvas.addEventListener('mouseleave', this.handleMouseUp);
  }

  detach() {
    this.canvas.removeEventListener('touchstart', this.handleTouch);
    this.canvas.removeEventListener('touchmove', this.handleTouch);
    this.canvas.removeEventListener('mousedown', this.handleMouseDown);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('mouseup', this.handleMouseUp);
    this.canvas.removeEventListener('mouseleave', this.handleMouseUp);
  }
}
