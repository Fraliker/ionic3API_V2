webpackJsonp([1],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translate_module__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegistrationPageModule = (function () {
    function RegistrationPageModule() {
    }
    return RegistrationPageModule;
}());
RegistrationPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_translate_module__["a" /* TranslaterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]
        ]
    })
], RegistrationPageModule);

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facebook; });
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
 * @name Facebook
 * @description
 * Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.
 *
 * Requires Cordova plugin: `cordova-plugin-facebook4`. For more info, please see the [Facebook Connect](https://github.com/jeduan/cordova-plugin-facebook4).
 *
 * #### Installation
 *
 *  To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).
 *
 * [![fb-getstarted-1](/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)
 *
 * Retrieve the `App ID` and `App Name`.
 *
 * [![fb-getstarted-2](/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)
 *
 * Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.
 *
 * ```bash
 *  ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"
 * ```
 *
 * After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:
 *
 * [![fb-getstarted-3](/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)
 *
 * Click `'Add Platform'`.
 *
 * [![fb-getstarted-4](/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)
 *
 * At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.
 *
 * Take note of the `id` for the next step:
 * ```
 * <widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
 * ```
 *
 * You can also edit the `id` to whatever you'd like it to be.
 *
 * #### iOS Install
 * Under 'Bundle ID', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-5](/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)
 *
 *
 * #### Android Install
 * Under 'Google Play Package Name', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-6](/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)
 *
 *
 * And that's it! You can now make calls to Facebook using the plugin.
 *
 * ## Events
 *
 * App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.
 *
 * - [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
 * - [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
 * - [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success
 *
 * Activation events are automatically tracked for you in the plugin.
 *
 * Events are listed on the [insights page](https://www.facebook.com/insights/).
 *
 * For tracking events, see `logEvent` and `logPurchase`.
 *
 * @usage
 * ```typescript
 * import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
 *
 * constructor(private fb: Facebook) { }
 *
 * ...
 *
 * this.fb.login(['public_profile', 'user_friends', 'email'])
 *   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
 *   .catch(e => console.log('Error logging into Facebook', e));
 *
 *
 * this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
 *
 * ```
 *
 */
var Facebook = (function (_super) {
    __extends(Facebook, _super);
    function Facebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Browser wrapper
     * @param {number} appId Your Facebook AppID from their dashboard
     * @param {string} version The version of API you may want to use. Optional
     * @returns {Promise<any>}
     */
    Facebook.prototype.browserInit = function (appId, version) {
        return;
    };
    /**
     * Login to Facebook to authenticate this app.
     *
     * ```typescript
     * {
     *   status: 'connected',
     *   authResponse: {
     *     session_key: true,
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     expiresIn: 5183979,
     *     sig: '...',
     *     secret: '...',
     *     userID: '634565435'
     *   }
     * }
     *
     * ```
     *
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.
     * @returns {Promise<FacebookLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
     */
    Facebook.prototype.login = function (permissions) { return; };
    /**
     * Logout of Facebook.
     *
     * For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)
     * @returns {Promise<any>} Returns a Promise that resolves on a successful logout, and rejects if logout fails.
     */
    Facebook.prototype.logout = function () { return; };
    /**
     * Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:
     *
     * 1) the user is logged into Facebook and has authenticated your application (connected)
     * 2) the user is logged into Facebook but has not authenticated your application (not_authorized)
     * 3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)
     *
     * Resolves with a response like:
     *
     * ```
     * {
     *   authResponse: {
     *     userID: '12345678912345',
     *     accessToken: 'kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn',
     *     session_Key: true,
     *     expiresIn: '5183738',
     *     sig: '...'
     *   },
     *   status: 'connected'
     * }
     * ```
     *
     * For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)
     *
     * @returns {Promise<any>} Returns a Promise that resolves with a status, or rejects with an error
     */
    Facebook.prototype.getLoginStatus = function () { return; };
    /**
     * Get a Facebook access token for using Facebook services.
     *
     * @returns {Promise<string>} Returns a Promise that resolves with an access token, or rejects with an error
     */
    Facebook.prototype.getAccessToken = function () { return; };
    /**
     * Show one of various Facebook dialogs. Example of options for a Share dialog:
     *
     * ```
     * {
     *   method: 'share',
     *   href: 'http://example.com',
     *   caption: 'Such caption, very feed.',
     *   description: 'Much description',
     *   picture: 'http://example.com/image.png'
     * }
     * ```
     *
     * For more options see the [Cordova plugin docs](https://github.com/jeduan/cordova-plugin-facebook4#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
     * @param {Object} options The dialog options
     * @returns {Promise<any>} Returns a Promise that resolves with success data, or rejects with an error
     */
    Facebook.prototype.showDialog = function (options) { return; };
    /**
     * Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.
     *
     * For more information see:
     *
     *  Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
     *  Graph Explorer - https://developers.facebook.com/tools/explorer
     *  Graph API - https://developers.facebook.com/docs/graph-api
     *
     * @param {string}  requestPath Graph API endpoint you want to call
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.
     * @returns {Promise<any>} Returns a Promise that resolves with the result of the request, or rejects with an error
     */
    Facebook.prototype.api = function (requestPath, permissions) { return; };
    /**
     * Log an event.  For more information see the Events section above.
     *
     * @param {string}  name Name of the event
     * @param {Object}  [params] An object containing extra data to log with the event
     * @param {number}  [valueToSum] any value to be added to added to a sum on each event
     * @returns {Promise<any>}
     */
    Facebook.prototype.logEvent = function (name, params, valueToSum) { return; };
    /**
     * Log a purchase. For more information see the Events section above.
     *
     * @param {number}  value Value of the purchase.
     * @param {string}  currency The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)
     * @returns {Promise<any>}
     */
    Facebook.prototype.logPurchase = function (value, currency) { return; };
    /**
     * Open App Invite dialog. Does not require login.
     *
     * For more information see:
     *
     *   the App Invites Overview - https://developers.facebook.com/docs/app-invites/overview
     *   the App Links docs - https://developers.facebook.com/docs/applinks
     *
     *
     * @param {Object}  options An object containing an [App Link](https://developers.facebook.com/docs/applinks) URL to your app and an optional image URL.
     * @param {string} options.url [App Link](https://developers.facebook.com/docs/applinks) to your app
     * @param {string} [options.picture] image to be displayed in the App Invite dialog
     * @returns {Promise<any>} Returns a Promise that resolves with the result data, or rejects with an error
     */
    Facebook.prototype.appInvite = function (options) { return; };
    return Facebook;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
Facebook.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
Facebook.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "browserInit", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "login", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "logout", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "getLoginStatus", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "getAccessToken", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "showDialog", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "api", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        successIndex: 3,
        errorIndex: 4
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Number]),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "logEvent", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "logPurchase", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Facebook.prototype, "appInvite", null);
Facebook = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'Facebook',
        plugin: 'cordova-plugin-facebook4',
        pluginRef: 'facebookConnectPlugin',
        repo: 'https://github.com/jeduan/cordova-plugin-facebook4',
        install: 'ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"',
        installVariables: ['APP_ID', 'APP_NAME'],
        platforms: ['Android', 'iOS', 'Browser']
    })
], Facebook);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlus; });
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
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from '@ionic-native/google-plus';
 *
 * constructor(private googlePlus: GooglePlus) { }
 *
 * ...
 *
 * this.googlePlus.login({})
 *   .then(res => console.log(res))
 *   .catch(err => console.error(err));
 *
 * ```
 */
var GooglePlus = (function (_super) {
    __extends(GooglePlus, _super);
    function GooglePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.login = function (options) { return; };
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.trySilentLogin = function (options) { return; };
    /**
     * This will clear the OAuth2 token.
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.logout = function () { return; };
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     * @returns {Promise<any>}
     */
    GooglePlus.prototype.disconnect = function () { return; };
    return GooglePlus;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
GooglePlus.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
GooglePlus.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GooglePlus.prototype, "login", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GooglePlus.prototype, "trySilentLogin", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GooglePlus.prototype, "logout", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GooglePlus.prototype, "disconnect", null);
GooglePlus = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'GooglePlus',
        plugin: 'cordova-plugin-googleplus',
        pluginRef: 'window.plugins.googleplus',
        repo: 'https://github.com/EddyVerbruggen/cordova-plugin-googleplus',
        install: 'ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid',
        installVariables: ['REVERSED_CLIENT_ID'],
        platforms: ['Android', 'iOS']
    })
], GooglePlus);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterConnect; });
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
 * @name Twitter Connect
 * @description
 * Plugin to use Twitter Single Sign On
 * Uses Twitter's Fabric SDK
 * ```typescript
 * import { TwitterConnect } from '@ionic-native/twitter-connect';
 *
 * constructor(private twitter: TwitterConnect) { }
 *
 * ...
 *
 * function onSuccess(response) {
 *   console.log(response);
 *
 *   // Will console log something like:
 *   // {
 *   //   userName: 'myuser',
 *   //   userId: '12358102',
 *   //   secret: 'tokenSecret'
 *   //   token: 'accessTokenHere'
 *   // }
 * }
 *
 * this.twitter.login().then(onSuccess, onError);
 *
 * this.twitter.logout().then(onLogoutSuccess, onLogoutError);
 * ```
 * @interfaces
 * TwitterConnectResponse
 */
var TwitterConnect = (function (_super) {
    __extends(TwitterConnect, _super);
    function TwitterConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs in
     * @returns {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
     */
    TwitterConnect.prototype.login = function () { return; };
    /**
     * Logs out
     * @returns {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
     */
    TwitterConnect.prototype.logout = function () { return; };
    /**
     * Returns user's profile information
     * @returns {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
     */
    TwitterConnect.prototype.showUser = function () { return; };
    return TwitterConnect;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
TwitterConnect.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TwitterConnect.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TwitterConnect.prototype, "login", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TwitterConnect.prototype, "logout", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TwitterConnect.prototype, "showUser", null);
TwitterConnect = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'TwitterConnect',
        plugin: 'twitter-connect-plugin',
        pluginRef: 'TwitterConnect',
        repo: 'https://github.com/ManifestWebDesign/twitter-connect-plugin',
        install: 'ionic cordova plugin add twitter-connect-plugin --variable FABRIC_KEY=fabric_API_key',
        installVariables: ['FABRIC_KEY'],
        platforms: ['Android', 'iOS']
    })
], TwitterConnect);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__ = __webpack_require__(626);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, toastCtrl, fb, facebook, googlePlus, loadingCtrl, twitter, platform) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.loadingCtrl = loadingCtrl;
        this.twitter = twitter;
        this.platform = platform;
    }
    RegistrationPage.prototype.onRegister = function () {
        if (this.user.value.name != '' && this.user.value.email != '' && this.user.value.password != '') {
            this.displayToast('User Successfully added!', 5000);
        }
    };
    RegistrationPage.prototype.displayToast = function (message, duration) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration
        });
        toast.present();
    };
    RegistrationPage.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            mobileNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
        });
    };
    RegistrationPage.prototype.navLogin = function () {
        this.navCtrl.push("LoginPage");
    };
    RegistrationPage.prototype.doFbLogin = function () {
        var _this = this;
        var permissions = new Array();
        permissions = ["public_profile", "email", "user_education_history"];
        this.facebook.login(permissions)
            .then(function (success) {
            console.log("facebook Success response->" + JSON.stringify(success));
            _this.facebook.api("/me?fields=id,name,email,gender,first_name,last_name", permissions).then(function (user) {
                console.log("user details" + JSON.stringify(user));
                console.log("access token-" + JSON.stringify(success.authResponse.accessToken));
                //here post data to Api
                localStorage.setItem('user', user.id);
                _this.navCtrl.push("HomePage");
            }),
                function (error) {
                    console.log(JSON.stringify(error));
                    console.log('FAcebook not responding!');
                };
        }, function (error) {
            console.log("FaceBook ERROR : ", JSON.stringify(error));
        });
    };
    RegistrationPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': '557859355960-r2petg57jjsomcvkbs0bc4401n57l9ja.apps.googleusercontent.com',
            'offline': true
        })
            .then(function (success) {
            console.log("you have been successfully logged in by googlePlus!" + JSON.stringify(success));
            //here post data to Api
            localStorage.setItem('user', success.userId);
            _this.navCtrl.push("HomePage");
        }, function (error) {
            console.log('error--' + JSON.stringify(error));
        });
    };
    RegistrationPage.prototype.twitterLogin = function () {
        var _this = this;
        this.platform.ready().then(function (res) {
            if (res == 'cordova') {
                _this.twitter.login().then(function (result) {
                    console.log("twitter res--" + JSON.stringify(result));
                    _this.twitter.showUser().then(function (user) {
                        console.log("user--" + JSON.stringify(user));
                        //here post data to Api
                        localStorage.setItem('user', user.id);
                        _this.navCtrl.push("HomePage");
                    }, function (onError) {
                        console.log("user--" + JSON.stringify(onError));
                    });
                });
            }
        });
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-registration',template:/*ion-inline-start:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\registration\registration.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Registration</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="login">\n    <img class="logo" src="assets/img/logo-icon.png">\n\n    <!--inputs-->\n    <!--name-->\n    <form [formGroup]="user" (ngSubmit)="onRegister()">\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>Name:</ion-label>\n                    <ion-input type="text" formControlName="name"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--email-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>Email:</ion-label>\n                    <ion-input type="email" formControlName="email"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <!--Mobile No-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>Mobile:</ion-label>\n                    <ion-input type="number" formControlName="mobileNo"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <!--password-->\n        <ion-row>\n            <ion-col col-12>\n                <ion-item>\n                    <ion-label>Password:</ion-label>\n                    <ion-input type="password" formControlName="password"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <!--button-->\n        <ion-row>\n            <ion-col col-12>\n                <button class="login-btn" ion-button>Register</button>\n            </ion-col>\n        </ion-row>\n    </form>\n\n    <!--login with-->\n    <ion-row>\n        <ion-col col-12>\n            <p text-center>REGISTER WITH</p>\n        </ion-col>\n    </ion-row>\n\n    <!--Social login-->\n    <ion-row>\n        <ion-col col-12 text-center>\n     <span (click) ="doFbLogin()">\n       <img class="social-icon" src="assets/img/fb.png">\n     </span>\n            <span (click) ="googleLogin()">\n       <img class="social-icon" src="assets/img/g+.png">\n     </span>\n            <span (click) ="twitterLogin()">\n       <img class="social-icon" src="assets/img/twitter.png">\n     </span>\n        </ion-col>\n    </ion-row>\n\n    <!--go to registration-->\n    <ion-row>\n        <ion-col col-12>\n            <a (click)="navLogin()">\n                <p text-center>ALREADY REGISTERED !</p>\n            </a>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lionel\Desktop\ionic3API_v2\src\pages\registration\registration.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__["a" /* TwitterConnect */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__["a" /* TwitterConnect */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map