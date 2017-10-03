webpackJsonp([11],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrdersPageModule = (function () {
    function OrdersPageModule() {
    }
    return OrdersPageModule;
}());
OrdersPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]
        ]
    })
], OrdersPageModule);

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersPage = (function () {
    function OrdersPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.orders = [];
        this.featured = [];
    }
    OrdersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (response) {
            _this.orders = response.Orders;
            _this.featured = response.featured;
            console.log(JSON.stringify(_this.orders));
        });
    };
    OrdersPage.prototype.orderDetails = function (orderId) {
        this.navCtrl.push("OrderDetailsPage", {
            orderId: orderId
        });
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orders',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\orders\orders.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <ion-title>Orders</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal" (click)="navcart()">\n          <ion-icon name="cart"></ion-icon>\n          <ion-badge class="carts" item-right color="danger">{{noOfItems}}</ion-badge>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="orders-list">\n    <ion-card class="orders-item">\n      <ion-row *ngFor="let category of orders">\n        <ion-col col-4>\n          <img src="{{category.thumb}}" alt="">\n        </ion-col>\n        <ion-col col-5>\n          <p class="item-name"><strong>{{category.title}}</strong></p>\n          <p class="item-price">${{category.price}}</p>\n          <p class="date">{{category.date}}</p>\n        </ion-col>\n        <ion-col col-3>\n          <button class="btn-cart"ion-button color="danger">\n            <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n          </button><br>\n          <button class="btn-view"ion-button color="primary" (click)="orderDetails(category.key)">\n            View\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\orders\orders.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map