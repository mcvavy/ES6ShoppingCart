'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pid = require('shortid');

var Product = exports.Product = function () {
    function Product(name, price, category, description, rating) {
        var quantity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var comments = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
        var discount = arguments[7];
        var imgUrl = arguments[8];

        _classCallCheck(this, Product);

        debugger;
        this.Id = pid.generate();
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.rating = rating;
        this.quantity = quantity;
        this.discount = discount;
        this.imgUrl = imgUrl;
        this.comments = comments;
    }

    _createClass(Product, [{
        key: 'isAvailable',
        value: function isAvailable() {
            return this.quantity > 0;
        }
    }]);

    return Product;
}();

var productList = exports.productList = [];