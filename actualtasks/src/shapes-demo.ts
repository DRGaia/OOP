export {}

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

if (!ctx) {
  throw new Error("Canvas context not available")
}

const rectangle = {
  x: 50,
  y: 50,
  width: 150,
  height: 100,

  draw() {
    ctx!.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}


const circle = {
  x: 300,
  y: 200,
  radius: 50,

  draw() {
    ctx!.beginPath()
    ctx!.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2
    )
    ctx!.fill()
  }
}


rectangle.draw()
circle.draw()