let pid = require('shortid');

export class Product {
    constructor(name, price, category, description, rating, quantity = 0, comments = [], discount, imgUrl) {
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

    isAvailable() {
        return this.quantity > 0;
    }
}
let productList = [];

let productLists = JSON.parse(localStorage.getItem("products"));
if (!productLists) productLists = [];
else {
    productLists.forEach((item, position) => {
        productList.push(item);
    });
 }

export { productList }