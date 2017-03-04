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