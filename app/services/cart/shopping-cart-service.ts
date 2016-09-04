
import { Injectable, Component} from 'angular2/core';
import { Product} from '../../Products/Product'
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router'

@Injectable()
export class ShoppingCartService {
   items: Array<CartItem> = new Array<CartItem>();  
   totalQuantityInCart: number = 0;
   totalCartPrice: number=0;
   
   addToCart(product: Product, quantity: number){
       
      var existingCartItem = this.findProduct(product.productId);

      if (existingCartItem == null)
      {
        var cartItem : CartItem = new CartItem(product.productId, product.name, product.description, product.price, quantity);
        this.items.push(cartItem);
      }
      else {
          existingCartItem.quantity+=quantity;
      }
      
      this.totalQuantityInCart+=quantity;
      this.totalCartPrice+= product.price * quantity;
      
   }

    removeFromCart(itemId: number) : void {
          var existingCartItem = this.findProduct(itemId);

          if (existingCartItem != null){
              this.totalCartPrice-= existingCartItem.price * existingCartItem.quantity;
              this.totalQuantityInCart-= existingCartItem.quantity;
              var index = this.items.indexOf(existingCartItem);
              this.items.splice(index, 1);
          }
    }

    private findProduct(itemId: number) : CartItem {
        var result : CartItem = null;

         for (var i:number=0; i < this.items.length; i++){
          if (this.items[i].itemId == itemId){
              result = this.items[i];
              break;
          }
        }
        
        return result;
    }
}

export class CartItem {
    itemId: number;
    name: string;
    description: string;
    price: number;
    quantity: number;

    constructor (id:number, name:string, description: string, price: number, quantity:number){
        this.itemId = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity
    }
}


@Component({
    selector: 'shopping-cart',
    templateUrl:  'app/services/cart/cart-service-gui.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class CartGuiService {

   cart: ShoppingCartService;

   constructor(cart: ShoppingCartService){
       this.cart = cart;
   }

 

}