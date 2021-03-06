webpackJsonp([8],{

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThankyouPageModule = (function () {
    function ThankyouPageModule() {
    }
    return ThankyouPageModule;
}());
ThankyouPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]
        ]
    })
], ThankyouPageModule);

//# sourceMappingURL=thankyou.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThankyouPage = (function () {
    function ThankyouPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ThankyouPage.prototype.ionViewDidLoad = function () {
        localStorage.removeItem('cartItem');
    };
    return ThankyouPage;
}());
ThankyouPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-thankyou',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\thankyou\thankyou.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n            <ion-title>{{\'Thank You\' | translate}}</ion-title>\n            <ion-buttons end>\n                <button ion-button icon-only color="royal">\n                    <ion-icon name="cart"></ion-icon>\n                </button>\n            </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="page-content">\n    <ion-row>\n        <ion-col col-12>\n            <div class="thanks">\n                <h2>{{\'Thank you !\' | translate}}</h2>\n                <p>{{\'We love our customers and we value your business.\n                                                                    we want to thank you for giving us the opportunity\n                                                                    to serve you. Our customer service always open to hear feedback from you.thanks you!\' | translate}}\n                </p>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\thankyou\thankyou.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ThankyouPage);

//# sourceMappingURL=thankyou.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map