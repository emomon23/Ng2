import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx'; //Load all features of rxjs
import { Dal } from './services/dataaccess/dal';

import { ProductListComponet } from './products/product-list.component'

@Component({
    selector: 'suw-app',
    templateUrl:'app/app.component.template.html',
    directives: [ProductListComponet],
    providers: [ HTTP_PROVIDERS, Dal]
})
export class AppComponent {
  pageTitle: string = 'Sportz Ur Way';

  onPageTitleChange(message: string){
     this.pageTitle = `Sportz Ur Way - ` + message;
  }
}