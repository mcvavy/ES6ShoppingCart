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
	_controller.controller.setUpEventListeners();
	_controller.controller.displayCartItems();
	
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
	            _view.view.displatCartItem();
	        }
	    }, {
	        key: 'setUpEventListeners',
	        value: function setUpEventListeners() {
	            _view.view.setUpEventistener();
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var productData = exports.productData = [{
	  "id": 1,
	  "name": "Lac-Brome",
	  "price": 5871.97,
	  "discount": 51,
	  "category": "Canada",
	  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	  "rating": 5,
	  "quantity": 16,
	  "comments": [{
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }, {
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 2,
	  "name": "Longquan",
	  "price": 15029.85,
	  "discount": 74,
	  "category": "China",
	  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
	  "rating": 3,
	  "quantity": 32,
	  "comments": [{
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }]
	}, {
	  "id": 3,
	  "name": "Skelleftehamn",
	  "price": 1025.97,
	  "discount": 77,
	  "category": "Sweden",
	  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	  "rating": 5,
	  "quantity": 27,
	  "comments": [{
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }]
	}, {
	  "id": 4,
	  "name": "Karema",
	  "price": 5220.98,
	  "discount": 8,
	  "category": "Tanzania",
	  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
	  "rating": 4,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }]
	}, {
	  "id": 5,
	  "name": "Shijiao",
	  "price": 8365.7,
	  "discount": 52,
	  "category": "China",
	  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	  "rating": 3,
	  "quantity": 18,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }]
	}, {
	  "id": 6,
	  "name": "Liudu",
	  "price": 2894.52,
	  "discount": 61,
	  "category": "China",
	  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	  "rating": 2,
	  "quantity": 35,
	  "comments": [{
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }]
	}, {
	  "id": 7,
	  "name": "Bukbatang",
	  "price": 16334.67,
	  "discount": 80,
	  "category": "Indonesia",
	  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	  "rating": 4,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }]
	}, {
	  "id": 8,
	  "name": "Jinping",
	  "price": 19132.49,
	  "discount": 4,
	  "category": "China",
	  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
	  "rating": 5,
	  "quantity": 27,
	  "comments": [{
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }, {
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }]
	}, {
	  "id": 9,
	  "name": "Bojongaren",
	  "price": 1105.68,
	  "discount": 26,
	  "category": "Indonesia",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 1,
	  "quantity": 32,
	  "comments": [{
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }]
	}, {
	  "id": 10,
	  "name": "Zaraza",
	  "price": 17733.79,
	  "discount": 52,
	  "category": "Venezuela",
	  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	  "rating": 1,
	  "quantity": 18,
	  "comments": [{
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }]
	}, {
	  "id": 11,
	  "name": "Cisewu",
	  "price": 4143.82,
	  "discount": 33,
	  "category": "Indonesia",
	  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
	  "rating": 5,
	  "quantity": 19,
	  "comments": [{
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }, {
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }]
	}, {
	  "id": 12,
	  "name": "Santo Niño",
	  "price": 9988.18,
	  "discount": 66,
	  "category": "Philippines",
	  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	  "rating": 2,
	  "quantity": 42,
	  "comments": [{
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 13,
	  "name": "Neiba",
	  "price": 1348.34,
	  "discount": 12,
	  "category": "Dominican Republic",
	  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
	  "rating": 5,
	  "quantity": 21,
	  "comments": [{
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }]
	}, {
	  "id": 14,
	  "name": "Évora",
	  "price": 631.06,
	  "discount": 67,
	  "category": "Portugal",
	  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	  "rating": 3,
	  "quantity": 34,
	  "comments": [{
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }]
	}, {
	  "id": 15,
	  "name": "Thun",
	  "price": 15523.05,
	  "discount": 26,
	  "category": "Switzerland",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 5,
	  "quantity": 22,
	  "comments": [{
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }]
	}, {
	  "id": 16,
	  "name": "Jepat Kidul",
	  "price": 9500.35,
	  "discount": 24,
	  "category": "Indonesia",
	  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	  "rating": 3,
	  "quantity": 46,
	  "comments": [{
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }]
	}, {
	  "id": 17,
	  "name": "Macroom",
	  "price": 11962.15,
	  "discount": 79,
	  "category": "Ireland",
	  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
	  "rating": 4,
	  "quantity": 23,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }]
	}, {
	  "id": 18,
	  "name": "Bafatá",
	  "price": 18661.08,
	  "discount": 60,
	  "category": "Guinea-Bissau",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 5,
	  "quantity": 37,
	  "comments": [{
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }, {
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }]
	}, {
	  "id": 19,
	  "name": "Pembroke",
	  "price": 17007.63,
	  "discount": 48,
	  "category": "Malta",
	  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	  "rating": 4,
	  "quantity": 47,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 20,
	  "name": "Nastola",
	  "price": 17947.45,
	  "discount": 17,
	  "category": "Finland",
	  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	  "rating": 3,
	  "quantity": 16,
	  "comments": [{
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }]
	}, {
	  "id": 21,
	  "name": "Oviedo",
	  "price": 1097.97,
	  "discount": 48,
	  "category": "Dominican Republic",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 1,
	  "quantity": 4,
	  "comments": [{
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }]
	}, {
	  "id": 22,
	  "name": "Catanduva",
	  "price": 15619.67,
	  "discount": 1,
	  "category": "Brazil",
	  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	  "rating": 4,
	  "quantity": 1,
	  "comments": [{
	    "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	  }, {
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	  }]
	}, {
	  "id": 23,
	  "name": "Jialu",
	  "price": 12365.88,
	  "discount": 11,
	  "category": "China",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 2,
	  "quantity": 33,
	  "comments": [{
	    "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	  }]
	}, {
	  "id": 24,
	  "name": "Chitose",
	  "price": 6505.73,
	  "discount": 90,
	  "category": "Japan",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 1,
	  "quantity": 9,
	  "comments": [{
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }]
	}, {
	  "id": 25,
	  "name": "Logroño",
	  "price": 15006.69,
	  "discount": 37,
	  "category": "Spain",
	  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
	  "rating": 1,
	  "quantity": 40,
	  "comments": [{
	    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }]
	}, {
	  "id": 26,
	  "name": "Dashtavan",
	  "price": 17690.64,
	  "discount": 62,
	  "category": "Armenia",
	  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	  "rating": 4,
	  "quantity": 48,
	  "comments": [{
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }, {
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }]
	}, {
	  "id": 27,
	  "name": "Bangolo",
	  "price": 13200.15,
	  "discount": 74,
	  "category": "Ivory Coast",
	  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
	  "rating": 3,
	  "quantity": 45,
	  "comments": [{
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }]
	}, {
	  "id": 28,
	  "name": "Andoany",
	  "price": 14127.59,
	  "discount": 81,
	  "category": "Madagascar",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 4,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	  }, {
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }]
	}, {
	  "id": 29,
	  "name": "Millerovo",
	  "price": 12506.0,
	  "discount": 37,
	  "category": "Russia",
	  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	  "rating": 3,
	  "quantity": 14,
	  "comments": [{
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }]
	}, {
	  "id": 30,
	  "name": "Languan",
	  "price": 13566.6,
	  "discount": 17,
	  "category": "China",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 5,
	  "quantity": 12,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 31,
	  "name": "Comé",
	  "price": 4201.98,
	  "discount": 84,
	  "category": "Benin",
	  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	  "rating": 3,
	  "quantity": 29,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }, {
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }]
	}, {
	  "id": 32,
	  "name": "Tor",
	  "price": 792.39,
	  "discount": 34,
	  "category": "Egypt",
	  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	  "rating": 1,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }]
	}, {
	  "id": 33,
	  "name": "Miguelópolis",
	  "price": 18019.04,
	  "discount": 100,
	  "category": "Brazil",
	  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	  "rating": 1,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }]
	}, {
	  "id": 34,
	  "name": "Fort Myers",
	  "price": 15488.72,
	  "discount": 81,
	  "category": "United States",
	  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	  "rating": 3,
	  "quantity": 40,
	  "comments": [{
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	  }]
	}, {
	  "id": 35,
	  "name": "Chengbei",
	  "price": 17561.84,
	  "discount": 33,
	  "category": "China",
	  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
	  "rating": 3,
	  "quantity": 50,
	  "comments": [{
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }]
	}, {
	  "id": 36,
	  "name": "Zhujiang",
	  "price": 10382.3,
	  "discount": 12,
	  "category": "China",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 2,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }, {
	    "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }]
	}, {
	  "id": 37,
	  "name": "Émponas",
	  "price": 11137.78,
	  "discount": 57,
	  "category": "Greece",
	  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
	  "rating": 3,
	  "quantity": 40,
	  "comments": [{
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }]
	}, {
	  "id": 38,
	  "name": "Megalochórion",
	  "price": 510.31,
	  "discount": 72,
	  "category": "Greece",
	  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	  "rating": 3,
	  "quantity": 43,
	  "comments": [{
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }]
	}, {
	  "id": 39,
	  "name": "Duwaktenggi",
	  "price": 17711.36,
	  "discount": 84,
	  "category": "Indonesia",
	  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	  "rating": 2,
	  "quantity": 35,
	  "comments": [{
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }, {
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }]
	}, {
	  "id": 40,
	  "name": "Frederiksberg",
	  "price": 10797.74,
	  "discount": 11,
	  "category": "Denmark",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 4,
	  "quantity": 38,
	  "comments": [{
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }]
	}, {
	  "id": 41,
	  "name": "Tiel",
	  "price": 7179.97,
	  "discount": 53,
	  "category": "Netherlands",
	  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	  "rating": 2,
	  "quantity": 16,
	  "comments": [{
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }]
	}, {
	  "id": 42,
	  "name": "Pandasan",
	  "price": 13538.86,
	  "discount": 81,
	  "category": "Philippines",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 3,
	  "quantity": 21,
	  "comments": [{
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }]
	}, {
	  "id": 43,
	  "name": "Lianshan",
	  "price": 19876.17,
	  "discount": 74,
	  "category": "China",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 5,
	  "quantity": 28,
	  "comments": [{
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 44,
	  "name": "Molave",
	  "price": 10838.03,
	  "discount": 75,
	  "category": "Philippines",
	  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
	  "rating": 2,
	  "quantity": 4,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 45,
	  "name": "Amparita",
	  "price": 4763.78,
	  "discount": 59,
	  "category": "Indonesia",
	  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
	  "rating": 3,
	  "quantity": 48,
	  "comments": [{
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }]
	}, {
	  "id": 46,
	  "name": "Le Hochet",
	  "price": 13306.69,
	  "discount": 54,
	  "category": "Mauritius",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 3,
	  "quantity": 31,
	  "comments": [{
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }]
	}, {
	  "id": 47,
	  "name": "Thị Trấn Quế",
	  "price": 11743.03,
	  "discount": 52,
	  "category": "Vietnam",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 2,
	  "quantity": 42,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }, {
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }, {
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }]
	}, {
	  "id": 48,
	  "name": "Gaplokan",
	  "price": 1662.77,
	  "discount": 18,
	  "category": "Indonesia",
	  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
	  "rating": 1,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }]
	}, {
	  "id": 49,
	  "name": "Yoichi",
	  "price": 1351.62,
	  "discount": 79,
	  "category": "Japan",
	  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	  "rating": 4,
	  "quantity": 2,
	  "comments": [{
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }]
	}, {
	  "id": 50,
	  "name": "Sebuku",
	  "price": 5018.51,
	  "discount": 70,
	  "category": "Indonesia",
	  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	  "rating": 5,
	  "quantity": 40,
	  "comments": [{
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }, {
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }]
	}, {
	  "id": 51,
	  "name": "Maigo",
	  "price": 19877.26,
	  "discount": 40,
	  "category": "Philippines",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 3,
	  "quantity": 8,
	  "comments": [{
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }]
	}, {
	  "id": 52,
	  "name": "Ronfe",
	  "price": 7069.81,
	  "discount": 36,
	  "category": "Portugal",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 1,
	  "quantity": 38,
	  "comments": [{
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }, {
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }, {
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }]
	}, {
	  "id": 53,
	  "name": "'s-Hertogenbosch",
	  "price": 16109.71,
	  "discount": 49,
	  "category": "Netherlands",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 2,
	  "quantity": 11,
	  "comments": [{
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }]
	}, {
	  "id": 54,
	  "name": "Lubniewice",
	  "price": 12702.53,
	  "discount": 39,
	  "category": "Poland",
	  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	  "rating": 4,
	  "quantity": 48,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }]
	}, {
	  "id": 55,
	  "name": "Gunajaya",
	  "price": 2431.49,
	  "discount": 72,
	  "category": "Indonesia",
	  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	  "rating": 1,
	  "quantity": 46,
	  "comments": [{
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }]
	}, {
	  "id": 56,
	  "name": "Balogo",
	  "price": 3328.05,
	  "discount": 69,
	  "category": "Philippines",
	  "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
	  "rating": 5,
	  "quantity": 49,
	  "comments": [{
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }, {
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }]
	}, {
	  "id": 57,
	  "name": "Nong Phok",
	  "price": 5122.57,
	  "discount": 38,
	  "category": "Thailand",
	  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	  "rating": 2,
	  "quantity": 9,
	  "comments": [{
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }]
	}, {
	  "id": 58,
	  "name": "Katagum",
	  "price": 522.86,
	  "discount": 40,
	  "category": "Nigeria",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 4,
	  "quantity": 16,
	  "comments": [{
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }]
	}, {
	  "id": 59,
	  "name": "Parada de Todeia",
	  "price": 4866.73,
	  "discount": 81,
	  "category": "Portugal",
	  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	  "rating": 1,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }]
	}, {
	  "id": 60,
	  "name": "Bulubrangsi",
	  "price": 19150.68,
	  "discount": 12,
	  "category": "Indonesia",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 3,
	  "quantity": 16,
	  "comments": [{
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }]
	}, {
	  "id": 61,
	  "name": "Tomteboda",
	  "price": 14700.1,
	  "discount": 86,
	  "category": "Sweden",
	  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	  "rating": 5,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }]
	}, {
	  "id": 62,
	  "name": "Oslomej",
	  "price": 649.19,
	  "discount": 16,
	  "category": "Macedonia",
	  "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
	  "rating": 4,
	  "quantity": 23,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }]
	}, {
	  "id": 63,
	  "name": "Wangcao",
	  "price": 6655.49,
	  "discount": 100,
	  "category": "China",
	  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	  "rating": 4,
	  "quantity": 12,
	  "comments": [{
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 64,
	  "name": "Karangparwa",
	  "price": 14252.12,
	  "discount": 99,
	  "category": "Indonesia",
	  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
	  "rating": 2,
	  "quantity": 30,
	  "comments": [{
	    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	  }, {
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 65,
	  "name": "Valleymount",
	  "price": 4356.32,
	  "discount": 41,
	  "category": "Ireland",
	  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
	  "rating": 3,
	  "quantity": 44,
	  "comments": [{
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 66,
	  "name": "Ōme",
	  "price": 6853.3,
	  "discount": 48,
	  "category": "Japan",
	  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	  "rating": 3,
	  "quantity": 34,
	  "comments": [{
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }, {
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 67,
	  "name": "Rodotópi",
	  "price": 13253.63,
	  "discount": 68,
	  "category": "Greece",
	  "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
	  "rating": 5,
	  "quantity": 32,
	  "comments": [{
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }]
	}, {
	  "id": 68,
	  "name": "Farap",
	  "price": 18575.47,
	  "discount": 79,
	  "category": "Turkmenistan",
	  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	  "rating": 3,
	  "quantity": 7,
	  "comments": [{
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }]
	}, {
	  "id": 69,
	  "name": "Shedok",
	  "price": 11768.3,
	  "discount": 29,
	  "category": "Russia",
	  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	  "rating": 1,
	  "quantity": 42,
	  "comments": [{
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	  }]
	}, {
	  "id": 70,
	  "name": "Karlstad",
	  "price": 3574.55,
	  "discount": 15,
	  "category": "Sweden",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 2,
	  "quantity": 21,
	  "comments": [{
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }]
	}, {
	  "id": 71,
	  "name": "La Paz",
	  "price": 2639.0,
	  "discount": 79,
	  "category": "Philippines",
	  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
	  "rating": 4,
	  "quantity": 4,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 72,
	  "name": "Všestary",
	  "price": 19060.92,
	  "discount": 86,
	  "category": "Czech Republic",
	  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	  "rating": 5,
	  "quantity": 35,
	  "comments": [{
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }]
	}, {
	  "id": 73,
	  "name": "Sabang",
	  "price": 5761.19,
	  "discount": 43,
	  "category": "Philippines",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 2,
	  "quantity": 9,
	  "comments": [{
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }]
	}, {
	  "id": 74,
	  "name": "Yidao",
	  "price": 808.98,
	  "discount": 31,
	  "category": "China",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 2,
	  "quantity": 24,
	  "comments": [{
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }]
	}, {
	  "id": 75,
	  "name": "Tangjiapo",
	  "price": 18567.02,
	  "discount": 49,
	  "category": "China",
	  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	  "rating": 4,
	  "quantity": 45,
	  "comments": [{
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }]
	}, {
	  "id": 76,
	  "name": "Mora",
	  "price": 2863.26,
	  "discount": 43,
	  "category": "Sweden",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 1,
	  "quantity": 14,
	  "comments": [{
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 77,
	  "name": "Jinsha",
	  "price": 19276.64,
	  "discount": 23,
	  "category": "China",
	  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	  "rating": 3,
	  "quantity": 40,
	  "comments": [{
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }]
	}, {
	  "id": 78,
	  "name": "Recreio",
	  "price": 5810.71,
	  "discount": 44,
	  "category": "Brazil",
	  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	  "rating": 2,
	  "quantity": 19,
	  "comments": [{
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }]
	}, {
	  "id": 79,
	  "name": "Domartang",
	  "price": 13137.33,
	  "discount": 51,
	  "category": "China",
	  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	  "rating": 1,
	  "quantity": 14,
	  "comments": [{
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 80,
	  "name": "Rizal",
	  "price": 586.83,
	  "discount": 22,
	  "category": "Philippines",
	  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
	  "rating": 5,
	  "quantity": 39,
	  "comments": [{
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 81,
	  "name": "Staré Město",
	  "price": 8742.41,
	  "discount": 8,
	  "category": "Czech Republic",
	  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	  "rating": 5,
	  "quantity": 24,
	  "comments": [{
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }]
	}, {
	  "id": 82,
	  "name": "Perpignan",
	  "price": 19454.26,
	  "discount": 32,
	  "category": "France",
	  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	  "rating": 2,
	  "quantity": 45,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 83,
	  "name": "Moulay Bouchta",
	  "price": 16191.15,
	  "discount": 1,
	  "category": "Morocco",
	  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
	  "rating": 1,
	  "quantity": 24,
	  "comments": [{
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }]
	}, {
	  "id": 84,
	  "name": "Al Qaryatayn",
	  "price": 4906.1,
	  "discount": 3,
	  "category": "Syria",
	  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	  "rating": 5,
	  "quantity": 18,
	  "comments": [{
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 85,
	  "name": "Aygek",
	  "price": 15218.13,
	  "discount": 61,
	  "category": "Armenia",
	  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
	  "rating": 5,
	  "quantity": 34,
	  "comments": [{
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 86,
	  "name": "Bystrytsya",
	  "price": 14042.27,
	  "discount": 47,
	  "category": "Ukraine",
	  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	  "rating": 4,
	  "quantity": 22,
	  "comments": [{
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }, {
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }]
	}, {
	  "id": 87,
	  "name": "Höfn",
	  "price": 10757.03,
	  "discount": 57,
	  "category": "Iceland",
	  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
	  "rating": 1,
	  "quantity": 35,
	  "comments": [{
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }]
	}, {
	  "id": 88,
	  "name": "Shanhou",
	  "price": 17561.45,
	  "discount": 10,
	  "category": "China",
	  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
	  "rating": 2,
	  "quantity": 41,
	  "comments": [{
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }]
	}, {
	  "id": 89,
	  "name": "Novorossiysk",
	  "price": 814.51,
	  "discount": 93,
	  "category": "Russia",
	  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
	  "rating": 2,
	  "quantity": 8,
	  "comments": [{
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }]
	}, {
	  "id": 90,
	  "name": "Balky",
	  "price": 15123.1,
	  "discount": 95,
	  "category": "Ukraine",
	  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	  "rating": 3,
	  "quantity": 25,
	  "comments": [{
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }]
	}, {
	  "id": 91,
	  "name": "Inhambane",
	  "price": 16675.73,
	  "discount": 12,
	  "category": "Mozambique",
	  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	  "rating": 4,
	  "quantity": 50,
	  "comments": [{
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }]
	}, {
	  "id": 92,
	  "name": "Dungkek Laok",
	  "price": 6545.32,
	  "discount": 27,
	  "category": "Indonesia",
	  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	  "rating": 5,
	  "quantity": 41,
	  "comments": [{
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }]
	}, {
	  "id": 93,
	  "name": "Hyattsville",
	  "price": 8270.23,
	  "discount": 19,
	  "category": "United States",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 4,
	  "quantity": 44,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 94,
	  "name": "Quintães",
	  "price": 7463.49,
	  "discount": 92,
	  "category": "Portugal",
	  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	  "rating": 3,
	  "quantity": 35,
	  "comments": [{
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }]
	}, {
	  "id": 95,
	  "name": "Gialo",
	  "price": 18015.1,
	  "discount": 69,
	  "category": "Libya",
	  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
	  "rating": 2,
	  "quantity": 48,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }, {
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }]
	}, {
	  "id": 96,
	  "name": "Pak Phanang",
	  "price": 19969.58,
	  "discount": 16,
	  "category": "Thailand",
	  "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
	  "rating": 5,
	  "quantity": 29,
	  "comments": [{
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }]
	}, {
	  "id": 97,
	  "name": "Hendala",
	  "price": 8058.02,
	  "discount": 40,
	  "category": "Sri Lanka",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 1,
	  "quantity": 41,
	  "comments": [{
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }]
	}, {
	  "id": 98,
	  "name": "Mikumi",
	  "price": 1808.36,
	  "discount": 92,
	  "category": "Tanzania",
	  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	  "rating": 1,
	  "quantity": 40,
	  "comments": [{
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	  }]
	}, {
	  "id": 99,
	  "name": "Presidente Dutra",
	  "price": 9456.91,
	  "discount": 49,
	  "category": "Brazil",
	  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
	  "rating": 1,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }]
	}, {
	  "id": 100,
	  "name": "Zhoukou",
	  "price": 15918.4,
	  "discount": 93,
	  "category": "China",
	  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	  "rating": 1,
	  "quantity": 37,
	  "comments": [{
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }]
	}];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var pid = __webpack_require__(6);
	
	var Product = exports.Product = function () {
	    function Product(name, price, category, description, rating, quantity) {
	        var comments = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
	        var discount = arguments[7];
	        var imgUrl = arguments[8];
	
	        _classCallCheck(this, Product);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmEyOTc1YzA1NWFhY2JjZTE5ODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9DYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanMiXSwibmFtZXMiOlsic2V0VXBFdmVudExpc3RlbmVycyIsImRpc3BsYXlDYXJ0SXRlbXMiLCJDb250cm9sbGVyIiwiZGlzcGxhdENhcnRJdGVtIiwic2V0VXBFdmVudGlzdGVuZXIiLCJjb250cm9sbGVyIiwiVmlldyIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9kbmFtZSIsInZhbHVlIiwicHJpY2UiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwicmF0aW5nIiwicXVhbnRpdHkiLCJkaXNjb3VudCIsImltYWdlVXJsIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5UHJvZHVjdHMiLCJjbGljayIsInByb0xpc3RDb250YWluZXIiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsInBvc2l0aW9uIiwibGlFbCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9kdWN0UGFyZW50RGl2IiwicHJvZHVjdEltYWdlRGl2IiwicHJvZHVjdFByaWNlRGl2IiwicHJvZGltZyIsImlkIiwiaXNBdmFpbGFibGUiLCJhcHBlbmRDaGlsZCIsInNwbGl0YXJyIiwidG90YWxQcmljZSIsInRvU3RyaW5nIiwic3BsaXQiLCJyZXBsYWNlIiwidG90YWxJdGVtIiwiaXRlbXMiLCJpdGVtTGlzdCIsIm5hbWUiLCJ0b0ZpeGVkIiwiZWxlbWVudE5hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImVsZW1lbnQiLCJ2aWV3IiwiQ2FydCIsInNwbGljZSIsImxlbmd0aCIsInJlZHVjZSIsInN1bSIsImIiLCJjYXJ0IiwicHJvZHVjdERhdGEiLCJwaWQiLCJyZXF1aXJlIiwiUHJvZHVjdCIsImNvbW1lbnRzIiwiaW1nVXJsIiwiSWQiLCJnZW5lcmF0ZSIsInByb2R1Y3RMaXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFscGhhYmV0IiwiZW5jb2RlIiwiZGVjb2RlIiwiaXNWYWxpZCIsIlJFRFVDRV9USU1FIiwidmVyc2lvbiIsImNsdXN0ZXJXb3JrZXJJZCIsImNvdW50ZXIiLCJwcmV2aW91c1NlY29uZHMiLCJzdHIiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImxvb2t1cCIsInNlZWQiLCJzZWVkVmFsdWUiLCJ3b3JrZXIiLCJ3b3JrZXJJZCIsImNoYXJhY3RlcnMiLCJuZXdDaGFyYWN0ZXJzIiwidW5kZWZpbmVkIiwic2h1ZmZsZWQiLCJyYW5kb21Gcm9tU2VlZCIsIk9SSUdJTkFMIiwicHJldmlvdXNTZWVkIiwicmVzZXQiLCJzZXRDaGFyYWN0ZXJzIiwiX2FscGhhYmV0XyIsIkVycm9yIiwidW5pcXVlIiwiZmlsdGVyIiwiaW5kIiwiYXJyIiwibGFzdEluZGV4T2YiLCJqb2luIiwic2V0U2VlZCIsInNodWZmbGUiLCJzb3VyY2VBcnJheSIsInRhcmdldEFycmF5IiwiciIsIm5leHRWYWx1ZSIsImNoYXJhY3RlckluZGV4IiwiZ2V0U2h1ZmZsZWQiLCJpbmRleCIsImFscGhhYmV0U2h1ZmZsZWQiLCJnZXROZXh0VmFsdWUiLCJfc2VlZF8iLCJyYW5kb21CeXRlIiwibnVtYmVyIiwibG9vcENvdW50ZXIiLCJkb25lIiwicG93IiwiY3J5cHRvIiwid2luZG93IiwibXNDcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJyYW5kb20iLCJkZXN0IiwiVWludDhBcnJheSIsImluZGV4T2YiLCJzdWJzdHIiLCJpc1Nob3J0SWQiLCJsZW4iLCJpIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0Esd0JBQVdBLG1CQUFYO0FBQ0Esd0JBQVdDLGdCQUFYOztBQUdBO0FBQ0E7QUFDQTtBQUNBLDZGOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7OztLQUVNQyxVOzs7Ozs7OzRDQUNnQjtBQUNkLHdCQUFLQyxlQUFMO0FBQ0g7OzsrQ0FFb0I7QUFDakIsd0JBQUtDLGlCQUFMO0FBQ0g7Ozs7OztBQUdFLEtBQUlDLGtDQUFhLElBQUlILFVBQUosRUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDWlA7O0FBQ0E7Ozs7S0FFTUksSTtBQUNGLHFCQUFjO0FBQUE7QUFFYjs7Ozs2Q0FFbUI7QUFBQTs7QUFDaEIsaUJBQUlDLEtBQUtDLFNBQVND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V3lDLE9BQVgsQ0FBbUJqRyxHQUFHcUcsQ0FBSCxDQUFuQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDLG9CQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0QsWUFBTyxJQUFQO0FBQ0g7O0FBRURuRSxRQUFPQyxPQUFQLEdBQWlCZ0UsU0FBakIsQzs7Ozs7O0FDbEJBOztBQUVBakUsUUFBT0MsT0FBUCxHQUFpQixDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhMjk3NWMwNTVhYWNiY2UxOTg0IiwiaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcclxuXHJcbi8vbGV0IGNhcnRPYmplY3QgPSBuZXcgQ2FydCgpO1xyXG5jb250cm9sbGVyLnNldFVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuY29udHJvbGxlci5kaXNwbGF5Q2FydEl0ZW1zKCk7XHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coYFRvdGFsIEl0ZW0gcHJpY2UgaXMgJHtjYXJ0T2JqZWN0LnRvdGFsUHJpY2UoKX1gKTtcclxuLy8gY29uc29sZS5sb2coYFRvdGFsIGl0ZW0gaW4gY2FydCBpczogJHtjYXJ0T2JqZWN0LnRvdGFsSXRlbSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgZGlzY291bnQgcHJpY2UgaXMgJHtjYXJ0T2JqZWN0LnRvdGFsRGlzY291bnRQcmljZSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgcHJpY2Ugd2l0aG91dCBkaXNjb3VudCBpcyAke2NhcnRPYmplY3QudG90YWxQcmljZVdpdGhvdXREaXNjb3VudCgpfWApO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiaW1wb3J0IHt2aWV3IGFzIFZpZXd9IGZyb20gJy4uL3ZpZXcvdmlldyc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVye1xyXG4gICAgZGlzcGxheUNhcnRJdGVtcygpe1xyXG4gICAgICAgIFZpZXcuZGlzcGxhdENhcnRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgICAgIFZpZXcuc2V0VXBFdmVudGlzdGVuZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgY2FydCBhcyBDYXJ0IH0gZnJvbSAnLi4vbW9kZWxzL0NhcnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0LCBwcm9kdWN0TGlzdCB9IGZyb20gJy4uL21vZGVscy9wcm9kdWN0JztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFVwRXZlbnRpc3RlbmVyKCkge1xyXG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1hZGQtYnV0dG9uXCIpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvZG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RuYW1lXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaWNlXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRpbmdcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbnRpdHlcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY291bnRcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VVcmxcIikudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyhuYW1lLCBwcmljZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCByYXRpbmcsIHF1YW50aXR5LCBjb21tZW50cywgZGlzY291bnQpXHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QocHJvZG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHksIFtdLCBkaXNjb3VudCwgaW1hZ2VVcmwpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdExpc3QpO1xyXG4gICAgICAgICAgICAvL2Rpc3BsYXkgcHJvZHVjdCBvbiB0aGUgcGFnZVxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNsb3NlXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb2R1Y3RzKCkge1xyXG4gICAgICAgIGxldCBwcm9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXItcHJvZHVjdC1saXN0XCIpO1xyXG4gICAgICAgIHByb0xpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgcHJvZHVjdExpc3QuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpRWwgPSBjcmVhdGVFbGVtZW50KFwibGlcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UGFyZW50RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJbWFnZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9kdWN0SW1hZ2VEaXZcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvZHVjdFByaWNlRGl2XCIpLFxyXG4gICAgICAgICAgICAgICAgcHJvZGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJwcm9kdWN0LWltYWdlXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxpRWwuaWQgPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZURpdi5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgYDx1bD5cclxuICAgICAgICAgICAgPGxpPjxzcGFuPlByaWNlOjwvc3Bhbj48c3Bhbj5cXCQke2l0ZW0ucHJpY2V9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48c3Bhbj5JbiBTdG9jazo8L3NwYW4+PHNwYW4+XFwkJHtpdGVtLmlzQXZhaWxhYmxlKCl9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+QWRkIHRvIGJhc2tldDwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgcHJvZHVjdEltYWdlRGl2LmFwcGVuZENoaWxkKHByb2RpbWcpO1xyXG4gICAgICAgICAgICBwcm9kdWN0UGFyZW50RGl2LmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZURpdik7XHJcbiAgICAgICAgICAgIHByb2R1Y3RQYXJlbnREaXYuYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGxpRWwuYXBwZW5kQ2hpbGQocHJvZHVjdFBhcmVudERpdik7XHJcbiAgICAgICAgICAgIHByb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxhdENhcnRJdGVtKCkge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIC8vZGlzcGxheSB0b3RhbCBpdGVtIHByaWNlXHJcbiAgICAgICAgbGV0IHNwbGl0YXJyID0gKENhcnQudG90YWxQcmljZSgpICE9PSAwKSA/IENhcnQudG90YWxQcmljZSgpLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSA6IFtcIjBcIiwgXCIwMFwiXTtcclxuICAgICAgICBzcGxpdGFyclswXSA9IHNwbGl0YXJyWzBdLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrJCkvZywgXCIkMSxcIik7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblByaWNlXCIpLmlubmVySFRNTCA9IGBcXCQke3NwbGl0YXJyWzBdfTxzdXA+LiR7c3BsaXRhcnJbMV19JiMxNjI7PC9zdXA+YDtcclxuXHJcbiAgICAgICAgLy9kaXNwbGF5IHRvdGFsIGl0ZW0gaW4gYmFza2V0XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWd5XCIpLmlubmVySFRNTCA9IENhcnQudG90YWxJdGVtKCk7XHJcblxyXG4gICAgICAgIC8vTG9vcCBhbmQgZGlzbGF5IENhcnQgaXRlbXMgaW4gYSBsaXN0XHJcbiAgICAgICAgQ2FydC5pdGVtcy5mb3JFYWNoKChpdGVtLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUxpc3QgPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJjYXJ0LWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmlubmVySFRNTCA9IGAke2l0ZW0ucXVhbnRpdHl9IHggJHtpdGVtLm5hbWV9IDxzcGFuIGNsYXNzPVwiY2FydC1pdGVtLXByaWNlXCI+PSBcXCQkeyhpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSkudG9GaXhlZCgyKX08L3NwYW4+YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWl0ZW1zXCIpLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSA9IFwibmFcIiwgc3R5bGUgPSBcIm5hXCIsIGlubmVySFRNTCA9IFwibmFcIikgPT4ge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBcIm5hXCIpIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xyXG5cclxuICAgIGlmIChzdHlsZSAhPT0gXCJuYVwiKSBlbGVtZW50LnN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgaWYgKGlubmVySFRNTCAhPT0gXCJuYVwiKSBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IHZpZXcgPSBuZXcgVmlldygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L3ZpZXcuanMiLCJpbXBvcnQgeyBwcm9kdWN0RGF0YSB9IGZyb20gJy4vcHJvZHVjdERhdGEnO1xyXG5cclxuY2xhc3MgQ2FydCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcHJvZHVjdERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0ocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxJdGVtKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pdGVtcy5sZW5ndGg+MCkgPyB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAxLCAwKTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbERpc2NvdW50UHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIChiLmRpc2NvdW50ICE9PSAnJykgPyAoKGIuZGlzY291bnQgLyAxMDApICogYi5wcmljZSkgOiAwLjAwLCAwLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsUHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLml0ZW1zLmxlbmd0aD4gMCkgPyAodGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIuZGlzY291bnQgPiAwICYmIGIuZGlzY291bnQgIT09ICcnKSA/IChiLnByaWNlIC0gKGIuZGlzY291bnQgKiBiLnByaWNlKSAvIDEwMCkgOiBiLnByaWNlLCAwLjAwKS50b0ZpeGVkKDIpKSA6IDAuMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQcmljZVdpdGhvdXREaXNjb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIucHJpY2UgIT09ICcnKSA/IGIucHJpY2UgOiAwLjAwLCAwLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGNhcnQgPSBuZXcgQ2FydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvQ2FydC5qcyIsImV4cG9ydCBjb25zdCBwcm9kdWN0RGF0YSA9IFt7XHJcbiAgXCJpZFwiOiAxLFxyXG4gIFwibmFtZVwiOiBcIkxhYy1Ccm9tZVwiLFxyXG4gIFwicHJpY2VcIjogNTg3MS45NyxcclxuICBcImRpc2NvdW50XCI6IDUxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDYW5hZGFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDE2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMixcclxuICBcIm5hbWVcIjogXCJMb25ncXVhblwiLFxyXG4gIFwicHJpY2VcIjogMTUwMjkuODUsXHJcbiAgXCJkaXNjb3VudFwiOiA3NCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDMyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMyxcclxuICBcIm5hbWVcIjogXCJTa2VsbGVmdGVoYW1uXCIsXHJcbiAgXCJwcmljZVwiOiAxMDI1Ljk3LFxyXG4gIFwiZGlzY291bnRcIjogNzcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlN3ZWRlblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMjcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQsXHJcbiAgXCJuYW1lXCI6IFwiS2FyZW1hXCIsXHJcbiAgXCJwcmljZVwiOiA1MjIwLjk4LFxyXG4gIFwiZGlzY291bnRcIjogOCxcclxuICBcImNhdGVnb3J5XCI6IFwiVGFuemFuaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNSxcclxuICBcIm5hbWVcIjogXCJTaGlqaWFvXCIsXHJcbiAgXCJwcmljZVwiOiA4MzY1LjcsXHJcbiAgXCJkaXNjb3VudFwiOiA1MixcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNixcclxuICBcIm5hbWVcIjogXCJMaXVkdVwiLFxyXG4gIFwicHJpY2VcIjogMjg5NC41MixcclxuICBcImRpc2NvdW50XCI6IDYxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAzNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDcsXHJcbiAgXCJuYW1lXCI6IFwiQnVrYmF0YW5nXCIsXHJcbiAgXCJwcmljZVwiOiAxNjMzNC42NyxcclxuICBcImRpc2NvdW50XCI6IDgwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOCxcclxuICBcIm5hbWVcIjogXCJKaW5waW5nXCIsXHJcbiAgXCJwcmljZVwiOiAxOTEzMi40OSxcclxuICBcImRpc2NvdW50XCI6IDQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAyNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDksXHJcbiAgXCJuYW1lXCI6IFwiQm9qb25nYXJlblwiLFxyXG4gIFwicHJpY2VcIjogMTEwNS42OCxcclxuICBcImRpc2NvdW50XCI6IDI2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMzIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDEwLFxyXG4gIFwibmFtZVwiOiBcIlphcmF6YVwiLFxyXG4gIFwicHJpY2VcIjogMTc3MzMuNzksXHJcbiAgXCJkaXNjb3VudFwiOiA1MixcclxuICBcImNhdGVnb3J5XCI6IFwiVmVuZXp1ZWxhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTEsXHJcbiAgXCJuYW1lXCI6IFwiQ2lzZXd1XCIsXHJcbiAgXCJwcmljZVwiOiA0MTQzLjgyLFxyXG4gIFwiZGlzY291bnRcIjogMzMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMTksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDEyLFxyXG4gIFwibmFtZVwiOiBcIlNhbnRvIE5pw7FvXCIsXHJcbiAgXCJwcmljZVwiOiA5OTg4LjE4LFxyXG4gIFwiZGlzY291bnRcIjogNjYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA0MixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxMyxcclxuICBcIm5hbWVcIjogXCJOZWliYVwiLFxyXG4gIFwicHJpY2VcIjogMTM0OC4zNCxcclxuICBcImRpc2NvdW50XCI6IDEyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJEb21pbmljYW4gUmVwdWJsaWNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMjEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTQsXHJcbiAgXCJuYW1lXCI6IFwiw4l2b3JhXCIsXHJcbiAgXCJwcmljZVwiOiA2MzEuMDYsXHJcbiAgXCJkaXNjb3VudFwiOiA2NyxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9ydHVnYWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDM0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE1LFxyXG4gIFwibmFtZVwiOiBcIlRodW5cIixcclxuICBcInByaWNlXCI6IDE1NTIzLjA1LFxyXG4gIFwiZGlzY291bnRcIjogMjYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlN3aXR6ZXJsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMjIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTYsXHJcbiAgXCJuYW1lXCI6IFwiSmVwYXQgS2lkdWxcIixcclxuICBcInByaWNlXCI6IDk1MDAuMzUsXHJcbiAgXCJkaXNjb3VudFwiOiAyNCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNDYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE3LFxyXG4gIFwibmFtZVwiOiBcIk1hY3Jvb21cIixcclxuICBcInByaWNlXCI6IDExOTYyLjE1LFxyXG4gIFwiZGlzY291bnRcIjogNzksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIklyZWxhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAyMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTgsXHJcbiAgXCJuYW1lXCI6IFwiQmFmYXTDoVwiLFxyXG4gIFwicHJpY2VcIjogMTg2NjEuMDgsXHJcbiAgXCJkaXNjb3VudFwiOiA2MCxcclxuICBcImNhdGVnb3J5XCI6IFwiR3VpbmVhLUJpc3NhdVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDM3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTksXHJcbiAgXCJuYW1lXCI6IFwiUGVtYnJva2VcIixcclxuICBcInByaWNlXCI6IDE3MDA3LjYzLFxyXG4gIFwiZGlzY291bnRcIjogNDgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1hbHRhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA0NyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDIwLFxyXG4gIFwibmFtZVwiOiBcIk5hc3RvbGFcIixcclxuICBcInByaWNlXCI6IDE3OTQ3LjQ1LFxyXG4gIFwiZGlzY291bnRcIjogMTcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkZpbmxhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjEsXHJcbiAgXCJuYW1lXCI6IFwiT3ZpZWRvXCIsXHJcbiAgXCJwcmljZVwiOiAxMDk3Ljk3LFxyXG4gIFwiZGlzY291bnRcIjogNDgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyMixcclxuICBcIm5hbWVcIjogXCJDYXRhbmR1dmFcIixcclxuICBcInByaWNlXCI6IDE1NjE5LjY3LFxyXG4gIFwiZGlzY291bnRcIjogMSxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYSB1dCBlcmF0IGlkIG1hdXJpcyB2dWxwdXRhdGUgZWxlbWVudHVtLiBOdWxsYW0gdmFyaXVzLiBOdWxsYSBmYWNpbGlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgbm9uIGxlY3R1cy4gQWxpcXVhbSBzaXQgYW1ldCBkaWFtIGluIG1hZ25hIGJpYmVuZHVtIGltcGVyZGlldC4gTnVsbGFtIG9yY2kgcGVkZSwgdmVuZW5hdGlzIG5vbiwgc29kYWxlcyBzZWQsIHRpbmNpZHVudCBldSwgZmVsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDIzLFxyXG4gIFwibmFtZVwiOiBcIkppYWx1XCIsXHJcbiAgXCJwcmljZVwiOiAxMjM2NS44OCxcclxuICBcImRpc2NvdW50XCI6IDExLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAzMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBpZCBqdXN0byBzaXQgYW1ldCBzYXBpZW4gZGlnbmlzc2ltIHZlc3RpYnVsdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBkYXBpYnVzIGRvbG9yIHZlbCBlc3QuIERvbmVjIG9kaW8ganVzdG8sIHNvbGxpY2l0dWRpbiB1dCwgc3VzY2lwaXQgYSwgZmV1Z2lhdCBldCwgZXJvcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjQsXHJcbiAgXCJuYW1lXCI6IFwiQ2hpdG9zZVwiLFxyXG4gIFwicHJpY2VcIjogNjUwNS43MyxcclxuICBcImRpc2NvdW50XCI6IDkwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJKYXBhblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjUsXHJcbiAgXCJuYW1lXCI6IFwiTG9ncm/DsW9cIixcclxuICBcInByaWNlXCI6IDE1MDA2LjY5LFxyXG4gIFwiZGlzY291bnRcIjogMzcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlNwYWluXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA0MCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyNixcclxuICBcIm5hbWVcIjogXCJEYXNodGF2YW5cIixcclxuICBcInByaWNlXCI6IDE3NjkwLjY0LFxyXG4gIFwiZGlzY291bnRcIjogNjIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkFybWVuaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDQ4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyNyxcclxuICBcIm5hbWVcIjogXCJCYW5nb2xvXCIsXHJcbiAgXCJwcmljZVwiOiAxMzIwMC4xNSxcclxuICBcImRpc2NvdW50XCI6IDc0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJdm9yeSBDb2FzdFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjgsXHJcbiAgXCJuYW1lXCI6IFwiQW5kb2FueVwiLFxyXG4gIFwicHJpY2VcIjogMTQxMjcuNTksXHJcbiAgXCJkaXNjb3VudFwiOiA4MSxcclxuICBcImNhdGVnb3J5XCI6IFwiTWFkYWdhc2NhclwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMjAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjksXHJcbiAgXCJuYW1lXCI6IFwiTWlsbGVyb3ZvXCIsXHJcbiAgXCJwcmljZVwiOiAxMjUwNi4wLFxyXG4gIFwiZGlzY291bnRcIjogMzcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlJ1c3NpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzAsXHJcbiAgXCJuYW1lXCI6IFwiTGFuZ3VhblwiLFxyXG4gIFwicHJpY2VcIjogMTM1NjYuNixcclxuICBcImRpc2NvdW50XCI6IDE3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAxMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzEsXHJcbiAgXCJuYW1lXCI6IFwiQ29tw6lcIixcclxuICBcInByaWNlXCI6IDQyMDEuOTgsXHJcbiAgXCJkaXNjb3VudFwiOiA4NCxcclxuICBcImNhdGVnb3J5XCI6IFwiQmVuaW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDI5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzMixcclxuICBcIm5hbWVcIjogXCJUb3JcIixcclxuICBcInByaWNlXCI6IDc5Mi4zOSxcclxuICBcImRpc2NvdW50XCI6IDM0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJFZ3lwdFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMzLFxyXG4gIFwibmFtZVwiOiBcIk1pZ3VlbMOzcG9saXNcIixcclxuICBcInByaWNlXCI6IDE4MDE5LjA0LFxyXG4gIFwiZGlzY291bnRcIjogMTAwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDEzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzQsXHJcbiAgXCJuYW1lXCI6IFwiRm9ydCBNeWVyc1wiLFxyXG4gIFwicHJpY2VcIjogMTU0ODguNzIsXHJcbiAgXCJkaXNjb3VudFwiOiA4MSxcclxuICBcImNhdGVnb3J5XCI6IFwiVW5pdGVkIFN0YXRlc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA0MCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzNSxcclxuICBcIm5hbWVcIjogXCJDaGVuZ2JlaVwiLFxyXG4gIFwicHJpY2VcIjogMTc1NjEuODQsXHJcbiAgXCJkaXNjb3VudFwiOiAzMyxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNTAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM2LFxyXG4gIFwibmFtZVwiOiBcIlpodWppYW5nXCIsXHJcbiAgXCJwcmljZVwiOiAxMDM4Mi4zLFxyXG4gIFwiZGlzY291bnRcIjogMTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzcsXHJcbiAgXCJuYW1lXCI6IFwiw4ltcG9uYXNcIixcclxuICBcInByaWNlXCI6IDExMTM3Ljc4LFxyXG4gIFwiZGlzY291bnRcIjogNTcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkdyZWVjZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYSB1dCBlcmF0IGlkIG1hdXJpcyB2dWxwdXRhdGUgZWxlbWVudHVtLiBOdWxsYW0gdmFyaXVzLiBOdWxsYSBmYWNpbGlzaS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNDAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzOCxcclxuICBcIm5hbWVcIjogXCJNZWdhbG9jaMOzcmlvblwiLFxyXG4gIFwicHJpY2VcIjogNTEwLjMxLFxyXG4gIFwiZGlzY291bnRcIjogNzIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkdyZWVjZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDQzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzksXHJcbiAgXCJuYW1lXCI6IFwiRHV3YWt0ZW5nZ2lcIixcclxuICBcInByaWNlXCI6IDE3NzExLjM2LFxyXG4gIFwiZGlzY291bnRcIjogODQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMzUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0MCxcclxuICBcIm5hbWVcIjogXCJGcmVkZXJpa3NiZXJnXCIsXHJcbiAgXCJwcmljZVwiOiAxMDc5Ny43NCxcclxuICBcImRpc2NvdW50XCI6IDExLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJEZW5tYXJrXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMzgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQxLFxyXG4gIFwibmFtZVwiOiBcIlRpZWxcIixcclxuICBcInByaWNlXCI6IDcxNzkuOTcsXHJcbiAgXCJkaXNjb3VudFwiOiA1MyxcclxuICBcImNhdGVnb3J5XCI6IFwiTmV0aGVybGFuZHNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDE2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDIsXHJcbiAgXCJuYW1lXCI6IFwiUGFuZGFzYW5cIixcclxuICBcInByaWNlXCI6IDEzNTM4Ljg2LFxyXG4gIFwiZGlzY291bnRcIjogODEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMjEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0MyxcclxuICBcIm5hbWVcIjogXCJMaWFuc2hhblwiLFxyXG4gIFwicHJpY2VcIjogMTk4NzYuMTcsXHJcbiAgXCJkaXNjb3VudFwiOiA3NCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMjgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDQsXHJcbiAgXCJuYW1lXCI6IFwiTW9sYXZlXCIsXHJcbiAgXCJwcmljZVwiOiAxMDgzOC4wMyxcclxuICBcImRpc2NvdW50XCI6IDc1LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0NSxcclxuICBcIm5hbWVcIjogXCJBbXBhcml0YVwiLFxyXG4gIFwicHJpY2VcIjogNDc2My43OCxcclxuICBcImRpc2NvdW50XCI6IDU5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDQ4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0NixcclxuICBcIm5hbWVcIjogXCJMZSBIb2NoZXRcIixcclxuICBcInByaWNlXCI6IDEzMzA2LjY5LFxyXG4gIFwiZGlzY291bnRcIjogNTQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1hdXJpdGl1c1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAzMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDcsXHJcbiAgXCJuYW1lXCI6IFwiVGjhu4sgVHLhuqVuIFF14bq/XCIsXHJcbiAgXCJwcmljZVwiOiAxMTc0My4wMyxcclxuICBcImRpc2NvdW50XCI6IDUyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJWaWV0bmFtXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA0MixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDgsXHJcbiAgXCJuYW1lXCI6IFwiR2FwbG9rYW5cIixcclxuICBcInByaWNlXCI6IDE2NjIuNzcsXHJcbiAgXCJkaXNjb3VudFwiOiAxOCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDksXHJcbiAgXCJuYW1lXCI6IFwiWW9pY2hpXCIsXHJcbiAgXCJwcmljZVwiOiAxMzUxLjYyLFxyXG4gIFwiZGlzY291bnRcIjogNzksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkphcGFuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUwLFxyXG4gIFwibmFtZVwiOiBcIlNlYnVrdVwiLFxyXG4gIFwicHJpY2VcIjogNTAxOC41MSxcclxuICBcImRpc2NvdW50XCI6IDcwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogNDAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTEsXHJcbiAgXCJuYW1lXCI6IFwiTWFpZ29cIixcclxuICBcInByaWNlXCI6IDE5ODc3LjI2LFxyXG4gIFwiZGlzY291bnRcIjogNDAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUyLFxyXG4gIFwibmFtZVwiOiBcIlJvbmZlXCIsXHJcbiAgXCJwcmljZVwiOiA3MDY5LjgxLFxyXG4gIFwiZGlzY291bnRcIjogMzYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDM4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1MyxcclxuICBcIm5hbWVcIjogXCIncy1IZXJ0b2dlbmJvc2NoXCIsXHJcbiAgXCJwcmljZVwiOiAxNjEwOS43MSxcclxuICBcImRpc2NvdW50XCI6IDQ5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJOZXRoZXJsYW5kc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDExLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTQsXHJcbiAgXCJuYW1lXCI6IFwiTHVibmlld2ljZVwiLFxyXG4gIFwicHJpY2VcIjogMTI3MDIuNTMsXHJcbiAgXCJkaXNjb3VudFwiOiAzOSxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9sYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA0OCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTUsXHJcbiAgXCJuYW1lXCI6IFwiR3VuYWpheWFcIixcclxuICBcInByaWNlXCI6IDI0MzEuNDksXHJcbiAgXCJkaXNjb3VudFwiOiA3MixcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA0NixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1NixcclxuICBcIm5hbWVcIjogXCJCYWxvZ29cIixcclxuICBcInByaWNlXCI6IDMzMjguMDUsXHJcbiAgXCJkaXNjb3VudFwiOiA2OSxcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogNDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTcsXHJcbiAgXCJuYW1lXCI6IFwiTm9uZyBQaG9rXCIsXHJcbiAgXCJwcmljZVwiOiA1MTIyLjU3LFxyXG4gIFwiZGlzY291bnRcIjogMzgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlRoYWlsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1OCxcclxuICBcIm5hbWVcIjogXCJLYXRhZ3VtXCIsXHJcbiAgXCJwcmljZVwiOiA1MjIuODYsXHJcbiAgXCJkaXNjb3VudFwiOiA0MCxcclxuICBcImNhdGVnb3J5XCI6IFwiTmlnZXJpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAxNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU5LFxyXG4gIFwibmFtZVwiOiBcIlBhcmFkYSBkZSBUb2RlaWFcIixcclxuICBcInByaWNlXCI6IDQ4NjYuNzMsXHJcbiAgXCJkaXNjb3VudFwiOiA4MSxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9ydHVnYWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2MCxcclxuICBcIm5hbWVcIjogXCJCdWx1YnJhbmdzaVwiLFxyXG4gIFwicHJpY2VcIjogMTkxNTAuNjgsXHJcbiAgXCJkaXNjb3VudFwiOiAxMixcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYxLFxyXG4gIFwibmFtZVwiOiBcIlRvbXRlYm9kYVwiLFxyXG4gIFwicHJpY2VcIjogMTQ3MDAuMSxcclxuICBcImRpc2NvdW50XCI6IDg2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTd2VkZW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAxMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjIsXHJcbiAgXCJuYW1lXCI6IFwiT3Nsb21lalwiLFxyXG4gIFwicHJpY2VcIjogNjQ5LjE5LFxyXG4gIFwiZGlzY291bnRcIjogMTYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1hY2Vkb25pYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDIzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYzLFxyXG4gIFwibmFtZVwiOiBcIldhbmdjYW9cIixcclxuICBcInByaWNlXCI6IDY2NTUuNDksXHJcbiAgXCJkaXNjb3VudFwiOiAxMDAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAxMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjQsXHJcbiAgXCJuYW1lXCI6IFwiS2FyYW5ncGFyd2FcIixcclxuICBcInByaWNlXCI6IDE0MjUyLjEyLFxyXG4gIFwiZGlzY291bnRcIjogOTksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDMwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIGFjIGVzdCBsYWNpbmlhIG5pc2kgdmVuZW5hdGlzIHRyaXN0aXF1ZS4gRnVzY2UgY29uZ3VlLCBkaWFtIGlkIG9ybmFyZSBpbXBlcmRpZXQsIHNhcGllbiB1cm5hIHByZXRpdW0gbmlzbCwgdXQgdm9sdXRwYXQgc2FwaWVuIGFyY3Ugc2VkIGF1Z3VlLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY1LFxyXG4gIFwibmFtZVwiOiBcIlZhbGxleW1vdW50XCIsXHJcbiAgXCJwcmljZVwiOiA0MzU2LjMyLFxyXG4gIFwiZGlzY291bnRcIjogNDEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIklyZWxhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA0NCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjYsXHJcbiAgXCJuYW1lXCI6IFwixYxtZVwiLFxyXG4gIFwicHJpY2VcIjogNjg1My4zLFxyXG4gIFwiZGlzY291bnRcIjogNDgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkphcGFuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDM0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY3LFxyXG4gIFwibmFtZVwiOiBcIlJvZG90w7NwaVwiLFxyXG4gIFwicHJpY2VcIjogMTMyNTMuNjMsXHJcbiAgXCJkaXNjb3VudFwiOiA2OCxcclxuICBcImNhdGVnb3J5XCI6IFwiR3JlZWNlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAzMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjgsXHJcbiAgXCJuYW1lXCI6IFwiRmFyYXBcIixcclxuICBcInByaWNlXCI6IDE4NTc1LjQ3LFxyXG4gIFwiZGlzY291bnRcIjogNzksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlR1cmttZW5pc3RhblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjksXHJcbiAgXCJuYW1lXCI6IFwiU2hlZG9rXCIsXHJcbiAgXCJwcmljZVwiOiAxMTc2OC4zLFxyXG4gIFwiZGlzY291bnRcIjogMjksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlJ1c3NpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDQyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBpZCBqdXN0byBzaXQgYW1ldCBzYXBpZW4gZGlnbmlzc2ltIHZlc3RpYnVsdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBkYXBpYnVzIGRvbG9yIHZlbCBlc3QuIERvbmVjIG9kaW8ganVzdG8sIHNvbGxpY2l0dWRpbiB1dCwgc3VzY2lwaXQgYSwgZmV1Z2lhdCBldCwgZXJvcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzAsXHJcbiAgXCJuYW1lXCI6IFwiS2FybHN0YWRcIixcclxuICBcInByaWNlXCI6IDM1NzQuNTUsXHJcbiAgXCJkaXNjb3VudFwiOiAxNSxcclxuICBcImNhdGVnb3J5XCI6IFwiU3dlZGVuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMjEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzEsXHJcbiAgXCJuYW1lXCI6IFwiTGEgUGF6XCIsXHJcbiAgXCJwcmljZVwiOiAyNjM5LjAsXHJcbiAgXCJkaXNjb3VudFwiOiA3OSxcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDcyLFxyXG4gIFwibmFtZVwiOiBcIlbFoWVzdGFyeVwiLFxyXG4gIFwicHJpY2VcIjogMTkwNjAuOTIsXHJcbiAgXCJkaXNjb3VudFwiOiA4NixcclxuICBcImNhdGVnb3J5XCI6IFwiQ3plY2ggUmVwdWJsaWNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDM1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzMsXHJcbiAgXCJuYW1lXCI6IFwiU2FiYW5nXCIsXHJcbiAgXCJwcmljZVwiOiA1NzYxLjE5LFxyXG4gIFwiZGlzY291bnRcIjogNDMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzQsXHJcbiAgXCJuYW1lXCI6IFwiWWlkYW9cIixcclxuICBcInByaWNlXCI6IDgwOC45OCxcclxuICBcImRpc2NvdW50XCI6IDMxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAyNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3NSxcclxuICBcIm5hbWVcIjogXCJUYW5namlhcG9cIixcclxuICBcInByaWNlXCI6IDE4NTY3LjAyLFxyXG4gIFwiZGlzY291bnRcIjogNDksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA0NSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc2LFxyXG4gIFwibmFtZVwiOiBcIk1vcmFcIixcclxuICBcInByaWNlXCI6IDI4NjMuMjYsXHJcbiAgXCJkaXNjb3VudFwiOiA0MyxcclxuICBcImNhdGVnb3J5XCI6IFwiU3dlZGVuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzcsXHJcbiAgXCJuYW1lXCI6IFwiSmluc2hhXCIsXHJcbiAgXCJwcmljZVwiOiAxOTI3Ni42NCxcclxuICBcImRpc2NvdW50XCI6IDIzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDQwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzgsXHJcbiAgXCJuYW1lXCI6IFwiUmVjcmVpb1wiLFxyXG4gIFwicHJpY2VcIjogNTgxMC43MSxcclxuICBcImRpc2NvdW50XCI6IDQ0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDE5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3OSxcclxuICBcIm5hbWVcIjogXCJEb21hcnRhbmdcIixcclxuICBcInByaWNlXCI6IDEzMTM3LjMzLFxyXG4gIFwiZGlzY291bnRcIjogNTEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDgwLFxyXG4gIFwibmFtZVwiOiBcIlJpemFsXCIsXHJcbiAgXCJwcmljZVwiOiA1ODYuODMsXHJcbiAgXCJkaXNjb3VudFwiOiAyMixcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMzksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDgxLFxyXG4gIFwibmFtZVwiOiBcIlN0YXLDqSBNxJtzdG9cIixcclxuICBcInByaWNlXCI6IDg3NDIuNDEsXHJcbiAgXCJkaXNjb3VudFwiOiA4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDemVjaCBSZXB1YmxpY1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMjQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODIsXHJcbiAgXCJuYW1lXCI6IFwiUGVycGlnbmFuXCIsXHJcbiAgXCJwcmljZVwiOiAxOTQ1NC4yNixcclxuICBcImRpc2NvdW50XCI6IDMyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJGcmFuY2VcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA0NSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODMsXHJcbiAgXCJuYW1lXCI6IFwiTW91bGF5IEJvdWNodGFcIixcclxuICBcInByaWNlXCI6IDE2MTkxLjE1LFxyXG4gIFwiZGlzY291bnRcIjogMSxcclxuICBcImNhdGVnb3J5XCI6IFwiTW9yb2Njb1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAyNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg0LFxyXG4gIFwibmFtZVwiOiBcIkFsIFFhcnlhdGF5blwiLFxyXG4gIFwicHJpY2VcIjogNDkwNi4xLFxyXG4gIFwiZGlzY291bnRcIjogMyxcclxuICBcImNhdGVnb3J5XCI6IFwiU3lyaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDE4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIHRpbmNpZHVudCBhbnRlIHZlbCBpcHN1bS4gUHJhZXNlbnQgYmxhbmRpdCBsYWNpbmlhIGVyYXQuIFZlc3RpYnVsdW0gc2VkIG1hZ25hIGF0IG51bmMgY29tbW9kbyBwbGFjZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg1LFxyXG4gIFwibmFtZVwiOiBcIkF5Z2VrXCIsXHJcbiAgXCJwcmljZVwiOiAxNTIxOC4xMyxcclxuICBcImRpc2NvdW50XCI6IDYxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJBcm1lbmlhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDM0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODYsXHJcbiAgXCJuYW1lXCI6IFwiQnlzdHJ5dHN5YVwiLFxyXG4gIFwicHJpY2VcIjogMTQwNDIuMjcsXHJcbiAgXCJkaXNjb3VudFwiOiA0NyxcclxuICBcImNhdGVnb3J5XCI6IFwiVWtyYWluZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDIyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg3LFxyXG4gIFwibmFtZVwiOiBcIkjDtmZuXCIsXHJcbiAgXCJwcmljZVwiOiAxMDc1Ny4wMyxcclxuICBcImRpc2NvdW50XCI6IDU3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJY2VsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAzNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4OCxcclxuICBcIm5hbWVcIjogXCJTaGFuaG91XCIsXHJcbiAgXCJwcmljZVwiOiAxNzU2MS40NSxcclxuICBcImRpc2NvdW50XCI6IDEwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA0MSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg5LFxyXG4gIFwibmFtZVwiOiBcIk5vdm9yb3NzaXlza1wiLFxyXG4gIFwicHJpY2VcIjogODE0LjUxLFxyXG4gIFwiZGlzY291bnRcIjogOTMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlJ1c3NpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTAsXHJcbiAgXCJuYW1lXCI6IFwiQmFsa3lcIixcclxuICBcInByaWNlXCI6IDE1MTIzLjEsXHJcbiAgXCJkaXNjb3VudFwiOiA5NSxcclxuICBcImNhdGVnb3J5XCI6IFwiVWtyYWluZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbnRlZ2VyIHRpbmNpZHVudCBhbnRlIHZlbCBpcHN1bS4gUHJhZXNlbnQgYmxhbmRpdCBsYWNpbmlhIGVyYXQuIFZlc3RpYnVsdW0gc2VkIG1hZ25hIGF0IG51bmMgY29tbW9kbyBwbGFjZXJhdC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMjUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5MSxcclxuICBcIm5hbWVcIjogXCJJbmhhbWJhbmVcIixcclxuICBcInByaWNlXCI6IDE2Njc1LjczLFxyXG4gIFwiZGlzY291bnRcIjogMTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1vemFtYmlxdWVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDUwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5MixcclxuICBcIm5hbWVcIjogXCJEdW5na2VrIExhb2tcIixcclxuICBcInByaWNlXCI6IDY1NDUuMzIsXHJcbiAgXCJkaXNjb3VudFwiOiAyNyxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogNDEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTMsXHJcbiAgXCJuYW1lXCI6IFwiSHlhdHRzdmlsbGVcIixcclxuICBcInByaWNlXCI6IDgyNzAuMjMsXHJcbiAgXCJkaXNjb3VudFwiOiAxOSxcclxuICBcImNhdGVnb3J5XCI6IFwiVW5pdGVkIFN0YXRlc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDQ0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5NCxcclxuICBcIm5hbWVcIjogXCJRdWludMOjZXNcIixcclxuICBcInByaWNlXCI6IDc0NjMuNDksXHJcbiAgXCJkaXNjb3VudFwiOiA5MixcclxuICBcImNhdGVnb3J5XCI6IFwiUG9ydHVnYWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAzNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5NSxcclxuICBcIm5hbWVcIjogXCJHaWFsb1wiLFxyXG4gIFwicHJpY2VcIjogMTgwMTUuMSxcclxuICBcImRpc2NvdW50XCI6IDY5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJMaWJ5YVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDQ4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTYsXHJcbiAgXCJuYW1lXCI6IFwiUGFrIFBoYW5hbmdcIixcclxuICBcInByaWNlXCI6IDE5OTY5LjU4LFxyXG4gIFwiZGlzY291bnRcIjogMTYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlRoYWlsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMjksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTcsXHJcbiAgXCJuYW1lXCI6IFwiSGVuZGFsYVwiLFxyXG4gIFwicHJpY2VcIjogODA1OC4wMixcclxuICBcImRpc2NvdW50XCI6IDQwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTcmkgTGFua2FcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDQxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk4LFxyXG4gIFwibmFtZVwiOiBcIk1pa3VtaVwiLFxyXG4gIFwicHJpY2VcIjogMTgwOC4zNixcclxuICBcImRpc2NvdW50XCI6IDkyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJUYW56YW5pYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDQwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBzaXQgYW1ldCBlcmF0LiBOdWxsYSB0ZW1wdXMuIFZpdmFtdXMgaW4gZmVsaXMgZXUgc2FwaWVuIGN1cnN1cyB2ZXN0aWJ1bHVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5OSxcclxuICBcIm5hbWVcIjogXCJQcmVzaWRlbnRlIER1dHJhXCIsXHJcbiAgXCJwcmljZVwiOiA5NDU2LjkxLFxyXG4gIFwiZGlzY291bnRcIjogNDksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxMDAsXHJcbiAgXCJuYW1lXCI6IFwiWmhvdWtvdVwiLFxyXG4gIFwicHJpY2VcIjogMTU5MTguNCxcclxuICBcImRpc2NvdW50XCI6IDkzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMzcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufV07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9wcm9kdWN0RGF0YS5qcyIsImxldCBwaWQgPSByZXF1aXJlKCAnc2hvcnRpZCcpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3R7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCByYXRpbmcsIHF1YW50aXR5LCBjb21tZW50cyA9IFtdLCBkaXNjb3VudCwgaW1nVXJsKXtcclxuICAgICAgICB0aGlzLklkID0gcGlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcclxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy5kaXNjb3VudCA9IGRpc2NvdW50O1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcclxuICAgIH1cclxuXHJcbiAgICBpc0F2YWlsYWJsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXR5ID4gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9kdWN0TGlzdCA9IFtdO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvcHJvZHVjdC5qcyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xudmFyIGVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbnZhciBpc1ZhbGlkID0gcmVxdWlyZSgnLi9pcy12YWxpZCcpO1xuXG4vLyBJZ25vcmUgYWxsIG1pbGxpc2Vjb25kcyBiZWZvcmUgYSBjZXJ0YWluIHRpbWUgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBkYXRlIGVudHJvcHkgd2l0aG91dCBzYWNyaWZpY2luZyB1bmlxdWVuZXNzLlxuLy8gVGhpcyBudW1iZXIgc2hvdWxkIGJlIHVwZGF0ZWQgZXZlcnkgeWVhciBvciBzbyB0byBrZWVwIHRoZSBnZW5lcmF0ZWQgaWQgc2hvcnQuXG4vLyBUbyByZWdlbmVyYXRlIGBuZXcgRGF0ZSgpIC0gMGAgYW5kIGJ1bXAgdGhlIHZlcnNpb24uIEFsd2F5cyBidW1wIHRoZSB2ZXJzaW9uIVxudmFyIFJFRFVDRV9USU1FID0gMTQ1OTcwNzYwNjUxODtcblxuLy8gZG9uJ3QgY2hhbmdlIHVubGVzcyB3ZSBjaGFuZ2UgdGhlIGFsZ29zIG9yIFJFRFVDRV9USU1FXG4vLyBtdXN0IGJlIGFuIGludGVnZXIgYW5kIGxlc3MgdGhhbiAxNlxudmFyIHZlcnNpb24gPSA2O1xuXG4vLyBpZiB5b3UgYXJlIHVzaW5nIGNsdXN0ZXIgb3IgbXVsdGlwbGUgc2VydmVycyB1c2UgdGhpcyB0byBtYWtlIGVhY2ggaW5zdGFuY2Vcbi8vIGhhcyBhIHVuaXF1ZSB2YWx1ZSBmb3Igd29ya2VyXG4vLyBOb3RlOiBJIGRvbid0IGtub3cgaWYgdGhpcyBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIHVzaW5nIHRoaXJkXG4vLyBwYXJ0eSBjbHVzdGVyIHNvbHV0aW9ucyBzdWNoIGFzIHBtMi5cbnZhciBjbHVzdGVyV29ya2VySWQgPSByZXF1aXJlKCcuL3V0aWwvY2x1c3Rlci13b3JrZXItaWQnKSB8fCAwO1xuXG4vLyBDb3VudGVyIGlzIHVzZWQgd2hlbiBzaG9ydGlkIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBpbiBvbmUgc2Vjb25kLlxudmFyIGNvdW50ZXI7XG5cbi8vIFJlbWVtYmVyIHRoZSBsYXN0IHRpbWUgc2hvcnRpZCB3YXMgY2FsbGVkIGluIGNhc2UgY291bnRlciBpcyBuZWVkZWQuXG52YXIgcHJldmlvdXNTZWNvbmRzO1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBpZFxuICogUmV0dXJucyBzdHJpbmcgaWRcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG5cbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSBSRURVQ0VfVElNRSkgKiAwLjAwMSk7XG5cbiAgICBpZiAoc2Vjb25kcyA9PT0gcHJldmlvdXNTZWNvbmRzKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgcHJldmlvdXNTZWNvbmRzID0gc2Vjb25kcztcbiAgICB9XG5cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCB2ZXJzaW9uKTtcbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjbHVzdGVyV29ya2VySWQpO1xuICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBjb3VudGVyKTtcbiAgICB9XG4gICAgc3RyID0gc3RyICsgZW5jb2RlKGFscGhhYmV0Lmxvb2t1cCwgc2Vjb25kcyk7XG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5cbi8qKlxuICogU2V0IHRoZSBzZWVkLlxuICogSGlnaGx5IHJlY29tbWVuZGVkIGlmIHlvdSBkb24ndCB3YW50IHBlb3BsZSB0byB0cnkgdG8gZmlndXJlIG91dCB5b3VyIGlkIHNjaGVtYS5cbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC5zZWVkKGludClcbiAqIEBwYXJhbSBzZWVkIEludGVnZXIgdmFsdWUgdG8gc2VlZCB0aGUgcmFuZG9tIGFscGhhYmV0LiAgQUxXQVlTIFVTRSBUSEUgU0FNRSBTRUVEIG9yIHlvdSBtaWdodCBnZXQgb3ZlcmxhcHMuXG4gKi9cbmZ1bmN0aW9uIHNlZWQoc2VlZFZhbHVlKSB7XG4gICAgYWxwaGFiZXQuc2VlZChzZWVkVmFsdWUpO1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNsdXN0ZXIgd29ya2VyIG9yIG1hY2hpbmUgaWRcbiAqIGV4cG9zZWQgYXMgc2hvcnRpZC53b3JrZXIoaW50KVxuICogQHBhcmFtIHdvcmtlcklkIHdvcmtlciBtdXN0IGJlIHBvc2l0aXZlIGludGVnZXIuICBOdW1iZXIgbGVzcyB0aGFuIDE2IGlzIHJlY29tbWVuZGVkLlxuICogcmV0dXJucyBzaG9ydGlkIG1vZHVsZSBzbyBpdCBjYW4gYmUgY2hhaW5lZC5cbiAqL1xuZnVuY3Rpb24gd29ya2VyKHdvcmtlcklkKSB7XG4gICAgY2x1c3RlcldvcmtlcklkID0gd29ya2VySWQ7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqXG4gKiBzZXRzIG5ldyBjaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgYWxwaGFiZXRcbiAqIHJldHVybnMgdGhlIHNodWZmbGVkIGFscGhhYmV0XG4gKi9cbmZ1bmN0aW9uIGNoYXJhY3RlcnMobmV3Q2hhcmFjdGVycykge1xuICAgIGlmIChuZXdDaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxwaGFiZXQuY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbn1cblxuXG4vLyBFeHBvcnQgYWxsIG90aGVyIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBnZW5lcmF0ZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG5tb2R1bGUuZXhwb3J0cy5zZWVkID0gc2VlZDtcbm1vZHVsZS5leHBvcnRzLndvcmtlciA9IHdvcmtlcjtcbm1vZHVsZS5leHBvcnRzLmNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzO1xubW9kdWxlLmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xubW9kdWxlLmV4cG9ydHMuaXNWYWxpZCA9IGlzVmFsaWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmFuZG9tRnJvbVNlZWQgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tZnJvbS1zZWVkJyk7XG5cbnZhciBPUklHSU5BTCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8tJztcbnZhciBhbHBoYWJldDtcbnZhciBwcmV2aW91c1NlZWQ7XG5cbnZhciBzaHVmZmxlZDtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgc2h1ZmZsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgaWYgKCFfYWxwaGFiZXRfKSB7XG4gICAgICAgIGlmIChhbHBoYWJldCAhPT0gT1JJR0lOQUwpIHtcbiAgICAgICAgICAgIGFscGhhYmV0ID0gT1JJR0lOQUw7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoX2FscGhhYmV0XyA9PT0gYWxwaGFiZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfLmxlbmd0aCAhPT0gT1JJR0lOQUwubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ3VzdG9tIGFscGhhYmV0IGZvciBzaG9ydGlkIG11c3QgYmUgJyArIE9SSUdJTkFMLmxlbmd0aCArICcgdW5pcXVlIGNoYXJhY3RlcnMuIFlvdSBzdWJtaXR0ZWQgJyArIF9hbHBoYWJldF8ubGVuZ3RoICsgJyBjaGFyYWN0ZXJzOiAnICsgX2FscGhhYmV0Xyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaXF1ZSA9IF9hbHBoYWJldF8uc3BsaXQoJycpLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmQsIGFycil7XG4gICAgICAgcmV0dXJuIGluZCAhPT0gYXJyLmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuaXF1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gVGhlc2UgY2hhcmFjdGVycyB3ZXJlIG5vdCB1bmlxdWU6ICcgKyB1bmlxdWUuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYWxwaGFiZXQgPSBfYWxwaGFiZXRfO1xuICAgIHJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGNoYXJhY3RlcnMoX2FscGhhYmV0Xykge1xuICAgIHNldENoYXJhY3RlcnMoX2FscGhhYmV0Xyk7XG4gICAgcmV0dXJuIGFscGhhYmV0O1xufVxuXG5mdW5jdGlvbiBzZXRTZWVkKHNlZWQpIHtcbiAgICByYW5kb21Gcm9tU2VlZC5zZWVkKHNlZWQpO1xuICAgIGlmIChwcmV2aW91c1NlZWQgIT09IHNlZWQpIHtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcHJldmlvdXNTZWVkID0gc2VlZDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoKSB7XG4gICAgaWYgKCFhbHBoYWJldCkge1xuICAgICAgICBzZXRDaGFyYWN0ZXJzKE9SSUdJTkFMKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlQXJyYXkgPSBhbHBoYWJldC5zcGxpdCgnJyk7XG4gICAgdmFyIHRhcmdldEFycmF5ID0gW107XG4gICAgdmFyIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICB2YXIgY2hhcmFjdGVySW5kZXg7XG5cbiAgICB3aGlsZSAoc291cmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICByID0gcmFuZG9tRnJvbVNlZWQubmV4dFZhbHVlKCk7XG4gICAgICAgIGNoYXJhY3RlckluZGV4ID0gTWF0aC5mbG9vcihyICogc291cmNlQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgdGFyZ2V0QXJyYXkucHVzaChzb3VyY2VBcnJheS5zcGxpY2UoY2hhcmFjdGVySW5kZXgsIDEpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEFycmF5LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBnZXRTaHVmZmxlZCgpIHtcbiAgICBpZiAoc2h1ZmZsZWQpIHtcbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH1cbiAgICBzaHVmZmxlZCA9IHNodWZmbGUoKTtcbiAgICByZXR1cm4gc2h1ZmZsZWQ7XG59XG5cbi8qKlxuICogbG9va3VwIHNodWZmbGVkIGxldHRlclxuICogQHBhcmFtIGluZGV4XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rdXAoaW5kZXgpIHtcbiAgICB2YXIgYWxwaGFiZXRTaHVmZmxlZCA9IGdldFNodWZmbGVkKCk7XG4gICAgcmV0dXJuIGFscGhhYmV0U2h1ZmZsZWRbaW5kZXhdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgIHNlZWQ6IHNldFNlZWQsXG4gICAgbG9va3VwOiBsb29rdXAsXG4gICAgc2h1ZmZsZWQ6IGdldFNodWZmbGVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9hbHBoYWJldC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLy8gRm91bmQgdGhpcyBzZWVkLWJhc2VkIHJhbmRvbSBnZW5lcmF0b3Igc29tZXdoZXJlXG4vLyBCYXNlZCBvbiBUaGUgQ2VudHJhbCBSYW5kb21pemVyIDEuMyAoQykgMTk5NyBieSBQYXVsIEhvdWxlIChob3VsZUBtc2MuY29ybmVsbC5lZHUpXG5cbnZhciBzZWVkID0gMTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc2VlZFxuICogQHBhcmFtIHNlZWRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE5leHRWYWx1ZSgpIHtcbiAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgIHJldHVybiBzZWVkLygyMzMyODAuMCk7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoX3NlZWRfKSB7XG4gICAgc2VlZCA9IF9zZWVkXztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV4dFZhbHVlOiBnZXROZXh0VmFsdWUsXG4gICAgc2VlZDogc2V0U2VlZFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlID0gcmVxdWlyZSgnLi9yYW5kb20vcmFuZG9tLWJ5dGUnKTtcblxuZnVuY3Rpb24gZW5jb2RlKGxvb2t1cCwgbnVtYmVyKSB7XG4gICAgdmFyIGxvb3BDb3VudGVyID0gMDtcbiAgICB2YXIgZG9uZTtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICBzdHIgPSBzdHIgKyBsb29rdXAoICggKG51bWJlciA+PiAoNCAqIGxvb3BDb3VudGVyKSkgJiAweDBmICkgfCByYW5kb21CeXRlKCkgKTtcbiAgICAgICAgZG9uZSA9IG51bWJlciA8IChNYXRoLnBvdygxNiwgbG9vcENvdW50ZXIgKyAxICkgKTtcbiAgICAgICAgbG9vcENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyeXB0byA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmICh3aW5kb3cuY3J5cHRvIHx8IHdpbmRvdy5tc0NyeXB0byk7IC8vIElFIDExIHVzZXMgd2luZG93Lm1zQ3J5cHRvXG5cbmZ1bmN0aW9uIHJhbmRvbUJ5dGUoKSB7XG4gICAgaWYgKCFjcnlwdG8gfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikgJiAweDMwO1xuICAgIH1cbiAgICB2YXIgZGVzdCA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGVzdCk7XG4gICAgcmV0dXJuIGRlc3RbMF0gJiAweDMwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldCcpO1xuXG4vKipcbiAqIERlY29kZSB0aGUgaWQgdG8gZ2V0IHRoZSB2ZXJzaW9uIGFuZCB3b3JrZXJcbiAqIE1haW5seSBmb3IgZGVidWdnaW5nIGFuZCB0ZXN0aW5nLlxuICogQHBhcmFtIGlkIC0gdGhlIHNob3J0aWQtZ2VuZXJhdGVkIGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoaWQpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LnNodWZmbGVkKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVyc2lvbjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigwLCAxKSkgJiAweDBmLFxuICAgICAgICB3b3JrZXI6IGNoYXJhY3RlcnMuaW5kZXhPZihpZC5zdWJzdHIoMSwgMSkpICYgMHgwZlxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9kZWNvZGUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbmZ1bmN0aW9uIGlzU2hvcnRJZChpZCkge1xuICAgIGlmICghaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCBpZC5sZW5ndGggPCA2ICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJhY3RlcnMgPSBhbHBoYWJldC5jaGFyYWN0ZXJzKCk7XG4gICAgdmFyIGxlbiA9IGlkLmxlbmd0aDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICBpZiAoY2hhcmFjdGVycy5pbmRleE9mKGlkW2ldKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Nob3J0SWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2lzLXZhbGlkLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL3V0aWwvY2x1c3Rlci13b3JrZXItaWQtYnJvd3Nlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=