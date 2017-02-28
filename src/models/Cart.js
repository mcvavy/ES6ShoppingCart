import { productData } from './productData';

class Cart {
    constructor() {
        this.items = productData;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(position) {
        this.items.splice(position, 1);
    }

    totalItem() {
        return this.items.reduce((sum, b) => sum + 1, 0);
    }

    totalDiscountPrice() {
        return this.items.reduce((sum, b) => sum + (b.discount !== '') ? ((b.discount / 100) * b.price) : 0.00, 0.00).toFixed(2);
    }

    totalPrice() {
        return this.items.reduce((sum, b) => sum + (b.discount > 0 && b.discount !== '') ? (b.price - (b.discount * b.price) / 100) : b.price, 0.00).toFixed(2);
    }

    totalPriceWithoutDiscount() {
        return this.items.reduce((sum, b) => sum + (b.price !== '') ? b.price : 0.00, 0.00).toFixed(2);
    }
}

export let cart = new Cart();