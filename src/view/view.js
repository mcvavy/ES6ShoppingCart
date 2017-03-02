import { cart as Cart } from '../models/Cart';
import { Product, productList } from '../models/product';

class View {
    constructor() {

    }

    setUpEventistener() {
        let el = document.getElementById("product-add-button"),
            addbutton = document.querySelector(".product-list-holder"); 
        debugger;

        el.addEventListener('click', (e) => {
            e.preventDefault();
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
            debugger;
            let elementClicked = event.target;

            //check if element clicked is a add to basket button
            if (elementClicked.className.includes("add-to-basket-button")) {
                let parentNode = findParentNodeTogetId(elementClicked);
                console.log(parentNode.id);
                let productClicked = productList[findParentNodeTogetId(elementClicked).id];
        
                //Fine and add the item with the Id to the Cart
                Cart.addItem(productClicked);
                this.displayCartItem();
            }
        })


    }

    displayProducts() {
        let proListContainer = document.getElementById("container-product-list");
        //proListContainer.innerHTML = "";
        debugger;

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
        let splitarr = (Cart.totalPrice() !== 0) ? Cart.totalPrice().toString().split('.') : ["0", "00"];
        splitarr[0] = splitarr[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");

        document.getElementById("mainPrice").innerHTML = `\$${splitarr[0]}<sup>.${splitarr[1]}&#162;</sup>`;

        //display total item in basket
        document.getElementById("bagy").innerHTML = Cart.totalItem();

        document.getElementById("cart-items").innerHTML = "";

        //Loop and dislay Cart items in a list
        Cart.items.forEach((item, position) => {
            let itemList = createElement("li", "cart-item");
            itemList.innerHTML = `${item.quantity} x ${item.name} <span class="cart-item-price">= \$${(item.price * item.quantity).toFixed(2)}</span>`;
            document.getElementById("cart-items").appendChild(itemList);
        });

        //this.displayProducts();
    }
}

let createElement = (elementName, className = "na", style = "na", innerHTML = "na") => {
    var element = document.createElement(elementName);

    if (className !== "na") element.className += " " + className;

    if (style !== "na") element.style = style;

    if (innerHTML !== "na") element.innerHTML = innerHTML;

    return element;

}

let findParentNodeTogetId = (el) => {
    debugger;
    while (el.parentNode) {
        el = el.parentNode;
        if (el.className.includes("product-list-element"))
            return el;
    }
    return null;
}


export let view = new View();