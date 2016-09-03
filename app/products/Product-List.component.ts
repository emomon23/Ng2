import { Product} from './Product'
import { Component, OnInit} from 'angular2/core';
import { Dal } from '../services/dataaccess/dal'

@Component({
    selector: 'suw-products',
    templateUrl:'./app/products/product-list.component.html'
})
export class ProductListComponet implements OnInit {
   
    products: Product[];
    errorMessage: string = '';
   
    constructor(private _dal: Dal){
     
     }

    ngOnInit() : void {
         this._dal.getProducts().subscribe(p => this.products = p);
    }
    
  
}