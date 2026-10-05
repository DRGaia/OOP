export {}

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
    const rectangle = {
        x: 50,
        y: 50,
        width: 200,
        height: 100,
        draw() {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };

    const circle = {
        x: 310,
        y: 195,
        radius: 40,
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    const rectangle2 = {
        x: 280,
        y: 35,
        width: 90,
        height: 75,
        draw() {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };

    const rectangle3 = {
        x: 40,
        y: 190,
        width: 110,
        height: 70,
        draw() {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };

    rectangle.draw();
    circle.draw();
    rectangle2.draw();
    rectangle3.draw();
}
