export class Point{

    private x:number;
    private y:number;

    constructor(x: number, y: number){

        this.x = x;
        this.y = y; 
    }

    public getX():number{
        return this.x;
    }
    public setX(x: number) {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }
    public setY(y: number) {
        this.y = y;
    }

    public toString():string{

        return ("(" + this.x + "," + this.y + ")")
    }

    public distanceToOrigin():number{
        
        let resultado: number = 0; 

        resultado = Math.sqrt(((this.x * this.x) - 2 * this.x * 0 + (0 * 0) + (this.y * this.y) - 2 * this.y * 0 + (0 * 0)));

        return resultado;
    }

    public calculateDistance(anotherPoint:Point): number {                      // se hace tienendo en cuenta que Point interno es el origen

        let resultado: number = 0;

        resultado = Math.sqrt(((anotherPoint.getX() * anotherPoint.getX() - 2 * this.x * anotherPoint.getX() + (this.x * this.x)) + 
                               (anotherPoint.getY() * anotherPoint.getY()) - 2 * this.y * anotherPoint.getY() + (this.y * this.y)));

        return resultado;
    }

    public calculateQuadrant():number{

        let resultado: number = 0;

        if(this.x == 0 || this.y == 0){
            resultado = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            resultado = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            resultado = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            resultado = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            resultado = 4;
        }

        return resultado;
    }

    public calculateNearest(points: Point[]):Point{


        let resultado: Point = points[0];
        let distance:number = this.calculateDistance(points[0]);

        for (let i = 0; i < points.length; i++){

            let newDistance = this.calculateDistance(points[i])
            if (newDistance < distance){

                distance = newDistance; 
                resultado = points[i]
            }

        }

        return resultado;
    }
}
