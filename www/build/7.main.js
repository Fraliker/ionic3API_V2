webpackJsonp([7],{

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutUsPageModule = (function () {
    function AboutUsPageModule() {
    }
    return AboutUsPageModule;
}());
AboutUsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]
        ]
    })
], AboutUsPageModule);

//# sourceMappingURL=about-us.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComposer; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
 *
 * @usage
 * ```typescript
 * import { EmailComposer } from '@ionic-native/email-composer';
 *
 * constructor(private emailComposer: EmailComposer) { }
 *
 * ...
 *
 *
 * this.emailComposer.isAvailable().then((available: boolean) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * this.emailComposer.open(email);
 *
 * ```
 * @interfaces
 * EmailComposerOptions
 */
var EmailComposer = (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param [app] {string} App id or uri scheme.
     * @returns {Promise<any>} Resolves if available, rejects if not available
     */
    EmailComposer.prototype.isAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            if (app) {
                cordova.plugins.email.isAvailable(app, function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
            else {
                cordova.plugins.email.isAvailable(function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposer.prototype.addAlias = function (alias, packageName) { };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param options {EmailComposerOptions} Email
     * @param [scope] {any} Scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposer.prototype.open = function (options, scope) { return; };
    return EmailComposer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
EmailComposer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
EmailComposer.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmailComposer.prototype, "isAvailable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmailComposer.prototype, "addAlias", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        successIndex: 1,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EmailComposer.prototype, "open", null);
EmailComposer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'EmailComposer',
        plugin: 'cordova-plugin-email',
        pluginRef: 'cordova.plugins.email',
        repo: 'https://github.com/hypery2k/cordova-email-plugin',
        platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
    })
], EmailComposer);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutUsPage = (function () {
    function AboutUsPage(platform, navCtrl, navParams, emailComposer, http) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.http = http;
        this.contactNo = 7376421282;
        this.http.get('http://ec2-54-169-228-245.ap-southeast-1.compute.amazonaws.com:3000/museum/')
            .subscribe(function (data) {
            _this.info_description = data.json();
            console.log(_this.info_description);
            _this.info_data = _this.info_description[0].info;
            _this.info_img = _this.info_description[0].info_img;
            console.log(_this.info_data);
        }, function (error) {
            console.log("error");
        });
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    AboutUsPage.prototype.callUs = function () {
        //   this.callNumber.callNumber(this.contactNo, true)
        // .then(() => console.log('Launched dialer!'))
        // .catch(() => console.log('Error launching dialer'));
    };
    AboutUsPage.prototype.gotogoogleMap = function () {
        this.navCtrl.push("LocationPage");
    };
    AboutUsPage.prototype.contact = function () {
        var email = {
            to: 'san10694@gmail.com',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    AboutUsPage.prototype.gotoSearch = function () {
        this.navCtrl.push("SearchPage");
    };
    return AboutUsPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], AboutUsPage.prototype, "slides", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
], AboutUsPage.prototype, "nav", void 0);
AboutUsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about-us',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\about-us\about-us.html"*/'<ion-header>\n    <ion-navbar>\n    <div >\n        <img align="right" src="assets/img/search.png" class="search" (click)="gotoSearch()"/>        \n        <!--<ion-title class="title"> IMM </ion-title>-->\n        <p class="title">IMM</p>\n    </div>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <img src="{{info_img}}" class="card-img">\n       <div class="card-title">About Museum</div>\n\n<!--about-->\n<div class="content">\n    <p [innerHTML]="info_data" class="details">\n    	{{info_data}}\n    </p>\n\n   </div> \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\about-us\about-us.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], AboutUsPage);

//# sourceMappingURL=about-us.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map