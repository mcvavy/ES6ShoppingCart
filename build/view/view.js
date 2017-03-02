'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.view = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cart = require('../models/Cart');

var _product = require('../models/product');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View() {
        _classCallCheck(this, View);
    }

    _createClass(View, [{
        key: 'setUpEventistener',
        value: function setUpEventistener() {
            var _this = this;

            var el = document.getElementById("product-add-button"),
                addbutton = document.querySelector(".product-list-holder");
            debugger;

            el.addEventListener('click', function (e) {
                e.preventDefault();
                var prodname = document.getElementById("productname").value,
                    price = document.getElementById("price").value,
                    category = document.getElementById("category").value,
                    description = document.getElementById("description").value,
                    rating = document.getElementById("rating").value,
                    quantity = document.getElementById("quantity").value,
                    discount = document.getElementById("discount").value,
                    imageUrl = document.getElementById("imageUrl").value;

                //(name, price, category, description, rating, quantity, comments, discount)
                _product.productList.push(new _product.Product(prodname, price, category, description, rating, quantity, [], discount, imageUrl));

                //save productList to Local Storage
                localStorage.setItem("products", JSON.stringify(_product.productList));

                _this.displayProducts();
                document.getElementById("modal-close").click();
            });

            addbutton.addEventListener('click', function (event) {
                debugger;
                var elementClicked = event.target;

                //check if element clicked is a add to basket button
                if (elementClicked.className.includes("add-to-basket-button")) {
                    var parentNode = findParentNodeTogetId(elementClicked);
                    console.log(parentNode.id);
                    var productClicked = _product.productList[findParentNodeTogetId(elementClicked).id];

                    //Fine and add the item with the Id to the Cart
                    _Cart.cart.addItem(productClicked);
                    _this.displayCartItem();
                }
            });
        }
    }, {
        key: 'displayProducts',
        value: function displayProducts() {
            var proListContainer = document.getElementById("container-product-list");
            proListContainer.innerHTML = "";
            debugger;

            //productList
            _product.productList.forEach(function (item, position) {
                var liEl = createElement("li", "product-list-element"),
                    productParentDiv = createElement("div", "productParentDiv"),
                    productPriceDiv = createElement("div", "productPriceDiv");

                liEl.id = position;

                productPriceDiv.innerHTML = '<ul class="product-details-style">\n                    <li><span><h3>' + item.name + '</h3></span></li>\n                     <li><img class="product-image" src=' + item.imgUrl + '></li>\n                    <li><span><b>Price: </b></span><span><b>$' + item.price + '</b></span></li><b>\n                    ' + (item.quantity > 0 ? "<li><span style='color: green'>In Stock</span></li>" : "<li style='color: red'><span>Out of stock</span></li>") + '</b>\n                    <li><button class="btn btn-success add-to-basket-button">Add to basket</button></li>\n                </ul>\n                ';

                productParentDiv.appendChild(productPriceDiv);
                liEl.appendChild(productParentDiv);
                proListContainer.appendChild(liEl);
            });
        }
    }, {
        key: 'displayCartItem',
        value: function displayCartItem() {
            //display total item price
            var splitarr = _Cart.cart.totalPrice() !== 0 ? _Cart.cart.totalPrice().toString().split('.') : ["0", "00"];
            console.log(splitarr[0]);
            splitarr[0] = splitarr[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");

            document.getElementById("mainPrice").innerHTML = '$' + splitarr[0] + '<sup>.' + splitarr[1] + '&#162;</sup>';

            //display total item in basket
            document.getElementById("bagy").innerHTML = _Cart.cart.totalItem();

            document.getElementById("cart-items").innerHTML = "";

            //Loop and dislay Cart items in a list
            _Cart.cart.items.forEach(function (item, position) {
                var itemList = createElement("li", "cart-item");
                itemList.innerHTML = '1 x ' + item.name + ' <span class="cart-item-price">= $' + item.price + '</span>';
                document.getElementById("cart-items").appendChild(itemList);
            });
        }
    }]);

    return View;
}();

var createElement = function createElement(elementName) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "na";
    var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "na";
    var innerHTML = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "na";

    var element = document.createElement(elementName);

    if (className !== "na") element.className += " " + className;

    if (style !== "na") element.style = style;

    if (innerHTML !== "na") element.innerHTML = innerHTML;

    return element;
};

var findParentNodeTogetId = function findParentNodeTogetId(el) {
    debugger;
    while (el.parentNode) {
        el = el.parentNode;
        if (el.className.includes("product-list-element")) return el;
    }
    return null;
};

var view = exports.view = new View();