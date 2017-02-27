'use strict';

var _Cart = require('./models/Cart');

var cartObject = new _Cart.Cart();

console.log(cartObject.totalPrice());
console.log('Total item in cart is: ' + cartObject.totalItem());