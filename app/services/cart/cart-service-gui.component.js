System.register(['angular2/core', '../cart/shopping-cart-service'], function(exports_1, context_1) {
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
    var core_1, shopping_cart_service_1;
    var CartGuiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_cart_service_1_1) {
                shopping_cart_service_1 = shopping_cart_service_1_1;
            }],
        execute: function() {
            CartGuiService = (function () {
                function CartGuiService(_cart) {
                    this._cart = _cart;
                }
                CartGuiService.prototype.totalCartPrice = function () {
                    return this._cart.totalCartPrice;
                };
                CartGuiService.prototype.itemsCount = function () {
                    return this._cart.items.length;
                };
                CartGuiService = __decorate([
                    core_1.Component({
                        selector: 'shopping-cart',
                        templateUrl: '../cart/cart-service.component.html'
                    }), 
                    __metadata('design:paramtypes', [shopping_cart_service_1.ShoppingCartService])
                ], CartGuiService);
                return CartGuiService;
            }());
            exports_1("CartGuiService", CartGuiService);
        }
    }
});
//# sourceMappingURL=cart-service-gui.component.js.map