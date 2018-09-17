import { Person } from "./Person";
import { Item } from "./item";

export class Buyer extends Person {
    constructor(private _id: string, private _shoppingCart: Item[]) {
        super("PJ", 99);
    }

    addToCart(item: Item) {

    }

    displayCart() {

    }

    checkout() {

    }

    get shoppingCart() {
        return this._shoppingCart;
    }
    
    set shoppingCart(shoppingCart: Item[]) {
        this._shoppingCart = shoppingCart;
    }
}