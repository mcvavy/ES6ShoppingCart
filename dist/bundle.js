/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controller = __webpack_require__(1);
	
	//let cartObject = new Cart();
	
	_controller.controller.displayCartItems();
	_controller.controller.displayProducts();
	_controller.controller.setUpEventListeners();
	
	// console.log(`Total Item price is ${cartObject.totalPrice()}`);
	// console.log(`Total item in cart is: ${cartObject.totalItem()}`);
	// console.log(`Total discount price is ${cartObject.totalDiscountPrice()}`);
	// console.log(`Total price without discount is ${cartObject.totalPriceWithoutDiscount()}`);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.controller = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _view = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);
	    }
	
	    _createClass(Controller, [{
	        key: 'displayCartItems',
	        value: function displayCartItems() {
	            _view.view.displayCartItem();
	        }
	    }, {
	        key: 'setUpEventListeners',
	        value: function setUpEventListeners() {
	            _view.view.setUpEventistener();
	        }
	    }, {
	        key: 'displayProducts',
	        value: function displayProducts() {
	            _view.view.displayProducts();
	        }
	    }]);
	
	    return Controller;
	}();
	
	var controller = exports.controller = new Controller();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.view = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Cart = __webpack_require__(3);
	
	var _product = __webpack_require__(5);
	
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
	                addbutton = document.querySelector(".product-list-holder"),
	                cartItemList = document.querySelector(".itemslist");
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
	                    var productClicked = _product.productList[findParentNodeTogetId(elementClicked, "product-list-element").id];
	
	                    //Fine and add the item with the Id to the Cart
	                    _Cart.cart.addItem(productClicked);
	                    _this.displayCartItem();
	                }
	            });
	
	            cartItemList.addEventListener('click', function (event) {
	                debugger;
	                var elementClicked = event.target;
	
	                if (elementClicked.className.includes("fa-times")) {
	                    var parentNode = findParentNodeTogetId(elementClicked, "cart-item");
	                    _Cart.cart.removeItem(parentNode.id);
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
	
	            splitarr[0] = splitarr[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
	
	            document.getElementById("mainPrice").innerHTML = '$' + splitarr[0] + '<sup>.' + splitarr[1] + '&#162;</sup>';
	
	            //display total item in basket
	            document.getElementById("bagy").innerHTML = _Cart.cart.totalItem();
	
	            document.getElementById("cart-items").innerHTML = "";
	
	            //Loop and dislay Cart items in a list
	            _Cart.cart.items.forEach(function (item, position) {
	                var itemList = createElement("li", "cart-item");
	                itemList.id = position;
	                itemList.innerHTML = '<img class="small-product-icon" \n            src=' + item.imgUrl + '><b>1 x ' + item.name + ' \n            <span class="cartitem-price">= $' + item.price + ' <i class="fa fa-times" aria-hidden="true"></i></span></b>\n            ';
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
	
	var findParentNodeTogetId = function findParentNodeTogetId(el, targetElementClass) {
	    debugger;
	    while (el.parentNode) {
	        el = el.parentNode;
	        if (el.className.includes(targetElementClass)) {
	            console.log('The ID is ' + el.id);
	            return el;
	        }
	    }
	    return null;
	};
	
	var view = exports.view = new View();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cart = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _productData = __webpack_require__(4);
	
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
	            localStorage.setItem("Cart", JSON.stringify(this.items));
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem(position) {
	            debugger;
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
	                return sum + (b.price - b.discount * b.price / 100);
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var productData = [];
	
	var productDatas = JSON.parse(localStorage.getItem("Cart"));
	if (!productDatas) exports.productData = productData = [];else {
	    productDatas.forEach(function (item, position) {
	        productData.push(item);
	    });
	}
	
	exports.productData = productData;
	
	// export const productData = [{
	//   "id": 1,
	//   "name": "Lac-Brome",
	//   "price": 5871.97,
	//   "discount": 51,
	//   "category": "Canada",
	//   "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	//   "rating": 5,
	//   "quantity": 16,
	//   "comments": [
	//     {
	//       "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	//     },
	//     {
	//       "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	//     },
	//     {
	//       "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	//     },
	//     {
	//       "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	//     }
	//   ]
	// }, {
	//   "id": 2,
	//   "name": "Longquan",
	//   "price": 15029.85,
	//   "discount": 74,
	//   "category": "China",
	//   "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
	//   "rating": 3,
	//   "quantity": 32,
	//   "comments": [
	//     {
	//       "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	//     },
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     },
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     }
	//   ]
	// }, {
	//   "id": 3,
	//   "name": "Skelleftehamn",
	//   "price": 1025.97,
	//   "discount": 77,
	//   "category": "Sweden",
	//   "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	//   "rating": 5,
	//   "quantity": 27,
	//   "comments": [
	//     {
	//       "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	//     }
	//   ]
	// }, {
	//   "id": 4,
	//   "name": "Karema",
	//   "price": 5220.98,
	//   "discount": 8,
	//   "category": "Tanzania",
	//   "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
	//   "rating": 4,
	//   "quantity": 17,
	//   "comments": [
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	//     }
	//   ]
	// }, {
	//   "id": 5,
	//   "name": "Shijiao",
	//   "price": 8365.7,
	//   "discount": 52,
	//   "category": "China",
	//   "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	//   "rating": 3,
	//   "quantity": 18,
	//   "comments": [
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     },
	//     {
	//       "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	//     },
	//     {
	//       "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	//     },
	//     {
	//       "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	//     },
	//     {
	//       "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	//     }
	//   ]
	// }, {
	//   "id": 6,
	//   "name": "Liudu",
	//   "price": 2894.52,
	//   "discount": 61,
	//   "category": "China",
	//   "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	//   "rating": 2,
	//   "quantity": 35,
	//   "comments": [
	//     {
	//       "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	//     },
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	//     },
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     }
	//   ]
	// }, {
	//   "id": 7,
	//   "name": "Bukbatang",
	//   "price": 16334.67,
	//   "discount": 80,
	//   "category": "Indonesia",
	//   "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	//   "rating": 4,
	//   "quantity": 5,
	//   "comments": [
	//     {
	//       "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	//     }
	//   ]
	// }, {
	//   "id": 8,
	//   "name": "Jinping",
	//   "price": 19132.49,
	//   "discount": 4,
	//   "category": "China",
	//   "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
	//   "rating": 5,
	//   "quantity": 27,
	//   "comments": [
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     },
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     },
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     }
	//   ]
	// }, {
	//   "id": 9,
	//   "name": "Bojongaren",
	//   "price": 1105.68,
	//   "discount": 26,
	//   "category": "Indonesia",
	//   "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	//   "rating": 1,
	//   "quantity": 32,
	//   "comments": [
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     }
	//   ]
	// }, {
	//   "id": 10,
	//   "name": "Zaraza",
	//   "price": 17733.79,
	//   "discount": 52,
	//   "category": "Venezuela",
	//   "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	//   "rating": 1,
	//   "quantity": 18,
	//   "comments": [
	//     {
	//       "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	//     },
	//     {
	//       "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	//     }
	//   ]
	// }, {
	//   "id": 11,
	//   "name": "Cisewu",
	//   "price": 4143.82,
	//   "discount": 33,
	//   "category": "Indonesia",
	//   "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
	//   "rating": 5,
	//   "quantity": 19,
	//   "comments": [
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     },
	//     {
	//       "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	//     },
	//     {
	//       "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	//     }
	//   ]
	// }, {
	//   "id": 12,
	//   "name": "Santo Niño",
	//   "price": 9988.18,
	//   "discount": 66,
	//   "category": "Philippines",
	//   "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	//   "rating": 2,
	//   "quantity": 42,
	//   "comments": [
	//     {
	//       "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	//     },
	//     {
	//       "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	//     },
	//     {
	//       "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	//     },
	//     {
	//       "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	//     },
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     }
	//   ]
	// }, {
	//   "id": 13,
	//   "name": "Neiba",
	//   "price": 1348.34,
	//   "discount": 12,
	//   "category": "Dominican Republic",
	//   "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
	//   "rating": 5,
	//   "quantity": 21,
	//   "comments": [
	//     {
	//       "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	//     },
	//     {
	//       "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	//     }
	//   ]
	// }, {
	//   "id": 14,
	//   "name": "Évora",
	//   "price": 631.06,
	//   "discount": 67,
	//   "category": "Portugal",
	//   "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	//   "rating": 3,
	//   "quantity": 34,
	//   "comments": [
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	//     },
	//     {
	//       "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	//     },
	//     {
	//       "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	//     }
	//   ]
	// }, {
	//   "id": 15,
	//   "name": "Thun",
	//   "price": 15523.05,
	//   "discount": 26,
	//   "category": "Switzerland",
	//   "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	//   "rating": 5,
	//   "quantity": 22,
	//   "comments": [
	//     {
	//       "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	//     }
	//   ]
	// }, {
	//   "id": 16,
	//   "name": "Jepat Kidul",
	//   "price": 9500.35,
	//   "discount": 24,
	//   "category": "Indonesia",
	//   "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	//   "rating": 3,
	//   "quantity": 46,
	//   "comments": [
	//     {
	//       "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	//     },
	//     {
	//       "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	//     },
	//     {
	//       "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	//     },
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     },
	//     {
	//       "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	//     }
	//   ]
	// }, {
	//   "id": 17,
	//   "name": "Macroom",
	//   "price": 11962.15,
	//   "discount": 79,
	//   "category": "Ireland",
	//   "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
	//   "rating": 4,
	//   "quantity": 23,
	//   "comments": [
	//     {
	//       "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	//     },
	//     {
	//       "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	//     }
	//   ]
	// }, {
	//   "id": 18,
	//   "name": "Bafatá",
	//   "price": 18661.08,
	//   "discount": 60,
	//   "category": "Guinea-Bissau",
	//   "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	//   "rating": 5,
	//   "quantity": 37,
	//   "comments": [
	//     {
	//       "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	//     },
	//     {
	//       "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	//     },
	//     {
	//       "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	//     },
	//     {
	//       "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	//     }
	//   ]
	// }, {
	//   "id": 19,
	//   "name": "Pembroke",
	//   "price": 17007.63,
	//   "discount": 48,
	//   "category": "Malta",
	//   "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	//   "rating": 4,
	//   "quantity": 47,
	//   "comments": [
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     },
	//     {
	//       "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	//     },
	//     {
	//       "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	//     }
	//   ]
	// }, {
	//   "id": 20,
	//   "name": "Nastola",
	//   "price": 17947.45,
	//   "discount": 17,
	//   "category": "Finland",
	//   "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	//   "rating": 3,
	//   "quantity": 16,
	//   "comments": [
	//     {
	//       "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	//     },
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     },
	//     {
	//       "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	//     }
	//   ]
	// }, {
	//   "id": 21,
	//   "name": "Oviedo",
	//   "price": 1097.97,
	//   "discount": 48,
	//   "category": "Dominican Republic",
	//   "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	//   "rating": 1,
	//   "quantity": 4,
	//   "comments": [
	//     {
	//       "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	//     },
	//     {
	//       "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	//     }
	//   ]
	// }, {
	//   "id": 22,
	//   "name": "Catanduva",
	//   "price": 15619.67,
	//   "discount": 1,
	//   "category": "Brazil",
	//   "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	//   "rating": 4,
	//   "quantity": 1,
	//   "comments": [
	//     {
	//       "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	//     },
	//     {
	//       "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	//     },
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	//     }
	//   ]
	// }, {
	//   "id": 23,
	//   "name": "Jialu",
	//   "price": 12365.88,
	//   "discount": 11,
	//   "category": "China",
	//   "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	//   "rating": 2,
	//   "quantity": 33,
	//   "comments": [
	//     {
	//       "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	//     }
	//   ]
	// }, {
	//   "id": 24,
	//   "name": "Chitose",
	//   "price": 6505.73,
	//   "discount": 90,
	//   "category": "Japan",
	//   "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	//   "rating": 1,
	//   "quantity": 9,
	//   "comments": [
	//     {
	//       "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	//     },
	//     {
	//       "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	//     },
	//     {
	//       "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	//     }
	//   ]
	// }, {
	//   "id": 25,
	//   "name": "Logroño",
	//   "price": 15006.69,
	//   "discount": 37,
	//   "category": "Spain",
	//   "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
	//   "rating": 1,
	//   "quantity": 40,
	//   "comments": [
	//     {
	//       "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	//     },
	//     {
	//       "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     }
	//   ]
	// }, {
	//   "id": 26,
	//   "name": "Dashtavan",
	//   "price": 17690.64,
	//   "discount": 62,
	//   "category": "Armenia",
	//   "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	//   "rating": 4,
	//   "quantity": 48,
	//   "comments": [
	//     {
	//       "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	//     },
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     },
	//     {
	//       "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	//     },
	//     {
	//       "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	//     }
	//   ]
	// }, {
	//   "id": 27,
	//   "name": "Bangolo",
	//   "price": 13200.15,
	//   "discount": 74,
	//   "category": "Ivory Coast",
	//   "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
	//   "rating": 3,
	//   "quantity": 45,
	//   "comments": [
	//     {
	//       "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	//     },
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     },
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     },
	//     {
	//       "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	//     }
	//   ]
	// }, {
	//   "id": 28,
	//   "name": "Andoany",
	//   "price": 14127.59,
	//   "discount": 81,
	//   "category": "Madagascar",
	//   "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	//   "rating": 4,
	//   "quantity": 20,
	//   "comments": [
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	//     },
	//     {
	//       "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	//     }
	//   ]
	// }, {
	//   "id": 29,
	//   "name": "Millerovo",
	//   "price": 12506.0,
	//   "discount": 37,
	//   "category": "Russia",
	//   "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	//   "rating": 3,
	//   "quantity": 14,
	//   "comments": [
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     }
	//   ]
	// }, {
	//   "id": 30,
	//   "name": "Languan",
	//   "price": 13566.6,
	//   "discount": 17,
	//   "category": "China",
	//   "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	//   "rating": 5,
	//   "quantity": 12,
	//   "comments": [
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     }
	//   ]
	// }, {
	//   "id": 31,
	//   "name": "Comé",
	//   "price": 4201.98,
	//   "discount": 84,
	//   "category": "Benin",
	//   "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	//   "rating": 3,
	//   "quantity": 29,
	//   "comments": [
	//     {
	//       "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	//     },
	//     {
	//       "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	//     },
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     }
	//   ]
	// }, {
	//   "id": 32,
	//   "name": "Tor",
	//   "price": 792.39,
	//   "discount": 34,
	//   "category": "Egypt",
	//   "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	//   "rating": 1,
	//   "quantity": 17,
	//   "comments": [
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     }
	//   ]
	// }, {
	//   "id": 33,
	//   "name": "Miguelópolis",
	//   "price": 18019.04,
	//   "discount": 100,
	//   "category": "Brazil",
	//   "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	//   "rating": 1,
	//   "quantity": 13,
	//   "comments": [
	//     {
	//       "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	//     },
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     }
	//   ]
	// }, {
	//   "id": 34,
	//   "name": "Fort Myers",
	//   "price": 15488.72,
	//   "discount": 81,
	//   "category": "United States",
	//   "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	//   "rating": 3,
	//   "quantity": 40,
	//   "comments": [
	//     {
	//       "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	//     },
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	//     }
	//   ]
	// }, {
	//   "id": 35,
	//   "name": "Chengbei",
	//   "price": 17561.84,
	//   "discount": 33,
	//   "category": "China",
	//   "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
	//   "rating": 3,
	//   "quantity": 50,
	//   "comments": [
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     }
	//   ]
	// }, {
	//   "id": 36,
	//   "name": "Zhujiang",
	//   "price": 10382.3,
	//   "discount": 12,
	//   "category": "China",
	//   "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	//   "rating": 2,
	//   "quantity": 6,
	//   "comments": [
	//     {
	//       "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	//     },
	//     {
	//       "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	//     },
	//     {
	//       "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	//     }
	//   ]
	// }, {
	//   "id": 37,
	//   "name": "Émponas",
	//   "price": 11137.78,
	//   "discount": 57,
	//   "category": "Greece",
	//   "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
	//   "rating": 3,
	//   "quantity": 40,
	//   "comments": [
	//     {
	//       "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     }
	//   ]
	// }, {
	//   "id": 38,
	//   "name": "Megalochórion",
	//   "price": 510.31,
	//   "discount": 72,
	//   "category": "Greece",
	//   "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	//   "rating": 3,
	//   "quantity": 43,
	//   "comments": [
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	//     }
	//   ]
	// }, {
	//   "id": 39,
	//   "name": "Duwaktenggi",
	//   "price": 17711.36,
	//   "discount": 84,
	//   "category": "Indonesia",
	//   "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	//   "rating": 2,
	//   "quantity": 35,
	//   "comments": [
	//     {
	//       "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	//     },
	//     {
	//       "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	//     }
	//   ]
	// }, {
	//   "id": 40,
	//   "name": "Frederiksberg",
	//   "price": 10797.74,
	//   "discount": 11,
	//   "category": "Denmark",
	//   "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	//   "rating": 4,
	//   "quantity": 38,
	//   "comments": [
	//     {
	//       "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	//     },
	//     {
	//       "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	//     },
	//     {
	//       "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	//     }
	//   ]
	// }, {
	//   "id": 41,
	//   "name": "Tiel",
	//   "price": 7179.97,
	//   "discount": 53,
	//   "category": "Netherlands",
	//   "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	//   "rating": 2,
	//   "quantity": 16,
	//   "comments": [
	//     {
	//       "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	//     },
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	//     },
	//     {
	//       "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	//     }
	//   ]
	// }, {
	//   "id": 42,
	//   "name": "Pandasan",
	//   "price": 13538.86,
	//   "discount": 81,
	//   "category": "Philippines",
	//   "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	//   "rating": 3,
	//   "quantity": 21,
	//   "comments": [
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     },
	//     {
	//       "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	//     }
	//   ]
	// }, {
	//   "id": 43,
	//   "name": "Lianshan",
	//   "price": 19876.17,
	//   "discount": 74,
	//   "category": "China",
	//   "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	//   "rating": 5,
	//   "quantity": 28,
	//   "comments": [
	//     {
	//       "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	//     },
	//     {
	//       "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	//     }
	//   ]
	// }, {
	//   "id": 44,
	//   "name": "Molave",
	//   "price": 10838.03,
	//   "discount": 75,
	//   "category": "Philippines",
	//   "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
	//   "rating": 2,
	//   "quantity": 4,
	//   "comments": [
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     },
	//     {
	//       "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	//     },
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     }
	//   ]
	// }, {
	//   "id": 45,
	//   "name": "Amparita",
	//   "price": 4763.78,
	//   "discount": 59,
	//   "category": "Indonesia",
	//   "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
	//   "rating": 3,
	//   "quantity": 48,
	//   "comments": [
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	//     },
	//     {
	//       "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	//     },
	//     {
	//       "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	//     }
	//   ]
	// }, {
	//   "id": 46,
	//   "name": "Le Hochet",
	//   "price": 13306.69,
	//   "discount": 54,
	//   "category": "Mauritius",
	//   "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	//   "rating": 3,
	//   "quantity": 31,
	//   "comments": [
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     },
	//     {
	//       "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	//     }
	//   ]
	// }, {
	//   "id": 47,
	//   "name": "Thị Trấn Quế",
	//   "price": 11743.03,
	//   "discount": 52,
	//   "category": "Vietnam",
	//   "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	//   "rating": 2,
	//   "quantity": 42,
	//   "comments": [
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     },
	//     {
	//       "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	//     },
	//     {
	//       "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	//     },
	//     {
	//       "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	//     }
	//   ]
	// }, {
	//   "id": 48,
	//   "name": "Gaplokan",
	//   "price": 1662.77,
	//   "discount": 18,
	//   "category": "Indonesia",
	//   "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
	//   "rating": 1,
	//   "quantity": 5,
	//   "comments": [
	//     {
	//       "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	//     },
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     }
	//   ]
	// }, {
	//   "id": 49,
	//   "name": "Yoichi",
	//   "price": 1351.62,
	//   "discount": 79,
	//   "category": "Japan",
	//   "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	//   "rating": 4,
	//   "quantity": 2,
	//   "comments": [
	//     {
	//       "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	//     },
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     }
	//   ]
	// }, {
	//   "id": 50,
	//   "name": "Sebuku",
	//   "price": 5018.51,
	//   "discount": 70,
	//   "category": "Indonesia",
	//   "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	//   "rating": 5,
	//   "quantity": 40,
	//   "comments": [
	//     {
	//       "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	//     },
	//     {
	//       "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	//     },
	//     {
	//       "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	//     },
	//     {
	//       "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	//     }
	//   ]
	// }, {
	//   "id": 51,
	//   "name": "Maigo",
	//   "price": 19877.26,
	//   "discount": 40,
	//   "category": "Philippines",
	//   "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	//   "rating": 3,
	//   "quantity": 8,
	//   "comments": [
	//     {
	//       "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	//     }
	//   ]
	// }, {
	//   "id": 52,
	//   "name": "Ronfe",
	//   "price": 7069.81,
	//   "discount": 36,
	//   "category": "Portugal",
	//   "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	//   "rating": 1,
	//   "quantity": 38,
	//   "comments": [
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     },
	//     {
	//       "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	//     },
	//     {
	//       "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	//     },
	//     {
	//       "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	//     }
	//   ]
	// }, {
	//   "id": 53,
	//   "name": "'s-Hertogenbosch",
	//   "price": 16109.71,
	//   "discount": 49,
	//   "category": "Netherlands",
	//   "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	//   "rating": 2,
	//   "quantity": 11,
	//   "comments": [
	//     {
	//       "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	//     },
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     }
	//   ]
	// }, {
	//   "id": 54,
	//   "name": "Lubniewice",
	//   "price": 12702.53,
	//   "discount": 39,
	//   "category": "Poland",
	//   "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	//   "rating": 4,
	//   "quantity": 48,
	//   "comments": [
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     }
	//   ]
	// }, {
	//   "id": 55,
	//   "name": "Gunajaya",
	//   "price": 2431.49,
	//   "discount": 72,
	//   "category": "Indonesia",
	//   "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	//   "rating": 1,
	//   "quantity": 46,
	//   "comments": [
	//     {
	//       "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	//     },
	//     {
	//       "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	//     }
	//   ]
	// }, {
	//   "id": 56,
	//   "name": "Balogo",
	//   "price": 3328.05,
	//   "discount": 69,
	//   "category": "Philippines",
	//   "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
	//   "rating": 5,
	//   "quantity": 49,
	//   "comments": [
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	//     },
	//     {
	//       "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	//     },
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     },
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     }
	//   ]
	// }, {
	//   "id": 57,
	//   "name": "Nong Phok",
	//   "price": 5122.57,
	//   "discount": 38,
	//   "category": "Thailand",
	//   "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	//   "rating": 2,
	//   "quantity": 9,
	//   "comments": [
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     },
	//     {
	//       "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	//     },
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     },
	//     {
	//       "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     }
	//   ]
	// }, {
	//   "id": 58,
	//   "name": "Katagum",
	//   "price": 522.86,
	//   "discount": 40,
	//   "category": "Nigeria",
	//   "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	//   "rating": 4,
	//   "quantity": 16,
	//   "comments": [
	//     {
	//       "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	//     },
	//     {
	//       "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	//     },
	//     {
	//       "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	//     },
	//     {
	//       "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	//     }
	//   ]
	// }, {
	//   "id": 59,
	//   "name": "Parada de Todeia",
	//   "price": 4866.73,
	//   "discount": 81,
	//   "category": "Portugal",
	//   "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	//   "rating": 1,
	//   "quantity": 5,
	//   "comments": [
	//     {
	//       "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	//     },
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     },
	//     {
	//       "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	//     },
	//     {
	//       "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     }
	//   ]
	// }, {
	//   "id": 60,
	//   "name": "Bulubrangsi",
	//   "price": 19150.68,
	//   "discount": 12,
	//   "category": "Indonesia",
	//   "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	//   "rating": 3,
	//   "quantity": 16,
	//   "comments": [
	//     {
	//       "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	//     },
	//     {
	//       "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	//     },
	//     {
	//       "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	//     }
	//   ]
	// }, {
	//   "id": 61,
	//   "name": "Tomteboda",
	//   "price": 14700.1,
	//   "discount": 86,
	//   "category": "Sweden",
	//   "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	//   "rating": 5,
	//   "quantity": 13,
	//   "comments": [
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     },
	//     {
	//       "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	//     },
	//     {
	//       "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	//     }
	//   ]
	// }, {
	//   "id": 62,
	//   "name": "Oslomej",
	//   "price": 649.19,
	//   "discount": 16,
	//   "category": "Macedonia",
	//   "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
	//   "rating": 4,
	//   "quantity": 23,
	//   "comments": [
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     },
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     }
	//   ]
	// }, {
	//   "id": 63,
	//   "name": "Wangcao",
	//   "price": 6655.49,
	//   "discount": 100,
	//   "category": "China",
	//   "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	//   "rating": 4,
	//   "quantity": 12,
	//   "comments": [
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	//     },
	//     {
	//       "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	//     },
	//     {
	//       "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	//     },
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     }
	//   ]
	// }, {
	//   "id": 64,
	//   "name": "Karangparwa",
	//   "price": 14252.12,
	//   "discount": 99,
	//   "category": "Indonesia",
	//   "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
	//   "rating": 2,
	//   "quantity": 30,
	//   "comments": [
	//     {
	//       "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	//     },
	//     {
	//       "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	//     },
	//     {
	//       "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	//     },
	//     {
	//       "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	//     },
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     }
	//   ]
	// }, {
	//   "id": 65,
	//   "name": "Valleymount",
	//   "price": 4356.32,
	//   "discount": 41,
	//   "category": "Ireland",
	//   "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
	//   "rating": 3,
	//   "quantity": 44,
	//   "comments": [
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     }
	//   ]
	// }, {
	//   "id": 66,
	//   "name": "Ōme",
	//   "price": 6853.3,
	//   "discount": 48,
	//   "category": "Japan",
	//   "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	//   "rating": 3,
	//   "quantity": 34,
	//   "comments": [
	//     {
	//       "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	//     },
	//     {
	//       "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	//     },
	//     {
	//       "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	//     },
	//     {
	//       "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	//     },
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     }
	//   ]
	// }, {
	//   "id": 67,
	//   "name": "Rodotópi",
	//   "price": 13253.63,
	//   "discount": 68,
	//   "category": "Greece",
	//   "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
	//   "rating": 5,
	//   "quantity": 32,
	//   "comments": [
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     },
	//     {
	//       "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	//     }
	//   ]
	// }, {
	//   "id": 68,
	//   "name": "Farap",
	//   "price": 18575.47,
	//   "discount": 79,
	//   "category": "Turkmenistan",
	//   "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	//   "rating": 3,
	//   "quantity": 7,
	//   "comments": [
	//     {
	//       "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	//     },
	//     {
	//       "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	//     },
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	//     }
	//   ]
	// }, {
	//   "id": 69,
	//   "name": "Shedok",
	//   "price": 11768.3,
	//   "discount": 29,
	//   "category": "Russia",
	//   "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	//   "rating": 1,
	//   "quantity": 42,
	//   "comments": [
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	//     }
	//   ]
	// }, {
	//   "id": 70,
	//   "name": "Karlstad",
	//   "price": 3574.55,
	//   "discount": 15,
	//   "category": "Sweden",
	//   "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	//   "rating": 2,
	//   "quantity": 21,
	//   "comments": [
	//     {
	//       "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	//     },
	//     {
	//       "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	//     },
	//     {
	//       "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	//     }
	//   ]
	// }, {
	//   "id": 71,
	//   "name": "La Paz",
	//   "price": 2639.0,
	//   "discount": 79,
	//   "category": "Philippines",
	//   "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
	//   "rating": 4,
	//   "quantity": 4,
	//   "comments": [
	//     {
	//       "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	//     },
	//     {
	//       "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	//     },
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	//     },
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     }
	//   ]
	// }, {
	//   "id": 72,
	//   "name": "Všestary",
	//   "price": 19060.92,
	//   "discount": 86,
	//   "category": "Czech Republic",
	//   "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	//   "rating": 5,
	//   "quantity": 35,
	//   "comments": [
	//     {
	//       "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	//     },
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     }
	//   ]
	// }, {
	//   "id": 73,
	//   "name": "Sabang",
	//   "price": 5761.19,
	//   "discount": 43,
	//   "category": "Philippines",
	//   "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	//   "rating": 2,
	//   "quantity": 9,
	//   "comments": [
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	//     },
	//     {
	//       "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	//     },
	//     {
	//       "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	//     }
	//   ]
	// }, {
	//   "id": 74,
	//   "name": "Yidao",
	//   "price": 808.98,
	//   "discount": 31,
	//   "category": "China",
	//   "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	//   "rating": 2,
	//   "quantity": 24,
	//   "comments": [
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     }
	//   ]
	// }, {
	//   "id": 75,
	//   "name": "Tangjiapo",
	//   "price": 18567.02,
	//   "discount": 49,
	//   "category": "China",
	//   "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	//   "rating": 4,
	//   "quantity": 45,
	//   "comments": [
	//     {
	//       "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	//     },
	//     {
	//       "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	//     },
	//     {
	//       "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	//     }
	//   ]
	// }, {
	//   "id": 76,
	//   "name": "Mora",
	//   "price": 2863.26,
	//   "discount": 43,
	//   "category": "Sweden",
	//   "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	//   "rating": 1,
	//   "quantity": 14,
	//   "comments": [
	//     {
	//       "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     }
	//   ]
	// }, {
	//   "id": 77,
	//   "name": "Jinsha",
	//   "price": 19276.64,
	//   "discount": 23,
	//   "category": "China",
	//   "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	//   "rating": 3,
	//   "quantity": 40,
	//   "comments": [
	//     {
	//       "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	//     },
	//     {
	//       "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	//     },
	//     {
	//       "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	//     }
	//   ]
	// }, {
	//   "id": 78,
	//   "name": "Recreio",
	//   "price": 5810.71,
	//   "discount": 44,
	//   "category": "Brazil",
	//   "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	//   "rating": 2,
	//   "quantity": 19,
	//   "comments": [
	//     {
	//       "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	//     },
	//     {
	//       "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	//     },
	//     {
	//       "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	//     },
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     },
	//     {
	//       "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	//     }
	//   ]
	// }, {
	//   "id": 79,
	//   "name": "Domartang",
	//   "price": 13137.33,
	//   "discount": 51,
	//   "category": "China",
	//   "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	//   "rating": 1,
	//   "quantity": 14,
	//   "comments": [
	//     {
	//       "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	//     },
	//     {
	//       "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	//     },
	//     {
	//       "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	//     }
	//   ]
	// }, {
	//   "id": 80,
	//   "name": "Rizal",
	//   "price": 586.83,
	//   "discount": 22,
	//   "category": "Philippines",
	//   "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
	//   "rating": 5,
	//   "quantity": 39,
	//   "comments": [
	//     {
	//       "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	//     },
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     },
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     },
	//     {
	//       "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	//     }
	//   ]
	// }, {
	//   "id": 81,
	//   "name": "Staré Město",
	//   "price": 8742.41,
	//   "discount": 8,
	//   "category": "Czech Republic",
	//   "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	//   "rating": 5,
	//   "quantity": 24,
	//   "comments": [
	//     {
	//       "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	//     },
	//     {
	//       "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	//     },
	//     {
	//       "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	//     },
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	//     }
	//   ]
	// }, {
	//   "id": 82,
	//   "name": "Perpignan",
	//   "price": 19454.26,
	//   "discount": 32,
	//   "category": "France",
	//   "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	//   "rating": 2,
	//   "quantity": 45,
	//   "comments": [
	//     {
	//       "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	//     },
	//     {
	//       "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	//     }
	//   ]
	// }, {
	//   "id": 83,
	//   "name": "Moulay Bouchta",
	//   "price": 16191.15,
	//   "discount": 1,
	//   "category": "Morocco",
	//   "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
	//   "rating": 1,
	//   "quantity": 24,
	//   "comments": [
	//     {
	//       "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	//     },
	//     {
	//       "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	//     }
	//   ]
	// }, {
	//   "id": 84,
	//   "name": "Al Qaryatayn",
	//   "price": 4906.1,
	//   "discount": 3,
	//   "category": "Syria",
	//   "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	//   "rating": 5,
	//   "quantity": 18,
	//   "comments": [
	//     {
	//       "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	//     },
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	//     }
	//   ]
	// }, {
	//   "id": 85,
	//   "name": "Aygek",
	//   "price": 15218.13,
	//   "discount": 61,
	//   "category": "Armenia",
	//   "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
	//   "rating": 5,
	//   "quantity": 34,
	//   "comments": [
	//     {
	//       "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	//     }
	//   ]
	// }, {
	//   "id": 86,
	//   "name": "Bystrytsya",
	//   "price": 14042.27,
	//   "discount": 47,
	//   "category": "Ukraine",
	//   "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	//   "rating": 4,
	//   "quantity": 22,
	//   "comments": [
	//     {
	//       "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	//     },
	//     {
	//       "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	//     },
	//     {
	//       "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	//     },
	//     {
	//       "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	//     }
	//   ]
	// }, {
	//   "id": 87,
	//   "name": "Höfn",
	//   "price": 10757.03,
	//   "discount": 57,
	//   "category": "Iceland",
	//   "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
	//   "rating": 1,
	//   "quantity": 35,
	//   "comments": [
	//     {
	//       "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	//     }
	//   ]
	// }, {
	//   "id": 88,
	//   "name": "Shanhou",
	//   "price": 17561.45,
	//   "discount": 10,
	//   "category": "China",
	//   "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
	//   "rating": 2,
	//   "quantity": 41,
	//   "comments": [
	//     {
	//       "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	//     }
	//   ]
	// }, {
	//   "id": 89,
	//   "name": "Novorossiysk",
	//   "price": 814.51,
	//   "discount": 93,
	//   "category": "Russia",
	//   "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
	//   "rating": 2,
	//   "quantity": 8,
	//   "comments": [
	//     {
	//       "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	//     },
	//     {
	//       "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	//     },
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     }
	//   ]
	// }, {
	//   "id": 90,
	//   "name": "Balky",
	//   "price": 15123.1,
	//   "discount": 95,
	//   "category": "Ukraine",
	//   "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	//   "rating": 3,
	//   "quantity": 25,
	//   "comments": [
	//     {
	//       "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	//     }
	//   ]
	// }, {
	//   "id": 91,
	//   "name": "Inhambane",
	//   "price": 16675.73,
	//   "discount": 12,
	//   "category": "Mozambique",
	//   "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	//   "rating": 4,
	//   "quantity": 50,
	//   "comments": [
	//     {
	//       "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	//     }
	//   ]
	// }, {
	//   "id": 92,
	//   "name": "Dungkek Laok",
	//   "price": 6545.32,
	//   "discount": 27,
	//   "category": "Indonesia",
	//   "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	//   "rating": 5,
	//   "quantity": 41,
	//   "comments": [
	//     {
	//       "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	//     },
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     },
	//     {
	//       "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	//     },
	//     {
	//       "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	//     }
	//   ]
	// }, {
	//   "id": 93,
	//   "name": "Hyattsville",
	//   "price": 8270.23,
	//   "discount": 19,
	//   "category": "United States",
	//   "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	//   "rating": 4,
	//   "quantity": 44,
	//   "comments": [
	//     {
	//       "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	//     }
	//   ]
	// }, {
	//   "id": 94,
	//   "name": "Quintães",
	//   "price": 7463.49,
	//   "discount": 92,
	//   "category": "Portugal",
	//   "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	//   "rating": 3,
	//   "quantity": 35,
	//   "comments": [
	//     {
	//       "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	//     },
	//     {
	//       "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	//     }
	//   ]
	// }, {
	//   "id": 95,
	//   "name": "Gialo",
	//   "price": 18015.1,
	//   "discount": 69,
	//   "category": "Libya",
	//   "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
	//   "rating": 2,
	//   "quantity": 48,
	//   "comments": [
	//     {
	//       "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	//     },
	//     {
	//       "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	//     },
	//     {
	//       "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	//     },
	//     {
	//       "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	//     }
	//   ]
	// }, {
	//   "id": 96,
	//   "name": "Pak Phanang",
	//   "price": 19969.58,
	//   "discount": 16,
	//   "category": "Thailand",
	//   "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
	//   "rating": 5,
	//   "quantity": 29,
	//   "comments": [
	//     {
	//       "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	//     },
	//     {
	//       "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	//     }
	//   ]
	// }, {
	//   "id": 97,
	//   "name": "Hendala",
	//   "price": 8058.02,
	//   "discount": 40,
	//   "category": "Sri Lanka",
	//   "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	//   "rating": 1,
	//   "quantity": 41,
	//   "comments": [
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     },
	//     {
	//       "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	//     },
	//     {
	//       "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	//     }
	//   ]
	// }, {
	//   "id": 98,
	//   "name": "Mikumi",
	//   "price": 1808.36,
	//   "discount": 92,
	//   "category": "Tanzania",
	//   "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	//   "rating": 1,
	//   "quantity": 40,
	//   "comments": [
	//     {
	//       "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	//     },
	//     {
	//       "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	//     },
	//     {
	//       "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	//     }
	//   ]
	// }, {
	//   "id": 99,
	//   "name": "Presidente Dutra",
	//   "price": 9456.91,
	//   "discount": 49,
	//   "category": "Brazil",
	//   "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
	//   "rating": 1,
	//   "quantity": 3,
	//   "comments": [
	//     {
	//       "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	//     },
	//     {
	//       "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	//     },
	//     {
	//       "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	//     },
	//     {
	//       "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	//     }
	//   ]
	// }, {
	//   "id": 100,
	//   "name": "Zhoukou",
	//   "price": 15918.4,
	//   "discount": 93,
	//   "category": "China",
	//   "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	//   "rating": 1,
	//   "quantity": 37,
	//   "comments": [
	//     {
	//       "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	//     },
	//     {
	//       "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	//     },
	//     {
	//       "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	//     },
	//     {
	//       "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	//     }
	//   ]
	// }];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pid = __webpack_require__(6);
	
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
	        key: "isAvailable",
	        value: function isAvailable() {
	            return this.quantity > 0;
	        }
	    }]);
	
	    return Product;
	}();
	
	var productList = [];
	
	var productLists = JSON.parse(localStorage.getItem("products"));
	if (!productLists) productLists = [];else {
	    productLists.forEach(function (item, position) {
	        productList.push(item);
	    });
	}
	
	exports.productList = productList;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(7);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	var encode = __webpack_require__(10);
	var decode = __webpack_require__(12);
	var isValid = __webpack_require__(13);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(14) || 0;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(9);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function (item, ind, arr) {
	        return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed / 233280.0;
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(11);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup(number >> 4 * loopCounter & 0x0f | randomByte());
	        done = number < Math.pow(16, loopCounter + 1);
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var crypto = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(8);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var len = id.length;
	    for (var i = 0; i < len; i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}
	
	module.exports = isShortId;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = 0;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjFmN2EzNTRkZjMzOTJjY2ZkMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9DYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanMiXSwibmFtZXMiOlsiZGlzcGxheUNhcnRJdGVtcyIsImRpc3BsYXlQcm9kdWN0cyIsInNldFVwRXZlbnRMaXN0ZW5lcnMiLCJDb250cm9sbGVyIiwiZGlzcGxheUNhcnRJdGVtIiwic2V0VXBFdmVudGlzdGVuZXIiLCJjb250cm9sbGVyIiwiVmlldyIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZGJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJ0SXRlbUxpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZG5hbWUiLCJ2YWx1ZSIsInByaWNlIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInJhdGluZyIsInF1YW50aXR5IiwiZGlzY291bnQiLCJpbWFnZVVybCIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWNrIiwiZXZlbnQiLCJlbGVtZW50Q2xpY2tlZCIsInRhcmdldCIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwicHJvZHVjdENsaWNrZWQiLCJmaW5kUGFyZW50Tm9kZVRvZ2V0SWQiLCJpZCIsImFkZEl0ZW0iLCJwYXJlbnROb2RlIiwicmVtb3ZlSXRlbSIsInByb0xpc3RDb250YWluZXIiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsInBvc2l0aW9uIiwibGlFbCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9kdWN0UGFyZW50RGl2IiwicHJvZHVjdFByaWNlRGl2IiwibmFtZSIsImltZ1VybCIsImFwcGVuZENoaWxkIiwic3BsaXRhcnIiLCJ0b3RhbFByaWNlIiwidG9TdHJpbmciLCJzcGxpdCIsInJlcGxhY2UiLCJ0b3RhbEl0ZW0iLCJpdGVtcyIsIml0ZW1MaXN0IiwiZWxlbWVudE5hbWUiLCJzdHlsZSIsImVsZW1lbnQiLCJ0YXJnZXRFbGVtZW50Q2xhc3MiLCJjb25zb2xlIiwibG9nIiwidmlldyIsIkNhcnQiLCJzcGxpY2UiLCJsZW5ndGgiLCJyZWR1Y2UiLCJzdW0iLCJiIiwidG9GaXhlZCIsImNhcnQiLCJwcm9kdWN0RGF0YSIsInByb2R1Y3REYXRhcyIsInBhcnNlIiwiZ2V0SXRlbSIsInBpZCIsInJlcXVpcmUiLCJQcm9kdWN0IiwiY29tbWVudHMiLCJJZCIsImdlbmVyYXRlIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0TGlzdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxwaGFiZXQiLCJlbmNvZGUiLCJkZWNvZGUiLCJpc1ZhbGlkIiwiUkVEVUNFX1RJTUUiLCJ2ZXJzaW9uIiwiY2x1c3RlcldvcmtlcklkIiwiY291bnRlciIsInByZXZpb3VzU2Vjb25kcyIsInN0ciIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwibG9va3VwIiwic2VlZCIsInNlZWRWYWx1ZSIsIndvcmtlciIsIndvcmtlcklkIiwiY2hhcmFjdGVycyIsIm5ld0NoYXJhY3RlcnMiLCJ1bmRlZmluZWQiLCJzaHVmZmxlZCIsInJhbmRvbUZyb21TZWVkIiwiT1JJR0lOQUwiLCJwcmV2aW91c1NlZWQiLCJyZXNldCIsInNldENoYXJhY3RlcnMiLCJfYWxwaGFiZXRfIiwiRXJyb3IiLCJ1bmlxdWUiLCJmaWx0ZXIiLCJpbmQiLCJhcnIiLCJsYXN0SW5kZXhPZiIsImpvaW4iLCJzZXRTZWVkIiwic2h1ZmZsZSIsInNvdXJjZUFycmF5IiwidGFyZ2V0QXJyYXkiLCJyIiwibmV4dFZhbHVlIiwiY2hhcmFjdGVySW5kZXgiLCJnZXRTaHVmZmxlZCIsImluZGV4IiwiYWxwaGFiZXRTaHVmZmxlZCIsImdldE5leHRWYWx1ZSIsIl9zZWVkXyIsInJhbmRvbUJ5dGUiLCJudW1iZXIiLCJsb29wQ291bnRlciIsImRvbmUiLCJwb3ciLCJjcnlwdG8iLCJ3aW5kb3ciLCJtc0NyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsInJhbmRvbSIsImRlc3QiLCJVaW50OEFycmF5IiwiaW5kZXhPZiIsInN1YnN0ciIsImlzU2hvcnRJZCIsImxlbiIsImkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUEsd0JBQVdBLGdCQUFYO0FBQ0Esd0JBQVdDLGVBQVg7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPOzs7Ozs7Ozs7Ozs7Ozs7O0FDLzdEQSxLQUFJSSxNQUFNLG1CQUFBQyxDQUFRLENBQVIsQ0FBVjs7S0FFYUMsTyxXQUFBQSxPO0FBQ1Qsc0JBQVloQyxJQUFaLEVBQWtCakMsS0FBbEIsRUFBeUJDLFFBQXpCLEVBQW1DQyxXQUFuQyxFQUFnREMsTUFBaEQsRUFBdUc7QUFBQSxhQUEvQ0MsUUFBK0MsdUVBQXBDLENBQW9DO0FBQUEsYUFBakM4RCxRQUFpQyx1RUFBdEIsRUFBc0I7QUFBQSxhQUFsQjdELFFBQWtCO0FBQUEsYUFBUjZCLE1BQVE7O0FBQUE7O0FBQ25HO0FBQ0EsY0FBS2lDLEVBQUwsR0FBVUosSUFBSUssUUFBSixFQUFWO0FBQ0EsY0FBS25DLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtqQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUs2QixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLZ0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7Ozt1Q0FFYTtBQUNWLG9CQUFPLEtBQUs5RCxRQUFMLEdBQWdCLENBQXZCO0FBQ0g7Ozs7OztBQUVMLEtBQUlpRSxjQUFjLEVBQWxCOztBQUVBLEtBQUlDLGVBQWU1RCxLQUFLbUQsS0FBTCxDQUFXckQsYUFBYXNELE9BQWIsQ0FBcUIsVUFBckIsQ0FBWCxDQUFuQjtBQUNBLEtBQUksQ0FBQ1EsWUFBTCxFQUFtQkEsZUFBZSxFQUFmLENBQW5CLEtBQ0s7QUFDREEsa0JBQWE1QyxPQUFiLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNyQ3lDLHFCQUFZOUQsSUFBWixDQUFpQm9CLElBQWpCO0FBQ0gsTUFGRDtBQUdGOztTQUVPMEMsVyxHQUFBQSxXOzs7Ozs7QUMvQlQ7O0FBQ0FFLFFBQU9DLE9BQVAsR0FBaUIsbUJBQUFSLENBQVEsQ0FBUixDQUFqQixDOzs7Ozs7QUNEQTs7QUFFQSxLQUFJUyxXQUFXLG1CQUFBVCxDQUFRLENBQVIsQ0FBZjtBQUNBLEtBQUlVLFNBQVMsbUJBQUFWLENBQVEsRUFBUixDQUFiO0FBQ0EsS0FBSVcsU0FBUyxtQkFBQVgsQ0FBUSxFQUFSLENBQWI7QUFDQSxLQUFJWSxVQUFVLG1CQUFBWixDQUFRLEVBQVIsQ0FBZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJYSxjQUFjLGFBQWxCOztBQUVBO0FBQ0E7QUFDQSxLQUFJQyxVQUFVLENBQWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJQyxrQkFBa0IsbUJBQUFmLENBQVEsRUFBUixLQUF1QyxDQUE3RDs7QUFFQTtBQUNBLEtBQUlnQixPQUFKOztBQUVBO0FBQ0EsS0FBSUMsZUFBSjs7QUFFQTs7OztBQUlBLFVBQVNiLFFBQVQsR0FBb0I7O0FBRWhCLFNBQUljLE1BQU0sRUFBVjs7QUFFQSxTQUFJQyxVQUFVQyxLQUFLQyxLQUFMLENBQVcsQ0FBQ0MsS0FBS0MsR0FBTCxLQUFhVixXQUFkLElBQTZCLEtBQXhDLENBQWQ7O0FBRUEsU0FBSU0sWUFBWUYsZUFBaEIsRUFBaUM7QUFDN0JEO0FBQ0gsTUFGRCxNQUVPO0FBQ0hBLG1CQUFVLENBQVY7QUFDQUMsMkJBQWtCRSxPQUFsQjtBQUNIOztBQUVERCxXQUFNQSxNQUFNUixPQUFPRCxTQUFTZSxNQUFoQixFQUF3QlYsT0FBeEIsQ0FBWjtBQUNBSSxXQUFNQSxNQUFNUixPQUFPRCxTQUFTZSxNQUFoQixFQUF3QlQsZUFBeEIsQ0FBWjtBQUNBLFNBQUlDLFVBQVUsQ0FBZCxFQUFpQjtBQUNiRSxlQUFNQSxNQUFNUixPQUFPRCxTQUFTZSxNQUFoQixFQUF3QlIsT0FBeEIsQ0FBWjtBQUNIO0FBQ0RFLFdBQU1BLE1BQU1SLE9BQU9ELFNBQVNlLE1BQWhCLEVBQXdCTCxPQUF4QixDQUFaOztBQUVBLFlBQU9ELEdBQVA7QUFDSDs7QUFHRDs7Ozs7O0FBTUEsVUFBU08sSUFBVCxDQUFjQyxTQUFkLEVBQXlCO0FBQ3JCakIsY0FBU2dCLElBQVQsQ0FBY0MsU0FBZDtBQUNBLFlBQU9uQixPQUFPQyxPQUFkO0FBQ0g7O0FBRUQ7Ozs7OztBQU1BLFVBQVNtQixNQUFULENBQWdCQyxRQUFoQixFQUEwQjtBQUN0QmIsdUJBQWtCYSxRQUFsQjtBQUNBLFlBQU9yQixPQUFPQyxPQUFkO0FBQ0g7O0FBRUQ7Ozs7O0FBS0EsVUFBU3FCLFVBQVQsQ0FBb0JDLGFBQXBCLEVBQW1DO0FBQy9CLFNBQUlBLGtCQUFrQkMsU0FBdEIsRUFBaUM7QUFDN0J0QixrQkFBU29CLFVBQVQsQ0FBb0JDLGFBQXBCO0FBQ0g7O0FBRUQsWUFBT3JCLFNBQVN1QixRQUFULEVBQVA7QUFDSDs7QUFHRDtBQUNBekIsUUFBT0MsT0FBUCxHQUFpQkosUUFBakI7QUFDQUcsUUFBT0MsT0FBUCxDQUFlSixRQUFmLEdBQTBCQSxRQUExQjtBQUNBRyxRQUFPQyxPQUFQLENBQWVpQixJQUFmLEdBQXNCQSxJQUF0QjtBQUNBbEIsUUFBT0MsT0FBUCxDQUFlbUIsTUFBZixHQUF3QkEsTUFBeEI7QUFDQXBCLFFBQU9DLE9BQVAsQ0FBZXFCLFVBQWYsR0FBNEJBLFVBQTVCO0FBQ0F0QixRQUFPQyxPQUFQLENBQWVHLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0FKLFFBQU9DLE9BQVAsQ0FBZUksT0FBZixHQUF5QkEsT0FBekIsQzs7Ozs7O0FDbkdBOztBQUVBLEtBQUlxQixpQkFBaUIsbUJBQUFqQyxDQUFRLENBQVIsQ0FBckI7O0FBRUEsS0FBSWtDLFdBQVcsa0VBQWY7QUFDQSxLQUFJekIsUUFBSjtBQUNBLEtBQUkwQixZQUFKOztBQUVBLEtBQUlILFFBQUo7O0FBRUEsVUFBU0ksS0FBVCxHQUFpQjtBQUNiSixnQkFBVyxLQUFYO0FBQ0g7O0FBRUQsVUFBU0ssYUFBVCxDQUF1QkMsVUFBdkIsRUFBbUM7QUFDL0IsU0FBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2IsYUFBSTdCLGFBQWF5QixRQUFqQixFQUEyQjtBQUN2QnpCLHdCQUFXeUIsUUFBWDtBQUNBRTtBQUNIO0FBQ0Q7QUFDSDs7QUFFRCxTQUFJRSxlQUFlN0IsUUFBbkIsRUFBNkI7QUFDekI7QUFDSDs7QUFFRCxTQUFJNkIsV0FBV2pELE1BQVgsS0FBc0I2QyxTQUFTN0MsTUFBbkMsRUFBMkM7QUFDdkMsZUFBTSxJQUFJa0QsS0FBSixDQUFVLHlDQUF5Q0wsU0FBUzdDLE1BQWxELEdBQTJELG9DQUEzRCxHQUFrR2lELFdBQVdqRCxNQUE3RyxHQUFzSCxlQUF0SCxHQUF3SWlELFVBQWxKLENBQU47QUFDSDs7QUFFRCxTQUFJRSxTQUFTRixXQUFXL0QsS0FBWCxDQUFpQixFQUFqQixFQUFxQmtFLE1BQXJCLENBQTRCLFVBQVM5RSxJQUFULEVBQWUrRSxHQUFmLEVBQW9CQyxHQUFwQixFQUF3QjtBQUM5RCxnQkFBT0QsUUFBUUMsSUFBSUMsV0FBSixDQUFnQmpGLElBQWhCLENBQWY7QUFDRixNQUZZLENBQWI7O0FBSUEsU0FBSTZFLE9BQU9uRCxNQUFYLEVBQW1CO0FBQ2YsZUFBTSxJQUFJa0QsS0FBSixDQUFVLHlDQUF5Q0wsU0FBUzdDLE1BQWxELEdBQTJELHdEQUEzRCxHQUFzSG1ELE9BQU9LLElBQVAsQ0FBWSxJQUFaLENBQWhJLENBQU47QUFDSDs7QUFFRHBDLGdCQUFXNkIsVUFBWDtBQUNBRjtBQUNIOztBQUVELFVBQVNQLFVBQVQsQ0FBb0JTLFVBQXBCLEVBQWdDO0FBQzVCRCxtQkFBY0MsVUFBZDtBQUNBLFlBQU83QixRQUFQO0FBQ0g7O0FBRUQsVUFBU3FDLE9BQVQsQ0FBaUJyQixJQUFqQixFQUF1QjtBQUNuQlEsb0JBQWVSLElBQWYsQ0FBb0JBLElBQXBCO0FBQ0EsU0FBSVUsaUJBQWlCVixJQUFyQixFQUEyQjtBQUN2Qlc7QUFDQUQsd0JBQWVWLElBQWY7QUFDSDtBQUNKOztBQUVELFVBQVNzQixPQUFULEdBQW1CO0FBQ2YsU0FBSSxDQUFDdEMsUUFBTCxFQUFlO0FBQ1g0Qix1QkFBY0gsUUFBZDtBQUNIOztBQUVELFNBQUljLGNBQWN2QyxTQUFTbEMsS0FBVCxDQUFlLEVBQWYsQ0FBbEI7QUFDQSxTQUFJMEUsY0FBYyxFQUFsQjtBQUNBLFNBQUlDLElBQUlqQixlQUFla0IsU0FBZixFQUFSO0FBQ0EsU0FBSUMsY0FBSjs7QUFFQSxZQUFPSixZQUFZM0QsTUFBWixHQUFxQixDQUE1QixFQUErQjtBQUMzQjZELGFBQUlqQixlQUFla0IsU0FBZixFQUFKO0FBQ0FDLDBCQUFpQmhDLEtBQUtDLEtBQUwsQ0FBVzZCLElBQUlGLFlBQVkzRCxNQUEzQixDQUFqQjtBQUNBNEQscUJBQVkxRyxJQUFaLENBQWlCeUcsWUFBWTVELE1BQVosQ0FBbUJnRSxjQUFuQixFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxDQUFqQjtBQUNIO0FBQ0QsWUFBT0gsWUFBWUosSUFBWixDQUFpQixFQUFqQixDQUFQO0FBQ0g7O0FBRUQsVUFBU1EsV0FBVCxHQUF1QjtBQUNuQixTQUFJckIsUUFBSixFQUFjO0FBQ1YsZ0JBQU9BLFFBQVA7QUFDSDtBQUNEQSxnQkFBV2UsU0FBWDtBQUNBLFlBQU9mLFFBQVA7QUFDSDs7QUFFRDs7Ozs7QUFLQSxVQUFTUixNQUFULENBQWdCOEIsS0FBaEIsRUFBdUI7QUFDbkIsU0FBSUMsbUJBQW1CRixhQUF2QjtBQUNBLFlBQU9FLGlCQUFpQkQsS0FBakIsQ0FBUDtBQUNIOztBQUVEL0MsUUFBT0MsT0FBUCxHQUFpQjtBQUNicUIsaUJBQVlBLFVBREM7QUFFYkosV0FBTXFCLE9BRk87QUFHYnRCLGFBQVFBLE1BSEs7QUFJYlEsZUFBVXFCO0FBSkcsRUFBakIsQzs7Ozs7O0FDNUZBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSTVCLE9BQU8sQ0FBWDs7QUFFQTs7Ozs7QUFLQSxVQUFTK0IsWUFBVCxHQUF3QjtBQUNwQi9CLFlBQU8sQ0FBQ0EsT0FBTyxJQUFQLEdBQWMsS0FBZixJQUF3QixNQUEvQjtBQUNBLFlBQU9BLE9BQU0sUUFBYjtBQUNIOztBQUVELFVBQVNxQixPQUFULENBQWlCVyxNQUFqQixFQUF5QjtBQUNyQmhDLFlBQU9nQyxNQUFQO0FBQ0g7O0FBRURsRCxRQUFPQyxPQUFQLEdBQWlCO0FBQ2IyQyxnQkFBV0ssWUFERTtBQUViL0IsV0FBTXFCO0FBRk8sRUFBakIsQzs7Ozs7O0FDckJBOztBQUVBLEtBQUlZLGFBQWEsbUJBQUExRCxDQUFRLEVBQVIsQ0FBakI7O0FBRUEsVUFBU1UsTUFBVCxDQUFnQmMsTUFBaEIsRUFBd0JtQyxNQUF4QixFQUFnQztBQUM1QixTQUFJQyxjQUFjLENBQWxCO0FBQ0EsU0FBSUMsSUFBSjs7QUFFQSxTQUFJM0MsTUFBTSxFQUFWOztBQUVBLFlBQU8sQ0FBQzJDLElBQVIsRUFBYztBQUNWM0MsZUFBTUEsTUFBTU0sT0FBV21DLFVBQVcsSUFBSUMsV0FBaEIsR0FBZ0MsSUFBbEMsR0FBMkNGLFlBQW5ELENBQVo7QUFDQUcsZ0JBQU9GLFNBQVV2QyxLQUFLMEMsR0FBTCxDQUFTLEVBQVQsRUFBYUYsY0FBYyxDQUEzQixDQUFqQjtBQUNBQTtBQUNIO0FBQ0QsWUFBTzFDLEdBQVA7QUFDSDs7QUFFRFgsUUFBT0MsT0FBUCxHQUFpQkUsTUFBakIsQzs7Ozs7O0FDbEJBOzs7O0FBRUEsS0FBSXFELFNBQVMsUUFBT0MsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFsQixLQUErQkEsT0FBT0QsTUFBUCxJQUFpQkMsT0FBT0MsUUFBdkQsQ0FBYixDLENBQStFOztBQUUvRSxVQUFTUCxVQUFULEdBQXNCO0FBQ2xCLFNBQUksQ0FBQ0ssTUFBRCxJQUFXLENBQUNBLE9BQU9HLGVBQXZCLEVBQXdDO0FBQ3BDLGdCQUFPOUMsS0FBS0MsS0FBTCxDQUFXRCxLQUFLK0MsTUFBTCxLQUFnQixHQUEzQixJQUFrQyxJQUF6QztBQUNIO0FBQ0QsU0FBSUMsT0FBTyxJQUFJQyxVQUFKLENBQWUsQ0FBZixDQUFYO0FBQ0FOLFlBQU9HLGVBQVAsQ0FBdUJFLElBQXZCO0FBQ0EsWUFBT0EsS0FBSyxDQUFMLElBQVUsSUFBakI7QUFDSDs7QUFFRDdELFFBQU9DLE9BQVAsR0FBaUJrRCxVQUFqQixDOzs7Ozs7QUNiQTs7QUFDQSxLQUFJakQsV0FBVyxtQkFBQVQsQ0FBUSxDQUFSLENBQWY7O0FBRUE7Ozs7O0FBS0EsVUFBU1csTUFBVCxDQUFnQnZELEVBQWhCLEVBQW9CO0FBQ2hCLFNBQUl5RSxhQUFhcEIsU0FBU3VCLFFBQVQsRUFBakI7QUFDQSxZQUFPO0FBQ0hsQixrQkFBU2UsV0FBV3lDLE9BQVgsQ0FBbUJsSCxHQUFHbUgsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLENBQW5CLElBQXNDLElBRDVDO0FBRUg1QyxpQkFBUUUsV0FBV3lDLE9BQVgsQ0FBbUJsSCxHQUFHbUgsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLENBQW5CLElBQXNDO0FBRjNDLE1BQVA7QUFJSDs7QUFFRGhFLFFBQU9DLE9BQVAsR0FBaUJHLE1BQWpCLEM7Ozs7OztBQ2hCQTs7QUFDQSxLQUFJRixXQUFXLG1CQUFBVCxDQUFRLENBQVIsQ0FBZjs7QUFFQSxVQUFTd0UsU0FBVCxDQUFtQnBILEVBQW5CLEVBQXVCO0FBQ25CLFNBQUksQ0FBQ0EsRUFBRCxJQUFPLE9BQU9BLEVBQVAsS0FBYyxRQUFyQixJQUFpQ0EsR0FBR2lDLE1BQUgsR0FBWSxDQUFqRCxFQUFxRDtBQUNqRCxnQkFBTyxLQUFQO0FBQ0g7O0FBRUQsU0FBSXdDLGFBQWFwQixTQUFTb0IsVUFBVCxFQUFqQjtBQUNBLFNBQUk0QyxNQUFNckgsR0FBR2lDLE1BQWI7QUFDQSxVQUFJLElBQUlxRixJQUFJLENBQVosRUFBZUEsSUFBSUQsR0FBbkIsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3hCLGFBQUk3QyxXQUFXeUMsT0FBWCxDQUFtQmxILEdBQUdzSCxDQUFILENBQW5CLE1BQThCLENBQUMsQ0FBbkMsRUFBc0M7QUFDbEMsb0JBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRCxZQUFPLElBQVA7QUFDSDs7QUFFRG5FLFFBQU9DLE9BQVAsR0FBaUJnRSxTQUFqQixDOzs7Ozs7QUNsQkE7O0FBRUFqRSxRQUFPQyxPQUFQLEdBQWlCLENBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjFmN2EzNTRkZjMzOTJjY2ZkMWMiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xyXG5cclxuLy9sZXQgY2FydE9iamVjdCA9IG5ldyBDYXJ0KCk7XHJcblxyXG5jb250cm9sbGVyLmRpc3BsYXlDYXJ0SXRlbXMoKTtcclxuY29udHJvbGxlci5kaXNwbGF5UHJvZHVjdHMoKTtcclxuY29udHJvbGxlci5zZXRVcEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgSXRlbSBwcmljZSBpcyAke2NhcnRPYmplY3QudG90YWxQcmljZSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgaXRlbSBpbiBjYXJ0IGlzOiAke2NhcnRPYmplY3QudG90YWxJdGVtKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBkaXNjb3VudCBwcmljZSBpcyAke2NhcnRPYmplY3QudG90YWxEaXNjb3VudFByaWNlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBwcmljZSB3aXRob3V0IGRpc2NvdW50IGlzICR7Y2FydE9iamVjdC50b3RhbFByaWNlV2l0aG91dERpc2NvdW50KCl9YCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCJpbXBvcnQge3ZpZXcgYXMgVmlld30gZnJvbSAnLi4vdmlldy92aWV3JztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXJ7XHJcbiAgICBkaXNwbGF5Q2FydEl0ZW1zKCl7XHJcbiAgICAgICAgVmlldy5kaXNwbGF5Q2FydEl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgVmlldy5zZXRVcEV2ZW50aXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQcm9kdWN0cygpe1xyXG4gICAgICAgIFZpZXcuZGlzcGxheVByb2R1Y3RzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsImltcG9ydCB7IGNhcnQgYXMgQ2FydCB9IGZyb20gJy4uL21vZGVscy9DYXJ0JztcclxuaW1wb3J0IHsgUHJvZHVjdCwgcHJvZHVjdExpc3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRVcEV2ZW50aXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtYWRkLWJ1dHRvblwiKSxcclxuICAgICAgICAgICAgYWRkYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LWxpc3QtaG9sZGVyXCIpLFxyXG4gICAgICAgICAgICBjYXJ0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1zbGlzdFwiKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBwcm9kbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdG5hbWVcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2VcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICByYXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGluZ1wiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWFudGl0eVwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjb3VudFwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVVybFwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vKG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHksIGNvbW1lbnRzLCBkaXNjb3VudClcclxuICAgICAgICAgICAgcHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChwcm9kbmFtZSwgcHJpY2UsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgcmF0aW5nLCBxdWFudGl0eSwgW10sIGRpc2NvdW50LCBpbWFnZVVybCkpO1xyXG5cclxuICAgICAgICAgICAgLy9zYXZlIHByb2R1Y3RMaXN0IHRvIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0TGlzdCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jbG9zZVwiKS5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2xpY2tlZCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgZWxlbWVudCBjbGlja2VkIGlzIGEgYWRkIHRvIGJhc2tldCBidXR0b25cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRDbGlja2VkLmNsYXNzTmFtZS5pbmNsdWRlcyhcImFkZC10by1iYXNrZXQtYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdENsaWNrZWQgPSBwcm9kdWN0TGlzdFtmaW5kUGFyZW50Tm9kZVRvZ2V0SWQoZWxlbWVudENsaWNrZWQsIFwicHJvZHVjdC1saXN0LWVsZW1lbnRcIikuaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vRmluZSBhbmQgYWRkIHRoZSBpdGVtIHdpdGggdGhlIElkIHRvIHRoZSBDYXJ0XHJcbiAgICAgICAgICAgICAgICBDYXJ0LmFkZEl0ZW0ocHJvZHVjdENsaWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q2FydEl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJ0SXRlbUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2xpY2tlZCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Q2xpY2tlZC5jbGFzc05hbWUuaW5jbHVkZXMoXCJmYS10aW1lc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSBmaW5kUGFyZW50Tm9kZVRvZ2V0SWQoZWxlbWVudENsaWNrZWQsIFwiY2FydC1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgQ2FydC5yZW1vdmVJdGVtKHBhcmVudE5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q2FydEl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgbGV0IHByb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lci1wcm9kdWN0LWxpc3RcIik7XHJcbiAgICAgICAgcHJvTGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgICAgICAvL3Byb2R1Y3RMaXN0XHJcbiAgICAgICAgcHJvZHVjdExpc3QuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpRWwgPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJwcm9kdWN0LWxpc3QtZWxlbWVudFwiKSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQYXJlbnREaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvZHVjdFBhcmVudERpdlwiKSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9kdWN0UHJpY2VEaXZcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgbGlFbC5pZCA9IHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgcHJvZHVjdFByaWNlRGl2LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICBgPHVsIGNsYXNzPVwicHJvZHVjdC1kZXRhaWxzLXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPjxoMz4ke2l0ZW0ubmFtZX08L2gzPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBjbGFzcz1cInByb2R1Y3QtaW1hZ2VcIiBzcmM9JHtpdGVtLmltZ1VybH0+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+PGI+UHJpY2U6IDwvYj48L3NwYW4+PHNwYW4+PGI+XFwkJHtpdGVtLnByaWNlfTwvYj48L3NwYW4+PC9saT48Yj5cclxuICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgKGl0ZW0ucXVhbnRpdHkgPiAwKSA/IFwiPGxpPjxzcGFuIHN0eWxlPSdjb2xvcjogZ3JlZW4nPkluIFN0b2NrPC9zcGFuPjwvbGk+XCIgOiBcIjxsaSBzdHlsZT0nY29sb3I6IHJlZCc+PHNwYW4+T3V0IG9mIHN0b2NrPC9zcGFuPjwvbGk+XCJcclxuICAgICAgICAgICAgICAgIH08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYWRkLXRvLWJhc2tldC1idXR0b25cIj5BZGQgdG8gYmFza2V0PC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcHJvZHVjdFBhcmVudERpdi5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2VEaXYpO1xyXG4gICAgICAgICAgICBsaUVsLmFwcGVuZENoaWxkKHByb2R1Y3RQYXJlbnREaXYpO1xyXG4gICAgICAgICAgICBwcm9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpRWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlDYXJ0SXRlbSgpIHtcclxuICAgICAgICAvL2Rpc3BsYXkgdG90YWwgaXRlbSBwcmljZVxyXG4gICAgICAgIGxldCBzcGxpdGFyciA9IChDYXJ0LnRvdGFsUHJpY2UoKSAhPT0gMCkgPyBDYXJ0LnRvdGFsUHJpY2UoKS50b1N0cmluZygpLnNwbGl0KCcuJykgOiBbXCIwXCIsIFwiMDBcIl07XHJcblxyXG4gICAgICAgIHNwbGl0YXJyWzBdID0gc3BsaXRhcnJbMF0ucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSskKS9nLCBcIiQxLFwiKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluUHJpY2VcIikuaW5uZXJIVE1MID0gYFxcJCR7c3BsaXRhcnJbMF19PHN1cD4uJHtzcGxpdGFyclsxXX0mIzE2Mjs8L3N1cD5gO1xyXG5cclxuICAgICAgICAvL2Rpc3BsYXkgdG90YWwgaXRlbSBpbiBiYXNrZXRcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3lcIikuaW5uZXJIVE1MID0gQ2FydC50b3RhbEl0ZW0oKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWl0ZW1zXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIC8vTG9vcCBhbmQgZGlzbGF5IENhcnQgaXRlbXMgaW4gYSBsaXN0XHJcbiAgICAgICAgQ2FydC5pdGVtcy5mb3JFYWNoKChpdGVtLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUxpc3QgPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJjYXJ0LWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmlkID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwic21hbGwtcHJvZHVjdC1pY29uXCIgXHJcbiAgICAgICAgICAgIHNyYz0ke2l0ZW0uaW1nVXJsfT48Yj4xIHggJHtpdGVtLm5hbWV9IFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcnRpdGVtLXByaWNlXCI+PSBcXCQke2l0ZW0ucHJpY2V9IDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWl0ZW1zXCIpLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSA9IFwibmFcIiwgc3R5bGUgPSBcIm5hXCIsIGlubmVySFRNTCA9IFwibmFcIikgPT4ge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBcIm5hXCIpIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xyXG5cclxuICAgIGlmIChzdHlsZSAhPT0gXCJuYVwiKSBlbGVtZW50LnN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgaWYgKGlubmVySFRNTCAhPT0gXCJuYVwiKSBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmxldCBmaW5kUGFyZW50Tm9kZVRvZ2V0SWQgPSAoZWwsIHRhcmdldEVsZW1lbnRDbGFzcykgPT4ge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgICAgICBpZiAoZWwuY2xhc3NOYW1lLmluY2x1ZGVzKHRhcmdldEVsZW1lbnRDbGFzcykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSBJRCBpcyAke2VsLmlkfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCB2aWV3ID0gbmV3IFZpZXcoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy92aWV3LmpzIiwiaW1wb3J0IHsgcHJvZHVjdERhdGEgfSBmcm9tICcuL3Byb2R1Y3REYXRhJztcclxuXHJcbmNsYXNzIENhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHByb2R1Y3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0ocG9zaXRpb24pIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pdGVtcy5sZW5ndGggPiAwKSA/IHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIDEsIDApIDogMDtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbERpc2NvdW50UHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIChiLmRpc2NvdW50ICE9PSAnJykgPyAoKGIuZGlzY291bnQgLyAxMDApICogYi5wcmljZSkgOiAwLjAwLCAwLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsUHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApID8gKHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIChiLnByaWNlIC0gKGIuZGlzY291bnQgKiBiLnByaWNlKSAvIDEwMCksIDAuMDApLnRvRml4ZWQoMikpIDogMC4wMDtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbFByaWNlV2l0aG91dERpc2NvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi5wcmljZSAhPT0gJycpID8gYi5wcmljZSA6IDAuMDAsIDAuMDApLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY2FydCA9IG5ldyBDYXJ0KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9DYXJ0LmpzIiwibGV0IHByb2R1Y3REYXRhID0gW107XHJcblxyXG5sZXQgcHJvZHVjdERhdGFzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNhcnRcIikpO1xyXG5pZiAoIXByb2R1Y3REYXRhcykgcHJvZHVjdERhdGEgPSBbXTtcclxuZWxzZSB7XHJcbiAgICBwcm9kdWN0RGF0YXMuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICBwcm9kdWN0RGF0YS5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiB9XHJcblxyXG5cclxuIGV4cG9ydCB7cHJvZHVjdERhdGF9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgcHJvZHVjdERhdGEgPSBbe1xyXG4vLyAgIFwiaWRcIjogMSxcclxuLy8gICBcIm5hbWVcIjogXCJMYWMtQnJvbWVcIixcclxuLy8gICBcInByaWNlXCI6IDU4NzEuOTcsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA1MSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2FuYWRhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDUsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAxNixcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDIsXHJcbi8vICAgXCJuYW1lXCI6IFwiTG9uZ3F1YW5cIixcclxuLy8gICBcInByaWNlXCI6IDE1MDI5Ljg1LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNzQsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDMsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzMixcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDMsXHJcbi8vICAgXCJuYW1lXCI6IFwiU2tlbGxlZnRlaGFtblwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTAyNS45NyxcclxuLy8gICBcImRpc2NvdW50XCI6IDc3LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJTd2VkZW5cIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDI3LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA0LFxyXG4vLyAgIFwibmFtZVwiOiBcIkthcmVtYVwiLFxyXG4vLyAgIFwicHJpY2VcIjogNTIyMC45OCxcclxuLy8gICBcImRpc2NvdW50XCI6IDgsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlRhbnphbmlhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNCxcclxuLy8gICBcInF1YW50aXR5XCI6IDE3LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIGFjIGVzdCBsYWNpbmlhIG5pc2kgdmVuZW5hdGlzIHRyaXN0aXF1ZS4gRnVzY2UgY29uZ3VlLCBkaWFtIGlkIG9ybmFyZSBpbXBlcmRpZXQsIHNhcGllbiB1cm5hIHByZXRpdW0gbmlzbCwgdXQgdm9sdXRwYXQgc2FwaWVuIGFyY3Ugc2VkIGF1Z3VlLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDUsXHJcbi8vICAgXCJuYW1lXCI6IFwiU2hpamlhb1wiLFxyXG4vLyAgIFwicHJpY2VcIjogODM2NS43LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNTIsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDE4LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDYsXHJcbi8vICAgXCJuYW1lXCI6IFwiTGl1ZHVcIixcclxuLy8gICBcInByaWNlXCI6IDI4OTQuNTIsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA2MSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIixcclxuLy8gICBcInJhdGluZ1wiOiAyLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMzUsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA3LFxyXG4vLyAgIFwibmFtZVwiOiBcIkJ1a2JhdGFuZ1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTYzMzQuNjcsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA4MCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNCxcclxuLy8gICBcInF1YW50aXR5XCI6IDUsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDgsXHJcbi8vICAgXCJuYW1lXCI6IFwiSmlucGluZ1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTkxMzIuNDksXHJcbi8vICAgXCJkaXNjb3VudFwiOiA0LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIixcclxuLy8gICBcInJhdGluZ1wiOiA1LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMjcsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA5LFxyXG4vLyAgIFwibmFtZVwiOiBcIkJvam9uZ2FyZW5cIixcclxuLy8gICBcInByaWNlXCI6IDExMDUuNjgsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAyNixcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMSxcclxuLy8gICBcInF1YW50aXR5XCI6IDMyLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAxMCxcclxuLy8gICBcIm5hbWVcIjogXCJaYXJhemFcIixcclxuLy8gICBcInByaWNlXCI6IDE3NzMzLjc5LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNTIsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlZlbmV6dWVsYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMTgsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDExLFxyXG4vLyAgIFwibmFtZVwiOiBcIkNpc2V3dVwiLFxyXG4vLyAgIFwicHJpY2VcIjogNDE0My44MixcclxuLy8gICBcImRpc2NvdW50XCI6IDMzLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDE5LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAxMixcclxuLy8gICBcIm5hbWVcIjogXCJTYW50byBOacOxb1wiLFxyXG4vLyAgIFwicHJpY2VcIjogOTk4OC4xOCxcclxuLy8gICBcImRpc2NvdW50XCI6IDY2LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAyLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDIsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMTMsXHJcbi8vICAgXCJuYW1lXCI6IFwiTmVpYmFcIixcclxuLy8gICBcInByaWNlXCI6IDEzNDguMzQsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAxMixcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDIxLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDE0LFxyXG4vLyAgIFwibmFtZVwiOiBcIsOJdm9yYVwiLFxyXG4vLyAgIFwicHJpY2VcIjogNjMxLjA2LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNjcsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDMsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzNCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAxNSxcclxuLy8gICBcIm5hbWVcIjogXCJUaHVuXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNTUyMy4wNSxcclxuLy8gICBcImRpc2NvdW50XCI6IDI2LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJTd2l0emVybGFuZFwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDIyLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDE2LFxyXG4vLyAgIFwibmFtZVwiOiBcIkplcGF0IEtpZHVsXCIsXHJcbi8vICAgXCJwcmljZVwiOiA5NTAwLjM1LFxyXG4vLyAgIFwiZGlzY291bnRcIjogMjQsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDQ2LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAxNyxcclxuLy8gICBcIm5hbWVcIjogXCJNYWNyb29tXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxMTk2Mi4xNSxcclxuLy8gICBcImRpc2NvdW50XCI6IDc5LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJJcmVsYW5kXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMjMsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDE4LFxyXG4vLyAgIFwibmFtZVwiOiBcIkJhZmF0w6FcIixcclxuLy8gICBcInByaWNlXCI6IDE4NjYxLjA4LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNjAsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkd1aW5lYS1CaXNzYXVcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDUsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzNyxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDE5LFxyXG4vLyAgIFwibmFtZVwiOiBcIlBlbWJyb2tlXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNzAwNy42MyxcclxuLy8gICBcImRpc2NvdW50XCI6IDQ4LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJNYWx0YVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDcsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAyMCxcclxuLy8gICBcIm5hbWVcIjogXCJOYXN0b2xhXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNzk0Ny40NSxcclxuLy8gICBcImRpc2NvdW50XCI6IDE3LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJGaW5sYW5kXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDE2LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDIxLFxyXG4vLyAgIFwibmFtZVwiOiBcIk92aWVkb1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTA5Ny45NyxcclxuLy8gICBcImRpc2NvdW50XCI6IDQ4LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJEb21pbmljYW4gUmVwdWJsaWNcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMjIsXHJcbi8vICAgXCJuYW1lXCI6IFwiQ2F0YW5kdXZhXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNTYxOS42NyxcclxuLy8gICBcImRpc2NvdW50XCI6IDEsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMSxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAyMyxcclxuLy8gICBcIm5hbWVcIjogXCJKaWFsdVwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTIzNjUuODgsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAxMSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuLy8gICBcInJhdGluZ1wiOiAyLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMzMsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgaWQganVzdG8gc2l0IGFtZXQgc2FwaWVuIGRpZ25pc3NpbSB2ZXN0aWJ1bHVtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZGFwaWJ1cyBkb2xvciB2ZWwgZXN0LiBEb25lYyBvZGlvIGp1c3RvLCBzb2xsaWNpdHVkaW4gdXQsIHN1c2NpcGl0IGEsIGZldWdpYXQgZXQsIGVyb3MuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDI0LFxyXG4vLyAgIFwibmFtZVwiOiBcIkNoaXRvc2VcIixcclxuLy8gICBcInByaWNlXCI6IDY1MDUuNzMsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA5MCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiSmFwYW5cIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDEsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA5LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDI1LFxyXG4vLyAgIFwibmFtZVwiOiBcIkxvZ3Jvw7FvXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNTAwNi42OSxcclxuLy8gICBcImRpc2NvdW50XCI6IDM3LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJTcGFpblwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDAsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBzaXQgYW1ldCBlcmF0LiBOdWxsYSB0ZW1wdXMuIFZpdmFtdXMgaW4gZmVsaXMgZXUgc2FwaWVuIGN1cnN1cyB2ZXN0aWJ1bHVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMjYsXHJcbi8vICAgXCJuYW1lXCI6IFwiRGFzaHRhdmFuXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNzY5MC42NCxcclxuLy8gICBcImRpc2NvdW50XCI6IDYyLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJBcm1lbmlhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDQsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0OCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMjcsXHJcbi8vICAgXCJuYW1lXCI6IFwiQmFuZ29sb1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTMyMDAuMTUsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA3NCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiSXZvcnkgQ29hc3RcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDQ1LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDI4LFxyXG4vLyAgIFwibmFtZVwiOiBcIkFuZG9hbnlcIixcclxuLy8gICBcInByaWNlXCI6IDE0MTI3LjU5LFxyXG4vLyAgIFwiZGlzY291bnRcIjogODEsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIk1hZGFnYXNjYXJcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNCxcclxuLy8gICBcInF1YW50aXR5XCI6IDIwLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDI5LFxyXG4vLyAgIFwibmFtZVwiOiBcIk1pbGxlcm92b1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTI1MDYuMCxcclxuLy8gICBcImRpc2NvdW50XCI6IDM3LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDE0LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDMwLFxyXG4vLyAgIFwibmFtZVwiOiBcIkxhbmd1YW5cIixcclxuLy8gICBcInByaWNlXCI6IDEzNTY2LjYsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAxNyxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuLy8gICBcInJhdGluZ1wiOiA1LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMTIsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDMxLFxyXG4vLyAgIFwibmFtZVwiOiBcIkNvbcOpXCIsXHJcbi8vICAgXCJwcmljZVwiOiA0MjAxLjk4LFxyXG4vLyAgIFwiZGlzY291bnRcIjogODQsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkJlbmluXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDMsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAyOSxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMzIsXHJcbi8vICAgXCJuYW1lXCI6IFwiVG9yXCIsXHJcbi8vICAgXCJwcmljZVwiOiA3OTIuMzksXHJcbi8vICAgXCJkaXNjb3VudFwiOiAzNCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiRWd5cHRcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMSxcclxuLy8gICBcInF1YW50aXR5XCI6IDE3LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAzMyxcclxuLy8gICBcIm5hbWVcIjogXCJNaWd1ZWzDs3BvbGlzXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxODAxOS4wNCxcclxuLy8gICBcImRpc2NvdW50XCI6IDEwMCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDEsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAxMyxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDM0LFxyXG4vLyAgIFwibmFtZVwiOiBcIkZvcnQgTXllcnNcIixcclxuLy8gICBcInByaWNlXCI6IDE1NDg4LjcyLFxyXG4vLyAgIFwiZGlzY291bnRcIjogODEsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlVuaXRlZCBTdGF0ZXNcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIixcclxuLy8gICBcInJhdGluZ1wiOiAzLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDAsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMzUsXHJcbi8vICAgXCJuYW1lXCI6IFwiQ2hlbmdiZWlcIixcclxuLy8gICBcInByaWNlXCI6IDE3NTYxLjg0LFxyXG4vLyAgIFwiZGlzY291bnRcIjogMzMsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDUwLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiAzNixcclxuLy8gICBcIm5hbWVcIjogXCJaaHVqaWFuZ1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTAzODIuMyxcclxuLy8gICBcImRpc2NvdW50XCI6IDEyLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMixcclxuLy8gICBcInF1YW50aXR5XCI6IDYsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOdWxsYSB1dCBlcmF0IGlkIG1hdXJpcyB2dWxwdXRhdGUgZWxlbWVudHVtLiBOdWxsYW0gdmFyaXVzLiBOdWxsYSBmYWNpbGlzaS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDM3LFxyXG4vLyAgIFwibmFtZVwiOiBcIsOJbXBvbmFzXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxMTEzNy43OCxcclxuLy8gICBcImRpc2NvdW50XCI6IDU3LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJHcmVlY2VcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDQwLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMzgsXHJcbi8vICAgXCJuYW1lXCI6IFwiTWVnYWxvY2jDs3Jpb25cIixcclxuLy8gICBcInByaWNlXCI6IDUxMC4zMSxcclxuLy8gICBcImRpc2NvdW50XCI6IDcyLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJHcmVlY2VcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDMsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0MyxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDM5LFxyXG4vLyAgIFwibmFtZVwiOiBcIkR1d2FrdGVuZ2dpXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNzcxMS4zNixcclxuLy8gICBcImRpc2NvdW50XCI6IDg0LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMixcclxuLy8gICBcInF1YW50aXR5XCI6IDM1LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNDAsXHJcbi8vICAgXCJuYW1lXCI6IFwiRnJlZGVyaWtzYmVyZ1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTA3OTcuNzQsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAxMSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiRGVubWFya1wiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNCxcclxuLy8gICBcInF1YW50aXR5XCI6IDM4LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA0MSxcclxuLy8gICBcIm5hbWVcIjogXCJUaWVsXCIsXHJcbi8vICAgXCJwcmljZVwiOiA3MTc5Ljk3LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNTMsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIk5ldGhlcmxhbmRzXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDIsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAxNixcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDQyLFxyXG4vLyAgIFwibmFtZVwiOiBcIlBhbmRhc2FuXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxMzUzOC44NixcclxuLy8gICBcImRpc2NvdW50XCI6IDgxLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDIxLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNDMsXHJcbi8vICAgXCJuYW1lXCI6IFwiTGlhbnNoYW5cIixcclxuLy8gICBcInByaWNlXCI6IDE5ODc2LjE3LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNzQsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDI4LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDQ0LFxyXG4vLyAgIFwibmFtZVwiOiBcIk1vbGF2ZVwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTA4MzguMDMsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA3NSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMixcclxuLy8gICBcInF1YW50aXR5XCI6IDQsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNDUsXHJcbi8vICAgXCJuYW1lXCI6IFwiQW1wYXJpdGFcIixcclxuLy8gICBcInByaWNlXCI6IDQ3NjMuNzgsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA1OSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDMsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0OCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNDYsXHJcbi8vICAgXCJuYW1lXCI6IFwiTGUgSG9jaGV0XCIsXHJcbi8vICAgXCJwcmljZVwiOiAxMzMwNi42OSxcclxuLy8gICBcImRpc2NvdW50XCI6IDU0LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJNYXVyaXRpdXNcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuLy8gICBcInJhdGluZ1wiOiAzLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMzEsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDQ3LFxyXG4vLyAgIFwibmFtZVwiOiBcIlRo4buLIFRy4bqlbiBRdeG6v1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTE3NDMuMDMsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA1MixcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiVmlldG5hbVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIixcclxuLy8gICBcInJhdGluZ1wiOiAyLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDIsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDQ4LFxyXG4vLyAgIFwibmFtZVwiOiBcIkdhcGxva2FuXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNjYyLjc3LFxyXG4vLyAgIFwiZGlzY291bnRcIjogMTgsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMSxcclxuLy8gICBcInF1YW50aXR5XCI6IDUsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDQ5LFxyXG4vLyAgIFwibmFtZVwiOiBcIllvaWNoaVwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTM1MS42MixcclxuLy8gICBcImRpc2NvdW50XCI6IDc5LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJKYXBhblwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMixcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA1MCxcclxuLy8gICBcIm5hbWVcIjogXCJTZWJ1a3VcIixcclxuLy8gICBcInByaWNlXCI6IDUwMTguNTEsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA3MCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDQwLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDUxLFxyXG4vLyAgIFwibmFtZVwiOiBcIk1haWdvXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxOTg3Ny4yNixcclxuLy8gICBcImRpc2NvdW50XCI6IDQwLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDgsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA1MixcclxuLy8gICBcIm5hbWVcIjogXCJSb25mZVwiLFxyXG4vLyAgIFwicHJpY2VcIjogNzA2OS44MSxcclxuLy8gICBcImRpc2NvdW50XCI6IDM2LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJQb3J0dWdhbFwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDEsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzOCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNTMsXHJcbi8vICAgXCJuYW1lXCI6IFwiJ3MtSGVydG9nZW5ib3NjaFwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTYxMDkuNzEsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA0OSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiTmV0aGVybGFuZHNcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDIsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAxMSxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDU0LFxyXG4vLyAgIFwibmFtZVwiOiBcIkx1Ym5pZXdpY2VcIixcclxuLy8gICBcInByaWNlXCI6IDEyNzAyLjUzLFxyXG4vLyAgIFwiZGlzY291bnRcIjogMzksXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlBvbGFuZFwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDgsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDU1LFxyXG4vLyAgIFwibmFtZVwiOiBcIkd1bmFqYXlhXCIsXHJcbi8vICAgXCJwcmljZVwiOiAyNDMxLjQ5LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNzIsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDYsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNTYsXHJcbi8vICAgXCJuYW1lXCI6IFwiQmFsb2dvXCIsXHJcbi8vICAgXCJwcmljZVwiOiAzMzI4LjA1LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNjksXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDQ5LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDU3LFxyXG4vLyAgIFwibmFtZVwiOiBcIk5vbmcgUGhva1wiLFxyXG4vLyAgIFwicHJpY2VcIjogNTEyMi41NyxcclxuLy8gICBcImRpc2NvdW50XCI6IDM4LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJUaGFpbGFuZFwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDIsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA5LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNTgsXHJcbi8vICAgXCJuYW1lXCI6IFwiS2F0YWd1bVwiLFxyXG4vLyAgIFwicHJpY2VcIjogNTIyLjg2LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNDAsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIk5pZ2VyaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMTYsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIGFjIGVzdCBsYWNpbmlhIG5pc2kgdmVuZW5hdGlzIHRyaXN0aXF1ZS4gRnVzY2UgY29uZ3VlLCBkaWFtIGlkIG9ybmFyZSBpbXBlcmRpZXQsIHNhcGllbiB1cm5hIHByZXRpdW0gbmlzbCwgdXQgdm9sdXRwYXQgc2FwaWVuIGFyY3Ugc2VkIGF1Z3VlLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA1OSxcclxuLy8gICBcIm5hbWVcIjogXCJQYXJhZGEgZGUgVG9kZWlhXCIsXHJcbi8vICAgXCJwcmljZVwiOiA0ODY2LjczLFxyXG4vLyAgIFwiZGlzY291bnRcIjogODEsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNSxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNjAsXHJcbi8vICAgXCJuYW1lXCI6IFwiQnVsdWJyYW5nc2lcIixcclxuLy8gICBcInByaWNlXCI6IDE5MTUwLjY4LFxyXG4vLyAgIFwiZGlzY291bnRcIjogMTIsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDE2LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA2MSxcclxuLy8gICBcIm5hbWVcIjogXCJUb210ZWJvZGFcIixcclxuLy8gICBcInByaWNlXCI6IDE0NzAwLjEsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA4NixcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiU3dlZGVuXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIixcclxuLy8gICBcInJhdGluZ1wiOiA1LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMTMsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDYyLFxyXG4vLyAgIFwibmFtZVwiOiBcIk9zbG9tZWpcIixcclxuLy8gICBcInByaWNlXCI6IDY0OS4xOSxcclxuLy8gICBcImRpc2NvdW50XCI6IDE2LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJNYWNlZG9uaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDQsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAyMyxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA2MyxcclxuLy8gICBcIm5hbWVcIjogXCJXYW5nY2FvXCIsXHJcbi8vICAgXCJwcmljZVwiOiA2NjU1LjQ5LFxyXG4vLyAgIFwiZGlzY291bnRcIjogMTAwLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMTIsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDY0LFxyXG4vLyAgIFwibmFtZVwiOiBcIkthcmFuZ3BhcndhXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNDI1Mi4xMixcclxuLy8gICBcImRpc2NvdW50XCI6IDk5LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDIsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzMCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA2NSxcclxuLy8gICBcIm5hbWVcIjogXCJWYWxsZXltb3VudFwiLFxyXG4vLyAgIFwicHJpY2VcIjogNDM1Ni4zMixcclxuLy8gICBcImRpc2NvdW50XCI6IDQxLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJJcmVsYW5kXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIixcclxuLy8gICBcInJhdGluZ1wiOiAzLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDQsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDY2LFxyXG4vLyAgIFwibmFtZVwiOiBcIsWMbWVcIixcclxuLy8gICBcInByaWNlXCI6IDY4NTMuMyxcclxuLy8gICBcImRpc2NvdW50XCI6IDQ4LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJKYXBhblwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDMsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzNCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA2NyxcclxuLy8gICBcIm5hbWVcIjogXCJSb2RvdMOzcGlcIixcclxuLy8gICBcInByaWNlXCI6IDEzMjUzLjYzLFxyXG4vLyAgIFwiZGlzY291bnRcIjogNjgsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkdyZWVjZVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIixcclxuLy8gICBcInJhdGluZ1wiOiA1LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMzIsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDY4LFxyXG4vLyAgIFwibmFtZVwiOiBcIkZhcmFwXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxODU3NS40NyxcclxuLy8gICBcImRpc2NvdW50XCI6IDc5LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJUdXJrbWVuaXN0YW5cIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDcsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDY5LFxyXG4vLyAgIFwibmFtZVwiOiBcIlNoZWRva1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTE3NjguMyxcclxuLy8gICBcImRpc2NvdW50XCI6IDI5LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDEsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0MixcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgaWQganVzdG8gc2l0IGFtZXQgc2FwaWVuIGRpZ25pc3NpbSB2ZXN0aWJ1bHVtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZGFwaWJ1cyBkb2xvciB2ZWwgZXN0LiBEb25lYyBvZGlvIGp1c3RvLCBzb2xsaWNpdHVkaW4gdXQsIHN1c2NpcGl0IGEsIGZldWdpYXQgZXQsIGVyb3MuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDcwLFxyXG4vLyAgIFwibmFtZVwiOiBcIkthcmxzdGFkXCIsXHJcbi8vICAgXCJwcmljZVwiOiAzNTc0LjU1LFxyXG4vLyAgIFwiZGlzY291bnRcIjogMTUsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlN3ZWRlblwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMixcclxuLy8gICBcInF1YW50aXR5XCI6IDIxLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIHRpbmNpZHVudCBhbnRlIHZlbCBpcHN1bS4gUHJhZXNlbnQgYmxhbmRpdCBsYWNpbmlhIGVyYXQuIFZlc3RpYnVsdW0gc2VkIG1hZ25hIGF0IG51bmMgY29tbW9kbyBwbGFjZXJhdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDcxLFxyXG4vLyAgIFwibmFtZVwiOiBcIkxhIFBhelwiLFxyXG4vLyAgIFwicHJpY2VcIjogMjYzOS4wLFxyXG4vLyAgIFwiZGlzY291bnRcIjogNzksXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNCxcclxuLy8gICBcInF1YW50aXR5XCI6IDQsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA3MixcclxuLy8gICBcIm5hbWVcIjogXCJWxaFlc3RhcnlcIixcclxuLy8gICBcInByaWNlXCI6IDE5MDYwLjkyLFxyXG4vLyAgIFwiZGlzY291bnRcIjogODYsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkN6ZWNoIFJlcHVibGljXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDUsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzNSxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDczLFxyXG4vLyAgIFwibmFtZVwiOiBcIlNhYmFuZ1wiLFxyXG4vLyAgIFwicHJpY2VcIjogNTc2MS4xOSxcclxuLy8gICBcImRpc2NvdW50XCI6IDQzLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDIsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA5LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDc0LFxyXG4vLyAgIFwibmFtZVwiOiBcIllpZGFvXCIsXHJcbi8vICAgXCJwcmljZVwiOiA4MDguOTgsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAzMSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAyLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMjQsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNzUsXHJcbi8vICAgXCJuYW1lXCI6IFwiVGFuZ2ppYXBvXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxODU2Ny4wMixcclxuLy8gICBcImRpc2NvdW50XCI6IDQ5LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiA0LFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDUsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA3NixcclxuLy8gICBcIm5hbWVcIjogXCJNb3JhXCIsXHJcbi8vICAgXCJwcmljZVwiOiAyODYzLjI2LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNDMsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlN3ZWRlblwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMSxcclxuLy8gICBcInF1YW50aXR5XCI6IDE0LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDc3LFxyXG4vLyAgIFwibmFtZVwiOiBcIkppbnNoYVwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTkyNzYuNjQsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAyMyxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDMsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0MCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDc4LFxyXG4vLyAgIFwibmFtZVwiOiBcIlJlY3JlaW9cIixcclxuLy8gICBcInByaWNlXCI6IDU4MTAuNzEsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA0NCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDIsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAxOSxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogNzksXHJcbi8vICAgXCJuYW1lXCI6IFwiRG9tYXJ0YW5nXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxMzEzNy4zMyxcclxuLy8gICBcImRpc2NvdW50XCI6IDUxLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMSxcclxuLy8gICBcInF1YW50aXR5XCI6IDE0LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA4MCxcclxuLy8gICBcIm5hbWVcIjogXCJSaXphbFwiLFxyXG4vLyAgIFwicHJpY2VcIjogNTg2LjgzLFxyXG4vLyAgIFwiZGlzY291bnRcIjogMjIsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDM5LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIGFjIGVzdCBsYWNpbmlhIG5pc2kgdmVuZW5hdGlzIHRyaXN0aXF1ZS4gRnVzY2UgY29uZ3VlLCBkaWFtIGlkIG9ybmFyZSBpbXBlcmRpZXQsIHNhcGllbiB1cm5hIHByZXRpdW0gbmlzbCwgdXQgdm9sdXRwYXQgc2FwaWVuIGFyY3Ugc2VkIGF1Z3VlLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA4MSxcclxuLy8gICBcIm5hbWVcIjogXCJTdGFyw6kgTcSbc3RvXCIsXHJcbi8vICAgXCJwcmljZVwiOiA4NzQyLjQxLFxyXG4vLyAgIFwiZGlzY291bnRcIjogOCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ3plY2ggUmVwdWJsaWNcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDI0LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDgyLFxyXG4vLyAgIFwibmFtZVwiOiBcIlBlcnBpZ25hblwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTk0NTQuMjYsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAzMixcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiRnJhbmNlXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAyLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDUsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDgzLFxyXG4vLyAgIFwibmFtZVwiOiBcIk1vdWxheSBCb3VjaHRhXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNjE5MS4xNSxcclxuLy8gICBcImRpc2NvdW50XCI6IDEsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIk1vcm9jY29cIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMjQsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA4NCxcclxuLy8gICBcIm5hbWVcIjogXCJBbCBRYXJ5YXRheW5cIixcclxuLy8gICBcInByaWNlXCI6IDQ5MDYuMSxcclxuLy8gICBcImRpc2NvdW50XCI6IDMsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlN5cmlhXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDUsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAxOCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA4NSxcclxuLy8gICBcIm5hbWVcIjogXCJBeWdla1wiLFxyXG4vLyAgIFwicHJpY2VcIjogMTUyMTguMTMsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA2MSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQXJtZW5pYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDUsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAzNCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDg2LFxyXG4vLyAgIFwibmFtZVwiOiBcIkJ5c3RyeXRzeWFcIixcclxuLy8gICBcInByaWNlXCI6IDE0MDQyLjI3LFxyXG4vLyAgIFwiZGlzY291bnRcIjogNDcsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlVrcmFpbmVcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDQsXHJcbi8vICAgXCJxdWFudGl0eVwiOiAyMixcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA4NyxcclxuLy8gICBcIm5hbWVcIjogXCJIw7ZmblwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTA3NTcuMDMsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA1NyxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiSWNlbGFuZFwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMzUsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogODgsXHJcbi8vICAgXCJuYW1lXCI6IFwiU2hhbmhvdVwiLFxyXG4vLyAgIFwicHJpY2VcIjogMTc1NjEuNDUsXHJcbi8vICAgXCJkaXNjb3VudFwiOiAxMCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIixcclxuLy8gICBcInJhdGluZ1wiOiAyLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogNDEsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA4OSxcclxuLy8gICBcIm5hbWVcIjogXCJOb3Zvcm9zc2l5c2tcIixcclxuLy8gICBcInByaWNlXCI6IDgxNC41MSxcclxuLy8gICBcImRpc2NvdW50XCI6IDkzLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMixcclxuLy8gICBcInF1YW50aXR5XCI6IDgsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDkwLFxyXG4vLyAgIFwibmFtZVwiOiBcIkJhbGt5XCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNTEyMy4xLFxyXG4vLyAgIFwiZGlzY291bnRcIjogOTUsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlVrcmFpbmVcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMyxcclxuLy8gICBcInF1YW50aXR5XCI6IDI1LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogOTEsXHJcbi8vICAgXCJuYW1lXCI6IFwiSW5oYW1iYW5lXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxNjY3NS43MyxcclxuLy8gICBcImRpc2NvdW50XCI6IDEyLFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJNb3phbWJpcXVlXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDQsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA1MCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogOTIsXHJcbi8vICAgXCJuYW1lXCI6IFwiRHVuZ2tlayBMYW9rXCIsXHJcbi8vICAgXCJwcmljZVwiOiA2NTQ1LjMyLFxyXG4vLyAgIFwiZGlzY291bnRcIjogMjcsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDQxLFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDkzLFxyXG4vLyAgIFwibmFtZVwiOiBcIkh5YXR0c3ZpbGxlXCIsXHJcbi8vICAgXCJwcmljZVwiOiA4MjcwLjIzLFxyXG4vLyAgIFwiZGlzY291bnRcIjogMTksXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlVuaXRlZCBTdGF0ZXNcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDQsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0NCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogOTQsXHJcbi8vICAgXCJuYW1lXCI6IFwiUXVpbnTDo2VzXCIsXHJcbi8vICAgXCJwcmljZVwiOiA3NDYzLjQ5LFxyXG4vLyAgIFwiZGlzY291bnRcIjogOTIsXHJcbi8vICAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIixcclxuLy8gICBcInJhdGluZ1wiOiAzLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMzUsXHJcbi8vICAgXCJjb21tZW50c1wiOiBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogOTUsXHJcbi8vICAgXCJuYW1lXCI6IFwiR2lhbG9cIixcclxuLy8gICBcInByaWNlXCI6IDE4MDE1LjEsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA2OSxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiTGlieWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDIsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0OCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDk2LFxyXG4vLyAgIFwibmFtZVwiOiBcIlBhayBQaGFuYW5nXCIsXHJcbi8vICAgXCJwcmljZVwiOiAxOTk2OS41OCxcclxuLy8gICBcImRpc2NvdW50XCI6IDE2LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJUaGFpbGFuZFwiLFxyXG4vLyAgIFwiZGVzY3JpcHRpb25cIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogNSxcclxuLy8gICBcInF1YW50aXR5XCI6IDI5LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH0sIHtcclxuLy8gICBcImlkXCI6IDk3LFxyXG4vLyAgIFwibmFtZVwiOiBcIkhlbmRhbGFcIixcclxuLy8gICBcInByaWNlXCI6IDgwNTguMDIsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA0MCxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiU3JpIExhbmthXCIsXHJcbi8vICAgXCJkZXNjcmlwdGlvblwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDEsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0MSxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbi8vICAgICB9XHJcbi8vICAgXVxyXG4vLyB9LCB7XHJcbi8vICAgXCJpZFwiOiA5OCxcclxuLy8gICBcIm5hbWVcIjogXCJNaWt1bWlcIixcclxuLy8gICBcInByaWNlXCI6IDE4MDguMzYsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA5MixcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiVGFuemFuaWFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiLFxyXG4vLyAgIFwicmF0aW5nXCI6IDEsXHJcbi8vICAgXCJxdWFudGl0eVwiOiA0MCxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogOTksXHJcbi8vICAgXCJuYW1lXCI6IFwiUHJlc2lkZW50ZSBEdXRyYVwiLFxyXG4vLyAgIFwicHJpY2VcIjogOTQ1Ni45MSxcclxuLy8gICBcImRpc2NvdW50XCI6IDQ5LFxyXG4vLyAgIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIixcclxuLy8gICBcInJhdGluZ1wiOiAxLFxyXG4vLyAgIFwicXVhbnRpdHlcIjogMyxcclxuLy8gICBcImNvbW1lbnRzXCI6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4vLyAgICAgfVxyXG4vLyAgIF1cclxuLy8gfSwge1xyXG4vLyAgIFwiaWRcIjogMTAwLFxyXG4vLyAgIFwibmFtZVwiOiBcIlpob3Vrb3VcIixcclxuLy8gICBcInByaWNlXCI6IDE1OTE4LjQsXHJcbi8vICAgXCJkaXNjb3VudFwiOiA5MyxcclxuLy8gICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuLy8gICBcImRlc2NyaXB0aW9uXCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCIsXHJcbi8vICAgXCJyYXRpbmdcIjogMSxcclxuLy8gICBcInF1YW50aXR5XCI6IDM3LFxyXG4vLyAgIFwiY29tbWVudHNcIjogW1xyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuLy8gICAgIH1cclxuLy8gICBdXHJcbi8vIH1dO1xyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9wcm9kdWN0RGF0YS5qcyIsImxldCBwaWQgPSByZXF1aXJlKCdzaG9ydGlkJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCByYXRpbmcsIHF1YW50aXR5ID0gMCwgY29tbWVudHMgPSBbXSwgZGlzY291bnQsIGltZ1VybCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMuSWQgPSBwaWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgICAgICB0aGlzLmRpc2NvdW50ID0gZGlzY291bnQ7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBpbWdVcmw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXZhaWxhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXR5ID4gMDtcclxuICAgIH1cclxufVxyXG5sZXQgcHJvZHVjdExpc3QgPSBbXTtcclxuXHJcbmxldCBwcm9kdWN0TGlzdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIikpO1xyXG5pZiAoIXByb2R1Y3RMaXN0cykgcHJvZHVjdExpc3RzID0gW107XHJcbmVsc2Uge1xyXG4gICAgcHJvZHVjdExpc3RzLmZvckVhY2goKGl0ZW0sIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdExpc3QucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG4gfVxyXG5cclxuZXhwb3J0IHsgcHJvZHVjdExpc3QgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvcHJvZHVjdC5qcyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=