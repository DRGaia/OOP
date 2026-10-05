export interface Shape {

    draw(ctx: CanvasRenderingContext2D): void

    toString(): string
}

export abstract class BaseShape implements Shape {
  private style: string;

  public constructor(style: string = "black") {
    this.style = style;
  }

  public toString(): string {
    return `Shape with style ${this.style}`;
  }

  public abstract draw(ctx: CanvasRenderingContext2D): void;

  public getStyle(): string {
    return this.style;
  }
}

export class Rectangle extends BaseShape {
  private location: Point;
  private size: Size;

  public constructor(x: number, y: number, width: number, height: number, style: string = "black") {
    super(style);
    this.location = new Point(x, y);
    this.size = new Size(width, height);
  }

  public toString(): string {
    return `Rectangle with location ${this.location}, size ${this.size} and style ${this.getStyle()}`;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = this.getStyle();
    ctx.rect(this.location.x, this.location.y, this.size.width, this.size.height);
    ctx.stroke();
  }
}

export class Circle extends BaseShape {
  private center: Point;
  private radius: number;

  public constructor(x: number, y: number, radius: number, style: string = "black") {
    super(style);
    this.center = new Point(x, y);
    this.radius = radius;
  }

  public toString(): string {
    return `Circle with center ${this.center}, radius ${this.radius} and style ${this.getStyle()}`;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = this.getStyle();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

export class Point {
  private _x: number;
  private _y: number;

  public constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public toString(): string {
    return `${this.x}, ${this.y}`;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export class Size {
  private _width: number;
  private _height: number;

  public constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public toString(): string {
    return `${this.width} x ${this.height}`;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(0, 0, this.width, this.height);
    ctx.stroke();
  }
}