System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './services/dataaccess/dal', './products/product-list.component', './services/cart/shopping-cart-service', './checkout/checkout-component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, http_1, dal_1, product_list_component_1, shopping_cart_service_1, checkout_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (dal_1_1) {
                dal_1 = dal_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (shopping_cart_service_1_1) {
                shopping_cart_service_1 = shopping_cart_service_1_1;
            },
            function (checkout_component_1_1) {
                checkout_component_1 = checkout_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Sportz Ur Way';
                }
                AppComponent.prototype.onPageTitleChange = function (message) {
                    this.pageTitle = "Sportz Ur Way - " + message;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'suw-app',
                        templateUrl: 'app/app.component.template.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, dal_1.Dal, shopping_cart_service_1.ShoppingCartService]
                    }),
                    router_1.RouteConfig([
                        { path: '/products', name: 'Products', component: product_list_component_1.ProductListComponet, useAsDefault: true },
                        { path: '/checkOut', name: 'CheckOut', component: checkout_component_1.CheckOutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map