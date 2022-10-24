import { Mobile } from "./mobile";

export class MobileCollection{

    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[] = new Array)
    {
        this.mobiles = mobiles;
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

    
}