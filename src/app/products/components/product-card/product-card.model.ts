
export class ProductCardModel{
    private  name:string;
    private price:number;
    private imageURL:string;
    constructor(name:string , price: number, imageURL:string){
        this.name=name;
        this.price = price;
        this.imageURL=imageURL;
    }

    get name(){
        return this.name;
    }

    set name(name:string){
        this.name=name;
    }

    get price(){
        return this.price;
    }

    set price(price: string){
        this.price=price;
    }

    get imageURL(){
        return this.imageURL;
    }

    set imageURL(imageURL: string){
        this.imageURL=imageURL;
    }
}