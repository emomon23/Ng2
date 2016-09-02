System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductListComponet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductListComponet = (function () {
                function ProductListComponet() {
                    this.products = [{ "name": "iPhone 7", "category": "Phone", "description": "apple phone", "productId": 1, "price": 372.23 },
                        { "name": "Nexus 6", "category": "Phone", "description": "Google phone", "productId": 2, "price": 299.72 }];
                }
                ProductListComponet.prototype.ngOnInit = function () { };
                ProductListComponet = __decorate([
                    core_1.Component({
                        selector: 'suw-products',
                        templateUrl: './app/products/product-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponet);
                return ProductListComponet;
            }());
            exports_1("ProductListComponet", ProductListComponet);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map