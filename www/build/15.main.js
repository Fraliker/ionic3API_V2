webpackJsonp([15],{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, service, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.http = http;
        // categories: any[] = [];
        // featured: any[] = [];
        // cartItems: any[];
        // noOfItems: number;
        this.main_icon = [{ "icon_img": "assets\\img\\about-02.png" },
            { "icon_img": "assets\\img\\Exhibition-02.png" },
            { "icon_img": "assets\\img\\Map-02.png" },
            { "icon_img": "assets\\img\\Facilities-02.png" }];
        this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/main')
            .subscribe(function (data) {
            _this.main_img = data.json();
            console.log(_this.main_img);
        }, function (error) {
            console.log("error");
        });
        // this.cartItems = JSON.parse(localStorage.getItem('cartItem'));
        // if (this.cartItems != null) {
        //     this.noOfItems = this.cartItems.length;
        // }
        // this.service.getData()
        //     .subscribe((response) => {
        //         this.categories = response.categories;
        //         this.featured = response.featured;
        //     })
    }
    HomePage.prototype.navigate = function (MenuId) {
        this.navCtrl.push("ProductListPage", { MenuId: MenuId });
    };
    HomePage.prototype.navcart = function () {
        this.navCtrl.push("CartPage");
    };
    HomePage.prototype.navAbout = function () {
        this.navCtrl.push("AboutUsPage");
    };
    HomePage.prototype.navExhibition = function () {
        this.navCtrl.push("NewsPage");
    };
    HomePage.prototype.navFacility = function () {
        this.navCtrl.push("FacilityPage");
    };
    HomePage.prototype.gotoSearch = function () {
        this.navCtrl.push("SearchPage");
    };
    HomePage.prototype.navMap = function () {
        this.navCtrl.push("MapPage");
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n    <div >\n        <img align="right" src="assets/img/search.png" class="search" (click)="gotoSearch()"/>        \n        <!--<ion-title class="title"> IMM </ion-title>-->\n        <p class="title">IMM</p>\n    </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content style = "background-color:#FFF;">\n    <ion-grid class="grid">\n        <ion-row><!-- first row -->\n            <ion-slides initialSlide=0 speed="500" loop="true" pager="true">\n                <ion-slide *ngFor="let img_list of main_img">\n                        <img src="{{img_list.img_path}}" class="slider-img">\n                </ion-slide>\n            </ion-slides>\n        </ion-row>\n        <!-- second-row -->\n        <ion-row >\n            <div style="width: 100%; vertical-align: middle;">\n                <p>{{\'International Mountain Museum\' | translate}}</p>\n            </div>\n        </ion-row>\n        <div>\n        <ion-row class="categories">\n\n            <ion-col (click)="navAbout()">\n                    <img src="assets\\img\\about-02.png"/>\n                    <figcaption> About Museum </figcaption>\n            </ion-col>\n            <ion-col (click)="navExhibition()">\n                    <img src="assets\\img\\Exhibition-02.png"/>\n                    <figcaption> Exhibition </figcaption>\n            </ion-col>\n        </ion-row>\n        <ion-row class="categories">\n            <ion-col (click)="navMap()">\n                    <img src="assets\\img\\Map-02.png"/>\n                    <figcaption>Map</figcaption>\n            </ion-col>\n            <ion-col (click)="navFacility()">\n                    <img src="assets\\img\\Facilities-02.png"/>\n                    <figcaption> Facilities </figcaption>\n            </ion-col>\n        </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map