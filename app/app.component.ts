import { Component } from 'angular2/core';


@Component({
    selector: 'suw-app',
    template: `<div>
                <h1>
                    <div>{{pageTitle}}</div>
                </h1>
               
              </div>`
})
export class AppComponent {
    pageTitle: string = 'Sports Ur Way';
}