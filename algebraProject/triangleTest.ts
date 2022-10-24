import { Triangle } from "./triangle";
import { Point } from "./point";

let vertex1 = new Point(2,6)
let vertex2 = new Point(12, 56)
let vertex3 = new Point(25, 36)

let triangulo: Triangle = new Triangle(new Point(2, 6), new Point(12, 56), new Point(25, 36))

console.log(triangulo.calculateLenghtSide())