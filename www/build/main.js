webpackJsonp([9],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__landing_landing__["a" /* LandingPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content center text-center>\n  <ion-grid>\n        <ion-row center>\n              <ion-col>\n                <h1 no-padding no-margin>SSWHEN</h1>\n                \n                 <h3 float-center>Log In</h3>\n                \n                <ion-icon name="log-in"></ion-icon>\n                    \n                <h3 no-padding no-margin></h3>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Email Address: \n                  </ion-card-header>\n                  <ion-card-content>\n                      <ion-icon name="mail" float-right></ion-icon>\n                   <ion-input \n                   type="email" \n                    name="email"\n                    value=""\n                    placeholder="example@gmail.com"></ion-input>\n                  </ion-card-content>\n              \n                  <ion-card-header>\n                    Password: \n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-icon name="lock" float-right></ion-icon>\n                    <ion-input \n                   type="password" \n                    name="Password"\n                    value=""\n                    placeholder="••••••••••"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <button ion-button \n        (click)="login()"\n        type="submit"\n         > \n          Login</button> \n          </ion-row>\n          <ion-row>\n            Forgot Password?\n          </ion-row>\n  </ion-grid>        \n        \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(32);
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
 * Generated class for the EmailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailModalPage = (function () {
    function EmailModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    EmailModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    EmailModalPage.prototype.goToRegister = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    EmailModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailModalPage');
    };
    return EmailModalPage;
}());
EmailModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-email-modal',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/email-modal/email-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>\n        Email Results\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="closeModal()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-row>\n      <ion-col col-8 offset-2>\n        <p>Send your results to your email</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Email Results"></ion-input>\n        </ion-item>\n      </ion-list>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full >Send Results</button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-8 offset-2>\n        <p>SOME THING ABOUT WHY YOU SHOULD REGISTER</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/email-modal/email-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], EmailModalPage);

//# sourceMappingURL=email-modal.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/app-description/app-description.module": [
		281,
		8
	],
	"../pages/dashboard/dashboard.module": [
		276,
		7
	],
	"../pages/email-modal/email-modal.module": [
		278,
		6
	],
	"../pages/info-input/info-input.module": [
		280,
		5
	],
	"../pages/landing/landing.module": [
		282,
		4
	],
	"../pages/login/login.module": [
		274,
		3
	],
	"../pages/profile/profile.module": [
		275,
		2
	],
	"../pages/register/register.module": [
		277,
		1
	],
	"../pages/results/results.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverPage = (function () {
    function PopoverPage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    PopoverPage.prototype.ngOnInit = function () {
    };
    PopoverPage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    PopoverPage.prototype.goToLanding = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-list class=\"popover-page\">\n      <button ion-item on-click=\"goToProfile()\">\n        Account\n      </button>\n      <button ion-item on-click=\"goToLanding()\">\n        Logout\n      </button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], PopoverPage);

//# sourceMappingURL=popover-page.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = (function () {
    function ModalPage(navParams) {
        this.navParams = navParams;
    }
    ModalPage.prototype.ngOnInit = function () {
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title> Modal Popup</ion-title>\n        <ion-buttons start>\n          <button ion-button (click)=\"dismiss()\"><span ion-text color=\"primary\" showWhen=\"ios, browser\">Cancel</span>\n            <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"table\">\n        <div class=\"table-row row header\">\n          <div class=\"table-col col\">Header 1</div>\n          <div class=\"table-col col\">Header 2</div>\n          <div class=\"table-col col\">Header 3</div>\n          <div class=\"table-col col\">Header 4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n        \n      </div>\n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ModalPage);

//# sourceMappingURL=modal-page.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDataProvider = (function () {
    function UserDataProvider() {
    }
    return UserDataProvider;
}());
UserDataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserDataProvider);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_description_app_description__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_input_info_input__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__results_results__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(105);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToLanding = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
    };
    HomePage.prototype.goToAppDescription = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__app_description_app_description__["a" /* AppDescriptionPage */]);
    };
    HomePage.prototype.goToInfoInput = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__info_input_info_input__["a" /* InfoInputPage */]);
    };
    HomePage.prototype.goToResults = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__results_results__["a" /* ResultsPage */]);
    };
    HomePage.prototype.goToRegister = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.goToDashboard = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.goToProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SSWhen App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Application Pages:</h1>\n  <ul>\n    <li><a href="#" on-click="goToLanding()">Landing Page</a></li>\n    <li><a href="#" on-click="goToAppDescription()">App Description Page</a></li>\n    <li><a href="#" on-click="goToInfoInput()">Info Input Page</a></li>\n    <li><a href="#" on-click="goToResults()">Results Page</a></li>\n    <li><a href="#" on-click="goToRegister()">Register Page</a></li>\n    <li><a href="#" on-click="goToDashboard()">Dashboard Page</a></li>\n    <li><a href="#" on-click="goToProfile()">Account Profile Page</a></li>\n    <li><a href="#" on-click="goToLogin()">Login Page</a></li>\n  </ul>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_app_description_app_description__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_input_info_input__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_results_results__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_calculations_calculations__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_email_modal_email_modal__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_popover_page__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_modal_page__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_app_description_app_description__["a" /* AppDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_info_input_info_input__["a" /* InfoInputPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_email_modal_email_modal__["a" /* EmailModalPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_popover_page__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_modal_page__["a" /* ModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/email-modal/email-modal.module#EmailModalPageModule', name: 'EmailModalPage', segment: 'email-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info-input/info-input.module#InfoInputPageModule', name: 'InfoInputPage', segment: 'info-input', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/app-description/app-description.module#AppDescriptionPageModule', name: 'AppDescriptionPage', segment: 'app-description', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_app_description_app_description__["a" /* AppDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_info_input_info_input__["a" /* InfoInputPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_results_results__["a" /* ResultsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_email_modal_email_modal__["a" /* EmailModalPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_popover_page__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_modal_page__["a" /* ModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_calculations_calculations__["a" /* CalculationsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.test = "test";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculationsProvider = (function () {
    function CalculationsProvider(http) {
        this.http = http;
    }
    return CalculationsProvider;
}());
CalculationsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CalculationsProvider);

var _a;
//# sourceMappingURL=calculations.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_description_app_description__ = __webpack_require__(53);
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
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.toAppDescription = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__app_description_app_description__["a" /* AppDescriptionPage */]);
    };
    LandingPage.prototype.toRegister = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    return LandingPage;
}());
LandingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-landing',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/landing/landing.html"*/'<!--\n  Generated template for the LandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title >landingPage</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'toRegister()\'>\n        Login\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n        <ion-row justify-content-center> \n           <ion-card class=\'landing-card\'>\n            \n               <ion-card-header text-center padding>\n                 <h1>SSWHEN</h1>\n               </ion-card-header>\n               \n               <ion-row padding> \n                   <img id=\'landing-img\' src="https://images.unsplash.com/photo-1465508421127-4cbee06c9e73?auto=format&fit=crop&w=1500&q=80" \n                   alt=\'retired people\' style="width:100%; height: 200px;">\n               </ion-row>\n               \n               \n              <ion-card-content>\n                   <p text-center> \n                  Let the Social Security Calculator help you figure out how much retirement income you’ll receive at different claiming ages so you can determine when you should claim Social Security. \n                   </p>\n              </ion-card-content>\n              \n              <ion-row justify-content-center padding> \n                  <button ion-button  (click)=\'toAppDescription()\'>Begin</button>\n              </ion-row>\n                \n           </ion-card>\n           \n        </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/landing/landing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LandingPage);

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(41);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    //TEST FUNCTIONS
    RegisterPage.prototype.toDashboard = function () {
        //if(!params) params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    ;
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register Page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n    <h1 id ="logo">SSWHEN</h1>\n    \n    <!--IONIC CARD CONTAINER-->\n    <ion-card>\n      <ion-card-content>\n          <ion-list>\n              \n     <!--MARITAL STATUS-->\n            <ion-item>\n              <ion-label>Marital Status</ion-label>\n                 <ion-select [(ngModel)]="maritalStatus">\n                  <ion-option value="single">Single</ion-option>\n                  <ion-option value="married">Married</ion-option>\n                 </ion-select>\n             </ion-item>\n             \n     <!--TOTAL TAX CONTRIBUTION-->\n              <ion-item>\n                <ion-label floating>Total Tax Contribution</ion-label>\n                <ion-input type="text" [(ngModel)]="totalTaxContribution"></ion-input>\n              </ion-item>\n   \n     <!--EMAIL-->\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="text" [(ngModel)]="email"></ion-input>\n             </ion-item>\n             \n    <!--COFNIRM EMAIL-->\n              <ion-item>\n                <ion-label floating>Confirm Email</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n              \n    <!--PASSWORD-->\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" [(ngModel)]="password"></ion-input>\n              </ion-item>\n              \n    <!--CONFIRM PASSWORD-->\n              <ion-item>\n                <ion-label floating>Confirm Password</ion-label>\n                <ion-input type="password"></ion-input>\n              </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n\n<ion-row justify-content-center>\n    <!--ION BUTTON-->\n    <button ion-button (click)=\'toDashboard()\'>Register</button>\n    <!--change that so it routes to the next page-->\n</ion-row>\n\n\n\n\n<!--TEST NG MODEL DATA BINDING WILL DELETE-->\n<!--https://codeburst.io/angular-4-custom-validation-for-template-based-forms-b7dee9be48a6-->\n<!--<p>{{totalTaxContribution}}</p>-->\n<!--<p>{{maritalStatus}}</p>-->\n<!--<p>{{email}}</p>-->\n<!--<p>{{password}}</p>-->\n\n<!--in using col you will want to figure out the middle size for the 12 columns-->\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_page__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_page__ = __webpack_require__(158);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.data = 'monthly';
        this.editable = false;
    }
    DashboardPage.prototype.isEditable = function () {
        if (this.editable = false) {
            this.editable = true;
        }
        else {
            this.editable = false;
        }
        console.log("editable clicked");
    };
    DashboardPage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_page__["a" /* PopoverPage */]);
        popover.present();
    };
    DashboardPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_page__["a" /* ModalPage */]);
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100'
                    };
                }
            }
        };
        modal.present({ ev: ev });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n<!--Some more details can be added here-->\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row align-items-center>\n      <ion-col align-self-end>\n        <h1>SSWhen</h1>\n      </ion-col>\n      <ion-col>\n        <button ion-button float-end color="light" icon-left (click)="presentPopover()">\n          <ion-icon name="person"></ion-icon>\n          <ion-icon md="md-arrow-dropdown"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <ion-row align-items-center>\n              <ion-col>\n                <h2>User Information</h2>\n              </ion-col>\n              <ion-col>\n                <button style="vertical-align: top;" class="btn-smaller" ion-button icon-only float-end color="dark" on-click="isEditable()">\n                  <ion-icon md="md-create"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>Life Expectancy:</strong></div>\n                <div>62</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Life Expectancy</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col align-items-end>\n                <div><strong>FRA Age:</strong></div>\n                <div>65</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Age</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>FRA Benefit Amount:</strong></div>\n                <div>$1,080</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Benefit Amount</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-center>\n              <ion-col>\n                <div><strong>Total Tax Contribution:</strong></div>\n                <div>$40,110</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Total Tax Contribution</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <div padding>\n              <ion-segment [(ngModel)]="data">\n                <ion-segment-button value="monthly">\n                  Monthly\n                </ion-segment-button>\n                <ion-segment-button value="cumulative">\n                  Cumulative\n                </ion-segment-button>\n                <ion-segment-button value="other">\n                  Other\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n\n            <div [ngSwitch]="data">\n              <ion-list *ngSwitchCase="\'monthly\'">\n                <ion-row>\n                  <ion-col col-8>\n                    <p>Monthly Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <span (click)="presentModal()" float-end color="primary">View Table</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'cumulative\'">\n                <ion-row>\n                  <ion-col col-8>\n                    <p>Cumulative Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <span (click)="presentModal()" float-end color="primary">View Table</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'other\'">\n                <ion-row>\n                  <ion-col col-8>\n                    <p>Other Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <span (click)="presentModal()" float-end color="primary">View Table</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--<ion-grid>-->\n\n  <!--  <dropdown-menu>-->\n  <!--    Account-->\n  <!--    Logout-->\n  <!--  </dropdown-menu>-->\n\n  <!--  <ion-card>-->\n  <!--    User Info Card-->\n  <!--    Edit link/button-->\n  <!--  </ion-card>-->\n\n  <!--  <ion-segments>-->\n\n  <!--    <ion-segment>-->\n  <!--      Monthly Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n  <!--    <ion-segment>-->\n  <!--      Cumulative Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n\n  <!--  </ion-segments>-->\n\n  <!--</ion-grid>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
    }
    //   onEdit(form: NgForm) {
    //   console.log(form.value);
    // }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.popView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Back</ion-title> \n    <!--takes the user back to the register page? -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content center text-center>\n  <ion-grid>\n        <ion-row center>\n              <ion-col>\n                <h1 no-padding no-margin>SSWHEN</h1>\n                <h1 no-padding no-margin>Profile Page</h1>\n                \n                <img src=\'http://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png\' alt="Logo Image">\n                    \n                <h3 no-padding no-margin></h3>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Current Email Address: \n                  </ion-card-header>\n                  <ion-card-content>\n                      <ion-icon name="create" float-right></ion-icon>\n                   <ion-input \n                   type="email" \n                    name="email"\n                    value=""\n                    ngModel\n                    placeholder="example@gmail.com"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Password: \n                  </ion-card-header>\n                  <ion-card-content>\n                     <ion-icon name="create" float-right></ion-icon>\n                    <ion-input \n                   type="password" \n                    name="Password"\n                    value=""\n                    ngModel\n                    [minlength]="6"\n                    placeholder="••••••••••"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                \n                 <!-- <button ion-button -->\n                 <!--type="submit"-->\n                 <!-- > -->\n                  <!--(click)=""-->\n                 <!--   Password:   <ion-icon name="create"></ion-icon></button> -->\n                 \n                <!--<form -->\n                <!--#f="ngForm" (ngSubmit)="onEdit(f)">-->\n                  <!--^added #f as a local reference to the form-->\n                <!--  <ion-item>-->\n                <!--    <ion-label -->\n                <!--    color="primary" -->\n                <!--    floating>Change Email</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="email" -->\n                <!--    name="email"-->\n                <!--    ngModel-->\n                <!--    placeholder=""></ion-input>-->\n                <!--  </ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating>Confirm Email</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="email" -->\n                <!--    name="email"-->\n                <!--    ngModel-->\n                <!--    placeholder=""></ion-input>-->\n                <!--</ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating>Password (Must be at least 6 characters)</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="password" -->\n                <!--    name="Password"-->\n                <!--    value=""-->\n                <!--    ngModel-->\n                <!--    [minlength]="6"></ion-input>-->\n                <!--</ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating> Confirm Password</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="password" -->\n                <!--    name="password"-->\n                <!--    value=""-->\n                <!--    ngModel-->\n                <!--    [minlength]="6"></ion-input>-->\n                <!--</ion-item>-->\n                            \n        <!--This button will link to next page:-->\n        <button ion-button \n        (click)="popView()"\n        type="submit"\n         > \n        <!--[disabled]="!f.valid" to go in after submit-->\n        <!--^propery binding gets a reference to the form from above. Action: disable this if the form is not valid-->\n          Confirm Edit</button> \n\n                <h1 no-padding no-margin></h1>\n                \n              <!--</form>  -->\n              </ion-col>\n        </ion-row>\n  </ion-grid>  \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_input_info_input__ = __webpack_require__(54);
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
 * Generated class for the AppDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppDescriptionPage = (function () {
    function AppDescriptionPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AppDescriptionPage.prototype.goToInfoInput = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_input_info_input__["a" /* InfoInputPage */]);
    };
    AppDescriptionPage.prototype.benefitInfoAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Full Retirement Benefit',
            message: 'Your Full Retirement Benefit is an estimate of the monthly income you will receive if you begin social security benefits at your Full Retirement Age, which is determined by the Social Security Administration.  You will be able to get this information from the Social Security website.',
            buttons: ['OK']
        });
        alert.present();
    };
    AppDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppDescriptionPage');
    };
    return AppDescriptionPage;
}());
AppDescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-app-description',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/app-description/app-description.html"*/'<!--\n  Generated template for the AppDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Introduction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-grid>\n    \n    <h3 style=text-align:center>SSWHEN Social Security Calculator</h3>\n    \n    <ion-card>\n      \n      <ion-card-header>\n        Before we begin...\n      </ion-card-header>\n      \n      <ion-card-content>\n        This site will give you an estimate of your Social Security benefit options, based on the age that you elect to begin\n        receiving benefits.  \n        <br>\n        <br>\n        To proceed, you will need a copy of your Social Security statement OR an estimate of your Full Retirement Benefit . \n        <button ion-button icon-only small clear on-click="benefitInfoAlert()"  class="customBtn">\n          <ion-icon name="information-circle"></ion-icon>\n        </button>\n        <br>\n        <br>\n        Get a copy of your Social Security statement by logging into the Social Security Administration home page \n        <a target="_blank" href="https://www.ssa.gov/myaccount/">here</a>.\n        <br>\n        <br>\n        Get it an estimate of your Full Retirement Benefit  \n        <a target="_blank" href="https://www.ssa.gov/benefits/retirement/estimator.html">here</a>.\n      </ion-card-content>\n    </ion-card>\n    \n    <button ion-button on-click="goToInfoInput()">Begin</button>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/app-description/app-description.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AppDescriptionPage);

//# sourceMappingURL=app-description.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoInputPage = (function () {
    function InfoInputPage(navCtrl, navParams, user$) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user$ = user$;
        this.user$.date = this.myDate;
        this.user$.sex = this.gender;
        this.user$.FRA = this.monthlyAtFRA;
    }
    InfoInputPage.prototype.logForm = function () {
        console.log(this.myDate);
        console.log(this.gender);
        console.log(this.monthlyAtFRA);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */]);
    };
    return InfoInputPage;
}());
InfoInputPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-info-input',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/'\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>infoInputPage</ion-title>\n  </ion-navbar>\n  \n  <ion-grid>\n  <ion-row align-items-center>\n    <ion-col style = "margin: 0 auto">\n      <img src="https://preview.ibb.co/c39yyb/Senior_Security.jpg">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center> <ion-icon name="arrow-round-down"></ion-icon> Please Enter Your Information  <ion-icon name="arrow-round-down"></ion-icon> </h3>\n  \n  <h1>  {{ user$.start}} </h1>\n  \n    <form (ngSubmit)="logForm()">\n      <ion-list>\n        \n        <ion-item text-center>\n          <ion-label floating>Date of Birth</ion-label>\n          <ion-datetime displayFormat="MM/YYYY" [(ngModel)]="myDate" name="Date"></ion-datetime>\n        </ion-item>\n        \n        <ion-item text-center>\n          <ion-label floating>Gender</ion-label>\n          <ion-select [(ngModel)]="gender" name = "gender">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label floating>Full Retirement Benefit</ion-label>\n          <ion-input type="number" [(ngModel)]="monthlyAtFRA" name="FRA" text-center></ion-input>\n        </ion-item>\n        \n      </ion-list>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col width-4>\n            <button ion-button type="submit" block>Submit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */]])
], InfoInputPage);

// Recommendation for resultsPage
// Import the Pages you want to communicate with;
// import {InfoInputPage} from '../info-input/info-input';
// Import the service which has the data;
// import { UserDataProvider } from "../../providers/user-data/user-data";
// .
// .
// .
// export class ResultsPage implements OnInit {
//   constructor( public user$: UserDataProvider ) {}
//   ngOnInit(){
//     this.user$.FRA
//   }
// }
//Then in the html, interpolation gives {{user$.start}}
//# sourceMappingURL=info-input.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_modal_email_modal__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsPage = (function () {
    function ResultsPage(navCtrl, alertCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = [
            { age: 62, monthlyPayout: 1000 },
            { age: 63, monthlyPayout: 1000 },
            { age: 64, monthlyPayout: 1000 },
            { age: 65, monthlyPayout: 1000 },
            { age: 66, monthlyPayout: 1000 },
            { age: 67, monthlyPayout: 1000 },
            { age: 68, monthlyPayout: 1000 },
            { age: 69, monthlyPayout: 1000 },
            { age: 70, monthlyPayout: 1000 }
        ];
        this.results = "graph";
    }
    ResultsPage.prototype.goToRegister = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    ResultsPage.prototype.goToLanding = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__landing_landing__["a" /* LandingPage */]);
    };
    ResultsPage.prototype.openEmailModal = function () {
        var resultsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__email_modal_email_modal__["a" /* EmailModalPage */]);
        resultsModal.present();
    };
    ResultsPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Email Results',
            message: "Enter your email to send your results",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Email',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.showConfirm();
                    }
                }
            ]
        });
        prompt.present();
    };
    ResultsPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Thank you for using SSWHEN',
            message: 'By registering you can view additional data about your retirement benefits',
            buttons: [
                {
                    text: 'Home',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__landing_landing__["a" /* LandingPage */]);
                    }
                },
                {
                    text: 'Register',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    return ResultsPage;
}());
ResultsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-results',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    \n    <!--  Before Segment -->\n    <ion-row>\n      <ion-col col-6 offset-3>\n        <h2 style="text-align:center;">SSWHEN</h2>\n      </ion-col>\n    </ion-row>\n    \n    <!-- Segments  -->\n    <div>\n      <ion-segment [(ngModel)]="results">\n        <ion-segment-button value="graph">\n          Graph\n        </ion-segment-button>\n        <ion-segment-button value="chart">\n          Chart\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <div [ngSwitch]="results">\n      <div *ngSwitchCase="\'graph\'">\n        <ion-card>\n          <ion-card-content>\n            Graph\n          </ion-card-content>\n        </ion-card>\n      </div>\n      <div *ngSwitchCase="\'chart\'">\n        <ion-card>\n          <ion-card-content>\n            <!-- HEADER -->\n            <ion-row style="border-bottom: 2px solid black;">\n              <ion-col col-6>Retirement <br/> Age </ion-col>\n              <ion-col col-6>Monthly <br/> Payout</ion-col>\n            </ion-row>\n            \n            <!-- DATA  -->\n            <!--<ul>-->\n            <!--  <li *ngfor= "let result of data">-->\n            <!--    <ion-row > -->\n            <!--      <ion-col col-6>{{ result.age }}</ion-col>-->\n            <!--      <ion-col col-6>{{ results.monthlyPayout }}</ion-col>-->\n            <!--    </ion-row>-->\n            <!--  </li>-->\n            <!--</ul>-->\n            <ion-row> <!-- Repeat for number of ages to be shown, use ngfor or ng-repeat  -->\n              <ion-col col-6>62</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row> \n              <ion-col col-6>63</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>64</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row> \n              <ion-col col-6>65</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row> \n              <ion-col col-6>66</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row> \n              <ion-col col-6>67</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row> \n              <ion-col col-6>68</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row> \n              <ion-col col-6>69</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n            <ion-row> \n              <ion-col col-6>70</ion-col>\n              <ion-col col-6>$1500</ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    \n    <!-- Bottom Buttons  -->\n    <!--<ion-row>-->\n    <!--  <ion-col col-6 offset-3>-->\n    <!--      <button ion-button full (click)="openEmailModal()">Email Results</button>-->\n    <!--  </ion-col>-->\n    <!--</ion-row>-->\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n    \n    <!--Register-->\n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n    \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ResultsPage);

//# sourceMappingURL=results.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map