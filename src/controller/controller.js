import {view as View} from '../view/view';

class Controller{
    displayCartItems(){
        View.displatCartItem();
    }
}

export let controller = new Controller();