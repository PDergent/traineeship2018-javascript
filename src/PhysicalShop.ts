import { Shop } from "./Shop";

export class PhysicalShop extends Shop {
    constructor(private _location: string, private _surface: number) {
        super("Physical", null, null, null, null);
    }
    
}