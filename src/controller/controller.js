import {view as View} from '../view/view';

class Controller{
    displayCartItems(){
        View.displayCartItem();
    }

    setUpEventListeners(){
        View.setUpEventistener();
    }

    displayProducts(){
        View.displayProducts();
    }
}

export let controller = new Controller();