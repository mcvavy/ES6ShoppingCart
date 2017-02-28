'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _productData = require('./productData');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.items = _productData.productData;
    }

    _createClass(Cart, [{
        key: 'addItem',
        value: function addItem(item) {
            this.items.push(item);
        }
    }, {
        key: 'removeItem',
        value: function removeItem(position) {
            this.items.splice(position, 1);
        }
    }, {
        key: 'totalItem',
        value: function totalItem() {
            return this.items.length > 0 ? this.items.reduce(function (sum, b) {
                return sum + 1;
            }, 0) : 0;
        }
    }, {
        key: 'totalDiscountPrice',
        value: function totalDiscountPrice() {
            return this.items.reduce(function (sum, b) {
                return sum + (b.discount !== '') ? b.discount / 100 * b.price : 0.00;
            }, 0.00).toFixed(2);
        }
    }, {
        key: 'totalPrice',
        value: function totalPrice() {
            return this.items.length > 0 ? this.items.reduce(function (sum, b) {
                return sum + (b.discount > 0 && b.discount !== '') ? b.price - b.discount * b.price / 100 : b.price;
            }, 0.00).toFixed(2) : 0.00;
        }
    }, {
        key: 'totalPriceWithoutDiscount',
        value: function totalPriceWithoutDiscount() {
            return this.items.reduce(function (sum, b) {
                return sum + (b.price !== '') ? b.price : 0.00;
            }, 0.00).toFixed(2);
        }
    }]);

    return Cart;
}();

var cart = exports.cart = new Cart();