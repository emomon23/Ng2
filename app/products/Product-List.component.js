System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ProductListComponet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ProductListComponet = (function () {
                function ProductListComponet(_http) {
                    this._http = _http;
                    this._producttUrl = 'api/products/products.json';
                    this.errorMessage = '';
                }
                ProductListComponet.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getProducts().subscribe(function (p) { return _this.products = p; });
                };
                ProductListComponet.prototype.getProducts = function () {
                    return this._http.get(this._producttUrl)
                        .map(function (response) { return response.json(); });
                };
                ProductListComponet = __decorate([
                    core_1.Component({
                        selector: 'suw-products',
                        templateUrl: './app/products/product-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProductListComponet);
                return ProductListComponet;
            }());
            exports_1("ProductListComponet", ProductListComponet);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map