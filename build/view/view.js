'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.view = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cart = require('../models/Cart');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View() {
        _classCallCheck(this, View);
    }

    _createClass(View, [{
        key: 'displatCartItem',
        value: function displatCartItem() {
            var _this = this;

            //display total item in basket
            //display total item price
            var splitarr = _Cart.cart.totalPrice() !== 0 ? _Cart.cart.totalPrice().toString().split('.') : ["0", "00"];

            console.log(_Cart.cart.totalPrice());

            document.getElementById("mainPrice").innerHTML = '$' + splitarr[0] + '<sup>.' + splitarr[1] + '</sup>';
            document.getElementById("bagy").innerHTML = _Cart.cart.totalItem();

            _Cart.cart.items.forEach(function (item, position) {
                var itemList = _this.createElement("li", "cart-item");
                itemList.innerHTML = item.quantity + ' x ' + item.name + ' <span class="cart-item-price">= ' + (item.price * item.quantity).toFixed(2) + '</span>';
                var cartItemList = document.getElementById("cart-items");
                cartItemList.appendChild(itemList);
            });
        }
    }, {
        key: 'createElement',
        value: function createElement(elementName) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "na";
            var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "na";
            var innerHTML = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "na";

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
    }]);

    return View;
}();

var view = exports.view = new View();