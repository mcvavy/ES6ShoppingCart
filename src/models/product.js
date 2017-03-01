let pid = require( 'shortid');

export class Product{
    constructor(name, price, category, description, rating, quantity, comments = [], discount, imgUrl){
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

    isAvailable(){
        return this.quantity > 0;
    }
}

export let productList = [];