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
    var ShoppingCartService, CartItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingCartService = (function () {
                function ShoppingCartService() {
                    this.items = new Array();
                    this.totalQuantityInCart = 0;
                    this.totalCartPrice = 0;
                }
                ShoppingCartService.prototype.addToCart = function (product, quantity) {
                    var cartItem = new CartItem(product.productId, product.name, product.description, product.price, quantity);
                    this.items.push(cartItem);
                    this.totalQuantityInCart += quantity;
                    this.totalCartPrice = (product.price * quantity);
                };
                ShoppingCartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingCartService);
                return ShoppingCartService;
            }());
            exports_1("ShoppingCartService", ShoppingCartService);
            CartItem = (function () {
                function CartItem(id, name, description, price, quantity) {
                    this.itemId = id;
                    this.name = name;
                    this.description = description;
                    this.price = price;
                    this.quantity = quantity;
                }
                return CartItem;
            }());
            exports_1("CartItem", CartItem);
        }
    }
});
//# sourceMappingURL=shoppng-cart-service.js.map