webpackJsonp([10],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(38);
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/app-description/app-description.module": [
		479,
		9
	],
	"../pages/dashboard/dashboard.module": [
		480,
		8
	],
	"../pages/data-table/data-table.module": [
		481,
		7
	],
	"../pages/email-modal/email-modal.module": [
		482,
		6
	],
	"../pages/info-input/info-input.module": [
		483,
		5
	],
	"../pages/landing/landing.module": [
		484,
		4
	],
	"../pages/login/login.module": [
		485,
		3
	],
	"../pages/profile/profile.module": [
		486,
		2
	],
	"../pages/register/register.module": [
		487,
		1
	],
	"../pages/results/results.module": [
		488,
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
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing__ = __webpack_require__(39);
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

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonthlyComponent = (function () {
    function MonthlyComponent(calculations$, viewCtrl, navCtrl) {
        this.calculations$ = calculations$;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.retYears = [];
        this.monthlyPay = [];
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
        this.ChartLegend = false;
        this.lineChartType = 'line';
        this.barChartType = 'bar';
    }
    MonthlyComponent.prototype.ngOnInit = function () {
        this.retYears = this.calculations$.retirementYears;
        this.monthlyPay = [{ data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year' }];
    };
    MonthlyComponent.prototype.dismiss = function () {
        // this.viewCtrl.dismiss();
        this.navCtrl.pop();
    };
    MonthlyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'monthly',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/monthly/monthly.html"*/'\n    <ion-card>\n        <button ion-button clear (click)="dismiss()">Back</button>\n\n        <ion-card-title text-center>\n          Monthly Payout per Retirement Year\n         </ion-card-title>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <div style="display: block">\n                            <canvas baseChart \n                            [datasets]="monthlyPay" \n                            [labels]="retYears" \n                            [options]="ChartOptions" \n                            [legend]="ChartLegend" \n                            [chartType]="lineChartType"></canvas>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n        <ion-card-content>\n            Entering retirement at different ages between 62 .. 70 yeilds different monthly SS payments.\n        </ion-card-content>\n    </ion-card>\n    \n    \n\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/monthly/monthly.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__["a" /* CalculationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MonthlyComponent);
    return MonthlyComponent;
}());

//# sourceMappingURL=monthly.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CumulativeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CumulativeComponent = (function () {
    function CumulativeComponent(calculations$, viewCtrl, navCtrl) {
        this.calculations$ = calculations$;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.retYears = [];
        this.totalAccumulated = [];
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
        this.ChartLegend = false;
        this.lineChartType = 'line';
        this.barChartType = 'bar';
    }
    CumulativeComponent.prototype.ngOnInit = function () {
        this.calculations$.additiveBenefitsByRetirementYear();
        this.retYears = this.calculations$.retirementYears;
        this.totalAccumulated = [{ data: this.calculations$.accumulatedBenefits, label: 'Cumulative Benefits per Retirement Year' }];
    };
    CumulativeComponent.prototype.dismiss = function () {
        // this.viewCtrl.dismiss();
        this.navCtrl.pop();
    };
    CumulativeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cumulative',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/cumulative/cumulative.html"*/'\n    <ion-card>\n        <button ion-button clear (click)="dismiss()">Back</button>\n\n        <ion-card-title text-center>\n          Cumulative Benefits per Retirement Year\n         </ion-card-title>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <div style="display: block">\n                            <canvas baseChart \n                            [datasets]="totalAccumulated" \n                            [labels]="retYears" \n                            [options]="ChartOptions" \n                            [legend]="ChartLegend" \n                            [chartType]="lineChartType"></canvas>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n        <ion-card-content>\n            The Cumulative Benefits represents the sum total of all the monthly payments paid over the course of retirement.\n        </ion-card-content>\n    </ion-card>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/cumulative/cumulative.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__["a" /* CalculationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CumulativeComponent);
    return CumulativeComponent;
}());

//# sourceMappingURL=cumulative.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentValueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PresentValueComponent = (function () {
    function PresentValueComponent(calculations$, viewCtrl, navCtrl) {
        this.calculations$ = calculations$;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.retYears = [];
        this.totalPV = [];
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
        this.ChartLegend = false;
        this.lineChartType = 'line';
        this.barChartType = 'bar';
    }
    PresentValueComponent.prototype.ngOnInit = function () {
        this.calculations$.pvOfBenefitsByRetirementYear();
        this.retYears = this.calculations$.retirementYears;
        this.totalPV = [{ data: this.calculations$.pvOfBenefits, label: 'Present Value of Total Benefits per Retirement Year' }];
    };
    PresentValueComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        // this.navCtrl.pop();
    };
    PresentValueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'present-value',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/present-value/present-value.html"*/'\n    <ion-card>\n        <button ion-button clear (click)="dismiss()">Back</button>\n\n        <ion-card-title text-center>\n          Present Value of Total Benefits per Retirement Year\n         </ion-card-title>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <div style="display: block">\n                            <canvas baseChart \n                            [datasets]="totalPV" \n                            [labels]="retYears" \n                            [options]="ChartOptions" \n                            [legend]="ChartLegend" \n                            [chartType]="lineChartType"></canvas>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n        <ion-card-content>\n            The present value, or present worth, of the retirement package represents the amount of money which if invested (just prior to\n            retirement entry at some interest rate i) will match the monthly dividends from SSA for retiring that year. The higher\n            the present value, the better (for a given interest rate and retirement term, PV is proportional to monthly payments). \n            The resulting present value will be less than the cumulative total of all the future payments because of discounting \n            (time value of money or invested money earning money). The interest rate, or growth rate of the investment, can be\n            estimated according to risk level to give a rate reasonably above inflation.\n        </ion-card-content>\n    </ion-card>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/present-value/present-value.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_calculations_calculations__["a" /* CalculationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PresentValueComponent);
    return PresentValueComponent;
}());

//# sourceMappingURL=present-value.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputationsProvider; });
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

var ComputationsProvider = (function () {
    function ComputationsProvider() {
        this.monthlyArray = [];
        this.cumulativeArray = [];
        this.retirementYears = [62, 63, 64, 65, 66, 67, 68, 69, 70];
        this.discountRate = 3.5;
        this.pvOfBenefits = [];
    }
    ComputationsProvider.prototype.monthlyBenefit = function (pia, gender, dob) {
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
            //KEEP THIS IN CASE WE NEED ARRAY OF OBJECTS FOR EACH AGE, BENEFIT, CUMULATIVE BENEFIT
            // this.ageBenefit = {
            //   age: targetAge / 12,
            //   monthly: this.benefit,
            //   cumulative: this.cumBenefit
            // }
        }
        var r_monthly = (this.discountRate / 12) / 100;
        for (var i = 0; i < this.retirementYears.length; i++) {
            var n = (this.lifeExpect / 12 - this.retirementYears[i]) * 12;
            this.pvOfBenefits.push(Math.round((this.monthlyArray[i]) * ((1 - Math.pow((1 + r_monthly), (-n))) / r_monthly)));
        }
        this.benefitData = {
            monthly: this.monthlyArray,
            cumulative: this.cumulativeArray,
            pv: this.pvOfBenefits
        };
        //USE THESE FOR TESTING ONLY
        console.log("Full Retirement Age: ", this.fullRetAge / 12);
        console.log("Monthly Benefits per Retirement Year", this.monthlyArray);
        console.log("Total Cumulative Benefits per Retirement Year", this.cumulativeArray);
        console.log("Present Value of Total Cumulative Benefits per Retirement Year", this.pvOfBenefits);
        console.log("benefitData:", this.benefitData);
        this.monthlyArray = [];
        this.cumulativeArray = [];
        this.pvOfBenefits = [];
        this.benefitData = {};
        return (this.benefitData);
    };
    ComputationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ComputationsProvider);
    return ComputationsProvider;
}());

//# sourceMappingURL=computations.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_description_app_description__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_input_info_input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__results_results__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(116);
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

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_landing_landing__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_app_description_app_description__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_input_info_input__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_results_results__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_calculations_calculations__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_computations_computations__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_email_modal_email_modal__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_popover_page__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_dashboard_modal_page__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_data_table_data_table__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_charts__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_bar_chart_bar_chart__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_charts_charts__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_monthly_monthly__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_cumulative_cumulative__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_present_value_present_value__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_storage__ = __webpack_require__(475);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_email_modal_email_modal__["a" /* EmailModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_popover_page__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_dashboard_modal_page__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_data_table_data_table__["a" /* DataTablePage */],
                __WEBPACK_IMPORTED_MODULE_24__components_bar_chart_bar_chart__["a" /* BarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_charts_charts__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_monthly_monthly__["a" /* MonthlyComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_cumulative_cumulative__["a" /* CumulativeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_present_value_present_value__["a" /* PresentValueComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/app-description/app-description.module#AppDescriptionPageModule', name: 'AppDescriptionPage', segment: 'app-description', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data-table/data-table.module#DataTablePageModule', name: 'DataTablePage', segment: 'data-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-modal/email-modal.module#EmailModalPageModule', name: 'EmailModalPage', segment: 'email-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-input/info-input.module#InfoInputPageModule', name: 'InfoInputPage', segment: 'info-input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29__ionic_storage__["a" /* IonicStorageModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_email_modal_email_modal__["a" /* EmailModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_popover_page__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_dashboard_modal_page__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_bar_chart_bar_chart__["a" /* BarChartComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_charts_charts__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_monthly_monthly__["a" /* MonthlyComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_cumulative_cumulative__["a" /* CumulativeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_present_value_present_value__["a" /* PresentValueComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_calculations_calculations__["a" /* CalculationsProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_computations_computations__["a" /* ComputationsProvider */]
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
        // CalculationsProvider must obtain FRA monthly benefit, lifeExpectancy and discountRate from user input
        // monthlyBenefits[] need to be computed from the user input FRA monthly benefit
        this.lifeExpectancy = 80;
        this.discountRate = 3.5;
        this.retirementYears = [62, 63, 64, 65, 66, 67, 68, 69, 70]; // x-axis
        this.monthlyBenefits = [1314, 1421.4, 1528.8, 1636.2, 1743.6, 1851, 2016.33, 2181.67, 2347]; // y-axis
        this.accumulatedBenefits = []; // y-axis
        this.pvOfBenefits = []; // y-axis
    }
    CalculationsProvider.prototype.additiveBenefitsByRetirementYear = function () {
        for (var i = 0; i < this.retirementYears.length; i++) {
            this.accumulatedBenefits.push((this.lifeExpectancy - this.retirementYears[i]) * (this.monthlyBenefits[i] * 12));
        }
    };
    CalculationsProvider.prototype.pvOfBenefitsByRetirementYear = function () {
        var r_monthly = (this.discountRate / 12) / 100;
        for (var i = 0; i < this.retirementYears.length; i++) {
            var n = (this.lifeExpectancy - this.retirementYears[i]) * 12;
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(50);
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(38);
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(220);
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

/***/ 422:
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

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 226,
	"./af.js": 226,
	"./ar": 227,
	"./ar-dz": 228,
	"./ar-dz.js": 228,
	"./ar-kw": 229,
	"./ar-kw.js": 229,
	"./ar-ly": 230,
	"./ar-ly.js": 230,
	"./ar-ma": 231,
	"./ar-ma.js": 231,
	"./ar-sa": 232,
	"./ar-sa.js": 232,
	"./ar-tn": 233,
	"./ar-tn.js": 233,
	"./ar.js": 227,
	"./az": 234,
	"./az.js": 234,
	"./be": 235,
	"./be.js": 235,
	"./bg": 236,
	"./bg.js": 236,
	"./bn": 237,
	"./bn.js": 237,
	"./bo": 238,
	"./bo.js": 238,
	"./br": 239,
	"./br.js": 239,
	"./bs": 240,
	"./bs.js": 240,
	"./ca": 241,
	"./ca.js": 241,
	"./cs": 242,
	"./cs.js": 242,
	"./cv": 243,
	"./cv.js": 243,
	"./cy": 244,
	"./cy.js": 244,
	"./da": 245,
	"./da.js": 245,
	"./de": 246,
	"./de-at": 247,
	"./de-at.js": 247,
	"./de-ch": 248,
	"./de-ch.js": 248,
	"./de.js": 246,
	"./dv": 249,
	"./dv.js": 249,
	"./el": 250,
	"./el.js": 250,
	"./en-au": 251,
	"./en-au.js": 251,
	"./en-ca": 252,
	"./en-ca.js": 252,
	"./en-gb": 253,
	"./en-gb.js": 253,
	"./en-ie": 254,
	"./en-ie.js": 254,
	"./en-nz": 255,
	"./en-nz.js": 255,
	"./eo": 256,
	"./eo.js": 256,
	"./es": 257,
	"./es-do": 258,
	"./es-do.js": 258,
	"./es.js": 257,
	"./et": 259,
	"./et.js": 259,
	"./eu": 260,
	"./eu.js": 260,
	"./fa": 261,
	"./fa.js": 261,
	"./fi": 262,
	"./fi.js": 262,
	"./fo": 263,
	"./fo.js": 263,
	"./fr": 264,
	"./fr-ca": 265,
	"./fr-ca.js": 265,
	"./fr-ch": 266,
	"./fr-ch.js": 266,
	"./fr.js": 264,
	"./fy": 267,
	"./fy.js": 267,
	"./gd": 268,
	"./gd.js": 268,
	"./gl": 269,
	"./gl.js": 269,
	"./gom-latn": 270,
	"./gom-latn.js": 270,
	"./he": 271,
	"./he.js": 271,
	"./hi": 272,
	"./hi.js": 272,
	"./hr": 273,
	"./hr.js": 273,
	"./hu": 274,
	"./hu.js": 274,
	"./hy-am": 275,
	"./hy-am.js": 275,
	"./id": 276,
	"./id.js": 276,
	"./is": 277,
	"./is.js": 277,
	"./it": 278,
	"./it.js": 278,
	"./ja": 279,
	"./ja.js": 279,
	"./jv": 280,
	"./jv.js": 280,
	"./ka": 281,
	"./ka.js": 281,
	"./kk": 282,
	"./kk.js": 282,
	"./km": 283,
	"./km.js": 283,
	"./kn": 284,
	"./kn.js": 284,
	"./ko": 285,
	"./ko.js": 285,
	"./ky": 286,
	"./ky.js": 286,
	"./lb": 287,
	"./lb.js": 287,
	"./lo": 288,
	"./lo.js": 288,
	"./lt": 289,
	"./lt.js": 289,
	"./lv": 290,
	"./lv.js": 290,
	"./me": 291,
	"./me.js": 291,
	"./mi": 292,
	"./mi.js": 292,
	"./mk": 293,
	"./mk.js": 293,
	"./ml": 294,
	"./ml.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 296,
	"./ms-my": 297,
	"./ms-my.js": 297,
	"./ms.js": 296,
	"./my": 298,
	"./my.js": 298,
	"./nb": 299,
	"./nb.js": 299,
	"./ne": 300,
	"./ne.js": 300,
	"./nl": 301,
	"./nl-be": 302,
	"./nl-be.js": 302,
	"./nl.js": 301,
	"./nn": 303,
	"./nn.js": 303,
	"./pa-in": 304,
	"./pa-in.js": 304,
	"./pl": 305,
	"./pl.js": 305,
	"./pt": 306,
	"./pt-br": 307,
	"./pt-br.js": 307,
	"./pt.js": 306,
	"./ro": 308,
	"./ro.js": 308,
	"./ru": 309,
	"./ru.js": 309,
	"./sd": 310,
	"./sd.js": 310,
	"./se": 311,
	"./se.js": 311,
	"./si": 312,
	"./si.js": 312,
	"./sk": 313,
	"./sk.js": 313,
	"./sl": 314,
	"./sl.js": 314,
	"./sq": 315,
	"./sq.js": 315,
	"./sr": 316,
	"./sr-cyrl": 317,
	"./sr-cyrl.js": 317,
	"./sr.js": 316,
	"./ss": 318,
	"./ss.js": 318,
	"./sv": 319,
	"./sv.js": 319,
	"./sw": 320,
	"./sw.js": 320,
	"./ta": 321,
	"./ta.js": 321,
	"./te": 322,
	"./te.js": 322,
	"./tet": 323,
	"./tet.js": 323,
	"./th": 324,
	"./th.js": 324,
	"./tl-ph": 325,
	"./tl-ph.js": 325,
	"./tlh": 326,
	"./tlh.js": 326,
	"./tr": 327,
	"./tr.js": 327,
	"./tzl": 328,
	"./tzl.js": 328,
	"./tzm": 329,
	"./tzm-latn": 330,
	"./tzm-latn.js": 330,
	"./tzm.js": 329,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 333,
	"./uz-latn": 334,
	"./uz-latn.js": 334,
	"./uz.js": 333,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-tw": 340,
	"./zh-tw.js": 340
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
webpackContext.id = 455;

/***/ }),

/***/ 473:
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
    function BarChartComponent() {
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
        this.ChartLegend = false;
        this.lineChartType = 'line';
        this.barChartType = 'bar';
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
            selector: 'bar-chart',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/bar-chart/bar-chart.html"*/'\n    <ion-card>\n        <ion-card-title text-center>\n          Monthly Payout per Retirement Year\n         </ion-card-title>\n        <ion-card-content>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <div style="display: block">\n                            <canvas baseChart \n                            [datasets]="yAxis" \n                            [labels]="xAxis" \n                            [options]="ChartOptions" \n                            [legend]="ChartLegend" \n                            [chartType]="barChartType"></canvas>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n        <ion-card-content>\n            Entering retirement at different ages between 62 .. 70 yeilds different monthly SS payments.\n        </ion-card-content>\n    </ion-card>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/bar-chart/bar-chart.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());

//# sourceMappingURL=bar-chart.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function ChartsComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartsComponent.prototype, "chartsType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "RetirementYears", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "MonthlyPayout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "CumulativeBenefits", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "pvOfTotalBenefits", void 0);
    ChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'charts',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/components/charts/charts.html"*/'<!-- This page plots all the graphs -->\n\n\n<ion-content padding>\n  \n  <div *ngIf=" chartsType == \'monthly\' ">\n    <ion-card>\n      <ion-card-header text-center>\n        Entering retirement at different ages between 62 .. 70 yeilds different monthly SS payments.\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                <div style="display: block">\n                  <canvas baseChart \n                    [datasets]="MonthlyPayout"\n                    [labels]="RetirementYears"\n                    [options]="ChartOptions"\n                    [legend]="ChartLegend"\n                    [chartType]="barChartType"></canvas>\n                </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>      \n      </ion-card-content>\n      </ion-card>\n  </div>\n\n\n  <div *ngIf=" chartsType == \'cumulative\' ">\n    <ion-card>\n      <ion-card-header text-center>\n        The Cumulative Benefits represents the sum total of all the monthly payments paid over the course of retirement.\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>  \n              <div style="display: block">\n                <canvas baseChart \n                    [datasets]="CumulativeBenefits"\n                    [labels]="RetirementYears"\n                    [options]="ChartOptions"\n                    [colors]="ChartColors"\n                    [legend]="ChartLegend"\n                    [chartType]="lineChartType"></canvas>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>    \n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <div *ngIf="hidden">\n       <ion-card>\n        <ion-card-header text-center>\n          The Cumulative Benefits represents the sum total of all the monthly payments paid over the course of retirement.\n        </ion-card-header>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <div style="display: block">\n                    <canvas baseChart \n                      [datasets]="CumulativeBenefits"\n                      [labels]="RetirementYears"\n                      [options]="ChartOptions"\n                      [legend]="ChartLegend"\n                      [chartType]="barChartType"></canvas>\n                  </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>   \n        </ion-card-content>\n    </ion-card> \n  </div>\n\n  \n  <div *ngIf=" chartsType ==\'presentValue\' ">\n    <ion-card>\n      <ion-card-header text-center>\n        The present value, or present worth, of the retirement package represents the amount of money which if invested (just prior to\n        retirement entry at some interest rate i) will match the monthly dividends from SSA for retiring that year. The higher\n        the present value, the better (for a given interest rate and retirement term, PV is proportional to monthly payments). \n        The resulting present value will be less than the cumulative total of all the future payments because of discounting \n        (time value of money or invested money earning money). The interest rate, or growth rate of the investment, can be\n        estimated according to risk level to give a rate reasonably above inflation. \n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>   \n              <div style="display: block">\n                  <canvas baseChart \n                    [datasets]="pvOfTotalBenefits"\n                    [labels]="RetirementYears"\n                    [options]="ChartOptions"\n                    [colors]="ChartColors"\n                    [legend]="ChartLegend"\n                    [chartType]="lineChartType"></canvas>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>  \n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf = "hidden">\n    <ion-card>\n      <ion-card-header text-center>\n        The present value, or present worth, of the retirement package represents the amount of money which if invested (just prior to\n        retirement entry at some interest rate i) will match the monthly dividends from SSA for retiring that year. The higher\n        the present value, the better (for a given interest rate and retirement term, PV is proportional to monthly payments). \n        The resulting present value will be less than the cumulative total of all the future payments because of discounting \n        (time value of money or invested money earning money). The interest rate, or growth rate of the investment, can be\n        estimated according to risk level to give a rate reasonably above inflation. \n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n                <div style="display: block">\n                  <canvas baseChart \n                    [datasets]="pvOfTotalBenefits"\n                    [labels]="RetirementYears"\n                    [options]="ChartOptions"\n                    [legend]="ChartLegend"\n                    [chartType]="barChartType"></canvas>\n                </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/components/charts/charts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChartsComponent);
    return ChartsComponent;
}());

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_page__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_page__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calculations_calculations__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_monthly_monthly__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cumulative_cumulative__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_present_value_present_value__ = __webpack_require__(175);
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
        this.retYears = [];
        this.monthlyPay = [];
        this.totalAccumulated = [];
        this.totalPV = [];
        this.monthlyComponent = __WEBPACK_IMPORTED_MODULE_5__components_monthly_monthly__["a" /* MonthlyComponent */];
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
    // navigates to MonthlyComponent through navPush in the html
    // openMonthly() {
    //   const myModal = this.modalCtrl.create(MonthlyComponent);
    //   myModal.present();
    // }
    DashboardPage.prototype.openCumulative = function () {
        // const myModal = this.modalCtrl.create(CumulativeComponent);
        // myModal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__components_cumulative_cumulative__["a" /* CumulativeComponent */]);
    };
    DashboardPage.prototype.openPresentValue = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_present_value_present_value__["a" /* PresentValueComponent */]);
        myModal.present();
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
        this.calculations$.additiveBenefitsByRetirementYear();
        this.calculations$.pvOfBenefitsByRetirementYear();
        this.retYears = this.calculations$.retirementYears;
        this.monthlyPay = [{ data: this.calculations$.monthlyBenefits, label: 'Monthly Payout per Retirement Year' }];
        this.totalAccumulated = [{ data: this.calculations$.accumulatedBenefits, label: 'Cumulative Benefits per Retirement Year' }];
        this.totalPV = [{ data: this.calculations$.pvOfBenefits, label: 'Present Value of Total Benefits per Retirement Year' }];
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/'\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title text-center>Dashboard</ion-title>\n  </ion-navbar>\n\n<!--Some more details can be added here-->\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid no-padding>\n    <ion-row align-items-center padding-horizontal>\n      <ion-col align-self-start>\n        <h1>SSWhen</h1>\n      </ion-col>\n      <ion-col align-self-end>\n        <button ion-button float-end color="light" icon-left (click)="presentPopover($event)">\n          <ion-icon name="person"></ion-icon>\n          <ion-icon md="md-arrow-dropdown"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            <ion-row align-items-center>\n              <ion-col>\n                <h2>User Information</h2>\n              </ion-col>\n              <ion-col>\n                <button style="vertical-align: top;" class="btn-smaller" ion-button icon-only float-end color="dark" on-click="isEditable()">\n                  <ion-icon md="md-create"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>Life Expectancy:</strong></div>\n                <div>62</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Life Expectancy</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col align-items-end>\n                <div><strong>FRA Age:</strong></div>\n                <div>65</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Age</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-start>\n              <ion-col>\n                <div><strong>FRA Benefit Amount:</strong></div>\n                <div>$1,080</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>FRA Benefit Amount</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row align-items-center>\n              <ion-col>\n                <div><strong>Total Tax Contribution:</strong></div>\n                <div>$40,110</div>\n                <ion-item *ngIf="editable">\n                  <ion-label floating>Total Tax Contribution</ion-label>\n                  <ion-input type="text"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center no-padding>\n      <ion-col>\n        <ion-card>\n          <ion-card-content padding-horizontal>\n            \n            <div>\n              <ion-segment [(ngModel)]="data">\n                <!--<ion-segment-button value="monthly" (click)="openMonthly()">-->\n                <ion-segment-button value="monthly" [navPush] = monthlyComponent>\n                  Monthly\n                </ion-segment-button>\n                <ion-segment-button value="cumulative" (click)="openCumulative()">\n                  Cumulative\n                </ion-segment-button>\n                <ion-segment-button value="presentValue" (click)="openPresentValue()">\n                  Present Value\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n\n            <div [ngSwitch]="data">\n              \n              <ion-list *ngSwitchCase="\'monthly\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p text-center>Monthly Stipend</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>   \n                    <charts \n                      [RetirementYears]="retYears" \n                      [MonthlyPayout]="monthlyPay"\n                      [chartsType]=" \'monthly\' "\n                    ></charts>                    \n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'cumulative\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p text-center>Cumulative Benefits</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <charts \n                      [RetirementYears]="retYears" \n                      [CumulativeBenefits]="totalAccumulated"\n                      [chartsType]=" \'cumulative\' "\n                    ></charts>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n\n              <ion-list *ngSwitchCase="\'presentValue\'">\n                <ion-row padding-top>\n                  <ion-col col-8>\n                    <p text-center>Present Value of Benefits</p>\n                  </ion-col>\n                  <ion-col col-4>\n                    <a (click)="presentModal()" float-end color="primary">View Table</a>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <charts \n                      [RetirementYears]="retYears" \n                      [pvOfTotalBenefits]="totalPV"\n                      [chartsType]=" \'presentValue\' "\n                    ></charts>\n                  </ion-col>\n                </ion-row>\n              </ion-list>\n              \n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--<ion-grid>-->\n\n  <!--  <dropdown-menu>-->\n  <!--    Account-->\n  <!--    Logout-->\n  <!--  </dropdown-menu>-->\n\n  <!--  <ion-card>-->\n  <!--    User Info Card-->\n  <!--    Edit link/button-->\n  <!--  </ion-card>-->\n\n  <!--  <ion-segments>-->\n\n  <!--    <ion-segment>-->\n  <!--      Monthly Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n  <!--    <ion-segment>-->\n  <!--      Cumulative Chart-->\n  <!--      View Table button-->\n  <!--      ? helper - chart description-->\n\n  <!--      <ion-modal>-->\n  <!--        Data Table-->\n  <!--      </ion-modal>-->\n\n  <!--    </ion-segment>-->\n\n\n  <!--  </ion-segments>-->\n\n  <!--</ion-grid>-->\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/dashboard/dashboard.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_computations_computations__ = __webpack_require__(176);
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
    function InfoInputPage(navCtrl, navParams, comp$) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comp$ = comp$;
    }
    InfoInputPage.prototype.logForm = function () {
        console.log(this.myDate);
        console.log(this.gender);
        console.log(this.monthlyAtFRA);
        this.comp$.monthlyBenefit(this.monthlyAtFRA, this.gender, this.myDate);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */]);
    };
    InfoInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-info-input',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/'\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>infoInputPage</ion-title>\n  </ion-navbar>\n  \n  <ion-grid>\n  <ion-row align-items-center>\n    <ion-col style = "margin: 0 auto">\n      <img src="https://preview.ibb.co/c39yyb/Senior_Security.jpg">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center> <ion-icon name="arrow-round-down"></ion-icon> Please Enter Your Information  <ion-icon name="arrow-round-down"></ion-icon> </h3>\n  \n    <form (ngSubmit)="logForm()">\n      <ion-list>\n        \n        <ion-item text-center>\n          <ion-label floating>Date of Birth</ion-label>\n          <ion-datetime displayFormat="MM/YYYY" [(ngModel)]="myDate" name="Date"></ion-datetime>\n        </ion-item>\n        \n        <ion-item text-center>\n          <ion-label floating>Gender</ion-label>\n          <ion-select [(ngModel)]="gender" name = "gender">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label floating text-center>Full Retirement Benefit</ion-label>\n          <ion-input type="number" [(ngModel)]="monthlyAtFRA" name="FRA" text-center></ion-input>\n        </ion-item>\n        \n      </ion-list>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col width-4>\n            <button ion-button (click)="submit" block>Submit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/info-input/info-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_computations_computations__["a" /* ComputationsProvider */]])
    ], InfoInputPage);
    return InfoInputPage;
}());

//may need later, converts date in YYYY-MM format to # of months
// convertToMonths() {
//   let dateString: string = this.myDate;
//   let yearString: any = dateString.substr(0,4);
//   let monthString: any = dateString.substr(5,6);
//   this.dateInMonths = (Number(yearString)*12) + Number(monthString);
//   console.log(this.dateInMonths, "hit");
// }
//# sourceMappingURL=info-input.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_modal_email_modal__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_calculations_calculations__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ComponentsModule } from "../components/components.module";

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
            selector: 'page-results',template:/*ion-inline-start:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    \n    <!--  Before Segment -->\n    <ion-row>\n      <ion-col col-6 offset-3>\n        <h2 style="text-align:center;">SSWHEN</h2>\n      </ion-col>\n    </ion-row>\n    \n    <!-- Segments  -->\n    <div>\n      <ion-segment [(ngModel)]="results">\n        <ion-segment-button value="graph">\n          Graph\n        </ion-segment-button>\n        <ion-segment-button value="chart">\n          Chart\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <div [ngSwitch]="results">\n      <div *ngSwitchCase="\'graph\'">\n          <bar-chart \n            [xAxis]="horizontalAxis" \n            [yAxis]="verticalAxis"\n          ></bar-chart>\n          <!--<charts -->\n          <!--  [RetirementYears]="horizontalAxis" -->\n          <!--  [MonthlyPayout]="verticalAxis"-->\n          <!--  [chartsType]=" \'monthly\' "-->\n          <!--></charts>-->\n      </div>\n      \n      <div *ngSwitchCase="\'chart\'">\n          <page-data-table></page-data-table>\n      </div>\n    </div>\n    \n<!--      Bottom Buttons   -->\n<!--     <ion-row> -->\n<!--       <ion-col col-6 offset-3> -->\n<!--           <button ion-button full (click)="openEmailModal()">Email Results</button> -->\n<!--       </ion-col> -->\n<!--     </ion-row> -->\n    \n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full (click)="showPrompt()">Email Result</button>\n      </ion-col>\n    </ion-row>\n    \n    <!--Register-->\n    <ion-row>\n      <ion-col col-6 offset-3>\n          <button ion-button full on-click="goToRegister()">Register</button>\n      </ion-col>\n    </ion-row>\n    \n    \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubuntu/workspace/SSWHEN/src/pages/results/results.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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

},[342]);
//# sourceMappingURL=main.js.map