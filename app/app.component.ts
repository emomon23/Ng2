import { Component } from 'angular2/core';
import { ProductListComponet } from './products/product-list.component'

@Component({
    selector: 'suw-app',
    templateUrl:'app/app.component.template.html',
    directives: [ProductListComponet]
})
export class AppComponent {
  
}