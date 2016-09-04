import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core'

@Component({
   selector: 'starRating',
   templateUrl : 'app/shared/star.component.html',
   styleUrls: ['app/shared/star.component.css']
  
})
export class StarComponent  implements OnChanges {
    @Input() rating: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    ngOnChanges() : void {
       this.starWidth = this.rating * 86 / 5;
    }

    onClick() : void {
        this.notify.emit(`Current product rating: ${this.rating}`);        
    }
}