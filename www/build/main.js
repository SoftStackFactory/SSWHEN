webpackJsonp([10],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content center text-center>\n  <ion-grid>\n        <ion-row center>\n              <ion-col>\n                <h1 no-padding no-margin>SSWHEN</h1>\n                \n                 <h3 float-center>Log In</h3>\n                \n                <ion-icon name="log-in"></ion-icon>\n                    \n                <h3 no-padding no-margin></h3>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Email Address: \n                  </ion-card-header>\n                  <ion-card-content>\n                      <ion-icon name="mail" float-right></ion-icon>\n                   <ion-input \n                   type="email" \n                    name="email"\n                    value=""\n                    placeholder="example@gmail.com"></ion-input>\n                  </ion-card-content>\n              \n                  <ion-card-header>\n                    Password: \n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-icon name="lock" float-right></ion-icon>\n                    <ion-input \n                   type="password" \n                    name="Password"\n                    value=""\n                    placeholder="••••••••••"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <button ion-button \n        (click)="login()"\n        type="submit"\n         > \n          Login</button> \n          </ion-row>\n          <ion-row>\n            Forgot Password?\n          </ion-row>\n  </ion-grid>        \n        \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(37);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-email-modal',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/email-modal/email-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>\n        Email Results\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="closeModal()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-row>\n      <ion-col col-8 offset-2>\n        <p>Send your results to your email</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Email Results"></ion-input>\n        </ion-item>\n      </ion-list>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full >Send Results</button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-8 offset-2>\n        <p>SOME THING ABOUT WHY YOU SHOULD REGISTER</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/email-modal/email-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], EmailModalPage);

//# sourceMappingURL=email-modal.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/app-description/app-description.module": [
		460,
		9
	],
	"../pages/dashboard/dashboard.module": [
		455,
		8
	],
	"../pages/data-table/data-table.module": [
		462,
		7
	],
	"../pages/email-modal/email-modal.module": [
		457,
		6
	],
	"../pages/info-input/info-input.module": [
		459,
		5
	],
	"../pages/landing/landing.module": [
		461,
		4
	],
	"../pages/login/login.module": [
		453,
		3
	],
	"../pages/profile/profile.module": [
		454,
		2
	],
	"../pages/register/register.module": [
		456,
		1
	],
	"../pages/results/results.module": [
		458,
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(36);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <ion-grid class=\"popover-page\" no-padding>\n      <ion-row>\n        <ion-col class=\"menu-full-width\" col-auto align-self-end>\n          <button ion-item on-click=\"goToProfile()\" padding-horizontal>\n            Edit Account\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"menu-full-width\" col-auto align-self-end>\n          <button ion-item on-click=\"goToLanding()\" padding-horizontal>\n            History\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"menu-full-width menu-last\" col-auto align-self-end>\n          <button ion-item on-click=\"goToLanding()\" padding-horizontal>\n            Logout\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], PopoverPage);

//# sourceMappingURL=popover-page.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    function ModalPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPage.prototype.ngOnInit = function () {
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title> Modal Popup</ion-title>\n        <ion-buttons start>\n          <button ion-button (click)=\"dismiss()\"><span ion-text color=\"primary\" showWhen=\"ios, browser\">Cancel</span>\n            <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"table\">\n        <div class=\"table-row row header\">\n          <div class=\"table-col col\">Header 1</div>\n          <div class=\"table-col col\">Header 2</div>\n          <div class=\"table-col col\">Header 3</div>\n          <div class=\"table-col col\">Header 4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n\n      </div>\n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], ModalPage);

//# sourceMappingURL=modal-page.js.map

/***/ }),

/***/ 167:
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserDataProvider);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_description_app_description__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_input_info_input__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__results_results__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(112);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SSWhen App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Application Pages:</h1>\n  <ul>\n    <li><a href="#" on-click="goToLanding()">Landing Page</a></li>\n    <li><a href="#" on-click="goToAppDescription()">App Description Page</a></li>\n    <li><a href="#" on-click="goToInfoInput()">Info Input Page</a></li>\n    <li><a href="#" on-click="goToResults()">Results Page</a></li>\n    <li><a href="#" on-click="goToRegister()">Register Page</a></li>\n    <li><a href="#" on-click="goToDashboard()">Dashboard Page</a></li>\n    <li><a href="#" on-click="goToProfile()">Account Profile Page</a></li>\n    <li><a href="#" on-click="goToLogin()">Login Page</a></li>\n  </ul>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the DataTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DataTablePage = (function () {
    function DataTablePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //mock data array for testing
        this.benefitData = [
            {
                age: 62,
                monthly: 1000,
                cumulative: 10000
            },
            {
                age: 63,
                monthly: 2000,
                cumulative: 20000
            },
            {
                age: 64,
                monthly: 3000,
                cumulative: 30000
            }
        ];
    }
    DataTablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DataTablePage');
    };
    return DataTablePage;
}());
DataTablePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-data-table',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/data-table/data-table.html"*/'  <ion-card>\n    <ion-card-content>\n      <ion-grid no-padding>\n      \n      <!-- HEADER -->\n      <ion-row style="border-bottom: 2px solid black;">\n        <ion-col col-4>Retirement <br/> Age </ion-col>\n        <ion-col col-4>Monthly <br/> Payout</ion-col>\n        <ion-col col-4>Cumulative <br> Payout</ion-col>\n      </ion-row>\n                \n          <!-- DATA  -->\n    \n      <ion-row *ngFor="let result of benefitData">\n        <ion-col col-4>{{ result.age }}</ion-col>\n        <ion-col col-4>{{ result.monthly }}</ion-col>\n        <ion-col col-4>{{ result.cumulative }}</ion-col>\n      </ion-row>\n\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/data-table/data-table.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], DataTablePage);

//# sourceMappingURL=data-table.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_app_description_app_description__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_input_info_input__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_results_results__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_calculations_calculations__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_email_modal_email_modal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_popover_page__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_modal_page__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_data_table_data_table__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_bar_chart_bar_chart__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__(20);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
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
            __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_modal_page__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_data_table_data_table__["a" /* DataTablePage */],
            __WEBPACK_IMPORTED_MODULE_23__components_bar_chart_bar_chart__["a" /* BarChartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_forms__["e" /* ReactiveFormsModule */],
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
                    { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/data-table/data-table.module#DataTablePageModule', name: 'DataTablePage', segment: 'data-table', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_modal_page__["a" /* ModalPage */],
            __WEBPACK_IMPORTED_MODULE_23__components_bar_chart_bar_chart__["a" /* BarChartComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_calculations_calculations__["a" /* CalculationsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_description_app_description__ = __webpack_require__(60);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-landing',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/landing/landing.html"*/'<!--\n  Generated template for the LandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title >landingPage</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'toRegister()\'>\n        Login\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n        <ion-row justify-content-center> \n           <ion-card class=\'landing-card\'>\n            \n               <ion-card-header text-center padding>\n                 <h1>SSWHEN</h1>\n               </ion-card-header>\n               \n               <ion-row padding> \n                   <img id=\'landing-img\' src="https://images.unsplash.com/photo-1465508421127-4cbee06c9e73?auto=format&fit=crop&w=1500&q=80" \n                   alt=\'retired people\' style="width:100%; height: 200px;">\n               </ion-row>\n               \n               \n              <ion-card-content>\n                   <p text-center> \n                  Let the Social Security Calculator help you figure out how much retirement income you’ll receive at different claiming ages so you can determine when you should claim Social Security. \n                   </p>\n              </ion-card-content>\n              \n              <ion-row justify-content-center padding> \n                  <button ion-button  (click)=\'toAppDescription()\'>Begin</button>\n              </ion-row>\n                \n           </ion-card>\n           \n        </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/landing/landing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LandingPage);

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(47);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register Page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n    <h1 id ="logo">SSWHEN</h1>\n    \n    <!--IONIC CARD CONTAINER-->\n    <ion-card>\n      <ion-card-content>\n          <ion-list>\n              \n     <!--MARITAL STATUS-->\n            <ion-item>\n              <ion-label>Marital Status</ion-label>\n                 <ion-select [(ngModel)]="maritalStatus">\n                  <ion-option value="single">Single</ion-option>\n                  <ion-option value="married">Married</ion-option>\n                 </ion-select>\n             </ion-item>\n             \n     <!--TOTAL TAX CONTRIBUTION-->\n              <ion-item>\n                <ion-label floating>Total Tax Contribution</ion-label>\n                <ion-input type="text" [(ngModel)]="totalTaxContribution"></ion-input>\n              </ion-item>\n   \n     <!--EMAIL-->\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="text" [(ngModel)]="email"></ion-input>\n             </ion-item>\n             \n    <!--COFNIRM EMAIL-->\n              <ion-item>\n                <ion-label floating>Confirm Email</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n              \n    <!--PASSWORD-->\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" [(ngModel)]="password"></ion-input>\n              </ion-item>\n              \n    <!--CONFIRM PASSWORD-->\n              <ion-item>\n                <ion-label floating>Confirm Password</ion-label>\n                <ion-input type="password"></ion-input>\n              </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n\n<ion-row justify-content-center>\n    <!--ION BUTTON-->\n    <button ion-button (click)=\'toDashboard()\'>Register</button>\n    <!--change that so it routes to the next page-->\n</ion-row>\n\n\n\n\n<!--TEST NG MODEL DATA BINDING WILL DELETE-->\n<!--https://codeburst.io/angular-4-custom-validation-for-template-based-forms-b7dee9be48a6-->\n<!--<p>{{totalTaxContribution}}</p>-->\n<!--<p>{{maritalStatus}}</p>-->\n<!--<p>{{email}}</p>-->\n<!--<p>{{password}}</p>-->\n\n<!--in using col you will want to figure out the middle size for the 12 columns-->\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(211);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(123);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], CalculationsProvider);

//# sourceMappingURL=calculations.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 216,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 216,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-nz": 244,
	"./en-nz.js": 244,
	"./eo": 245,
	"./eo.js": 245,
	"./es": 246,
	"./es-do": 247,
	"./es-do.js": 247,
	"./es.js": 246,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./he": 260,
	"./he.js": 260,
	"./hi": 261,
	"./hi.js": 261,
	"./hr": 262,
	"./hr.js": 262,
	"./hu": 263,
	"./hu.js": 263,
	"./hy-am": 264,
	"./hy-am.js": 264,
	"./id": 265,
	"./id.js": 265,
	"./is": 266,
	"./is.js": 266,
	"./it": 267,
	"./it.js": 267,
	"./ja": 268,
	"./ja.js": 268,
	"./jv": 269,
	"./jv.js": 269,
	"./ka": 270,
	"./ka.js": 270,
	"./kk": 271,
	"./kk.js": 271,
	"./km": 272,
	"./km.js": 272,
	"./kn": 273,
	"./kn.js": 273,
	"./ko": 274,
	"./ko.js": 274,
	"./ky": 275,
	"./ky.js": 275,
	"./lb": 276,
	"./lb.js": 276,
	"./lo": 277,
	"./lo.js": 277,
	"./lt": 278,
	"./lt.js": 278,
	"./lv": 279,
	"./lv.js": 279,
	"./me": 280,
	"./me.js": 280,
	"./mi": 281,
	"./mi.js": 281,
	"./mk": 282,
	"./mk.js": 282,
	"./ml": 283,
	"./ml.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./th": 313,
	"./th.js": 313,
	"./tl-ph": 314,
	"./tl-ph.js": 314,
	"./tlh": 315,
	"./tlh.js": 315,
	"./tr": 316,
	"./tr.js": 316,
	"./tzl": 317,
	"./tzl.js": 317,
	"./tzm": 318,
	"./tzm-latn": 319,
	"./tzm-latn.js": 319,
	"./tzm.js": 318,
	"./uk": 320,
	"./uk.js": 320,
	"./ur": 321,
	"./ur.js": 321,
	"./uz": 322,
	"./uz-latn": 323,
	"./uz-latn.js": 323,
	"./uz.js": 322,
	"./vi": 324,
	"./vi.js": 324,
	"./x-pseudo": 325,
	"./x-pseudo.js": 325,
	"./yo": 326,
	"./yo.js": 326,
	"./zh-cn": 327,
	"./zh-cn.js": 327,
	"./zh-hk": 328,
	"./zh-hk.js": 328,
	"./zh-tw": 329,
	"./zh-tw.js": 329
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 434;

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
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

var BarChartComponent = (function () {
    // Make it so when clicked that data is displayed below the chart instead of hover
    // public chartHovered(e:any):void {
    //   console.log(e);
    // }
    function BarChartComponent() {
        // mock data for charts
        this.mockLabels = ['62', '63', '64', '65', '66', '67', '68', '69', '70'];
        this.mockChartData = [1000, 1100, 1200, 1300, 1400, 1540, 1650, 1782, 1860, 1945];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 500, max: 2500 } }]
            }
        };
        this.barChartLabels = this.mockLabels;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: this.mockChartData, label: 'Monthly Payout' }
        ];
    }
    // events
    BarChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ;
    return BarChartComponent;
}());
BarChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bar-chart',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/components/bar-chart/bar-chart.html"*/'\n<ion-card>\n    <ion-card-content>\n        <canvas baseChart\n            [datasets]="barChartData"\n            [labels]="barChartLabels"\n            [options]="barChartOptions"\n            [legend]="barChartLegend"\n            [chartType]="barChartType"\n            (chartHover)="chartHovered($event)"\n            (chartClick)="chartClicked($event)">\n        </canvas>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/components/bar-chart/bar-chart.html"*/
    }),
    __metadata("design:paramtypes", [])
], BarChartComponent);

//# sourceMappingURL=bar-chart.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_page__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_page__ = __webpack_require__(166);
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
    function DashboardPage(navCtrl, navParams, popoverCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
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
    DashboardPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_page__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
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
    DashboardPage.prototype.showPrompt = function () {
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
                    }
                }
            ]
        });
        prompt.present();
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/dashboard/dashboard.html"*/'\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n<!--Some more details can be added here-->\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid no-padding>\n    <ion-row align-items-center padding-horizontal>\n      <ion-col align-self-start>\n        <h1>SSWhen</h1>\n      </ion-col>\n      <ion-col align-self-end>\n        <button ion-button float-end color="light" icon-left (click)="presentPopover($event)">\n          <ion-icon name="person"></ion-icon>\n          <ion-icon md="md-arrow-dropdown"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            <ion-row align-items-center>\n              <ion-col>\n                <h2>User Information</h2>\n              </ion-col>\n              <ion-col>\n                <button style="vertical-align: top;" class="btn-smaller" ion-button icon-only float-end color="dark" on-click="isEditable()">\n                  <ion-icon md="md-create"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>Life Expectancy:</strong></div>\n                <div>62</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Life Expectancy</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col align-items-end>\n                <div><strong>FRA Age:</strong></div>\n                <div>65</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Age</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>FRA Benefit Amount:</strong></div>\n                <div>$1,080</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Benefit Amount</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-center>\n              <ion-col>\n                <div><strong>Total Tax Contribution:</strong></div>\n                <div>$40,110</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Total Tax Contribution</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            <div>\n              <ion-segment [(ngModel)]="data">\n                <ion-segment-button value="monthly">\n                  Monthly\n                </ion-segment-button>\n                <ion-segment-button value="cumulative">\n                  Cumulative\n                </ion-segment-button>\n                <ion-segment-button value="other">\n                  Other\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n\n            <div [ngSwitch]="data">\n              <ion-list *ngSwitchCase="\'monthly\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p>Monthly Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'cumulative\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p>Cumulative Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'other\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p>Other Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--<ion-grid>-->\n\n  <!--  <dropdown-menu>-->\n  <!--    Account-->\n  <!--    Logout-->\n  <!--  </dropdown-menu>-->\n\n  <!--  <ion-card>-->\n  <!--    User Info Card-->\n  <!--    Edit link/button-->\n  <!--  </ion-card>-->\n\n  <!--  <ion-segments>-->\n\n  <!--    <ion-segment>-->\n  <!--      Monthly Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n  <!--    <ion-segment>-->\n  <!--      Cumulative Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n\n  <!--  </ion-segments>-->\n\n  <!--</ion-grid>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/dashboard/dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Back</ion-title> \n    <!--takes the user back to the register page? -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content center text-center>\n  <ion-grid>\n        <ion-row center>\n              <ion-col>\n                <h1 no-padding no-margin>SSWHEN</h1>\n                <h1 no-padding no-margin>Profile Page</h1>\n                \n                <img src=\'http://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png\' alt="Logo Image">\n                    \n                <h3 no-padding no-margin></h3>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Current Email Address: \n                  </ion-card-header>\n                  <ion-card-content>\n                      <ion-icon name="create" float-right></ion-icon>\n                   <ion-input \n                   type="email" \n                    name="email"\n                    value=""\n                    ngModel\n                    placeholder="example@gmail.com"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Password: \n                  </ion-card-header>\n                  <ion-card-content>\n                     <ion-icon name="create" float-right></ion-icon>\n                    <ion-input \n                   type="password" \n                    name="Password"\n                    value=""\n                    ngModel\n                    [minlength]="6"\n                    placeholder="••••••••••"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                \n                 <!-- <button ion-button -->\n                 <!--type="submit"-->\n                 <!-- > -->\n                  <!--(click)=""-->\n                 <!--   Password:   <ion-icon name="create"></ion-icon></button> -->\n                 \n                <!--<form -->\n                <!--#f="ngForm" (ngSubmit)="onEdit(f)">-->\n                  <!--^added #f as a local reference to the form-->\n                <!--  <ion-item>-->\n                <!--    <ion-label -->\n                <!--    color="primary" -->\n                <!--    floating>Change Email</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="email" -->\n                <!--    name="email"-->\n                <!--    ngModel-->\n                <!--    placeholder=""></ion-input>-->\n                <!--  </ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating>Confirm Email</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="email" -->\n                <!--    name="email"-->\n                <!--    ngModel-->\n                <!--    placeholder=""></ion-input>-->\n                <!--</ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating>Password (Must be at least 6 characters)</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="password" -->\n                <!--    name="Password"-->\n                <!--    value=""-->\n                <!--    ngModel-->\n                <!--    [minlength]="6"></ion-input>-->\n                <!--</ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating> Confirm Password</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="password" -->\n                <!--    name="password"-->\n                <!--    value=""-->\n                <!--    ngModel-->\n                <!--    [minlength]="6"></ion-input>-->\n                <!--</ion-item>-->\n                            \n        <!--This button will link to next page:-->\n        <button ion-button \n        (click)="popView()"\n        type="submit"\n         > \n        <!--[disabled]="!f.valid" to go in after submit-->\n        <!--^propery binding gets a reference to the form from above. Action: disable this if the form is not valid-->\n          Confirm Edit</button> \n\n                <h1 no-padding no-margin></h1>\n                \n              <!--</form>  -->\n              </ion-col>\n        </ion-row>\n  </ion-grid>  \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_input_info_input__ = __webpack_require__(61);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-app-description',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/app-description/app-description.html"*/'<!--\n  Generated template for the AppDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Introduction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-grid>\n    \n    <h3 style=text-align:center>SSWHEN Social Security Calculator</h3>\n    \n    <ion-card>\n      \n      <ion-card-header>\n        Before we begin...\n      </ion-card-header>\n      \n      <ion-card-content>\n        This site will give you an estimate of your Social Security benefit options, based on the age that you elect to begin\n        receiving benefits.  \n        <br>\n        <br>\n        To proceed, you will need a copy of your Social Security statement OR an estimate of your Full Retirement Benefit . \n        <button ion-button icon-only small clear on-click="benefitInfoAlert()"  class="customBtn">\n          <ion-icon name="information-circle"></ion-icon>\n        </button>\n        <br>\n        <br>\n        Get a copy of your Social Security statement by logging into the Social Security Administration home page \n        <a target="_blank" href="https://www.ssa.gov/myaccount/">here</a>.\n        <br>\n        <br>\n        Get it an estimate of your Full Retirement Benefit  \n        <a target="_blank" href="https://www.ssa.gov/benefits/retirement/estimator.html">here</a>.\n      </ion-card-content>\n    </ion-card>\n    \n    <button ion-button on-click="goToInfoInput()">Begin</button>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/app-description/app-description.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AppDescriptionPage);

//# sourceMappingURL=app-description.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
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
    function InfoInputPage(navCtrl, navParams, user$, formBuilder) {
        /*this.user$.date = this.myDate;
        this.user$.sex = this.gender;
        this.user$.FRA = this.monthlyAtFRA;*/
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user$ = user$;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.myForm = formBuilder.group({
            birthDate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
            /*gender: ['', Validators.required],
            fra: ['', Validators.required]*/
        });
    }
    InfoInputPage.prototype.onSubmit = function () {
        this.submitAttempt = true;
        if (!this.myForm.valid) {
            console.log('Unsuccessful input');
        }
        else {
            console.log('Successful input');
            //this.navCtrl.push(ResultsPage);
        }
    };
    return InfoInputPage;
}());
InfoInputPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info-input',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/info-input/info-input.html"*/'\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>infoInputPage</ion-title>\n  </ion-navbar>\n  \n  <ion-grid>\n  <ion-row align-items-center>\n    <ion-col style = "margin: 0 auto">\n      <img src="https://preview.ibb.co/c39yyb/Senior_Security.jpg">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center> <ion-icon name="arrow-round-down"></ion-icon> Please Enter Your Information  <ion-icon name="arrow-round-down"></ion-icon> </h3>\n  \n  <h1>  {{ user$.start}} </h1>\n  \n    <form>\n      <ion-list>\n        \n      <form [formGroup]=\'myForm\'>\n         <ion-item text-center>\n          <ion-label floating>Date of Birth</ion-label>\n          <ion-datetime displayFormat="MM/YYYY" formControlName="birthDate"></ion-datetime>\n        </ion-item>\n        \n        <div *ngIf=\'!myForm.controls.birthDate.valid && submitAttempt\'>\n            <h3 text-center>Please Enter Date of Birth</h3>\n        </div>\n        \n        <!--<ion-item text-center>-->\n        <!--  <ion-label floating>Gender</ion-label>-->\n        <!--  <ion-select formControlName="gender">-->\n        <!--    <ion-option value="f">Female</ion-option>-->\n        <!--    <ion-option value="m">Male</ion-option>-->\n        <!--  </ion-select>-->\n        <!--</ion-item>-->\n        <!--<div *ngIf=\'!myForm.controls.gender.valid && submitAttempt\'>-->\n        <!--    <h3 text-center>Please Enter Date of Birth</h3>-->\n        <!--</div>-->\n        \n        <!--<ion-item>-->\n        <!--  <ion-label floating>Full Retirement Benefit</ion-label>-->\n        <!--  <ion-input type="number" formControlName="fra" text-center></ion-input>-->\n        <!--</ion-item>-->\n        <!--<div *ngIf=\'!myForm.controls.birthDate.valid && submitAttempt\'>-->\n        <!--    <h3 text-center>Please Enter Date of Birth</h3>-->\n        <!--</div>-->\n      </form>\n        \n      </ion-list>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col width-4>\n            <button ion-button  (click)=\'onSubmit()\' block>Submit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/info-input/info-input.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], InfoInputPage);

var _a, _b, _c, _d;
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_modal_email_modal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing__ = __webpack_require__(36);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-results',template:/*ion-inline-start:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/results/results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    \n    <!--  Before Segment -->\n    <ion-row>\n      <ion-col col-6 offset-3>\n        <h2 style="text-align:center;">SSWHEN</h2>\n      </ion-col>\n    </ion-row>\n    \n    <!-- Segments  -->\n    <div>\n      <ion-segment [(ngModel)]="results">\n        <ion-segment-button value="graph">\n          Graph\n        </ion-segment-button>\n        <ion-segment-button value="chart">\n          Chart\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <div [ngSwitch]="results">\n      <div *ngSwitchCase="\'graph\'">\n            <bar-chart></bar-chart>\n      </div>\n      <div *ngSwitchCase="\'chart\'">\n        \n        \n        <page-data-table></page-data-table>\n       \n\n      </div>\n    </div>\n    \n     Bottom Buttons  \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full (click)="openEmailModal()">Email Results</button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n    \n    <!--Register-->\n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n    \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/ionic-project/SSWHEN/src/pages/results/results.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ResultsPage);

//# sourceMappingURL=results.js.map

/***/ })

},[331]);
//# sourceMappingURL=main.js.map