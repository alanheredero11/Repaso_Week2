import { Point } from "./point";

let myPoint = new Point(-8, 3)
let myPoint1 = new Point(8, 13)
let myPoint2 = new Point(-8, 83)
let myPoint3 = new Point(58, 3)
let myPoint4 = new Point(38, 73)

let points: Point[] = [myPoint1, myPoint2, myPoint3, myPoint4]

// console.log(myPoint.getX())
// console.log(myPoint.getY())

// console.log(myPoint.toString())

// console.log(myPoint.distanceToOrigin())

// console.log(myPoint.calculateDistance(new Point(39, 23)))

// console.log(myPoint.calculateQuadrant())

console.log(myPoint.calculateNearest(points))

