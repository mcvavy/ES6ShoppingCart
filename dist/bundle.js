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
	
	            var productAddButton = document.getElementById("product-add-button"),
	                addbutton = document.querySelector(".product-list-holder"),
	                cartItemList = document.querySelector(".itemslist");
	            debugger;
	
	            productAddButton.addEventListener('click', function (event) {
	                event.preventDefault();
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
	                    console.log(productClicked.discount);
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
	                itemList.innerHTML = '<img class="small-product-icon" \n            src=' + item.imgUrl + '><b>' + item.quantity + ' x ' + item.name + ' \n            <span class="cartitem-price">= $' + (item.price * item.quantity).toFixed(2) + ' <i class="fa fa-times" aria-hidden="true"></i></span></b>\n            ';
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
	        if (el.className.includes(targetElementClass)) return el;
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
	            debugger;
	            //If an item has been added to the basket, increase the quantity of the time
	            var itemInBasket = this.items.filter(function (x) {
	                return x.Id === item.Id;
	            })[0];
	
	            if (itemInBasket) {
	                this.items[this.items.indexOf(itemInBasket)].quantity = itemInBasket.quantity + 1;
	            } else {
	                item.quantity = 1;
	                this.items.push(item);
	            }
	
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
	                return sum + (b.price - b.discount * b.price / 100) * b.quantity;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjhlMjI1YmUzOTE4NjU0YTFlY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9DYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanMiXSwibmFtZXMiOlsiZGlzcGxheUNhcnRJdGVtcyIsImRpc3BsYXlQcm9kdWN0cyIsInNldFVwRXZlbnRMaXN0ZW5lcnMiLCJDb250cm9sbGVyIiwiZGlzcGxheUNhcnRJdGVtIiwic2V0VXBFdmVudGlzdGVuZXIiLCJjb250cm9sbGVyIiwiVmlldyIsInByb2R1Y3RBZGRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImNhcnRJdGVtTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvZG5hbWUiLCJ2YWx1ZSIsInByaWNlIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInJhdGluZyIsInF1YW50aXR5IiwiZGlzY291bnQiLCJpbWFnZVVybCIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWNrIiwiZWxlbWVudENsaWNrZWQiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInByb2R1Y3RDbGlja2VkIiwiZmluZFBhcmVudE5vZGVUb2dldElkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiYWRkSXRlbSIsInBhcmVudE5vZGUiLCJyZW1vdmVJdGVtIiwicHJvTGlzdENvbnRhaW5lciIsImlubmVySFRNTCIsImZvckVhY2giLCJpdGVtIiwicG9zaXRpb24iLCJsaUVsIiwiY3JlYXRlRWxlbWVudCIsInByb2R1Y3RQYXJlbnREaXYiLCJwcm9kdWN0UHJpY2VEaXYiLCJuYW1lIiwiaW1nVXJsIiwiYXBwZW5kQ2hpbGQiLCJzcGxpdGFyciIsInRvdGFsUHJpY2UiLCJ0b1N0cmluZyIsInNwbGl0IiwicmVwbGFjZSIsInRvdGFsSXRlbSIsIml0ZW1zIiwiaXRlbUxpc3QiLCJ0b0ZpeGVkIiwiZWxlbWVudE5hbWUiLCJzdHlsZSIsImVsZW1lbnQiLCJlbCIsInRhcmdldEVsZW1lbnRDbGFzcyIsInZpZXciLCJDYXJ0IiwiaXRlbUluQmFza2V0IiwiZmlsdGVyIiwieCIsIklkIiwiaW5kZXhPZiIsInNwbGljZSIsImxlbmd0aCIsInJlZHVjZSIsInN1bSIsImIiLCJjYXJ0IiwicHJvZHVjdERhdGEiLCJwcm9kdWN0RGF0YXMiLCJwYXJzZSIsImdldEl0ZW0iLCJwaWQiLCJyZXF1aXJlIiwiUHJvZHVjdCIsImNvbW1lbnRzIiwiZ2VuZXJhdGUiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RMaXN0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJhbHBoYWJldCIsImVuY29kZSIsImRlY29kZSIsImlzVmFsaWQiLCJSRURVQ0VfVElNRSIsInZlcnNpb24iLCJjbHVzdGVyV29ya2VySWQiLCJjb3VudGVyIiwicHJldmlvdXNTZWNvbmRzIiwic3RyIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJsb29rdXAiLCJzZWVkIiwic2VlZFZhbHVlIiwid29ya2VyIiwid29ya2VySWQiLCJjaGFyYWN0ZXJzIiwibmV3Q2hhcmFjdGVycyIsInVuZGVmaW5lZCIsInNodWZmbGVkIiwicmFuZG9tRnJvbVNlZWQiLCJPUklHSU5BTCIsInByZXZpb3VzU2VlZCIsInJlc2V0Iiwic2V0Q2hhcmFjdGVycyIsIl9hbHBoYWJldF8iLCJFcnJvciIsInVuaXF1ZSIsImluZCIsImFyciIsImxhc3RJbmRleE9mIiwiam9pbiIsInNldFNlZWQiLCJzaHVmZmxlIiwic291cmNlQXJyYXkiLCJ0YXJnZXRBcnJheSIsInIiLCJuZXh0VmFsdWUiLCJjaGFyYWN0ZXJJbmRleCIsImdldFNodWZmbGVkIiwiaW5kZXgiLCJhbHBoYWJldFNodWZmbGVkIiwiZ2V0TmV4dFZhbHVlIiwiX3NlZWRfIiwicmFuZG9tQnl0ZSIsIm51bWJlciIsImxvb3BDb3VudGVyIiwiZG9uZSIsInBvdyIsImNyeXB0byIsIndpbmRvdyIsIm1zQ3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwicmFuZG9tIiwiZGVzdCIsIlVpbnQ4QXJyYXkiLCJzdWJzdHIiLCJpc1Nob3J0SWQiLCJsZW4iLCJpIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVB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QUNBLEVBQUQsSUFBTyxPQUFPQSxFQUFQLEtBQWMsUUFBckIsSUFBaUNBLEdBQUd3QyxNQUFILEdBQVksQ0FBakQsRUFBcUQ7QUFDakQsZ0JBQU8sS0FBUDtBQUNIOztBQUVELFNBQUlzQyxhQUFhcEIsU0FBU29CLFVBQVQsRUFBakI7QUFDQSxTQUFJMEMsTUFBTXhILEdBQUd3QyxNQUFiO0FBQ0EsVUFBSSxJQUFJaUYsSUFBSSxDQUFaLEVBQWVBLElBQUlELEdBQW5CLEVBQXVCQyxHQUF2QixFQUE0QjtBQUN4QixhQUFJM0MsV0FBV3hDLE9BQVgsQ0FBbUJ0QyxHQUFHeUgsQ0FBSCxDQUFuQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDLG9CQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0QsWUFBTyxJQUFQO0FBQ0g7O0FBRURqRSxRQUFPQyxPQUFQLEdBQWlCOEQsU0FBakIsQzs7Ozs7O0FDbEJBOztBQUVBL0QsUUFBT0MsT0FBUCxHQUFpQixDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI4ZTIyNWJlMzkxODY1NGExZWNjIiwiaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlci9jb250cm9sbGVyJztcclxuXHJcbi8vbGV0IGNhcnRPYmplY3QgPSBuZXcgQ2FydCgpO1xyXG5cclxuY29udHJvbGxlci5kaXNwbGF5Q2FydEl0ZW1zKCk7XHJcbmNvbnRyb2xsZXIuZGlzcGxheVByb2R1Y3RzKCk7XHJcbmNvbnRyb2xsZXIuc2V0VXBFdmVudExpc3RlbmVycygpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coYFRvdGFsIEl0ZW0gcHJpY2UgaXMgJHtjYXJ0T2JqZWN0LnRvdGFsUHJpY2UoKX1gKTtcclxuLy8gY29uc29sZS5sb2coYFRvdGFsIGl0ZW0gaW4gY2FydCBpczogJHtjYXJ0T2JqZWN0LnRvdGFsSXRlbSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgZGlzY291bnQgcHJpY2UgaXMgJHtjYXJ0T2JqZWN0LnRvdGFsRGlzY291bnRQcmljZSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgcHJpY2Ugd2l0aG91dCBkaXNjb3VudCBpcyAke2NhcnRPYmplY3QudG90YWxQcmljZVdpdGhvdXREaXNjb3VudCgpfWApO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLmpzIiwiaW1wb3J0IHt2aWV3IGFzIFZpZXd9IGZyb20gJy4uL3ZpZXcvdmlldyc7XHJcblxyXG5jbGFzcyBDb250cm9sbGVye1xyXG4gICAgZGlzcGxheUNhcnRJdGVtcygpe1xyXG4gICAgICAgIFZpZXcuZGlzcGxheUNhcnRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgICAgIFZpZXcuc2V0VXBFdmVudGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5UHJvZHVjdHMoKXtcclxuICAgICAgICBWaWV3LmRpc3BsYXlQcm9kdWN0cygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cm9sbGVyL2NvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyBjYXJ0IGFzIENhcnQgfSBmcm9tICcuLi9tb2RlbHMvQ2FydCc7XHJcbmltcG9ydCB7IFByb2R1Y3QsIHByb2R1Y3RMaXN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QnO1xyXG5cclxuY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXBFdmVudGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RBZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3QtYWRkLWJ1dHRvblwiKSxcclxuICAgICAgICAgICAgYWRkYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LWxpc3QtaG9sZGVyXCIpLFxyXG4gICAgICAgICAgICBjYXJ0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW1zbGlzdFwiKTtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgcHJvZHVjdEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgcHJvZG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RuYW1lXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaWNlXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5XCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRpbmdcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbnRpdHlcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY291bnRcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VVcmxcIikudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyhuYW1lLCBwcmljZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCByYXRpbmcsIHF1YW50aXR5LCBjb21tZW50cywgZGlzY291bnQpXHJcbiAgICAgICAgICAgIHByb2R1Y3RMaXN0LnB1c2gobmV3IFByb2R1Y3QocHJvZG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHksIFtdLCBkaXNjb3VudCwgaW1hZ2VVcmwpKTtcclxuXHJcbiAgICAgICAgICAgIC8vc2F2ZSBwcm9kdWN0TGlzdCB0byBMb2NhbCBTdG9yYWdlXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvZHVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdExpc3QpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY2xvc2VcIikuY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudENsaWNrZWQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGVsZW1lbnQgY2xpY2tlZCBpcyBhIGFkZCB0byBiYXNrZXQgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Q2xpY2tlZC5jbGFzc05hbWUuaW5jbHVkZXMoXCJhZGQtdG8tYmFza2V0LWJ1dHRvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RDbGlja2VkID0gcHJvZHVjdExpc3RbZmluZFBhcmVudE5vZGVUb2dldElkKGVsZW1lbnRDbGlja2VkLCBcInByb2R1Y3QtbGlzdC1lbGVtZW50XCIpLmlkXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0ZpbmUgYW5kIGFkZCB0aGUgaXRlbSB3aXRoIHRoZSBJZCB0byB0aGUgQ2FydFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdENsaWNrZWQuZGlzY291bnQpO1xyXG4gICAgICAgICAgICAgICAgQ2FydC5hZGRJdGVtKHByb2R1Y3RDbGlja2VkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUNhcnRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FydEl0ZW1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudENsaWNrZWQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudENsaWNrZWQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZmEtdGltZXNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gZmluZFBhcmVudE5vZGVUb2dldElkKGVsZW1lbnRDbGlja2VkLCBcImNhcnQtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIENhcnQucmVtb3ZlSXRlbShwYXJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUNhcnRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb2R1Y3RzKCkge1xyXG4gICAgICAgIGxldCBwcm9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXItcHJvZHVjdC1saXN0XCIpO1xyXG4gICAgICAgIHByb0xpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgLy9wcm9kdWN0TGlzdFxyXG4gICAgICAgIHByb2R1Y3RMaXN0LmZvckVhY2goKGl0ZW0sIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaUVsID0gY3JlYXRlRWxlbWVudChcImxpXCIsIFwicHJvZHVjdC1saXN0LWVsZW1lbnRcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UGFyZW50RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2R1Y3RQYXJlbnREaXZcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvZHVjdFByaWNlRGl2XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxpRWwuaWQgPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZURpdi5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgYDx1bCBjbGFzcz1cInByb2R1Y3QtZGV0YWlscy1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj48aDM+JHtpdGVtLm5hbWV9PC9oMz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCIgc3JjPSR7aXRlbS5pbWdVcmx9PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPjxiPlByaWNlOiA8L2I+PC9zcGFuPjxzcGFuPjxiPlxcJCR7aXRlbS5wcmljZX08L2I+PC9zcGFuPjwvbGk+PGI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgIChpdGVtLnF1YW50aXR5ID4gMCkgPyBcIjxsaT48c3BhbiBzdHlsZT0nY29sb3I6IGdyZWVuJz5JbiBTdG9jazwvc3Bhbj48L2xpPlwiIDogXCI8bGkgc3R5bGU9J2NvbG9yOiByZWQnPjxzcGFuPk91dCBvZiBzdG9jazwvc3Bhbj48L2xpPlwiXHJcbiAgICAgICAgICAgICAgICB9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGFkZC10by1iYXNrZXQtYnV0dG9uXCI+QWRkIHRvIGJhc2tldDwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RQYXJlbnREaXYuYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlRGl2KTtcclxuICAgICAgICAgICAgbGlFbC5hcHBlbmRDaGlsZChwcm9kdWN0UGFyZW50RGl2KTtcclxuICAgICAgICAgICAgcHJvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaUVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5Q2FydEl0ZW0oKSB7XHJcbiAgICAgICAgLy9kaXNwbGF5IHRvdGFsIGl0ZW0gcHJpY2VcclxuICAgICAgICBsZXQgc3BsaXRhcnIgPSAoQ2FydC50b3RhbFByaWNlKCkgIT09IDApID8gQ2FydC50b3RhbFByaWNlKCkudG9TdHJpbmcoKS5zcGxpdCgnLicpIDogW1wiMFwiLCBcIjAwXCJdO1xyXG5cclxuICAgICAgICBzcGxpdGFyclswXSA9IHNwbGl0YXJyWzBdLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrJCkvZywgXCIkMSxcIik7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblByaWNlXCIpLmlubmVySFRNTCA9IGBcXCQke3NwbGl0YXJyWzBdfTxzdXA+LiR7c3BsaXRhcnJbMV19JiMxNjI7PC9zdXA+YDtcclxuXHJcbiAgICAgICAgLy9kaXNwbGF5IHRvdGFsIGl0ZW0gaW4gYmFza2V0XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWd5XCIpLmlubmVySFRNTCA9IENhcnQudG90YWxJdGVtKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1pdGVtc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAvL0xvb3AgYW5kIGRpc2xheSBDYXJ0IGl0ZW1zIGluIGEgbGlzdFxyXG4gICAgICAgIENhcnQuaXRlbXMuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1MaXN0ID0gY3JlYXRlRWxlbWVudChcImxpXCIsIFwiY2FydC1pdGVtXCIpO1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5pZCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICBpdGVtTGlzdC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cInNtYWxsLXByb2R1Y3QtaWNvblwiIFxyXG4gICAgICAgICAgICBzcmM9JHtpdGVtLmltZ1VybH0+PGI+JHtpdGVtLnF1YW50aXR5fSB4ICR7aXRlbS5uYW1lfSBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJ0aXRlbS1wcmljZVwiPj0gXFwkJHsoaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHkpLnRvRml4ZWQoMil9IDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWl0ZW1zXCIpLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSA9IFwibmFcIiwgc3R5bGUgPSBcIm5hXCIsIGlubmVySFRNTCA9IFwibmFcIikgPT4ge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBcIm5hXCIpIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xyXG5cclxuICAgIGlmIChzdHlsZSAhPT0gXCJuYVwiKSBlbGVtZW50LnN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgaWYgKGlubmVySFRNTCAhPT0gXCJuYVwiKSBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmxldCBmaW5kUGFyZW50Tm9kZVRvZ2V0SWQgPSAoZWwsIHRhcmdldEVsZW1lbnRDbGFzcykgPT4ge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgICAgICBpZiAoZWwuY2xhc3NOYW1lLmluY2x1ZGVzKHRhcmdldEVsZW1lbnRDbGFzcykpIFxyXG4gICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgdmlldyA9IG5ldyBWaWV3KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvdmlldy5qcyIsImltcG9ydCB7IHByb2R1Y3REYXRhIH0gZnJvbSAnLi9wcm9kdWN0RGF0YSc7XHJcblxyXG5jbGFzcyBDYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwcm9kdWN0RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAvL0lmIGFuIGl0ZW0gaGFzIGJlZW4gYWRkZWQgdG8gdGhlIGJhc2tldCwgaW5jcmVhc2UgdGhlIHF1YW50aXR5IG9mIHRoZSB0aW1lXHJcbiAgICAgICAgbGV0IGl0ZW1JbkJhc2tldCA9IHRoaXMuaXRlbXMuZmlsdGVyKHggPT4geC5JZCA9PT0gaXRlbS5JZClbMF07XHJcblxyXG4gICAgICAgIGlmIChpdGVtSW5CYXNrZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmluZGV4T2YoaXRlbUluQmFza2V0KV0ucXVhbnRpdHkgPSBpdGVtSW5CYXNrZXQucXVhbnRpdHkgKyAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0ocG9zaXRpb24pIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbEl0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApID8gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgMSwgMCkgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsRGlzY291bnRQcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIuZGlzY291bnQgIT09ICcnKSA/ICgoYi5kaXNjb3VudCAvIDEwMCkgKiBiLnByaWNlKSA6IDAuMDAsIDAuMDApLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaXRlbXMubGVuZ3RoID4gMCkgPyAodGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIucHJpY2UgLSAoYi5kaXNjb3VudCAqIGIucHJpY2UpIC8gMTAwKSpiLnF1YW50aXR5LCAwLjAwKS50b0ZpeGVkKDIpKSA6IDAuMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQcmljZVdpdGhvdXREaXNjb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIucHJpY2UgIT09ICcnKSA/IGIucHJpY2UgOiAwLjAwLCAwLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGNhcnQgPSBuZXcgQ2FydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvQ2FydC5qcyIsImxldCBwcm9kdWN0RGF0YSA9IFtdO1xyXG5cclxubGV0IHByb2R1Y3REYXRhcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDYXJ0XCIpKTtcclxuaWYgKCFwcm9kdWN0RGF0YXMpIHByb2R1Y3REYXRhID0gW107XHJcbmVsc2Uge1xyXG4gICAgcHJvZHVjdERhdGFzLmZvckVhY2goKGl0ZW0sIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdERhdGEucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcHJvZHVjdERhdGEgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL3Byb2R1Y3REYXRhLmpzIiwibGV0IHBpZCA9IHJlcXVpcmUoJ3Nob3J0aWQnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHkgPSAwLCBjb21tZW50cyA9IFtdLCBkaXNjb3VudCwgaW1nVXJsKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5JZCA9IHBpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICAgIHRoaXMuZGlzY291bnQgPSBkaXNjb3VudDtcclxuICAgICAgICB0aGlzLmltZ1VybCA9IGltZ1VybDtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBdmFpbGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHkgPiAwO1xyXG4gICAgfVxyXG59XHJcbmxldCBwcm9kdWN0TGlzdCA9IFtdO1xyXG5cclxubGV0IHByb2R1Y3RMaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKSk7XHJcbmlmICghcHJvZHVjdExpc3RzKSBwcm9kdWN0TGlzdHMgPSBbXTtcclxuZWxzZSB7XHJcbiAgICBwcm9kdWN0TGlzdHMuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICBwcm9kdWN0TGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiB9XHJcblxyXG5leHBvcnQgeyBwcm9kdWN0TGlzdCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==