export {}

document.getElementById("myCanvas");
const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!

  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(125, 150);
    ctx.closePath(); 
    ctx.stroke();
  }
