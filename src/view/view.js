import { cart as Cart } from '../models/Cart';
import { Product, productList } from '../models/product';

class View {
    constructor() {

    }

    setUpEventistener() {
        let el = document.getElementById("product-add-button");
        debugger;

        el.addEventListener('click', () => {
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
            console.log(productList);

            //display product on the page
            this.displayProducts();
            //document.getElementById("model-dismiss").click(false);
        });


    }

    displayProducts() {
        let proListContainer = document.getElementById("container-product-list");
        //proListContainer.innerHTML = "";
        debugger;

        let productLists = JSON.parse(localStorage.getItem("products"));

        console.log(productLists);

        if (!productLists) productLists = [];
        else {
            productLists.forEach((item, position) => {
                let liEl = createElement("li","product-list-element"),
                    productParentDiv = createElement("div", "productParentDiv"),
                    //productImageDiv = createElement("div", "productImageDiv"),
                    productPriceDiv = createElement("div", "productPriceDiv");
                    //prodimg = createElement("img", "product-image");

                //prodimg.src = item.imageUrl;

                liEl.id = position;

                productPriceDiv.innerHTML =
                    `<ul class="product-details-style">
                    <li><span><h3>${item.name}</h3></span></li>
                     <li><img class="product-image" src=${item.imgUrl}></li>
                    <li><span>Price:</span><span>\$${item.price}</span></li>
                    ${
                    (item.quantity > 0) ? "<li><span>In Stock</span></li>" : "<li><span>Out of stock</span></li>"
                    }
                    <li><button class="btn btn-success">Add to basket</button></li>
                </ul>
                `;

                productParentDiv.appendChild(productPriceDiv);
                liEl.appendChild(productParentDiv);
                proListContainer.appendChild(liEl);
            });
        }
    }

    displayCartItem() {
        //display total item price
        let splitarr = (Cart.totalPrice() !== 0) ? Cart.totalPrice().toString().split('.') : ["0", "00"];
        splitarr[0] = splitarr[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");

        document.getElementById("mainPrice").innerHTML = `\$${splitarr[0]}<sup>.${splitarr[1]}&#162;</sup>`;

        //display total item in basket
        document.getElementById("bagy").innerHTML = Cart.totalItem();

        //Loop and dislay Cart items in a list
        Cart.items.forEach((item, position) => {
            let itemList = createElement("li", "cart-item");
            itemList.innerHTML = `${item.quantity} x ${item.name} <span class="cart-item-price">= \$${(item.price * item.quantity).toFixed(2)}</span>`;
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


export let view = new View();