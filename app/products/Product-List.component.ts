import { Product} from './Product'
import { Component, OnInit, Pipe} from 'angular2/core';
import { Dal } from '../services/dataaccess/dal'
import { ProductCategories } from '../pipes/product-categories';

@Component({
    selector: 'suw-products',
    templateUrl:'./app/products/product-list.component.html',
     pipes:[ProductCategories]
    
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