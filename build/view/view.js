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

            var el = document.getElementById("product-add-button");
            el.addEventListener('click', function () {
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
                console.log(_product.productList);
                //display product on the page
                _this.displayProducts();
                document.getElementById("modal-close").click();
            });
        }
    }, {
        key: 'displayProducts',
        value: function displayProducts() {
            var proListContainer = document.getElementById("container-product-list");
            proListContainer.innerHTML = "";

            _product.productList.forEach(function (item, position) {
                var liEl = createElement("li"),
                    productParentDiv = createElement("div"),
                    productImageDiv = createElement("div", "productImageDiv"),
                    productPriceDiv = createElement("div", "productPriceDiv"),
                    prodimg = createElement("img", "product-image");

                liEl.id = position;

                productPriceDiv.innerHTML = '<ul>\n            <li><span>Price:</span><span>$' + item.price + '</span></li>\n            <li><span>In Stock:</span><span>$' + item.isAvailable() + '</span></li>\n            <li><button class="btn btn-success">Add to basket</button></li>\n        </ul>\n        ';

                productImageDiv.appendChild(prodimg);
                productParentDiv.appendChild(productImageDiv);
                productParentDiv.appendChild(productPriceDiv);

                liEl.appendChild(productParentDiv);
                proListContainer.appendChild(liEl);
            });
        }
    }, {
        key: 'displatCartItem',
        value: function displatCartItem() {
            debugger;
            //display total item price
            var splitarr = _Cart.cart.totalPrice() !== 0 ? _Cart.cart.totalPrice().toString().split('.') : ["0", "00"];
            splitarr[0] = splitarr[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");

            document.getElementById("mainPrice").innerHTML = '$' + splitarr[0] + '<sup>.' + splitarr[1] + '&#162;</sup>';

            //display total item in basket
            document.getElementById("bagy").innerHTML = _Cart.cart.totalItem();

            //Loop and dislay Cart items in a list
            _Cart.cart.items.forEach(function (item, position) {
                var itemList = createElement("li", "cart-item");
                itemList.innerHTML = item.quantity + ' x ' + item.name + ' <span class="cart-item-price">= $' + (item.price * item.quantity).toFixed(2) + '</span>';
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

var view = exports.view = new View();