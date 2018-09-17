import { Shop } from "./Shop";

export class WebShop extends Shop {
    constructor(private _url: string) {
        super("Web", null, null, null, null);
    }
}