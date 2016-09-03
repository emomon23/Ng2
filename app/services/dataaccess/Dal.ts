import { Product} from '../../Products/Product'
import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Dal {
   private _producttUrl =  'api/products/products.json';

  constructor(private _http: Http){}

  /**** GET PRODUCTS  */
  getProducts() : Observable<Product[]> {
       return this._http.get(this._producttUrl)
                  .map((response: Response) => <Product[]>response.json())
                  .catch((error: Response) => Observable.throw(error.json().error || 'Some Error Occurred getting products'));
   }


}