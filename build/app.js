'use strict';

var _controller = require('./controller/controller');

//let cartObject = new Cart();

_controller.controller.displayCartItems();
_controller.controller.displayProducts();
_controller.controller.setUpEventListeners();

// console.log(`Total Item price is ${cartObject.totalPrice()}`);
// console.log(`Total item in cart is: ${cartObject.totalItem()}`);
// console.log(`Total discount price is ${cartObject.totalDiscountPrice()}`);
// console.log(`Total price without discount is ${cartObject.totalPriceWithoutDiscount()}`);