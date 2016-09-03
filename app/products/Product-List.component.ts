import { Product} from './Product'
import { Component, OnInit} from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'suw-products',
    templateUrl:'./app/products/product-list.component.html'
})
export class ProductListComponet implements OnInit {
    private _producttUrl =  'api/products/products.json';
    products: Product[];
    errorMessage: string = '';
   
    constructor(private _http: Http){
     
     }

    ngOnInit() : void {
         this.getProducts().subscribe(p => this.products = p);
    }
    
   getProducts() : Observable<Product[]> {
       return this._http.get(this._producttUrl)
                  .map((response: Response) => <Product[]>response.json());
   }
}