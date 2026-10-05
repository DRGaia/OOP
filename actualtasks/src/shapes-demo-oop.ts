import { Rectangle } from "./shapes.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

const rect1 = new Rectangle(40, 50, 200, 100, "blue");


rect1.draw(ctx);