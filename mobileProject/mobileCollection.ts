import { Mobile } from "./mobile";

export class MobileCollection{

    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[] = new Array)
    {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation()
    }

    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public setMobiles(mobiles: Mobile[]) {
        this.mobiles = mobiles
    }
    public getTotalPrice(): number {
        return this.totalPrice
    }
    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice
    }

    private totalPriceCalculation():number{

        let resultado:number = 0;

        for (let i = 0; i < this.mobiles.length; i++){

            resultado += this.mobiles[i].getPrice()

        }


        return resultado;
    }

    public printCollection(){

        for (let i = 0; i < this.mobiles.length; i++) {

            this.mobiles[i].printAll()

        }
        console.log("\n Price overall: " + this.totalPrice)
    }
    
}