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
	            var splitarr = _Cart.cart.totalPrice() !== 0 ? AddCommaToNumber(_Cart.cart.totalPrice()) : ["0", "00"];
	
	            document.getElementById("mainPrice").innerHTML = '$' + splitarr[0] + '<sup>.' + splitarr[1] + '&#162;</sup>';
	
	            //display total item in basket
	            document.getElementById("bagy").innerHTML = _Cart.cart.totalItem();
	
	            document.getElementById("cart-items").innerHTML = "";
	
	            //Loop and dislay Cart items in a list
	            _Cart.cart.items.forEach(function (item, position) {
	                debugger;
	                var ItemPrice = AddCommaToNumber((item.price * item.quantity).toFixed(2));
	
	                var itemList = createElement("li", "cart-item");
	                itemList.id = position;
	                itemList.innerHTML = '<img class="small-product-icon" \n            src=' + item.imgUrl + '><b>' + item.quantity + ' x ' + item.name + ' \n            <span class="cartitem-price">= $' + ItemPrice[0] + '.' + ItemPrice[1] + ' <i class="fa fa-times" aria-hidden="true"></i></span></b>\n            ';
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
	    while (el.parentNode) {
	        el = el.parentNode;
	        if (el.className.includes(targetElementClass)) return el;
	    }
	    return null;
	};
	
	var AddCommaToNumber = function AddCommaToNumber(element) {
	    debugger;
	    var split = element.toString().split('.');
	
	    split[0] = split[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
	
	    return split;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmNkZDY3OTRiNzU4NmJkMWVhZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9DYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcHJvZHVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Nob3J0aWQvbGliL3JhbmRvbS9yYW5kb20tYnl0ZS1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaG9ydGlkL2xpYi91dGlsL2NsdXN0ZXItd29ya2VyLWlkLWJyb3dzZXIuanMiXSwibmFtZXMiOlsiZGlzcGxheUNhcnRJdGVtcyIsImRpc3BsYXlQcm9kdWN0cyIsInNldFVwRXZlbnRMaXN0ZW5lcnMiLCJDb250cm9sbGVyIiwiZGlzcGxheUNhcnRJdGVtIiwic2V0VXBFdmVudGlzdGVuZXIiLCJjb250cm9sbGVyIiwiVmlldyIsInByb2R1Y3RBZGRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImNhcnRJdGVtTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvZG5hbWUiLCJ2YWx1ZSIsInByaWNlIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInJhdGluZyIsInF1YW50aXR5IiwiZGlzY291bnQiLCJpbWFnZVVybCIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsaWNrIiwiZWxlbWVudENsaWNrZWQiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInByb2R1Y3RDbGlja2VkIiwiZmluZFBhcmVudE5vZGVUb2dldElkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiYWRkSXRlbSIsInBhcmVudE5vZGUiLCJyZW1vdmVJdGVtIiwicHJvTGlzdENvbnRhaW5lciIsImlubmVySFRNTCIsImZvckVhY2giLCJpdGVtIiwicG9zaXRpb24iLCJsaUVsIiwiY3JlYXRlRWxlbWVudCIsInByb2R1Y3RQYXJlbnREaXYiLCJwcm9kdWN0UHJpY2VEaXYiLCJuYW1lIiwiaW1nVXJsIiwiYXBwZW5kQ2hpbGQiLCJzcGxpdGFyciIsInRvdGFsUHJpY2UiLCJBZGRDb21tYVRvTnVtYmVyIiwidG90YWxJdGVtIiwiaXRlbXMiLCJJdGVtUHJpY2UiLCJ0b0ZpeGVkIiwiaXRlbUxpc3QiLCJlbGVtZW50TmFtZSIsInN0eWxlIiwiZWxlbWVudCIsImVsIiwidGFyZ2V0RWxlbWVudENsYXNzIiwic3BsaXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ2aWV3IiwiQ2FydCIsIml0ZW1JbkJhc2tldCIsImZpbHRlciIsIngiLCJJZCIsImluZGV4T2YiLCJzcGxpY2UiLCJsZW5ndGgiLCJyZWR1Y2UiLCJzdW0iLCJiIiwiY2FydCIsInByb2R1Y3REYXRhIiwicHJvZHVjdERhdGFzIiwicGFyc2UiLCJnZXRJdGVtIiwicGlkIiwicmVxdWlyZSIsIlByb2R1Y3QiLCJjb21tZW50cyIsImdlbmVyYXRlIiwicHJvZHVjdExpc3QiLCJwcm9kdWN0TGlzdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWxwaGFiZXQiLCJlbmNvZGUiLCJkZWNvZGUiLCJpc1ZhbGlkIiwiUkVEVUNFX1RJTUUiLCJ2ZXJzaW9uIiwiY2x1c3RlcldvcmtlcklkIiwiY291bnRlciIsInByZXZpb3VzU2Vjb25kcyIsInN0ciIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwibG9va3VwIiwic2VlZCIsInNlZWRWYWx1ZSIsIndvcmtlciIsIndvcmtlcklkIiwiY2hhcmFjdGVycyIsIm5ld0NoYXJhY3RlcnMiLCJ1bmRlZmluZWQiLCJzaHVmZmxlZCIsInJhbmRvbUZyb21TZWVkIiwiT1JJR0lOQUwiLCJwcmV2aW91c1NlZWQiLCJyZXNldCIsInNldENoYXJhY3RlcnMiLCJfYWxwaGFiZXRfIiwiRXJyb3IiLCJ1bmlxdWUiLCJpbmQiLCJhcnIiLCJsYXN0SW5kZXhPZiIsImpvaW4iLCJzZXRTZWVkIiwic2h1ZmZsZSIsInNvdXJjZUFycmF5IiwidGFyZ2V0QXJyYXkiLCJyIiwibmV4dFZhbHVlIiwiY2hhcmFjdGVySW5kZXgiLCJnZXRTaHVmZmxlZCIsImluZGV4IiwiYWxwaGFiZXRTaHVmZmxlZCIsImdldE5leHRWYWx1ZSIsIl9zZWVkXyIsInJhbmRvbUJ5dGUiLCJudW1iZXIiLCJsb29wQ291bnRlciIsImRvbmUiLCJwb3ciLCJjcnlwdG8iLCJ3aW5kb3ciLCJtc0NyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsInJhbmRvbSIsImRlc3QiLCJVaW50OEFycmF5Iiwic3Vic3RyIiwiaXNTaG9ydElkIiwibGVuIiwiaSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QyxHQUFHd0gsTUFBSCxDQUFVLENBQVYsRUFBYSxDQUFiLENBQW5CLElBQXNDO0FBRjNDLE1BQVA7QUFJSDs7QUFFRDlELFFBQU9DLE9BQVAsR0FBaUJHLE1BQWpCLEM7Ozs7OztBQ2hCQTs7QUFDQSxLQUFJRixXQUFXLG1CQUFBUixDQUFRLENBQVIsQ0FBZjs7QUFFQSxVQUFTcUUsU0FBVCxDQUFtQnpILEVBQW5CLEVBQXVCO0FBQ25CLFNBQUksQ0FBQ0EsRUFBRCxJQUFPLE9BQU9BLEVBQVAsS0FBYyxRQUFyQixJQUFpQ0EsR0FBRzBDLE1BQUgsR0FBWSxDQUFqRCxFQUFxRDtBQUNqRCxnQkFBTyxLQUFQO0FBQ0g7O0FBRUQsU0FBSXNDLGFBQWFwQixTQUFTb0IsVUFBVCxFQUFqQjtBQUNBLFNBQUkwQyxNQUFNMUgsR0FBRzBDLE1BQWI7QUFDQSxVQUFJLElBQUlpRixJQUFJLENBQVosRUFBZUEsSUFBSUQsR0FBbkIsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3hCLGFBQUkzQyxXQUFXeEMsT0FBWCxDQUFtQnhDLEdBQUcySCxDQUFILENBQW5CLE1BQThCLENBQUMsQ0FBbkMsRUFBc0M7QUFDbEMsb0JBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRCxZQUFPLElBQVA7QUFDSDs7QUFFRGpFLFFBQU9DLE9BQVAsR0FBaUI4RCxTQUFqQixDOzs7Ozs7QUNsQkE7O0FBRUEvRCxRQUFPQyxPQUFQLEdBQWlCLENBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmNkZDY3OTRiNzU4NmJkMWVhZDIiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xyXG5cclxuLy9sZXQgY2FydE9iamVjdCA9IG5ldyBDYXJ0KCk7XHJcblxyXG5jb250cm9sbGVyLmRpc3BsYXlDYXJ0SXRlbXMoKTtcclxuY29udHJvbGxlci5kaXNwbGF5UHJvZHVjdHMoKTtcclxuY29udHJvbGxlci5zZXRVcEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgSXRlbSBwcmljZSBpcyAke2NhcnRPYmplY3QudG90YWxQcmljZSgpfWApO1xyXG4vLyBjb25zb2xlLmxvZyhgVG90YWwgaXRlbSBpbiBjYXJ0IGlzOiAke2NhcnRPYmplY3QudG90YWxJdGVtKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBkaXNjb3VudCBwcmljZSBpcyAke2NhcnRPYmplY3QudG90YWxEaXNjb3VudFByaWNlKCl9YCk7XHJcbi8vIGNvbnNvbGUubG9nKGBUb3RhbCBwcmljZSB3aXRob3V0IGRpc2NvdW50IGlzICR7Y2FydE9iamVjdC50b3RhbFByaWNlV2l0aG91dERpc2NvdW50KCl9YCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiLCJpbXBvcnQge3ZpZXcgYXMgVmlld30gZnJvbSAnLi4vdmlldy92aWV3JztcclxuXHJcbmNsYXNzIENvbnRyb2xsZXJ7XHJcbiAgICBkaXNwbGF5Q2FydEl0ZW1zKCl7XHJcbiAgICAgICAgVmlldy5kaXNwbGF5Q2FydEl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgVmlldy5zZXRVcEV2ZW50aXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQcm9kdWN0cygpe1xyXG4gICAgICAgIFZpZXcuZGlzcGxheVByb2R1Y3RzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsImltcG9ydCB7IGNhcnQgYXMgQ2FydCB9IGZyb20gJy4uL21vZGVscy9DYXJ0JztcclxuaW1wb3J0IHsgUHJvZHVjdCwgcHJvZHVjdExpc3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XHJcblxyXG5jbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRVcEV2ZW50aXN0ZW5lcigpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdEFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdC1hZGQtYnV0dG9uXCIpLFxyXG4gICAgICAgICAgICBhZGRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtbGlzdC1ob2xkZXJcIiksXHJcbiAgICAgICAgICAgIGNhcnRJdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXNsaXN0XCIpO1xyXG5cclxuICAgICAgICBwcm9kdWN0QWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBwcm9kbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdG5hbWVcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2VcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnlcIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUsXHJcbiAgICAgICAgICAgICAgICByYXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGluZ1wiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWFudGl0eVwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjb3VudFwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVVybFwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vKG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHksIGNvbW1lbnRzLCBkaXNjb3VudClcclxuICAgICAgICAgICAgcHJvZHVjdExpc3QucHVzaChuZXcgUHJvZHVjdChwcm9kbmFtZSwgcHJpY2UsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgcmF0aW5nLCBxdWFudGl0eSwgW10sIGRpc2NvdW50LCBpbWFnZVVybCkpO1xyXG5cclxuICAgICAgICAgICAgLy9zYXZlIHByb2R1Y3RMaXN0IHRvIExvY2FsIFN0b3JhZ2VcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0TGlzdCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jbG9zZVwiKS5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRDbGlja2VkID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy9jaGVjayBpZiBlbGVtZW50IGNsaWNrZWQgaXMgYSBhZGQgdG8gYmFza2V0IGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudENsaWNrZWQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWRkLXRvLWJhc2tldC1idXR0b25cIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0Q2xpY2tlZCA9IHByb2R1Y3RMaXN0W2ZpbmRQYXJlbnROb2RlVG9nZXRJZChlbGVtZW50Q2xpY2tlZCwgXCJwcm9kdWN0LWxpc3QtZWxlbWVudFwiKS5pZF07XHJcblxyXG4gICAgICAgICAgICAgICAgLy9GaW5lIGFuZCBhZGQgdGhlIGl0ZW0gd2l0aCB0aGUgSWQgdG8gdGhlIENhcnRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RDbGlja2VkLmRpc2NvdW50KTtcclxuICAgICAgICAgICAgICAgIENhcnQuYWRkSXRlbShwcm9kdWN0Q2xpY2tlZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlDYXJ0SXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcnRJdGVtTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudENsaWNrZWQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudENsaWNrZWQuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZmEtdGltZXNcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnROb2RlID0gZmluZFBhcmVudE5vZGVUb2dldElkKGVsZW1lbnRDbGlja2VkLCBcImNhcnQtaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIENhcnQucmVtb3ZlSXRlbShwYXJlbnROb2RlLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUNhcnRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb2R1Y3RzKCkge1xyXG4gICAgICAgIGxldCBwcm9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXItcHJvZHVjdC1saXN0XCIpO1xyXG4gICAgICAgIHByb0xpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgLy9wcm9kdWN0TGlzdFxyXG4gICAgICAgIHByb2R1Y3RMaXN0LmZvckVhY2goKGl0ZW0sIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsaUVsID0gY3JlYXRlRWxlbWVudChcImxpXCIsIFwicHJvZHVjdC1saXN0LWVsZW1lbnRcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UGFyZW50RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2R1Y3RQYXJlbnREaXZcIiksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VEaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvZHVjdFByaWNlRGl2XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxpRWwuaWQgPSBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZURpdi5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgYDx1bCBjbGFzcz1cInByb2R1Y3QtZGV0YWlscy1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj48aDM+JHtpdGVtLm5hbWV9PC9oMz48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgY2xhc3M9XCJwcm9kdWN0LWltYWdlXCIgc3JjPSR7aXRlbS5pbWdVcmx9PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPjxiPlByaWNlOiA8L2I+PC9zcGFuPjxzcGFuPjxiPlxcJCR7aXRlbS5wcmljZX08L2I+PC9zcGFuPjwvbGk+PGI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgIChpdGVtLnF1YW50aXR5ID4gMCkgPyBcIjxsaT48c3BhbiBzdHlsZT0nY29sb3I6IGdyZWVuJz5JbiBTdG9jazwvc3Bhbj48L2xpPlwiIDogXCI8bGkgc3R5bGU9J2NvbG9yOiByZWQnPjxzcGFuPk91dCBvZiBzdG9jazwvc3Bhbj48L2xpPlwiXHJcbiAgICAgICAgICAgICAgICB9PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGFkZC10by1iYXNrZXQtYnV0dG9uXCI+QWRkIHRvIGJhc2tldDwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIHByb2R1Y3RQYXJlbnREaXYuYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlRGl2KTtcclxuICAgICAgICAgICAgbGlFbC5hcHBlbmRDaGlsZChwcm9kdWN0UGFyZW50RGl2KTtcclxuICAgICAgICAgICAgcHJvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaUVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5Q2FydEl0ZW0oKSB7XHJcbiAgICAgICAgLy9kaXNwbGF5IHRvdGFsIGl0ZW0gcHJpY2VcclxuICAgICAgICBsZXQgc3BsaXRhcnIgPSAoQ2FydC50b3RhbFByaWNlKCkgIT09IDApID8gQWRkQ29tbWFUb051bWJlcihDYXJ0LnRvdGFsUHJpY2UoKSkgOiBbXCIwXCIsIFwiMDBcIl07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblByaWNlXCIpLmlubmVySFRNTCA9IGBcXCQke3NwbGl0YXJyWzBdfTxzdXA+LiR7c3BsaXRhcnJbMV19JiMxNjI7PC9zdXA+YDtcclxuXHJcbiAgICAgICAgLy9kaXNwbGF5IHRvdGFsIGl0ZW0gaW4gYmFza2V0XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWd5XCIpLmlubmVySFRNTCA9IENhcnQudG90YWxJdGVtKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1pdGVtc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICAvL0xvb3AgYW5kIGRpc2xheSBDYXJ0IGl0ZW1zIGluIGEgbGlzdFxyXG4gICAgICAgIENhcnQuaXRlbXMuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGxldCBJdGVtUHJpY2UgPSBBZGRDb21tYVRvTnVtYmVyKChpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSkudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbUxpc3QgPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJjYXJ0LWl0ZW1cIik7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmlkID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwic21hbGwtcHJvZHVjdC1pY29uXCIgXHJcbiAgICAgICAgICAgIHNyYz0ke2l0ZW0uaW1nVXJsfT48Yj4ke2l0ZW0ucXVhbnRpdHl9IHggJHtpdGVtLm5hbWV9IFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcnRpdGVtLXByaWNlXCI+PSBcXCQke0l0ZW1QcmljZVswXX0uJHtJdGVtUHJpY2VbMV19IDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWl0ZW1zXCIpLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSA9IFwibmFcIiwgc3R5bGUgPSBcIm5hXCIsIGlubmVySFRNTCA9IFwibmFcIikgPT4ge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcclxuXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBcIm5hXCIpIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgY2xhc3NOYW1lO1xyXG5cclxuICAgIGlmIChzdHlsZSAhPT0gXCJuYVwiKSBlbGVtZW50LnN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgaWYgKGlubmVySFRNTCAhPT0gXCJuYVwiKSBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbn1cclxuXHJcbmxldCBmaW5kUGFyZW50Tm9kZVRvZ2V0SWQgPSAoZWwsIHRhcmdldEVsZW1lbnRDbGFzcykgPT4ge1xyXG4gICAgd2hpbGUgKGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTmFtZS5pbmNsdWRlcyh0YXJnZXRFbGVtZW50Q2xhc3MpKVxyXG4gICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxubGV0IEFkZENvbW1hVG9OdW1iZXIgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBsZXQgc3BsaXQgPSBlbGVtZW50LnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcclxuXHJcbiAgICBzcGxpdFswXSA9IHNwbGl0WzBdLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrJCkvZywgXCIkMSxcIik7XHJcblxyXG4gICAgcmV0dXJuIHNwbGl0O1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgdmlldyA9IG5ldyBWaWV3KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvdmlldy5qcyIsImltcG9ydCB7IHByb2R1Y3REYXRhIH0gZnJvbSAnLi9wcm9kdWN0RGF0YSc7XHJcblxyXG5jbGFzcyBDYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBwcm9kdWN0RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAvL0lmIGFuIGl0ZW0gaGFzIGJlZW4gYWRkZWQgdG8gdGhlIGJhc2tldCwgaW5jcmVhc2UgdGhlIHF1YW50aXR5IG9mIHRoZSB0aW1lXHJcbiAgICAgICAgbGV0IGl0ZW1JbkJhc2tldCA9IHRoaXMuaXRlbXMuZmlsdGVyKHggPT4geC5JZCA9PT0gaXRlbS5JZClbMF07XHJcblxyXG4gICAgICAgIGlmIChpdGVtSW5CYXNrZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLml0ZW1zLmluZGV4T2YoaXRlbUluQmFza2V0KV0ucXVhbnRpdHkgPSBpdGVtSW5CYXNrZXQucXVhbnRpdHkgKyAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0ocG9zaXRpb24pIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbEl0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApID8gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgMSwgMCkgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsRGlzY291bnRQcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIuZGlzY291bnQgIT09ICcnKSA/ICgoYi5kaXNjb3VudCAvIDEwMCkgKiBiLnByaWNlKSA6IDAuMDAsIDAuMDApLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaXRlbXMubGVuZ3RoID4gMCkgPyAodGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIucHJpY2UgLSAoYi5kaXNjb3VudCAqIGIucHJpY2UpIC8gMTAwKSpiLnF1YW50aXR5LCAwLjAwKS50b0ZpeGVkKDIpKSA6IDAuMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG90YWxQcmljZVdpdGhvdXREaXNjb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYikgPT4gc3VtICsgKGIucHJpY2UgIT09ICcnKSA/IGIucHJpY2UgOiAwLjAwLCAwLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGNhcnQgPSBuZXcgQ2FydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMvQ2FydC5qcyIsImxldCBwcm9kdWN0RGF0YSA9IFtdO1xyXG5cclxubGV0IHByb2R1Y3REYXRhcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDYXJ0XCIpKTtcclxuaWYgKCFwcm9kdWN0RGF0YXMpIHByb2R1Y3REYXRhID0gW107XHJcbmVsc2Uge1xyXG4gICAgcHJvZHVjdERhdGFzLmZvckVhY2goKGl0ZW0sIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdERhdGEucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcHJvZHVjdERhdGEgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kZWxzL3Byb2R1Y3REYXRhLmpzIiwibGV0IHBpZCA9IHJlcXVpcmUoJ3Nob3J0aWQnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIHJhdGluZywgcXVhbnRpdHkgPSAwLCBjb21tZW50cyA9IFtdLCBkaXNjb3VudCwgaW1nVXJsKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdGhpcy5JZCA9IHBpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICAgIHRoaXMuZGlzY291bnQgPSBkaXNjb3VudDtcclxuICAgICAgICB0aGlzLmltZ1VybCA9IGltZ1VybDtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBdmFpbGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHkgPiAwO1xyXG4gICAgfVxyXG59XHJcbmxldCBwcm9kdWN0TGlzdCA9IFtdO1xyXG5cclxubGV0IHByb2R1Y3RMaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9kdWN0c1wiKSk7XHJcbmlmICghcHJvZHVjdExpc3RzKSBwcm9kdWN0TGlzdHMgPSBbXTtcclxuZWxzZSB7XHJcbiAgICBwcm9kdWN0TGlzdHMuZm9yRWFjaCgoaXRlbSwgcG9zaXRpb24pID0+IHtcclxuICAgICAgICBwcm9kdWN0TGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiB9XHJcblxyXG5leHBvcnQgeyBwcm9kdWN0TGlzdCB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZGVscy9wcm9kdWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG52YXIgZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuL2lzLXZhbGlkJyk7XG5cbi8vIElnbm9yZSBhbGwgbWlsbGlzZWNvbmRzIGJlZm9yZSBhIGNlcnRhaW4gdGltZSB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIGRhdGUgZW50cm9weSB3aXRob3V0IHNhY3JpZmljaW5nIHVuaXF1ZW5lc3MuXG4vLyBUaGlzIG51bWJlciBzaG91bGQgYmUgdXBkYXRlZCBldmVyeSB5ZWFyIG9yIHNvIHRvIGtlZXAgdGhlIGdlbmVyYXRlZCBpZCBzaG9ydC5cbi8vIFRvIHJlZ2VuZXJhdGUgYG5ldyBEYXRlKCkgLSAwYCBhbmQgYnVtcCB0aGUgdmVyc2lvbi4gQWx3YXlzIGJ1bXAgdGhlIHZlcnNpb24hXG52YXIgUkVEVUNFX1RJTUUgPSAxNDU5NzA3NjA2NTE4O1xuXG4vLyBkb24ndCBjaGFuZ2UgdW5sZXNzIHdlIGNoYW5nZSB0aGUgYWxnb3Mgb3IgUkVEVUNFX1RJTUVcbi8vIG11c3QgYmUgYW4gaW50ZWdlciBhbmQgbGVzcyB0aGFuIDE2XG52YXIgdmVyc2lvbiA9IDY7XG5cbi8vIGlmIHlvdSBhcmUgdXNpbmcgY2x1c3RlciBvciBtdWx0aXBsZSBzZXJ2ZXJzIHVzZSB0aGlzIHRvIG1ha2UgZWFjaCBpbnN0YW5jZVxuLy8gaGFzIGEgdW5pcXVlIHZhbHVlIGZvciB3b3JrZXJcbi8vIE5vdGU6IEkgZG9uJ3Qga25vdyBpZiB0aGlzIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gdXNpbmcgdGhpcmRcbi8vIHBhcnR5IGNsdXN0ZXIgc29sdXRpb25zIHN1Y2ggYXMgcG0yLlxudmFyIGNsdXN0ZXJXb3JrZXJJZCA9IHJlcXVpcmUoJy4vdXRpbC9jbHVzdGVyLXdvcmtlci1pZCcpIHx8IDA7XG5cbi8vIENvdW50ZXIgaXMgdXNlZCB3aGVuIHNob3J0aWQgaXMgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIG9uZSBzZWNvbmQuXG52YXIgY291bnRlcjtcblxuLy8gUmVtZW1iZXIgdGhlIGxhc3QgdGltZSBzaG9ydGlkIHdhcyBjYWxsZWQgaW4gY2FzZSBjb3VudGVyIGlzIG5lZWRlZC5cbnZhciBwcmV2aW91c1NlY29uZHM7XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIGlkXG4gKiBSZXR1cm5zIHN0cmluZyBpZFxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcblxuICAgIHZhciBzdHIgPSAnJztcblxuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIFJFRFVDRV9USU1FKSAqIDAuMDAxKTtcblxuICAgIGlmIChzZWNvbmRzID09PSBwcmV2aW91c1NlY29uZHMpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBwcmV2aW91c1NlY29uZHMgPSBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIHZlcnNpb24pO1xuICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNsdXN0ZXJXb3JrZXJJZCk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGVuY29kZShhbHBoYWJldC5sb29rdXAsIGNvdW50ZXIpO1xuICAgIH1cbiAgICBzdHIgPSBzdHIgKyBlbmNvZGUoYWxwaGFiZXQubG9va3VwLCBzZWNvbmRzKTtcblxuICAgIHJldHVybiBzdHI7XG59XG5cblxuLyoqXG4gKiBTZXQgdGhlIHNlZWQuXG4gKiBIaWdobHkgcmVjb21tZW5kZWQgaWYgeW91IGRvbid0IHdhbnQgcGVvcGxlIHRvIHRyeSB0byBmaWd1cmUgb3V0IHlvdXIgaWQgc2NoZW1hLlxuICogZXhwb3NlZCBhcyBzaG9ydGlkLnNlZWQoaW50KVxuICogQHBhcmFtIHNlZWQgSW50ZWdlciB2YWx1ZSB0byBzZWVkIHRoZSByYW5kb20gYWxwaGFiZXQuICBBTFdBWVMgVVNFIFRIRSBTQU1FIFNFRUQgb3IgeW91IG1pZ2h0IGdldCBvdmVybGFwcy5cbiAqL1xuZnVuY3Rpb24gc2VlZChzZWVkVmFsdWUpIHtcbiAgICBhbHBoYWJldC5zZWVkKHNlZWRWYWx1ZSk7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIFNldCB0aGUgY2x1c3RlciB3b3JrZXIgb3IgbWFjaGluZSBpZFxuICogZXhwb3NlZCBhcyBzaG9ydGlkLndvcmtlcihpbnQpXG4gKiBAcGFyYW0gd29ya2VySWQgd29ya2VyIG11c3QgYmUgcG9zaXRpdmUgaW50ZWdlci4gIE51bWJlciBsZXNzIHRoYW4gMTYgaXMgcmVjb21tZW5kZWQuXG4gKiByZXR1cm5zIHNob3J0aWQgbW9kdWxlIHNvIGl0IGNhbiBiZSBjaGFpbmVkLlxuICovXG5mdW5jdGlvbiB3b3JrZXIod29ya2VySWQpIHtcbiAgICBjbHVzdGVyV29ya2VySWQgPSB3b3JrZXJJZDtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8qKlxuICpcbiAqIHNldHMgbmV3IGNoYXJhY3RlcnMgdG8gdXNlIGluIHRoZSBhbHBoYWJldFxuICogcmV0dXJucyB0aGUgc2h1ZmZsZWQgYWxwaGFiZXRcbiAqL1xuZnVuY3Rpb24gY2hhcmFjdGVycyhuZXdDaGFyYWN0ZXJzKSB7XG4gICAgaWYgKG5ld0NoYXJhY3RlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbHBoYWJldC5jaGFyYWN0ZXJzKG5ld0NoYXJhY3RlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYWJldC5zaHVmZmxlZCgpO1xufVxuXG5cbi8vIEV4cG9ydCBhbGwgb3RoZXIgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgb2YgdGhlIGdlbmVyYXRlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlO1xubW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGUgPSBnZW5lcmF0ZTtcbm1vZHVsZS5leHBvcnRzLnNlZWQgPSBzZWVkO1xubW9kdWxlLmV4cG9ydHMud29ya2VyID0gd29ya2VyO1xubW9kdWxlLmV4cG9ydHMuY2hhcmFjdGVycyA9IGNoYXJhY3RlcnM7XG5tb2R1bGUuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21Gcm9tU2VlZCA9IHJlcXVpcmUoJy4vcmFuZG9tL3JhbmRvbS1mcm9tLXNlZWQnKTtcblxudmFyIE9SSUdJTkFMID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXy0nO1xudmFyIGFscGhhYmV0O1xudmFyIHByZXZpb3VzU2VlZDtcblxudmFyIHNodWZmbGVkO1xuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBzaHVmZmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRDaGFyYWN0ZXJzKF9hbHBoYWJldF8pIHtcbiAgICBpZiAoIV9hbHBoYWJldF8pIHtcbiAgICAgICAgaWYgKGFscGhhYmV0ICE9PSBPUklHSU5BTCkge1xuICAgICAgICAgICAgYWxwaGFiZXQgPSBPUklHSU5BTDtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChfYWxwaGFiZXRfID09PSBhbHBoYWJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKF9hbHBoYWJldF8ubGVuZ3RoICE9PSBPUklHSU5BTC5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDdXN0b20gYWxwaGFiZXQgZm9yIHNob3J0aWQgbXVzdCBiZSAnICsgT1JJR0lOQUwubGVuZ3RoICsgJyB1bmlxdWUgY2hhcmFjdGVycy4gWW91IHN1Ym1pdHRlZCAnICsgX2FscGhhYmV0Xy5sZW5ndGggKyAnIGNoYXJhY3RlcnM6ICcgKyBfYWxwaGFiZXRfKTtcbiAgICB9XG5cbiAgICB2YXIgdW5pcXVlID0gX2FscGhhYmV0Xy5zcGxpdCgnJykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZCwgYXJyKXtcbiAgICAgICByZXR1cm4gaW5kICE9PSBhcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfSk7XG5cbiAgICBpZiAodW5pcXVlLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N1c3RvbSBhbHBoYWJldCBmb3Igc2hvcnRpZCBtdXN0IGJlICcgKyBPUklHSU5BTC5sZW5ndGggKyAnIHVuaXF1ZSBjaGFyYWN0ZXJzLiBUaGVzZSBjaGFyYWN0ZXJzIHdlcmUgbm90IHVuaXF1ZTogJyArIHVuaXF1ZS5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBhbHBoYWJldCA9IF9hbHBoYWJldF87XG4gICAgcmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVycyhfYWxwaGFiZXRfKSB7XG4gICAgc2V0Q2hhcmFjdGVycyhfYWxwaGFiZXRfKTtcbiAgICByZXR1cm4gYWxwaGFiZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFNlZWQoc2VlZCkge1xuICAgIHJhbmRvbUZyb21TZWVkLnNlZWQoc2VlZCk7XG4gICAgaWYgKHByZXZpb3VzU2VlZCAhPT0gc2VlZCkge1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBwcmV2aW91c1NlZWQgPSBzZWVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcbiAgICBpZiAoIWFscGhhYmV0KSB7XG4gICAgICAgIHNldENoYXJhY3RlcnMoT1JJR0lOQUwpO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VBcnJheSA9IGFscGhhYmV0LnNwbGl0KCcnKTtcbiAgICB2YXIgdGFyZ2V0QXJyYXkgPSBbXTtcbiAgICB2YXIgciA9IHJhbmRvbUZyb21TZWVkLm5leHRWYWx1ZSgpO1xuICAgIHZhciBjaGFyYWN0ZXJJbmRleDtcblxuICAgIHdoaWxlIChzb3VyY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgPSByYW5kb21Gcm9tU2VlZC5uZXh0VmFsdWUoKTtcbiAgICAgICAgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKHIgKiBzb3VyY2VBcnJheS5sZW5ndGgpO1xuICAgICAgICB0YXJnZXRBcnJheS5wdXNoKHNvdXJjZUFycmF5LnNwbGljZShjaGFyYWN0ZXJJbmRleCwgMSlbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0QXJyYXkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNodWZmbGVkKCkge1xuICAgIGlmIChzaHVmZmxlZCkge1xuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfVxuICAgIHNodWZmbGVkID0gc2h1ZmZsZSgpO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBsb29rdXAgc2h1ZmZsZWQgbGV0dGVyXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2t1cChpbmRleCkge1xuICAgIHZhciBhbHBoYWJldFNodWZmbGVkID0gZ2V0U2h1ZmZsZWQoKTtcbiAgICByZXR1cm4gYWxwaGFiZXRTaHVmZmxlZFtpbmRleF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoYXJhY3RlcnM6IGNoYXJhY3RlcnMsXG4gICAgc2VlZDogc2V0U2VlZCxcbiAgICBsb29rdXA6IGxvb2t1cCxcbiAgICBzaHVmZmxlZDogZ2V0U2h1ZmZsZWRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2FscGhhYmV0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBGb3VuZCB0aGlzIHNlZWQtYmFzZWQgcmFuZG9tIGdlbmVyYXRvciBzb21ld2hlcmVcbi8vIEJhc2VkIG9uIFRoZSBDZW50cmFsIFJhbmRvbWl6ZXIgMS4zIChDKSAxOTk3IGJ5IFBhdWwgSG91bGUgKGhvdWxlQG1zYy5jb3JuZWxsLmVkdSlcblxudmFyIHNlZWQgPSAxO1xuXG4vKipcbiAqIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzZWVkXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dFZhbHVlKCkge1xuICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgcmV0dXJuIHNlZWQvKDIzMzI4MC4wKTtcbn1cblxuZnVuY3Rpb24gc2V0U2VlZChfc2VlZF8pIHtcbiAgICBzZWVkID0gX3NlZWRfO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBuZXh0VmFsdWU6IGdldE5leHRWYWx1ZSxcbiAgICBzZWVkOiBzZXRTZWVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zaG9ydGlkL2xpYi9yYW5kb20vcmFuZG9tLWZyb20tc2VlZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJhbmRvbUJ5dGUgPSByZXF1aXJlKCcuL3JhbmRvbS9yYW5kb20tYnl0ZScpO1xuXG5mdW5jdGlvbiBlbmNvZGUobG9va3VwLCBudW1iZXIpIHtcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xuICAgIHZhciBkb25lO1xuXG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIGxvb2t1cCggKCAobnVtYmVyID4+ICg0ICogbG9vcENvdW50ZXIpKSAmIDB4MGYgKSB8IHJhbmRvbUJ5dGUoKSApO1xuICAgICAgICBkb25lID0gbnVtYmVyIDwgKE1hdGgucG93KDE2LCBsb29wQ291bnRlciArIDEgKSApO1xuICAgICAgICBsb29wQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvZW5jb2RlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3J5cHRvID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKTsgLy8gSUUgMTEgdXNlcyB3aW5kb3cubXNDcnlwdG9cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZSgpIHtcbiAgICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSAmIDB4MzA7XG4gICAgfVxuICAgIHZhciBkZXN0ID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhkZXN0KTtcbiAgICByZXR1cm4gZGVzdFswXSAmIDB4MzA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvcmFuZG9tL3JhbmRvbS1ieXRlLWJyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0Jyk7XG5cbi8qKlxuICogRGVjb2RlIHRoZSBpZCB0byBnZXQgdGhlIHZlcnNpb24gYW5kIHdvcmtlclxuICogTWFpbmx5IGZvciBkZWJ1Z2dpbmcgYW5kIHRlc3RpbmcuXG4gKiBAcGFyYW0gaWQgLSB0aGUgc2hvcnRpZC1nZW5lcmF0ZWQgaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShpZCkge1xuICAgIHZhciBjaGFyYWN0ZXJzID0gYWxwaGFiZXQuc2h1ZmZsZWQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiBjaGFyYWN0ZXJzLmluZGV4T2YoaWQuc3Vic3RyKDAsIDEpKSAmIDB4MGYsXG4gICAgICAgIHdvcmtlcjogY2hhcmFjdGVycy5pbmRleE9mKGlkLnN1YnN0cigxLCAxKSkgJiAweDBmXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Nob3J0aWQvbGliL2RlY29kZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQnKTtcblxuZnVuY3Rpb24gaXNTaG9ydElkKGlkKSB7XG4gICAgaWYgKCFpZCB8fCB0eXBlb2YgaWQgIT09ICdzdHJpbmcnIHx8IGlkLmxlbmd0aCA8IDYgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcmFjdGVycyA9IGFscGhhYmV0LmNoYXJhY3RlcnMoKTtcbiAgICB2YXIgbGVuID0gaWQubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzLmluZGV4T2YoaWRbaV0pID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2hvcnRJZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvaXMtdmFsaWQuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc2hvcnRpZC9saWIvdXRpbC9jbHVzdGVyLXdvcmtlci1pZC1icm93c2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==