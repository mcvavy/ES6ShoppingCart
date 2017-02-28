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
	
	var _controller = __webpack_require__(3);
	
	//let cartObject = new Cart();
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
	exports.cart = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _productData = __webpack_require__(2);
	
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
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var productData = exports.productData = [{
	  "id": 1,
	  "name": "Boto",
	  "price": 151.92,
	  "discount": 33,
	  "category": "Indonesia",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 2,
	  "quantity": 31,
	  "comments": [{
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }]
	}, {
	  "id": 2,
	  "name": "Xiangfu",
	  "price": 398.06,
	  "discount": 4,
	  "category": "China",
	  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
	  "rating": 3,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }]
	}, {
	  "id": 3,
	  "name": "Gumdag",
	  "price": 215.04,
	  "discount": 30,
	  "category": "Turkmenistan",
	  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	  "rating": 1,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 4,
	  "name": "Latacunga",
	  "price": 451.0,
	  "discount": 47,
	  "category": "Ecuador",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 2,
	  "quantity": 25,
	  "comments": [{
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }]
	}, {
	  "id": 5,
	  "name": "Houston",
	  "price": 53.01,
	  "discount": 6,
	  "category": "United States",
	  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
	  "rating": 4,
	  "quantity": 21,
	  "comments": [{
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }]
	}, {
	  "id": 6,
	  "name": "Raman",
	  "price": 279.91,
	  "discount": 31,
	  "category": "Thailand",
	  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	  "rating": 3,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }]
	}, {
	  "id": 7,
	  "name": "Nariño",
	  "price": 109.93,
	  "discount": 30,
	  "category": "Colombia",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 1,
	  "quantity": 27,
	  "comments": [{
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }, {
	    "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	  }, {
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }]
	}, {
	  "id": 8,
	  "name": "Shazhouba",
	  "price": 487.26,
	  "discount": 41,
	  "category": "China",
	  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	  "rating": 2,
	  "quantity": 33,
	  "comments": [{
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }]
	}, {
	  "id": 9,
	  "name": "Sarvaš",
	  "price": 162.42,
	  "discount": 20,
	  "category": "Croatia",
	  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	  "rating": 4,
	  "quantity": 10,
	  "comments": [{
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }]
	}, {
	  "id": 10,
	  "name": "Tangwāni",
	  "price": 328.93,
	  "discount": 35,
	  "category": "Pakistan",
	  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	  "rating": 3,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }]
	}];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.controller = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _view = __webpack_require__(4);
	
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
	    }]);
	
	    return Controller;
	}();
	
	var controller = exports.controller = new Controller();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.view = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Cart = __webpack_require__(1);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjgyZDJjZTZlYWE1ZTk1Yzc4YmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcuanMiXSwibmFtZXMiOlsiZGlzcGxheUNhcnRJdGVtcyIsIkNhcnQiLCJpdGVtcyIsIml0ZW0iLCJwdXNoIiwicG9zaXRpb24iLCJzcGxpY2UiLCJsZW5ndGgiLCJyZWR1Y2UiLCJzdW0iLCJiIiwiZGlzY291bnQiLCJwcmljZSIsInRvRml4ZWQiLCJjYXJ0IiwicHJvZHVjdERhdGEiLCJDb250cm9sbGVyIiwiZGlzcGxhdENhcnRJdGVtIiwiY29udHJvbGxlciIsIlZpZXciLCJzcGxpdGFyciIsInRvdGFsUHJpY2UiLCJ0b1N0cmluZyIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ0b3RhbEl0ZW0iLCJmb3JFYWNoIiwiaXRlbUxpc3QiLCJjcmVhdGVFbGVtZW50IiwicXVhbnRpdHkiLCJuYW1lIiwiY2FydEl0ZW1MaXN0IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50TmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiZWxlbWVudCIsInZpZXciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFD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QVVkLFNBQVNNLGFBQVQsQ0FBdUJLLFdBQXZCLENBQWQ7O0FBRUEsaUJBQUlDLGNBQWMsSUFBbEIsRUFBd0I7QUFDcEJFLHlCQUFRRixTQUFSLElBQXFCLE1BQU1BLFNBQTNCO0FBQ0g7O0FBRUQsaUJBQUlDLFVBQVUsSUFBZCxFQUFvQjtBQUNoQkMseUJBQVFELEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0g7O0FBRUQsaUJBQUlYLGNBQWMsSUFBbEIsRUFBd0I7QUFDcEJZLHlCQUFRWixTQUFSLEdBQW9CQSxTQUFwQjtBQUNIOztBQUVELG9CQUFPWSxPQUFQO0FBRUg7Ozs7OztBQUtFLEtBQUlDLHNCQUFPLElBQUl0QixJQUFKLEVBQVgsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ODJkMmNlNmVhYTVlOTVjNzhiZiIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XHJcblxyXG4vL2xldCBjYXJ0T2JqZWN0ID0gbmV3IENhcnQoKTtcclxuY29udHJvbGxlci5kaXNwbGF5Q2FydEl0ZW1zKCk7XHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coYFRvdGFsIEl0ZW0gcHJpY2UgaXMgJHtjYXJ0T2JqZWN0LnRvdGFsUHJpY2UoKX1gKTtcclxuLy8gY29uc29sZS5sb2coYFRvdGFsIGl0ZW0gaW4gY2FydCBpczogJHtjYXJ0T2JqZWN0LnRvdGFsSXRlbSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgZGlzY291bnQgcHJpY2UgaXMgJHtjYXJ0T2JqZWN0LnRvdGFsRGlzY291bnRQcmljZSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgcHJpY2Ugd2l0aG91dCBkaXNjb3VudCBpcyAke2NhcnRPYmplY3QudG90YWxQcmljZVdpdGhvdXREaXNjb3VudCgpfWApO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiaW1wb3J0IHsgcHJvZHVjdERhdGEgfSBmcm9tICcuL3Byb2R1Y3REYXRhJztcclxuXHJcbmNsYXNzIENhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHByb2R1Y3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UocG9zaXRpb24sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsSXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaXRlbXMubGVuZ3RoPjApID8gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgMSwgMCk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxEaXNjb3VudFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi5kaXNjb3VudCAhPT0gJycpID8gKChiLmRpc2NvdW50IC8gMTAwKSAqIGIucHJpY2UpIDogMC4wMCwgMC4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pdGVtcy5sZW5ndGg+IDApID8gKHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIChiLmRpc2NvdW50ID4gMCAmJiBiLmRpc2NvdW50ICE9PSAnJykgPyAoYi5wcmljZSAtIChiLmRpc2NvdW50ICogYi5wcmljZSkgLyAxMDApIDogYi5wcmljZSwgMC4wMCkudG9GaXhlZCgyKSkgOiAwLjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsUHJpY2VXaXRob3V0RGlzY291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGIpID0+IHN1bSArIChiLnByaWNlICE9PSAnJykgPyBiLnByaWNlIDogMC4wMCwgMC4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBjYXJ0ID0gbmV3IENhcnQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL0NhcnQuanMiLCJleHBvcnQgY29uc3QgcHJvZHVjdERhdGEgPSBbe1xyXG4gIFwiaWRcIjogMSxcclxuICBcIm5hbWVcIjogXCJCb3RvXCIsXHJcbiAgXCJwcmljZVwiOiAxNTEuOTIsXHJcbiAgXCJkaXNjb3VudFwiOiAzMyxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDMxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMixcclxuICBcIm5hbWVcIjogXCJYaWFuZ2Z1XCIsXHJcbiAgXCJwcmljZVwiOiAzOTguMDYsXHJcbiAgXCJkaXNjb3VudFwiOiA0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMsXHJcbiAgXCJuYW1lXCI6IFwiR3VtZGFnXCIsXHJcbiAgXCJwcmljZVwiOiAyMTUuMDQsXHJcbiAgXCJkaXNjb3VudFwiOiAzMCxcclxuICBcImNhdGVnb3J5XCI6IFwiVHVya21lbmlzdGFuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0LFxyXG4gIFwibmFtZVwiOiBcIkxhdGFjdW5nYVwiLFxyXG4gIFwicHJpY2VcIjogNDUxLjAsXHJcbiAgXCJkaXNjb3VudFwiOiA0NyxcclxuICBcImNhdGVnb3J5XCI6IFwiRWN1YWRvclwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAyNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUsXHJcbiAgXCJuYW1lXCI6IFwiSG91c3RvblwiLFxyXG4gIFwicHJpY2VcIjogNTMuMDEsXHJcbiAgXCJkaXNjb3VudFwiOiA2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJVbml0ZWQgU3RhdGVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAyMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYsXHJcbiAgXCJuYW1lXCI6IFwiUmFtYW5cIixcclxuICBcInByaWNlXCI6IDI3OS45MSxcclxuICBcImRpc2NvdW50XCI6IDMxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJUaGFpbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3LFxyXG4gIFwibmFtZVwiOiBcIk5hcmnDsW9cIixcclxuICBcInByaWNlXCI6IDEwOS45MyxcclxuICBcImRpc2NvdW50XCI6IDMwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDb2xvbWJpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAyNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIGlkIGp1c3RvIHNpdCBhbWV0IHNhcGllbiBkaWduaXNzaW0gdmVzdGlidWx1bS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGRhcGlidXMgZG9sb3IgdmVsIGVzdC4gRG9uZWMgb2RpbyBqdXN0bywgc29sbGljaXR1ZGluIHV0LCBzdXNjaXBpdCBhLCBmZXVnaWF0IGV0LCBlcm9zLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDgsXHJcbiAgXCJuYW1lXCI6IFwiU2hhemhvdWJhXCIsXHJcbiAgXCJwcmljZVwiOiA0ODcuMjYsXHJcbiAgXCJkaXNjb3VudFwiOiA0MSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAzMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOSxcclxuICBcIm5hbWVcIjogXCJTYXJ2YcWhXCIsXHJcbiAgXCJwcmljZVwiOiAxNjIuNDIsXHJcbiAgXCJkaXNjb3VudFwiOiAyMCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ3JvYXRpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDEwLFxyXG4gIFwibmFtZVwiOiBcIlRhbmd3xIFuaVwiLFxyXG4gIFwicHJpY2VcIjogMzI4LjkzLFxyXG4gIFwiZGlzY291bnRcIjogMzUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBha2lzdGFuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59XTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL3Byb2R1Y3REYXRhLmpzIiwiaW1wb3J0IHt2aWV3IGFzIFZpZXd9IGZyb20gJy4uL3ZpZXcvdmlldyc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVye1xyXG4gICAgZGlzcGxheUNhcnRJdGVtcygpe1xyXG4gICAgICAgIFZpZXcuZGlzcGxhdENhcnRJdGVtKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsImltcG9ydCB7IGNhcnQgYXMgQ2FydCB9IGZyb20gJy4uL21vZGVscy9DYXJ0JztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXRDYXJ0SXRlbSgpIHtcclxuICAgICAgICAvL2Rpc3BsYXkgdG90YWwgaXRlbSBpbiBiYXNrZXRcclxuICAgICAgICAvL2Rpc3BsYXkgdG90YWwgaXRlbSBwcmljZVxyXG4gICAgICAgIGxldCBzcGxpdGFyciA9IChDYXJ0LnRvdGFsUHJpY2UoKSAhPT0wKSAgPyBDYXJ0LnRvdGFsUHJpY2UoKS50b1N0cmluZygpLnNwbGl0KCcuJykgOiBbXCIwXCIsXCIwMFwiXTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coQ2FydC50b3RhbFByaWNlKCkpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5QcmljZVwiKS5pbm5lckhUTUwgPWBcXCQke3NwbGl0YXJyWzBdfTxzdXA+LiR7c3BsaXRhcnJbMV19PC9zdXA+YDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhZ3lcIikuaW5uZXJIVE1MID0gQ2FydC50b3RhbEl0ZW0oKTtcclxuXHJcbiAgICAgICAgQ2FydC5pdGVtcy5mb3JFYWNoKChpdGVtLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUxpc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBcImNhcnQtaXRlbVwiKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QuaW5uZXJIVE1MID0gYCR7aXRlbS5xdWFudGl0eX0geCAke2l0ZW0ubmFtZX0gPHNwYW4gY2xhc3M9XCJjYXJ0LWl0ZW0tcHJpY2VcIj49ICR7KGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5KS50b0ZpeGVkKDIpfTwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBsZXQgY2FydEl0ZW1MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWl0ZW1zXCIpO1xyXG4gICAgICAgICAgICBjYXJ0SXRlbUxpc3QuYXBwZW5kQ2hpbGQoaXRlbUxpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSA9IFwibmFcIiwgc3R5bGUgPSBcIm5hXCIsIGlubmVySFRNTCA9IFwibmFcIikge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjbGFzc05hbWUgIT09IFwibmFcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdHlsZSAhPT0gXCJuYVwiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbm5lckhUTUwgIT09IFwibmFcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IHZpZXcgPSBuZXcgVmlldygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L3ZpZXcuanMiXSwic291cmNlUm9vdCI6IiJ9