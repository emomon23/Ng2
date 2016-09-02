import { Product} from './Product'
import { Component, OnInit} from 'angular2/core';

@Component({
    selector: 'suw-products',
    templateUrl:'./app/products/product-list.component.html'
})
export class ProductListComponet implements OnInit {
    products: Product[] = [{"name":"iPhone 7", "category":"Phone", "description":"apple phone", "productId":1, "price":372.23},
                           {"name":"Nexus 6", "category":"Phone", "description":"Google phone", "productId":2, "price":299.72}];
   
    ngOnInit() : void {}
    
}