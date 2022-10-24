export class Mobile{

    constructor(private name: string = name, 
                private trademark: string = trademark, 
                private model: string = model,
                private color: string = color,
                private price: number = price){}

    public getName():string{
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getTrademark(): string {
        return this.trademark;
    }
    public setTrademark(trademark: string) {
        this.trademark = trademark;
    }
    public getModel(): string {
        return this.model;
    }
    public setModel(model: string) {
        this.model = model;
    }
    public getColor(): string {
        return this.color;
    }
    public setColor(color: string) {
        this.color = color;
    }
    public getPrice(): number {
        return this.price;
    }
    public setPrice(price: number) {
        this.price = price;
    }

    
}