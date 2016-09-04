import { Component } from 'angular2/core'
import { ShoppingCartService, CartItem} from '../services/cart/shopping-cart-service';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
   templateUrl: 'app/checkout/checkout-component.html',
   directives:[ROUTER_DIRECTIVES]
})
export class CheckOutComponent {
    cartItems : CartItem[];

    constructor(private _cart: ShoppingCartService){
        this.cartItems = _cart.items;
    }
   
    cartIsEmpty() : boolean {
        return this._cart.items.length == 0;
    }

    removeFromCart(item: CartItem){
        this._cart.removeFromCart(item.itemId);
    }

    totalCartPrice() : number {
        return this._cart.totalCartPrice;
    }
}