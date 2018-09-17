import { ItemCategory } from "./ItemCategory.enum";

export class Item {

    price: number;

    constructor(private _id: string, private _name: string, private _price: number,
        private _purchasePrice: number, private _category: ItemCategory) {
            this.price = _price;
        }
    

    get purchasePrice() {
        return this._purchasePrice;
    }
    
}