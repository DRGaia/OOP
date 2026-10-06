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

export class rectangle extends BaseShape {

    // The location of the top-left corner of the rectangle.
    private location: Point

    // The width and height of the rectangle.
    private size: Size

    /**
     * Constructs and initializes a rectangle with the specified location, size, and style.
     * 
     * @param x the X coordinate of the rectangle.
     * 
     * @param y the Y coordinate of the rectangle.
     * 
     * @param width the width of the rectangle.
     * 
     * @param height the height of the rectangle.
     * 
     * @param style the style used to draw the rectangle.
     */
    constructor(x: number, y: number, width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
    }

    /**
     * Draws the rectangle on the specified canvas context.
     * 
     * @param ctx the canvas rendering context used to draw the rectangle.
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.getStyle()
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height)
    }

    /**
     * @returns a string containing the rectangle's location, size, and style.
     */
    public toString(): string {
        return `Rectangle with location ${this.location}, size ${this.size}, ${super.toString()}`
    }
}

export class circle extends BaseShape {

    // The center point of the circle.
    private center: Point

    // The radius of the circle.
    private radius: number

    /**
     * Constructs and initializes a circle with the specified center, radius, and style.
     * 
     * @param x the X coordinate of the center of the circle.
     * 
     * @param y the Y coordinate of the center of the circle.
     * 
     * @param radius the radius of the circle.
     * 
     * @param style the style used to draw the circle.
     */
    constructor(x: number, y: number, radius: number, style: string) {
        super(style)
        this.center = new Point(x, y)
        this.radius = radius
    }

    /**
     * Draws the circle on the specified canvas context.
     * 
     * @param ctx the canvas rendering context used to draw the circle.
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.getStyle()
        ctx.beginPath()
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    /**
     * @returns a string containing the circle's center, radius, and style.
     */
    public toString(): string {
        return `Circle with location ${this.center}, radius ${this.radius}, ${super.toString()}`
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

export class rhombus extends BaseShape {

    // The location of the top-left corner of the rhombus.
    private location: Point

    // The width and height of the rhombus.
    private size: Size

    /**
     * Constructs and initializes a rhombus.
     * 
     * @param size the width and height of the rhombus.
     * 
     * @param location the top-left location of the rhombus.
     * 
     * @param style the style used to draw the rhombus.
     */
    constructor(x: number, y: number, width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
    }

    /**
     * Draws the rhombus on the specified canvas context.
     * 
     * @param ctx the canvas rendering context used to draw the rhombus.
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.getStyle()

        ctx.beginPath()

        ctx.moveTo(
            this.location.x + this.size.width / 2,
            this.location.y
        )

        ctx.lineTo(
            this.location.x + this.size.width,
            this.location.y + this.size.height / 2
        )

        ctx.lineTo(
            this.location.x + this.size.width / 2,
            this.location.y + this.size.height
        )

        ctx.lineTo(
            this.location.x,
            this.location.y + this.size.height / 2
        )

        ctx.closePath()
        ctx.fill()
    }
    
    /**
     * @returns a string containing the rhombus's location, size, and style.
     */
    public toString(): string {
        return `Rhombus with location ${this.location}, size ${this.size}, ${super.toString()}`
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