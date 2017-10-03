webpackJsonp([18],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartPageModule = (function () {
    function CartPageModule() {
    }
    return CartPageModule;
}());
CartPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
        ]
    })
], CartPageModule);

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = (function () {
    function CartPage(navCtrl, alertCtrl, popoverCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.cartItems = [];
        this.couponCode = '';
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        //console.log("items--"+JSON.stringify(this.cartItems));
        if (this.cartItems != null) {
            this.noOfItems = this.cartItems.length;
            this.CalculatePrice();
        }
    }
    CartPage.prototype.deleteItem = function (data) {
        for (var i = 0; i <= this.cartItems.length - 1; i++) {
            if (this.cartItems[i].id == data.id) {
                this.cartItems.splice(i, 1);
            }
        }
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            this.SubTotalPrice = 0;
            this.totalVat = 0;
            this.otherTaxes = 0;
            this.GrandTotal = 0;
        }
        else {
            this.CalculatePrice();
        }
        localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
        this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        this.noOfItems = this.noOfItems - 1;
    };
    CartPage.prototype.applyCoupon = function () {
        console.log("subtotal-" + this.SubTotalPrice);
        console.log("code-" + this.couponCode);
        if (this.couponCode == 'apply20') {
            var subTotals = this.SubTotalPrice;
            this.deductedPrice = Math.ceil(20 / 100 * subTotals);
            subTotals = subTotals - (this.deductedPrice);
            console.log("subtotal--" + subTotals);
            this.GrandTotal = Math.ceil(subTotals + this.totalVat + this.otherTaxes);
            this.createToaster('Coupon applied successfully', '3000');
        }
        else if (this.couponCode == 'apply25') {
            var subTotals = this.SubTotalPrice;
            this.deductedPrice = Math.ceil(25 / 100 * subTotals);
            subTotals = subTotals - (this.deductedPrice);
            // subTotals=subTotals-(25/100*subTotals);
            console.log("subtotal--" + subTotals);
            this.GrandTotal = Math.ceil(subTotals + this.totalVat + this.otherTaxes);
            this.createToaster('Coupon applied successfully', '3000');
        }
        else if (this.couponCode == 'apply30') {
            var subTotals = this.SubTotalPrice;
            this.deductedPrice = Math.ceil(30 / 100 * subTotals);
            subTotals = subTotals - (this.deductedPrice);
            //subTotals=subTotals-(30/100*subTotals);
            console.log("subtotal--" + subTotals);
            this.GrandTotal = Math.ceil(subTotals + this.totalVat + this.otherTaxes);
            this.createToaster('Coupon applied successfully', '3000');
        }
        else {
            this.createToaster('Coupon already applied', '3000');
        }
        this.couponCode = '';
    };
    CartPage.prototype.checkout = function () {
        this.navCtrl.push("CheckoutPage");
    };
    CartPage.prototype.CalculatePrice = function () {
        var proGrandTotalPrice = 0;
        for (var i = 0; i <= this.cartItems.length; i++) {
            if (this.cartItems[i] != null) {
                if (this.cartItems[i].extraPrice != null) {
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice + this.cartItems[i].extraPrice;
                }
                else {
                    proGrandTotalPrice = proGrandTotalPrice + this.cartItems[i].itemTotalPrice;
                }
                this.SubTotalPrice = proGrandTotalPrice;
            }
        }
        this.totalVat = ((5 / 100) * this.SubTotalPrice);
        this.otherTaxes = ((3 / 100) * this.SubTotalPrice);
        this.GrandTotal = Math.ceil(this.SubTotalPrice + this.totalVat + this.otherTaxes);
    };
    CartPage.prototype.add = function (data) {
        if (data.Quantity < 20) {
            data.Quantity = data.Quantity + 1;
            for (var i = 0; i <= this.cartItems.length - 1; i++) {
                if (this.cartItems[i].id == data.id) {
                    this.cartItems[i].Quantity = data.Quantity;
                    if (this.cartItems[i].sizeOption.offerValue) {
                        this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.offerValue);
                    }
                    else {
                        this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.value);
                    }
                }
            }
            localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
            this.CalculatePrice();
        }
    };
    CartPage.prototype.remove = function (data) {
        if (data.Quantity > 1) {
            data.Quantity = data.Quantity - 1;
            for (var i = 0; i <= this.cartItems.length - 1; i++) {
                if (this.cartItems[i].id == data.id) {
                    this.cartItems[i].Quantity = data.Quantity;
                    if (this.cartItems[i].sizeOption.offerValue) {
                        this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.offerValue);
                    }
                    else {
                        this.cartItems[i].itemTotalPrice = (data.Quantity * this.cartItems[i].sizeOption.value);
                    }
                }
            }
            localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
            this.CalculatePrice();
        }
    };
    CartPage.prototype.createToaster = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    CartPage.prototype.isCart = function () {
        if (localStorage.getItem('cartItem') == null || this.cartItems.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    CartPage.prototype.gotoHome = function () {
        localStorage.removeItem('cartItem');
        this.navCtrl.push("HomePage");
    };
    return CartPage;
}());
CartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\cart\cart.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{\'Cart\' |translate}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal">\n                <ion-icon name="cart"></ion-icon>\n                <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="{bg:!isCart()}">\n<div *ngIf="!isCart()">\n    <ion-row>\n       <ion-icon class="empty-cart" name="cart"></ion-icon>\n     </ion-row>\n        <h4>Your Cart is empty!</h4>\n   <button ion-button class="continue-btn" (click)="gotoHome()">{{\'Add Items\' | translate}}</button>\n    </div>\n\n    <div *ngIf="isCart()">\n        <ion-list class="cart-list" *ngFor="let cartItem of cartItems"><!-- item-list -->\n            <ion-item class="cart-item"><!-- item -->\n                <ion-row>\n                    <ion-col col-2><!-- col-cancel  button -->\n                        <ion-icon class="close-btn" ion-button icon only clear ios="ios-close-circle"\n                                  md="md-close-circle"\n                                  (click)="deleteItem(cartItem)">\n                        </ion-icon>\n                    </ion-col>\n                    <ion-col col-10><!-- col-for item-image and details -->\n                        <ion-row>\n                            <ion-col col-6><!-- item-image -->\n                                <img src={{cartItem.image}} alt="">\n                            </ion-col>\n                            <ion-col col-6>\n                                <p class="item-name">{{cartItem.name}}</p>\n                                <p class="item-detail" text-wrap>Quantity : {{cartItem.Quantity}}</p>\n                                <p class="item-detail">Price :\n    <span *ngIf="!cartItem.sizeOption.offerValue" class="item-price">\n                         ${{cartItem.sizeOption.value}}</span>\n    <span *ngIf="cartItem.sizeOption.offerValue" class="item-price">\n                          ${{cartItem.sizeOption.offerValue}}</span>\n                    </p>\n                                <ion-row><!-- row-for count item -->\n\n                                    <div class="count">\n            <span class="item-count" (click)="remove(cartItem)">\n              -\n            </span>\n                                        <span class="item-count show-count">\n          {{cartItem.Quantity}}\n            </span>\n                                        <span class="item-count" (click)="add(cartItem)">\n              +\n            </span>\n                                    </div>\n                                </ion-row>\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-list>\n        <ion-row class="price-details">\n            <ion-col col-12 class="calculate">\n                <p class="bill-detail">{{\'Price Subtotal\' | translate}} <span> ${{SubTotalPrice}}</span></p>\n                <div *ngIf="deductedPrice">\n                <p class="bill-detail">{{\'Deducted Price\' | translate}} <span> - ${{deductedPrice}}</span></p>\n                </div>\n                <p class="bill-detail">{{\'Total VAT (5%)\' | translate}} <span> ${{totalVat | number}}</span></p>\n                <p class="bill-detail">{{\'Other Taxes (3%)\' | translate}}\n                    <span>${{otherTaxes | number}}</span></p>\n                <hr>\n                 <ion-row>\n                <ion-col col-4>\n                <p class="bill-detail">{{\'Apply Coupon\' | translate}}</p>\n                </ion-col>\n\n                <ion-col col-8>\n                  <ion-item class="select-item">\n                    <ion-label>{{\'Coupons\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="couponCode" (ionChange)="applyCoupon()">\n                      <ion-option value="apply20">Apply20</ion-option>\n                      <ion-option value="apply25">Apply25</ion-option>\n                      <ion-option value="apply30">Apply30</ion-option>\n                    </ion-select>\n                  </ion-item> \n                </ion-col>\n\n                </ion-row>\n                <p class="cart-total"><strong>{{\'Order Total\' | translate}} </strong><span class="price">${{GrandTotal}}</span>\n                </p>\n               \n            </ion-col>\n        </ion-row><!-- row-bill-deatails -->\n        <!-- continue button -->\n        <ion-row>\n            <ion-col col-12>\n                <button ion-button block class="continue-btn" (click)="checkout()">{{\'Continue\' | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=18.main.js.map