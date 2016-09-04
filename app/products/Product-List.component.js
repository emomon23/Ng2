System.register(['angular2/core', '../services/dataaccess/dal', '../pipes/product-categories', '../shared/star-component', '../services/cart/shopping-cart-service'], function(exports_1, context_1) {
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
    var core_1, dal_1, product_categories_1, star_component_1, shopping_cart_service_1;
    var ProductListComponet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dal_1_1) {
                dal_1 = dal_1_1;
            },
            function (product_categories_1_1) {
                product_categories_1 = product_categories_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (shopping_cart_service_1_1) {
                shopping_cart_service_1 = shopping_cart_service_1_1;
            }],
        execute: function() {
            ProductListComponet = (function () {
                function ProductListComponet(_dal, _cart) {
                    this._dal = _dal;
                    this._cart = _cart;
                    this._selectedCateogry = 'Home';
                    this.errorMessage = '';
                    this.pageTitleChange = new core_1.EventEmitter();
                }
                ProductListComponet.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dal.getProducts().subscribe(function (p) { return _this.onProductsRetrieved(p); });
                };
                ProductListComponet.prototype.onStarsClick = function (message) {
                    this.pageTitleChange.emit(message);
                };
                ProductListComponet.prototype.selectCategory = function (categoryName) {
                    var _this = this;
                    this._selectedCateogry = categoryName ? categoryName.toLocaleLowerCase() : null;
                    this.filterdProducts = categoryName ? this.products.filter(function (product) {
                        return categoryName == "Home" || product.category.toLocaleLowerCase().indexOf(_this._selectedCateogry) !== -1;
                    }) : this.products;
                };
                ProductListComponet.prototype.addToCart = function (product) {
                    this._cart.addToCart(product, 1);
                };
                ProductListComponet.prototype.onProductsRetrieved = function (products) {
                    this.products = products;
                    this.filterdProducts = products;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ProductListComponet.prototype, "pageTitleChange", void 0);
                ProductListComponet = __decorate([
                    core_1.Component({
                        selector: 'suw-products',
                        templateUrl: './app/products/product-list.component.html',
                        pipes: [product_categories_1.ProductCategories],
                        directives: [star_component_1.StarComponent, shopping_cart_service_1.CartGuiService]
                    }), 
                    __metadata('design:paramtypes', [dal_1.Dal, shopping_cart_service_1.ShoppingCartService])
                ], ProductListComponet);
                return ProductListComponet;
            }());
            exports_1("ProductListComponet", ProductListComponet);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map