webpackJsonp([13],{

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsPageModule = (function () {
    function NewsPageModule() {
    }
    return NewsPageModule;
}());
NewsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]
        ]
    })
], NewsPageModule);

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsPage = (function () {
    function NewsPage(navCtrl, navParams, newsService, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newsService = newsService;
        this.http = http;
        this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/exhibition-list/')
            .subscribe(function (data) {
            _this.exhibit_list = data.json();
            _this.exhibit_name = _this.exhibit_list.exhibit_name;
            console.log(_this.exhibit_name);
            console.log(_this.exhibit_list);
        }, function (error) {
            console.log("error");
        });
    }
    NewsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getData()
            .subscribe(function (response) {
            _this.newsList = response.newsList;
        });
    };
    NewsPage.prototype.newsDetail = function (newsId) {
        this.navCtrl.push("NewsDetailPage", {
            newsId: newsId
        });
    };
    NewsPage.prototype.gotoCategory = function (exhibitID) {
        console.log("exhibit " + exhibitID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */], { ID: exhibitID });
    };
    NewsPage.prototype.gotoSearch = function () {
        this.navCtrl.push("SearchPage");
    };
    return NewsPage;
}());
NewsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-news',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\news\news.html"*/'<ion-header>\n    <ion-navbar>\n    <div >\n        <img align="right" src="assets/img/search.png" class="search" (click)="gotoSearch()"/>        \n        <!--<ion-title class="title"> IMM </ion-title>-->\n        <p class="title">IMM</p>\n    </div>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item (click)="gotoCategory(exhibitions.exhibit_id)" *ngFor="let exhibitions of exhibit_list">\n            <ion-thumbnail item-left>\n                <img class="thumbnail-img" src="{{exhibitions.exhibit_img}}">\n            </ion-thumbnail>\n            <div class ="list-content">\n            <p class ="h2">{{exhibitions.exhibit_loc}} <br> </p>\n            <p class="exhibition-name"> Hall of <br> </p>            \n            <p class="exhibition-name">{{exhibitions.exhibit_name}} <br> </p>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\news\news.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map