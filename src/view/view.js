import { cart as Cart } from '../models/Cart';
import { Product, productList } from '../models/product';

class View {
    constructor() {

    }

    setUpEventistener() {
        let productAddButton = document.getElementById("product-add-button"),
            addbutton = document.querySelector(".product-list-holder"),
            cartItemList = document.querySelector(".itemslist");

        productAddButton.addEventListener('click', (event) => {
            event.preventDefault();
            let prodname = document.getElementById("productname").value,
                price = document.getElementById("price").value,
                category = document.getElementById("category").value,
                description = document.getElementById("description").value,
                rating = document.getElementById("rating").value,
                quantity = document.getElementById("quantity").value,
                discount = document.getElementById("discount").value,
                imageUrl = document.getElementById("imageUrl").value;

            //(name, price, category, description, rating, quantity, comments, discount)
            productList.push(new Product(prodname, price, category, description, rating, quantity, [], discount, imageUrl));

            //save productList to Local Storage
            localStorage.setItem("products", JSON.stringify(productList));

            this.displayProducts();
            document.getElementById("modal-close").click();
        });

        addbutton.addEventListener('click', (event) => {
            let elementClicked = event.target;

            //check if element clicked is a add to basket button
            if (elementClicked.className.includes("add-to-basket-button")) {
                let productClicked = productList[findParentNodeTogetId(elementClicked, "product-list-element").id];

                //Fine and add the item with the Id to the Cart
                console.log(productClicked.discount);
                Cart.addItem(productClicked);
                this.displayCartItem();
            }
        });

        cartItemList.addEventListener('click', (event) => {
            let elementClicked = event.target;

            if (elementClicked.className.includes("fa-times")) {
                let parentNode = findParentNodeTogetId(elementClicked, "cart-item");
                Cart.removeItem(parentNode.id);
                this.displayCartItem();
            }
        });

    }

    displayProducts() {
        let proListContainer = document.getElementById("container-product-list");
        proListContainer.innerHTML = "";

        //productList
        productList.forEach((item, position) => {
            let liEl = createElement("li", "product-list-element"),
                productParentDiv = createElement("div", "productParentDiv"),
                productPriceDiv = createElement("div", "productPriceDiv");


            liEl.id = position;

            productPriceDiv.innerHTML =
                `<ul class="product-details-style">
                    <li><span><h3>${item.name}</h3></span></li>
                     <li><img class="product-image" src=${item.imgUrl}></li>
                    <li><span><b>Price: </b></span><span><b>\$${item.price}</b></span></li><b>
                    ${
                (item.quantity > 0) ? "<li><span style='color: green'>In Stock</span></li>" : "<li style='color: red'><span>Out of stock</span></li>"
                }</b>
                    <li><button class="btn btn-success add-to-basket-button">Add to basket</button></li>
                </ul>
                `;

            productParentDiv.appendChild(productPriceDiv);
            liEl.appendChild(productParentDiv);
            proListContainer.appendChild(liEl);
        });
    }

    displayCartItem() {
        //display total item price
        let splitarr = (Cart.totalPrice() !== 0) ? AddCommaToNumber(Cart.totalPrice()) : ["0", "00"];

        document.getElementById("mainPrice").innerHTML = `\$${splitarr[0]}<sup>.${splitarr[1]}&#162;</sup>`;

        //display total item in basket
        document.getElementById("bagy").innerHTML = Cart.totalItem();

        document.getElementById("cart-items").innerHTML = "";

        //Loop and dislay Cart items in a list
        Cart.items.forEach((item, position) => {
            debugger;
            let ItemPrice = AddCommaToNumber((item.price * item.quantity).toFixed(2));

            let itemList = createElement("li", "cart-item");
            itemList.id = position;
            itemList.innerHTML = `<img class="small-product-icon" 
            src=${item.imgUrl}><b>${item.quantity} x ${item.name} 
            <span class="cartitem-price">= \$${ItemPrice[0]}.${ItemPrice[1]} <i class="fa fa-times" aria-hidden="true"></i></span></b>
            `;
            document.getElementById("cart-items").appendChild(itemList);
        });
    }
}

let createElement = (elementName, className = "na", style = "na", innerHTML = "na") => {
    var element = document.createElement(elementName);

    if (className !== "na") element.className += " " + className;

    if (style !== "na") element.style = style;

    if (innerHTML !== "na") element.innerHTML = innerHTML;

    return element;

}

let findParentNodeTogetId = (el, targetElementClass) => {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.className.includes(targetElementClass))
            return el;
    }
    return null;
}

let AddCommaToNumber = (element) => {
    debugger;
    let split = element.toString().split('.');

    split[0] = split[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");

    return split;
};


export let view = new View();