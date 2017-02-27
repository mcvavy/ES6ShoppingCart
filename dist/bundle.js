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
	                return sum + (b.discount > 0 ? b.price - b.discount : b.price, 0.00);
	            }).toFixed(2);
	        }
	    }]);

	    return Cart;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	[{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI3ZWQ2ZjZhYzYwY2IyNjNjZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0RGF0YS5qcyJdLCJuYW1lcyI6WyJjYXJ0T2JqZWN0IiwiY29uc29sZSIsImxvZyIsInRvdGFsUHJpY2UiLCJ0b3RhbEl0ZW0iLCJDYXJ0IiwiaXRlbXMiLCJpdGVtIiwicHVzaCIsInBvc2l0aW9uIiwic3BsaWNlIiwicmVkdWNlIiwic3VtIiwiYiIsImRpc2NvdW50IiwicHJpY2UiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBLEtBQUlBLGFBQWEsZ0JBQWpCOztBQUdBQyxTQUFRQyxHQUFSLENBQVlGLFdBQVdHLFVBQVgsRUFBWjtBQUNBRixTQUFRQyxHQUFSLDZCQUFzQ0YsV0FBV0ksU0FBWCxFQUF0QyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztLQUVhQyxJLFdBQUFBLEk7QUFDVCxxQkFBYztBQUFBOztBQUNWLGNBQUtDLEtBQUw7QUFDSDs7OztpQ0FDT0MsSSxFQUFNO0FBQ1Ysa0JBQUtELEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkQsSUFBaEI7QUFDSDs7O29DQUVVRSxRLEVBQVM7QUFDaEIsa0JBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkQsUUFBbEIsRUFBMkIsQ0FBM0I7QUFDSDs7O3FDQUVVO0FBQ1Asb0JBQU8sS0FBS0gsS0FBTCxDQUFXSyxNQUFYLENBQWtCLFVBQUNDLEdB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QUFlLHlJQU5kO0FBT0QsYUFBVSxDQVBUO0FBUUQsZUFBWSxFQVJYO0FBU0QsZUFBWSxDQUNWO0FBQ0UsZ0JBQVc7QUFEYixJQURVLEVBSVY7QUFDRSxnQkFBVztBQURiLElBSlUsRUFPVjtBQUNFLGdCQUFXO0FBRGIsSUFQVTtBQVRYLEVBaDRESCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBiN2VkNmY2YWM2MGNiMjYzY2U3IiwiaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4vbW9kZWxzL0NhcnQnO1xyXG5cclxubGV0IGNhcnRPYmplY3QgPSBuZXcgQ2FydCgpO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKGNhcnRPYmplY3QudG90YWxQcmljZSgpKTtcclxuY29uc29sZS5sb2coYFRvdGFsIGl0ZW0gaW4gY2FydCBpczogJHtjYXJ0T2JqZWN0LnRvdGFsSXRlbSgpfWApO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiaW1wb3J0IHsgcHJvZHVjdERhdGEgfSBmcm9tICcuL3Byb2R1Y3REYXRhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwcm9kdWN0RGF0YTtcclxuICAgIH1cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtKHBvc2l0aW9uKXtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShwb3NpdGlvbiwxKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbEl0ZW0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSxiKSA9PiBzdW0gKyAxLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoKGIuZGlzY291bnQgPiAwKSA/IChiLnByaWNlIC0gYi5kaXNjb3VudCk6IGIucHJpY2UsIDAuMDApKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9DYXJ0LmpzIiwiW3tcclxuICBcImlkXCI6IDEsXHJcbiAgXCJuYW1lXCI6IFwiRml2ZWNsdWJcIixcclxuICBcInByaWNlXCI6IDQwLjQ1LFxyXG4gIFwiZGlzY291bnRcIjogNDgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyLFxyXG4gIFwibmFtZVwiOiBcIkRldnB1bHNlXCIsXHJcbiAgXCJwcmljZVwiOiAyNi4xNixcclxuICBcImRpc2NvdW50XCI6IDI1LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDEzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMsXHJcbiAgXCJuYW1lXCI6IFwiTWlib29cIixcclxuICBcInByaWNlXCI6IDg2LjE4LFxyXG4gIFwiZGlzY291bnRcIjogOTksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlJ1c3NpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGdXNjZSBwb3N1ZXJlIGZlbGlzIHNlZCBsYWN1cy4gTW9yYmkgc2VtIG1hdXJpcywgbGFvcmVldCB1dCwgcmhvbmN1cyBhbGlxdWV0LCBwdWx2aW5hciBzZWQsIG5pc2wuIE51bmMgcmhvbmN1cyBkdWkgdmVsIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMTIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQsXHJcbiAgXCJuYW1lXCI6IFwiUXVpcmVcIixcclxuICBcInByaWNlXCI6IDI5LjEzLFxyXG4gIFwiZGlzY291bnRcIjogNDksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBvbGFuZFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkRvbmVjIGRpYW0gbmVxdWUsIHZlc3RpYnVsdW0gZWdldCwgdnVscHV0YXRlIHV0LCB1bHRyaWNlcyB2ZWwsIGF1Z3VlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRG9uZWMgcGhhcmV0cmEsIG1hZ25hIHZlc3RpYnVsdW0gYWxpcXVldCB1bHRyaWNlcywgZXJhdCB0b3J0b3Igc29sbGljaXR1ZGluIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBzYXBpZW4gc2FwaWVuIG5vbiBtaS4gSW50ZWdlciBhYyBuZXF1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1LFxyXG4gIFwibmFtZVwiOiBcIlR3aW1ib1wiLFxyXG4gIFwicHJpY2VcIjogMTUuNDYsXHJcbiAgXCJkaXNjb3VudFwiOiA3NSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDIwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNixcclxuICBcIm5hbWVcIjogXCJQaG90b2J1Z1wiLFxyXG4gIFwicHJpY2VcIjogMzYuOTEsXHJcbiAgXCJkaXNjb3VudFwiOiA5MCxcclxuICBcImNhdGVnb3J5XCI6IFwiUGhpbGlwcGluZXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDcsXHJcbiAgXCJuYW1lXCI6IFwiSmF4bmF0aW9uXCIsXHJcbiAgXCJwcmljZVwiOiA5My4zMyxcclxuICBcImRpc2NvdW50XCI6IDU4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOCxcclxuICBcIm5hbWVcIjogXCJEYWJ0eXBlXCIsXHJcbiAgXCJwcmljZVwiOiA1OS41NCxcclxuICBcImRpc2NvdW50XCI6IDcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5LFxyXG4gIFwibmFtZVwiOiBcIlRhbWJlZVwiLFxyXG4gIFwicHJpY2VcIjogMTkuMzIsXHJcbiAgXCJkaXNjb3VudFwiOiA1MSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMjAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxMCxcclxuICBcIm5hbWVcIjogXCJUcnVkb29cIixcclxuICBcInByaWNlXCI6IDU3Ljk2LFxyXG4gIFwiZGlzY291bnRcIjogNDcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkFyZ2VudGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAxMCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTEsXHJcbiAgXCJuYW1lXCI6IFwiQWJhdGFcIixcclxuICBcInByaWNlXCI6IDQ4LjgxLFxyXG4gIFwiZGlzY291bnRcIjogNTUsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkFyZ2VudGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDEyLFxyXG4gIFwibmFtZVwiOiBcIkdpZ2FjbHViXCIsXHJcbiAgXCJwcmljZVwiOiA5Ny4yNCxcclxuICBcImRpc2NvdW50XCI6IDEwMCxcclxuICBcImNhdGVnb3J5XCI6IFwiWWVtZW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBlbGVpZmVuZCBxdWFtIGEgb2Rpby4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgaWQganVzdG8gc2l0IGFtZXQgc2FwaWVuIGRpZ25pc3NpbSB2ZXN0aWJ1bHVtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTnVsbGEgZGFwaWJ1cyBkb2xvciB2ZWwgZXN0LiBEb25lYyBvZGlvIGp1c3RvLCBzb2xsaWNpdHVkaW4gdXQsIHN1c2NpcGl0IGEsIGZldWdpYXQgZXQsIGVyb3MuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxMyxcclxuICBcIm5hbWVcIjogXCJMYXp6XCIsXHJcbiAgXCJwcmljZVwiOiA4OS4zMSxcclxuICBcImRpc2NvdW50XCI6IDYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNhbmFkYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTQsXHJcbiAgXCJuYW1lXCI6IFwiUmh5Y2Vyb1wiLFxyXG4gIFwicHJpY2VcIjogNDkuODUsXHJcbiAgXCJkaXNjb3VudFwiOiA0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJBcmdlbnRpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTUsXHJcbiAgXCJuYW1lXCI6IFwiR2Fic3BvdFwiLFxyXG4gIFwicHJpY2VcIjogNjEuNDIsXHJcbiAgXCJkaXNjb3VudFwiOiAzNSxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAxNixcclxuICBcIm5hbWVcIjogXCJUd2l5b1wiLFxyXG4gIFwicHJpY2VcIjogMzguNDUsXHJcbiAgXCJkaXNjb3VudFwiOiA1OCxcclxuICBcImNhdGVnb3J5XCI6IFwiTWV4aWNvXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTcsXHJcbiAgXCJuYW1lXCI6IFwiT29iYVwiLFxyXG4gIFwicHJpY2VcIjogNzQuMixcclxuICBcImRpc2NvdW50XCI6IDc5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTgsXHJcbiAgXCJuYW1lXCI6IFwiWW91YnJpZGdlXCIsXHJcbiAgXCJwcmljZVwiOiA1Ni43MixcclxuICBcImRpc2NvdW50XCI6IDE4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQYWxlc3RpbmlhbiBUZXJyaXRvcnlcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIGlkIGp1c3RvIHNpdCBhbWV0IHNhcGllbiBkaWduaXNzaW0gdmVzdGlidWx1bS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGRhcGlidXMgZG9sb3IgdmVsIGVzdC4gRG9uZWMgb2RpbyBqdXN0bywgc29sbGljaXR1ZGluIHV0LCBzdXNjaXBpdCBhLCBmZXVnaWF0IGV0LCBlcm9zLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTksXHJcbiAgXCJuYW1lXCI6IFwiQ2hhdHRlcmJyaWRnZVwiLFxyXG4gIFwicHJpY2VcIjogMzQuNSxcclxuICBcImRpc2NvdW50XCI6IDE4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDeXBydXNcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgaW4gZmVsaXMuIERvbmVjIHNlbXBlciBzYXBpZW4gYSBsaWJlcm8uIE5hbSBkdWkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIG5vbiBsZWN0dXMuIEFsaXF1YW0gc2l0IGFtZXQgZGlhbSBpbiBtYWduYSBiaWJlbmR1bSBpbXBlcmRpZXQuIE51bGxhbSBvcmNpIHBlZGUsIHZlbmVuYXRpcyBub24sIHNvZGFsZXMgc2VkLCB0aW5jaWR1bnQgZXUsIGZlbGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIHRpbmNpZHVudCBhbnRlIHZlbCBpcHN1bS4gUHJhZXNlbnQgYmxhbmRpdCBsYWNpbmlhIGVyYXQuIFZlc3RpYnVsdW0gc2VkIG1hZ25hIGF0IG51bmMgY29tbW9kbyBwbGFjZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDIwLFxyXG4gIFwibmFtZVwiOiBcIlJoeW55eFwiLFxyXG4gIFwicHJpY2VcIjogODAuNTMsXHJcbiAgXCJkaXNjb3VudFwiOiAzNCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRG9uZWMgZGlhbSBuZXF1ZSwgdmVzdGlidWx1bSBlZ2V0LCB2dWxwdXRhdGUgdXQsIHVsdHJpY2VzIHZlbCwgYXVndWUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEb25lYyBwaGFyZXRyYSwgbWFnbmEgdmVzdGlidWx1bSBhbGlxdWV0IHVsdHJpY2VzLCBlcmF0IHRvcnRvciBzb2xsaWNpdHVkaW4gbWksIHNpdCBhbWV0IGxvYm9ydGlzIHNhcGllbiBzYXBpZW4gbm9uIG1pLiBJbnRlZ2VyIGFjIG5lcXVlLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDIxLFxyXG4gIFwibmFtZVwiOiBcIldpa2lib3hcIixcclxuICBcInByaWNlXCI6IDY0LjEsXHJcbiAgXCJkaXNjb3VudFwiOiAxMDAsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1hbGlcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDIyLFxyXG4gIFwibmFtZVwiOiBcIlJoeWxvb1wiLFxyXG4gIFwicHJpY2VcIjogNzYuMTIsXHJcbiAgXCJkaXNjb3VudFwiOiA2NCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2FuYWRhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYWxpcXVhbSBjb252YWxsaXMgbnVuYy4gUHJvaW4gYXQgdHVycGlzIGEgcGVkZSBwb3N1ZXJlIG5vbnVtbXkuIEludGVnZXIgbm9uIHZlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyMyxcclxuICBcIm5hbWVcIjogXCJQaXhvcGVcIixcclxuICBcInByaWNlXCI6IDUxLjE0LFxyXG4gIFwiZGlzY291bnRcIjogNDgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBWaXZhbXVzIHZlc3RpYnVsdW0gc2FnaXR0aXMgc2FwaWVuLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI0LFxyXG4gIFwibmFtZVwiOiBcIk9sb29cIixcclxuICBcInByaWNlXCI6IDk5LjQ5LFxyXG4gIFwiZGlzY291bnRcIjogODEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlN3ZWRlblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMTgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDI1LFxyXG4gIFwibmFtZVwiOiBcIlJlYWxmaXJlXCIsXHJcbiAgXCJwcmljZVwiOiAyMy4zMSxcclxuICBcImRpc2NvdW50XCI6IDIxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBzYWdpdHRpcy4gTmFtIGNvbmd1ZSwgcmlzdXMgc2VtcGVyIHBvcnRhIHZvbHV0cGF0LCBxdWFtIHBlZGUgbG9ib3J0aXMgbGlndWxhLCBzaXQgYW1ldCBlbGVpZmVuZCBwZWRlIGxpYmVybyBxdWlzIG9yY2kuIE51bGxhbSBtb2xlc3RpZSBuaWJoIGluIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjYsXHJcbiAgXCJuYW1lXCI6IFwiVHJpbGlhXCIsXHJcbiAgXCJwcmljZVwiOiA0NC41MixcclxuICBcImRpc2NvdW50XCI6IDMyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTdXJpbmFtZVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGlkIG1hc3NhIGlkIG5pc2wgdmVuZW5hdGlzIGxhY2luaWEuIEFlbmVhbiBzaXQgYW1ldCBqdXN0by4gTW9yYmkgdXQgb2Rpby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyNyxcclxuICBcIm5hbWVcIjogXCJWaW5kZXJcIixcclxuICBcInByaWNlXCI6IDQ0LjQ5LFxyXG4gIFwiZGlzY291bnRcIjogMixcclxuICBcImNhdGVnb3J5XCI6IFwiUGVydVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTIsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlZlc3RpYnVsdW0gcXVhbSBzYXBpZW4sIHZhcml1cyB1dCwgYmxhbmRpdCBub24sIGludGVyZHVtIGluLCBhbnRlLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgRHVpcyBmYXVjaWJ1cyBhY2N1bXNhbiBvZGlvLiBDdXJhYml0dXIgY29udmFsbGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMjgsXHJcbiAgXCJuYW1lXCI6IFwiUXVheG9cIixcclxuICBcInByaWNlXCI6IDI1LjY2LFxyXG4gIFwiZGlzY291bnRcIjogNzIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgYW50ZS4gVml2YW11cyB0b3J0b3IuIER1aXMgbWF0dGlzIGVnZXN0YXMgbWV0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbm9uIHZlbGl0IG5lYyBuaXNpIHZ1bHB1dGF0ZSBub251bW15LiBNYWVjZW5hcyB0aW5jaWR1bnQgbGFjdXMgYXQgdmVsaXQuIFZpdmFtdXMgdmVsIG51bGxhIGVnZXQgZXJvcyBlbGVtZW50dW0gcGVsbGVudGVzcXVlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAyOSxcclxuICBcIm5hbWVcIjogXCJEZXZwdWxzZVwiLFxyXG4gIFwicHJpY2VcIjogMTUuMDQsXHJcbiAgXCJkaXNjb3VudFwiOiA2MSxcclxuICBcImNhdGVnb3J5XCI6IFwiWWVtZW5cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHV0IG1hc3NhIHF1aXMgYXVndWUgbHVjdHVzIHRpbmNpZHVudC4gTnVsbGEgbW9sbGlzIG1vbGVzdGllIGxvcmVtLiBRdWlzcXVlIHV0IGVyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gbGVjdHVzLiBQZWxsZW50ZXNxdWUgZWdldCBudW5jLiBEb25lYyBxdWlzIG9yY2kgZWdldCBvcmNpIHZlaGljdWxhIGNvbmRpbWVudHVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzMCxcclxuICBcIm5hbWVcIjogXCJPeW9iYVwiLFxyXG4gIFwicHJpY2VcIjogNDIuODksXHJcbiAgXCJkaXNjb3VudFwiOiA5MixcclxuICBcImNhdGVnb3J5XCI6IFwiUG9sYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMxLFxyXG4gIFwibmFtZVwiOiBcIkJ1YmJsZW1peFwiLFxyXG4gIFwicHJpY2VcIjogNDQuMzEsXHJcbiAgXCJkaXNjb3VudFwiOiA1NixcclxuICBcImNhdGVnb3J5XCI6IFwiRnJhbmNlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDE0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMyLFxyXG4gIFwibmFtZVwiOiBcIlR3aXlvXCIsXHJcbiAgXCJwcmljZVwiOiAzNy44NCxcclxuICBcImRpc2NvdW50XCI6IDc2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZWQgc2FnaXR0aXMuIE5hbSBjb25ndWUsIHJpc3VzIHNlbXBlciBwb3J0YSB2b2x1dHBhdCwgcXVhbSBwZWRlIGxvYm9ydGlzIGxpZ3VsYSwgc2l0IGFtZXQgZWxlaWZlbmQgcGVkZSBsaWJlcm8gcXVpcyBvcmNpLiBOdWxsYW0gbW9sZXN0aWUgbmliaCBpbiBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDMzLFxyXG4gIFwibmFtZVwiOiBcIkthenVcIixcclxuICBcInByaWNlXCI6IDIwLjYxLFxyXG4gIFwiZGlzY291bnRcIjogMzYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlNlcmJpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMTQsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBNb3JiaSB2ZXN0aWJ1bHVtLCB2ZWxpdCBpZCBwcmV0aXVtIGlhY3VsaXMsIGRpYW0gZXJhdCBmZXJtZW50dW0ganVzdG8sIG5lYyBjb25kaW1lbnR1bSBuZXF1ZSBzYXBpZW4gcGxhY2VyYXQgYW50ZS4gTnVsbGEganVzdG8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzQsXHJcbiAgXCJuYW1lXCI6IFwiQmxvZ3BhZFwiLFxyXG4gIFwicHJpY2VcIjogMjEuNTUsXHJcbiAgXCJkaXNjb3VudFwiOiA0NCxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9sYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LiBQcm9pbiByaXN1cy4gUHJhZXNlbnQgbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzNSxcclxuICBcIm5hbWVcIjogXCJUZWtmbHlcIixcclxuICBcInByaWNlXCI6IDI5LjU0LFxyXG4gIFwiZGlzY291bnRcIjogNjYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkx1eGVtYm91cmdcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJhZXNlbnQgYmxhbmRpdC4gTmFtIG51bGxhLiBJbnRlZ2VyIHBlZGUganVzdG8sIGxhY2luaWEgZWdldCwgdGluY2lkdW50IGVnZXQsIHRlbXB1cyB2ZWwsIHBlZGUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDM2LFxyXG4gIFwibmFtZVwiOiBcIkpheW9cIixcclxuICBcInByaWNlXCI6IDI5Ljc4LFxyXG4gIFwiZGlzY291bnRcIjogNCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhbSBwb3J0dGl0b3IgbGFjdXMgYXQgdHVycGlzLiBEb25lYyBwb3N1ZXJlIG1ldHVzIHZpdGFlIGlwc3VtLiBBbGlxdWFtIG5vbiBtYXVyaXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDExLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiAzNyxcclxuICBcIm5hbWVcIjogXCJMYXp6XCIsXHJcbiAgXCJwcmljZVwiOiA5Ny44OCxcclxuICBcImRpc2NvdW50XCI6IDY0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTb3V0aCBBZnJpY2FcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDEsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUXVpc3F1ZSBpZCBqdXN0byBzaXQgYW1ldCBzYXBpZW4gZGlnbmlzc2ltIHZlc3RpYnVsdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBOdWxsYSBkYXBpYnVzIGRvbG9yIHZlbCBlc3QuIERvbmVjIG9kaW8ganVzdG8sIHNvbGxpY2l0dWRpbiB1dCwgc3VzY2lwaXQgYSwgZmV1Z2lhdCBldCwgZXJvcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzgsXHJcbiAgXCJuYW1lXCI6IFwiUmVhbGJyaWRnZVwiLFxyXG4gIFwicHJpY2VcIjogNDEuNTcsXHJcbiAgXCJkaXNjb3VudFwiOiAxMCxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDE0LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLCBmZWxpcyBzZWQgaW50ZXJkdW0gdmVuZW5hdGlzLCB0dXJwaXMgZW5pbSBibGFuZGl0IG1pLCBpbiBwb3J0dGl0b3IgcGVkZSBqdXN0byBldSBtYXNzYS4gRG9uZWMgZGFwaWJ1cy4gRHVpcyBhdCB2ZWxpdCBldSBlc3QgY29uZ3VlIGVsZW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBFdGlhbSBmYXVjaWJ1cyBjdXJzdXMgdXJuYS4gVXQgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMzksXHJcbiAgXCJuYW1lXCI6IFwiWm9veG9cIixcclxuICBcInByaWNlXCI6IDQ1LjcxLFxyXG4gIFwiZGlzY291bnRcIjogMSxcclxuICBcImNhdGVnb3J5XCI6IFwiQXJtZW5pYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0MCxcclxuICBcIm5hbWVcIjogXCJUYW1iZWVcIixcclxuICBcInByaWNlXCI6IDY4LjU1LFxyXG4gIFwiZGlzY291bnRcIjogMyxcclxuICBcImNhdGVnb3J5XCI6IFwiQ3ViYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIGlkIGp1c3RvIHNpdCBhbWV0IHNhcGllbiBkaWduaXNzaW0gdmVzdGlidWx1bS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGRhcGlidXMgZG9sb3IgdmVsIGVzdC4gRG9uZWMgb2RpbyBqdXN0bywgc29sbGljaXR1ZGluIHV0LCBzdXNjaXBpdCBhLCBmZXVnaWF0IGV0LCBlcm9zLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA4LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0MSxcclxuICBcIm5hbWVcIjogXCJBaW1ib1wiLFxyXG4gIFwicHJpY2VcIjogMzkuMDEsXHJcbiAgXCJkaXNjb3VudFwiOiA0MixcclxuICBcImNhdGVnb3J5XCI6IFwiR3JlZWNlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHBvcnR0aXRvciBsYWN1cyBhdCB0dXJwaXMuIERvbmVjIHBvc3VlcmUgbWV0dXMgdml0YWUgaXBzdW0uIEFsaXF1YW0gbm9uIG1hdXJpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGVsbGVudGVzcXVlIGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBDcmFzIGluIHB1cnVzIGV1IG1hZ25hIHZ1bHB1dGF0ZSBsdWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQyLFxyXG4gIFwibmFtZVwiOiBcIlBsYWpvXCIsXHJcbiAgXCJwcmljZVwiOiAzOC42MSxcclxuICBcImRpc2NvdW50XCI6IDU1LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJBcmdlbnRpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDExLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGJpYmVuZHVtLiBNb3JiaSBub24gcXVhbSBuZWMgZHVpIGx1Y3R1cyBydXRydW0uIE51bGxhIHRlbGx1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA0MyxcclxuICBcIm5hbWVcIjogXCJFZGdlY2x1YlwiLFxyXG4gIFwicHJpY2VcIjogNTguMDcsXHJcbiAgXCJkaXNjb3VudFwiOiA4NSxcclxuICBcImNhdGVnb3J5XCI6IFwiTmV3IFplYWxhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTW9yYmkgbm9uIGxlY3R1cy4gQWxpcXVhbSBzaXQgYW1ldCBkaWFtIGluIG1hZ25hIGJpYmVuZHVtIGltcGVyZGlldC4gTnVsbGFtIG9yY2kgcGVkZSwgdmVuZW5hdGlzIG5vbiwgc29kYWxlcyBzZWQsIHRpbmNpZHVudCBldSwgZmVsaXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDE5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ0LFxyXG4gIFwibmFtZVwiOiBcIk9iYVwiLFxyXG4gIFwicHJpY2VcIjogMTIuNjksXHJcbiAgXCJkaXNjb3VudFwiOiA3LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gRXRpYW0gZmF1Y2lidXMgY3Vyc3VzIHVybmEuIFV0IHRlbGx1cy5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMjAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNDUsXHJcbiAgXCJuYW1lXCI6IFwiRmVlZG1peFwiLFxyXG4gIFwicHJpY2VcIjogNDMuMTQsXHJcbiAgXCJkaXNjb3VudFwiOiA2MyxcclxuICBcImNhdGVnb3J5XCI6IFwiRnJhbmNlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDksXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1vcmJpIHBvcnR0aXRvciBsb3JlbSBpZCBsaWd1bGEuIFN1c3BlbmRpc3NlIG9ybmFyZSBjb25zZXF1YXQgbGVjdHVzLiBJbiBlc3QgcmlzdXMsIGF1Y3RvciBzZWQsIHRyaXN0aXF1ZSBpbiwgdGVtcHVzIHNpdCBhbWV0LCBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ2LFxyXG4gIFwibmFtZVwiOiBcIkthdHpcIixcclxuICBcInByaWNlXCI6IDMxLjY2LFxyXG4gIFwiZGlzY291bnRcIjogNzksXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlNvdXRoIEtvcmVhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogNyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ3LFxyXG4gIFwibmFtZVwiOiBcIkF2YXZlb1wiLFxyXG4gIFwicHJpY2VcIjogNjUuMTUsXHJcbiAgXCJkaXNjb3VudFwiOiA5MyxcclxuICBcImNhdGVnb3J5XCI6IFwiTW9uZ29saWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciBhYyBsZW8uIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcyBtYXR0aXMgb2Rpby4gRG9uZWMgdml0YWUgbmlzaS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOYW0gdWx0cmljZXMsIGxpYmVybyBub24gbWF0dGlzIHB1bHZpbmFyLCBudWxsYSBwZWRlIHVsbGFtY29ycGVyIGF1Z3VlLCBhIHN1c2NpcGl0IG51bGxhIGVsaXQgYWMgbnVsbGEuIFNlZCB2ZWwgZW5pbSBzaXQgYW1ldCBudW5jIHZpdmVycmEgZGFwaWJ1cy4gTnVsbGEgc3VzY2lwaXQgbGlndWxhIGluIGxhY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ4LFxyXG4gIFwibmFtZVwiOiBcIkJ1YmJsZXR1YmVcIixcclxuICBcInByaWNlXCI6IDg1LjUsXHJcbiAgXCJkaXNjb3VudFwiOiAxMSxcclxuICBcImNhdGVnb3J5XCI6IFwiTmlnZXJpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBpbiBmZWxpcy4gRG9uZWMgc2VtcGVyIHNhcGllbiBhIGxpYmVyby4gTmFtIGR1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDQ5LFxyXG4gIFwibmFtZVwiOiBcIkphbnl4XCIsXHJcbiAgXCJwcmljZVwiOiA0MS4yOSxcclxuICBcImRpc2NvdW50XCI6IDE0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW50ZWdlciB0aW5jaWR1bnQgYW50ZSB2ZWwgaXBzdW0uIFByYWVzZW50IGJsYW5kaXQgbGFjaW5pYSBlcmF0LiBWZXN0aWJ1bHVtIHNlZCBtYWduYSBhdCBudW5jIGNvbW1vZG8gcGxhY2VyYXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUwLFxyXG4gIFwibmFtZVwiOiBcIlNodWZmbGViZWF0XCIsXHJcbiAgXCJwcmljZVwiOiA2OS45NSxcclxuICBcImRpc2NvdW50XCI6IDEyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGdXNjZSBjb25zZXF1YXQuIE51bGxhIG5pc2wuIE51bmMgbmlzbC5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1MSxcclxuICBcIm5hbWVcIjogXCJNaWRlbFwiLFxyXG4gIFwicHJpY2VcIjogOTEuMDgsXHJcbiAgXCJkaXNjb3VudFwiOiA2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMjAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUyLFxyXG4gIFwibmFtZVwiOiBcIkF2YW1iYVwiLFxyXG4gIFwicHJpY2VcIjogNDIuNzIsXHJcbiAgXCJkaXNjb3VudFwiOiAzMixcclxuICBcImNhdGVnb3J5XCI6IFwiR3VhbVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA1LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBsZW8gb2RpbywgcG9ydHRpdG9yIGlkLCBjb25zZXF1YXQgaW4sIGNvbnNlcXVhdCB1dCwgbnVsbGEuIFNlZCBhY2N1bXNhbiBmZWxpcy4gVXQgYXQgZG9sb3IgcXVpcyBvZGlvIGNvbnNlcXVhdCB2YXJpdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGludGVyZHVtIG1hdXJpcyBub24gbGlndWxhIHBlbGxlbnRlc3F1ZSB1bHRyaWNlcy4gUGhhc2VsbHVzIGlkIHNhcGllbiBpbiBzYXBpZW4gaWFjdWxpcyBjb25ndWUuIFZpdmFtdXMgbWV0dXMgYXJjdSwgYWRpcGlzY2luZyBtb2xlc3RpZSwgaGVuZHJlcml0IGF0LCB2dWxwdXRhdGUgdml0YWUsIG5pc2wuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDUzLFxyXG4gIFwibmFtZVwiOiBcIkF2YW1iYVwiLFxyXG4gIFwicHJpY2VcIjogNjkuNTYsXHJcbiAgXCJkaXNjb3VudFwiOiA5NyxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxNCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTQsXHJcbiAgXCJuYW1lXCI6IFwiWmF6aW9cIixcclxuICBcInByaWNlXCI6IDMwLjI2LFxyXG4gIFwiZGlzY291bnRcIjogMSxcclxuICBcImNhdGVnb3J5XCI6IFwiVGhhaWxhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1NSxcclxuICBcIm5hbWVcIjogXCJEYWJmZWVkXCIsXHJcbiAgXCJwcmljZVwiOiAzNy40NixcclxuICBcImRpc2NvdW50XCI6IDI4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJKYXBhblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBncmF2aWRhIG5pc2kgYXQgbmliaC4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEFsaXF1YW0gYXVndWUgcXVhbSwgc29sbGljaXR1ZGluIHZpdGFlLCBjb25zZWN0ZXR1ZXIgZWdldCwgcnV0cnVtIGF0LCBsb3JlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcmFlc2VudCBibGFuZGl0LiBOYW0gbnVsbGEuIEludGVnZXIgcGVkZSBqdXN0bywgbGFjaW5pYSBlZ2V0LCB0aW5jaWR1bnQgZWdldCwgdGVtcHVzIHZlbCwgcGVkZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTYsXHJcbiAgXCJuYW1lXCI6IFwiQnViYmxldHViZVwiLFxyXG4gIFwicHJpY2VcIjogNTguOTYsXHJcbiAgXCJkaXNjb3VudFwiOiAxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJIYWl0aVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJRdWlzcXVlIGlkIGp1c3RvIHNpdCBhbWV0IHNhcGllbiBkaWduaXNzaW0gdmVzdGlidWx1bS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGRhcGlidXMgZG9sb3IgdmVsIGVzdC4gRG9uZWMgb2RpbyBqdXN0bywgc29sbGljaXR1ZGluIHV0LCBzdXNjaXBpdCBhLCBmZXVnaWF0IGV0LCBlcm9zLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxOCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1vcmJpIHZlc3RpYnVsdW0sIHZlbGl0IGlkIHByZXRpdW0gaWFjdWxpcywgZGlhbSBlcmF0IGZlcm1lbnR1bSBqdXN0bywgbmVjIGNvbmRpbWVudHVtIG5lcXVlIHNhcGllbiBwbGFjZXJhdCBhbnRlLiBOdWxsYSBqdXN0by5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA1NyxcclxuICBcIm5hbWVcIjogXCJLaW1pYVwiLFxyXG4gIFwicHJpY2VcIjogNTIuMDgsXHJcbiAgXCJkaXNjb3VudFwiOiA5MixcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBlbGxlbnRlc3F1ZSBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gQ3JhcyBpbiBwdXJ1cyBldSBtYWduYSB2dWxwdXRhdGUgbHVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTgsXHJcbiAgXCJuYW1lXCI6IFwiUmVhbGJsYWJcIixcclxuICBcInByaWNlXCI6IDU5LjM5LFxyXG4gIFwiZGlzY291bnRcIjogOTMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlJ1c3NpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJFdGlhbSB2ZWwgYXVndWUuIFZlc3RpYnVsdW0gcnV0cnVtIHJ1dHJ1bSBuZXF1ZS4gQWVuZWFuIGF1Y3RvciBncmF2aWRhIHNlbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNTksXHJcbiAgXCJuYW1lXCI6IFwiWm9vbm9vZGxlXCIsXHJcbiAgXCJwcmljZVwiOiA2My42NixcclxuICBcImRpc2NvdW50XCI6IDczLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDaGluYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiA2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYwLFxyXG4gIFwibmFtZVwiOiBcIkRldnBvaW50XCIsXHJcbiAgXCJwcmljZVwiOiA4Mi4yMSxcclxuICBcImRpc2NvdW50XCI6IDc5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJFY3VhZG9yXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMjAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hdXJpcyBlbmltIGxlbywgcmhvbmN1cyBzZWQsIHZlc3RpYnVsdW0gc2l0IGFtZXQsIGN1cnN1cyBpZCwgdHVycGlzLiBJbnRlZ2VyIGFsaXF1ZXQsIG1hc3NhIGlkIGxvYm9ydGlzIGNvbnZhbGxpcywgdG9ydG9yIHJpc3VzIGRhcGlidXMgYXVndWUsIHZlbCBhY2N1bXNhbiB0ZWxsdXMgbmlzaSBldSBvcmNpLiBNYXVyaXMgbGFjaW5pYSBzYXBpZW4gcXVpcyBsaWJlcm8uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgY29uc2VxdWF0IGR1aSBuZWMgbmlzaSB2b2x1dHBhdCBlbGVpZmVuZC4gRG9uZWMgdXQgZG9sb3IuIE1vcmJpIHZlbCBsZWN0dXMgaW4gcXVhbSBmcmluZ2lsbGEgcmhvbmN1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjEsXHJcbiAgXCJuYW1lXCI6IFwiRGFidmluZVwiLFxyXG4gIFwicHJpY2VcIjogMTAuMjQsXHJcbiAgXCJkaXNjb3VudFwiOiAzOSxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9sYW5kXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZ1c2NlIGNvbnNlcXVhdC4gTnVsbGEgbmlzbC4gTnVuYyBuaXNsLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDYyLFxyXG4gIFwibmFtZVwiOiBcIkJsb2d0YWdcIixcclxuICBcInByaWNlXCI6IDU5LjQ5LFxyXG4gIFwiZGlzY291bnRcIjogOCxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkludGVnZXIgYWMgbGVvLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMgbWF0dGlzIG9kaW8uIERvbmVjIHZpdGFlIG5pc2kuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDE3LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjMsXHJcbiAgXCJuYW1lXCI6IFwiUXVpbW1cIixcclxuICBcInByaWNlXCI6IDM5Ljk2LFxyXG4gIFwiZGlzY291bnRcIjogNSxcclxuICBcImNhdGVnb3J5XCI6IFwiU3dlZGVuXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDEzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA2NCxcclxuICBcIm5hbWVcIjogXCJGbGFzaHNwYW5cIixcclxuICBcInByaWNlXCI6IDgwLjkxLFxyXG4gIFwiZGlzY291bnRcIjogMzMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbnRlZ2VyIHRpbmNpZHVudCBhbnRlIHZlbCBpcHN1bS4gUHJhZXNlbnQgYmxhbmRpdCBsYWNpbmlhIGVyYXQuIFZlc3RpYnVsdW0gc2VkIG1hZ25hIGF0IG51bmMgY29tbW9kbyBwbGFjZXJhdC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY1LFxyXG4gIFwibmFtZVwiOiBcIkF2YW1iYVwiLFxyXG4gIFwicHJpY2VcIjogNzQuNTIsXHJcbiAgXCJkaXNjb3VudFwiOiA0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQb2xhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFlY2VuYXMgbGVvIG9kaW8sIGNvbmRpbWVudHVtIGlkLCBsdWN0dXMgbmVjLCBtb2xlc3RpZSBzZWQsIGp1c3RvLiBQZWxsZW50ZXNxdWUgdml2ZXJyYSBwZWRlIGFjIGRpYW0uIENyYXMgcGVsbGVudGVzcXVlIHZvbHV0cGF0IGR1aS5cIixcclxuICBcInJhdGluZ1wiOiAyLFxyXG4gIFwicXVhbnRpdHlcIjogMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWVuZWFuIGxlY3R1cy4gUGVsbGVudGVzcXVlIGVnZXQgbnVuYy4gRG9uZWMgcXVpcyBvcmNpIGVnZXQgb3JjaSB2ZWhpY3VsYSBjb25kaW1lbnR1bS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gc2FnaXR0aXMgZHVpIHZlbCBuaXNsLiBEdWlzIGFjIG5pYmguIEZ1c2NlIGxhY3VzIHB1cnVzLCBhbGlxdWV0IGF0LCBmZXVnaWF0IG5vbiwgcHJldGl1bSBxdWlzLCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY2LFxyXG4gIFwibmFtZVwiOiBcIllvdXNwYW5cIixcclxuICBcInByaWNlXCI6IDYwLjMzLFxyXG4gIFwiZGlzY291bnRcIjogNDMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAyLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gaW50ZXJkdW0gbWF1cmlzIG5vbiBsaWd1bGEgcGVsbGVudGVzcXVlIHVsdHJpY2VzLiBQaGFzZWxsdXMgaWQgc2FwaWVuIGluIHNhcGllbiBpYWN1bGlzIGNvbmd1ZS4gVml2YW11cyBtZXR1cyBhcmN1LCBhZGlwaXNjaW5nIG1vbGVzdGllLCBoZW5kcmVyaXQgYXQsIHZ1bHB1dGF0ZSB2aXRhZSwgbmlzbC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjcsXHJcbiAgXCJuYW1lXCI6IFwiVG9waWNzaG90c1wiLFxyXG4gIFwicHJpY2VcIjogMzQuNTksXHJcbiAgXCJkaXNjb3VudFwiOiA4NyxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZ1c2NlIHBvc3VlcmUgZmVsaXMgc2VkIGxhY3VzLiBNb3JiaSBzZW0gbWF1cmlzLCBsYW9yZWV0IHV0LCByaG9uY3VzIGFsaXF1ZXQsIHB1bHZpbmFyIHNlZCwgbmlzbC4gTnVuYyByaG9uY3VzIGR1aSB2ZWwgc2VtLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gZWxlaWZlbmQgcXVhbSBhIG9kaW8uIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBldSBtaS4gTnVsbGEgYWMgZW5pbS4gSW4gdGVtcG9yLCB0dXJwaXMgbmVjIGV1aXNtb2Qgc2NlbGVyaXNxdWUsIHF1YW0gdHVycGlzIGFkaXBpc2NpbmcgbG9yZW0sIHZpdGFlIG1hdHRpcyBuaWJoIGxpZ3VsYSBuZWMgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyBsZW8gb2RpbywgY29uZGltZW50dW0gaWQsIGx1Y3R1cyBuZWMsIG1vbGVzdGllIHNlZCwganVzdG8uIFBlbGxlbnRlc3F1ZSB2aXZlcnJhIHBlZGUgYWMgZGlhbS4gQ3JhcyBwZWxsZW50ZXNxdWUgdm9sdXRwYXQgZHVpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNjgsXHJcbiAgXCJuYW1lXCI6IFwiVml2YVwiLFxyXG4gIFwicHJpY2VcIjogNjYuMzMsXHJcbiAgXCJkaXNjb3VudFwiOiAxNCxcclxuICBcImNhdGVnb3J5XCI6IFwiRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ29cIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWF1cmlzIGVuaW0gbGVvLCByaG9uY3VzIHNlZCwgdmVzdGlidWx1bSBzaXQgYW1ldCwgY3Vyc3VzIGlkLCB0dXJwaXMuIEludGVnZXIgYWxpcXVldCwgbWFzc2EgaWQgbG9ib3J0aXMgY29udmFsbGlzLCB0b3J0b3IgcmlzdXMgZGFwaWJ1cyBhdWd1ZSwgdmVsIGFjY3Vtc2FuIHRlbGx1cyBuaXNpIGV1IG9yY2kuIE1hdXJpcyBsYWNpbmlhIHNhcGllbiBxdWlzIGxpYmVyby5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogMTMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkNyYXMgbWkgcGVkZSwgbWFsZXN1YWRhIGluLCBpbXBlcmRpZXQgZXQsIGNvbW1vZG8gdnVscHV0YXRlLCBqdXN0by4gSW4gYmxhbmRpdCB1bHRyaWNlcyBlbmltLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIEV0aWFtIGZhdWNpYnVzIGN1cnN1cyB1cm5hLiBVdCB0ZWxsdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDY5LFxyXG4gIFwibmFtZVwiOiBcIllvemlvXCIsXHJcbiAgXCJwcmljZVwiOiAxNi40NSxcclxuICBcImRpc2NvdW50XCI6IDcwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJDYW1lcm9vblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxMCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdXQgbWFzc2EgcXVpcyBhdWd1ZSBsdWN0dXMgdGluY2lkdW50LiBOdWxsYSBtb2xsaXMgbW9sZXN0aWUgbG9yZW0uIFF1aXNxdWUgdXQgZXJhdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQWxpcXVhbSBxdWlzIHR1cnBpcyBlZ2V0IGVsaXQgc29kYWxlcyBzY2VsZXJpc3F1ZS4gTWF1cmlzIHNpdCBhbWV0IGVyb3MuIFN1c3BlbmRpc3NlIGFjY3Vtc2FuIHRvcnRvciBxdWlzIHR1cnBpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBjb25zZXF1YXQgZHVpIG5lYyBuaXNpIHZvbHV0cGF0IGVsZWlmZW5kLiBEb25lYyB1dCBkb2xvci4gTW9yYmkgdmVsIGxlY3R1cyBpbiBxdWFtIGZyaW5naWxsYSByaG9uY3VzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzAsXHJcbiAgXCJuYW1lXCI6IFwiR2V2ZWVcIixcclxuICBcInByaWNlXCI6IDQxLjY0LFxyXG4gIFwiZGlzY291bnRcIjogNzYsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIlBlcnVcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHVpcyBiaWJlbmR1bS4gTW9yYmkgbm9uIHF1YW0gbmVjIGR1aSBsdWN0dXMgcnV0cnVtLiBOdWxsYSB0ZWxsdXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gZXUgbWkuIE51bGxhIGFjIGVuaW0uIEluIHRlbXBvciwgdHVycGlzIG5lYyBldWlzbW9kIHNjZWxlcmlzcXVlLCBxdWFtIHR1cnBpcyBhZGlwaXNjaW5nIGxvcmVtLCB2aXRhZSBtYXR0aXMgbmliaCBsaWd1bGEgbmVjIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBhbGlxdWFtIGNvbnZhbGxpcyBudW5jLiBQcm9pbiBhdCB0dXJwaXMgYSBwZWRlIHBvc3VlcmUgbm9udW1teS4gSW50ZWdlciBub24gdmVsaXQuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYXVyaXMgZW5pbSBsZW8sIHJob25jdXMgc2VkLCB2ZXN0aWJ1bHVtIHNpdCBhbWV0LCBjdXJzdXMgaWQsIHR1cnBpcy4gSW50ZWdlciBhbGlxdWV0LCBtYXNzYSBpZCBsb2JvcnRpcyBjb252YWxsaXMsIHRvcnRvciByaXN1cyBkYXBpYnVzIGF1Z3VlLCB2ZWwgYWNjdW1zYW4gdGVsbHVzIG5pc2kgZXUgb3JjaS4gTWF1cmlzIGxhY2luaWEgc2FwaWVuIHF1aXMgbGliZXJvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3MSxcclxuICBcIm5hbWVcIjogXCJTa2lsaXRoXCIsXHJcbiAgXCJwcmljZVwiOiAyOC42NixcclxuICBcImRpc2NvdW50XCI6IDc0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDExLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTmFtIHVsdHJpY2VzLCBsaWJlcm8gbm9uIG1hdHRpcyBwdWx2aW5hciwgbnVsbGEgcGVkZSB1bGxhbWNvcnBlciBhdWd1ZSwgYSBzdXNjaXBpdCBudWxsYSBlbGl0IGFjIG51bGxhLiBTZWQgdmVsIGVuaW0gc2l0IGFtZXQgbnVuYyB2aXZlcnJhIGRhcGlidXMuIE51bGxhIHN1c2NpcGl0IGxpZ3VsYSBpbiBsYWN1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzIsXHJcbiAgXCJuYW1lXCI6IFwiWW91c3BhblwiLFxyXG4gIFwicHJpY2VcIjogNzEuODMsXHJcbiAgXCJkaXNjb3VudFwiOiA4OSxcclxuICBcImNhdGVnb3J5XCI6IFwiVmVuZXp1ZWxhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiA5LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQcm9pbiBpbnRlcmR1bSBtYXVyaXMgbm9uIGxpZ3VsYSBwZWxsZW50ZXNxdWUgdWx0cmljZXMuIFBoYXNlbGx1cyBpZCBzYXBpZW4gaW4gc2FwaWVuIGlhY3VsaXMgY29uZ3VlLiBWaXZhbXVzIG1ldHVzIGFyY3UsIGFkaXBpc2NpbmcgbW9sZXN0aWUsIGhlbmRyZXJpdCBhdCwgdnVscHV0YXRlIHZpdGFlLCBuaXNsLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNb3JiaSBwb3J0dGl0b3IgbG9yZW0gaWQgbGlndWxhLiBTdXNwZW5kaXNzZSBvcm5hcmUgY29uc2VxdWF0IGxlY3R1cy4gSW4gZXN0IHJpc3VzLCBhdWN0b3Igc2VkLCB0cmlzdGlxdWUgaW4sIHRlbXB1cyBzaXQgYW1ldCwgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB0cmlzdGlxdWUsIGVzdCBldCB0ZW1wdXMgc2VtcGVyLCBlc3QgcXVhbSBwaGFyZXRyYSBtYWduYSwgYWMgY29uc2VxdWF0IG1ldHVzIHNhcGllbiB1dCBudW5jLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBDdXJhZTsgTWF1cmlzIHZpdmVycmEgZGlhbSB2aXRhZSBxdWFtLiBTdXNwZW5kaXNzZSBwb3RlbnRpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogNzMsXHJcbiAgXCJuYW1lXCI6IFwiVHdpeW9cIixcclxuICBcInByaWNlXCI6IDk2LjM4LFxyXG4gIFwiZGlzY291bnRcIjogNCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlF1aXNxdWUgcG9ydGEgdm9sdXRwYXQgZXJhdC4gUXVpc3F1ZSBlcmF0IGVyb3MsIHZpdmVycmEgZWdldCwgY29uZ3VlIGVnZXQsIHNlbXBlciBydXRydW0sIG51bGxhLiBOdW5jIHB1cnVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAzLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgZ3JhdmlkYSBuaXNpIGF0IG5pYmguIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBBbGlxdWFtIGF1Z3VlIHF1YW0sIHNvbGxpY2l0dWRpbiB2aXRhZSwgY29uc2VjdGV0dWVyIGVnZXQsIHJ1dHJ1bSBhdCwgbG9yZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk1hZWNlbmFzIHRyaXN0aXF1ZSwgZXN0IGV0IHRlbXB1cyBzZW1wZXIsIGVzdCBxdWFtIHBoYXJldHJhIG1hZ25hLCBhYyBjb25zZXF1YXQgbWV0dXMgc2FwaWVuIHV0IG51bmMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBNYXVyaXMgdml2ZXJyYSBkaWFtIHZpdGFlIHF1YW0uIFN1c3BlbmRpc3NlIHBvdGVudGkuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBsZWN0dXMuIFBlbGxlbnRlc3F1ZSBlZ2V0IG51bmMuIERvbmVjIHF1aXMgb3JjaSBlZ2V0IG9yY2kgdmVoaWN1bGEgY29uZGltZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc0LFxyXG4gIFwibmFtZVwiOiBcIlBpeG9ib29cIixcclxuICBcInByaWNlXCI6IDQyLjc5LFxyXG4gIFwiZGlzY291bnRcIjogNzEsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkNoaW5hXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gVml2YW11cyB2ZXN0aWJ1bHVtIHNhZ2l0dGlzIHNhcGllbi4gQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxNSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTW9yYmkgcG9ydHRpdG9yIGxvcmVtIGlkIGxpZ3VsYS4gU3VzcGVuZGlzc2Ugb3JuYXJlIGNvbnNlcXVhdCBsZWN0dXMuIEluIGVzdCByaXN1cywgYXVjdG9yIHNlZCwgdHJpc3RpcXVlIGluLCB0ZW1wdXMgc2l0IGFtZXQsIHNlbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBjb25ndWUuIEV0aWFtIGp1c3RvLiBFdGlhbSBwcmV0aXVtIGlhY3VsaXMganVzdG8uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc1LFxyXG4gIFwibmFtZVwiOiBcIkJhYmJsZXN0b3JtXCIsXHJcbiAgXCJwcmljZVwiOiAxOS4xNixcclxuICBcImRpc2NvdW50XCI6IDU1LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQaGlsaXBwaW5lc1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dWVyIGFkaXBpc2NpbmcgZWxpdC4gUHJvaW4gcmlzdXMuIFByYWVzZW50IGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGF0IGlwc3VtIGFjIHRlbGx1cyBzZW1wZXIgaW50ZXJkdW0uIE1hdXJpcyB1bGxhbWNvcnBlciBwdXJ1cyBzaXQgYW1ldCBudWxsYS4gUXVpc3F1ZSBhcmN1IGxpYmVybywgcnV0cnVtIGFjLCBsb2JvcnRpcyB2ZWwsIGRhcGlidXMgYXQsIGRpYW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGxlbyBvZGlvLCBwb3J0dGl0b3IgaWQsIGNvbnNlcXVhdCBpbiwgY29uc2VxdWF0IHV0LCBudWxsYS4gU2VkIGFjY3Vtc2FuIGZlbGlzLiBVdCBhdCBkb2xvciBxdWlzIG9kaW8gY29uc2VxdWF0IHZhcml1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByb2luIGV1IG1pLiBOdWxsYSBhYyBlbmltLiBJbiB0ZW1wb3IsIHR1cnBpcyBuZWMgZXVpc21vZCBzY2VsZXJpc3F1ZSwgcXVhbSB0dXJwaXMgYWRpcGlzY2luZyBsb3JlbSwgdml0YWUgbWF0dGlzIG5pYmggbGlndWxhIG5lYyBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc2LFxyXG4gIFwibmFtZVwiOiBcIkVhenp5XCIsXHJcbiAgXCJwcmljZVwiOiA0MC4zNyxcclxuICBcImRpc2NvdW50XCI6IDMzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJQb2xhbmRcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogNSxcclxuICBcInF1YW50aXR5XCI6IDYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkN1cmFiaXR1ciBpbiBsaWJlcm8gdXQgbWFzc2Egdm9sdXRwYXQgY29udmFsbGlzLiBNb3JiaSBvZGlvIG9kaW8sIGVsZW1lbnR1bSBldSwgaW50ZXJkdW0gZXUsIHRpbmNpZHVudCBpbiwgbGVvLiBNYWVjZW5hcyBwdWx2aW5hciBsb2JvcnRpcyBlc3QuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc3LFxyXG4gIFwibmFtZVwiOiBcIllha2l0cmlcIixcclxuICBcInByaWNlXCI6IDg4LjUsXHJcbiAgXCJkaXNjb3VudFwiOiAyNyxcclxuICBcImNhdGVnb3J5XCI6IFwiUG9ydHVnYWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gTW9yYmkgdmVzdGlidWx1bSwgdmVsaXQgaWQgcHJldGl1bSBpYWN1bGlzLCBkaWFtIGVyYXQgZmVybWVudHVtIGp1c3RvLCBuZWMgY29uZGltZW50dW0gbmVxdWUgc2FwaWVuIHBsYWNlcmF0IGFudGUuIE51bGxhIGp1c3RvLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDc4LFxyXG4gIFwibmFtZVwiOiBcIlBob3RvYmVhblwiLFxyXG4gIFwicHJpY2VcIjogODEuMCxcclxuICBcImRpc2NvdW50XCI6IDU5LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gcXVpcyBqdXN0by4gTWFlY2VuYXMgcmhvbmN1cyBhbGlxdWFtIGxhY3VzLiBNb3JiaSBxdWlzIHRvcnRvciBpZCBudWxsYSB1bHRyaWNlcyBhbGlxdWV0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA3OSxcclxuICBcIm5hbWVcIjogXCJCcm93c2Vkcml2ZVwiLFxyXG4gIFwicHJpY2VcIjogNDcuNDcsXHJcbiAgXCJkaXNjb3VudFwiOiA1NCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQWVuZWFuIGZlcm1lbnR1bS4gRG9uZWMgdXQgbWF1cmlzIGVnZXQgbWFzc2EgdGVtcG9yIGNvbnZhbGxpcy4gTnVsbGEgbmVxdWUgbGliZXJvLCBjb252YWxsaXMgZWdldCwgZWxlaWZlbmQgbHVjdHVzLCB1bHRyaWNpZXMgZXUsIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogNCxcclxuICBcInF1YW50aXR5XCI6IDMsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhIHV0IGVyYXQgaWQgbWF1cmlzIHZ1bHB1dGF0ZSBlbGVtZW50dW0uIE51bGxhbSB2YXJpdXMuIE51bGxhIGZhY2lsaXNpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGFsaXF1YW0gY29udmFsbGlzIG51bmMuIFByb2luIGF0IHR1cnBpcyBhIHBlZGUgcG9zdWVyZSBub251bW15LiBJbnRlZ2VyIG5vbiB2ZWxpdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGdyYXZpZGEgbmlzaSBhdCBuaWJoLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gQWxpcXVhbSBhdWd1ZSBxdWFtLCBzb2xsaWNpdHVkaW4gdml0YWUsIGNvbnNlY3RldHVlciBlZ2V0LCBydXRydW0gYXQsIGxvcmVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4MCxcclxuICBcIm5hbWVcIjogXCJTa2FsaXRoXCIsXHJcbiAgXCJwcmljZVwiOiAyOC4wNSxcclxuICBcImRpc2NvdW50XCI6IDE4LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJVbml0ZWQgU3RhdGVzXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxMixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4MSxcclxuICBcIm5hbWVcIjogXCJZb3VzcGFuXCIsXHJcbiAgXCJwcmljZVwiOiA2NS4zOSxcclxuICBcImRpc2NvdW50XCI6IDExLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJOaWdlclwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBzYWdpdHRpcyBkdWkgdmVsIG5pc2wuIER1aXMgYWMgbmliaC4gRnVzY2UgbGFjdXMgcHVydXMsIGFsaXF1ZXQgYXQsIGZldWdpYXQgbm9uLCBwcmV0aXVtIHF1aXMsIGxlY3R1cy5cIixcclxuICBcInJhdGluZ1wiOiA1LFxyXG4gIFwicXVhbnRpdHlcIjogMTAsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkV0aWFtIHZlbCBhdWd1ZS4gVmVzdGlidWx1bSBydXRydW0gcnV0cnVtIG5lcXVlLiBBZW5lYW4gYXVjdG9yIGdyYXZpZGEgc2VtLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJOdWxsYW0gcG9ydHRpdG9yIGxhY3VzIGF0IHR1cnBpcy4gRG9uZWMgcG9zdWVyZSBtZXR1cyB2aXRhZSBpcHN1bS4gQWxpcXVhbSBub24gbWF1cmlzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4MixcclxuICBcIm5hbWVcIjogXCJGbGFzaHNldFwiLFxyXG4gIFwicHJpY2VcIjogMjguOTIsXHJcbiAgXCJkaXNjb3VudFwiOiA2OSxcclxuICBcImNhdGVnb3J5XCI6IFwiQnJhemlsXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiA2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiVmVzdGlidWx1bSBhYyBlc3QgbGFjaW5pYSBuaXNpIHZlbmVuYXRpcyB0cmlzdGlxdWUuIEZ1c2NlIGNvbmd1ZSwgZGlhbSBpZCBvcm5hcmUgaW1wZXJkaWV0LCBzYXBpZW4gdXJuYSBwcmV0aXVtIG5pc2wsIHV0IHZvbHV0cGF0IHNhcGllbiBhcmN1IHNlZCBhdWd1ZS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIGlkIGp1c3RvIHNpdCBhbWV0IHNhcGllbiBkaWduaXNzaW0gdmVzdGlidWx1bS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE51bGxhIGRhcGlidXMgZG9sb3IgdmVsIGVzdC4gRG9uZWMgb2RpbyBqdXN0bywgc29sbGljaXR1ZGluIHV0LCBzdXNjaXBpdCBhLCBmZXVnaWF0IGV0LCBlcm9zLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiSW4gY29uZ3VlLiBFdGlhbSBqdXN0by4gRXRpYW0gcHJldGl1bSBpYWN1bGlzIGp1c3RvLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4MyxcclxuICBcIm5hbWVcIjogXCJEZXZjYXN0XCIsXHJcbiAgXCJwcmljZVwiOiA4MS4xNixcclxuICBcImRpc2NvdW50XCI6IDc2LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDcmFzIG1pIHBlZGUsIG1hbGVzdWFkYSBpbiwgaW1wZXJkaWV0IGV0LCBjb21tb2RvIHZ1bHB1dGF0ZSwganVzdG8uIEluIGJsYW5kaXQgdWx0cmljZXMgZW5pbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg0LFxyXG4gIFwibmFtZVwiOiBcIlNrYWpvXCIsXHJcbiAgXCJwcmljZVwiOiAxNi45MSxcclxuICBcImRpc2NvdW50XCI6IDkwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJCcmF6aWxcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMSxcclxuICBcInF1YW50aXR5XCI6IDE2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogODUsXHJcbiAgXCJuYW1lXCI6IFwiQnJhaW5zcGhlcmVcIixcclxuICBcInByaWNlXCI6IDkxLjcxLFxyXG4gIFwiZGlzY291bnRcIjogMjIsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIixcclxuICBcInJhdGluZ1wiOiAzLFxyXG4gIFwicXVhbnRpdHlcIjogOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHNhZ2l0dGlzIGR1aSB2ZWwgbmlzbC4gRHVpcyBhYyBuaWJoLiBGdXNjZSBsYWN1cyBwdXJ1cywgYWxpcXVldCBhdCwgZmV1Z2lhdCBub24sIHByZXRpdW0gcXVpcywgbGVjdHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgYXQgaXBzdW0gYWMgdGVsbHVzIHNlbXBlciBpbnRlcmR1bS4gTWF1cmlzIHVsbGFtY29ycGVyIHB1cnVzIHNpdCBhbWV0IG51bGxhLiBRdWlzcXVlIGFyY3UgbGliZXJvLCBydXRydW0gYWMsIGxvYm9ydGlzIHZlbCwgZGFwaWJ1cyBhdCwgZGlhbS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3VyYWJpdHVyIGluIGxpYmVybyB1dCBtYXNzYSB2b2x1dHBhdCBjb252YWxsaXMuIE1vcmJpIG9kaW8gb2RpbywgZWxlbWVudHVtIGV1LCBpbnRlcmR1bSBldSwgdGluY2lkdW50IGluLCBsZW8uIE1hZWNlbmFzIHB1bHZpbmFyIGxvYm9ydGlzIGVzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg2LFxyXG4gIFwibmFtZVwiOiBcIkRpZ2l0dWJlXCIsXHJcbiAgXCJwcmljZVwiOiA4NC43NixcclxuICBcImRpc2NvdW50XCI6IDMwLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJKYXBhblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIixcclxuICBcInJhdGluZ1wiOiAxLFxyXG4gIFwicXVhbnRpdHlcIjogNixcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTnVsbGEgdXQgZXJhdCBpZCBtYXVyaXMgdnVscHV0YXRlIGVsZW1lbnR1bS4gTnVsbGFtIHZhcml1cy4gTnVsbGEgZmFjaWxpc2kuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg3LFxyXG4gIFwibmFtZVwiOiBcIlJlYWxjdWJlXCIsXHJcbiAgXCJwcmljZVwiOiAxNi4xOSxcclxuICBcImRpc2NvdW50XCI6IDM1LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJNb25nb2xpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAxMSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA4OCxcclxuICBcIm5hbWVcIjogXCJGZWVkbmF0aW9uXCIsXHJcbiAgXCJwcmljZVwiOiAyMy43OSxcclxuICBcImRpc2NvdW50XCI6IDk0LFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJTZXJiaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJhZXNlbnQgaWQgbWFzc2EgaWQgbmlzbCB2ZW5lbmF0aXMgbGFjaW5pYS4gQWVuZWFuIHNpdCBhbWV0IGp1c3RvLiBNb3JiaSB1dCBvZGlvLlwiLFxyXG4gIFwicmF0aW5nXCI6IDEsXHJcbiAgXCJxdWFudGl0eVwiOiAyMCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIGluIGZlbGlzLiBEb25lYyBzZW1wZXIgc2FwaWVuIGEgbGliZXJvLiBOYW0gZHVpLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTWFlY2VuYXMgdHJpc3RpcXVlLCBlc3QgZXQgdGVtcHVzIHNlbXBlciwgZXN0IHF1YW0gcGhhcmV0cmEgbWFnbmEsIGFjIGNvbnNlcXVhdCBtZXR1cyBzYXBpZW4gdXQgbnVuYy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IE1hdXJpcyB2aXZlcnJhIGRpYW0gdml0YWUgcXVhbS4gU3VzcGVuZGlzc2UgcG90ZW50aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQuIFByb2luIHJpc3VzLiBQcmFlc2VudCBsZWN0dXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDg5LFxyXG4gIFwibmFtZVwiOiBcIkphYmJlcnNwaGVyZVwiLFxyXG4gIFwicHJpY2VcIjogNzguNzEsXHJcbiAgXCJkaXNjb3VudFwiOiAxMCxcclxuICBcImNhdGVnb3J5XCI6IFwiSW5kb25lc2lhXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk51bGxhbSBzaXQgYW1ldCB0dXJwaXMgZWxlbWVudHVtIGxpZ3VsYSB2ZWhpY3VsYSBjb25zZXF1YXQuIE1vcmJpIGEgaXBzdW0uIEludGVnZXIgYSBuaWJoLlwiLFxyXG4gIFwicmF0aW5nXCI6IDUsXHJcbiAgXCJxdWFudGl0eVwiOiAxMyxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRXRpYW0gdmVsIGF1Z3VlLiBWZXN0aWJ1bHVtIHJ1dHJ1bSBydXRydW0gbmVxdWUuIEFlbmVhbiBhdWN0b3IgZ3JhdmlkYSBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDkwLFxyXG4gIFwibmFtZVwiOiBcIkxpdmV0dWJlXCIsXHJcbiAgXCJwcmljZVwiOiA1Mi44LFxyXG4gIFwiZGlzY291bnRcIjogMTMsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbGlxdWFtIHF1aXMgdHVycGlzIGVnZXQgZWxpdCBzb2RhbGVzIHNjZWxlcmlzcXVlLiBNYXVyaXMgc2l0IGFtZXQgZXJvcy4gU3VzcGVuZGlzc2UgYWNjdW1zYW4gdG9ydG9yIHF1aXMgdHVycGlzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiA2LFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQZWxsZW50ZXNxdWUgYXQgbnVsbGEuIFN1c3BlbmRpc3NlIHBvdGVudGkuIENyYXMgaW4gcHVydXMgZXUgbWFnbmEgdnVscHV0YXRlIGx1Y3R1cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTEsXHJcbiAgXCJuYW1lXCI6IFwiS3dpbGl0aFwiLFxyXG4gIFwicHJpY2VcIjogOTAuNyxcclxuICBcImRpc2NvdW50XCI6IDgxLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJHcmVlY2VcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2VkIHNhZ2l0dGlzLiBOYW0gY29uZ3VlLCByaXN1cyBzZW1wZXIgcG9ydGEgdm9sdXRwYXQsIHF1YW0gcGVkZSBsb2JvcnRpcyBsaWd1bGEsIHNpdCBhbWV0IGVsZWlmZW5kIHBlZGUgbGliZXJvIHF1aXMgb3JjaS4gTnVsbGFtIG1vbGVzdGllIG5pYmggaW4gbGVjdHVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAyMCxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiU2VkIGFudGUuIFZpdmFtdXMgdG9ydG9yLiBEdWlzIG1hdHRpcyBlZ2VzdGFzIG1ldHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJNYWVjZW5hcyB1dCBtYXNzYSBxdWlzIGF1Z3VlIGx1Y3R1cyB0aW5jaWR1bnQuIE51bGxhIG1vbGxpcyBtb2xlc3RpZSBsb3JlbS4gUXVpc3F1ZSB1dCBlcmF0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJWZXN0aWJ1bHVtIHF1YW0gc2FwaWVuLCB2YXJpdXMgdXQsIGJsYW5kaXQgbm9uLCBpbnRlcmR1bSBpbiwgYW50ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IER1aXMgZmF1Y2lidXMgYWNjdW1zYW4gb2Rpby4gQ3VyYWJpdHVyIGNvbnZhbGxpcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgY29uc2VxdWF0LiBOdWxsYSBuaXNsLiBOdW5jIG5pc2wuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDkyLFxyXG4gIFwibmFtZVwiOiBcIlJlYWxjdWJlXCIsXHJcbiAgXCJwcmljZVwiOiA1Mi40NSxcclxuICBcImRpc2NvdW50XCI6IDEwMCxcclxuICBcImNhdGVnb3J5XCI6IFwiSGFpdGlcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiTnVsbGFtIHNpdCBhbWV0IHR1cnBpcyBlbGVtZW50dW0gbGlndWxhIHZlaGljdWxhIGNvbnNlcXVhdC4gTW9yYmkgYSBpcHN1bS4gSW50ZWdlciBhIG5pYmguXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkR1aXMgYmliZW5kdW0uIE1vcmJpIG5vbiBxdWFtIG5lYyBkdWkgbHVjdHVzIHJ1dHJ1bS4gTnVsbGEgdGVsbHVzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEdWlzIGNvbnNlcXVhdCBkdWkgbmVjIG5pc2kgdm9sdXRwYXQgZWxlaWZlbmQuIERvbmVjIHV0IGRvbG9yLiBNb3JiaSB2ZWwgbGVjdHVzIGluIHF1YW0gZnJpbmdpbGxhIHJob25jdXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkludGVnZXIgdGluY2lkdW50IGFudGUgdmVsIGlwc3VtLiBQcmFlc2VudCBibGFuZGl0IGxhY2luaWEgZXJhdC4gVmVzdGlidWx1bSBzZWQgbWFnbmEgYXQgbnVuYyBjb21tb2RvIHBsYWNlcmF0LlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5MyxcclxuICBcIm5hbWVcIjogXCJZYXRhXCIsXHJcbiAgXCJwcmljZVwiOiA4Ny4wOSxcclxuICBcImRpc2NvdW50XCI6IDYzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJSdXNzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvaW4gbGVvIG9kaW8sIHBvcnR0aXRvciBpZCwgY29uc2VxdWF0IGluLCBjb25zZXF1YXQgdXQsIG51bGxhLiBTZWQgYWNjdW1zYW4gZmVsaXMuIFV0IGF0IGRvbG9yIHF1aXMgb2RpbyBjb25zZXF1YXQgdmFyaXVzLlwiLFxyXG4gIFwicmF0aW5nXCI6IDQsXHJcbiAgXCJxdWFudGl0eVwiOiAxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJEb25lYyBkaWFtIG5lcXVlLCB2ZXN0aWJ1bHVtIGVnZXQsIHZ1bHB1dGF0ZSB1dCwgdWx0cmljZXMgdmVsLCBhdWd1ZS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IERvbmVjIHBoYXJldHJhLCBtYWduYSB2ZXN0aWJ1bHVtIGFsaXF1ZXQgdWx0cmljZXMsIGVyYXQgdG9ydG9yIHNvbGxpY2l0dWRpbiBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgc2FwaWVuIHNhcGllbiBub24gbWkuIEludGVnZXIgYWMgbmVxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlNlZCBhbnRlLiBWaXZhbXVzIHRvcnRvci4gRHVpcyBtYXR0aXMgZWdlc3RhcyBtZXR1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRnVzY2UgcG9zdWVyZSBmZWxpcyBzZWQgbGFjdXMuIE1vcmJpIHNlbSBtYXVyaXMsIGxhb3JlZXQgdXQsIHJob25jdXMgYWxpcXVldCwgcHVsdmluYXIgc2VkLCBuaXNsLiBOdW5jIHJob25jdXMgZHVpIHZlbCBzZW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk0LFxyXG4gIFwibmFtZVwiOiBcIldpa2lkb1wiLFxyXG4gIFwicHJpY2VcIjogNDkuMTUsXHJcbiAgXCJkaXNjb3VudFwiOiAxOCxcclxuICBcImNhdGVnb3J5XCI6IFwiQXplcmJhaWphblwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDcmFzIG5vbiB2ZWxpdCBuZWMgbmlzaSB2dWxwdXRhdGUgbm9udW1teS4gTWFlY2VuYXMgdGluY2lkdW50IGxhY3VzIGF0IHZlbGl0LiBWaXZhbXVzIHZlbCBudWxsYSBlZ2V0IGVyb3MgZWxlbWVudHVtIHBlbGxlbnRlc3F1ZS5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTgsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIk5hbSB1bHRyaWNlcywgbGliZXJvIG5vbiBtYXR0aXMgcHVsdmluYXIsIG51bGxhIHBlZGUgdWxsYW1jb3JwZXIgYXVndWUsIGEgc3VzY2lwaXQgbnVsbGEgZWxpdCBhYyBudWxsYS4gU2VkIHZlbCBlbmltIHNpdCBhbWV0IG51bmMgdml2ZXJyYSBkYXBpYnVzLiBOdWxsYSBzdXNjaXBpdCBsaWd1bGEgaW4gbGFjdXMuXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk1LFxyXG4gIFwibmFtZVwiOiBcIlRvcGljc2hvdHNcIixcclxuICBcInByaWNlXCI6IDgwLjc2LFxyXG4gIFwiZGlzY291bnRcIjogNjcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIk1leGljb1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbiBxdWlzIGp1c3RvLiBNYWVjZW5hcyByaG9uY3VzIGFsaXF1YW0gbGFjdXMuIE1vcmJpIHF1aXMgdG9ydG9yIGlkIG51bGxhIHVsdHJpY2VzIGFsaXF1ZXQuXCIsXHJcbiAgXCJyYXRpbmdcIjogMixcclxuICBcInF1YW50aXR5XCI6IDUsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlBoYXNlbGx1cyBzaXQgYW1ldCBlcmF0LiBOdWxsYSB0ZW1wdXMuIFZpdmFtdXMgaW4gZmVsaXMgZXUgc2FwaWVuIGN1cnN1cyB2ZXN0aWJ1bHVtLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59LCB7XHJcbiAgXCJpZFwiOiA5NixcclxuICBcIm5hbWVcIjogXCJKYXhiZWFuXCIsXHJcbiAgXCJwcmljZVwiOiA5MS41LFxyXG4gIFwiZGlzY291bnRcIjogODgsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkJyYXppbFwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDMsXHJcbiAgXCJxdWFudGl0eVwiOiAxLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdXJhYml0dXIgaW4gbGliZXJvIHV0IG1hc3NhIHZvbHV0cGF0IGNvbnZhbGxpcy4gTW9yYmkgb2RpbyBvZGlvLCBlbGVtZW50dW0gZXUsIGludGVyZHVtIGV1LCB0aW5jaWR1bnQgaW4sIGxlby4gTWFlY2VuYXMgcHVsdmluYXIgbG9ib3J0aXMgZXN0LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFZpdmFtdXMgdmVzdGlidWx1bSBzYWdpdHRpcyBzYXBpZW4uIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTcsXHJcbiAgXCJuYW1lXCI6IFwiT29iYVwiLFxyXG4gIFwicHJpY2VcIjogNjcuNDEsXHJcbiAgXCJkaXNjb3VudFwiOiAyLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJJbmRvbmVzaWFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiVmVzdGlidWx1bSBxdWFtIHNhcGllbiwgdmFyaXVzIHV0LCBibGFuZGl0IG5vbiwgaW50ZXJkdW0gaW4sIGFudGUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBEdWlzIGZhdWNpYnVzIGFjY3Vtc2FuIG9kaW8uIEN1cmFiaXR1ciBjb252YWxsaXMuXCIsXHJcbiAgXCJyYXRpbmdcIjogMyxcclxuICBcInF1YW50aXR5XCI6IDIwLFxyXG4gIFwiY29tbWVudHNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJRdWlzcXVlIHBvcnRhIHZvbHV0cGF0IGVyYXQuIFF1aXNxdWUgZXJhdCBlcm9zLCB2aXZlcnJhIGVnZXQsIGNvbmd1ZSBlZ2V0LCBzZW1wZXIgcnV0cnVtLCBudWxsYS4gTnVuYyBwdXJ1cy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiQ3JhcyBub24gdmVsaXQgbmVjIG5pc2kgdnVscHV0YXRlIG5vbnVtbXkuIE1hZWNlbmFzIHRpbmNpZHVudCBsYWN1cyBhdCB2ZWxpdC4gVml2YW11cyB2ZWwgbnVsbGEgZWdldCBlcm9zIGVsZW1lbnR1bSBwZWxsZW50ZXNxdWUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkluIHF1aXMganVzdG8uIE1hZWNlbmFzIHJob25jdXMgYWxpcXVhbSBsYWN1cy4gTW9yYmkgcXVpcyB0b3J0b3IgaWQgbnVsbGEgdWx0cmljZXMgYWxpcXVldC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiUGhhc2VsbHVzIHNpdCBhbWV0IGVyYXQuIE51bGxhIHRlbXB1cy4gVml2YW11cyBpbiBmZWxpcyBldSBzYXBpZW4gY3Vyc3VzIHZlc3RpYnVsdW0uXCJcclxuICAgIH1cclxuICBdXHJcbn0sIHtcclxuICBcImlkXCI6IDk4LFxyXG4gIFwibmFtZVwiOiBcIkphbG9vXCIsXHJcbiAgXCJwcmljZVwiOiA0My40NSxcclxuICBcImRpc2NvdW50XCI6IDEzLFxyXG4gIFwiY2F0ZWdvcnlcIjogXCJHZXJtYW55XCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluIGNvbmd1ZS4gRXRpYW0ganVzdG8uIEV0aWFtIHByZXRpdW0gaWFjdWxpcyBqdXN0by5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTcsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlN1c3BlbmRpc3NlIHBvdGVudGkuIEluIGVsZWlmZW5kIHF1YW0gYSBvZGlvLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogOTksXHJcbiAgXCJuYW1lXCI6IFwiR2lnYXpvb21cIixcclxuICBcInByaWNlXCI6IDcwLjMzLFxyXG4gIFwiZGlzY291bnRcIjogNCxcclxuICBcImNhdGVnb3J5XCI6IFwiQ2hpbmFcIixcclxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JhcyBtaSBwZWRlLCBtYWxlc3VhZGEgaW4sIGltcGVyZGlldCBldCwgY29tbW9kbyB2dWxwdXRhdGUsIGp1c3RvLiBJbiBibGFuZGl0IHVsdHJpY2VzIGVuaW0uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0LlwiLFxyXG4gIFwicmF0aW5nXCI6IDIsXHJcbiAgXCJxdWFudGl0eVwiOiAxOSxcclxuICBcImNvbW1lbnRzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJjb21tZW50XCI6IFwiRHVpcyBiaWJlbmR1bSwgZmVsaXMgc2VkIGludGVyZHVtIHZlbmVuYXRpcywgdHVycGlzIGVuaW0gYmxhbmRpdCBtaSwgaW4gcG9ydHRpdG9yIHBlZGUganVzdG8gZXUgbWFzc2EuIERvbmVjIGRhcGlidXMuIER1aXMgYXQgdmVsaXQgZXUgZXN0IGNvbmd1ZSBlbGVtZW50dW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFlbmVhbiBmZXJtZW50dW0uIERvbmVjIHV0IG1hdXJpcyBlZ2V0IG1hc3NhIHRlbXBvciBjb252YWxsaXMuIE51bGxhIG5lcXVlIGxpYmVybywgY29udmFsbGlzIGVnZXQsIGVsZWlmZW5kIGx1Y3R1cywgdWx0cmljaWVzIGV1LCBuaWJoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJQaGFzZWxsdXMgc2l0IGFtZXQgZXJhdC4gTnVsbGEgdGVtcHVzLiBWaXZhbXVzIGluIGZlbGlzIGV1IHNhcGllbiBjdXJzdXMgdmVzdGlidWx1bS5cIlxyXG4gICAgfVxyXG4gIF1cclxufSwge1xyXG4gIFwiaWRcIjogMTAwLFxyXG4gIFwibmFtZVwiOiBcIkJyb3dzZXpvb21cIixcclxuICBcInByaWNlXCI6IDMyLjM3LFxyXG4gIFwiZGlzY291bnRcIjogMTcsXHJcbiAgXCJjYXRlZ29yeVwiOiBcIkluZG9uZXNpYVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBZW5lYW4gZmVybWVudHVtLiBEb25lYyB1dCBtYXVyaXMgZWdldCBtYXNzYSB0ZW1wb3IgY29udmFsbGlzLiBOdWxsYSBuZXF1ZSBsaWJlcm8sIGNvbnZhbGxpcyBlZ2V0LCBlbGVpZmVuZCBsdWN0dXMsIHVsdHJpY2llcyBldSwgbmliaC5cIixcclxuICBcInJhdGluZ1wiOiA0LFxyXG4gIFwicXVhbnRpdHlcIjogMTYsXHJcbiAgXCJjb21tZW50c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIkFsaXF1YW0gcXVpcyB0dXJwaXMgZWdldCBlbGl0IHNvZGFsZXMgc2NlbGVyaXNxdWUuIE1hdXJpcyBzaXQgYW1ldCBlcm9zLiBTdXNwZW5kaXNzZSBhY2N1bXNhbiB0b3J0b3IgcXVpcyB0dXJwaXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29tbWVudFwiOiBcIlByYWVzZW50IGJsYW5kaXQuIE5hbSBudWxsYS4gSW50ZWdlciBwZWRlIGp1c3RvLCBsYWNpbmlhIGVnZXQsIHRpbmNpZHVudCBlZ2V0LCB0ZW1wdXMgdmVsLCBwZWRlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvbW1lbnRcIjogXCJJbnRlZ2VyIGFjIGxlby4gUGVsbGVudGVzcXVlIHVsdHJpY2VzIG1hdHRpcyBvZGlvLiBEb25lYyB2aXRhZSBuaXNpLlwiXHJcbiAgICB9XHJcbiAgXVxyXG59XVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiXSwic291cmNlUm9vdCI6IiJ9