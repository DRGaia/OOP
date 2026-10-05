import { ShapeViewer } from "./shape-viewer.js"
import { Circle, Rectangle } from "./shapes.js"

let shapeViewer: ShapeViewer = new ShapeViewer(document.getElementById("canvas") as HTMLCanvasElement)

shapeViewer.addShapes([
    new Rectangle(400, 200, 400, 200, "red"),
    new Rectangle(350, 275, 200, 100, "green"),
    new Rectangle(500, 400, 50, 100, "pink"),
    new Circle(150, 150, 50, "blue"),
    new Circle(650, 150, 100, "gray"),
    new Circle(400, 450, 150, "violet")
])

shapeViewer.addShape(new Rectangle(100, 100, 200, 100, "pink"))