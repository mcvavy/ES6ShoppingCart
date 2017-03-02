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
	
	            var el = document.getElementById("product-add-button");
	            debugger;
	
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
	
	                //save productList to Local Storage
	                localStorage.setItem("products", JSON.stringify(_product.productList));
	                console.log(_product.productList);
	
	                //display product on the page
	                _this.displayProducts();
	                //document.getElementById("model-dismiss").click(false);
	            });
	        }
	    }, {
	        key: 'displayProducts',
	        value: function displayProducts() {
	            var proListContainer = document.getElementById("container-product-list");
	            //proListContainer.innerHTML = "";
	            debugger;
	
	            var productLists = JSON.parse(localStorage.getItem("products"));
	
	            console.log(productLists);
	
	            if (!productLists) productLists = [];else {
	                productLists.forEach(function (item, position) {
	                    var liEl = createElement("li", "product-list-element"),
	                        productParentDiv = createElement("div", "productParentDiv"),
	
	                    //productImageDiv = createElement("div", "productImageDiv"),
	                    productPriceDiv = createElement("div", "productPriceDiv");
	                    //prodimg = createElement("img", "product-image");
	
	                    //prodimg.src = item.imageUrl;
	
	                    liEl.id = position;
	
	                    productPriceDiv.innerHTML = '<ul class="product-details-style">\n                    <li><span><h3>' + item.name + '</h3></span></li>\n                     <li><img class="product-image" src=' + item.imgUrl + '></li>\n                    <li><span>Price:</span><span>$' + item.price + '</span></li>\n                    ' + (item.quantity > 0 ? "<li><span>In Stock</span></li>" : "<li><span>Out of stock</span></li>") + '\n                    <li><button class="btn btn-success">Add to basket</button></li>\n                </ul>\n                ';
	
	                    productParentDiv.appendChild(productPriceDiv);
	                    liEl.appendChild(productParentDiv);
	                    proListContainer.appendChild(liEl);
	                });
	            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTMzYjRjYzk2OTcwYjc2OTMwN2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9DYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanMiXSwibmFtZXMiOlsiZGlzcGxheUNhcnRJdGVtcyIsImRpc3BsYXlQcm9kdWN0cyIsInNldFVwRXZlbnRMaXN0ZW5lcnMiLCJDb250cm9sbGVyIiwiZGlzcGxheUNhcnRJdGVtIiwic2V0VXBFdmVudGlzdGVuZXIiLCJjb250cm9sbGVyIiwiVmlldyIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9kbmFtZSIsInZhbHVlIiwicHJpY2UiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwicmF0aW5nIiwicXVhbnRpdHkiLCJkaXNjb3VudCIsImltYWdlVXJsIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInByb0xpc3RDb250YWluZXIiLCJwcm9kdWN0TGlzdHMiLCJwYXJzZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwiaXRlbSIsInBvc2l0aW9uIiwibGlFbCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9kdWN0UGFyZW50RGl2IiwicHJvZHVjdFByaWNlRGl2IiwiaWQiLCJpbm5lckhUTUwiLCJuYW1lIiwiaW1nVXJsIiwiYXBwZW5kQ2hpbGQiLCJzcGxpdGFyciIsInRvdGFsUHJpY2UiLCJ0b1N0cmluZyIsInNwbGl0IiwicmVwbGFjZSIsInRvdGFsSXRlbSIsIml0ZW1zIiwiaXRlbUxpc3QiLCJ0b0ZpeGVkIiwiZWxlbWVudE5hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImVsZW1lbnQiLCJ2aWV3IiwiQ2FydCIsInNwbGljZSIsImxlbmd0aCIsInJlZHVjZSIsInN1bSIsImIiLCJjYXJ0IiwicHJvZHVjdERhdGEiLCJwaWQiLCJyZXF1aXJlIiwiUHJvZHVjdCIsImNvbW1lbnRzIiwiSWQiLCJnZW5lcmF0ZSIsInByb2R1Y3RMaXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFscGhhYmV0IiwiZW5jb2RlIiwiZGVjb2RlIiwiaXNWYWxpZCIsIlJFRFVDRV9USU1FIiwidmVyc2lvbiIsImNsdXN0ZXJXb3JrZXJJZCIsImNvdW50ZXIiLCJwcmV2aW91c1NlY29uZHMiLCJzdHIiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImxvb2t1cCIsInNlZWQiLCJzZWVkVmFsdWUiLCJ3b3JrZXIiLCJ3b3JrZXJJZCIsImNoYXJhY3RlcnMiLCJuZXdDaGFyYWN0ZXJzIiwidW5kZWZpbmVkIiwic2h1ZmZsZWQiLCJyYW5kb21Gcm9tU2VlZCIsIk9SSUdJTkFMIiwicHJldmlvdXNTZWVkIiwicmVzZXQiLCJzZXRDaGFyYWN0ZXJzIiwiX2FscGhhYmV0XyIsIkVycm9yIiwidW5pcXVlIiwiZmlsdGVyIiwiaW5kIiwiYXJyIiwibGFzdEluZGV4T2YiLCJqb2luIiwic2V0U2VlZCIsInNodWZmbGUiLCJzb3VyY2VBcnJheSIsInRhcmdldEFycmF5IiwiciIsIm5leHRWYWx1ZSIsImNoYXJhY3RlckluZGV4IiwiZ2V0U2h1ZmZsZWQiLCJpbmRleCIsImFscGhhYmV0U2h1ZmZsZWQiLCJnZXROZXh0VmFsdWUiLCJfc2VlZF8iLCJyYW5kb21CeXRlIiwibnVtYmVyIiwibG9vcENvdW50ZXIiLCJkb25lIiwicG93IiwiY3J5cHRvIiwid2luZG93IiwibXNDcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJyYW5kb20iLCJkZXN0IiwiVWludDhBcnJheSIsImluZGV4T2YiLCJzdWJzdHIiLCJpc1Nob3J0SWQiLCJsZW4iLCJpIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBLHdCQUFXQSxnQkFBWDtBQUNBLHdCQUFXQyxlQUFYO0FBQ0Esd0JBQVdDLG1CQUFYOztBQUtBO0FBQ0E7QUFDQTtBQUNBLDZGOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7OztLQUVNQyxVOzs7Ozs7OzRDQUNnQjtBQUNkLHdCQUFLQyxlQUFMO0FBQ0g7OzsrQ0FFb0I7QUFDakIsd0JBQUtDLGlCQUFMO0FBQ0g7OzsyQ0FFZ0I7QUFDYix3QkFBS0osZUFBTDtBQUNIOzs7Ozs7QUFHRSxLQUFJSyxrQ0FBYSxJQUFJSCxVQUFKLEVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDs7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QixJQUFpQ0EsR0FBR3FCLE1BQUgsR0FBWSxDQUFqRCxFQUFxRDtBQUNqRCxnQkFBTyxLQUFQO0FBQ0g7O0FBRUQsU0FBSW1DLGFBQWFwQixTQUFTb0IsVUFBVCxFQUFqQjtBQUNBLFNBQUk0QyxNQUFNcEcsR0FBR3FCLE1BQWI7QUFDQSxVQUFJLElBQUlnRixJQUFJLENBQVosRUFBZUEsSUFBSUQsR0FBbkIsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3hCLGFBQUk3QyxXQUFXeUMsT0FBWCxDQUFtQmpHLEdBQUdxRyxDQUFILENBQW5CLE1BQThCLENBQUMsQ0FBbkMsRUFBc0M7QUFDbEMsb0JBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRCxZQUFPLElBQVA7QUFDSDs7QUFFRG5FLFFBQU9DLE9BQVAsR0FBaUJnRSxTQUFqQixDOzs7Ozs7QUNsQkE7O0FBRUFqRSxRQUFPQyxPQUFQLEdBQWlCLENBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTMzYjRjYzk2OTcwYjc2OTMwN2QiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xyXG5cclxuLy9sZXQgY2FydE9iamVjdCA9IG5ldyBDYXJ0KCk7XHJcblxyXG5jb250cm9sbGVyLmRpc3BsYXlDYXJ0SXRlbXMoKTtcclxuY29udHJvbGxlci5kaXNwbGF5UHJvZHVjdHMoKTtcclxuY29udHJvbGxlci5zZXRVcEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgSXRlbSBwcmljZSBpcyAke2NhcnRPYmplY3QudG90YWxQcmljZSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgaXRlbSBpbiBjYXJ0IGlzOiAke2NhcnRPYmplY3QudG90YWxJdGVtKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBkaXNjb3VudCBwcmljZSBpcyAke2NhcnRPYmplY3QudG90YWxEaXNjb3VudFByaWNlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBwcmljZSB3aXRob3V0IGRpc2NvdW50IGlzICR7Y2FydE9iamVjdC50b3RhbFByaWNlV2l0aG91dERpc2NvdW50KCl9YCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCJpbXBvcnQge3ZpZXcgYXMgVmlld30gZnJvbSAnLi4vdmlldy92aWV3JztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXJ7XHJcbiAgICBkaXNwbGF5Q2FydEl0ZW1zKCl7XHJcbiAgICAgICAgVmlldy5kaXNwbGF5Q2FydEl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgVmlldy5zZXRVcEV2ZW50aXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQcm9kdWN0cygpe1xyXG4gICAgICAgIFZpZXcuZGlzcGxheVByb2R1Y3RzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsImltcG9ydCB7IGNhcnQgYXMgQ2FydCB9IGZyb20gJy4uL21vZGVscy9DYXJ0JztcclxuaW1wb3J0IHsgUHJvZHVjdCwgcHJvZHVjdExpc3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRVcEV2ZW50aXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtYWRkLWJ1dHRvblwiKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9kbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdG5hbWVcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2VcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICByYXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGluZ1wiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWFudGl0eVwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjb3VudFwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVVybFwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vKG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHksIGNvbW1lbnRzLCBkaXNjb3VudClcclxuICAgICAgICAgICAgcHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChwcm9kbmFtZSwgcHJpY2UsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgcmF0aW5nLCBxdWFudGl0eSwgW10sIGRpc2NvdW50LCBpbWFnZVVybCkpO1xyXG5cclxuICAgICAgICAgICAgLy9zYXZlIHByb2R1Y3RMaXN0IHRvIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0TGlzdCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdCk7XHJcblxyXG4gICAgICAgICAgICAvL2Rpc3BsYXkgcHJvZHVjdCBvbiB0aGUgcGFnZVxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kZWwtZGlzbWlzc1wiKS5jbGljayhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgbGV0IHByb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lci1wcm9kdWN0LWxpc3RcIik7XHJcbiAgICAgICAgLy9wcm9MaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcblxyXG4gICAgICAgIGxldCBwcm9kdWN0TGlzdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvZHVjdHNcIikpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdHMpO1xyXG5cclxuICAgICAgICBpZiAoIXByb2R1Y3RMaXN0cykgcHJvZHVjdExpc3RzID0gW107XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0cy5mb3JFYWNoKChpdGVtLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpRWwgPSBjcmVhdGVFbGVtZW50KFwibGlcIixcInByb2R1Y3QtbGlzdC1lbGVtZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQYXJlbnREaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvZHVjdFBhcmVudERpdlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAvL3Byb2R1Y3RJbWFnZURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9kdWN0SW1hZ2VEaXZcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2R1Y3RQcmljZURpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3Byb2RpbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwicHJvZHVjdC1pbWFnZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3Byb2RpbWcuc3JjID0gaXRlbS5pbWFnZVVybDtcclxuXHJcbiAgICAgICAgICAgICAgICBsaUVsLmlkID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlRGl2LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgYDx1bCBjbGFzcz1cInByb2R1Y3QtZGV0YWlscy1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj48aDM+JHtpdGVtLm5hbWV9PC9oMz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCIgc3JjPSR7aXRlbS5pbWdVcmx9PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPlByaWNlOjwvc3Bhbj48c3Bhbj5cXCQke2l0ZW0ucHJpY2V9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5xdWFudGl0eSA+IDApID8gXCI8bGk+PHNwYW4+SW4gU3RvY2s8L3NwYW4+PC9saT5cIiA6IFwiPGxpPjxzcGFuPk91dCBvZiBzdG9jazwvc3Bhbj48L2xpPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+QWRkIHRvIGJhc2tldDwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UGFyZW50RGl2LmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZURpdik7XHJcbiAgICAgICAgICAgICAgICBsaUVsLmFwcGVuZENoaWxkKHByb2R1Y3RQYXJlbnREaXYpO1xyXG4gICAgICAgICAgICAgICAgcHJvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaUVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlDYXJ0SXRlbSgpIHtcclxuICAgICAgICAvL2Rpc3BsYXkgdG90YWwgaXRlbSBwcmljZVxyXG4gICAgICAgIGxldCBzcGxpdGFyciA9IChDYXJ0LnRvdGFsUHJpY2UoKSAhPT0gMCkgPyBDYXJ0LnRvdGFsUHJpY2UoKS50b1N0cmluZygpLnNwbGl0KCcuJykgOiBbXCIwXCIsIFwiMDBcIl07XHJcbiAgICAgICAgc3BsaXRhcnJbMF0gPSBzcGxpdGFyclswXS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csIFwiJDEsXCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5QcmljZVwiKS5pbm5lckhUTUwgPSBgXFwkJHtzcGxpdGFyclswXX08c3VwPi4ke3NwbGl0YXJyWzFdfSYjMTYyOzwvc3VwPmA7XHJcblxyXG4gICAgICAgIC8vZGlzcGxheSB0b3RhbCBpdGVtIGluIGJhc2tldFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFneVwiKS5pbm5lckhUTUwgPSBDYXJ0LnRvdGFsSXRlbSgpO1xyXG5cclxuICAgICAgICAvL0xvb3AgYW5kIGRpc2xheSBDYXJ0IGl0ZW1zIGluIGEgbGlzdFxyXG4gICAgICAgIENhcnQuaXRlbXMuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1MaXN0ID0gY3JlYXRlRWxlbWVudChcImxpXCIsIFwiY2FydC1pdGVtXCIpO1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5pbm5lckhUTUwgPSBgJHtpdGVtLnF1YW50aXR5fSB4ICR7aXRlbS5uYW1lfSA8c3BhbiBjbGFzcz1cImNhcnQtaXRlbS1wcmljZVwiPj0gXFwkJHsoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLnRvRml4ZWQoMil9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1pdGVtc1wiKS5hcHBlbmRDaGlsZChpdGVtTGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnROYW1lLCBjbGFzc05hbWUgPSBcIm5hXCIsIHN0eWxlID0gXCJuYVwiLCBpbm5lckhUTUwgPSBcIm5hXCIpID0+IHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XHJcblxyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gXCJuYVwiKSBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcclxuXHJcbiAgICBpZiAoc3R5bGUgIT09IFwibmFcIikgZWxlbWVudC5zdHlsZSA9IHN0eWxlO1xyXG5cclxuICAgIGlmIChpbm5lckhUTUwgIT09IFwibmFcIikgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCB2aWV3ID0gbmV3IFZpZXcoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy92aWV3LmpzIiwiaW1wb3J0IHsgcHJvZHVjdERhdGEgfSBmcm9tICcuL3Byb2R1Y3REYXRhJztcclxuXHJcbmNsYXNzIENhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHByb2R1Y3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsSXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaXRlbXMubGVuZ3RoPjApID8gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgMSwgMCk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxEaXNjb3VudFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi5kaXNjb3VudCAhPT0gJycpID8gKChiLmRpc2NvdW50IC8gMTAwKSAqIGIucHJpY2UpIDogMC4wMCwgMC4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pdGVtcy5sZW5ndGg+IDApID8gKHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIChiLmRpc2NvdW50ID4gMCAmJiBiLmRpc2NvdW50ICE9PSAnJykgPyAoYi5wcmljZSAtIChiLmRpc2NvdW50ICogYi5wcmljZSkgLyAxMDApIDogYi5wcmljZSwgMC4wMCkudG9GaXhlZCgyKSkgOiAwLjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsUHJpY2VXaXRob3V0RGlzY291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIChiLnByaWNlICE9PSAnJykgPyBiLnByaWNlIDogMC4wMCwgMC4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBjYXJ0ID0gbmV3IENhcnQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL0NhcnQuanMiLCJleHBvcnQgY29uc3QgcHJvZHVjdERhdGEgPSBbe1xyXG4gIFwiaWRcIjogMSxcclxuICBcIm5hbWVcIjogXCJMYWMtQnJvbWVcIixcclxuICBcInByaWNlXCI6IDU4NzEuOTcsXHJcbiAgXCJkaXNjb3VudFwiOiA1MSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2FuYWRhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAxNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDIsXHJcbiAgXCJuYW1lXCI6IFwiTG9uZ3F1YW5cIixcclxuICBcInByaWNlXCI6IDE1MDI5Ljg1LFxyXG4gIFwiZGlzY291bnRcIjogNzQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAzMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMsXHJcbiAgXCJuYW1lXCI6IFwiU2tlbGxlZnRlaGFtblwiLFxyXG4gIFwicHJpY2VcIjogMTAyNS45NyxcclxuICBcImRpc2NvdW50XCI6IDc3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTd2VkZW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDI3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0LFxyXG4gIFwibmFtZVwiOiBcIkthcmVtYVwiLFxyXG4gIFwicHJpY2VcIjogNTIyMC45OCxcclxuICBcImRpc2NvdW50XCI6IDgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlRhbnphbmlhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIGFjIGVzdCBsYWNpbmlhIG5pc2kgdmVuZW5hdGlzIHRyaXN0aXF1ZS4gRnVzY2UgY29uZ3VlLCBkaWFtIGlkIG9ybmFyZSBpbXBlcmRpZXQsIHNhcGllbiB1cm5hIHByZXRpdW0gbmlzbCwgdXQgdm9sdXRwYXQgc2FwaWVuIGFyY3Ugc2VkIGF1Z3VlLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUsXHJcbiAgXCJuYW1lXCI6IFwiU2hpamlhb1wiLFxyXG4gIFwicHJpY2VcIjogODM2NS43LFxyXG4gIFwiZGlzY291bnRcIjogNTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYsXHJcbiAgXCJuYW1lXCI6IFwiTGl1ZHVcIixcclxuICBcInByaWNlXCI6IDI4OTQuNTIsXHJcbiAgXCJkaXNjb3VudFwiOiA2MSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMzUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3LFxyXG4gIFwibmFtZVwiOiBcIkJ1a2JhdGFuZ1wiLFxyXG4gIFwicHJpY2VcIjogMTYzMzQuNjcsXHJcbiAgXCJkaXNjb3VudFwiOiA4MCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDgsXHJcbiAgXCJuYW1lXCI6IFwiSmlucGluZ1wiLFxyXG4gIFwicHJpY2VcIjogMTkxMzIuNDksXHJcbiAgXCJkaXNjb3VudFwiOiA0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMjcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5LFxyXG4gIFwibmFtZVwiOiBcIkJvam9uZ2FyZW5cIixcclxuICBcInByaWNlXCI6IDExMDUuNjgsXHJcbiAgXCJkaXNjb3VudFwiOiAyNixcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDMyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxMCxcclxuICBcIm5hbWVcIjogXCJaYXJhemFcIixcclxuICBcInByaWNlXCI6IDE3NzMzLjc5LFxyXG4gIFwiZGlzY291bnRcIjogNTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlZlbmV6dWVsYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDExLFxyXG4gIFwibmFtZVwiOiBcIkNpc2V3dVwiLFxyXG4gIFwicHJpY2VcIjogNDE0My44MixcclxuICBcImRpc2NvdW50XCI6IDMzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDE5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxMixcclxuICBcIm5hbWVcIjogXCJTYW50byBOacOxb1wiLFxyXG4gIFwicHJpY2VcIjogOTk4OC4xOCxcclxuICBcImRpc2NvdW50XCI6IDY2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogNDIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTMsXHJcbiAgXCJuYW1lXCI6IFwiTmVpYmFcIixcclxuICBcInByaWNlXCI6IDEzNDguMzQsXHJcbiAgXCJkaXNjb3VudFwiOiAxMixcclxuICBcImNhdGVnb3J5XCI6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDIxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE0LFxyXG4gIFwibmFtZVwiOiBcIsOJdm9yYVwiLFxyXG4gIFwicHJpY2VcIjogNjMxLjA2LFxyXG4gIFwiZGlzY291bnRcIjogNjcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAzNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxNSxcclxuICBcIm5hbWVcIjogXCJUaHVuXCIsXHJcbiAgXCJwcmljZVwiOiAxNTUyMy4wNSxcclxuICBcImRpc2NvdW50XCI6IDI2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTd2l0emVybGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDIyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE2LFxyXG4gIFwibmFtZVwiOiBcIkplcGF0IEtpZHVsXCIsXHJcbiAgXCJwcmljZVwiOiA5NTAwLjM1LFxyXG4gIFwiZGlzY291bnRcIjogMjQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDQ2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxNyxcclxuICBcIm5hbWVcIjogXCJNYWNyb29tXCIsXHJcbiAgXCJwcmljZVwiOiAxMTk2Mi4xNSxcclxuICBcImRpc2NvdW50XCI6IDc5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJcmVsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMjMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE4LFxyXG4gIFwibmFtZVwiOiBcIkJhZmF0w6FcIixcclxuICBcInByaWNlXCI6IDE4NjYxLjA4LFxyXG4gIFwiZGlzY291bnRcIjogNjAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkd1aW5lYS1CaXNzYXVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAzNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE5LFxyXG4gIFwibmFtZVwiOiBcIlBlbWJyb2tlXCIsXHJcbiAgXCJwcmljZVwiOiAxNzAwNy42MyxcclxuICBcImRpc2NvdW50XCI6IDQ4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJNYWx0YVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNDcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyMCxcclxuICBcIm5hbWVcIjogXCJOYXN0b2xhXCIsXHJcbiAgXCJwcmljZVwiOiAxNzk0Ny40NSxcclxuICBcImRpc2NvdW50XCI6IDE3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJGaW5sYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDIxLFxyXG4gIFwibmFtZVwiOiBcIk92aWVkb1wiLFxyXG4gIFwicHJpY2VcIjogMTA5Ny45NyxcclxuICBcImRpc2NvdW50XCI6IDQ4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJEb21pbmljYW4gUmVwdWJsaWNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjIsXHJcbiAgXCJuYW1lXCI6IFwiQ2F0YW5kdXZhXCIsXHJcbiAgXCJwcmljZVwiOiAxNTYxOS42NyxcclxuICBcImRpc2NvdW50XCI6IDEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyMyxcclxuICBcIm5hbWVcIjogXCJKaWFsdVwiLFxyXG4gIFwicHJpY2VcIjogMTIzNjUuODgsXHJcbiAgXCJkaXNjb3VudFwiOiAxMSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMzMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgaWQganVzdG8gc2l0IGFtZXQgc2FwaWVuIGRpZ25pc3NpbSB2ZXN0aWJ1bHVtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZGFwaWJ1cyBkb2xvciB2ZWwgZXN0LiBEb25lYyBvZGlvIGp1c3RvLCBzb2xsaWNpdHVkaW4gdXQsIHN1c2NpcGl0IGEsIGZldWdpYXQgZXQsIGVyb3MuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI0LFxyXG4gIFwibmFtZVwiOiBcIkNoaXRvc2VcIixcclxuICBcInByaWNlXCI6IDY1MDUuNzMsXHJcbiAgXCJkaXNjb3VudFwiOiA5MCxcclxuICBcImNhdGVnb3J5XCI6IFwiSmFwYW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI1LFxyXG4gIFwibmFtZVwiOiBcIkxvZ3Jvw7FvXCIsXHJcbiAgXCJwcmljZVwiOiAxNTAwNi42OSxcclxuICBcImRpc2NvdW50XCI6IDM3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTcGFpblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNDAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBzaXQgYW1ldCBlcmF0LiBOdWxsYSB0ZW1wdXMuIFZpdmFtdXMgaW4gZmVsaXMgZXUgc2FwaWVuIGN1cnN1cyB2ZXN0aWJ1bHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjYsXHJcbiAgXCJuYW1lXCI6IFwiRGFzaHRhdmFuXCIsXHJcbiAgXCJwcmljZVwiOiAxNzY5MC42NCxcclxuICBcImRpc2NvdW50XCI6IDYyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJBcm1lbmlhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA0OCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjcsXHJcbiAgXCJuYW1lXCI6IFwiQmFuZ29sb1wiLFxyXG4gIFwicHJpY2VcIjogMTMyMDAuMTUsXHJcbiAgXCJkaXNjb3VudFwiOiA3NCxcclxuICBcImNhdGVnb3J5XCI6IFwiSXZvcnkgQ29hc3RcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDQ1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI4LFxyXG4gIFwibmFtZVwiOiBcIkFuZG9hbnlcIixcclxuICBcInByaWNlXCI6IDE0MTI3LjU5LFxyXG4gIFwiZGlzY291bnRcIjogODEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1hZGFnYXNjYXJcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDIwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI5LFxyXG4gIFwibmFtZVwiOiBcIk1pbGxlcm92b1wiLFxyXG4gIFwicHJpY2VcIjogMTI1MDYuMCxcclxuICBcImRpc2NvdW50XCI6IDM3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMwLFxyXG4gIFwibmFtZVwiOiBcIkxhbmd1YW5cIixcclxuICBcInByaWNlXCI6IDEzNTY2LjYsXHJcbiAgXCJkaXNjb3VudFwiOiAxNyxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMTIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMxLFxyXG4gIFwibmFtZVwiOiBcIkNvbcOpXCIsXHJcbiAgXCJwcmljZVwiOiA0MjAxLjk4LFxyXG4gIFwiZGlzY291bnRcIjogODQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJlbmluXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAyOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzIsXHJcbiAgXCJuYW1lXCI6IFwiVG9yXCIsXHJcbiAgXCJwcmljZVwiOiA3OTIuMzksXHJcbiAgXCJkaXNjb3VudFwiOiAzNCxcclxuICBcImNhdGVnb3J5XCI6IFwiRWd5cHRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzMyxcclxuICBcIm5hbWVcIjogXCJNaWd1ZWzDs3BvbGlzXCIsXHJcbiAgXCJwcmljZVwiOiAxODAxOS4wNCxcclxuICBcImRpc2NvdW50XCI6IDEwMCxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM0LFxyXG4gIFwibmFtZVwiOiBcIkZvcnQgTXllcnNcIixcclxuICBcInByaWNlXCI6IDE1NDg4LjcyLFxyXG4gIFwiZGlzY291bnRcIjogODEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlVuaXRlZCBTdGF0ZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNDAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzUsXHJcbiAgXCJuYW1lXCI6IFwiQ2hlbmdiZWlcIixcclxuICBcInByaWNlXCI6IDE3NTYxLjg0LFxyXG4gIFwiZGlzY291bnRcIjogMzMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDUwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzNixcclxuICBcIm5hbWVcIjogXCJaaHVqaWFuZ1wiLFxyXG4gIFwicHJpY2VcIjogMTAzODIuMyxcclxuICBcImRpc2NvdW50XCI6IDEyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYSB1dCBlcmF0IGlkIG1hdXJpcyB2dWxwdXRhdGUgZWxlbWVudHVtLiBOdWxsYW0gdmFyaXVzLiBOdWxsYSBmYWNpbGlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM3LFxyXG4gIFwibmFtZVwiOiBcIsOJbXBvbmFzXCIsXHJcbiAgXCJwcmljZVwiOiAxMTEzNy43OCxcclxuICBcImRpc2NvdW50XCI6IDU3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJHcmVlY2VcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDQwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzgsXHJcbiAgXCJuYW1lXCI6IFwiTWVnYWxvY2jDs3Jpb25cIixcclxuICBcInByaWNlXCI6IDUxMC4zMSxcclxuICBcImRpc2NvdW50XCI6IDcyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJHcmVlY2VcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA0MyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM5LFxyXG4gIFwibmFtZVwiOiBcIkR1d2FrdGVuZ2dpXCIsXHJcbiAgXCJwcmljZVwiOiAxNzcxMS4zNixcclxuICBcImRpc2NvdW50XCI6IDg0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDM1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDAsXHJcbiAgXCJuYW1lXCI6IFwiRnJlZGVyaWtzYmVyZ1wiLFxyXG4gIFwicHJpY2VcIjogMTA3OTcuNzQsXHJcbiAgXCJkaXNjb3VudFwiOiAxMSxcclxuICBcImNhdGVnb3J5XCI6IFwiRGVubWFya1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDM4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0MSxcclxuICBcIm5hbWVcIjogXCJUaWVsXCIsXHJcbiAgXCJwcmljZVwiOiA3MTc5Ljk3LFxyXG4gIFwiZGlzY291bnRcIjogNTMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk5ldGhlcmxhbmRzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQyLFxyXG4gIFwibmFtZVwiOiBcIlBhbmRhc2FuXCIsXHJcbiAgXCJwcmljZVwiOiAxMzUzOC44NixcclxuICBcImRpc2NvdW50XCI6IDgxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDIxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDMsXHJcbiAgXCJuYW1lXCI6IFwiTGlhbnNoYW5cIixcclxuICBcInByaWNlXCI6IDE5ODc2LjE3LFxyXG4gIFwiZGlzY291bnRcIjogNzQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDI4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ0LFxyXG4gIFwibmFtZVwiOiBcIk1vbGF2ZVwiLFxyXG4gIFwicHJpY2VcIjogMTA4MzguMDMsXHJcbiAgXCJkaXNjb3VudFwiOiA3NSxcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDUsXHJcbiAgXCJuYW1lXCI6IFwiQW1wYXJpdGFcIixcclxuICBcInByaWNlXCI6IDQ3NjMuNzgsXHJcbiAgXCJkaXNjb3VudFwiOiA1OSxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA0OCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDYsXHJcbiAgXCJuYW1lXCI6IFwiTGUgSG9jaGV0XCIsXHJcbiAgXCJwcmljZVwiOiAxMzMwNi42OSxcclxuICBcImRpc2NvdW50XCI6IDU0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJNYXVyaXRpdXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMzEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ3LFxyXG4gIFwibmFtZVwiOiBcIlRo4buLIFRy4bqlbiBRdeG6v1wiLFxyXG4gIFwicHJpY2VcIjogMTE3NDMuMDMsXHJcbiAgXCJkaXNjb3VudFwiOiA1MixcclxuICBcImNhdGVnb3J5XCI6IFwiVmlldG5hbVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogNDIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ4LFxyXG4gIFwibmFtZVwiOiBcIkdhcGxva2FuXCIsXHJcbiAgXCJwcmljZVwiOiAxNjYyLjc3LFxyXG4gIFwiZGlzY291bnRcIjogMTgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ5LFxyXG4gIFwibmFtZVwiOiBcIllvaWNoaVwiLFxyXG4gIFwicHJpY2VcIjogMTM1MS42MixcclxuICBcImRpc2NvdW50XCI6IDc5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJKYXBhblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1MCxcclxuICBcIm5hbWVcIjogXCJTZWJ1a3VcIixcclxuICBcInByaWNlXCI6IDUwMTguNTEsXHJcbiAgXCJkaXNjb3VudFwiOiA3MCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDQwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUxLFxyXG4gIFwibmFtZVwiOiBcIk1haWdvXCIsXHJcbiAgXCJwcmljZVwiOiAxOTg3Ny4yNixcclxuICBcImRpc2NvdW50XCI6IDQwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1MixcclxuICBcIm5hbWVcIjogXCJSb25mZVwiLFxyXG4gIFwicHJpY2VcIjogNzA2OS44MSxcclxuICBcImRpc2NvdW50XCI6IDM2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQb3J0dWdhbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAzOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTMsXHJcbiAgXCJuYW1lXCI6IFwiJ3MtSGVydG9nZW5ib3NjaFwiLFxyXG4gIFwicHJpY2VcIjogMTYxMDkuNzEsXHJcbiAgXCJkaXNjb3VudFwiOiA0OSxcclxuICBcImNhdGVnb3J5XCI6IFwiTmV0aGVybGFuZHNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU0LFxyXG4gIFwibmFtZVwiOiBcIkx1Ym5pZXdpY2VcIixcclxuICBcInByaWNlXCI6IDEyNzAyLjUzLFxyXG4gIFwiZGlzY291bnRcIjogMzksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNDgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU1LFxyXG4gIFwibmFtZVwiOiBcIkd1bmFqYXlhXCIsXHJcbiAgXCJwcmljZVwiOiAyNDMxLjQ5LFxyXG4gIFwiZGlzY291bnRcIjogNzIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNDYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTYsXHJcbiAgXCJuYW1lXCI6IFwiQmFsb2dvXCIsXHJcbiAgXCJwcmljZVwiOiAzMzI4LjA1LFxyXG4gIFwiZGlzY291bnRcIjogNjksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDQ5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU3LFxyXG4gIFwibmFtZVwiOiBcIk5vbmcgUGhva1wiLFxyXG4gIFwicHJpY2VcIjogNTEyMi41NyxcclxuICBcImRpc2NvdW50XCI6IDM4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJUaGFpbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTgsXHJcbiAgXCJuYW1lXCI6IFwiS2F0YWd1bVwiLFxyXG4gIFwicHJpY2VcIjogNTIyLjg2LFxyXG4gIFwiZGlzY291bnRcIjogNDAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk5pZ2VyaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIGFjIGVzdCBsYWNpbmlhIG5pc2kgdmVuZW5hdGlzIHRyaXN0aXF1ZS4gRnVzY2UgY29uZ3VlLCBkaWFtIGlkIG9ybmFyZSBpbXBlcmRpZXQsIHNhcGllbiB1cm5hIHByZXRpdW0gbmlzbCwgdXQgdm9sdXRwYXQgc2FwaWVuIGFyY3Ugc2VkIGF1Z3VlLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1OSxcclxuICBcIm5hbWVcIjogXCJQYXJhZGEgZGUgVG9kZWlhXCIsXHJcbiAgXCJwcmljZVwiOiA0ODY2LjczLFxyXG4gIFwiZGlzY291bnRcIjogODEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjAsXHJcbiAgXCJuYW1lXCI6IFwiQnVsdWJyYW5nc2lcIixcclxuICBcInByaWNlXCI6IDE5MTUwLjY4LFxyXG4gIFwiZGlzY291bnRcIjogMTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2MSxcclxuICBcIm5hbWVcIjogXCJUb210ZWJvZGFcIixcclxuICBcInByaWNlXCI6IDE0NzAwLjEsXHJcbiAgXCJkaXNjb3VudFwiOiA4NixcclxuICBcImNhdGVnb3J5XCI6IFwiU3dlZGVuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMTMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYyLFxyXG4gIFwibmFtZVwiOiBcIk9zbG9tZWpcIixcclxuICBcInByaWNlXCI6IDY0OS4xOSxcclxuICBcImRpc2NvdW50XCI6IDE2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJNYWNlZG9uaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAyMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2MyxcclxuICBcIm5hbWVcIjogXCJXYW5nY2FvXCIsXHJcbiAgXCJwcmljZVwiOiA2NjU1LjQ5LFxyXG4gIFwiZGlzY291bnRcIjogMTAwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY0LFxyXG4gIFwibmFtZVwiOiBcIkthcmFuZ3BhcndhXCIsXHJcbiAgXCJwcmljZVwiOiAxNDI1Mi4xMixcclxuICBcImRpc2NvdW50XCI6IDk5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAzMCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2NSxcclxuICBcIm5hbWVcIjogXCJWYWxsZXltb3VudFwiLFxyXG4gIFwicHJpY2VcIjogNDM1Ni4zMixcclxuICBcImRpc2NvdW50XCI6IDQxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJcmVsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNDQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY2LFxyXG4gIFwibmFtZVwiOiBcIsWMbWVcIixcclxuICBcInByaWNlXCI6IDY4NTMuMyxcclxuICBcImRpc2NvdW50XCI6IDQ4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJKYXBhblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAzNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2NyxcclxuICBcIm5hbWVcIjogXCJSb2RvdMOzcGlcIixcclxuICBcInByaWNlXCI6IDEzMjUzLjYzLFxyXG4gIFwiZGlzY291bnRcIjogNjgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkdyZWVjZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMzIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY4LFxyXG4gIFwibmFtZVwiOiBcIkZhcmFwXCIsXHJcbiAgXCJwcmljZVwiOiAxODU3NS40NyxcclxuICBcImRpc2NvdW50XCI6IDc5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJUdXJrbWVuaXN0YW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY5LFxyXG4gIFwibmFtZVwiOiBcIlNoZWRva1wiLFxyXG4gIFwicHJpY2VcIjogMTE3NjguMyxcclxuICBcImRpc2NvdW50XCI6IDI5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA0MixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgaWQganVzdG8gc2l0IGFtZXQgc2FwaWVuIGRpZ25pc3NpbSB2ZXN0aWJ1bHVtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZGFwaWJ1cyBkb2xvciB2ZWwgZXN0LiBEb25lYyBvZGlvIGp1c3RvLCBzb2xsaWNpdHVkaW4gdXQsIHN1c2NpcGl0IGEsIGZldWdpYXQgZXQsIGVyb3MuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDcwLFxyXG4gIFwibmFtZVwiOiBcIkthcmxzdGFkXCIsXHJcbiAgXCJwcmljZVwiOiAzNTc0LjU1LFxyXG4gIFwiZGlzY291bnRcIjogMTUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlN3ZWRlblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDIxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIHRpbmNpZHVudCBhbnRlIHZlbCBpcHN1bS4gUHJhZXNlbnQgYmxhbmRpdCBsYWNpbmlhIGVyYXQuIFZlc3RpYnVsdW0gc2VkIG1hZ25hIGF0IG51bmMgY29tbW9kbyBwbGFjZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDcxLFxyXG4gIFwibmFtZVwiOiBcIkxhIFBhelwiLFxyXG4gIFwicHJpY2VcIjogMjYzOS4wLFxyXG4gIFwiZGlzY291bnRcIjogNzksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3MixcclxuICBcIm5hbWVcIjogXCJWxaFlc3RhcnlcIixcclxuICBcInByaWNlXCI6IDE5MDYwLjkyLFxyXG4gIFwiZGlzY291bnRcIjogODYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkN6ZWNoIFJlcHVibGljXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAzNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDczLFxyXG4gIFwibmFtZVwiOiBcIlNhYmFuZ1wiLFxyXG4gIFwicHJpY2VcIjogNTc2MS4xOSxcclxuICBcImRpc2NvdW50XCI6IDQzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc0LFxyXG4gIFwibmFtZVwiOiBcIllpZGFvXCIsXHJcbiAgXCJwcmljZVwiOiA4MDguOTgsXHJcbiAgXCJkaXNjb3VudFwiOiAzMSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMjQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzUsXHJcbiAgXCJuYW1lXCI6IFwiVGFuZ2ppYXBvXCIsXHJcbiAgXCJwcmljZVwiOiAxODU2Ny4wMixcclxuICBcImRpc2NvdW50XCI6IDQ5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3NixcclxuICBcIm5hbWVcIjogXCJNb3JhXCIsXHJcbiAgXCJwcmljZVwiOiAyODYzLjI2LFxyXG4gIFwiZGlzY291bnRcIjogNDMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlN3ZWRlblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc3LFxyXG4gIFwibmFtZVwiOiBcIkppbnNoYVwiLFxyXG4gIFwicHJpY2VcIjogMTkyNzYuNjQsXHJcbiAgXCJkaXNjb3VudFwiOiAyMyxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA0MCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc4LFxyXG4gIFwibmFtZVwiOiBcIlJlY3JlaW9cIixcclxuICBcInByaWNlXCI6IDU4MTAuNzEsXHJcbiAgXCJkaXNjb3VudFwiOiA0NCxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzksXHJcbiAgXCJuYW1lXCI6IFwiRG9tYXJ0YW5nXCIsXHJcbiAgXCJwcmljZVwiOiAxMzEzNy4zMyxcclxuICBcImRpc2NvdW50XCI6IDUxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4MCxcclxuICBcIm5hbWVcIjogXCJSaXphbFwiLFxyXG4gIFwicHJpY2VcIjogNTg2LjgzLFxyXG4gIFwiZGlzY291bnRcIjogMjIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDM5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIGFjIGVzdCBsYWNpbmlhIG5pc2kgdmVuZW5hdGlzIHRyaXN0aXF1ZS4gRnVzY2UgY29uZ3VlLCBkaWFtIGlkIG9ybmFyZSBpbXBlcmRpZXQsIHNhcGllbiB1cm5hIHByZXRpdW0gbmlzbCwgdXQgdm9sdXRwYXQgc2FwaWVuIGFyY3Ugc2VkIGF1Z3VlLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4MSxcclxuICBcIm5hbWVcIjogXCJTdGFyw6kgTcSbc3RvXCIsXHJcbiAgXCJwcmljZVwiOiA4NzQyLjQxLFxyXG4gIFwiZGlzY291bnRcIjogOCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ3plY2ggUmVwdWJsaWNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDI0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDgyLFxyXG4gIFwibmFtZVwiOiBcIlBlcnBpZ25hblwiLFxyXG4gIFwicHJpY2VcIjogMTk0NTQuMjYsXHJcbiAgXCJkaXNjb3VudFwiOiAzMixcclxuICBcImNhdGVnb3J5XCI6IFwiRnJhbmNlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogNDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDgzLFxyXG4gIFwibmFtZVwiOiBcIk1vdWxheSBCb3VjaHRhXCIsXHJcbiAgXCJwcmljZVwiOiAxNjE5MS4xNSxcclxuICBcImRpc2NvdW50XCI6IDEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1vcm9jY29cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMjQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4NCxcclxuICBcIm5hbWVcIjogXCJBbCBRYXJ5YXRheW5cIixcclxuICBcInByaWNlXCI6IDQ5MDYuMSxcclxuICBcImRpc2NvdW50XCI6IDMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlN5cmlhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAxOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4NSxcclxuICBcIm5hbWVcIjogXCJBeWdla1wiLFxyXG4gIFwicHJpY2VcIjogMTUyMTguMTMsXHJcbiAgXCJkaXNjb3VudFwiOiA2MSxcclxuICBcImNhdGVnb3J5XCI6IFwiQXJtZW5pYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAzNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg2LFxyXG4gIFwibmFtZVwiOiBcIkJ5c3RyeXRzeWFcIixcclxuICBcInByaWNlXCI6IDE0MDQyLjI3LFxyXG4gIFwiZGlzY291bnRcIjogNDcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlVrcmFpbmVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAyMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4NyxcclxuICBcIm5hbWVcIjogXCJIw7ZmblwiLFxyXG4gIFwicHJpY2VcIjogMTA3NTcuMDMsXHJcbiAgXCJkaXNjb3VudFwiOiA1NyxcclxuICBcImNhdGVnb3J5XCI6IFwiSWNlbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMzUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODgsXHJcbiAgXCJuYW1lXCI6IFwiU2hhbmhvdVwiLFxyXG4gIFwicHJpY2VcIjogMTc1NjEuNDUsXHJcbiAgXCJkaXNjb3VudFwiOiAxMCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogNDEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4OSxcclxuICBcIm5hbWVcIjogXCJOb3Zvcm9zc2l5c2tcIixcclxuICBcInByaWNlXCI6IDgxNC41MSxcclxuICBcImRpc2NvdW50XCI6IDkzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDkwLFxyXG4gIFwibmFtZVwiOiBcIkJhbGt5XCIsXHJcbiAgXCJwcmljZVwiOiAxNTEyMy4xLFxyXG4gIFwiZGlzY291bnRcIjogOTUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlVrcmFpbmVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDI1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTEsXHJcbiAgXCJuYW1lXCI6IFwiSW5oYW1iYW5lXCIsXHJcbiAgXCJwcmljZVwiOiAxNjY3NS43MyxcclxuICBcImRpc2NvdW50XCI6IDEyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJNb3phbWJpcXVlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA1MCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTIsXHJcbiAgXCJuYW1lXCI6IFwiRHVuZ2tlayBMYW9rXCIsXHJcbiAgXCJwcmljZVwiOiA2NTQ1LjMyLFxyXG4gIFwiZGlzY291bnRcIjogMjcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDQxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDkzLFxyXG4gIFwibmFtZVwiOiBcIkh5YXR0c3ZpbGxlXCIsXHJcbiAgXCJwcmljZVwiOiA4MjcwLjIzLFxyXG4gIFwiZGlzY291bnRcIjogMTksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlVuaXRlZCBTdGF0ZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA0NCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTQsXHJcbiAgXCJuYW1lXCI6IFwiUXVpbnTDo2VzXCIsXHJcbiAgXCJwcmljZVwiOiA3NDYzLjQ5LFxyXG4gIFwiZGlzY291bnRcIjogOTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMzUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTUsXHJcbiAgXCJuYW1lXCI6IFwiR2lhbG9cIixcclxuICBcInByaWNlXCI6IDE4MDE1LjEsXHJcbiAgXCJkaXNjb3VudFwiOiA2OSxcclxuICBcImNhdGVnb3J5XCI6IFwiTGlieWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA0OCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk2LFxyXG4gIFwibmFtZVwiOiBcIlBhayBQaGFuYW5nXCIsXHJcbiAgXCJwcmljZVwiOiAxOTk2OS41OCxcclxuICBcImRpc2NvdW50XCI6IDE2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJUaGFpbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDI5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk3LFxyXG4gIFwibmFtZVwiOiBcIkhlbmRhbGFcIixcclxuICBcInByaWNlXCI6IDgwNTguMDIsXHJcbiAgXCJkaXNjb3VudFwiOiA0MCxcclxuICBcImNhdGVnb3J5XCI6IFwiU3JpIExhbmthXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA0MSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5OCxcclxuICBcIm5hbWVcIjogXCJNaWt1bWlcIixcclxuICBcInByaWNlXCI6IDE4MDguMzYsXHJcbiAgXCJkaXNjb3VudFwiOiA5MixcclxuICBcImNhdGVnb3J5XCI6IFwiVGFuemFuaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA0MCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTksXHJcbiAgXCJuYW1lXCI6IFwiUHJlc2lkZW50ZSBEdXRyYVwiLFxyXG4gIFwicHJpY2VcIjogOTQ1Ni45MSxcclxuICBcImRpc2NvdW50XCI6IDQ5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTAwLFxyXG4gIFwibmFtZVwiOiBcIlpob3Vrb3VcIixcclxuICBcInByaWNlXCI6IDE1OTE4LjQsXHJcbiAgXCJkaXNjb3VudFwiOiA5MyxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDM3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn1dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiLCJsZXQgcGlkID0gcmVxdWlyZSggJ3Nob3J0aWQnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0e1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgcmF0aW5nLCBxdWFudGl0eSA9IDAsIGNvbW1lbnRzID0gW10sIGRpc2NvdW50LCBpbWdVcmwpe1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMuSWQgPSBwaWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgICAgICB0aGlzLmRpc2NvdW50ID0gZGlzY291bnQ7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBpbWdVcmw7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXZhaWxhYmxlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHkgPiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb2R1Y3RMaXN0ID0gW107XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==