import { productData } from './productData';

export class Cart {
    constructor() {
        this.items = productData;
    }
    addItem(item) {
        this.items.push(item);
    }

    removeItem(position){
        this.items.splice(position,1);
    }

    totalItem(){
        return this.items.reduce((sum,b) => sum + 1, 0);
    }

    totalPrice() {
        return this.items.reduce((sum, b) => sum + parseFloat(b.price), 0.00).toFixed(2);
    }
}