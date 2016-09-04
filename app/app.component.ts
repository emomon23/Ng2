import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx'; //Load all features of rxjs
import { Dal } from './services/dataaccess/dal';
import { ProductListComponet } from './products/product-list.component'
import { ShoppingCartService } from './services/cart/shopping-cart-service'
import { CheckOutComponent } from './checkout/checkout-component'
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'


@Component({
    selector: 'suw-app',
    templateUrl:'app/app.component.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS, Dal, ShoppingCartService]
})
@RouteConfig(
    [
        { path:'/products', name:'Products', component:ProductListComponet, useAsDefault:true},
        { path:'/checkOut', name:'CheckOut', component: CheckOutComponent}
    ]
)
export class AppComponent {
  pageTitle: string = 'Sportz Ur Way';

  onPageTitleChange(message: string){
     this.pageTitle = `Sportz Ur Way - ` + message;
  }
}