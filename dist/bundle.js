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
	
	var _Cart = __webpack_require__(1);
	
	var cartObject = new _Cart.Cart();
	
	console.log(cartObject.totalPrice());
	console.log('Total item in cart is: ' + cartObject.totalItem());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Cart = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _productData = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cart = exports.Cart = function () {
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
	            return this.items.reduce(function (sum, b) {
	                return sum + 1;
	            }, 0);
	        }
	    }, {
	        key: 'totalPrice',
	        value: function totalPrice() {
	            return this.items.reduce(function (sum, b) {
	                return sum + (b.discount > 0) ? b.price - b.discount : b.price;
	            }, 0.00).toFixed(2);
	        }
	    }]);

	    return Cart;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var productData = exports.productData = [{
	  "id": 1,
	  "name": "Fiveclub",
	  "price": 40.45,
	  "discount": 48,
	  "category": "Poland",
	  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
	  "rating": 1,
	  "quantity": 18,
	  "comments": [{
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 2,
	  "name": "Devpulse",
	  "price": 26.16,
	  "discount": 25,
	  "category": "China",
	  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
	  "rating": 2,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }]
	}, {
	  "id": 3,
	  "name": "Miboo",
	  "price": 86.18,
	  "discount": 99,
	  "category": "Russia",
	  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
	  "rating": 5,
	  "quantity": 12,
	  "comments": [{
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }]
	}, {
	  "id": 4,
	  "name": "Quire",
	  "price": 29.13,
	  "discount": 49,
	  "category": "Poland",
	  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	  "rating": 4,
	  "quantity": 12,
	  "comments": [{
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }, {
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }]
	}, {
	  "id": 5,
	  "name": "Twimbo",
	  "price": 15.46,
	  "discount": 75,
	  "category": "China",
	  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
	  "rating": 4,
	  "quantity": 20,
	  "comments": [{
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }]
	}, {
	  "id": 6,
	  "name": "Photobug",
	  "price": 36.91,
	  "discount": 90,
	  "category": "Philippines",
	  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	  "rating": 2,
	  "quantity": 9,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }]
	}, {
	  "id": 7,
	  "name": "Jaxnation",
	  "price": 93.33,
	  "discount": 58,
	  "category": "China",
	  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	  "rating": 3,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }]
	}, {
	  "id": 8,
	  "name": "Dabtype",
	  "price": 59.54,
	  "discount": 7,
	  "category": "China",
	  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	  "rating": 1,
	  "quantity": 19,
	  "comments": [{
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }, {
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }]
	}, {
	  "id": 9,
	  "name": "Tambee",
	  "price": 19.32,
	  "discount": 51,
	  "category": "China",
	  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
	  "rating": 1,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	  }, {
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 10,
	  "name": "Trudoo",
	  "price": 57.96,
	  "discount": 47,
	  "category": "Argentina",
	  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	  "rating": 4,
	  "quantity": 10,
	  "comments": [{
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }, {
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }]
	}, {
	  "id": 11,
	  "name": "Abata",
	  "price": 48.81,
	  "discount": 55,
	  "category": "Argentina",
	  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
	  "rating": 1,
	  "quantity": 2,
	  "comments": [{
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }]
	}, {
	  "id": 12,
	  "name": "Gigaclub",
	  "price": 97.24,
	  "discount": 100,
	  "category": "Yemen",
	  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	  "rating": 4,
	  "quantity": 18,
	  "comments": [{
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }]
	}, {
	  "id": 13,
	  "name": "Lazz",
	  "price": 89.31,
	  "discount": 6,
	  "category": "Canada",
	  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
	  "rating": 3,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }]
	}, {
	  "id": 14,
	  "name": "Rhycero",
	  "price": 49.85,
	  "discount": 4,
	  "category": "Argentina",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 3,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }]
	}, {
	  "id": 15,
	  "name": "Gabspot",
	  "price": 61.42,
	  "discount": 35,
	  "category": "China",
	  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
	  "rating": 1,
	  "quantity": 2,
	  "comments": [{
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }]
	}, {
	  "id": 16,
	  "name": "Twiyo",
	  "price": 38.45,
	  "discount": 58,
	  "category": "Mexico",
	  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	  "rating": 4,
	  "quantity": 7,
	  "comments": [{
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }]
	}, {
	  "id": 17,
	  "name": "Ooba",
	  "price": 74.2,
	  "discount": 79,
	  "category": "Brazil",
	  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	  "rating": 3,
	  "quantity": 15,
	  "comments": [{
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }]
	}, {
	  "id": 18,
	  "name": "Youbridge",
	  "price": 56.72,
	  "discount": 18,
	  "category": "Palestinian Territory",
	  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	  "rating": 1,
	  "quantity": 8,
	  "comments": [{
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }, {
	    "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 19,
	  "name": "Chatterbridge",
	  "price": 34.5,
	  "discount": 18,
	  "category": "Cyprus",
	  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	  "rating": 3,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }, {
	    "comment": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
	  }, {
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }, {
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }]
	}, {
	  "id": 20,
	  "name": "Rhynyx",
	  "price": 80.53,
	  "discount": 34,
	  "category": "China",
	  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	  "rating": 3,
	  "quantity": 19,
	  "comments": [{
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }, {
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }, {
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }]
	}, {
	  "id": 21,
	  "name": "Wikibox",
	  "price": 64.1,
	  "discount": 100,
	  "category": "Mali",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 5,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }]
	}, {
	  "id": 22,
	  "name": "Rhyloo",
	  "price": 76.12,
	  "discount": 64,
	  "category": "Canada",
	  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	  "rating": 3,
	  "quantity": 11,
	  "comments": [{
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }]
	}, {
	  "id": 23,
	  "name": "Pixope",
	  "price": 51.14,
	  "discount": 48,
	  "category": "Indonesia",
	  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
	  "rating": 1,
	  "quantity": 15,
	  "comments": [{
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }, {
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }, {
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }]
	}, {
	  "id": 24,
	  "name": "Oloo",
	  "price": 99.49,
	  "discount": 81,
	  "category": "Sweden",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 5,
	  "quantity": 18,
	  "comments": [{
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }]
	}, {
	  "id": 25,
	  "name": "Realfire",
	  "price": 23.31,
	  "discount": 21,
	  "category": "Philippines",
	  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	  "rating": 5,
	  "quantity": 4,
	  "comments": [{
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }]
	}, {
	  "id": 26,
	  "name": "Trilia",
	  "price": 44.52,
	  "discount": 32,
	  "category": "Suriname",
	  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	  "rating": 1,
	  "quantity": 12,
	  "comments": [{
	    "comment": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }]
	}, {
	  "id": 27,
	  "name": "Vinder",
	  "price": 44.49,
	  "discount": 2,
	  "category": "Peru",
	  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	  "rating": 4,
	  "quantity": 12,
	  "comments": [{
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }]
	}, {
	  "id": 28,
	  "name": "Quaxo",
	  "price": 25.66,
	  "discount": 72,
	  "category": "Indonesia",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 3,
	  "quantity": 4,
	  "comments": [{
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }]
	}, {
	  "id": 29,
	  "name": "Devpulse",
	  "price": 15.04,
	  "discount": 61,
	  "category": "Yemen",
	  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
	  "rating": 1,
	  "quantity": 7,
	  "comments": [{
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	  }, {
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }]
	}, {
	  "id": 30,
	  "name": "Oyoba",
	  "price": 42.89,
	  "discount": 92,
	  "category": "Poland",
	  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	  "rating": 2,
	  "quantity": 1,
	  "comments": [{
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }]
	}, {
	  "id": 31,
	  "name": "Bubblemix",
	  "price": 44.31,
	  "discount": 56,
	  "category": "France",
	  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	  "rating": 2,
	  "quantity": 14,
	  "comments": [{
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 32,
	  "name": "Twiyo",
	  "price": 37.84,
	  "discount": 76,
	  "category": "China",
	  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	  "rating": 5,
	  "quantity": 4,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 33,
	  "name": "Kazu",
	  "price": 20.61,
	  "discount": 36,
	  "category": "Serbia",
	  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
	  "rating": 3,
	  "quantity": 14,
	  "comments": [{
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }, {
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }]
	}, {
	  "id": 34,
	  "name": "Blogpad",
	  "price": 21.55,
	  "discount": 44,
	  "category": "Poland",
	  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
	  "rating": 4,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }]
	}, {
	  "id": 35,
	  "name": "Tekfly",
	  "price": 29.54,
	  "discount": 66,
	  "category": "Luxembourg",
	  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	  "rating": 1,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }, {
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }]
	}, {
	  "id": 36,
	  "name": "Jayo",
	  "price": 29.78,
	  "discount": 4,
	  "category": "Indonesia",
	  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
	  "rating": 2,
	  "quantity": 11,
	  "comments": [{
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }]
	}, {
	  "id": 37,
	  "name": "Lazz",
	  "price": 97.88,
	  "discount": 64,
	  "category": "South Africa",
	  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	  "rating": 1,
	  "quantity": 1,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	  }]
	}, {
	  "id": 38,
	  "name": "Realbridge",
	  "price": 41.57,
	  "discount": 10,
	  "category": "Brazil",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 4,
	  "quantity": 14,
	  "comments": [{
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 39,
	  "name": "Zooxo",
	  "price": 45.71,
	  "discount": 1,
	  "category": "Armenia",
	  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	  "rating": 5,
	  "quantity": 2,
	  "comments": [{
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }, {
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }]
	}, {
	  "id": 40,
	  "name": "Tambee",
	  "price": 68.55,
	  "discount": 3,
	  "category": "Cuba",
	  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
	  "rating": 2,
	  "quantity": 8,
	  "comments": [{
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }]
	}, {
	  "id": 41,
	  "name": "Aimbo",
	  "price": 39.01,
	  "discount": 42,
	  "category": "Greece",
	  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
	  "rating": 2,
	  "quantity": 8,
	  "comments": [{
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 42,
	  "name": "Plajo",
	  "price": 38.61,
	  "discount": 55,
	  "category": "Argentina",
	  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
	  "rating": 3,
	  "quantity": 11,
	  "comments": [{
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }, {
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }]
	}, {
	  "id": 43,
	  "name": "Edgeclub",
	  "price": 58.07,
	  "discount": 85,
	  "category": "New Zealand",
	  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
	  "rating": 2,
	  "quantity": 19,
	  "comments": [{
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }]
	}, {
	  "id": 44,
	  "name": "Oba",
	  "price": 12.69,
	  "discount": 7,
	  "category": "Philippines",
	  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	  "rating": 4,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }]
	}, {
	  "id": 45,
	  "name": "Feedmix",
	  "price": 43.14,
	  "discount": 63,
	  "category": "France",
	  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
	  "rating": 3,
	  "quantity": 9,
	  "comments": [{
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }]
	}, {
	  "id": 46,
	  "name": "Katz",
	  "price": 31.66,
	  "discount": 79,
	  "category": "South Korea",
	  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	  "rating": 5,
	  "quantity": 7,
	  "comments": [{
	    "comment": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }]
	}, {
	  "id": 47,
	  "name": "Avaveo",
	  "price": 65.15,
	  "discount": 93,
	  "category": "Mongolia",
	  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	  "rating": 4,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }, {
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }, {
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }]
	}, {
	  "id": 48,
	  "name": "Bubbletube",
	  "price": 85.5,
	  "discount": 11,
	  "category": "Nigeria",
	  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
	  "rating": 4,
	  "quantity": 15,
	  "comments": [{
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }, {
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }]
	}, {
	  "id": 49,
	  "name": "Janyx",
	  "price": 41.29,
	  "discount": 14,
	  "category": "China",
	  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	  "rating": 2,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }]
	}, {
	  "id": 50,
	  "name": "Shufflebeat",
	  "price": 69.95,
	  "discount": 12,
	  "category": "China",
	  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
	  "rating": 3,
	  "quantity": 1,
	  "comments": [{
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }]
	}, {
	  "id": 51,
	  "name": "Midel",
	  "price": 91.08,
	  "discount": 6,
	  "category": "China",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 4,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }, {
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }]
	}, {
	  "id": 52,
	  "name": "Avamba",
	  "price": 42.72,
	  "discount": 32,
	  "category": "Guam",
	  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
	  "rating": 1,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }]
	}, {
	  "id": 53,
	  "name": "Avamba",
	  "price": 69.56,
	  "discount": 97,
	  "category": "China",
	  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	  "rating": 1,
	  "quantity": 14,
	  "comments": [{
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }]
	}, {
	  "id": 54,
	  "name": "Zazio",
	  "price": 30.26,
	  "discount": 1,
	  "category": "Thailand",
	  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
	  "rating": 5,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }]
	}, {
	  "id": 55,
	  "name": "Dabfeed",
	  "price": 37.46,
	  "discount": 28,
	  "category": "Japan",
	  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
	  "rating": 4,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }, {
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }, {
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }]
	}, {
	  "id": 56,
	  "name": "Bubbletube",
	  "price": 58.96,
	  "discount": 1,
	  "category": "Haiti",
	  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
	  "rating": 2,
	  "quantity": 18,
	  "comments": [{
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }, {
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }]
	}, {
	  "id": 57,
	  "name": "Kimia",
	  "price": 52.08,
	  "discount": 92,
	  "category": "Brazil",
	  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	  "rating": 3,
	  "quantity": 7,
	  "comments": [{
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }]
	}, {
	  "id": 58,
	  "name": "Realblab",
	  "price": 59.39,
	  "discount": 93,
	  "category": "Russia",
	  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
	  "rating": 1,
	  "quantity": 16,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }]
	}, {
	  "id": 59,
	  "name": "Zoonoodle",
	  "price": 63.66,
	  "discount": 73,
	  "category": "China",
	  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
	  "rating": 2,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }]
	}, {
	  "id": 60,
	  "name": "Devpoint",
	  "price": 82.21,
	  "discount": 79,
	  "category": "Ecuador",
	  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	  "rating": 1,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }]
	}, {
	  "id": 61,
	  "name": "Dabvine",
	  "price": 10.24,
	  "discount": 39,
	  "category": "Poland",
	  "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
	  "rating": 1,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }]
	}, {
	  "id": 62,
	  "name": "Blogtag",
	  "price": 59.49,
	  "discount": 8,
	  "category": "Brazil",
	  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
	  "rating": 3,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }]
	}, {
	  "id": 63,
	  "name": "Quimm",
	  "price": 39.96,
	  "discount": 5,
	  "category": "Sweden",
	  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	  "rating": 3,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }]
	}, {
	  "id": 64,
	  "name": "Flashspan",
	  "price": 80.91,
	  "discount": 33,
	  "category": "Indonesia",
	  "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	  "rating": 4,
	  "quantity": 15,
	  "comments": [{
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 65,
	  "name": "Avamba",
	  "price": 74.52,
	  "discount": 4,
	  "category": "Poland",
	  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
	  "rating": 2,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }]
	}, {
	  "id": 66,
	  "name": "Youspan",
	  "price": 60.33,
	  "discount": 43,
	  "category": "China",
	  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	  "rating": 3,
	  "quantity": 2,
	  "comments": [{
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }, {
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }]
	}, {
	  "id": 67,
	  "name": "Topicshots",
	  "price": 34.59,
	  "discount": 87,
	  "category": "Indonesia",
	  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
	  "rating": 4,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }, {
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }]
	}, {
	  "id": 68,
	  "name": "Viva",
	  "price": 66.33,
	  "discount": 14,
	  "category": "Democratic Republic of the Congo",
	  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
	  "rating": 1,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }, {
	    "comment": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
	  }]
	}, {
	  "id": 69,
	  "name": "Yozio",
	  "price": 16.45,
	  "discount": 70,
	  "category": "Cameroon",
	  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
	  "rating": 3,
	  "quantity": 10,
	  "comments": [{
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 70,
	  "name": "Gevee",
	  "price": 41.64,
	  "discount": 76,
	  "category": "Peru",
	  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
	  "rating": 1,
	  "quantity": 19,
	  "comments": [{
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }, {
	    "comment": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
	  }]
	}, {
	  "id": 71,
	  "name": "Skilith",
	  "price": 28.66,
	  "discount": 74,
	  "category": "Indonesia",
	  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
	  "rating": 5,
	  "quantity": 11,
	  "comments": [{
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 72,
	  "name": "Youspan",
	  "price": 71.83,
	  "discount": 89,
	  "category": "Venezuela",
	  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
	  "rating": 1,
	  "quantity": 9,
	  "comments": [{
	    "comment": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 73,
	  "name": "Twiyo",
	  "price": 96.38,
	  "discount": 4,
	  "category": "Indonesia",
	  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
	  "rating": 2,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
	  }, {
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }]
	}, {
	  "id": 74,
	  "name": "Pixoboo",
	  "price": 42.79,
	  "discount": 71,
	  "category": "China",
	  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
	  "rating": 3,
	  "quantity": 15,
	  "comments": [{
	    "comment": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }]
	}, {
	  "id": 75,
	  "name": "Babblestorm",
	  "price": 19.16,
	  "discount": 55,
	  "category": "Philippines",
	  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
	  "rating": 1,
	  "quantity": 9,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }, {
	    "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	  }, {
	    "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
	  }]
	}, {
	  "id": 76,
	  "name": "Eazzy",
	  "price": 40.37,
	  "discount": 33,
	  "category": "Poland",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 5,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }]
	}, {
	  "id": 77,
	  "name": "Yakitri",
	  "price": 88.5,
	  "discount": 27,
	  "category": "Portugal",
	  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	  "rating": 3,
	  "quantity": 6,
	  "comments": [{
	    "comment": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }, {
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }]
	}, {
	  "id": 78,
	  "name": "Photobean",
	  "price": 81.0,
	  "discount": 59,
	  "category": "Russia",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 5,
	  "quantity": 9,
	  "comments": [{
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }, {
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }, {
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }]
	}, {
	  "id": 79,
	  "name": "Browsedrive",
	  "price": 47.47,
	  "discount": 54,
	  "category": "China",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 4,
	  "quantity": 3,
	  "comments": [{
	    "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	  }, {
	    "comment": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
	  }, {
	    "comment": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
	  }]
	}, {
	  "id": 80,
	  "name": "Skalith",
	  "price": 28.05,
	  "discount": 18,
	  "category": "United States",
	  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	  "rating": 2,
	  "quantity": 12,
	  "comments": [{
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }]
	}, {
	  "id": 81,
	  "name": "Youspan",
	  "price": 65.39,
	  "discount": 11,
	  "category": "Niger",
	  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	  "rating": 5,
	  "quantity": 10,
	  "comments": [{
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }, {
	    "comment": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
	  }]
	}, {
	  "id": 82,
	  "name": "Flashset",
	  "price": 28.92,
	  "discount": 69,
	  "category": "Brazil",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 3,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
	  }, {
	    "comment": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "In congue. Etiam justo. Etiam pretium iaculis justo."
	  }]
	}, {
	  "id": 83,
	  "name": "Devcast",
	  "price": 81.16,
	  "discount": 76,
	  "category": "Indonesia",
	  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	  "rating": 3,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }, {
	    "comment": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
	  }]
	}, {
	  "id": 84,
	  "name": "Skajo",
	  "price": 16.91,
	  "discount": 90,
	  "category": "Brazil",
	  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
	  "rating": 1,
	  "quantity": 16,
	  "comments": [{
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }]
	}, {
	  "id": 85,
	  "name": "Brainsphere",
	  "price": 91.71,
	  "discount": 22,
	  "category": "Indonesia",
	  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	  "rating": 3,
	  "quantity": 9,
	  "comments": [{
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }, {
	    "comment": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
	  }, {
	    "comment": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
	  }, {
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
	  }]
	}, {
	  "id": 86,
	  "name": "Digitube",
	  "price": 84.76,
	  "discount": 30,
	  "category": "Japan",
	  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	  "rating": 1,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
	  }]
	}, {
	  "id": 87,
	  "name": "Realcube",
	  "price": 16.19,
	  "discount": 35,
	  "category": "Mongolia",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 1,
	  "quantity": 11,
	  "comments": [{
	    "comment": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
	  }]
	}, {
	  "id": 88,
	  "name": "Feednation",
	  "price": 23.79,
	  "discount": 94,
	  "category": "Serbia",
	  "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
	  "rating": 1,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
	  }, {
	    "comment": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
	  }]
	}, {
	  "id": 89,
	  "name": "Jabbersphere",
	  "price": 78.71,
	  "discount": 10,
	  "category": "Indonesia",
	  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	  "rating": 5,
	  "quantity": 13,
	  "comments": [{
	    "comment": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
	  }]
	}, {
	  "id": 90,
	  "name": "Livetube",
	  "price": 52.8,
	  "discount": 13,
	  "category": "Brazil",
	  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
	  "rating": 4,
	  "quantity": 6,
	  "comments": [{
	    "comment": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
	  }]
	}, {
	  "id": 91,
	  "name": "Kwilith",
	  "price": 90.7,
	  "discount": 81,
	  "category": "Greece",
	  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
	  "rating": 2,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }, {
	    "comment": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
	  }, {
	    "comment": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
	  }, {
	    "comment": "Fusce consequat. Nulla nisl. Nunc nisl."
	  }]
	}, {
	  "id": 92,
	  "name": "Realcube",
	  "price": 52.45,
	  "discount": 100,
	  "category": "Haiti",
	  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
	  "rating": 3,
	  "quantity": 7,
	  "comments": [{
	    "comment": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
	  }, {
	    "comment": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
	  }, {
	    "comment": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
	  }]
	}, {
	  "id": 93,
	  "name": "Yata",
	  "price": 87.09,
	  "discount": 63,
	  "category": "Russia",
	  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
	  "rating": 4,
	  "quantity": 1,
	  "comments": [{
	    "comment": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
	  }, {
	    "comment": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
	  }, {
	    "comment": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
	  }]
	}, {
	  "id": 94,
	  "name": "Wikido",
	  "price": 49.15,
	  "discount": 18,
	  "category": "Azerbaijan",
	  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	  "rating": 4,
	  "quantity": 18,
	  "comments": [{
	    "comment": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
	  }]
	}, {
	  "id": 95,
	  "name": "Topicshots",
	  "price": 80.76,
	  "discount": 67,
	  "category": "Mexico",
	  "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	  "rating": 2,
	  "quantity": 5,
	  "comments": [{
	    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	  }]
	}, {
	  "id": 96,
	  "name": "Jaxbean",
	  "price": 91.5,
	  "discount": 88,
	  "category": "Brazil",
	  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	  "rating": 3,
	  "quantity": 1,
	  "comments": [{
	    "comment": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
	  }, {
	    "comment": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
	  }]
	}, {
	  "id": 97,
	  "name": "Ooba",
	  "price": 67.41,
	  "discount": 2,
	  "category": "Indonesia",
	  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	  "rating": 3,
	  "quantity": 20,
	  "comments": [{
	    "comment": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
	  }, {
	    "comment": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
	  }, {
	    "comment": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
	  }, {
	    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	  }]
	}, {
	  "id": 98,
	  "name": "Jaloo",
	  "price": 43.45,
	  "discount": 13,
	  "category": "Germany",
	  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
	  "rating": 4,
	  "quantity": 17,
	  "comments": [{
	    "comment": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
	  }]
	}, {
	  "id": 99,
	  "name": "Gigazoom",
	  "price": 70.33,
	  "discount": 4,
	  "category": "China",
	  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
	  "rating": 2,
	  "quantity": 19,
	  "comments": [{
	    "comment": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
	  }, {
	    "comment": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
	  }, {
	    "comment": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
	  }]
	}, {
	  "id": 100,
	  "name": "Browsezoom",
	  "price": 32.37,
	  "discount": 17,
	  "category": "Indonesia",
	  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	  "rating": 4,
	  "quantity": 16,
	  "comments": [{
	    "comment": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
	  }, {
	    "comment": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
	  }, {
	    "comment": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
	  }]
	}];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2NmNDZmZDQ0YjAzMjY5OTNhOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0RGF0YS5qcyJdLCJuYW1lcyI6WyJjYXJ0T2JqZWN0IiwiY29uc29sZSIsImxvZyIsInRvdGFsUHJpY2UiLCJ0b3RhbEl0ZW0iLCJDYXJ0IiwiaXRlbXMiLCJpdGVtIiwicHVzaCIsInBvc2l0aW9uIiwic3BsaWNlIiwicmVkdWNlIiwic3VtIiwiYiIsImRpc2NvdW50IiwicHJpY2UiLCJ0b0ZpeGVkIiwicHJvZHVjdERhdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUEsS0FBSUEsYUFBYSxnQkFBakI7O0FBR0FDLFNBQVFDLEdBQVIsQ0FBWUYsV0FBV0csVUFBWCxFQUFaO0FBQ0FGLFNBQVFDLEdBQVIsNkJBQXNDRixXQUFXSSxTQUFYLEVBQXRDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0tBRWFDLEksV0FBQUEsSTtBQUNULHFCQUFjO0FBQUE7O0FBQ1YsY0FBS0MsS0FBTDtBQUNIOzs7O2lDQUNPQyxJLEVBQU07QUFDVixrQkFBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCRCxJQUFoQjtBQUNIOzs7b0NBRVVFLFEsRUFBUztBQUNoQixrQkFBS0gsS0FBTCxDQUFXSSxNQUFYLENBQWtCRCxRQUFsQixFQUEyQixDQUEzQjtBQUNIOzs7cUNBRVU7QUFDUCxvQkFBTyxLQUFLSCxLQUFMLENBQVdLLE1BQVgs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LGtCQUFlLHlKQU5kO0FBT0QsYUFBVSxDQVBUO0FBUUQsZUFBWSxFQVJYO0FBU0QsZUFBWSxDQUNWO0FBQ0UsZ0JBQVc7QUFEYixJQURVLEVBSVY7QUFDRSxnQkFBVztBQURiLElBSlUsRUFPVjtBQUNFLGdCQUFXO0FBRGIsSUFQVTtBQVRYLEVBNTJEd0IsRUFnNER4QjtBQUNELFNBQU0sR0FETDtBQUVELFdBQVEsWUFGUDtBQUdELFlBQVMsS0FIUjtBQUlELGVBQVksRUFKWDtBQUtELGVBQVksV0FMWDtBQU1ELGtCQUFlLHlJQU5kO0FBT0QsYUFBVSxDQVBUO0FBUUQsZUFBWSxFQVJYO0FBU0QsZUFBWSxDQUNWO0FBQ0UsZ0JBQVc7QUFEYixJQURVLEVBSVY7QUFDRSxnQkFBVztBQURiLElBSlUsRUFPVjtBQUNFLGdCQUFXO0FBRGIsSUFQVTtBQVRYLEVBaDREd0IsQ0FBcEIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzY2Y0NmZkNDRiMDMyNjk5M2E4YiIsImltcG9ydCB7IENhcnQgfSBmcm9tICcuL21vZGVscy9DYXJ0JztcclxuXHJcbmxldCBjYXJ0T2JqZWN0ID0gbmV3IENhcnQoKTtcclxuXHJcblxyXG5jb25zb2xlLmxvZyhjYXJ0T2JqZWN0LnRvdGFsUHJpY2UoKSk7XHJcbmNvbnNvbGUubG9nKGBUb3RhbCBpdGVtIGluIGNhcnQgaXM6ICR7Y2FydE9iamVjdC50b3RhbEl0ZW0oKX1gKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsImltcG9ydCB7IHByb2R1Y3REYXRhIH0gZnJvbSAnLi9wcm9kdWN0RGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FydCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcHJvZHVjdERhdGE7XHJcbiAgICB9XHJcbiAgICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSXRlbShwb3NpdGlvbil7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UocG9zaXRpb24sMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxJdGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sYikgPT4gc3VtICsgMSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIuZGlzY291bnQgPiAwKSA/IChiLnByaWNlIC0gYi5kaXNjb3VudCk6IGIucHJpY2UsMC4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvQ2FydC5qcyIsImV4cG9ydCBjb25zdCBwcm9kdWN0RGF0YSA9IFt7XHJcbiAgXCJpZFwiOiAxLFxyXG4gIFwibmFtZVwiOiBcIkZpdmVjbHViXCIsXHJcbiAgXCJwcmljZVwiOiA0MC40NSxcclxuICBcImRpc2NvdW50XCI6IDQ4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQb2xhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMixcclxuICBcIm5hbWVcIjogXCJEZXZwdWxzZVwiLFxyXG4gIFwicHJpY2VcIjogMjYuMTYsXHJcbiAgXCJkaXNjb3VudFwiOiAyNSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzLFxyXG4gIFwibmFtZVwiOiBcIk1pYm9vXCIsXHJcbiAgXCJwcmljZVwiOiA4Ni4xOCxcclxuICBcImRpc2NvdW50XCI6IDk5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDEyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0LFxyXG4gIFwibmFtZVwiOiBcIlF1aXJlXCIsXHJcbiAgXCJwcmljZVwiOiAyOS4xMyxcclxuICBcImRpc2NvdW50XCI6IDQ5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQb2xhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDEyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNSxcclxuICBcIm5hbWVcIjogXCJUd2ltYm9cIixcclxuICBcInByaWNlXCI6IDE1LjQ2LFxyXG4gIFwiZGlzY291bnRcIjogNzUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAyMCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYsXHJcbiAgXCJuYW1lXCI6IFwiUGhvdG9idWdcIixcclxuICBcInByaWNlXCI6IDM2LjkxLFxyXG4gIFwiZGlzY291bnRcIjogOTAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBoaWxpcHBpbmVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3LFxyXG4gIFwibmFtZVwiOiBcIkpheG5hdGlvblwiLFxyXG4gIFwicHJpY2VcIjogOTMuMzMsXHJcbiAgXCJkaXNjb3VudFwiOiA1OCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDgsXHJcbiAgXCJuYW1lXCI6IFwiRGFidHlwZVwiLFxyXG4gIFwicHJpY2VcIjogNTkuNTQsXHJcbiAgXCJkaXNjb3VudFwiOiA3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOSxcclxuICBcIm5hbWVcIjogXCJUYW1iZWVcIixcclxuICBcInByaWNlXCI6IDE5LjMyLFxyXG4gIFwiZGlzY291bnRcIjogNTEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDIwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYSB1dCBlcmF0IGlkIG1hdXJpcyB2dWxwdXRhdGUgZWxlbWVudHVtLiBOdWxsYW0gdmFyaXVzLiBOdWxsYSBmYWNpbGlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTAsXHJcbiAgXCJuYW1lXCI6IFwiVHJ1ZG9vXCIsXHJcbiAgXCJwcmljZVwiOiA1Ny45NixcclxuICBcImRpc2NvdW50XCI6IDQ3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJBcmdlbnRpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDExLFxyXG4gIFwibmFtZVwiOiBcIkFiYXRhXCIsXHJcbiAgXCJwcmljZVwiOiA0OC44MSxcclxuICBcImRpc2NvdW50XCI6IDU1LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJBcmdlbnRpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxMixcclxuICBcIm5hbWVcIjogXCJHaWdhY2x1YlwiLFxyXG4gIFwicHJpY2VcIjogOTcuMjQsXHJcbiAgXCJkaXNjb3VudFwiOiAxMDAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlllbWVuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAxOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIGlkIGp1c3RvIHNpdCBhbWV0IHNhcGllbiBkaWduaXNzaW0gdmVzdGlidWx1bS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGRhcGlidXMgZG9sb3IgdmVsIGVzdC4gRG9uZWMgb2RpbyBqdXN0bywgc29sbGljaXR1ZGluIHV0LCBzdXNjaXBpdCBhLCBmZXVnaWF0IGV0LCBlcm9zLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTMsXHJcbiAgXCJuYW1lXCI6IFwiTGF6elwiLFxyXG4gIFwicHJpY2VcIjogODkuMzEsXHJcbiAgXCJkaXNjb3VudFwiOiA2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDYW5hZGFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE0LFxyXG4gIFwibmFtZVwiOiBcIlJoeWNlcm9cIixcclxuICBcInByaWNlXCI6IDQ5Ljg1LFxyXG4gIFwiZGlzY291bnRcIjogNCxcclxuICBcImNhdGVnb3J5XCI6IFwiQXJnZW50aW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE1LFxyXG4gIFwibmFtZVwiOiBcIkdhYnNwb3RcIixcclxuICBcInByaWNlXCI6IDYxLjQyLFxyXG4gIFwiZGlzY291bnRcIjogMzUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTYsXHJcbiAgXCJuYW1lXCI6IFwiVHdpeW9cIixcclxuICBcInByaWNlXCI6IDM4LjQ1LFxyXG4gIFwiZGlzY291bnRcIjogNTgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1leGljb1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE3LFxyXG4gIFwibmFtZVwiOiBcIk9vYmFcIixcclxuICBcInByaWNlXCI6IDc0LjIsXHJcbiAgXCJkaXNjb3VudFwiOiA3OSxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE4LFxyXG4gIFwibmFtZVwiOiBcIllvdWJyaWRnZVwiLFxyXG4gIFwicHJpY2VcIjogNTYuNzIsXHJcbiAgXCJkaXNjb3VudFwiOiAxOCxcclxuICBcImNhdGVnb3J5XCI6IFwiUGFsZXN0aW5pYW4gVGVycml0b3J5XCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBpZCBqdXN0byBzaXQgYW1ldCBzYXBpZW4gZGlnbmlzc2ltIHZlc3RpYnVsdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBkYXBpYnVzIGRvbG9yIHZlbCBlc3QuIERvbmVjIG9kaW8ganVzdG8sIHNvbGxpY2l0dWRpbiB1dCwgc3VzY2lwaXQgYSwgZmV1Z2lhdCBldCwgZXJvcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDE5LFxyXG4gIFwibmFtZVwiOiBcIkNoYXR0ZXJicmlkZ2VcIixcclxuICBcInByaWNlXCI6IDM0LjUsXHJcbiAgXCJkaXNjb3VudFwiOiAxOCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ3lwcnVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBub24gbGVjdHVzLiBBbGlxdWFtIHNpdCBhbWV0IGRpYW0gaW4gbWFnbmEgYmliZW5kdW0gaW1wZXJkaWV0LiBOdWxsYW0gb3JjaSBwZWRlLCB2ZW5lbmF0aXMgbm9uLCBzb2RhbGVzIHNlZCwgdGluY2lkdW50IGV1LCBmZWxpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyMCxcclxuICBcIm5hbWVcIjogXCJSaHlueXhcIixcclxuICBcInByaWNlXCI6IDgwLjUzLFxyXG4gIFwiZGlzY291bnRcIjogMzQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyMSxcclxuICBcIm5hbWVcIjogXCJXaWtpYm94XCIsXHJcbiAgXCJwcmljZVwiOiA2NC4xLFxyXG4gIFwiZGlzY291bnRcIjogMTAwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJNYWxpXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyMixcclxuICBcIm5hbWVcIjogXCJSaHlsb29cIixcclxuICBcInByaWNlXCI6IDc2LjEyLFxyXG4gIFwiZGlzY291bnRcIjogNjQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNhbmFkYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjMsXHJcbiAgXCJuYW1lXCI6IFwiUGl4b3BlXCIsXHJcbiAgXCJwcmljZVwiOiA1MS4xNCxcclxuICBcImRpc2NvdW50XCI6IDQ4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyNCxcclxuICBcIm5hbWVcIjogXCJPbG9vXCIsXHJcbiAgXCJwcmljZVwiOiA5OS40OSxcclxuICBcImRpc2NvdW50XCI6IDgxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTd2VkZW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDE4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyNSxcclxuICBcIm5hbWVcIjogXCJSZWFsZmlyZVwiLFxyXG4gIFwicHJpY2VcIjogMjMuMzEsXHJcbiAgXCJkaXNjb3VudFwiOiAyMSxcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiA0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI2LFxyXG4gIFwibmFtZVwiOiBcIlRyaWxpYVwiLFxyXG4gIFwicHJpY2VcIjogNDQuNTIsXHJcbiAgXCJkaXNjb3VudFwiOiAzMixcclxuICBcImNhdGVnb3J5XCI6IFwiU3VyaW5hbWVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDEyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBpZCBtYXNzYSBpZCBuaXNsIHZlbmVuYXRpcyBsYWNpbmlhLiBBZW5lYW4gc2l0IGFtZXQganVzdG8uIE1vcmJpIHV0IG9kaW8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjcsXHJcbiAgXCJuYW1lXCI6IFwiVmluZGVyXCIsXHJcbiAgXCJwcmljZVwiOiA0NC40OSxcclxuICBcImRpc2NvdW50XCI6IDIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBlcnVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDEyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI4LFxyXG4gIFwibmFtZVwiOiBcIlF1YXhvXCIsXHJcbiAgXCJwcmljZVwiOiAyNS42NixcclxuICBcImRpc2NvdW50XCI6IDcyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjksXHJcbiAgXCJuYW1lXCI6IFwiRGV2cHVsc2VcIixcclxuICBcInByaWNlXCI6IDE1LjA0LFxyXG4gIFwiZGlzY291bnRcIjogNjEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlllbWVuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBzaXQgYW1ldCBlcmF0LiBOdWxsYSB0ZW1wdXMuIFZpdmFtdXMgaW4gZmVsaXMgZXUgc2FwaWVuIGN1cnN1cyB2ZXN0aWJ1bHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzAsXHJcbiAgXCJuYW1lXCI6IFwiT3lvYmFcIixcclxuICBcInByaWNlXCI6IDQyLjg5LFxyXG4gIFwiZGlzY291bnRcIjogOTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzMSxcclxuICBcIm5hbWVcIjogXCJCdWJibGVtaXhcIixcclxuICBcInByaWNlXCI6IDQ0LjMxLFxyXG4gIFwiZGlzY291bnRcIjogNTYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkZyYW5jZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzMixcclxuICBcIm5hbWVcIjogXCJUd2l5b1wiLFxyXG4gIFwicHJpY2VcIjogMzcuODQsXHJcbiAgXCJkaXNjb3VudFwiOiA3NixcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiA0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzMyxcclxuICBcIm5hbWVcIjogXCJLYXp1XCIsXHJcbiAgXCJwcmljZVwiOiAyMC42MSxcclxuICBcImRpc2NvdW50XCI6IDM2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTZXJiaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM0LFxyXG4gIFwibmFtZVwiOiBcIkJsb2dwYWRcIixcclxuICBcInByaWNlXCI6IDIxLjU1LFxyXG4gIFwiZGlzY291bnRcIjogNDQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzUsXHJcbiAgXCJuYW1lXCI6IFwiVGVrZmx5XCIsXHJcbiAgXCJwcmljZVwiOiAyOS41NCxcclxuICBcImRpc2NvdW50XCI6IDY2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJMdXhlbWJvdXJnXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzNixcclxuICBcIm5hbWVcIjogXCJKYXlvXCIsXHJcbiAgXCJwcmljZVwiOiAyOS43OCxcclxuICBcImRpc2NvdW50XCI6IDQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzcsXHJcbiAgXCJuYW1lXCI6IFwiTGF6elwiLFxyXG4gIFwicHJpY2VcIjogOTcuODgsXHJcbiAgXCJkaXNjb3VudFwiOiA2NCxcclxuICBcImNhdGVnb3J5XCI6IFwiU291dGggQWZyaWNhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgaWQganVzdG8gc2l0IGFtZXQgc2FwaWVuIGRpZ25pc3NpbSB2ZXN0aWJ1bHVtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZGFwaWJ1cyBkb2xvciB2ZWwgZXN0LiBEb25lYyBvZGlvIGp1c3RvLCBzb2xsaWNpdHVkaW4gdXQsIHN1c2NpcGl0IGEsIGZldWdpYXQgZXQsIGVyb3MuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM4LFxyXG4gIFwibmFtZVwiOiBcIlJlYWxicmlkZ2VcIixcclxuICBcInByaWNlXCI6IDQxLjU3LFxyXG4gIFwiZGlzY291bnRcIjogMTAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAxNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM5LFxyXG4gIFwibmFtZVwiOiBcIlpvb3hvXCIsXHJcbiAgXCJwcmljZVwiOiA0NS43MSxcclxuICBcImRpc2NvdW50XCI6IDEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkFybWVuaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDAsXHJcbiAgXCJuYW1lXCI6IFwiVGFtYmVlXCIsXHJcbiAgXCJwcmljZVwiOiA2OC41NSxcclxuICBcImRpc2NvdW50XCI6IDMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkN1YmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUXVpc3F1ZSBpZCBqdXN0byBzaXQgYW1ldCBzYXBpZW4gZGlnbmlzc2ltIHZlc3RpYnVsdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBkYXBpYnVzIGRvbG9yIHZlbCBlc3QuIERvbmVjIG9kaW8ganVzdG8sIHNvbGxpY2l0dWRpbiB1dCwgc3VzY2lwaXQgYSwgZmV1Z2lhdCBldCwgZXJvcy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDEsXHJcbiAgXCJuYW1lXCI6IFwiQWltYm9cIixcclxuICBcInByaWNlXCI6IDM5LjAxLFxyXG4gIFwiZGlzY291bnRcIjogNDIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkdyZWVjZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0MixcclxuICBcIm5hbWVcIjogXCJQbGFqb1wiLFxyXG4gIFwicHJpY2VcIjogMzguNjEsXHJcbiAgXCJkaXNjb3VudFwiOiA1NSxcclxuICBcImNhdGVnb3J5XCI6IFwiQXJnZW50aW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDMsXHJcbiAgXCJuYW1lXCI6IFwiRWRnZWNsdWJcIixcclxuICBcInByaWNlXCI6IDU4LjA3LFxyXG4gIFwiZGlzY291bnRcIjogODUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk5ldyBaZWFsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0NCxcclxuICBcIm5hbWVcIjogXCJPYmFcIixcclxuICBcInByaWNlXCI6IDEyLjY5LFxyXG4gIFwiZGlzY291bnRcIjogNyxcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDIwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ1LFxyXG4gIFwibmFtZVwiOiBcIkZlZWRtaXhcIixcclxuICBcInByaWNlXCI6IDQzLjE0LFxyXG4gIFwiZGlzY291bnRcIjogNjMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkZyYW5jZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0NixcclxuICBcIm5hbWVcIjogXCJLYXR6XCIsXHJcbiAgXCJwcmljZVwiOiAzMS42NixcclxuICBcImRpc2NvdW50XCI6IDc5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTb3V0aCBLb3JlYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0NyxcclxuICBcIm5hbWVcIjogXCJBdmF2ZW9cIixcclxuICBcInByaWNlXCI6IDY1LjE1LFxyXG4gIFwiZGlzY291bnRcIjogOTMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1vbmdvbGlhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0OCxcclxuICBcIm5hbWVcIjogXCJCdWJibGV0dWJlXCIsXHJcbiAgXCJwcmljZVwiOiA4NS41LFxyXG4gIFwiZGlzY291bnRcIjogMTEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk5pZ2VyaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0OSxcclxuICBcIm5hbWVcIjogXCJKYW55eFwiLFxyXG4gIFwicHJpY2VcIjogNDEuMjksXHJcbiAgXCJkaXNjb3VudFwiOiAxNCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1MCxcclxuICBcIm5hbWVcIjogXCJTaHVmZmxlYmVhdFwiLFxyXG4gIFwicHJpY2VcIjogNjkuOTUsXHJcbiAgXCJkaXNjb3VudFwiOiAxMixcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTEsXHJcbiAgXCJuYW1lXCI6IFwiTWlkZWxcIixcclxuICBcInByaWNlXCI6IDkxLjA4LFxyXG4gIFwiZGlzY291bnRcIjogNixcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDIwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1MixcclxuICBcIm5hbWVcIjogXCJBdmFtYmFcIixcclxuICBcInByaWNlXCI6IDQyLjcyLFxyXG4gIFwiZGlzY291bnRcIjogMzIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkd1YW1cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1MyxcclxuICBcIm5hbWVcIjogXCJBdmFtYmFcIixcclxuICBcInByaWNlXCI6IDY5LjU2LFxyXG4gIFwiZGlzY291bnRcIjogOTcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU0LFxyXG4gIFwibmFtZVwiOiBcIlphemlvXCIsXHJcbiAgXCJwcmljZVwiOiAzMC4yNixcclxuICBcImRpc2NvdW50XCI6IDEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlRoYWlsYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAxNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTUsXHJcbiAgXCJuYW1lXCI6IFwiRGFiZmVlZFwiLFxyXG4gIFwicHJpY2VcIjogMzcuNDYsXHJcbiAgXCJkaXNjb3VudFwiOiAyOCxcclxuICBcImNhdGVnb3J5XCI6IFwiSmFwYW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU2LFxyXG4gIFwibmFtZVwiOiBcIkJ1YmJsZXR1YmVcIixcclxuICBcInByaWNlXCI6IDU4Ljk2LFxyXG4gIFwiZGlzY291bnRcIjogMSxcclxuICBcImNhdGVnb3J5XCI6IFwiSGFpdGlcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUXVpc3F1ZSBpZCBqdXN0byBzaXQgYW1ldCBzYXBpZW4gZGlnbmlzc2ltIHZlc3RpYnVsdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBkYXBpYnVzIGRvbG9yIHZlbCBlc3QuIERvbmVjIG9kaW8ganVzdG8sIHNvbGxpY2l0dWRpbiB1dCwgc3VzY2lwaXQgYSwgZmV1Z2lhdCBldCwgZXJvcy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMTgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTcsXHJcbiAgXCJuYW1lXCI6IFwiS2ltaWFcIixcclxuICBcInByaWNlXCI6IDUyLjA4LFxyXG4gIFwiZGlzY291bnRcIjogOTIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU4LFxyXG4gIFwibmFtZVwiOiBcIlJlYWxibGFiXCIsXHJcbiAgXCJwcmljZVwiOiA1OS4zOSxcclxuICBcImRpc2NvdW50XCI6IDkzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDU5LFxyXG4gIFwibmFtZVwiOiBcIlpvb25vb2RsZVwiLFxyXG4gIFwicHJpY2VcIjogNjMuNjYsXHJcbiAgXCJkaXNjb3VudFwiOiA3MyxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2MCxcclxuICBcIm5hbWVcIjogXCJEZXZwb2ludFwiLFxyXG4gIFwicHJpY2VcIjogODIuMjEsXHJcbiAgXCJkaXNjb3VudFwiOiA3OSxcclxuICBcImNhdGVnb3J5XCI6IFwiRWN1YWRvclwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDIwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYxLFxyXG4gIFwibmFtZVwiOiBcIkRhYnZpbmVcIixcclxuICBcInByaWNlXCI6IDEwLjI0LFxyXG4gIFwiZGlzY291bnRcIjogMzksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2MixcclxuICBcIm5hbWVcIjogXCJCbG9ndGFnXCIsXHJcbiAgXCJwcmljZVwiOiA1OS40OSxcclxuICBcImRpc2NvdW50XCI6IDgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYzLFxyXG4gIFwibmFtZVwiOiBcIlF1aW1tXCIsXHJcbiAgXCJwcmljZVwiOiAzOS45NixcclxuICBcImRpc2NvdW50XCI6IDUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlN3ZWRlblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjQsXHJcbiAgXCJuYW1lXCI6IFwiRmxhc2hzcGFuXCIsXHJcbiAgXCJwcmljZVwiOiA4MC45MSxcclxuICBcImRpc2NvdW50XCI6IDMzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2NSxcclxuICBcIm5hbWVcIjogXCJBdmFtYmFcIixcclxuICBcInByaWNlXCI6IDc0LjUyLFxyXG4gIFwiZGlzY291bnRcIjogNCxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9sYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIGxlbyBvZGlvLCBjb25kaW1lbnR1bSBpZCwgbHVjdHVzIG5lYywgbW9sZXN0aWUgc2VkLCBqdXN0by4gUGVsbGVudGVzcXVlIHZpdmVycmEgcGVkZSBhYyBkaWFtLiBDcmFzIHBlbGxlbnRlc3F1ZSB2b2x1dHBhdCBkdWkuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2NixcclxuICBcIm5hbWVcIjogXCJZb3VzcGFuXCIsXHJcbiAgXCJwcmljZVwiOiA2MC4zMyxcclxuICBcImRpc2NvdW50XCI6IDQzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY3LFxyXG4gIFwibmFtZVwiOiBcIlRvcGljc2hvdHNcIixcclxuICBcInByaWNlXCI6IDM0LjU5LFxyXG4gIFwiZGlzY291bnRcIjogODcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY4LFxyXG4gIFwibmFtZVwiOiBcIlZpdmFcIixcclxuICBcInByaWNlXCI6IDY2LjMzLFxyXG4gIFwiZGlzY291bnRcIjogMTQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkRlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDEzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2OSxcclxuICBcIm5hbWVcIjogXCJZb3ppb1wiLFxyXG4gIFwicHJpY2VcIjogMTYuNDUsXHJcbiAgXCJkaXNjb3VudFwiOiA3MCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2FtZXJvb25cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDcwLFxyXG4gIFwibmFtZVwiOiBcIkdldmVlXCIsXHJcbiAgXCJwcmljZVwiOiA0MS42NCxcclxuICBcImRpc2NvdW50XCI6IDc2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQZXJ1XCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzEsXHJcbiAgXCJuYW1lXCI6IFwiU2tpbGl0aFwiLFxyXG4gIFwicHJpY2VcIjogMjguNjYsXHJcbiAgXCJkaXNjb3VudFwiOiA3NCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAxMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDcyLFxyXG4gIFwibmFtZVwiOiBcIllvdXNwYW5cIixcclxuICBcInByaWNlXCI6IDcxLjgzLFxyXG4gIFwiZGlzY291bnRcIjogODksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlZlbmV6dWVsYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDczLFxyXG4gIFwibmFtZVwiOiBcIlR3aXlvXCIsXHJcbiAgXCJwcmljZVwiOiA5Ni4zOCxcclxuICBcImRpc2NvdW50XCI6IDQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3NCxcclxuICBcIm5hbWVcIjogXCJQaXhvYm9vXCIsXHJcbiAgXCJwcmljZVwiOiA0Mi43OSxcclxuICBcImRpc2NvdW50XCI6IDcxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3NSxcclxuICBcIm5hbWVcIjogXCJCYWJibGVzdG9ybVwiLFxyXG4gIFwicHJpY2VcIjogMTkuMTYsXHJcbiAgXCJkaXNjb3VudFwiOiA1NSxcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBhdCBpcHN1bSBhYyB0ZWxsdXMgc2VtcGVyIGludGVyZHVtLiBNYXVyaXMgdWxsYW1jb3JwZXIgcHVydXMgc2l0IGFtZXQgbnVsbGEuIFF1aXNxdWUgYXJjdSBsaWJlcm8sIHJ1dHJ1bSBhYywgbG9ib3J0aXMgdmVsLCBkYXBpYnVzIGF0LCBkaWFtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3NixcclxuICBcIm5hbWVcIjogXCJFYXp6eVwiLFxyXG4gIFwicHJpY2VcIjogNDAuMzcsXHJcbiAgXCJkaXNjb3VudFwiOiAzMyxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9sYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiA2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3NyxcclxuICBcIm5hbWVcIjogXCJZYWtpdHJpXCIsXHJcbiAgXCJwcmljZVwiOiA4OC41LFxyXG4gIFwiZGlzY291bnRcIjogMjcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvcnR1Z2FsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3OCxcclxuICBcIm5hbWVcIjogXCJQaG90b2JlYW5cIixcclxuICBcInByaWNlXCI6IDgxLjAsXHJcbiAgXCJkaXNjb3VudFwiOiA1OSxcclxuICBcImNhdGVnb3J5XCI6IFwiUnVzc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzksXHJcbiAgXCJuYW1lXCI6IFwiQnJvd3NlZHJpdmVcIixcclxuICBcInByaWNlXCI6IDQ3LjQ3LFxyXG4gIFwiZGlzY291bnRcIjogNTQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYSB1dCBlcmF0IGlkIG1hdXJpcyB2dWxwdXRhdGUgZWxlbWVudHVtLiBOdWxsYW0gdmFyaXVzLiBOdWxsYSBmYWNpbGlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODAsXHJcbiAgXCJuYW1lXCI6IFwiU2thbGl0aFwiLFxyXG4gIFwicHJpY2VcIjogMjguMDUsXHJcbiAgXCJkaXNjb3VudFwiOiAxOCxcclxuICBcImNhdGVnb3J5XCI6IFwiVW5pdGVkIFN0YXRlc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMTIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODEsXHJcbiAgXCJuYW1lXCI6IFwiWW91c3BhblwiLFxyXG4gIFwicHJpY2VcIjogNjUuMzksXHJcbiAgXCJkaXNjb3VudFwiOiAxMSxcclxuICBcImNhdGVnb3J5XCI6IFwiTmlnZXJcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDEwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODIsXHJcbiAgXCJuYW1lXCI6IFwiRmxhc2hzZXRcIixcclxuICBcInByaWNlXCI6IDI4LjkyLFxyXG4gIFwiZGlzY291bnRcIjogNjksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gYWMgZXN0IGxhY2luaWEgbmlzaSB2ZW5lbmF0aXMgdHJpc3RpcXVlLiBGdXNjZSBjb25ndWUsIGRpYW0gaWQgb3JuYXJlIGltcGVyZGlldCwgc2FwaWVuIHVybmEgcHJldGl1bSBuaXNsLCB1dCB2b2x1dHBhdCBzYXBpZW4gYXJjdSBzZWQgYXVndWUuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBpZCBqdXN0byBzaXQgYW1ldCBzYXBpZW4gZGlnbmlzc2ltIHZlc3RpYnVsdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBkYXBpYnVzIGRvbG9yIHZlbCBlc3QuIERvbmVjIG9kaW8ganVzdG8sIHNvbGxpY2l0dWRpbiB1dCwgc3VzY2lwaXQgYSwgZmV1Z2lhdCBldCwgZXJvcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODMsXHJcbiAgXCJuYW1lXCI6IFwiRGV2Y2FzdFwiLFxyXG4gIFwicHJpY2VcIjogODEuMTYsXHJcbiAgXCJkaXNjb3VudFwiOiA3NixcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4NCxcclxuICBcIm5hbWVcIjogXCJTa2Fqb1wiLFxyXG4gIFwicHJpY2VcIjogMTYuOTEsXHJcbiAgXCJkaXNjb3VudFwiOiA5MCxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg1LFxyXG4gIFwibmFtZVwiOiBcIkJyYWluc3BoZXJlXCIsXHJcbiAgXCJwcmljZVwiOiA5MS43MSxcclxuICBcImRpc2NvdW50XCI6IDIyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4NixcclxuICBcIm5hbWVcIjogXCJEaWdpdHViZVwiLFxyXG4gIFwicHJpY2VcIjogODQuNzYsXHJcbiAgXCJkaXNjb3VudFwiOiAzMCxcclxuICBcImNhdGVnb3J5XCI6IFwiSmFwYW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4NyxcclxuICBcIm5hbWVcIjogXCJSZWFsY3ViZVwiLFxyXG4gIFwicHJpY2VcIjogMTYuMTksXHJcbiAgXCJkaXNjb3VudFwiOiAzNSxcclxuICBcImNhdGVnb3J5XCI6IFwiTW9uZ29saWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODgsXHJcbiAgXCJuYW1lXCI6IFwiRmVlZG5hdGlvblwiLFxyXG4gIFwicHJpY2VcIjogMjMuNzksXHJcbiAgXCJkaXNjb3VudFwiOiA5NCxcclxuICBcImNhdGVnb3J5XCI6IFwiU2VyYmlhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMjAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4OSxcclxuICBcIm5hbWVcIjogXCJKYWJiZXJzcGhlcmVcIixcclxuICBcInByaWNlXCI6IDc4LjcxLFxyXG4gIFwiZGlzY291bnRcIjogMTAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYW0gc2l0IGFtZXQgdHVycGlzIGVsZW1lbnR1bSBsaWd1bGEgdmVoaWN1bGEgY29uc2VxdWF0LiBNb3JiaSBhIGlwc3VtLiBJbnRlZ2VyIGEgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMTMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5MCxcclxuICBcIm5hbWVcIjogXCJMaXZldHViZVwiLFxyXG4gIFwicHJpY2VcIjogNTIuOCxcclxuICBcImRpc2NvdW50XCI6IDEzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDkxLFxyXG4gIFwibmFtZVwiOiBcIkt3aWxpdGhcIixcclxuICBcInByaWNlXCI6IDkwLjcsXHJcbiAgXCJkaXNjb3VudFwiOiA4MSxcclxuICBcImNhdGVnb3J5XCI6IFwiR3JlZWNlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMjAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5MixcclxuICBcIm5hbWVcIjogXCJSZWFsY3ViZVwiLFxyXG4gIFwicHJpY2VcIjogNTIuNDUsXHJcbiAgXCJkaXNjb3VudFwiOiAxMDAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkhhaXRpXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIHRpbmNpZHVudCBhbnRlIHZlbCBpcHN1bS4gUHJhZXNlbnQgYmxhbmRpdCBsYWNpbmlhIGVyYXQuIFZlc3RpYnVsdW0gc2VkIG1hZ25hIGF0IG51bmMgY29tbW9kbyBwbGFjZXJhdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTMsXHJcbiAgXCJuYW1lXCI6IFwiWWF0YVwiLFxyXG4gIFwicHJpY2VcIjogODcuMDksXHJcbiAgXCJkaXNjb3VudFwiOiA2MyxcclxuICBcImNhdGVnb3J5XCI6IFwiUnVzc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5NCxcclxuICBcIm5hbWVcIjogXCJXaWtpZG9cIixcclxuICBcInByaWNlXCI6IDQ5LjE1LFxyXG4gIFwiZGlzY291bnRcIjogMTgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkF6ZXJiYWlqYW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5NSxcclxuICBcIm5hbWVcIjogXCJUb3BpY3Nob3RzXCIsXHJcbiAgXCJwcmljZVwiOiA4MC43NixcclxuICBcImRpc2NvdW50XCI6IDY3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJNZXhpY29cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTYsXHJcbiAgXCJuYW1lXCI6IFwiSmF4YmVhblwiLFxyXG4gIFwicHJpY2VcIjogOTEuNSxcclxuICBcImRpc2NvdW50XCI6IDg4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk3LFxyXG4gIFwibmFtZVwiOiBcIk9vYmFcIixcclxuICBcInByaWNlXCI6IDY3LjQxLFxyXG4gIFwiZGlzY291bnRcIjogMixcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAyMCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBwb3J0YSB2b2x1dHBhdCBlcmF0LiBRdWlzcXVlIGVyYXQgZXJvcywgdml2ZXJyYSBlZ2V0LCBjb25ndWUgZWdldCwgc2VtcGVyIHJ1dHJ1bSwgbnVsbGEuIE51bmMgcHVydXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBzaXQgYW1ldCBlcmF0LiBOdWxsYSB0ZW1wdXMuIFZpdmFtdXMgaW4gZmVsaXMgZXUgc2FwaWVuIGN1cnN1cyB2ZXN0aWJ1bHVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5OCxcclxuICBcIm5hbWVcIjogXCJKYWxvb1wiLFxyXG4gIFwicHJpY2VcIjogNDMuNDUsXHJcbiAgXCJkaXNjb3VudFwiOiAxMyxcclxuICBcImNhdGVnb3J5XCI6IFwiR2VybWFueVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk5LFxyXG4gIFwibmFtZVwiOiBcIkdpZ2F6b29tXCIsXHJcbiAgXCJwcmljZVwiOiA3MC4zMyxcclxuICBcImRpc2NvdW50XCI6IDQsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMTksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0sIGZlbGlzIHNlZCBpbnRlcmR1bSB2ZW5lbmF0aXMsIHR1cnBpcyBlbmltIGJsYW5kaXQgbWksIGluIHBvcnR0aXRvciBwZWRlIGp1c3RvIGV1IG1hc3NhLiBEb25lYyBkYXBpYnVzLiBEdWlzIGF0IHZlbGl0IGV1IGVzdCBjb25ndWUgZWxlbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDEwMCxcclxuICBcIm5hbWVcIjogXCJCcm93c2V6b29tXCIsXHJcbiAgXCJwcmljZVwiOiAzMi4zNyxcclxuICBcImRpc2NvdW50XCI6IDE3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfVxyXG4gIF1cclxufV1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL3Byb2R1Y3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==