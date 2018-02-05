webpackJsonp([10],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    EmailModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-email-modal',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/email-modal/email-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-toolbar>\n      <ion-title>\n        Email Results\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="closeModal()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-row>\n      <ion-col col-8 offset-2>\n        <p>Send your results to your email</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Email Results"></ion-input>\n        </ion-item>\n      </ion-list>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full >Send Results</button>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-8 offset-2>\n        <p>SOME THING ABOUT WHY YOU SHOULD REGISTER</p>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/email-modal/email-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], EmailModalPage);
    return EmailModalPage;
}());

//# sourceMappingURL=email-modal.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content center text-center>\n  <ion-grid>\n        <ion-row center>\n              <ion-col>\n                <h1 no-padding no-margin>SSWHEN</h1>\n                \n                 <h3 float-center>Log In</h3>\n                \n                <ion-icon name="log-in"></ion-icon>\n                    \n                <h3 no-padding no-margin></h3>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Email Address: \n                  </ion-card-header>\n                  <ion-card-content>\n                      <ion-icon name="mail" float-right></ion-icon>\n                   <ion-input \n                   type="email" \n                    name="email"\n                    value=""\n                    placeholder="example@gmail.com"></ion-input>\n                  </ion-card-content>\n              \n                  <ion-card-header>\n                    Password: \n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-icon name="lock" float-right></ion-icon>\n                    <ion-input \n                   type="password" \n                    name="Password"\n                    value=""\n                    placeholder="••••••••••"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <button ion-button \n        (click)="login()"\n        type="submit"\n         > \n          Login</button> \n          </ion-row>\n          <ion-row>\n            Forgot Password?\n          </ion-row>\n  </ion-grid>        \n        \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/app-description/app-description.module": [
		465,
		9
	],
	"../pages/dashboard/dashboard.module": [
		466,
		8
	],
	"../pages/data-table/data-table.module": [
		467,
		7
	],
	"../pages/email-modal/email-modal.module": [
		468,
		6
	],
	"../pages/info-input/info-input.module": [
		469,
		5
	],
	"../pages/landing/landing.module": [
		471,
		4
	],
	"../pages/login/login.module": [
		470,
		3
	],
	"../pages/profile/profile.module": [
		472,
		2
	],
	"../pages/register/register.module": [
		473,
		1
	],
	"../pages/results/results.module": [
		474,
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(38);
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
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-grid class=\"popover-page\" no-padding>\n      <ion-row>\n        <ion-col class=\"menu-full-width\" col-auto align-self-end>\n          <button ion-item on-click=\"goToProfile()\" padding-horizontal>\n            Edit Account\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"menu-full-width\" col-auto align-self-end>\n          <button ion-item on-click=\"goToLanding()\" padding-horizontal>\n            History\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"menu-full-width menu-last\" col-auto align-self-end>\n          <button ion-item on-click=\"goToLanding()\" padding-horizontal>\n            Logout\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover-page.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title> Modal Popup</ion-title>\n        <ion-buttons start>\n          <button ion-button (click)=\"dismiss()\"><span ion-text color=\"primary\" showWhen=\"ios, browser\">Cancel</span>\n            <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"table\">\n        <div class=\"table-row row header\">\n          <div class=\"table-col col\">Header 1</div>\n          <div class=\"table-col col\">Header 2</div>\n          <div class=\"table-col col\">Header 3</div>\n          <div class=\"table-col col\">Header 4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n        <div class=\"table-row row\">\n          <div class=\"table-col col\">1</div>\n          <div class=\"table-col col\">2</div>\n          <div class=\"table-col col\">3</div>\n          <div class=\"table-col col\">4</div>\n        </div>\n\n      </div>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal-page.js.map

/***/ }),

/***/ 170:
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
    UserDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserDataProvider);
    return UserDataProvider;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_description_app_description__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_input_info_input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__results_results__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(115);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SSWhen App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Application Pages:</h1>\n  <ul>\n    <li><a href="#" on-click="goToLanding()">Landing Page</a></li>\n    <li><a href="#" on-click="goToAppDescription()">App Description Page</a></li>\n    <li><a href="#" on-click="goToInfoInput()">Info Input Page</a></li>\n    <li><a href="#" on-click="goToResults()">Results Page</a></li>\n    <li><a href="#" on-click="goToRegister()">Register Page</a></li>\n    <li><a href="#" on-click="goToDashboard()">Dashboard Page</a></li>\n    <li><a href="#" on-click="goToProfile()">Account Profile Page</a></li>\n    <li><a href="#" on-click="goToLogin()">Login Page</a></li>\n  </ul>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    DataTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-data-table',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/data-table/data-table.html"*/'  <ion-card>\n    <ion-card-content>\n      <ion-grid no-padding>\n      \n      <!-- HEADER -->\n      <ion-row style="border-bottom: 2px solid black;">\n        <ion-col col-4>Retirement <br/> Age </ion-col>\n        <ion-col col-4>Monthly <br/> Payout</ion-col>\n        <ion-col col-4>Cumulative <br> Payout</ion-col>\n      </ion-row>\n                \n          <!-- DATA  -->\n    \n      <ion-row *ngFor="let result of benefitData">\n        <ion-col col-4>{{ result.age }}</ion-col>\n        <ion-col col-4>{{ result.monthly }}</ion-col>\n        <ion-col col-4>{{ result.cumulative }}</ion-col>\n      </ion-row>\n\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/data-table/data-table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DataTablePage);
    return DataTablePage;
}());

//# sourceMappingURL=data-table.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_app_description_app_description__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_input_info_input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_results_results__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_calculations_calculations__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_email_modal_email_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_popover_page__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_modal_page__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_data_table_data_table__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_bar_chart_bar_chart__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_charts_charts__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
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
                __WEBPACK_IMPORTED_MODULE_24__components_charts_charts__["a" /* ChartsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/app-description/app-description.module#AppDescriptionPageModule', name: 'AppDescriptionPage', segment: 'app-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data-table/data-table.module#DataTablePageModule', name: 'DataTablePage', segment: 'data-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-modal/email-modal.module#EmailModalPageModule', name: 'EmailModalPage', segment: 'email-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-input/info-input.module#InfoInputPageModule', name: 'InfoInputPage', segment: 'info-input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_23__components_bar_chart_bar_chart__["a" /* BarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_charts_charts__["a" /* ChartsComponent */]
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
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(49);
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register Page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n    <h1 id ="logo">SSWHEN</h1>\n    \n    <!--IONIC CARD CONTAINER-->\n    <ion-card>\n      <ion-card-content>\n          <ion-list>\n              \n     <!--MARITAL STATUS-->\n            <ion-item>\n              <ion-label>Marital Status</ion-label>\n                 <ion-select [(ngModel)]="maritalStatus">\n                  <ion-option value="single">Single</ion-option>\n                  <ion-option value="married">Married</ion-option>\n                 </ion-select>\n             </ion-item>\n             \n     <!--TOTAL TAX CONTRIBUTION-->\n              <ion-item>\n                <ion-label floating>Total Tax Contribution</ion-label>\n                <ion-input type="text" [(ngModel)]="totalTaxContribution"></ion-input>\n              </ion-item>\n   \n     <!--EMAIL-->\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="text" [(ngModel)]="email"></ion-input>\n             </ion-item>\n             \n    <!--COFNIRM EMAIL-->\n              <ion-item>\n                <ion-label floating>Confirm Email</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n              \n    <!--PASSWORD-->\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" [(ngModel)]="password"></ion-input>\n              </ion-item>\n              \n    <!--CONFIRM PASSWORD-->\n              <ion-item>\n                <ion-label floating>Confirm Password</ion-label>\n                <ion-input type="password"></ion-input>\n              </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n\n<ion-row justify-content-center>\n    <!--ION BUTTON-->\n    <button ion-button (click)=\'toDashboard()\'>Register</button>\n    <!--change that so it routes to the next page-->\n</ion-row>\n\n\n\n\n<!--TEST NG MODEL DATA BINDING WILL DELETE-->\n<!--https://codeburst.io/angular-4-custom-validation-for-template-based-forms-b7dee9be48a6-->\n<!--<p>{{totalTaxContribution}}</p>-->\n<!--<p>{{maritalStatus}}</p>-->\n<!--<p>{{email}}</p>-->\n<!--<p>{{password}}</p>-->\n\n<!--in using col you will want to figure out the middle size for the 12 columns-->\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_description_app_description__ = __webpack_require__(61);
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
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/landing/landing.html"*/'<!--\n  Generated template for the LandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title >landingPage</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)=\'toRegister()\'>\n        Login\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n        <ion-row justify-content-center> \n           <ion-card class=\'landing-card\'>\n            \n               <ion-card-header text-center padding>\n                 <h1>SSWHEN</h1>\n               </ion-card-header>\n               \n               <ion-row padding> \n                   <img id=\'landing-img\' src="https://images.unsplash.com/photo-1465508421127-4cbee06c9e73?auto=format&fit=crop&w=1500&q=80" \n                   alt=\'retired people\' style="width:100%; height: 200px;">\n               </ion-row>\n               \n               \n              <ion-card-content>\n                   <p text-center> \n                  Let the Social Security Calculator help you figure out how much retirement income you’ll receive at different claiming ages so you can determine when you should claim Social Security. \n                   </p>\n              </ion-card-content>\n              \n              <ion-row justify-content-center padding> \n                  <button ion-button  (click)=\'toAppDescription()\'>Begin</button>\n              </ion-row>\n                \n           </ion-card>\n           \n        </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 220,
	"./af.js": 220,
	"./ar": 221,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 221,
	"./az": 228,
	"./az.js": 228,
	"./be": 229,
	"./be.js": 229,
	"./bg": 230,
	"./bg.js": 230,
	"./bn": 231,
	"./bn.js": 231,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 240,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 240,
	"./dv": 243,
	"./dv.js": 243,
	"./el": 244,
	"./el.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es.js": 251,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
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
webpackContext.id = 445;

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calculations_calculations__ = __webpack_require__(47);
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
    function BarChartComponent(calculations$) {
        this.calculations$ = calculations$;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 500, max: 2500 } }]
            }
        };
        this.barChartLegend = true;
        this.barChartType = 'bar';
        // this.barChartLabels = this.calculations$.retirementYears;
        // this.barChartData = [ {data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year'} ];
    }
    // events
    BarChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], BarChartComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], BarChartComponent.prototype, "yAxis", void 0);
    BarChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bar-chart',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/bar-chart/bar-chart.html"*/'<!--\n            [datasets]="barChartData"\n            [labels]="barChartLabels"\n-->\n\n<ion-card>\n    <ion-card-content>\n        <canvas baseChart\n            [datasets]="yAxis"\n            [labels]="xAxis"\n            [options]="barChartOptions"\n            [legend]="barChartLegend"\n            [chartType]="barChartType"\n            (chartHover)="chartHovered($event)"\n            (chartClick)="chartClicked($event)">\n        </canvas>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/bar-chart/bar-chart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_calculations_calculations__["a" /* CalculationsProvider */]])
    ], BarChartComponent);
    return BarChartComponent;
}());

//# sourceMappingURL=bar-chart.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartsComponent = (function () {
    function ChartsComponent(navCtrl, navParams, calculations$) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calculations$ = calculations$;
        // Chart component must obtain lifeExpectancy and discountRate from user input or from service (which will get it from user input)
        this.lifeExpectancy = 80;
        this.discountRate = 3.5;
        // Code for charts
        this.MonthlyPayout = [];
        this.CumulativeBenefits = [];
        this.pvOfTotalBenefits = [];
        this.RetirementYears = [];
        this.ChartOptions = {
            responsive: true,
            maintainAspectRatio: true,
            tooltips: { enabled: false },
            events: ['click'],
            legend: {
                display: true,
                labels: {
                    boxWidth: 0,
                    fontSize: 12,
                    fontStyle: 'bold',
                }
            },
            onClick: function (c, i) {
                var e = i[0];
                var x_value = this.data.labels[e._index];
                var y_value = Math.round(this.data.datasets[0].data[e._index]).toLocaleString();
                console.log('(age ' + x_value + ', $' + y_value + ' )');
                alert('(age: ' + x_value + ', benefit: $' + y_value + ' )');
            }
        };
        this.ChartColors = [{
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.ChartLegend = true;
        this.lineChartType = 'line';
        this.barChartType = 'bar';
    }
    ChartsComponent.prototype.ngOnInit = function () {
        // Execute the code in the service by passing in LE, interest, etc.
        this.calculations$.additiveBenefitsByRetirementYear(this.lifeExpectancy);
        var r_monthly = (this.discountRate / 12) / 100;
        this.calculations$.pvOfBenefitsByRetirementYear(this.lifeExpectancy, r_monthly);
        console.log("retirementYears", this.calculations$.retirementYears);
        console.log("accumulatedBenefits:", this.calculations$.accumulatedBenefits);
        console.log("pvOfBenefits", this.calculations$.pvOfBenefits);
        // Assign data to the chart axes
        this.MonthlyPayout.push({ data: this.calculations$.monthlyBenefits, label: 'Monthly Stipend per Retirement Year' });
        this.CumulativeBenefits.push({ data: this.calculations$.accumulatedBenefits, label: 'Cumulative Benefits per Retirement Year' });
        this.pvOfTotalBenefits.push({ data: this.calculations$.pvOfBenefits, label: 'Present Value of Total Benefits per Retirement Year' });
        this.RetirementYears = this.calculations$.retirementYears;
    };
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'charts',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/charts/charts.html"*/'<!-- This page plots all the graphs -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>ChartsPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p text-center>\n    Entering retirement at different ages between 62 .. 70 yeilds different monthly SS payments.\n  </p>\n\n    <ion-grid>\n    <ion-row>\n      <ion-col>\n          <div style="display: block">\n            <canvas baseChart \n              [datasets]="MonthlyPayout"\n              [labels]="RetirementYears"\n              [options]="ChartOptions"\n              [legend]="ChartLegend"\n              [chartType]="barChartType"></canvas>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p text-center>\n    The Cumulative Benefits represents the sum total of all the monthly payments paid over the course of retirement.\n  </p>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>  \n        <div style="display: block">\n          <canvas baseChart \n              [datasets]="CumulativeBenefits"\n              [labels]="RetirementYears"\n              [options]="ChartOptions"\n              [colors]="ChartColors"\n              [legend]="ChartLegend"\n              [chartType]="lineChartType"></canvas>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <div style="display: block">\n            <canvas baseChart \n              [datasets]="CumulativeBenefits"\n              [labels]="RetirementYears"\n              [options]="ChartOptions"\n              [legend]="ChartLegend"\n              [chartType]="barChartType"></canvas>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p text-center>\n    The present value, or present worth, of the retirement package represents the amount of money which if invested (just prior to\n    retirement entry at some interest rate i) will match the monthly dividends from SSA for retiring that year. The higher\n    the present value, the better (for a given interest rate and retirement term, PV is proportional to monthly payments). \n    The resulting present value will be less than the cumulative total of all the future payments because of discounting \n    (time value of money or invested money earning money). The interest rate, or growth rate of the investment, can be\n    estimated according to risk level to give a rate reasonably above inflation. \n  </p>\n\n    <ion-grid>\n    <ion-row>\n      <ion-col>   \n        <div style="display: block">\n            <canvas baseChart \n              [datasets]="pvOfTotalBenefits"\n              [labels]="RetirementYears"\n              [options]="ChartOptions"\n              [colors]="ChartColors"\n              [legend]="ChartLegend"\n              [chartType]="lineChartType"></canvas>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <div style="display: block">\n            <canvas baseChart \n              [datasets]="pvOfTotalBenefits"\n              [labels]="RetirementYears"\n              [options]="ChartOptions"\n              [legend]="ChartLegend"\n              [chartType]="barChartType"></canvas>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/charts/charts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__["a" /* CalculationsProvider */]])
    ], ChartsComponent);
    return ChartsComponent;
}());

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationsProvider; });
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

var CalculationsProvider = (function () {
    function CalculationsProvider() {
        this.retirementYears = [62, 63, 64, 65, 66, 67, 68, 69, 70]; // x-axis
        // monthlyBenefits[] need to be computed from user input FRA monthly benefit
        this.monthlyBenefits = [1314, 1421.4, 1528.8, 1636.2, 1743.6, 1851, 2016.33, 2181.67, 2347]; // y-axis
        this.accumulatedBenefits = []; // y-axis
        this.pvOfBenefits = []; // y-axis
    }
    CalculationsProvider.prototype.additiveBenefitsByRetirementYear = function (lifeExpectancy) {
        for (var i = 0; i < this.retirementYears.length; i++) {
            this.accumulatedBenefits.push((lifeExpectancy - this.retirementYears[i]) * (this.monthlyBenefits[i] * 12));
        }
    };
    CalculationsProvider.prototype.pvOfBenefitsByRetirementYear = function (lifeExpectancy, r_monthly) {
        for (var i = 0; i < this.retirementYears.length; i++) {
            var n = (lifeExpectancy - this.retirementYears[i]) * 12;
            this.pvOfBenefits.push((this.monthlyBenefits[i]) * ((1 - Math.pow((1 + r_monthly), (-n))) / r_monthly));
        }
    };
    CalculationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CalculationsProvider);
    return CalculationsProvider;
}());

//# sourceMappingURL=calculations.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_page__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_page__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calculations_calculations__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, popoverCtrl, modalCtrl, alertCtrl, calculations$) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.calculations$ = calculations$;
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
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/'\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n<!--Some more details can be added here-->\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid no-padding>\n    <ion-row align-items-center padding-horizontal>\n      <ion-col align-self-start>\n        <h1>SSWhen</h1>\n      </ion-col>\n      <ion-col align-self-end>\n        <button ion-button float-end color="light" icon-left (click)="presentPopover($event)">\n          <ion-icon name="person"></ion-icon>\n          <ion-icon md="md-arrow-dropdown"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            <ion-row align-items-center>\n              <ion-col>\n                <h2>User Information</h2>\n              </ion-col>\n              <ion-col>\n                <button style="vertical-align: top;" class="btn-smaller" ion-button icon-only float-end color="dark" on-click="isEditable()">\n                  <ion-icon md="md-create"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>Life Expectancy:</strong></div>\n                <div>62</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Life Expectancy</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col align-items-end>\n                <div><strong>FRA Age:</strong></div>\n                <div>65</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Age</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>FRA Benefit Amount:</strong></div>\n                <div>$1,080</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Benefit Amount</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-center>\n              <ion-col>\n                <div><strong>Total Tax Contribution:</strong></div>\n                <div>$40,110</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Total Tax Contribution</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            <div>\n              <ion-segment [(ngModel)]="data">\n                <ion-segment-button value="monthly">\n                  Monthly\n                </ion-segment-button>\n                <ion-segment-button value="cumulative">\n                  Cumulative\n                </ion-segment-button>\n                <ion-segment-button value="other">\n                  Other\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n\n            <div [ngSwitch]="data">\n              <ion-list *ngSwitchCase="\'monthly\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p>Monthly Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'cumulative\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p>Cumulative Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'other\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p>Other Contributions</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <img src="../../assets/imgs/logo.png">\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--<ion-grid>-->\n\n  <!--  <dropdown-menu>-->\n  <!--    Account-->\n  <!--    Logout-->\n  <!--  </dropdown-menu>-->\n\n  <!--  <ion-card>-->\n  <!--    User Info Card-->\n  <!--    Edit link/button-->\n  <!--  </ion-card>-->\n\n  <!--  <ion-segments>-->\n\n  <!--    <ion-segment>-->\n  <!--      Monthly Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n  <!--    <ion-segment>-->\n  <!--      Cumulative Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n\n  <!--  </ion-segments>-->\n\n  <!--</ion-grid>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_calculations_calculations__["a" /* CalculationsProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_input_info_input__ = __webpack_require__(62);
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
    AppDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-app-description',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/app-description/app-description.html"*/'<!--\n  Generated template for the AppDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Introduction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-grid>\n    \n    <h3 style=text-align:center>SSWHEN Social Security Calculator</h3>\n    \n    <ion-card>\n      \n      <ion-card-header>\n        Before we begin...\n      </ion-card-header>\n      \n      <ion-card-content>\n        This site will give you an estimate of your Social Security benefit options, based on the age that you elect to begin\n        receiving benefits.  \n        <br>\n        <br>\n        To proceed, you will need a copy of your Social Security statement OR an estimate of your Full Retirement Benefit . \n        <button ion-button icon-only small clear on-click="benefitInfoAlert()"  class="customBtn">\n          <ion-icon name="information-circle"></ion-icon>\n        </button>\n        <br>\n        <br>\n        Get a copy of your Social Security statement by logging into the Social Security Administration home page \n        <a target="_blank" href="https://www.ssa.gov/myaccount/">here</a>.\n        <br>\n        <br>\n        Get it an estimate of your Full Retirement Benefit  \n        <a target="_blank" href="https://www.ssa.gov/benefits/retirement/estimator.html">here</a>.\n      </ion-card-content>\n    </ion-card>\n    \n    <button ion-button on-click="goToInfoInput()">Begin</button>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/app-description/app-description.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AppDescriptionPage);
    return AppDescriptionPage;
}());

//# sourceMappingURL=app-description.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(170);
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
    InfoInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-info-input',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/'\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>infoInputPage</ion-title>\n  </ion-navbar>\n  \n  <ion-grid>\n  <ion-row align-items-center>\n    <ion-col style = "margin: 0 auto">\n      <img src="https://preview.ibb.co/c39yyb/Senior_Security.jpg">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center> <ion-icon name="arrow-round-down"></ion-icon> Please Enter Your Information  <ion-icon name="arrow-round-down"></ion-icon> </h3>\n  \n  <h1>  {{ user$.start}} </h1>\n  \n    <form (ngSubmit)="logForm()">\n      <ion-list>\n        \n        <ion-item text-center>\n          <ion-label floating>Date of Birth</ion-label>\n          <ion-datetime displayFormat="MM/YYYY" [(ngModel)]="myDate" name="Date"></ion-datetime>\n        </ion-item>\n        \n        <ion-item text-center>\n          <ion-label floating>Gender</ion-label>\n          <ion-select [(ngModel)]="gender" name = "gender">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item text-center>\n          <ion-label floating>Full Retirement Benefit</ion-label>\n          <ion-input type="number" [(ngModel)]="monthlyAtFRA" name="FRA" text-center></ion-input>\n        </ion-item>\n        \n      </ion-list>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col width-4>\n            <button ion-button type="submit" block>Submit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], InfoInputPage);
    return InfoInputPage;
}());

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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_modal_email_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_calculations_calculations__ = __webpack_require__(47);
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
    function ResultsPage(navCtrl, alertCtrl, navParams, modalCtrl, calculations$) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.calculations$ = calculations$;
        this.horizontalAxis = [];
        this.verticalAxis = [];
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
    ResultsPage.prototype.ngOnInit = function () {
        this.horizontalAxis = this.calculations$.retirementYears;
        this.verticalAxis = [{ data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year' }];
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-results',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    \n    <!--  Before Segment -->\n    <ion-row>\n      <ion-col col-6 offset-3>\n        <h2 style="text-align:center;">SSWHEN</h2>\n      </ion-col>\n    </ion-row>\n    \n    <!-- Segments  -->\n    <div>\n      <ion-segment [(ngModel)]="results">\n        <ion-segment-button value="graph">\n          Graph\n        </ion-segment-button>\n        <ion-segment-button value="chart">\n          Chart\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <div [ngSwitch]="results">\n      <div *ngSwitchCase="\'graph\'">\n          <bar-chart \n            [xAxis]="horizontalAxis" \n            [yAxis]="verticalAxis"\n          ></bar-chart>\n      </div>\n      <div *ngSwitchCase="\'chart\'">\n          <page-data-table></page-data-table>\n      </div>\n    </div>\n    \n<!--      Bottom Buttons   -->\n<!--     <ion-row> -->\n<!--       <ion-col col-6 offset-3> -->\n<!--           <button ion-button full (click)="openEmailModal()">Email Results</button> -->\n<!--       </ion-col> -->\n<!--     </ion-row> -->\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n    \n    <!--Register-->\n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n    \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_calculations_calculations__["a" /* CalculationsProvider */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Back</ion-title> \n    <!--takes the user back to the register page? -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content center text-center>\n  <ion-grid>\n        <ion-row center>\n              <ion-col>\n                <h1 no-padding no-margin>SSWHEN</h1>\n                <h1 no-padding no-margin>Profile Page</h1>\n                \n                <img src=\'http://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png\' alt="Logo Image">\n                    \n                <h3 no-padding no-margin></h3>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Current Email Address: \n                  </ion-card-header>\n                  <ion-card-content>\n                      <ion-icon name="create" float-right></ion-icon>\n                   <ion-input \n                   type="email" \n                    name="email"\n                    value=""\n                    ngModel\n                    placeholder="example@gmail.com"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                \n                <ion-card>\n                  <ion-card-header>\n                    Password: \n                  </ion-card-header>\n                  <ion-card-content>\n                     <ion-icon name="create" float-right></ion-icon>\n                    <ion-input \n                   type="password" \n                    name="Password"\n                    value=""\n                    ngModel\n                    [minlength]="6"\n                    placeholder="••••••••••"></ion-input>\n                  </ion-card-content>\n                </ion-card>\n                \n                 <!-- <button ion-button -->\n                 <!--type="submit"-->\n                 <!-- > -->\n                  <!--(click)=""-->\n                 <!--   Password:   <ion-icon name="create"></ion-icon></button> -->\n                 \n                <!--<form -->\n                <!--#f="ngForm" (ngSubmit)="onEdit(f)">-->\n                  <!--^added #f as a local reference to the form-->\n                <!--  <ion-item>-->\n                <!--    <ion-label -->\n                <!--    color="primary" -->\n                <!--    floating>Change Email</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="email" -->\n                <!--    name="email"-->\n                <!--    ngModel-->\n                <!--    placeholder=""></ion-input>-->\n                <!--  </ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating>Confirm Email</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="email" -->\n                <!--    name="email"-->\n                <!--    ngModel-->\n                <!--    placeholder=""></ion-input>-->\n                <!--</ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating>Password (Must be at least 6 characters)</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="password" -->\n                <!--    name="Password"-->\n                <!--    value=""-->\n                <!--    ngModel-->\n                <!--    [minlength]="6"></ion-input>-->\n                <!--</ion-item>-->\n                \n                <!--<ion-item>-->\n                <!--    <ion-label color="primary" floating> Confirm Password</ion-label>-->\n                <!--    <ion-input -->\n                <!--    type="password" -->\n                <!--    name="password"-->\n                <!--    value=""-->\n                <!--    ngModel-->\n                <!--    [minlength]="6"></ion-input>-->\n                <!--</ion-item>-->\n                            \n        <!--This button will link to next page:-->\n        <button ion-button \n        (click)="popView()"\n        type="submit"\n         > \n        <!--[disabled]="!f.valid" to go in after submit-->\n        <!--^propery binding gets a reference to the form from above. Action: disable this if the form is not valid-->\n          Confirm Edit</button> \n\n                <h1 no-padding no-margin></h1>\n                \n              <!--</form>  -->\n              </ion-col>\n        </ion-row>\n  </ion-grid>  \n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map