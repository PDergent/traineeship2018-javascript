import { Buyer } from './Buyer';
import { Item } from './item';
import { ItemCategory } from './ItemCategory.enum';
import { Person } from './Person';

export class Shop {

    constructor(protected name: string, protected owner: Person, protected creationDate: Date,
        protected stock: Item[], protected sold: number[]) {

        }

    addItem(item: Item) {
        this.stock.push(item);
    }

    getItems() {
        return this.stock
    }

    getItemsOfCategory(category: ItemCategory) {

    }

    getItem(id: number) {

    }

    checkout(buyer: Buyer) {

        for(let item of buyer.shoppingCart) {
            this.stock.splice(this.stock.indexOf(item), 1);
            let items: Item[];
            buyer.shoppingCart = items;
            this.sold.push(item.price);
        }
    }

    balance(): number {
        let balance: number;

        for(let item in this.stock) {
            
        }

        return balance;
    }
}