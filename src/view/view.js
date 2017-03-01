import { cart as Cart } from '../models/Cart';

class View {
    constructor() {

    }

    displatCartItem() {
        //display total item in basket
        //display total item price
        let splitarr = (Cart.totalPrice() !== 0)  ? Cart.totalPrice().toString().split('.') : ["0","00"];
        splitarr[0] = splitarr[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");

        document.getElementById("mainPrice").innerHTML =`\$${splitarr[0]}<sup>.${splitarr[1]}</sup>`;
        document.getElementById("bagy").innerHTML = Cart.totalItem();
        console.log(Cart.totalItem());

        Cart.items.forEach((item, position) => {
            let itemList = this.createElement("li", "cart-item");
            itemList.innerHTML = `${item.quantity} x ${item.name} <span class="cart-item-price">= \$${(item.price * item.quantity).toFixed(2)}</span>`;
            document.getElementById("cart-items").appendChild(itemList);
        });
    }

    createElement(elementName, className = "na", style = "na", innerHTML = "na") {
        var element = document.createElement(elementName);

        if (className !== "na") {
            element.className += " " + className;
        }

        if (style !== "na") {
            element.style = style;
        }

        if (innerHTML !== "na") {
            element.innerHTML = innerHTML;
        }

        return element;

    }

}


export let view = new View();