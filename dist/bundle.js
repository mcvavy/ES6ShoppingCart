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

	"use strict";
	
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
	        key: "addItem",
	        value: function addItem(item) {
	            this.items.push(item);
	            localStorage.setItem("Cart", JSON.stringify(this.items));
	        }
	    }, {
	        key: "removeItem",
	        value: function removeItem(position) {
	            debugger;
	            this.items.splice(position, 1);
	            localStorage.setItem("Cart", JSON.stringify(this.items));
	        }
	    }, {
	        key: "totalItem",
	        value: function totalItem() {
	            return this.items.length > 0 ? this.items.reduce(function (sum, b) {
	                return sum + 1;
	            }, 0) : 0;
	        }
	    }, {
	        key: "totalDiscountPrice",
	        value: function totalDiscountPrice() {
	            return this.items.reduce(function (sum, b) {
	                return sum + (b.discount !== '') ? b.discount / 100 * b.price : 0.00;
	            }, 0.00).toFixed(2);
	        }
	    }, {
	        key: "totalPrice",
	        value: function totalPrice() {
	            return this.items.length > 0 ? this.items.reduce(function (sum, b) {
	                return sum + (b.price - b.discount * b.price / 100);
	            }, 0.00).toFixed(2) : 0.00;
	        }
	    }, {
	        key: "totalPriceWithoutDiscount",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTcyN2YxMjkwYTUwZTE3NGYxZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9DYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanMiXSwibmFtZXMiOlsiZGlzcGxheUNhcnRJdGVtcyIsImRpc3BsYXlQcm9kdWN0cyIsInNldFVwRXZlbnRMaXN0ZW5lcnMiLCJDb250cm9sbGVyIiwiZGlzcGxheUNhcnRJdGVtIiwic2V0VXBFdmVudGlzdGVuZXIiLCJjb250cm9sbGVyIiwiVmlldyIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZGJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJ0SXRlbUxpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZG5hbWUiLCJ2YWx1ZSIsInByaWNlIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInJhdGluZyIsInF1YW50aXR5IiwiZGlzY291bnQiLCJpbWFnZVVybCIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWNrIiwiZXZlbnQiLCJlbGVtZW50Q2xpY2tlZCIsInRhcmdldCIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwicHJvZHVjdENsaWNrZWQiLCJmaW5kUGFyZW50Tm9kZVRvZ2V0SWQiLCJpZCIsImFkZEl0ZW0iLCJwYXJlbnROb2RlIiwicmVtb3ZlSXRlbSIsInByb0xpc3RDb250YWluZXIiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsInBvc2l0aW9uIiwibGlFbCIsImNyZWF0ZUVsZW1lbnQiLCJwcm9kdWN0UGFyZW50RGl2IiwicHJvZHVjdFByaWNlRGl2IiwibmFtZSIsImltZ1VybCIsImFwcGVuZENoaWxkIiwic3BsaXRhcnIiLCJ0b3RhbFByaWNlIiwidG9TdHJpbmciLCJzcGxpdCIsInJlcGxhY2UiLCJ0b3RhbEl0ZW0iLCJpdGVtcyIsIml0ZW1MaXN0IiwiZWxlbWVudE5hbWUiLCJzdHlsZSIsImVsZW1lbnQiLCJ0YXJnZXRFbGVtZW50Q2xhc3MiLCJjb25zb2xlIiwibG9nIiwidmlldyIsIkNhcnQiLCJzcGxpY2UiLCJsZW5ndGgiLCJyZWR1Y2UiLCJzdW0iLCJiIiwidG9GaXhlZCIsImNhcnQiLCJwcm9kdWN0RGF0YSIsInByb2R1Y3REYXRhcyIsInBhcnNlIiwiZ2V0SXRlbSIsInBpZCIsInJlcXVpcmUiLCJQcm9kdWN0IiwiY29tbWVudHMiLCJJZCIsImdlbmVyYXRlIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0TGlzdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxwaGFiZXQiLCJlbmNvZGUiLCJkZWNvZGUiLCJpc1ZhbGlkIiwiUkVEVUNFX1RJTUUiLCJ2ZXJzaW9uIiwiY2x1c3RlcldvcmtlcklkIiwiY291bnRlciIsInByZXZpb3VzU2Vjb25kcyIsInN0ciIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwibG9va3VwIiwic2VlZCIsInNlZWRWYWx1ZSIsIndvcmtlciIsIndvcmtlcklkIiwiY2hhcmFjdGVycyIsIm5ld0NoYXJhY3RlcnMiLCJ1bmRlZmluZWQiLCJzaHVmZmxlZCIsInJhbmRvbUZyb21TZWVkIiwiT1JJR0lOQUwiLCJwcmV2aW91c1NlZWQiLCJyZXNldCIsInNldENoYXJhY3RlcnMiLCJfYWxwaGFiZXRfIiwiRXJyb3IiLCJ1bmlxdWUiLCJmaWx0ZXIiLCJpbmQiLCJhcnIiLCJsYXN0SW5kZXhPZiIsImpvaW4iLCJzZXRTZWVkIiwic2h1ZmZsZSIsInNvdXJjZUFycmF5IiwidGFyZ2V0QXJyYXkiLCJyIiwibmV4dFZhbHVlIiwiY2hhcmFjdGVySW5kZXgiLCJnZXRTaHVmZmxlZCIsImluZGV4IiwiYWxwaGFiZXRTaHVmZmxlZCIsImdldE5leHRWYWx1ZSIsIl9zZWVkXyIsInJhbmRvbUJ5dGUiLCJudW1iZXIiLCJsb29wQ291bnRlciIsImRvbmUiLCJwb3ciLCJjcnlwdG8iLCJ3aW5kb3ciLCJtc0NyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsInJhbmRvbSIsImRlc3QiLCJVaW50OEFycmF5IiwiaW5kZXhPZiIsInN1YnN0ciIsImlzU2hvcnRJZCIsImxlbiIsImkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUEsd0JBQVdBLGdCQUFYO0FBQ0Esd0JBQVdDLGVBQVg7QUFD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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NzI3ZjEyOTBhNTBlMTc0ZjFlOCIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXIvY29udHJvbGxlcic7XHJcblxyXG4vL2xldCBjYXJ0T2JqZWN0ID0gbmV3IENhcnQoKTtcclxuXHJcbmNvbnRyb2xsZXIuZGlzcGxheUNhcnRJdGVtcygpO1xyXG5jb250cm9sbGVyLmRpc3BsYXlQcm9kdWN0cygpO1xyXG5jb250cm9sbGVyLnNldFVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBJdGVtIHByaWNlIGlzICR7Y2FydE9iamVjdC50b3RhbFByaWNlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBpdGVtIGluIGNhcnQgaXM6ICR7Y2FydE9iamVjdC50b3RhbEl0ZW0oKX1gKTtcclxuLy8gY29uc29sZS5sb2coYFRvdGFsIGRpc2NvdW50IHByaWNlIGlzICR7Y2FydE9iamVjdC50b3RhbERpc2NvdW50UHJpY2UoKX1gKTtcclxuLy8gY29uc29sZS5sb2coYFRvdGFsIHByaWNlIHdpdGhvdXQgZGlzY291bnQgaXMgJHtjYXJ0T2JqZWN0LnRvdGFsUHJpY2VXaXRob3V0RGlzY291bnQoKX1gKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsImltcG9ydCB7dmlldyBhcyBWaWV3fSBmcm9tICcuLi92aWV3L3ZpZXcnO1xyXG5cclxuY2xhc3MgQ29udHJvbGxlcntcclxuICAgIGRpc3BsYXlDYXJ0SXRlbXMoKXtcclxuICAgICAgICBWaWV3LmRpc3BsYXlDYXJ0SXRlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVwRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICBWaWV3LnNldFVwRXZlbnRpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb2R1Y3RzKCl7XHJcbiAgICAgICAgVmlldy5kaXNwbGF5UHJvZHVjdHMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgY2FydCBhcyBDYXJ0IH0gZnJvbSAnLi4vbW9kZWxzL0NhcnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0LCBwcm9kdWN0TGlzdCB9IGZyb20gJy4uL21vZGVscy9wcm9kdWN0JztcclxuXHJcbmNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFVwRXZlbnRpc3RlbmVyKCkge1xyXG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1hZGQtYnV0dG9uXCIpLFxyXG4gICAgICAgICAgICBhZGRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtbGlzdC1ob2xkZXJcIiksXHJcbiAgICAgICAgICAgIGNhcnRJdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXNsaXN0XCIpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IHByb2RuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0bmFtZVwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmljZVwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeVwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0aW5nXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1YW50aXR5XCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NvdW50XCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlVXJsXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8obmFtZSwgcHJpY2UsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgcmF0aW5nLCBxdWFudGl0eSwgY29tbWVudHMsIGRpc2NvdW50KVxyXG4gICAgICAgICAgICBwcm9kdWN0TGlzdC5wdXNoKG5ldyBQcm9kdWN0KHByb2RuYW1lLCBwcmljZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCByYXRpbmcsIHF1YW50aXR5LCBbXSwgZGlzY291bnQsIGltYWdlVXJsKSk7XHJcblxyXG4gICAgICAgICAgICAvL3NhdmUgcHJvZHVjdExpc3QgdG8gTG9jYWwgU3RvcmFnZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RMaXN0KSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNsb3NlXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRDbGlja2VkID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy9jaGVjayBpZiBlbGVtZW50IGNsaWNrZWQgaXMgYSBhZGQgdG8gYmFza2V0IGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudENsaWNrZWQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWRkLXRvLWJhc2tldC1idXR0b25cIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0Q2xpY2tlZCA9IHByb2R1Y3RMaXN0W2ZpbmRQYXJlbnROb2RlVG9nZXRJZChlbGVtZW50Q2xpY2tlZCwgXCJwcm9kdWN0LWxpc3QtZWxlbWVudFwiKS5pZF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy9GaW5lIGFuZCBhZGQgdGhlIGl0ZW0gd2l0aCB0aGUgSWQgdG8gdGhlIENhcnRcclxuICAgICAgICAgICAgICAgIENhcnQuYWRkSXRlbShwcm9kdWN0Q2xpY2tlZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlDYXJ0SXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcnRJdGVtTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRDbGlja2VkID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRDbGlja2VkLmNsYXNzTmFtZS5pbmNsdWRlcyhcImZhLXRpbWVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IGZpbmRQYXJlbnROb2RlVG9nZXRJZChlbGVtZW50Q2xpY2tlZCwgXCJjYXJ0LWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBDYXJ0LnJlbW92ZUl0ZW0ocGFyZW50Tm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlDYXJ0SXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQcm9kdWN0cygpIHtcclxuICAgICAgICBsZXQgcHJvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyLXByb2R1Y3QtbGlzdFwiKTtcclxuICAgICAgICBwcm9MaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcblxyXG4gICAgICAgIC8vcHJvZHVjdExpc3RcclxuICAgICAgICBwcm9kdWN0TGlzdC5mb3JFYWNoKChpdGVtLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGlFbCA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBcInByb2R1Y3QtbGlzdC1lbGVtZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFBhcmVudERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9kdWN0UGFyZW50RGl2XCIpLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2R1Y3RQcmljZURpdlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsaUVsLmlkID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICBwcm9kdWN0UHJpY2VEaXYuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgIGA8dWwgY2xhc3M9XCJwcm9kdWN0LWRldGFpbHMtc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+PGgzPiR7aXRlbS5uYW1lfTwvaDM+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGNsYXNzPVwicHJvZHVjdC1pbWFnZVwiIHNyYz0ke2l0ZW0uaW1nVXJsfT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj48Yj5QcmljZTogPC9iPjwvc3Bhbj48c3Bhbj48Yj5cXCQke2l0ZW0ucHJpY2V9PC9iPjwvc3Bhbj48L2xpPjxiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5xdWFudGl0eSA+IDApID8gXCI8bGk+PHNwYW4gc3R5bGU9J2NvbG9yOiBncmVlbic+SW4gU3RvY2s8L3NwYW4+PC9saT5cIiA6IFwiPGxpIHN0eWxlPSdjb2xvcjogcmVkJz48c3Bhbj5PdXQgb2Ygc3RvY2s8L3NwYW4+PC9saT5cIlxyXG4gICAgICAgICAgICAgICAgfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBhZGQtdG8tYmFza2V0LWJ1dHRvblwiPkFkZCB0byBiYXNrZXQ8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBwcm9kdWN0UGFyZW50RGl2LmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZURpdik7XHJcbiAgICAgICAgICAgIGxpRWwuYXBwZW5kQ2hpbGQocHJvZHVjdFBhcmVudERpdik7XHJcbiAgICAgICAgICAgIHByb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlFbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUNhcnRJdGVtKCkge1xyXG4gICAgICAgIC8vZGlzcGxheSB0b3RhbCBpdGVtIHByaWNlXHJcbiAgICAgICAgbGV0IHNwbGl0YXJyID0gKENhcnQudG90YWxQcmljZSgpICE9PSAwKSA/IENhcnQudG90YWxQcmljZSgpLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSA6IFtcIjBcIiwgXCIwMFwiXTtcclxuXHJcbiAgICAgICAgc3BsaXRhcnJbMF0gPSBzcGxpdGFyclswXS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csIFwiJDEsXCIpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5QcmljZVwiKS5pbm5lckhUTUwgPSBgXFwkJHtzcGxpdGFyclswXX08c3VwPi4ke3NwbGl0YXJyWzFdfSYjMTYyOzwvc3VwPmA7XHJcblxyXG4gICAgICAgIC8vZGlzcGxheSB0b3RhbCBpdGVtIGluIGJhc2tldFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFneVwiKS5pbm5lckhUTUwgPSBDYXJ0LnRvdGFsSXRlbSgpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtaXRlbXNcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgLy9Mb29wIGFuZCBkaXNsYXkgQ2FydCBpdGVtcyBpbiBhIGxpc3RcclxuICAgICAgICBDYXJ0Lml0ZW1zLmZvckVhY2goKGl0ZW0sIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTGlzdCA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBcImNhcnQtaXRlbVwiKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QuaWQgPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgaXRlbUxpc3QuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJzbWFsbC1wcm9kdWN0LWljb25cIiBcclxuICAgICAgICAgICAgc3JjPSR7aXRlbS5pbWdVcmx9PjxiPjEgeCAke2l0ZW0ubmFtZX0gXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FydGl0ZW0tcHJpY2VcIj49IFxcJCR7aXRlbS5wcmljZX0gPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtaXRlbXNcIikuYXBwZW5kQ2hpbGQoaXRlbUxpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50TmFtZSwgY2xhc3NOYW1lID0gXCJuYVwiLCBzdHlsZSA9IFwibmFcIiwgaW5uZXJIVE1MID0gXCJuYVwiKSA9PiB7XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xyXG5cclxuICAgIGlmIChjbGFzc05hbWUgIT09IFwibmFcIikgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XHJcblxyXG4gICAgaWYgKHN0eWxlICE9PSBcIm5hXCIpIGVsZW1lbnQuc3R5bGUgPSBzdHlsZTtcclxuXHJcbiAgICBpZiAoaW5uZXJIVE1MICE9PSBcIm5hXCIpIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG5cclxufVxyXG5cclxubGV0IGZpbmRQYXJlbnROb2RlVG9nZXRJZCA9IChlbCwgdGFyZ2V0RWxlbWVudENsYXNzKSA9PiB7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIHdoaWxlIChlbC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGlmIChlbC5jbGFzc05hbWUuaW5jbHVkZXModGFyZ2V0RWxlbWVudENsYXNzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhlIElEIGlzICR7ZWwuaWR9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IHZpZXcgPSBuZXcgVmlldygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L3ZpZXcuanMiLCJpbXBvcnQgeyBwcm9kdWN0RGF0YSB9IGZyb20gJy4vcHJvZHVjdERhdGEnO1xyXG5cclxuY2xhc3MgQ2FydCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gcHJvZHVjdERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSXRlbShwb3NpdGlvbikge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsSXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaXRlbXMubGVuZ3RoID4gMCkgPyB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAxLCAwKSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxEaXNjb3VudFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi5kaXNjb3VudCAhPT0gJycpID8gKChiLmRpc2NvdW50IC8gMTAwKSAqIGIucHJpY2UpIDogMC4wMCwgMC4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbFByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pdGVtcy5sZW5ndGggPiAwKSA/ICh0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBiKSA9PiBzdW0gKyAoYi5wcmljZSAtIChiLmRpc2NvdW50ICogYi5wcmljZSkgLyAxMDApLCAwLjAwKS50b0ZpeGVkKDIpKSA6IDAuMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQcmljZVdpdGhvdXREaXNjb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIucHJpY2UgIT09ICcnKSA/IGIucHJpY2UgOiAwLjAwLCAwLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGNhcnQgPSBuZXcgQ2FydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvQ2FydC5qcyIsImxldCBwcm9kdWN0RGF0YSA9IFtdO1xyXG5cclxubGV0IHByb2R1Y3REYXRhcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDYXJ0XCIpKTtcclxuaWYgKCFwcm9kdWN0RGF0YXMpIHByb2R1Y3REYXRhID0gW107XHJcbmVsc2Uge1xyXG4gICAgcHJvZHVjdERhdGFzLmZvckVhY2goKGl0ZW0sIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdERhdGEucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcHJvZHVjdERhdGEgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL3Byb2R1Y3REYXRhLmpzIiwibGV0IHBpZCA9IHJlcXVpcmUoJ3Nob3J0aWQnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHkgPSAwLCBjb21tZW50cyA9IFtdLCBkaXNjb3VudCwgaW1nVXJsKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5JZCA9IHBpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICAgIHRoaXMuZGlzY291bnQgPSBkaXNjb3VudDtcclxuICAgICAgICB0aGlzLmltZ1VybCA9IGltZ1VybDtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBdmFpbGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHkgPiAwO1xyXG4gICAgfVxyXG59XHJcbmxldCBwcm9kdWN0TGlzdCA9IFtdO1xyXG5cclxubGV0IHByb2R1Y3RMaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKSk7XHJcbmlmICghcHJvZHVjdExpc3RzKSBwcm9kdWN0TGlzdHMgPSBbXTtcclxuZWxzZSB7XHJcbiAgICBwcm9kdWN0TGlzdHMuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICBwcm9kdWN0TGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiB9XHJcblxyXG5leHBvcnQgeyBwcm9kdWN0TGlzdCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==