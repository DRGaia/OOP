import { ShapeViewer } from "./shape-viewer.js"
import { circle, rectangle, rhombus } from "./shapes.js"

let shapeViewer: ShapeViewer = new ShapeViewer(document.getElementById("canvas") as HTMLCanvasElement)

shapeViewer.addShapes([
    new rectangle(400, 200, 100, 300, "yellow"),
    new circle(400, 500, 70, "yellow"),
    new circle(500, 500, 70, "yellow"),
    new circle(450, 200, 50, "yellow"),
    new circle(420, 400, 10, "black"),
    new circle(480, 400, 10, "black"),
    new rectangle(420, 500, 60, 20, "black"),
    new rhombus(400, 10, 100, 150, "lightgray")
])
/* Veridih */

