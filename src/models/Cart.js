import { productData } from './productData';

class Cart {
    constructor() {
        this.items = productData;
    }

    addItem(item) {
        debugger;
        //If an item has been added to the basket, increase the quantity of the time
        let itemInBasket = this.items.filter(x => x.Id === item.Id)[0];

        if (itemInBasket) {
            this.items[this.items.indexOf(itemInBasket)].quantity = itemInBasket.quantity + 1;
        } else {
            item.quantity = 1;
            this.items.push(item);
        }

        localStorage.setItem("Cart", JSON.stringify(this.items));
    }

    removeItem(position) {
        debugger;
        this.items.splice(position, 1);
        localStorage.setItem("Cart", JSON.stringify(this.items));
    }

    totalItem() {
        return (this.items.length > 0) ? this.items.reduce((sum, b) => sum + 1, 0) : 0;
    }

    totalDiscountPrice() {
        return this.items.reduce((sum, b) => sum + (b.discount !== '') ? ((b.discount / 100) * b.price) : 0.00, 0.00).toFixed(2);
    }

    totalPrice() {
        return (this.items.length > 0) ? (this.items.reduce((sum, b) => sum + (b.price - (b.discount * b.price) / 100)*b.quantity, 0.00).toFixed(2)) : 0.00;
    }

    totalPriceWithoutDiscount() {
        return this.items.reduce((sum, b) => sum + (b.price !== '') ? b.price : 0.00, 0.00).toFixed(2);
    }
}

export let cart = new Cart();