webpackJsonp([6],{

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    return ContactPageModule;
}());
ContactPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
        ]
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

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

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(623);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, toastCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.emailComposer = emailComposer;
        this.user = {};
    }
    ContactPage.prototype.onSend = function (user) {
        this.emailComposer.open({
            // You just need to change this Email address to your own email where you want to receive email.
            to: 'ionicfirebaseapp@gmail.com',
            subject: this.user.name,
            body: this.user.message,
            isHtml: true
        }, function (callback) {
            console.log('email view dismissed');
        });
        this.user = '';
    };
    return ContactPage;
}());
ContactPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{\'Contact\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="contact">\n    <p class="contact-head">{{\'Contact Us\' | translate}}</p>\n    <form (ngSubmit)="onSend(f)" #f="ngForm">\n        <!--name-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{\'Name:\' | translate}}</ion-label>\n                    <ion-input type="text" name="name" id="name"\n                               [(ngModel)]="user.name" required></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--email-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{\'Email:\' | translate}}</ion-label>\n                    <ion-input type="email" name="email" id="email"\n                               [(ngModel)]="user.email" required></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--message-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>{{\'Message:\' | translate}}</ion-label>\n                    <ion-textarea rows="6" lineHeight="42" name="message" id="message"\n                                  [(ngModel)]="user.message" required></ion-textarea>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--button-->\n        <ion-row>\n            <ion-col col-12>\n                <button class="submit-btn" ion-button type=\'submit\' [disabled]="!f.valid"> {{\'Send\' | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\contact\contact.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map