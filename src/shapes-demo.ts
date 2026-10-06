export { }

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2

const rectangle = {
    x: xCenter - 190,
    y: yCenter - 90,
    width: 400,
    height: 200,

    draw: function() {
        ctx.fillStyle = "#ffffffff",
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

const rectangleBack = {
    x: xCenter - 200,
    y: yCenter - 100,
    width: 420,
    height: 220,

    draw: function() {
        ctx.fillStyle = "#bbbbbbff",
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

const circle = {
  x: xCenter - -10,
  y: yCenter - -10,
  radius1: 70,
  radius2: 0,
  draw() {
     ctx.fillStyle = "#DA291C"
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius1, circle.radius2, circle.radius1 * Math.PI)
        ctx.fill();
  }
}

rectangleBack.draw()
rectangle.draw()

circle.draw()