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
   
    private  _selectedCateogry: string = 'Home';
    products: Product[];
    filterdProducts: Product[];
    errorMessage: string = '';
   
    constructor(private _dal: Dal){
     
     }

    ngOnInit() : void {
         this._dal.getProducts().subscribe(p => this.onProductsRetrieved(p));
    }

    selectCategory(categoryName: any) {  
        this._selectedCateogry = categoryName ? categoryName.toLocaleLowerCase() : null; 
    
        this.filterdProducts = categoryName ? this.products.filter((product: Product) => 
              categoryName == "Home" ||  product.category.toLocaleLowerCase().indexOf(this._selectedCateogry) !== -1) : this.products;
    
    }
    
   onProductsRetrieved(products: Product[]) { 
     this.products = products; 
     this.filterdProducts = products;
    }
}