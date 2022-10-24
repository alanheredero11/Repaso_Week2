import { Point } from "./point";

let myPoint = new Point(5, 9)

console.log(myPoint.getX())
console.log(myPoint.getY())

console.log(myPoint.toString())

console.log(myPoint.distanceToOrigin())

console.log(myPoint.calculateDistance(new Point(39, 23)))