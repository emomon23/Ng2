import {Pipe} from 'angular2/core'
import {Product} from '../products/product';

@Pipe(
    {
        name: "productCategories"
    }
)
export class ProductCategories {
    transform(products: Product[]) : string [] {
        var result : string[] = [];
        var distinctCategoryList = {};

        if (products){
            products.forEach(p =>{
                if (!distinctCategoryList[p.category]){
                    distinctCategoryList[p.category] = true;
                    result.push(p.category);
                }
            });
        }

        return result;
    }
}