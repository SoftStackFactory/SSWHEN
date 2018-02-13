webpackJsonp([10],{

/***/ 118:
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

/***/ 119:
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

/***/ 130:
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
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/app-description/app-description.module": [
		474,
		9
	],
	"../pages/dashboard/dashboard.module": [
		475,
		8
	],
	"../pages/email-modal/email-modal.module": [
		476,
		7
	],
	"../pages/history/history.module": [
		477,
		6
	],
	"../pages/info-input/info-input.module": [
		478,
		5
	],
	"../pages/landing/landing.module": [
		479,
		4
	],
	"../pages/login/login.module": [
		480,
		3
	],
	"../pages/profile/profile.module": [
		481,
		2
	],
	"../pages/register/register.module": [
		483,
		1
	],
	"../pages/results/results.module": [
		482,
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
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_history__ = __webpack_require__(65);
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
    PopoverPage.prototype.goToHistory = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__history_history__["a" /* HistoryPage */]);
    };
    PopoverPage.prototype.goToLanding = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__landing_landing__["a" /* LandingPage */]);
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-grid class=\"popover-page\" no-padding>\n      <ion-row>\n        <ion-col class=\"menu-full-width\" col-auto align-self-end>\n          <button ion-item on-click=\"goToProfile()\" padding-horizontal>\n            Edit Account\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"menu-full-width\" col-auto align-self-end>\n          <button ion-item on-click=\"goToHistory()\" padding-horizontal>\n            History\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"menu-full-width menu-last\" col-auto align-self-end>\n          <button ion-item on-click=\"goToLanding()\" padding-horizontal>\n            Logout\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover-page.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalHistoryComponent; });
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
 * Generated class for the ModalHistoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ModalHistoryComponent = (function () {
    function ModalHistoryComponent(navParams, viewCtrl, alertCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.data = 'monthly';
    }
    ModalHistoryComponent.prototype.ngOnInit = function () {
    };
    ModalHistoryComponent.prototype.showPrompt = function () {
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
    ModalHistoryComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-history',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/modal-history/modal-history.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title> Modal Popup</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()"><span ion-text color="primary" showWhen="ios, browser">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-grid no-padding>\n  <ion-row align-items-center no-padding>\n    <ion-col>\n      <ion-card>\n        <ion-card-content padding-horizontal>\n          <div>\n            <ion-segment [(ngModel)]="data">\n              <ion-segment-button value="monthly">\n                Monthly\n              </ion-segment-button>\n              <ion-segment-button value="cumulative">\n                Cumulative\n              </ion-segment-button>\n              <ion-segment-button value="other">\n                Other\n              </ion-segment-button>\n            </ion-segment>\n          </div>\n\n          <div [ngSwitch]="data">\n            <ion-list *ngSwitchCase="\'monthly\'">\n              <ion-row padding-top>\n                <ion-col>\n                  <p #changeText>Monthly Contributions</p>\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding>\n                <ion-col>\n                  <charts></charts>\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding>\n                <ion-col>\n                  <div class="table">\n                    <div class="table-row row header">\n                      <div class="table-col col">Header 1</div>\n                      <div class="table-col col">Header 2</div>\n                      <div class="table-col col">Header 3</div>\n                      <div class="table-col col">Header 4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'cumulative\'">\n              <ion-row padding-top>\n                <ion-col>\n                  <p #changeText>Cumulative Contributions</p>\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding>\n                <ion-col>\n                  <charts></charts>\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding>\n                <ion-col>\n                  <div class="table">\n                    <div class="table-row row header">\n                      <div class="table-col col">Header 1</div>\n                      <div class="table-col col">Header 2</div>\n                      <div class="table-col col">Header 3</div>\n                      <div class="table-col col">Header 4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'other\'">\n              <ion-row padding-top>\n                <ion-col>\n                  <p #changeText>Other Contributions</p>\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding>\n                <ion-col>\n                  <img src="../../assets/imgs/logo.png">\n                </ion-col>\n              </ion-row>\n              <ion-row no-padding>\n                <ion-col>\n                  <div class="table">\n                    <div class="table-row row header">\n                      <div class="table-col col">Header 1</div>\n                      <div class="table-col col">Header 2</div>\n                      <div class="table-col col">Header 3</div>\n                      <div class="table-col col">Header 4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                    <div class="table-row row">\n                      <div class="table-col col">1</div>\n                      <div class="table-col col">2</div>\n                      <div class="table-col col">3</div>\n                      <div class="table-col col">4</div>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row padding-horizontal>\n    <ion-col>\n      <button ion-button full (click)="showPrompt()" #changeText>Email Result</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/modal-history/modal-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModalHistoryComponent);
    return ModalHistoryComponent;
}());

//# sourceMappingURL=modal-history.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDashboardComponent; });
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



var ModalDashboardComponent = (function () {
    function ModalDashboardComponent(navParams, viewCtrl, calculations$) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.calculations$ = calculations$;
        this.retYears = [];
        this.tableMonthly = [];
        this.totalAccumulated = [];
        this.chartType = this.navParams.get('type');
    }
    ModalDashboardComponent.prototype.ngOnInit = function () {
        this.retYears = this.calculations$.retirementYears;
        this.tableMonthly = this.calculations$.monthlyArray;
        this.totalAccumulated = this.calculations$.cumulativeArray;
    };
    ModalDashboardComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-dashboard',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/modal-dashboard/modal-dashboard.html"*/'\n<div *ngIf="chartType == monthly">\n  \n    <!-- HEADER -->\n    <ion-row style="border-bottom: 2px solid black;">\n    <ion-col col-6 text-center>Retirement <br/> Age </ion-col>\n    <ion-col col-6 text-center>Monthly <br/> Payout</ion-col>\n    </ion-row>\n      \n    <page-data-table \n      [leftCol]="retYears"\n      [rightCol]="tableMonthly"\n    ></page-data-table>\n    \n</div>\n\n\n<div *ngIf="chartType == cumulative">\n  \n    <!-- HEADER -->\n    <ion-row style="border-bottom: 2px solid black;">\n    <ion-col col-6 text-center>Retirement <br/> Age </ion-col>\n    <ion-col col-6 text-center>Cumulative <br/> Payout</ion-col>\n    </ion-row>\n      \n    <page-data-table \n      [leftCol]="retYears"\n      [rightCol]="totalAccumulated"\n    ></page-data-table>\n    \n</div>\n\n<!--<ion-header>-->\n<!--  <ion-toolbar>-->\n<!--    <ion-title>Modal Popup</ion-title>-->\n<!--    <ion-buttons start>-->\n<!--      <button ion-button (click)="dismiss()"><span ion-text color="primary" showWhen="ios, browser">Cancel</span>-->\n<!--        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>-->\n<!--      </button>-->\n<!--    </ion-buttons>-->\n<!--  </ion-toolbar>-->\n<!--</ion-header>-->\n<!--<ion-content>-->\n<!--  <ion-grid no-padding>-->\n<!--    <ion-row align-items-center no-padding>-->\n<!--      <ion-col>-->\n<!--        <ion-card>-->\n<!--          <ion-card-content padding-horizontal>-->\n<!--            <ion-row>-->\n<!--              <ion-col>-->\n<!--                <h2>Data Table</h2>-->\n<!--              </ion-col>-->\n<!--            </ion-row>-->\n<!--            <ion-row>-->\n<!--              <ion-col>-->\n<!--                <div class="table">-->\n<!--                  <div class="table-row row header">-->\n<!--                    <div class="table-col col">Header 1</div>-->\n<!--                    <div class="table-col col">Header 2</div>-->\n<!--                    <div class="table-col col">Header 3</div>-->\n<!--                    <div class="table-col col">Header 4</div>-->\n<!--                  </div>-->\n<!--                  <div class="table-row row">-->\n<!--                    <div class="table-col col">1</div>-->\n<!--                    <div class="table-col col">2</div>-->\n<!--                    <div class="table-col col">3</div>-->\n<!--                    <div class="table-col col">4</div>-->\n<!--                  </div>-->\n<!--                  <div class="table-row row">-->\n<!--                    <div class="table-col col">1</div>-->\n<!--                    <div class="table-col col">2</div>-->\n<!--                    <div class="table-col col">3</div>-->\n<!--                    <div class="table-col col">4</div>-->\n<!--                  </div>-->\n<!--                  <div class="table-row row">-->\n<!--                    <div class="table-col col">1</div>-->\n<!--                    <div class="table-col col">2</div>-->\n<!--                    <div class="table-col col">3</div>-->\n<!--                    <div class="table-col col">4</div>-->\n<!--                  </div>-->\n<!--                </div>-->\n<!--              </ion-col>-->\n<!--            </ion-row>-->\n<!--          </ion-card-content>-->\n<!--        </ion-card>-->\n<!--      </ion-col>-->\n<!--    </ion-row>-->\n<!--  </ion-grid>-->\n<!--</ion-content>-->\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/modal-dashboard/modal-dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__["a" /* CalculationsProvider */]])
    ], ModalDashboardComponent);
    return ModalDashboardComponent;
}());

//# sourceMappingURL=modal-dashboard.js.map

/***/ }),

/***/ 218:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__history_history__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(119);
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
    HomePage.prototype.goToHistory = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__history_history__["a" /* HistoryPage */]);
    };
    HomePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SSWhen App\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Application Pages:</h1>\n  <ul>\n    <li><a href="#" on-click="goToLanding()">Landing Page</a></li>\n    <li><a href="#" on-click="goToAppDescription()">App Description Page</a></li>\n    <li><a href="#" on-click="goToInfoInput()">Info Input Page</a></li>\n    <li><a href="#" on-click="goToResults()">Results Page</a></li>\n    <li><a href="#" on-click="goToRegister()">Register Page</a></li>\n    <li><a href="#" on-click="goToDashboard()">Dashboard Page</a></li>\n    <li><a href="#" on-click="goToProfile()">Account Profile Page</a></li>\n    <li><a href="#" on-click="goToHistory()">History Page</a></li>\n    <li><a href="#" on-click="goToLogin()">Login Page</a></li>\n  </ul>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_app_description_app_description__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_input_info_input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_results_results__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_history_history__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_data_user_data__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_calculations_calculations__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_email_modal_email_modal__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_popover_page__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_data_table_data_table__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_charts_charts__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_langauge_popover_langauge_popover__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_mock_data_mock_data__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_modal_dashboard_modal_dashboard__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_modal_history_modal_history__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(95);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_email_modal_email_modal__["a" /* EmailModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_popover_page__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_modal_dashboard_modal_dashboard__["a" /* ModalDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_data_table_data_table__["a" /* DataTablePage */],
                __WEBPACK_IMPORTED_MODULE_23__components_charts_charts__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_langauge_popover_langauge_popover__["a" /* LangaugePopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_modal_dashboard_modal_dashboard__["a" /* ModalDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_modal_history_modal_history__["a" /* ModalHistoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/app-description/app-description.module#AppDescriptionPageModule', name: 'AppDescriptionPage', segment: 'app-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-modal/email-modal.module#EmailModalPageModule', name: 'EmailModalPage', segment: 'email-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-input/info-input.module#InfoInputPageModule', name: 'InfoInputPage', segment: 'info-input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_email_modal_email_modal__["a" /* EmailModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_popover_page__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_modal_dashboard_modal_dashboard__["a" /* ModalDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_charts_charts__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_langauge_popover_langauge_popover__["a" /* LangaugePopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_modal_dashboard_modal_dashboard__["a" /* ModalDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_modal_history_modal_history__["a" /* ModalHistoryComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_calculations_calculations__["a" /* CalculationsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_mock_data_mock_data__["a" /* MockDataProvider */]
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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(218);
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

/***/ 418:
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

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
// Re-usable agnostic table. x & y data fed in by parent page
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataTablePage = (function () {
    function DataTablePage() {
        this.benefitData = [];
    }
    DataTablePage.prototype.ngOnInit = function () {
        for (var i = 0; i < this.leftCol.length; i++) {
            var item = {
                columnOne: this.leftCol[i],
                columnTwo: this.rightCol[i],
            };
            this.benefitData.push(item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DataTablePage.prototype, "leftCol", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DataTablePage.prototype, "rightCol", void 0);
    DataTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-data-table',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/data-table/data-table.html"*/'<ion-card>\n  <ion-card-content>\n    <ion-grid no-padding>\n\n      <ion-row *ngFor="let result of benefitData">\n        <ion-col col-6 text-center>{{ result.columnOne }}</ion-col>\n        <ion-col col-6 text-center>{{ result.columnTwo }}</ion-col>\n      </ion-row>\n \n    </ion-grid> \n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/data-table/data-table.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], DataTablePage);
    return DataTablePage;
}());

//# sourceMappingURL=data-table.js.map

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 224,
	"./af.js": 224,
	"./ar": 225,
	"./ar-dz": 226,
	"./ar-dz.js": 226,
	"./ar-kw": 227,
	"./ar-kw.js": 227,
	"./ar-ly": 228,
	"./ar-ly.js": 228,
	"./ar-ma": 229,
	"./ar-ma.js": 229,
	"./ar-sa": 230,
	"./ar-sa.js": 230,
	"./ar-tn": 231,
	"./ar-tn.js": 231,
	"./ar.js": 225,
	"./az": 232,
	"./az.js": 232,
	"./be": 233,
	"./be.js": 233,
	"./bg": 234,
	"./bg.js": 234,
	"./bn": 235,
	"./bn.js": 235,
	"./bo": 236,
	"./bo.js": 236,
	"./br": 237,
	"./br.js": 237,
	"./bs": 238,
	"./bs.js": 238,
	"./ca": 239,
	"./ca.js": 239,
	"./cs": 240,
	"./cs.js": 240,
	"./cv": 241,
	"./cv.js": 241,
	"./cy": 242,
	"./cy.js": 242,
	"./da": 243,
	"./da.js": 243,
	"./de": 244,
	"./de-at": 245,
	"./de-at.js": 245,
	"./de-ch": 246,
	"./de-ch.js": 246,
	"./de.js": 244,
	"./dv": 247,
	"./dv.js": 247,
	"./el": 248,
	"./el.js": 248,
	"./en-au": 249,
	"./en-au.js": 249,
	"./en-ca": 250,
	"./en-ca.js": 250,
	"./en-gb": 251,
	"./en-gb.js": 251,
	"./en-ie": 252,
	"./en-ie.js": 252,
	"./en-nz": 253,
	"./en-nz.js": 253,
	"./eo": 254,
	"./eo.js": 254,
	"./es": 255,
	"./es-do": 256,
	"./es-do.js": 256,
	"./es.js": 255,
	"./et": 257,
	"./et.js": 257,
	"./eu": 258,
	"./eu.js": 258,
	"./fa": 259,
	"./fa.js": 259,
	"./fi": 260,
	"./fi.js": 260,
	"./fo": 261,
	"./fo.js": 261,
	"./fr": 262,
	"./fr-ca": 263,
	"./fr-ca.js": 263,
	"./fr-ch": 264,
	"./fr-ch.js": 264,
	"./fr.js": 262,
	"./fy": 265,
	"./fy.js": 265,
	"./gd": 266,
	"./gd.js": 266,
	"./gl": 267,
	"./gl.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./he": 269,
	"./he.js": 269,
	"./hi": 270,
	"./hi.js": 270,
	"./hr": 271,
	"./hr.js": 271,
	"./hu": 272,
	"./hu.js": 272,
	"./hy-am": 273,
	"./hy-am.js": 273,
	"./id": 274,
	"./id.js": 274,
	"./is": 275,
	"./is.js": 275,
	"./it": 276,
	"./it.js": 276,
	"./ja": 277,
	"./ja.js": 277,
	"./jv": 278,
	"./jv.js": 278,
	"./ka": 279,
	"./ka.js": 279,
	"./kk": 280,
	"./kk.js": 280,
	"./km": 281,
	"./km.js": 281,
	"./kn": 282,
	"./kn.js": 282,
	"./ko": 283,
	"./ko.js": 283,
	"./ky": 284,
	"./ky.js": 284,
	"./lb": 285,
	"./lb.js": 285,
	"./lo": 286,
	"./lo.js": 286,
	"./lt": 287,
	"./lt.js": 287,
	"./lv": 288,
	"./lv.js": 288,
	"./me": 289,
	"./me.js": 289,
	"./mi": 290,
	"./mi.js": 290,
	"./mk": 291,
	"./mk.js": 291,
	"./ml": 292,
	"./ml.js": 292,
	"./mr": 293,
	"./mr.js": 293,
	"./ms": 294,
	"./ms-my": 295,
	"./ms-my.js": 295,
	"./ms.js": 294,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
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
webpackContext.id = 452;

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
        this.retirementYears = [62, 63, 64, 65, 66, 67, 68, 69, 70];
        this.discountRate = 3.5;
        this.monthlyArray = [];
        this.cumulativeArray = [];
        this.pvOfBenefits = [];
        this.tableData = [];
    }
    CalculationsProvider.prototype.monthlyBenefit = function (pia, gender, dob) {
        this.FRAbenefitAmount = pia;
        //set average life expectancy based on gender
        if (gender === "m") {
            //male life expectancy = 83 years = 996 months
            this.lifeExpect = 996;
        }
        else {
            //female life expectancy = 85.6 years = 1027 months
            this.lifeExpect = 1027;
        }
        //Manipulate user input to extract year of birth
        var dateString = dob;
        var yearString = dateString.substr(0, 4);
        var dobYear = Number(yearString);
        //Logic to determine full retirement age.  All fulRetAge values in months.
        if (dobYear <= 1937) {
            this.fullRetAge = 780;
        }
        else if (dobYear > 1937 && dobYear < 1943) {
            this.fullRetAge = 780 + ((dobYear - 1937) * 2);
        }
        else if (dobYear >= 1943 && dobYear < 1955) {
            this.fullRetAge = 792;
        }
        else if (dobYear >= 1955 && dobYear < 1960) {
            this.fullRetAge = 792 + ((dobYear - 1954) * 2);
        }
        else {
            this.fullRetAge = 804;
        }
        //logic to calculate array of benefit amounts 
        for (var targetAge = 744; targetAge <= 840; targetAge += 12) {
            if (targetAge <= this.fullRetAge) {
                var monthDelta = this.fullRetAge - targetAge;
                if (monthDelta <= 36) {
                    this.benefit = Math.round((1 - (monthDelta * (5 / 9) * 0.01)) * pia);
                }
                else {
                    //0.2 = reduction for first 36 months
                    this.benefit = Math.round((1 - (((monthDelta - 36) * (5 / 12) * 0.01) + 0.2)) * pia);
                }
            }
            else {
                var monthDelta = targetAge - this.fullRetAge;
                var monthlyCredit = 0.08 / 12;
                var creditFactor = 1 + (monthDelta * monthlyCredit);
                this.benefit = Math.round(pia * creditFactor);
            }
            //calculate cumulative total benefit based on life expectancy
            this.cumBenefit = this.benefit * (this.lifeExpect - targetAge);
            //push benefit numbers into separate arrays for use in charts
            this.monthlyArray.push(this.benefit);
            this.cumulativeArray.push(this.cumBenefit);
        }
        // logic to calculate present value of benefits per retirement age. Discount rate is assumed at 3.5%
        var r_monthly = (this.discountRate / 12) / 100;
        for (var i = 0; i < this.retirementYears.length; i++) {
            var n = (this.lifeExpect / 12 - this.retirementYears[i]) * 12;
            this.pvOfBenefits.push(Math.round((this.monthlyArray[i]) * ((1 - Math.pow((1 + r_monthly), (-n))) / r_monthly)));
        }
        // logic to create rows for table
        for (var i = 0; i < this.retirementYears.length; i++) {
            var item = {
                retYear: this.retirementYears[i],
                monthlyPay: this.monthlyArray[i],
                cumulativePay: this.cumulativeArray[i]
            };
            this.tableData.push(item);
        }
        console.log("tableData: ", this.tableData);
        this.benefitData = {
            retYears: this.retirementYears,
            monthly: this.monthlyArray,
            cumulative: this.cumulativeArray,
            pv: this.pvOfBenefits
        };
        console.log("Full Retirement Age: ", Math.round(this.fullRetAge / 12));
        console.log("Average life expectancy for this gender " + this.lifeExpect / 12 + " years");
        console.log("Monthly Benefits per Retirement Year", this.monthlyArray);
        console.log("Total Cumulative Benefits per Retirement Year", this.cumulativeArray);
        console.log("Present Value of Total Cumulative Benefits per Retirement Year", this.pvOfBenefits);
        console.log("benefitData:", this.benefitData);
        //empty calculation arrays
        // this.monthlyArray = [];
        // this.cumulativeArray =[];
        // this.pvOfBenefits = [];
        return (this.benefitData);
    };
    CalculationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CalculationsProvider);
    return CalculationsProvider;
}());

//# sourceMappingURL=calculations.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
// Re-usable agnostic chart. chart type, x & y axis data fed in by parent page
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = (function () {
    function ChartComponent() {
        this.ChartOptions = {
            responsive: true,
            maintainAspectRatio: true,
            scaleShowVerticalLines: false,
            tooltips: { enabled: false },
            events: ['click'],
            legend: {
                display: false,
                labels: {
                    boxWidth: 0,
                    fontSize: 12,
                    fontStyle: 'bold',
                }
            }
        };
        this.ChartLegend = false;
        this.ChartColors = [{
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
    }
    // events
    ChartComponent.prototype.chartClicked = function (e) {
        if (e.active.length > 0) {
            this.retirementAge = e.active[0]._chart.data.labels[e.active[0]._index];
            this.payout = e.active[0]._chart.data.datasets[0].data[e.active[0]._index];
            console.log("You clicked a Bar");
            // console.log("At retirementAge: ", this.retirementAge);
            // console.log("The payout is: ", this.payout);
        }
        else {
            console.log("You didn't click on a Bar");
        }
        console.log(e);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartComponent.prototype, "ChartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartComponent.prototype, "yAxis", void 0);
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'charts',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/charts/charts.html"*/'\n<ion-row no-padding *ngIf="yAxis">\n    <ion-col>\n        <canvas baseChart\n            [datasets]="yAxis"\n            [labels]="xAxis"\n            [options]="ChartOptions"\n            [legend]="ChartLegend"\n            [chartType]="ChartType"\n        >\n        </canvas>\n    </ion-col>\n</ion-row>\n\n<!--I\'m sorry, but I couldn\'t get this feature to work upon implementing parent-child communication-->\n\n<!--<ion-row>-->\n<!--    <ion-col style="text-align: center;">-->\n<!--        Retirement Age-->\n<!--    </ion-col>-->\n<!--    <ion-col style="text-align: center;">-->\n<!--        Payout-->\n<!--    </ion-col>-->\n<!--</ion-row>-->\n<!--<ion-row>-->\n<!--    <ion-col style="text-align: center;">-->\n<!--        {{ this.retirementAge }}-->\n<!--    </ion-col>-->\n<!--    <ion-col style="text-align: center;">-->\n<!--        {{ this.payout }}-->\n<!--    </ion-col>-->\n<!--</ion-row>-->\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/charts/charts.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mockData_mockUsers__ = __webpack_require__(473);


var MockDataProvider = (function () {
    function MockDataProvider() {
    }
    // getData(): SSUser[] {
    // return mockUsers;
    // }
    // method to return an Observable. This is needed when making requests to a remote server
    MockDataProvider.prototype.getData = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_1__models_mockData_mockUsers__["a" /* mockUsers */]);
    };
    return MockDataProvider;
}());

//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mockUsers; });
//  mockUsers is an array of SSUser{}
var mockUsers = [
    {
        email: 'SSF@project.com',
        password: 'ABC',
        dateOfBirth: '01/01/00',
        gender: 'male',
        FRAbenefit: 1851,
        totalContribution: 133917,
        isMarried: false,
    },
    {
        email: 'collab@SSF.com',
        password: 'abraCadabra',
        dateOfBirth: '06/06/06',
        gender: 'female',
        FRAbenefit: 666,
        totalContribution: 0,
        isMarried: true,
    },
    {
        email: 'coder@AOL.com',
        password: 'steveJOBS',
        dateOfBirth: '10/10/1010',
        gender: 'male',
        FRAbenefit: 1,
        totalContribution: 9999,
        isMarried: true,
    },
    {
        email: 'bobby@netscape.com',
        password: 'kaZZaLite',
        dateOfBirth: '20/02/2002',
        gender: 'male',
        FRAbenefit: 14,
        totalContribution: 14,
        isMarried: true,
    },
    {
        email: 'nakamoto@pirateBay.com',
        password: 'BTC',
        dateOfBirth: '09/09/2009',
        gender: 'male',
        FRAbenefit: 14,
        totalContribution: 14,
        isMarried: true,
    },
];
//# sourceMappingURL=mockUsers.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_page__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modal_dashboard_modal_dashboard__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_langauge_popover_langauge_popover__ = __webpack_require__(94);
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
        this.chartType = 'line';
        this.retYears = [];
        this.monthlyPay = [];
        this.totalAccumulated = [];
    }
    DashboardPage.prototype.isEditable = function () {
        if (this.editable = false) {
            this.editable = true;
        }
        else {
            this.editable = false;
        }
        // console.log("editable clicked");
    };
    DashboardPage.prototype.presentLanguagePopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_langauge_popover_langauge_popover__["a" /* LangaugePopoverComponent */], {
            queryEle: this.components.toArray()
        });
        popover.present({
            ev: myEvent
        });
    };
    DashboardPage.prototype.presentAccountPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_page__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    DashboardPage.prototype.presentModal = function (type) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_modal_dashboard_modal_dashboard__["a" /* ModalDashboardComponent */], type);
        // let ev = {
        //   target: {
        //     getBoundingClientRect: () => {
        //       return {
        //         top: '100'
        //       };
        //     }
        //   }
        // };
        // modal.present({ev});
        modal.present();
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
        this.retYears = this.calculations$.retirementYears;
        this.monthlyPay = [{ data: this.calculations$.monthlyArray, label: 'Monthly Payout per Retirement Year' }];
        this.totalAccumulated = [{ data: this.calculations$.cumulativeArray, label: 'Cumulative Benefits per Retirement Year' }];
        this.lifeExpectancy = this.calculations$.lifeExpect;
        this.benefitAtFRA = this.calculations$.FRAbenefitAmount;
        this.ageFRA = this.calculations$.fullRetAge / 12;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('changeText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], DashboardPage.prototype, "components", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentLanguagePopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <!--Some more details can be added here-->\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid no-padding>\n    <ion-row align-items-center padding-horizontal>\n      <ion-col align-self-start>\n        <h1>SSWhen</h1>\n      </ion-col>\n      <ion-col align-self-end>\n        <button ion-button float-end color="light" icon-left (click)="presentAccountPopover($event)">\n          <ion-icon name="person"></ion-icon>\n          <ion-icon md="md-arrow-dropdown"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            <ion-row align-items-center>\n              <ion-col>\n                <h2  #changeText>User Information</h2>\n              </ion-col>\n              <ion-col>\n                <button style="vertical-align: top;" class="btn-smaller" ion-button icon-only float-end color="dark" on-click="isEditable()">\n                  <ion-icon md="md-create"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div #changeText><strong>Life Expectancy:</strong></div>\n                <div #changeText>{{lifeExpectancy}}</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Life Expectancy</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col align-items-end>\n                <div #changeText><strong>FRA Age:</strong></div>\n                <div #changeText>{{ageFRA}}</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Age</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div #changeText><strong>FRA Benefit Amount:</strong></div>\n                <div #changeText>{{benefitAtFRA}}</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Benefit Amount</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <div #changeText><strong>Total Tax Contribution:</strong></div>\n                <div #changeText>$40,110</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Total Tax Contribution</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            <div>\n              <ion-segment [(ngModel)]="data">\n                <ion-segment-button value="monthly">\n                  Monthly\n                </ion-segment-button>\n                <ion-segment-button value="cumulative">\n                  Cumulative\n                </ion-segment-button>\n                <!--<ion-segment-button value="other">-->\n                <!--  Other-->\n                <!--</ion-segment-button>-->\n              </ion-segment>\n            </div>\n\n            <div [ngSwitch]="data">\n              <ion-list *ngSwitchCase="\'monthly\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p #changeText text-center>Monthly Benefit</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal(monthly)" float-end color="primary" #changeText>View Table</a>\n                  </ion-col>\n                </ion-row>\n                    <charts\n                    [ChartType]="chartType"\n                    [xAxis]="retYears" \n                    [yAxis]="monthlyPay"\n                    ></charts> \n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'cumulative\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p #changeText text-center>Cumulative Benefits</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal(cumulative)" float-end color="primary" #changeText>View Table</a>\n                  </ion-col>\n                </ion-row>\n                      <charts\n                      [ChartType]="chartType"\n                      [xAxis]="retYears" \n                      [yAxis]="totalAccumulated"\n                      ></charts> \n              </ion-list>\n\n              <!--<ion-list *ngSwitchCase="\'other\'">-->\n              <!--  <ion-row padding-top>-->\n              <!--    <ion-col col-8>-->\n              <!--      <p #changeText>Other Contributions</p>-->\n              <!--    </ion-col>-->\n              <!--    <ion-col col-4>-->\n              <!--      <a (click)="presentModal()" float-end color="primary" #changeText>View Table</a>-->\n              <!--    </ion-col>-->\n              <!--  </ion-row>-->\n              <!--  <ion-row>-->\n              <!--    <ion-col>-->\n              <!--      <img src="../../assets/imgs/logo.png">-->\n              <!--    </ion-col>-->\n              <!--  </ion-row>-->\n              <!--</ion-list>-->\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal="">\n      <ion-col>\n        <button ion-button full (click)="showPrompt()" #changeText>Email Result</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--<ion-grid>-->\n\n  <!--  <dropdown-menu>-->\n  <!--    Account-->\n  <!--    Logout-->\n  <!--  </dropdown-menu>-->\n\n  <!--  <ion-card>-->\n  <!--    User Info Card-->\n  <!--    Edit link/button-->\n  <!--  </ion-card>-->\n\n  <!--  <ion-segments>-->\n\n  <!--    <ion-segment>-->\n  <!--      Monthly Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n  <!--    <ion-segment>-->\n  <!--      Cumulative Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n\n  <!--  </ion-segments>-->\n\n  <!--</ion-grid>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_calculations_calculations__["a" /* CalculationsProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calculations_calculations__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(95);
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
    function InfoInputPage(navCtrl, navParams, calculations$, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calculations$ = calculations$;
        this.storage = storage;
    }
    InfoInputPage.prototype.logForm = function () {
        var _this = this;
        this.storage.clear().then(function (val) {
            _this.storage.set("inputData", {
                pia: _this.monthlyAtFRA,
                gender: _this.gender,
                dob: _this.myDate
            });
        });
        console.log(this.myDate);
        console.log(this.gender);
        console.log(this.monthlyAtFRA);
        this.calculations$.monthlyBenefit(this.monthlyAtFRA, this.gender, this.myDate);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */]);
    };
    InfoInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-info-input',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/'\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>infoInputPage</ion-title>\n  </ion-navbar>\n  \n  <ion-grid>\n  <ion-row align-items-center>\n    <ion-col style = "margin: 0 auto">\n      <img src="https://preview.ibb.co/c39yyb/Senior_Security.jpg">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center> <ion-icon name="arrow-round-down"></ion-icon> Please Enter Your Information  <ion-icon name="arrow-round-down"></ion-icon> </h3>\n  \n    <form (ngSubmit)="logForm()">\n      <ion-list>\n        \n        <ion-item text-center>\n          <ion-label floating>Date of Birth</ion-label>\n          <ion-datetime displayFormat="MM/YYYY" [(ngModel)]="myDate" name="Date"></ion-datetime>\n        </ion-item>\n        \n        <ion-item text-center>\n          <ion-label floating>Gender</ion-label>\n          <ion-select [(ngModel)]="gender" name = "gender">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label floating text-center>Full Retirement Benefit</ion-label>\n          <ion-input type="number" [(ngModel)]="monthlyAtFRA" name="FRA" text-center></ion-input>\n        </ion-item>\n        \n      </ion-list>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col width-4>\n            <button ion-button type="submit" block>Submit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_calculations_calculations__["a" /* CalculationsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], InfoInputPage);
    return InfoInputPage;
}());

//# sourceMappingURL=info-input.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_modal_email_modal__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_calculations_calculations__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(95);
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
    function ResultsPage(navCtrl, alertCtrl, navParams, modalCtrl, calculations$, storage) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.calculations$ = calculations$;
        this.storage = storage;
        this.chartType = 'bar';
        this.retYears = [];
        this.monthlyPay = [];
        this.tableMonthly = [];
        this.dataa = [];
        this.display = "graph";
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
            message: 'By registering you can view additional details about your retirement benefits',
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
    // ionViewWillEnter() {
    //   this.dataa = [];
    //   this.storage.get("inputData").then((val) => {
    //     this.pia = val.pia;
    //     this.gender = val.gender;
    //     this.dob = val.dob;
    //     this.results = this.calculations$.monthlyBenefit(this.pia, this.gender, this.dob);
    //     this.storage.clear();
    //     console.log(this.results);
    //     for(let i = 0; i < this.results.retYears.length; i++){
    //       let item = {
    //         retYear: this.results.retYears[i],
    //         monthlyPay: this.results.monthly[i],
    //         cumulativePay: this.results.cumulative[i]
    //       }
    //       this.dataa.push(item);
    //     }
    //     console.log(this.dataa);
    //   });
    //   // Assigning data to horizontal & vertical Axis doesn't seem to work here
    //   // Is this.dataa is not accessable outside of the storage.get method ?
    //   // console.log(this.dataa);
    //   // for (let i of this.dataa) {
    //   //   this.retYears.push(i.retYear);
    //   //   this.monthlyPay.push(i.monthlyPay);
    //   // }
    // }
    ResultsPage.prototype.ngOnInit = function () {
        this.retYears = this.calculations$.retirementYears;
        this.monthlyPay = [{ data: this.calculations$.monthlyArray, label: 'Monthly Payout per Retirement Year' }];
        this.tableMonthly = this.calculations$.monthlyArray;
        // this.tabulatedData = this.calculations$.tableData;
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-results',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid no-padding>\n    \n    <!--  Before Segment -->\n    <ion-row>\n      <ion-col col-6 offset-3>\n        <h2 style="text-align:center">SSWHEN</h2>\n      </ion-col>\n    </ion-row>\n    \n    <!-- Segments  -->\n    <div>\n      <ion-segment [(ngModel)]="display">\n        <ion-segment-button value="graph">\n          Graph\n        </ion-segment-button>\n        <ion-segment-button value="chart">\n          Table\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <div [ngSwitch]="display">\n          <div *ngSwitchCase="\'graph\'">\n            <ion-card *ngIf="this.monthlyPay">\n              <ion-card-header style="text-align: center">\n                Monthly Payout\n                <br> \n                by\n                <br>\n                Retirement Age\n              </ion-card-header>\n              <ion-card-content>\n                <ion-grid no-padding>\n                  <charts\n                  [ChartType]="chartType"\n                  [xAxis]="retYears" \n                  [yAxis]="monthlyPay"\n                  ></charts>\n                </ion-grid>\n              </ion-card-content>\n            </ion-card>\n          </div>\n          <div *ngSwitchCase="\'chart\'">\n            <!-- Table HEADER -->\n            <ion-row style="border-bottom: 2px solid black;">\n            <ion-col col-6 text-center>Retirement <br/> Age </ion-col>\n            <ion-col col-6 text-center>Monthly <br/> Payout</ion-col>\n            </ion-row>\n            \n            <page-data-table \n              [leftCol]="retYears"\n              [rightCol]="tableMonthly"\n              ></page-data-table>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n    \n    <!--Register-->\n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n    \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_calculations_calculations__["a" /* CalculationsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
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

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_langauge_popover_langauge_popover__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modal_history_modal_history__ = __webpack_require__(173);
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
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
    }
    HistoryPage.prototype.presentLanguagePopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_langauge_popover_langauge_popover__["a" /* LangaugePopoverComponent */], {
            queryEle: this.components.toArray()
        });
        popover.present({
            ev: myEvent
        });
    };
    HistoryPage.prototype.presentHistoryModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_modal_history_modal_history__["a" /* ModalHistoryComponent */]);
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
    HistoryPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad HistoryPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('changeText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], HistoryPage.prototype, "components", void 0);
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>History</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentLanguagePopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid no-padding>\n    <ion-row align-items-center padding-horizontal>\n      <ion-col align-self-start>\n        <h1>SSWhen</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list padding-vertical>\n          <a #changeText ion-item (click)="presentHistoryModal()">01/01/18</a>\n          <a #changeText ion-item (click)="presentHistoryModal()">01/08/18</a>\n          <a #changeText ion-item (click)="presentHistoryModal()">01/12/18</a>\n          <a #changeText ion-item (click)="presentHistoryModal()">01/24/18</a>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangaugePopoverComponent; });
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
 * Generated class for the LangaugePopoverComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var LangaugePopoverComponent = (function () {
    function LangaugePopoverComponent(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
    }
    LangaugePopoverComponent.prototype.ngOnInit = function () {
        if (this.params.data) {
            this.queryEle = this.params.data.queryEle;
        }
    };
    LangaugePopoverComponent.prototype.changeFontSize = function (direction) {
        for (var i = 0; i < this.queryEle.length; i++) {
            // console.log('Position:', this.queryEle[i]);
            this.queryEle[i].nativeElement.style.fontSize = direction;
        }
    };
    LangaugePopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'langauge-popover',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/langauge-popover/langauge-popover.html"*/'<!-- Generated template for the LangaugePopoverComponent component -->\n\n<ion-grid padding>\n  <ion-row align-items-start>\n    <ion-col>\n      <strong>Font Size:</strong>\n    </ion-col>\n  </ion-row>\n  <ion-row no-padding>\n    <ion-col>\n      <button (click)="changeFontSize(\'smaller\')" ion-item detail-none class="popover-text-button popover-text-smaller font-smaller">A</button>\n    </ion-col>\n    <ion-col>\n      <button (click)="changeFontSize(\'larger\')" ion-item detail-none class="popover-text-button popover-text-larger font-larger">A</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/langauge-popover/langauge-popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LangaugePopoverComponent);
    return LangaugePopoverComponent;
}());

//# sourceMappingURL=langauge-popover.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map