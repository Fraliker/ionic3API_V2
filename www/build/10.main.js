webpackJsonp([10],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    return ProductDetailsPageModule;
}());
ProductDetailsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__product_details__["a" /* ProductDetailsPage */]
        ]
    })
], ProductDetailsPageModule);

//# sourceMappingURL=product-details.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, alertCtrl, toastCtrl, navParams, storage, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.service = service;
        this.count = 1;
        this.ExtraOptions = [];
        this.itemInCart = [];
        this.Cart = [];
        this.prices = [{ value: '' }];
        this.product = {
            sizeOption: {},
            extraOption: []
        };
        this.productDetails = [];
        //Add favourite
        this.visible = true;
        this.favourites = [];
        this.favourite = [];
        this.favouriteItems = [];
        this.productId = navParams.get('productId');
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
        }
        this.storage.get('favourite').then(function (favourite) {
            _this.favourites = favourite;
        });
        this.storage.get('favourite').then(function (favourites) {
            _this.favouriteItems = favourites;
        });
    }
    ProductDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (response) {
            for (var i = 0; i <= response.menuItems.length - 1; i++) {
                if (response.menuItems[i].id == _this.productId) {
                    _this.productDetails = response.menuItems[i];
                    _this.product.id = response.menuItems[i].id;
                    _this.prices = response.menuItems[i].price;
                    _this.ExtraOptions = response.menuItems[i].extraOptions;
                    _this.product.name = response.menuItems[i].title;
                    _this.product.image = response.menuItems[i].pictures;
                }
            }
        });
    };
    ProductDetailsPage.prototype.addToCart = function (productId) {
        if (this.product.sizeOption.name == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Please!',
                subTitle: 'Select Size and Price!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.Cart = JSON.parse(localStorage.getItem("cartItem"));
            if (this.Cart == null) {
                this.product.Quantity = this.count;
                if (this.product.sizeOption.offerValue) {
                    this.product.itemTotalPrice = this.product.Quantity * this.product.sizeOption.offerValue;
                }
                else {
                    this.product.itemTotalPrice = this.product.Quantity * this.product.sizeOption.value;
                }
                var proExtraPrice = 0;
                for (var i = 0; i <= this.product.extraOption.length - 1; i++) {
                    proExtraPrice = proExtraPrice + this.product.extraOption[i].value;
                    this.product.extraPrice = proExtraPrice;
                }
                this.itemInCart.push(this.product);
                localStorage.setItem('cartItem', JSON.stringify(this.itemInCart));
            }
            else {
                for (var i = 0; i <= this.Cart.length - 1; i++) {
                    if (this.Cart[i].id == productId) {
                        this.Cart.splice(i, 1);
                    }
                }
                this.product.Quantity = this.count;
                if (this.product.sizeOption.offerValue) {
                    this.product.itemTotalPrice = this.product.Quantity * this.product.sizeOption.offerValue;
                }
                else {
                    this.product.itemTotalPrice = this.product.Quantity * this.product.sizeOption.value;
                }
                var proExtraPrice = 0;
                for (var i = 0; i <= this.product.extraOption.length - 1; ++i) {
                    proExtraPrice = proExtraPrice + this.product.extraOption[i].value;
                    this.product.extraPrice = proExtraPrice;
                }
                this.Cart.push(this.product);
                localStorage.setItem('cartItem', JSON.stringify(this.Cart));
            }
            this.navCtrl.push("CartPage");
        }
    };
    ProductDetailsPage.prototype.checkOptions = function (option) {
        if (this.product.extraOption.length !== 0) {
            for (var i = 0; i <= this.product.extraOption.length - 1; i++) {
                if (this.product.extraOption[i].name == option.name) {
                    this.product.extraOption.splice(i, 1);
                    break;
                }
                else {
                    this.product.extraOption.push(option);
                    break;
                }
            }
        }
        else {
            this.product.extraOption.push(option);
        }
    };
    ProductDetailsPage.prototype.sizeOptions = function (price) {
        this.product.sizeOption = price;
    };
    ProductDetailsPage.prototype.add = function () {
        if (this.count < 10) {
            this.count = this.count + 1;
        }
    };
    ProductDetailsPage.prototype.remove = function () {
        if (this.count > 1) {
            this.count = this.count - 1;
        }
    };
    ProductDetailsPage.prototype.home = function () {
        this.navCtrl.push("HomePage");
    };
    ProductDetailsPage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    ProductDetailsPage.prototype.toggleFavourite = function () {
        this.visible = !this.visible;
    };
    ProductDetailsPage.prototype.addToFavourite = function (productId) {
        this.createToaster('Added to favourites', '3000');
        if (this.favourites == null) {
            this.favourite.push(this.productDetails);
            this.storage.set('favourite', this.favourite);
        }
        else {
            for (var i = 0; i <= this.favourites.length - 1; i++) {
                if (this.favourites[i].id == productId) {
                    this.favourites.splice(i, 1);
                }
            }
            this.favourites.push(this.productDetails);
            this.storage.set('favourite', this.favourites);
        }
    };
    ProductDetailsPage.prototype.removeFromFavourite = function (productId) {
        var _this = this;
        this.storage.get('favourite').then(function (favourites) {
            _this.favouriteItems = favourites;
            _this.createToaster('Removed from favourites', '3000');
            for (var i = 0; i <= _this.favouriteItems.length - 1; i++) {
                if (_this.favouriteItems[i].id == productId) {
                    _this.favouriteItems.splice(i, 1);
                }
            }
            _this.storage.set('favourite', _this.favouriteItems);
        });
    };
    ProductDetailsPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    return ProductDetailsPage;
}());
ProductDetailsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-product-details',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\product-details\product-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Restaurant</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal" (click)="navcart()">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-row class="productImage">\n        <img src={{product.image}} alt="">\n       \n        <span clear text-center (click)="toggleFavourite()">\n        <ion-icon class="fav" name="heart" *ngIf="!visible"\n                  (click)="removeFromFavourite(product.id)"></ion-icon>\n        <ion-icon class="fav heart-clicked" name="heart" *ngIf="visible"\n                  (click)="addToFavourite(product.id)"></ion-icon>\n    </span>\n    </ion-row>\n\n    <ion-row class="count-full">\n        <ion-col col-6>\n            <div class="count">\n            <span class="item-count" (click)="remove()">\n              -\n            </span>\n                <span class="item-count show-count">\n              {{count}}\n            </span>\n                <span class="item-count" (click)="add()">\n              +\n            </span>\n            </div>\n        </ion-col>\n\n        <ion-col col-6>\n            <a (click)="addToCart(product.id)" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="cart"></ion-icon>\n                {{\'ADD TO CART\' | translate}}\n            </a>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-list class="extra-list">\n        <ion-list-header class="header" text-center>Add extra choice</ion-list-header>\n        <ion-item *ngFor="let option of ExtraOptions; let i= index"  class="list-item" >\n            <ion-label>{{option.name}} ({{option.value}} USD)</ion-label>\n            <ion-toggle (ionChange)="checkOptions(option)"></ion-toggle>\n        </ion-item>\n    </ion-list>\n\n    <!-- size and price check box -->\n    <ion-list radio-group class="size-list">\n        <ion-list-header class="size-list-header" text-center>\n            {{\'Size and prices\' |translate}}\n        </ion-list-header>\n        <ion-item *ngFor="let price of prices" class="size-list-item">\n            <ion-label *ngIf="!price.offerValue">{{price.name}} ${{price.value}}</ion-label>\n            <ion-label *ngIf="price.offerValue">{{price.name}} ${{price.offerValue}}</ion-label>\n            <ion-radio class="checked" (ionSelect)="sizeOptions(price)"></ion-radio>\n        </ion-item>\n    </ion-list>\n    <ion-row>\n        <ion-col col-6>\n            <a (click)="addToCart(product.id)" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="cart"></ion-icon>\n                {{\'CHECKOUT\' | translate}}\n            </a>\n        </ion-col>\n        <ion-col col-6>\n            <a (click)="home()" ion-button icon-left full class="btn-add-to-cart">\n                <ion-icon name="basket"></ion-icon>\n                {{\'KEEP SHOPPING\' |translate}}\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\product-details\product-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
], ProductDetailsPage);

//# sourceMappingURL=product-details.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map