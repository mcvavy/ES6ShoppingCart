import {view as View} from '../view/view';

class Controller{
    displayCartItems(){
        View.displatCartItem();
    }

    setUpEventListeners(){
        View.setUpEventistener();
    }
}

export let controller = new Controller();