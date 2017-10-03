webpackJsonp([17],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPageModule = (function () {
    function CheckoutPageModule() {
    }
    return CheckoutPageModule;
}());
CheckoutPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]
        ]
    })
], CheckoutPageModule);

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutPage = (function () {
    function CheckoutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.orderDetails = {};
        this.tagHide1 = true;
        this.tagHide2 = true;
        this.OrderedProduct = {
            cartItems: [],
            COD: '',
            orderDetail: {}
        };
        this.OrderedProduct.cartItems = JSON.parse(localStorage.getItem('cartItem'));
    }
    CheckoutPage.prototype.onCheckout = function (OrderDetails) {
        this.OrderedProduct.orderDetail = OrderDetails.value;
        this.OrderedProduct.COD = this.COD;
        this.navCtrl.push("ThankyouPage");
    };
    CheckoutPage.prototype.toggle2 = function () {
        this.tagHide2 = this.tagHide2 ? false : true;
    };
    CheckoutPage.prototype.hide = function () {
        this.tagHide2 = true;
        this.COD = 'cod';
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\checkout\checkout.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title">{{\'Payment Options\' | translate}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="checkOut">\n    <form (ngSubmit)="onCheckout(f)" #f="ngForm">\n        <ion-row>\n            <ion-col colo-12 class="address-header">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                &nbsp;&nbsp;{{\'Address\' | translate}}\n            </ion-col>\n        </ion-row><!-- row for address -->\n        <ion-list class="adress-line">\n\n            <ion-label class="add-heading">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n                &nbsp;&nbsp;{{\'ENTER ADDRESS\'|translate}}\n            </ion-label>\n            <div>\n                <ion-item class="sub-address">\n                    <ion-input type="text" placeholder="Name" name="name" id="name"\n                               [(ngModel)]="orderDetails.name"></ion-input>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-textarea rows="3" placeholder="Address" name="adress" id="adress"\n                                  [(ngModel)]="orderDetails.adress"></ion-textarea>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-input type="text" placeholder="City" name="city" id="city"\n                               [(ngModel)]="orderDetails.city"></ion-input>\n                </ion-item>\n                <ion-item class="sub-address">\n                    <ion-input type="number" placeholder="Pincode" name="pincode" id="pincode"\n                               [(ngModel)]="orderDetails.pincode"></ion-input>\n                </ion-item>\n            </div>\n\n        </ion-list>\n        <ion-row>\n            <ion-col col-12 class="payment-header">\n                <ion-icon ios="ios-pricetags" md="md-pricetags"></ion-icon>\n                &nbsp;&nbsp;{{\'Payment\'|translate}}\n            </ion-col>\n        </ion-row>\n\n        <!--payment-->\n        <ion-list radio-group class="payment-block">\n            <ion-row>\n                <ion-col col-6 class="col-card no-padd">\n                    <ion-item>\n                        <ion-label>{{\'COD\'|translate}}</ion-label>\n                        <ion-radio checked="true" value="cod" (click)="hide()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6 class="col-card no-padd">\n                    <ion-item>\n                        <ion-label>{{\'CARD\'|translate}}</ion-label>\n                        <ion-radio value="card" (click)="toggle2()"></ion-radio>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <!--payment ends-->\n\n        <!--payment input fields-->\n        <ion-row>\n            <ion-list class="card-list" [hidden]="tagHide2">\n                <ion-item class="card-detail">\n                    <ion-row>\n                        <ion-col col-12 class="no-padd">\n                            <ion-item class="card-item">\n                                <ion-input type="number" placeholder="Card No:" name="cardNo" id="cardNo"\n                                           [(ngModel)]="orderDetails.cardNo"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-4 class="no-padd">\n                            <ion-item class="card-item cvv">\n                                <ion-input type="number" placeholder="Cvv:" name="cvv" id="cvv"\n                                           [(ngModel)]="orderDetails.cvv"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-8 class="no-padd">\n                            <ion-item class="card-item date">\n                                <ion-datetime class="textbox-n" placeholder="Date" displayFormat="DD/MM/YYYY"\n                                              placeholder="Date:" name="expiryDate"\n                                              id="expiryDate"\n                                              [(ngModel)]="orderDetails.expiryDate"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-12 class="no-padd">\n                            <ion-item class="card-item">\n                                <ion-input type="text" placeholder="Name on Card:" name="cardHolderName"\n                                           id="cardHolderName"\n                                           [(ngModel)]="orderDetails.cardHolderName"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n            </ion-list>\n        </ion-row>\n\n        <button class="checkOut-btn" type="submit" ion-button block>\n            <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n            &nbsp;&nbsp;{{\'Check Out\'|translate}}\n        </button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\checkout\checkout.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=17.main.js.map