
import { Injectable, Component} from 'angular2/core';
import { Product} from '../../Products/Product'

@Injectable()
export class ShoppingCartService {
   items: Array<CartItem> = new Array<CartItem>();  
   totalQuantityInCart: number = 0;
   totalCartPrice: number=0;
   
   addToCart(product: Product, quantity: number){
       
      var foundIt:boolean = false;
      
      for (var i:number=0; i < this.items.length; i++){
          if (this.items[i].itemId == product.productId){
              foundIt = true;
              this.items[i].quantity+=1;
              break;
          }
      }

      if (! foundIt)
      {
        var cartItem : CartItem = new CartItem(product.productId, product.name, product.description, product.price, quantity);
        this.items.push(cartItem);
        
      }
      
      this.totalQuantityInCart+=quantity;
      this.totalCartPrice+= product.price * quantity;
      
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
    templateUrl:  'app/services/cart/cart-service-gui.component.html'
})
export class CartGuiService {
   constructor(private _cart: ShoppingCartService){}

   totalCartPrice() : number {
       return this._cart.totalCartPrice;
   }

  itemsCount() : number {
      return this._cart.totalQuantityInCart; 
  }

}