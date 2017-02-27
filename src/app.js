import { Cart } from './models/Cart';

let cartObject = new Cart();


console.log(cartObject.totalPrice());
console.log(`Total item in cart is: ${cartObject.totalItem()}`);
