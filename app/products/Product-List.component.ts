import { Product} from './Product'
import { Component, OnInit, Output, EventEmitter, Pipe} from 'angular2/core';
import { Dal } from '../services/dataaccess/dal'
import { ProductCategories } from '../pipes/product-categories';
import { StarComponent } from '../shared/star-component';
import { ShoppingCartService, CartGuiService } from '../services/cart/shopping-cart-service'


@Component({
    selector: 'suw-products',
    templateUrl:'./app/products/product-list.component.html',
    pipes:[ProductCategories],
    directives:[StarComponent, CartGuiService]
    
})
export class ProductListComponet implements OnInit {
   
    private  _selectedCateogry: string = 'Home';
    products: Product[];
    filterdProducts: Product[];
    errorMessage: string = '';
    @Output() pageTitleChange: EventEmitter<string> = new EventEmitter<string>();
    constructor(private _dal: Dal, private _cart: ShoppingCartService){
     
     }

    ngOnInit() : void {
         this._dal.getProducts().subscribe(p => this.onProductsRetrieved(p));
    }

    onStarsClick(message : string): void {
        this.pageTitleChange.emit(message);
    }

    selectCategory(categoryName: any) : void {  
        this._selectedCateogry = categoryName ? categoryName.toLocaleLowerCase() : null; 
    
        this.filterdProducts = categoryName ? this.products.filter((product: Product) => 
              categoryName == "Home" ||  product.category.toLocaleLowerCase().indexOf(this._selectedCateogry) !== -1) : this.products;
    
    }
    
    addToCart(product : Product){
        this._cart.addToCart(product, 1);
    }

    onProductsRetrieved(products: Product[]) { 
     this.products = products; 
     this.filterdProducts = products;
    }
}