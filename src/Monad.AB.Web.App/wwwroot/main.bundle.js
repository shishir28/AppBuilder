webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/accounts/accounts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/accounts/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_component__ = __webpack_require__("../../../../../src/app/accounts/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_component__ = __webpack_require__("../../../../../src/app/accounts/forgot-password.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accountsRoutes; });
// ---------Routes--------------------------------------------------



// -----------------------------------------------------------------
var accountsRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_component__["a" /* RegisterComponent */], pathMatch: 'full' },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_2__forgot_password_component__["a" /* ForgotPasswordComponent */], pathMatch: 'full' },
];
//# sourceMappingURL=accounts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/accounts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_components_module__ = __webpack_require__("../../../../../src/app/material/material-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_accounts_service__ = __webpack_require__("../../../../../src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_component__ = __webpack_require__("../../../../../src/app/accounts/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_component__ = __webpack_require__("../../../../../src/app/accounts/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgot_password_component__ = __webpack_require__("../../../../../src/app/accounts/forgot-password.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AccountsModule = (function () {
    function AccountsModule() {
    }
    return AccountsModule;
}());
AccountsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_9__register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_10__forgot_password_component__["a" /* ForgotPasswordComponent */]
        ],
        entryComponents: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_accounts_service__["a" /* AccountsService */]
        ]
    })
], AccountsModule);

//# sourceMappingURL=accounts.module.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"forgot mat-elevation-z12\">\r\n    <div class=\"forgot-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"send()\">\r\n      <div class=\"forgot-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n        </md-input-container>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">RECOVER PASSWORD</button>\r\n        <p class=\"note\"><a [routerLink]=\"['/login']\">Back to login</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/accounts/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.forgot {\n  background: white;\n  width: 380px; }\n  .forgot .forgot-header {\n    background: #2B303B;\n    padding: 24px; }\n  .forgot .forgot-content {\n    padding: 24px 42px 42px; }\n    .forgot .forgot-content md-input-container {\n      width: 100%;\n      margin: 6px 0 18px; }\n    .forgot .forgot-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .forgot .forgot-content a:hover {\n        text-decoration: underline; }\n    .forgot .forgot-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(router) {
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.send = function () {
        this.router.navigate(['/']);
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-forgot-password',
        template: __webpack_require__("../../../../../src/app/accounts/forgot-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/accounts/forgot-password.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], ForgotPasswordComponent);

var _a;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"login mat-elevation-z12\">\r\n    <div class=\"login-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"login()\">\r\n      <div class=\"login-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"loginDetail.userName\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"loginDetail.password\">\r\n        </md-input-container>\r\n        <div class=\"extra-options\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <md-checkbox color=\"primary\" class=\"remember-me\" name=\"rememberMe\" [(ngModel)]=\"loginDetail.rememberMe\">Remember Me</md-checkbox>\r\n          <a class=\"forgot-password\" [routerLink]=\"['/forgot-password']\">Forgot Password?</a>\r\n        </div>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">SIGN IN</button>\r\n        <p class=\"note\">Don't have an account?<br /> <a [routerLink]=\"['/register']\">Click here to create one</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/accounts/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.login {\n  background: white;\n  width: 380px; }\n  .login .login-header {\n    background: #2B303B;\n    padding: 24px; }\n  .login .login-content {\n    padding: 24px 42px 42px; }\n    .login .login-content md-input-container {\n      width: 100%;\n      margin: 6px 0; }\n    .login .login-content .extra-options {\n      margin: 16px 0 32px; }\n      .login .login-content .extra-options .remember-me {\n        color: #777; }\n    .login .login-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .login .login-content a:hover {\n        text-decoration: underline; }\n    .login .login-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_accounts_service__ = __webpack_require__("../../../../../src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_account__ = __webpack_require__("../../../../../src/app/accounts/shared/account.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, accountsService) {
        this.router = router;
        this.accountsService = accountsService;
        this.loginDetail = new __WEBPACK_IMPORTED_MODULE_4__shared_account__["b" /* LoginDetail */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.accountsService.login(this.loginDetail)
            .subscribe(function (response) {
            if (response.statusCode == 200) {
                localStorage.setItem('currentUser', response.content.user.userName);
                _this.router.navigateByUrl('/projects');
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Invalid Credentials!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-login',
        template: __webpack_require__("../../../../../src/app/accounts/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/accounts/login.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_accounts_service__["a" /* AccountsService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"register mat-elevation-z12\">\r\n    <div class=\"register-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"register()\">\r\n      <div class=\"register-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">       \r\n        <md-input-container>\r\n          <input mdInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"registerDetail.email\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"registerDetail.password\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"Password (Confirm)\" type=\"password\" name=\"password-confirm\" required [(ngModel)]=\"registerDetail.confirmPassword\">\r\n        </md-input-container>\r\n        <div class=\"extra-options\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <md-checkbox class=\"remember-me\" color=\"primary\" >I accept the <a href=\"#\">terms and conditions.</a></md-checkbox>\r\n        </div>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">CREATE ACCOUNT</button>\r\n        <p class=\"note\">Already have an account?<br /> <a [routerLink]=\"['/login']\">Sign in here</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/accounts/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.register {\n  background: white;\n  width: 380px; }\n  .register .register-header {\n    background: #2B303B;\n    padding: 24px; }\n  .register .register-content {\n    padding: 24px 42px 42px; }\n    .register .register-content md-input-container {\n      width: 100%;\n      margin: 6px 0; }\n    .register .register-content .extra-options {\n      margin: 16px 0 32px; }\n      .register .register-content .extra-options .remember-me {\n        color: #777; }\n    .register .register-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .register .register-content a:hover {\n        text-decoration: underline; }\n    .register .register-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_accounts_service__ = __webpack_require__("../../../../../src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_account__ = __webpack_require__("../../../../../src/app/accounts/shared/account.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(router, accountsService) {
        this.router = router;
        this.accountsService = accountsService;
        this.registerDetail = new __WEBPACK_IMPORTED_MODULE_4__shared_account__["a" /* RegisterDetail */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountsService.register(this.registerDetail)
            .subscribe(function (response) {
            console.log(response);
            if (response.statusCode == 201) {
                _this.router.navigate(['/login']);
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
        //this.router.navigate(['/']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-register',
        template: __webpack_require__("../../../../../src/app/accounts/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/accounts/register.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_accounts_service__["a" /* AccountsService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/shared/account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDetail; });
var LoginDetail = (function () {
    function LoginDetail() {
    }
    return LoginDetail;
}());

var RegisterDetail = (function () {
    function RegisterDetail() {
    }
    return RegisterDetail;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ "../../../../../src/app/accounts/shared/accounts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountsService = (function () {
    function AccountsService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    AccountsService.prototype.login = function (loginUser) {
        return this.http.post("/api/account/login", JSON.stringify(loginUser), this.options)
            .map(function (res) { return res.json(); });
    };
    AccountsService.prototype.register = function (registerUser) {
        return this.http.post("/api/account/register", JSON.stringify(registerUser), this.options)
            .map(function (res) { return res.json(); });
    };
    AccountsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return AccountsService;
}());
AccountsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AccountsService);

var _a;
//# sourceMappingURL=accounts.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_guards_index__ = __webpack_require__("../../../../../src/app/shared/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_routing_module__ = __webpack_require__("../../../../../src/app/main/main-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_accounts_routing_module__ = __webpack_require__("../../../../../src/app/accounts/accounts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_routing_module__ = __webpack_require__("../../../../../src/app/users/users-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// ---------Routes----------



//-------------
var routes = __WEBPACK_IMPORTED_MODULE_5__accounts_accounts_routing_module__["a" /* accountsRoutes */].concat([
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__main_home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_guards_index__["a" /* AuthGuard */]],
        children: __WEBPACK_IMPORTED_MODULE_4__main_main_routing_module__["a" /* mainRoutes */].concat(__WEBPACK_IMPORTED_MODULE_6__users_users_routing_module__["a" /* usersRoutes */])
    }
]);
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: []
    })
], RoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-load-animation\">\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(mediaReplayService) {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_guards_index__ = __webpack_require__("../../../../../src/app/shared/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__accounts_accounts_module__ = __webpack_require__("../../../../../src/app/accounts/accounts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular_sortablejs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var perfectScrollbarConfig = {
    suppressScrollX: true,
    swipePropagation: false
};
var sortablejsConfig = {
    animation: 300
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__main_main_module__["a" /* MainModule */],
            __WEBPACK_IMPORTED_MODULE_12__accounts_accounts_module__["a" /* AccountsModule */],
            __WEBPACK_IMPORTED_MODULE_13__users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(perfectScrollbarConfig),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdIconRegistry */], __WEBPACK_IMPORTED_MODULE_4__shared_guards_index__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumbs\" fxLayout=\"row\">\r\n  <li *ngFor=\"let url of urls; let last = last; let first = first\" [ngClass]=\"{'active': last}\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> <!-- disable link of last item -->\r\n    <md-icon *ngIf=\"!first\">keyboard_arrow_right</md-icon>\r\n    <a role=\"button\" *ngIf=\"!last && url == prefix\">{{url}}</a>\r\n    <a role=\"button\" *ngIf=\"!last && url != prefix\">{{friendlyName(url)}}</a>\r\n    <span *ngIf=\"last\">{{friendlyName(url)}}</span>\r\n    <span *ngIf=\"last && url == prefix\">{{friendlyName('/')}}</span>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumbs {\n  margin: 0;\n  padding: 0 16px;\n  list-style: none;\n  font-weight: 400;\n  font-size: 20px; }\n  .breadcrumbs li {\n    line-height: 64px; }\n    .breadcrumbs li md-icon {\n      margin: 0 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, breadcrumbService) {
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.prefix = '';
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.urls = [];
        if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
        this._routerSubscription = this.router.events.subscribe(function (navigationEnd) {
            _this.urls.length = 0; //Fastest way to clear out array
            _this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    };
    BreadcrumbsComponent.prototype.ngOnChanges = function () {
        if (!this.urls) {
            return;
        }
        this.urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    };
    BreadcrumbsComponent.prototype.generateBreadcrumbTrail = function (url) {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this.urls.unshift(url);
        }
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        }
        else if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
    };
    BreadcrumbsComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    BreadcrumbsComponent.prototype.friendlyName = function (url) {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    };
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this._routerSubscription.unsubscribe();
    };
    return BreadcrumbsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('prefix'),
    __metadata("design:type", String)
], BreadcrumbsComponent.prototype, "prefix", void 0);
BreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-breadcrumbs',
        template: __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _b || Object])
], BreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.routesFriendlyNames = new Map();
        this.routesFriendlyNamesRegex = new Map();
        this.routesWithCallback = new Map();
        this.routesWithCallbackRegex = new Map();
        this.hideRoutes = [];
        this.hideRoutesRegex = [];
    }
    /**
     * Specify a friendly name for the corresponding route.
     *
     * @param route
     * @param name
     */
    BreadcrumbService.prototype.addFriendlyNameForRoute = function (route, name) {
        this.routesFriendlyNames.set(route, name);
    };
    /**
     * Specify a friendly name for the corresponding route matching a regular expression.
     *
     * @param routeRegex
     * @param name
     */
    BreadcrumbService.prototype.addFriendlyNameForRouteRegex = function (routeRegex, name) {
        this.routesFriendlyNamesRegex.set(routeRegex, name);
    };
    /**
     * Specify a callback for the corresponding route.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    BreadcrumbService.prototype.addCallbackForRoute = function (route, callback) {
        this.routesWithCallback.set(route, callback);
    };
    /**
     * Specify a callback for the corresponding route matching a regular expression.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    BreadcrumbService.prototype.addCallbackForRouteRegex = function (routeRegex, callback) {
        this.routesWithCallbackRegex.set(routeRegex, callback);
    };
    /**
     * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    BreadcrumbService.prototype.getFriendlyNameForRoute = function (route) {
        var name;
        var routeEnd = route.substr(route.lastIndexOf('/') + 1, route.length);
        this.routesFriendlyNames.forEach(function (value, key, map) {
            if (key === route) {
                name = value;
            }
        });
        this.routesFriendlyNamesRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value;
            }
        });
        this.routesWithCallback.forEach(function (value, key, map) {
            if (key === route) {
                name = value(routeEnd);
            }
        });
        this.routesWithCallbackRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value(routeEnd);
            }
        });
        return name ? name : routeEnd;
    };
    /**
     * Specify a route (url) that should not be shown in the breadcrumb.
     */
    BreadcrumbService.prototype.hideRoute = function (route) {
        if (!(this.hideRoutes.indexOf(route) != -1)) {
            this.hideRoutes.push(route);
        }
    };
    /**
     * Specify a route (url) regular expression that should not be shown in the breadcrumb.
     */
    BreadcrumbService.prototype.hideRouteRegex = function (routeRegex) {
        if (!(this.hideRoutesRegex.indexOf(routeRegex) != -1)) {
            this.hideRoutesRegex.push(routeRegex);
        }
    };
    /**
     * Returns true if a route should be hidden.
     */
    BreadcrumbService.prototype.isRouteHidden = function (route) {
        var hide = (this.hideRoutes.indexOf(route) != -1);
        this.hideRoutesRegex.forEach(function (value) {
            if (new RegExp(value).exec(route)) {
                hide = true;
            }
        });
        return hide;
    };
    return BreadcrumbService;
}());
BreadcrumbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BreadcrumbService);

//# sourceMappingURL=breadcrumb.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/icon-sidenav.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconSidenavDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconSidenavDirective = (function () {
    function IconSidenavDirective(sidenavService, mediaReplayService) {
        this.sidenavService = sidenavService;
        this.mediaReplayService = mediaReplayService;
        this.isMobile = false;
    }
    Object.defineProperty(IconSidenavDirective.prototype, "isIconSidenav", {
        get: function () {
            return this.sidenavService.isIconSidenav;
        },
        enumerable: true,
        configurable: true
    });
    IconSidenavDirective.prototype.onMouseEnter = function () {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = false;
            this.sidenavService.nextCurrentlyOpen(this.currentlyOpen);
        }
    };
    IconSidenavDirective.prototype.onMouseLeave = function () {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = true;
            this.currentlyOpen = this.sidenavService.currentlyOpen;
            this.sidenavService.nextCurrentlyOpen([]);
        }
    };
    IconSidenavDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.mediaReplayService.media$.subscribe(function (change) {
            _this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
        });
    };
    IconSidenavDirective.prototype.ngOnDestroy = function () {
        this._mediaSubscription.unsubscribe();
    };
    return IconSidenavDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.icon-sidenav'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], IconSidenavDirective.prototype, "isIconSidenav", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsed'),
    __metadata("design:type", Boolean)
], IconSidenavDirective.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IconSidenavDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IconSidenavDirective.prototype, "onMouseLeave", null);
IconSidenavDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[msIconSidenav]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _b || Object])
], IconSidenavDirective);

var _a, _b;
//# sourceMappingURL=icon-sidenav.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaReplayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaReplayService = (function () {
    function MediaReplayService(media) {
        var _this = this;
        this._media$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        media.asObservable()
            .subscribe(function (res) { return _this._media$.next(res); }, function (err) { return _this._media$.error(err); }, function () { return _this._media$.complete(); });
    }
    Object.defineProperty(MediaReplayService.prototype, "media$", {
        get: function () {
            return this._media$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return MediaReplayService;
}());
MediaReplayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _a || Object])
], MediaReplayService);

var _a;
//# sourceMappingURL=media-replay.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item.isRouteString(); then routeNavItem else functionNavItem\"></div>\r\n\r\n<ng-template #functionNavItem>\r\n  <a class=\"sidenav-anchor\" [ngClass]=\"item.customClass\"\r\n     *ngIf=\"!item.hasSubItems()\"\r\n     md-list-item md-ripple (click)=\"item.route()\">\r\n\r\n    <md-icon>{{ item.icon }}</md-icon>\r\n    <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n    <span fxFlex><!-- fill space --></span>\r\n    <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\">{{ item.badge }}</span>\r\n  </a>\r\n</ng-template>\r\n\r\n\r\n<ng-template #routeNavItem>\r\n  <a class=\"sidenav-anchor\" [ngClass]=\"item.customClass\"\r\n     *ngIf=\"!item.hasSubItems()\"\r\n     md-list-item md-ripple\r\n     [routerLink]=\"[item.route]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\r\n    <md-icon>{{ item.icon }}</md-icon>\r\n    <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n    <span fxFlex><!-- fill space --></span>\r\n    <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\">{{ item.badge }}</span>\r\n  </a>\r\n</ng-template>\r\n\r\n<a class=\"sidenav-anchor\"\r\n   *ngIf=\"item.hasSubItems()\"\r\n   md-list-item md-ripple\r\n   (click)=\"toggleDropdown()\"\r\n   [ngClass]=\"item.customClass\">\r\n\r\n  <md-icon>{{ item.icon }}</md-icon>\r\n  <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n  <span fxFlex><!-- fill space --></span>\r\n  <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\" style=\"margin-right: 12px;\">{{ item.badge }}</span>\r\n  <md-icon *ngIf=\"item.hasSubItems()\" class=\"sidenav-item-dropdown-indicator rotate fade-in-on-icon-sidenav\">expand_more</md-icon>\r\n\r\n</a>\r\n\r\n<md-nav-list class=\"sidenav-list sidenav-list-nested\"\r\n     fxLayout=\"column\" [style.height]=\"getSubItemsHeight()\">\r\n  <ms-sidenav-item *ngFor=\"let subItem of item.subItems\" [item]=\"subItem\"></ms-sidenav-item>\r\n</md-nav-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nmd-nav-list a.sidenav-anchor.mat-list-item .mat-list-item-content {\n  padding-left: 24px;\n  padding-right: 24px; }\n\nmd-nav-list a.sidenav-anchor .sidenav-item-name {\n  margin-left: 24px;\n  font-size: 14px; }\n\nmd-nav-list a.sidenav-anchor md-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px; }\n\n.sidenav-list {\n  transition: height 0.4s cubic-bezier(0.35, 0, 0.25, 1); }\n  .sidenav-list > ms-sidenav-item.open > .sidenav-anchor .sidenav-item-dropdown-indicator {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .sidenav-list > ms-sidenav-item .sidenav-item-dropdown-indicator {\n    transition: -webkit-transform .25s;\n    transition: transform .25s;\n    transition: transform .25s, -webkit-transform .25s; }\n  .sidenav-list > ms-sidenav-item .badge {\n    padding: 4px 8px;\n    font-size: 12px;\n    background: #2196F3;\n    border-radius: 5px;\n    color: #FFF; }\n\n.sidenav-toplevel .sidenav-anchor {\n  position: relative;\n  cursor: pointer;\n  color: #A7A9AE;\n  transition: color .1s;\n  outline: none; }\n  .sidenav-toplevel .sidenav-anchor:hover {\n    color: #FFFFFF; }\n  .sidenav-toplevel .sidenav-anchor.active {\n    color: #FFFFFF; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor:hover {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor.active {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n  background: #262a34; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n    background: #22262f; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n    background: #22262f; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n    background: #20242c; }\n    .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n      padding-left: 10px; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n        background: #1d2028; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n        background: #1d2028; }\n    .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n      background: #1b1e25; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n        padding-left: 20px; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n          background: #181a20; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n          background: #181a20; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n        background: #16181e; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n          padding-left: 30px; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n            background: #121419; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n            background: #121419; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n          background: #101216; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #0d0e12; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #0d0e12; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #08080a; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #08080a; }\n\n.sidenav-toplevel .sidenav-item .sidenav-list-nested {\n  position: relative;\n  padding: 0;\n  overflow: hidden; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:before, .sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    content: \" \";\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    z-index: 3; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:before {\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    top: 0; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_item_model__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavItemComponent = (function () {
    function SidenavItemComponent(sidenavService) {
        this.sidenavService = sidenavService;
        this.sidenavItemClass = true;
    }
    Object.defineProperty(SidenavItemComponent.prototype, "isOpen", {
        get: function () {
            return this.sidenavService.isOpen(this.item);
        },
        enumerable: true,
        configurable: true
    });
    SidenavItemComponent.prototype.ngOnInit = function () {
    };
    SidenavItemComponent.prototype.toggleDropdown = function () {
        if (this.item.hasSubItems()) {
            this.sidenavService.toggleCurrentlyOpen(this.item);
        }
    };
    // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
    SidenavItemComponent.prototype.getSubItemsHeight = function () {
        return (this.getOpenSubItemsCount(this.item) * 48) + "px";
    };
    // Counts the amount of Sub Items there is and returns the count.
    SidenavItemComponent.prototype.getOpenSubItemsCount = function (item) {
        var _this = this;
        var count = 0;
        if (item.hasSubItems() && this.sidenavService.isOpen(item)) {
            count += item.subItems.length;
            item.subItems.forEach(function (subItem) {
                count += _this.getOpenSubItemsCount(subItem);
            });
        }
        return count;
    };
    return SidenavItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('item'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_item_model__["a" /* SidenavItem */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_item_model__["a" /* SidenavItem */]) === "function" && _a || Object)
], SidenavItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], SidenavItemComponent.prototype, "isOpen", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.sidenav-item'),
    __metadata("design:type", Boolean)
], SidenavItemComponent.prototype, "sidenavItemClass", void 0);
SidenavItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-sidenav-item',
        template: __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sidenav_service__["a" /* SidenavService */]) === "function" && _b || Object])
], SidenavItemComponent);

var _a, _b;
//# sourceMappingURL=sidenav-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavItem; });
var SidenavItem = (function () {
    function SidenavItem(model) {
        if (model === void 0) { model = null; }
        if (model) {
            this.name = model.name;
            this.icon = model.icon;
            this.route = model.route;
            this.parent = model.parent;
            this.subItems = this.mapSubItems(model.subItems);
            this.position = model.position;
            this.badge = model.badge;
            this.badgeColor = model.badgeColor;
            this.customClass = model.customClass;
        }
    }
    SidenavItem.prototype.hasSubItems = function () {
        if (this.subItems) {
            return this.subItems.length > 0;
        }
        return false;
    };
    SidenavItem.prototype.hasParent = function () {
        return !!this.parent;
    };
    SidenavItem.prototype.mapSubItems = function (list) {
        if (list) {
            list.forEach(function (item, index) {
                list[index] = new SidenavItem(item);
            });
            return list;
        }
    };
    SidenavItem.prototype.isRouteString = function () {
        return this.route instanceof String || typeof this.route === 'string';
    };
    return SidenavItem;
}());

//# sourceMappingURL=sidenav-item.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-container\" fxLayout=\"column\">\r\n\r\n  <md-toolbar color=\"primary\" class=\"sidenav-toolbar mat-elevation-z2\">\r\n    <div fxLayout=\"row\" style=\"width: 100%;\">\r\n      <span style=\"width: 22px; text-align: center; margin-left: -3px;\" fxFlexAlign=\"center\"><img src=\"assets/img/icon.png\" style=\"width: 25px; vertical-align: text-top;\"></span>\r\n      <img style=\"height: 35px; margin-left: 24px; margin-bottom: -5px;\" src=\"assets/img/logo.png\" fxFlexAlign=\"center\" class=\"fade-in-on-icon-sidenav\">\r\n      <span fxFlex><!-- fill space --></span>\r\n      <div fxHide=\"true\" fxHide.gt-sm=\"false\" fxFlexAlign=\"center\">\r\n        <button md-icon-button (click)=\"toggleIconSidenav()\">\r\n          <md-icon class=\"icon-sidenav-toggle fade-in-on-icon-sidenav\" [class.rotate]=\"isIconSidenav()\">chevron_left</md-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </md-toolbar>\r\n\r\n  <div class=\"sidenav-scrollbar-container\" fxLayout=\"column\">\r\n      <md-nav-list [perfect-scrollbar] fxLayout=\"column\" class=\"sidenav-list sidenav-toplevel\">\r\n        <ms-sidenav-item *ngFor=\"let item of items\" [item]=\"item\"></ms-sidenav-item>\r\n      </md-nav-list>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-toolbar.mat-toolbar.sidenav-toolbar {\n  background: #272B35;\n  padding: 0 14px 0 24px;\n  z-index: 3; }\n\n.sidenav-container, .sidenav-scrollbar-container {\n  height: 100%; }\n\n.cdk-focus-trap-content, md-sidenav {\n  overflow-y: hidden !important;\n  overflow-x: hidden; }\n\n.icon-sidenav-toggle {\n  color: #A7A9AE;\n  transition: -webkit-transform .25s;\n  transition: transform .25s;\n  transition: transform .25s, -webkit-transform .25s; }\n  .icon-sidenav-toggle.rotate {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidenavComponent = (function () {
    function SidenavComponent(sidenavService, router, breadcrumbService, snackBar) {
        this.sidenavService = sidenavService;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.snackBar = snackBar;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidenavService.buildMenu('a@b.com');
        this._itemsSubscription = this.sidenavService.items$
            .subscribe(function (items) {
            _this.items = _this.sortRecursive(items, 'position');
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationEnd */]) {
                _this.sidenavService.nextCurrentlyOpenByRoute(event.url);
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 400);
            }
        });
        this.breadcrumbService.addFriendlyNameForRoute('/projects', "Projects");
    };
    SidenavComponent.prototype.toggleIconSidenav = function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
        this.sidenavService.isIconSidenav = !this.sidenavService.isIconSidenav;
        var snackBarConfig = {
            duration: 10000
        };
        if (this.sidenavService.isIconSidenav) {
            this.snackBar.open('You activated Icon-Sidenav, move your mouse to the content and see what happens!', '', snackBarConfig);
        }
    };
    SidenavComponent.prototype.isIconSidenav = function () {
        return this.sidenavService.isIconSidenav;
    };
    SidenavComponent.prototype.sortRecursive = function (array, propertyName) {
        var that = this;
        array.forEach(function (item) {
            var keys = __WEBPACK_IMPORTED_MODULE_2_lodash__["keys"](item);
            keys.forEach(function (key) {
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isArray"](item[key])) {
                    item[key] = that.sortRecursive(item[key], propertyName);
                }
            });
        });
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](array, propertyName);
    };
    ;
    SidenavComponent.prototype.ngOnDestroy = function () {
        this._itemsSubscription.unsubscribe();
        this._routerEventsSubscription.unsubscribe();
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-sidenav',
        template: __webpack_require__("../../../../../src/app/core/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/sidenav/sidenav.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MdSnackBar */]) === "function" && _d || Object])
], SidenavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidenavService = (function () {
    function SidenavService(http, snackbar) {
        this.http = http;
        this.snackbar = snackbar;
        this._itemsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._items = [];
        this.items$ = this._itemsSubject.asObservable();
        this._currentlyOpenSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._currentlyOpen = [];
        this.currentlyOpen$ = this._currentlyOpenSubject.asObservable();
    }
    SidenavService.prototype.buildMenu = function (userName) {
        this.buildProjectMenu(userName);
    };
    SidenavService.prototype.buildProjectMenu = function (userName) {
        var menu = this;
        var projects = menu.addItem('Projects', 'insert_comment', null, 4);
        var result;
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* URLSearchParams */]();
        params.set('userName', userName);
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({
            search: params
        });
        this.http.get('api/project/GetProjects', options)
            .subscribe(function (response) {
            var projectList = response.json();
            for (var idx = 0; idx < projectList.length; idx++) {
                var project = projectList[idx];
                menu.addSubItem(projects, project.name, '/projects/' + project.id, 3);
            }
        });
    };
    SidenavService.prototype.addItem = function (name, icon, route, position, badge, badgeColor, customClass) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__["a" /* SidenavItem */]({
            name: name,
            icon: icon,
            route: route,
            subItems: [],
            position: position || 99,
            badge: badge || null,
            badgeColor: badgeColor || null,
            customClass: customClass || null
        });
        this._items.push(item);
        this._itemsSubject.next(this._items);
        return item;
    };
    SidenavService.prototype.addSubItem = function (parent, name, route, position) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__["a" /* SidenavItem */]({
            name: name,
            route: route,
            parent: parent,
            subItems: [],
            position: position || 99
        });
        parent.subItems.push(item);
        this._itemsSubject.next(this._items);
        return item;
    };
    SidenavService.prototype.removeItem = function (item) {
        var index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
        }
        this._itemsSubject.next(this._items);
    };
    SidenavService.prototype.isOpen = function (item) {
        return (this._currentlyOpen.indexOf(item) != -1);
    };
    SidenavService.prototype.toggleCurrentlyOpen = function (item) {
        var currentlyOpen = this._currentlyOpen;
        if (this.isOpen(item)) {
            if (currentlyOpen.length > 1) {
                currentlyOpen.length = this._currentlyOpen.indexOf(item);
            }
            else {
                currentlyOpen = [];
            }
        }
        else {
            currentlyOpen = this.getAllParents(item);
        }
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    };
    SidenavService.prototype.getAllParents = function (item, currentlyOpen) {
        if (currentlyOpen === void 0) { currentlyOpen = []; }
        currentlyOpen.unshift(item);
        if (item.hasParent()) {
            return this.getAllParents(item.parent, currentlyOpen);
        }
        else {
            return currentlyOpen;
        }
    };
    SidenavService.prototype.nextCurrentlyOpen = function (currentlyOpen) {
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    };
    SidenavService.prototype.nextCurrentlyOpenByRoute = function (route) {
        var currentlyOpen = [];
        var item = this.findByRouteRecursive(route, this._items);
        if (item && item.hasParent()) {
            currentlyOpen = this.getAllParents(item);
        }
        else if (item) {
            currentlyOpen = [item];
        }
        this.nextCurrentlyOpen(currentlyOpen);
    };
    SidenavService.prototype.findByRouteRecursive = function (route, collection) {
        var _this = this;
        var result = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](collection, { 'route': route });
        if (!result) {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](collection, function (item) {
                if (item.hasSubItems()) {
                    var found = _this.findByRouteRecursive(route, item.subItems);
                    if (found) {
                        result = found;
                        return false;
                    }
                }
            });
        }
        return result;
    };
    Object.defineProperty(SidenavService.prototype, "currentlyOpen", {
        get: function () {
            return this._currentlyOpen;
        },
        enumerable: true,
        configurable: true
    });
    SidenavService.prototype.getSidenavItemByRoute = function (route) {
        return this.findByRouteRecursive(route, this._items);
    };
    return SidenavService;
}());
SidenavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MdSnackBar */]) === "function" && _b || Object])
], SidenavService);

var _a, _b;
//# sourceMappingURL=sidenav.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-wrapper\" fxLayout=\"row\" [ngClass]=\"{ 'focus': focused, 'has-input': input }\" fxFlex (msClickOutside)=\"closeDropdown()\">\n  <md-icon class=\"search-icon\">search</md-icon>\n  <input type=\"search\"\n         autocomplete=\"off\"\n         spellcheck=\"false\"\n         class=\"search-input\"\n         [(ngModel)]=\"input\"\n         (focus)=\"openDropdown()\"\n         placeholder=\"Search...\">\n\n  <div class=\"search-dropdown mat-elevation-z1\">\n    <div class=\"content results\" *ngIf=\"input\" fxLayout=\"column\">\n      <div class=\"heading\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <md-icon class=\"icon\">search</md-icon>\n        Search results for: {{ input }}\n      </div>\n      <div class=\"items\">\n        <div class=\"item\" md-ripple>Form Elements</div>\n        <div class=\"item\" md-ripple>Form Wizard</div>\n        <div class=\"item\" md-ripple>Projects</div>\n        <div class=\"item\" md-ripple>Profile</div>\n        <div class=\"item\" md-ripple>Calendar</div>\n        <div class=\"item\" md-ripple>Profile page</div>\n      </div>\n    </div>\n\n    <div class=\"content recents\" fxLayout=\"row\" *ngIf=\"!input\">\n      <div class=\"recently\" fxLayout=\"column\" fxFlex>\n        <div class=\"heading\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <md-icon class=\"icon\">restore</md-icon>\n          Recently Visited\n        </div>\n        <div class=\"items\">\n          <div class=\"item\" md-ripple *ngFor=\"let item of recentlyVisited\" [routerLink]=\"item.route\" (click)=\"closeDropdown()\">{{ item.name }}</div>\n        </div>\n      </div>\n      <div class=\"frequently\" fxLayout=\"column\" fxFlex fxFlexOffset=\"16px\">\n        <div class=\"heading\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <md-icon class=\"icon\">youtube_searched_for</md-icon>\n          Frequently Visited\n        </div>\n        <div class=\"items\">\n          <div class=\"item\" md-ripple [routerLink]=\"['/forms/form-elements']\">Form Elements</div>\n          <div class=\"item\" md-ripple [routerLink]=\"['/forms/form-wizard']\">Form Wizard</div>\n          <div class=\"item\" md-ripple [routerLink]=\"['/projects']\">Projects</div>\n          <div class=\"item\" md-ripple [routerLink]=\"['/editor']\">WYSIWYG Editor</div>\n          <div class=\"item\" md-ripple [routerLink]=\"['/maps/google-maps']\">Google Maps</div>\n          <div class=\"item\" md-ripple [routerLink]=\"['/components/dialogs']\">Material Dialog</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/toolbar/search-bar/search-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100%; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n.search-wrapper {\n  position: relative;\n  width: 100%; }\n  .search-wrapper .search-icon {\n    position: absolute;\n    font-size: 24px;\n    top: 6px;\n    left: 24px;\n    transition: color 0.2s ease; }\n  .search-wrapper input.search-input {\n    display: block;\n    padding: 8px 8px 8px 72px;\n    box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.06), 0 1px 1px rgba(0, 0, 0, 0.12);\n    height: 36px;\n    transition: all 0.2s ease;\n    border: none;\n    font-size: 16px;\n    -webkit-appearance: textfield;\n       -moz-appearance: textfield;\n            appearance: textfield;\n    font-weight: 300;\n    outline: none;\n    border-radius: 3px;\n    box-sizing: border-box;\n    color: currentColor;\n    background: rgba(48, 52, 65, 0.05);\n    width: 100%; }\n    .search-wrapper input.search-input:hover {\n      background: rgba(48, 52, 65, 0.1); }\n    .search-wrapper input.search-input::-webkit-input-placeholder {\n      color: currentColor; }\n    .search-wrapper input.search-input:-moz-placeholder {\n      opacity: 1;\n      color: currentColor; }\n    .search-wrapper input.search-input::-moz-placeholder {\n      opacity: 1;\n      color: currentColor; }\n    .search-wrapper input.search-input:-ms-input-placeholder {\n      color: currentColor; }\n  .search-wrapper.focus .search-icon {\n    color: rgba(0, 0, 0, 0.87); }\n  .search-wrapper.focus input.search-input {\n    background: white;\n    background: rgba(48, 52, 65, 0.1); }\n    .search-wrapper.focus input.search-input::-webkit-input-placeholder {\n      color: rgba(0, 0, 0, 0.87); }\n    .search-wrapper.focus input.search-input:-moz-placeholder {\n      opacity: 1;\n      color: rgba(0, 0, 0, 0.87); }\n    .search-wrapper.focus input.search-input::-moz-placeholder {\n      opacity: 1;\n      color: rgba(0, 0, 0, 0.87); }\n    .search-wrapper.focus input.search-input:-ms-input-placeholder {\n      color: rgba(0, 0, 0, 0.87); }\n  .search-wrapper.focus .search-dropdown {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    visibility: visible; }\n  .search-wrapper .search-dropdown {\n    background: white;\n    position: absolute;\n    top: 50px;\n    width: 100%;\n    z-index: -1;\n    -webkit-transform: translateY(-110%);\n            transform: translateY(-110%);\n    visibility: hidden;\n    transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    .search-wrapper .search-dropdown .content {\n      padding: 16px;\n      font-size: 14px; }\n      .search-wrapper .search-dropdown .content .heading {\n        font-size: 13px;\n        color: #888;\n        margin-bottom: 2px; }\n        .search-wrapper .search-dropdown .content .heading .icon {\n          font-size: 20px;\n          height: 20px;\n          width: 20px;\n          line-height: 20px;\n          margin-right: 6px; }\n      .search-wrapper .search-dropdown .content .items .item {\n        position: relative;\n        padding: 8px 0 6px 26px;\n        margin: 2px 0;\n        cursor: pointer;\n        transition: background .1s;\n        outline: none; }\n        .search-wrapper .search-dropdown .content .items .item:hover {\n          background: #EFEFEF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toolbar/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = (function () {
    function SearchBarComponent(router, sidenavService) {
        this.router = router;
        this.sidenavService = sidenavService;
        this.recentlyVisited = [];
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Start Demo Data - You can safely remove this
        this.recentlyVisited.push(this.sidenavService.getSidenavItemByRoute('/'));
        this.recentlyVisited.push(this.sidenavService.getSidenavItemByRoute('/apps/chat'));
        this.recentlyVisited.push(this.sidenavService.getSidenavItemByRoute('/tables/fixed-header-table'));
        this.recentlyVisited.push(this.sidenavService.getSidenavItemByRoute('/icons'));
        this.recentlyVisited.push(this.sidenavService.getSidenavItemByRoute('/apps/inbox'));
        // End Demo Data - You can safely remove this
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                var item = _this.sidenavService.getSidenavItemByRoute(event.urlAfterRedirects);
                var index = _this.recentlyVisited.indexOf(item);
                if (index > -1) {
                    _this.recentlyVisited.splice(index, 1);
                }
                _this.recentlyVisited.unshift(item);
                if (_this.recentlyVisited.length > 5) {
                    _this.recentlyVisited.pop();
                }
            }
        });
    };
    SearchBarComponent.prototype.openDropdown = function () {
        this.focused = true;
    };
    SearchBarComponent.prototype.closeDropdown = function () {
        this.focused = false;
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-search-bar',
        template: __webpack_require__("../../../../../src/app/core/toolbar/search-bar/search-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/toolbar/search-bar/search-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__["a" /* SidenavService */]) === "function" && _b || Object])
], SearchBarComponent);

var _a, _b;
//# sourceMappingURL=search-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center stretch\" style=\"height: 100%;\">\r\n  <button class=\"search-button\" md-button (click)=\"open()\">\r\n    <md-icon>search</md-icon>\r\n  </button>\r\n  <md-input-container class=\"search\" floatingPlaceholder=\"false\" [class.search-open]=\"isOpen\">\r\n    <input #input (blur)=\"close()\" mdInput placeholder=\"Search...\">\r\n  </md-input-container>\r\n</div>\r\n\r\n\r\n<!--<div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <div class=\"search-wrapper\" fxLayout=\"row\" [class.focus]=\"isFocused()\" fxShow=\"false\" fxShow.gt-md=\"true\">\r\n    <md-icon class=\"search-icon\">search</md-icon>\r\n    <input type=\"search\"\r\n           autocomplete=\"off\"\r\n           spellcheck=\"off\"\r\n           class=\"search-input\"\r\n           [(ngModel)]=\"search\"\r\n           (focus)=\"focus()\"\r\n           (blur)=\"blur()\"\r\n           placeholder=\"Search\">\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/core/toolbar/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n\n.search {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n  .search.search-open {\n    width: 250px;\n    visibility: visible;\n    opacity: 1;\n    margin-top: 11px; }\n\n.search-button {\n  border-radius: 0;\n  padding: 0;\n  min-width: 50px;\n  max-width: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toolbar/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent(renderer) {
        this.renderer = renderer;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.open = function () {
        var _this = this;
        this.isOpen = true;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.input.nativeElement, 'focus', []);
        }, 100);
    };
    SearchComponent.prototype.close = function () {
        this.isOpen = false;
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SearchComponent.prototype, "input", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-search',
        template: __webpack_require__("../../../../../src/app/core/toolbar/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/toolbar/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar-notifications/toolbar-notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-button\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (msClickOutside)=\"onClickOutside()\">\n  <button class=\"icon-button\" type=\"button\" md-button (click)=\"toggleDropdown()\" [class.open]=\"isOpen\">\n    <md-icon class=\"icon\">notifications_active</md-icon>\n  </button>\n\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    <div class=\"card\">\n      <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div class=\"title\">\n          <div class=\"name\">Notifications</div>\n          <div class=\"extra\">You have 3 new notifications.</div>\n        </div>\n        <button type=\"button\" md-icon-button>\n          <md-icon class=\"icon\">settings</md-icon>\n        </button>\n      </div>\n      <perfect-scrollbar class=\"content\">\n        <div class=\"notification\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">notifications</md-icon>\n          <div class=\"title\" fxLayout=\"column\">\n            <div class=\"name\">This is a notification</div>\n            <div class=\"time\">few sec ago</div>\n          </div>\n          <span fxFlex></span>\n          <button type=\"button\" md-icon-button>\n            <md-icon class=\"close\">close</md-icon>\n          </button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"notification primary\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">shopping_basket</md-icon>\n          <div class=\"title\" fxLayout=\"column\">\n            <div class=\"name\">User bought your template</div>\n            <div class=\"time\">23 min ago</div>\n          </div>\n          <span fxFlex></span>\n          <button type=\"button\" md-icon-button>\n            <md-icon class=\"close\">close</md-icon>\n          </button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"notification accent\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">eject</md-icon>\n          <div class=\"title\" fxLayout=\"column\">\n            <div class=\"name\">Server Crashed</div>\n            <div class=\"time\">an hour ago</div>\n          </div>\n          <span fxFlex></span>\n          <button type=\"button\" md-icon-button>\n            <md-icon class=\"close\">close</md-icon>\n          </button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"notification read\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">cached</md-icon>\n          <div class=\"title\" fxLayout=\"column\">\n            <div class=\"name\">New user registered</div>\n            <div class=\"time\">6 hours ago</div>\n          </div>\n          <span fxFlex></span>\n          <button type=\"button\" md-icon-button>\n            <md-icon class=\"close\">close</md-icon>\n          </button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"notification read\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">code</md-icon>\n          <div class=\"title\" fxLayout=\"column\">\n            <div class=\"name\">John added you as friend</div>\n            <div class=\"time\">yesterday</div>\n          </div>\n          <span fxFlex></span>\n          <button type=\"button\" md-icon-button>\n            <md-icon class=\"close\">close</md-icon>\n          </button>\n        </div>\n      </perfect-scrollbar>\n      <div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div class=\"action\">Mark all as read</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar-notifications/toolbar-notifications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-button {\n  height: 100%;\n  position: relative; }\n  .toolbar-button .icon-button {\n    height: 100%;\n    padding: 0;\n    min-width: 50px; }\n  .toolbar-button .dropdown {\n    background: white;\n    position: absolute;\n    top: 64px;\n    right: 0;\n    min-width: 350px;\n    z-index: -1;\n    -webkit-transform: translateY(-110%) scale(0);\n            transform: translateY(-110%) scale(0);\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    visibility: hidden;\n    transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    @media screen and (max-width: 599px) {\n      .toolbar-button .dropdown {\n        min-width: 100vw;\n        right: -147px; } }\n    .toolbar-button .dropdown.open {\n      -webkit-transform: translateY(0) scale(1);\n              transform: translateY(0) scale(1);\n      visibility: visible; }\n    .toolbar-button .dropdown .card .header {\n      background: #EEEEEE;\n      min-height: 54px;\n      padding-left: 16px;\n      padding-right: 8px;\n      color: #555;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      border-bottom: 1px solid #e0e0e0; }\n      .toolbar-button .dropdown .card .header .extra {\n        font-size: 12px;\n        color: #888; }\n    .toolbar-button .dropdown .card .content {\n      overflow: hidden;\n      max-height: 256px; }\n      .toolbar-button .dropdown .card .content .notification {\n        min-height: 64px;\n        padding: 0 16px 0 14px;\n        position: relative;\n        color: #666;\n        cursor: pointer; }\n        .toolbar-button .dropdown .card .content .notification .icon {\n          height: 28px;\n          width: 28px;\n          line-height: 28px;\n          font-size: 18px;\n          margin-right: 13px;\n          text-align: center;\n          border-radius: 50%;\n          background: #FFF;\n          color: #888;\n          border: 1px solid #EEE; }\n        .toolbar-button .dropdown .card .content .notification .title {\n          font-weight: 500;\n          font-size: 14px; }\n        .toolbar-button .dropdown .card .content .notification .time {\n          font-size: 12px; }\n        .toolbar-button .dropdown .card .content .notification .close {\n          font-size: 18px;\n          width: 18px;\n          height: 18px;\n          line-height: 18px; }\n        .toolbar-button .dropdown .card .content .notification.primary .icon {\n          background: #4CAF50;\n          color: #FFF; }\n        .toolbar-button .dropdown .card .content .notification.accent .icon {\n          background: #E91E63;\n          color: #FFF; }\n        .toolbar-button .dropdown .card .content .notification.warn .icon {\n          background: #f44336;\n          color: #FFF; }\n        .toolbar-button .dropdown .card .content .notification.read {\n          color: #999; }\n          .toolbar-button .dropdown .card .content .notification.read .name {\n            font-weight: normal; }\n    .toolbar-button .dropdown .card .footer {\n      min-height: 42px;\n      border-top: 1px solid #EEE; }\n      .toolbar-button .dropdown .card .footer .action {\n        cursor: pointer;\n        color: #AAA;\n        text-align: center;\n        font-size: 13px; }\n    .toolbar-button .dropdown .card .divider {\n      width: calc(100% - 30px);\n      height: 1px;\n      background: #EEE;\n      margin: 0 16px 0 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar-notifications/toolbar-notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarNotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarNotificationsComponent = (function () {
    function ToolbarNotificationsComponent() {
    }
    ToolbarNotificationsComponent.prototype.ngOnInit = function () {
    };
    ToolbarNotificationsComponent.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    ToolbarNotificationsComponent.prototype.onClickOutside = function () {
        this.isOpen = false;
    };
    return ToolbarNotificationsComponent;
}());
ToolbarNotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-toolbar-notifications',
        template: __webpack_require__("../../../../../src/app/core/toolbar/toolbar-notifications/toolbar-notifications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/toolbar/toolbar-notifications/toolbar-notifications.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarNotificationsComponent);

//# sourceMappingURL=toolbar-notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar-user-button/toolbar-user-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-button-container\" #userButton (msClickOutside)=\"onClickOutside()\">\n  <button class=\"user-button\" md-button (click)=\"toggleDropdown()\" [class.open]=\"isOpen\">\n    <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <img class=\"avatar\" src=\"assets/img/avatars/noavatar.png\">\n      <span class=\"name\" fxHide fxShow.gt-sm>{{userName}}</span>\n      <md-icon class=\"icon\" fxHide fxShow.gt-sm>keyboard_arrow_down</md-icon>\n    </span>\n  </button>\n\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    <div class=\"content\">\n      <div class=\"list\">\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple (click)=\"viewUserProfile();\">\n          <md-icon class=\"icon\">account_circle</md-icon>\n          <span class=\"title\">Profile</span>\n        </div>\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">settings</md-icon>\n          <span class=\"title\">Settings</span>\n        </div>\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">help</md-icon>\n          <span class=\"title\">Help</span>\n        </div>\n        <md-divider></md-divider>\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple (click)=\"logout();\">         \n          <md-icon class=\"icon\">exit_to_app</md-icon>\n          <span class=\"title\">Logout</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar-user-button/toolbar-user-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-button-container {\n  height: 100%;\n  position: relative; }\n  .user-button-container .user-button {\n    height: 100%;\n    min-width: 72px; }\n    .user-button-container .user-button .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%; }\n    .user-button-container .user-button .name {\n      margin: 0 8px 0 10px; }\n    .user-button-container .user-button .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    .user-button-container .user-button.open {\n      background: rgba(0, 0, 0, 0.05); }\n      .user-button-container .user-button.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n  .user-button-container .dropdown {\n    background: white;\n    position: absolute;\n    top: 64px;\n    right: 0;\n    width: 100%;\n    min-width: 160px;\n    z-index: -1;\n    -webkit-transform: translateY(-110%);\n            transform: translateY(-110%);\n    visibility: hidden;\n    transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    .user-button-container .dropdown .content .list .item {\n      height: 48px;\n      padding: 0 16px;\n      position: relative;\n      cursor: pointer; }\n      .user-button-container .dropdown .content .list .item .icon {\n        padding-right: 12px; }\n    .user-button-container .dropdown.open {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar-user-button/toolbar-user-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarUserButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarUserButtonComponent = (function () {
    function ToolbarUserButtonComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ToolbarUserButtonComponent.prototype.ngOnInit = function () {
        this.userName = localStorage.getItem('currentUser');
    };
    ToolbarUserButtonComponent.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    ToolbarUserButtonComponent.prototype.logout = function () {
        localStorage.setItem('currentUser', null);
        //shishir need to call server side function 
        this.router.navigateByUrl('/login');
    };
    ToolbarUserButtonComponent.prototype.viewUserProfile = function () {
        this.router.navigateByUrl('/user-profile/view');
    };
    ToolbarUserButtonComponent.prototype.onClickOutside = function () {
        this.isOpen = false;
    };
    return ToolbarUserButtonComponent;
}());
ToolbarUserButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-toolbar-user-button',
        template: __webpack_require__("../../../../../src/app/core/toolbar/toolbar-user-button/toolbar-user-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/toolbar/toolbar-user-button/toolbar-user-button.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ToolbarUserButtonComponent);

var _a, _b;
//# sourceMappingURL=toolbar-user-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-toolbar mat-elevation-z2\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide=\"false\" fxHide.gt-sm>\r\n    <button (click)=\"sidenav.open()\" md-icon-button>\r\n      <md-icon>menu</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <!--<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"500px\" fxHide fxShow.gt-md>\r\n    <ms-search-bar></ms-search-bar>\r\n  </div>-->\r\n\r\n  <ms-breadcrumbs *ngIf=\"showBreadcrumbs\" [fxHide]=\"true\" [fxHide.gt-sm]=\"false\"></ms-breadcrumbs>\r\n\r\n  <span fxFlex></span>\r\n\r\n  <button [fxHide]=\"true\" [fxHide.gt-sm]=\"false\" md-button class=\"fullscreen-toggle\" (click)=\"toggleFullscreen()\">\r\n    <md-icon *ngIf=\"!isFullscreen\">fullscreen</md-icon>\r\n    <md-icon *ngIf=\"isFullscreen\">fullscreen_exit</md-icon>\r\n  </button>\r\n\r\n  <ms-search></ms-search>\r\n\r\n  <div class=\"\">\r\n    <ms-toolbar-notifications></ms-toolbar-notifications>\r\n  </div>\r\n\r\n  <div class=\"user-button-container\">\r\n    <ms-toolbar-user-button></ms-toolbar-user-button>\r\n  </div>\r\n\r\n  <button md-button class=\"quickpanel-toggle\" (click)=\"quickpanel.open()\">\r\n    <md-icon>format_align_right</md-icon>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("../../../../screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.isFullscreen = false;
        this.showBreadcrumbs = false;
    }
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.toggleFullscreen = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('quickpanel'),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "quickpanel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('sidenav'),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "sidenav", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-toolbar',
        template: __webpack_require__("../../../../../src/app/core/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/utils/click-outside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.msClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.msClickOutside.emit(event);
        }
    };
    return ClickOutsideDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ClickOutsideDirective.prototype, "msClickOutside", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event', '$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[msClickOutside]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ClickOutsideDirective);

var _a;
//# sourceMappingURL=click-outside.directive.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFieldViews/edit-formFieldView.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Edit Form Field View</md-toolbar>\r\n    <md-card-content>\r\n\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   formControlName=\"name\"\r\n                   placeholder=\"View Name\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formViewType.name\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"row\"\r\n                   placeholder=\"Row\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.row\"\r\n                   formControlName=\"row\"\r\n                   [class.invalid]=\"formGroup.controls['row'].touched && !formGroup.controls['row'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['row'].pristine || formGroup.controls['row'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['row'].errors?.required\">Row Number is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Row Span\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.rowSpan\"\r\n                   formControlName=\"rowSpan\"\r\n                   [class.invalid]=\"formGroup.controls['row'].touched && !formGroup.controls['rowSpan'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['rowSpan'].pristine || formGroup.controls['rowSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowSpan'].errors?.required\">Row Span is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"column\"\r\n                   placeholder=\"Column\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.column\"\r\n                   formControlName=\"column\"\r\n                   [class.invalid]=\"formGroup.controls['column'].touched && !formGroup.controls['column'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['column'].pristine || formGroup.controls['column'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['column'].errors?.required\">Column Number is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.columnSpan\"\r\n                   formControlName=\"columnSpan\"\r\n                   [class.invalid]=\"formGroup.controls['columnSpan'].touched && !formGroup.controls['columnSpan'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['columnSpan'].pristine || formGroup.controls['columnSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnSpan'].errors?.required\">Column Span is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-slide-toggle [(ngModel)]=\"formFieldView.readOnly\"\r\n                           formControlName=\"readOnly\" color=\"primary\">\r\n            Read only\r\n          </md-slide-toggle>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-slide-toggle [(ngModel)]=\"formFieldView.hidden\"\r\n                           formControlName=\"hidden\" color=\"primary\">\r\n            Hidden\r\n          </md-slide-toggle>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/formFieldViews/edit-formFieldView.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/formFieldViews/edit-formFieldView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_formFieldViews_service__ = __webpack_require__("../../../../../src/app/main/formFieldViews/shared/formFieldViews.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formFields_shared_formField__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formField.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormFieldViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditFormFieldViewComponent = (function () {
    function EditFormFieldViewComponent(formBuilder, router, route, formFieldViewsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formFieldViewsService = formFieldViewsService;
        this.formFieldView = new __WEBPACK_IMPORTED_MODULE_4__formFields_shared_formField__["a" /* FormFieldView */]();
        this.formViewType = new __WEBPACK_IMPORTED_MODULE_4__formFields_shared_formField__["b" /* FormViewTypeModel */]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: this.formBuilder.control({ value: '', disabled: true }),
            row: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            rowSpan: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            column: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            columnSpan: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            readOnly: [''],
            hidden: [''],
        });
    }
    EditFormFieldViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['projectid'];
            _this.formId = params['formid'];
            _this.formfieldid = params['formfieldid'];
            _this.formFieldViewId = params['formFieldViewid'];
            if (!_this.formFieldViewId)
                return;
            _this.formFieldViewsService.getFormFieldView(_this.formFieldViewId)
                .subscribe(function (formFieldView) {
                _this.formFieldView = formFieldView;
                _this.formViewType = formFieldView.view;
                _this.formGroup.controls['id'].setValue(_this.formFieldViewId);
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    EditFormFieldViewComponent.prototype.saveForm = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        data.id = this.formFieldViewId;
        this.formFieldViewsService.editFormFieldView(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                _this.router.navigateByUrl('/projects/' + _this.projectId + '/forms/' + _this.formId);
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    EditFormFieldViewComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId + '/fields/' + this.formfieldid);
    };
    return EditFormFieldViewComponent;
}());
EditFormFieldViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-edit-formFieldView',
        template: __webpack_require__("../../../../../src/app/main/formFieldViews/edit-formFieldView.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/formFieldViews/edit-formFieldView.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_formFieldViews_service__["a" /* FormFieldViewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_formFieldViews_service__["a" /* FormFieldViewsService */]) === "function" && _d || Object])
], EditFormFieldViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-formFieldView.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFieldViews/formFieldViews.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_formFieldView_component__ = __webpack_require__("../../../../../src/app/main/formFieldViews/edit-formFieldView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_formFieldViews_service__ = __webpack_require__("../../../../../src/app/main/formFieldViews/shared/formFieldViews.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formFieldViewConfig; });








var formFieldViewConfig = {
    imports: [
        __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
        __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MaterialModule */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
        __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
    ],
    declarations: [
        __WEBPACK_IMPORTED_MODULE_6__edit_formFieldView_component__["a" /* EditFormFieldViewComponent */]
    ],
    providers: [
        __WEBPACK_IMPORTED_MODULE_7__shared_formFieldViews_service__["a" /* FormFieldViewsService */]
    ]
};
//# sourceMappingURL=formFieldViews.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFieldViews/formFieldViews.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_formFieldView_component__ = __webpack_require__("../../../../../src/app/main/formFieldViews/edit-formFieldView.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formFieldViewsRoutes; });

var formFieldViewsRoutes = [
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid/formFieldViews/edit/:formFieldViewid', component: __WEBPACK_IMPORTED_MODULE_0__edit_formFieldView_component__["a" /* EditFormFieldViewComponent */] }
];
//# sourceMappingURL=formFieldViews.routing.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFieldViews/shared/formFieldViews.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldViewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormFieldViewsService = (function () {
    function FormFieldViewsService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    FormFieldViewsService.prototype.getFormFieldViews = function (fieldId) {
        return this.http.get('/api/formField/GetFormFieldView?fieldId=' + fieldId, this.options)
            .map(this.extractData);
    };
    FormFieldViewsService.prototype.getFormFieldView = function (formFieldViewId) {
        return this.http.get('/api/formField/GetFieldView?formFieldViewId=' + formFieldViewId)
            .map(function (res) { return res.json(); });
    };
    FormFieldViewsService.prototype.editFormFieldView = function (formFieldView) {
        return this.http.put('/api/formField/EditFormFieldView', JSON.stringify(formFieldView), this.options)
            .map(function (res) { return res.json(); });
    };
    FormFieldViewsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return FormFieldViewsService;
}());
FormFieldViewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FormFieldViewsService);

var _a;
//# sourceMappingURL=formFieldViews.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFields/edit-formField.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Edit Form Field</md-toolbar>\r\n    <md-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"formField.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"formGroup.controls['name'].touched && !formGroup.controls['name'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['name'].pristine || formGroup.controls['name'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['name'].errors?.required\">Field Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"label\"\r\n                   placeholder=\"Label\"\r\n                   [(ngModel)]=\"formField.label\"\r\n                   formControlName=\"label\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"formField.description\"\r\n                   formControlName=\"description\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-select [(ngModel)]=\"formField.fieldTypeID\" placeholder=\"Field Type\" formControlName=\"fieldTypeID\">\r\n            <md-option *ngFor=\"let fieldType of fieldTypes\" [value]=\"fieldType.id\">\r\n              {{fieldType.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"width\"\r\n                   placeholder=\"Width\"\r\n                   required\r\n                   [(ngModel)]=\"formField.width\"\r\n                   formControlName=\"width\"\r\n                   [class.invalid]=\"formGroup.controls['width'].touched && !formGroup.controls['width'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['width'].pristine || formGroup.controls['width'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['width'].errors?.required\">Field Width is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rowNumber\"\r\n                   placeholder=\"Row Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowNumber\"\r\n                   formControlName=\"rowNumber\"\r\n                   [class.invalid]=\"formGroup.controls['rowNumber'].touched && !formGroup.controls['rowNumber'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['rowNumber'].pristine || formGroup.controls['rowNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowNumber'].errors?.required\">Row Number is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Rowspan\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowSpan\"\r\n                   formControlName=\"rowSpan\"\r\n                   [class.invalid]=\"formGroup.controls['rowSpan'].touched && !formGroup.controls['rowSpan'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['rowSpan'].pristine || formGroup.controls['rowSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowSpan'].errors?.required\">Row span is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"columnNumber\"\r\n                   placeholder=\"Column Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnNumber\"\r\n                   formControlName=\"columnNumber\"\r\n                   [class.invalid]=\"formGroup.controls['columnNumber'].touched && !formGroup.controls['columnNumber'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['columnNumber'].pristine || formGroup.controls['columnNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnNumber'].errors?.required\">Column Number is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnSpan\"\r\n                   formControlName=\"columnSpan\"\r\n                   [class.invalid]=\"formGroup.controls['columnSpan'].touched && !formGroup.controls['columnSpan'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['columnSpan'].pristine || formGroup.controls['columnSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnSpan'].errors?.required\">Column Span is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-slide-toggle name=\"isRequired\" [(ngModel)]=\"formField.isRequired\" formControlName=\"isRequired\" color=\"primary\">\r\n            Is Required\r\n          </md-slide-toggle>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/formFields/edit-formField.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/formFields/edit-formField.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_formField__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formField.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditFormFieldComponent = (function () {
    function EditFormFieldComponent(formBuilder, router, route, formFieldsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formFieldsService = formFieldsService;
        this.formField = new __WEBPACK_IMPORTED_MODULE_4__shared_formField__["c" /* FormField */]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            label: [''],
            description: [''],
            fieldTypeID: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            width: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            rowNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            rowSpan: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            columnNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            columnSpan: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            isRequired: [''],
        });
    }
    EditFormFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['projectid'];
            _this.formId = params['formid'];
            _this.formFieldId = params['formfieldid'];
            if (!_this.formFieldId)
                return;
            _this.formFieldsService.getFormField(_this.formFieldId)
                .subscribe(function (formField) {
                _this.formField = formField;
                _this.formGroup.controls['id'].setValue(_this.formFieldId);
                _this.formFieldsService.getFieldTypes()
                    .subscribe(function (data) {
                    _this.fieldTypes = data;
                });
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    EditFormFieldComponent.prototype.saveForm = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        data.id = this.formFieldId;
        this.formFieldsService.editFormField(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                _this.router.navigateByUrl('/projects/' + _this.projectId + '/forms/' + _this.formId);
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    EditFormFieldComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    };
    return EditFormFieldComponent;
}());
EditFormFieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-edit-formField',
        template: __webpack_require__("../../../../../src/app/main/formFields/edit-formField.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/formFields/edit-formField.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__["a" /* FormFieldsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__["a" /* FormFieldsService */]) === "function" && _d || Object])
], EditFormFieldComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-formField.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFields/formFields.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_formField_component__ = __webpack_require__("../../../../../src/app/main/formFields/new-formField.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_formField_component__ = __webpack_require__("../../../../../src/app/main/formFields/edit-formField.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_formField_component__ = __webpack_require__("../../../../../src/app/main/formFields/view-formField.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_formFields_service__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formFields.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formFieldConfig; });










var formFieldConfig = {
    imports: [
        __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
        __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MaterialModule */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
        __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
    ],
    declarations: [
        __WEBPACK_IMPORTED_MODULE_6__new_formField_component__["a" /* NewFormFieldComponent */],
        __WEBPACK_IMPORTED_MODULE_7__edit_formField_component__["a" /* EditFormFieldComponent */],
        __WEBPACK_IMPORTED_MODULE_8__view_formField_component__["a" /* ViewFormFieldComponent */]
    ],
    providers: [
        __WEBPACK_IMPORTED_MODULE_9__shared_formFields_service__["a" /* FormFieldsService */]
    ]
};
//# sourceMappingURL=formFields.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFields/formFields.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_formField_component__ = __webpack_require__("../../../../../src/app/main/formFields/new-formField.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_formField_component__ = __webpack_require__("../../../../../src/app/main/formFields/edit-formField.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_formField_component__ = __webpack_require__("../../../../../src/app/main/formFields/view-formField.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formFieldsRoutes; });



var formFieldsRoutes = [
    { path: 'projects/:projectid/forms/:formid/fields/new', component: __WEBPACK_IMPORTED_MODULE_0__new_formField_component__["a" /* NewFormFieldComponent */] },
    { path: 'projects/:projectid/forms/:formid/fields/edit/:formfieldid', component: __WEBPACK_IMPORTED_MODULE_1__edit_formField_component__["a" /* EditFormFieldComponent */] },
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid', component: __WEBPACK_IMPORTED_MODULE_2__view_formField_component__["a" /* ViewFormFieldComponent */] }
];
//# sourceMappingURL=formFields.routing.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFields/new-formField.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Add Form Field</md-toolbar>\r\n    <md-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"formField.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"formGroup.controls['name'].touched && !formGroup.controls['name'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['name'].pristine || formGroup.controls['name'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['name'].errors?.required\">Field Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"label\"\r\n                   placeholder=\"Label\"\r\n                   [(ngModel)]=\"formField.label\"\r\n                   formControlName=\"label\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"formField.description\"\r\n                   formControlName=\"description\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-select [(ngModel)]=\"formField.fieldTypeID\" placeholder=\"Field Type\" formControlName=\"fieldTypeID\">\r\n            <md-option *ngFor=\"let fieldType of fieldTypes\" [value]=\"fieldType.id\">\r\n              {{fieldType.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"width\"\r\n                   placeholder=\"Width\"\r\n                   required\r\n                   [(ngModel)]=\"formField.width\"\r\n                   formControlName=\"width\"\r\n                   [class.invalid]=\"formGroup.controls['width'].touched && !formGroup.controls['width'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['width'].pristine || formGroup.controls['width'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['width'].errors?.required\">Field Width is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rowNumber\"\r\n                   placeholder=\"Row Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowNumber\"\r\n                   formControlName=\"rowNumber\"\r\n                   [class.invalid]=\"formGroup.controls['rowNumber'].touched && !formGroup.controls['rowNumber'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['rowNumber'].pristine || formGroup.controls['rowNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowNumber'].errors?.required\">Row Number is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Rowspan\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowSpan\"\r\n                   formControlName=\"rowSpan\"\r\n                   [class.invalid]=\"formGroup.controls['rowSpan'].touched && !formGroup.controls['rowSpan'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['rowSpan'].pristine || formGroup.controls['rowSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowSpan'].errors?.required\">Row span is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"columnNumber\"\r\n                   placeholder=\"Column Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnNumber\"\r\n                   formControlName=\"columnNumber\"\r\n                   [class.invalid]=\"formGroup.controls['columnNumber'].touched && !formGroup.controls['columnNumber'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['columnNumber'].pristine || formGroup.controls['columnNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnNumber'].errors?.required\">Column Number is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnSpan\"\r\n                   formControlName=\"columnSpan\"\r\n                   [class.invalid]=\"formGroup.controls['columnSpan'].touched && !formGroup.controls['columnSpan'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['columnSpan'].pristine || formGroup.controls['columnSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnSpan'].errors?.required\">Column Span is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-slide-toggle  name=\"isRequired\"  [(ngModel)]=\"formField.isRequired\"  formControlName=\"isRequired\" color=\"primary\">\r\n            Is Required\r\n          </md-slide-toggle>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/formFields/new-formField.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/formFields/new-formField.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_formField__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formField.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFormFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewFormFieldComponent = (function () {
    function NewFormFieldComponent(formBuilder, router, route, formFieldsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formFieldsService = formFieldsService;
        this.formField = new __WEBPACK_IMPORTED_MODULE_4__shared_formField__["c" /* FormField */]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            label: [''],
            description: [''],
            fieldTypeID: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            width: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            rowNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            rowSpan: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            columnNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            columnSpan: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            isRequired: [''],
        });
    }
    NewFormFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['projectid'];
            _this.formId = params['formid'];
            _this.formFieldId = params['formfieldid'];
            if (_this.formFieldId)
                return;
            _this.formFieldsService.getFieldTypes()
                .subscribe(function (data) {
                _this.fieldTypes = data;
            });
        });
    };
    NewFormFieldComponent.prototype.saveForm = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        this.formFieldsService.addFormField(data)
            .subscribe(function (response) {
            if (response.statusCode == 201) {
                _this.router.navigateByUrl('/projects/' + _this.projectId + '/forms/' + _this.formId);
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    NewFormFieldComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    };
    return NewFormFieldComponent;
}());
NewFormFieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-new-formField',
        template: __webpack_require__("../../../../../src/app/main/formFields/new-formField.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/formFields/new-formField.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__["a" /* FormFieldsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__["a" /* FormFieldsService */]) === "function" && _d || Object])
], NewFormFieldComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-formField.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFields/shared/formField.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormViewTypeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FormField; });
/* unused harmony export EditFormFields */
/* unused harmony export DeleteFormFields */
/* unused harmony export EditFormFieldsView */
/* unused harmony export FieldType */
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
var FormViewTypeModel = (function () {
    function FormViewTypeModel() {
    }
    return FormViewTypeModel;
}());

var FormFieldView = (function () {
    function FormFieldView() {
    }
    return FormFieldView;
}());

var FormField = (function () {
    function FormField() {
    }
    return FormField;
}());

var EditFormFields = (function (_super) {
    __extends(EditFormFields, _super);
    function EditFormFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EditFormFields;
}(FormField));

var DeleteFormFields = (function (_super) {
    __extends(DeleteFormFields, _super);
    function DeleteFormFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeleteFormFields;
}(FormField));

var EditFormFieldsView = (function (_super) {
    __extends(EditFormFieldsView, _super);
    function EditFormFieldsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EditFormFieldsView;
}(FormField));

var FieldType = (function () {
    function FieldType() {
    }
    return FieldType;
}());

//# sourceMappingURL=formField.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFields/shared/formFields.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormFieldsService = (function () {
    function FormFieldsService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    FormFieldsService.prototype.getFormFields = function (formId) {
        return this.http.get('/api/formField/GetFormFields?formId=' + formId, this.options)
            .map(this.extractData);
    };
    FormFieldsService.prototype.getFormField = function (fieldId) {
        return this.http.get('/api/formField/GetFormField?fieldId=' + fieldId)
            .map(function (res) { return res.json(); });
    };
    FormFieldsService.prototype.addFormField = function (formField) {
        return this.http.post('/api/formField/AddFormField', JSON.stringify(formField), this.options)
            .map(function (res) { return res.json(); });
    };
    FormFieldsService.prototype.editFormField = function (formField) {
        return this.http.put('/api/formField/EditFormField', JSON.stringify(formField), this.options)
            .map(function (res) { return res.json(); });
    };
    FormFieldsService.prototype.deleteFormForm = function (formFieldId) {
        return this.http.delete('/api/formField/DeleteFormField?formFieldId=' + formFieldId)
            .map(function (res) { return res.json(); });
    };
    FormFieldsService.prototype.getFieldTypes = function () {
        return this.http.get('/api/formField/GetFieldTypes')
            .map(function (res) { return res.json(); });
    };
    FormFieldsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return FormFieldsService;
}());
FormFieldsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FormFieldsService);

var _a;
//# sourceMappingURL=formFields.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/formFields/view-formField.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">View Form Field</md-toolbar>\r\n    <md-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.name\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"label\"\r\n                   placeholder=\"Label\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.label\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.description\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-select [(ngModel)]=\"formField.fieldTypeID\" placeholder=\"Field Type\" name=\"fieldTypeID\"  [disabled]=\"true\">\r\n            <md-option *ngFor=\"let fieldType of fieldTypes\" [value]=\"fieldType.id\">\r\n              {{fieldType.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"width\"\r\n                   placeholder=\"Width\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.width\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"rowNumber\"\r\n                   placeholder=\"Row Number\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.rowNumber\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Row span\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.rowSpan\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"columnNumber\"\r\n                   placeholder=\"Column Number\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.columnNumber\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.columnSpan\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <md-checkbox name=\"isRequired\"\r\n                       [disabled]=\"true\"\r\n                       [(ngModel)]=\"formField.isRequired\"\r\n                       color=\"primary\">\r\n            Is Required\r\n          </md-checkbox>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"warn\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Delete\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editFormField(projectId,formField.formID,formField.id);\">\r\n            Edit\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>View Name</th>\r\n                <th>Row</th>\r\n                <th>Row Span</th>\r\n                <th>Column</th>\r\n                <th>Column Span</th>\r\n                <th>Read Only</th>\r\n                <th>Hidden</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let formFieldView of formFieldViews\">\r\n                <td>{{ formFieldView.view.name }}</td>\r\n                <td>{{ formFieldView.row }}</td>\r\n                <td>{{ formFieldView.rowSpan }}</td>\r\n                <td>{{ formFieldView.column }}</td>\r\n                <td>{{ formFieldView.columnSpan }}</td>\r\n                <td><button md-icon-button> <md-icon>{{ formFieldView.readOnly?\"check\":\"close\"}}</md-icon></button></td>\r\n                <td><button md-icon-button> <md-icon>{{ formFieldView.hidden?\"check\":\"close\"}}</md-icon></button></td>\r\n                <td>\r\n                  <button md-icon-button (click)=\"editFormFieldView(this.projectId,formField.formID,formField.id, formFieldView.id);\" style=\"margin-left: 1px;\"><md-icon>edit</md-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/formFields/view-formField.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/formFields/view-formField.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formFieldViews_shared_formFieldViews_service__ = __webpack_require__("../../../../../src/app/main/formFieldViews/shared/formFieldViews.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_formField__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formField.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFormFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewFormFieldComponent = (function () {
    function ViewFormFieldComponent(formBuilder, router, route, formFieldsService, formFieldViewsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formFieldsService = formFieldsService;
        this.formFieldViewsService = formFieldViewsService;
        this.formField = new __WEBPACK_IMPORTED_MODULE_5__shared_formField__["c" /* FormField */]();
    }
    ViewFormFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['projectid'];
            _this.formId = params['formid'];
            _this.formFieldId = params['formfieldid'];
            if (!_this.formFieldId)
                return;
            _this.formFieldsService.getFormField(_this.formFieldId)
                .subscribe(function (formField) {
                _this.formField = formField;
                _this.formFieldsService.getFieldTypes()
                    .subscribe(function (data) {
                    _this.fieldTypes = data;
                });
                _this.formFieldViewsService.getFormFieldViews(_this.formField.id)
                    .subscribe(function (data) {
                    _this.formFieldViews = data;
                });
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    ViewFormFieldComponent.prototype.editFormField = function (projectId, formId, fieldId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/edit/' + fieldId);
    };
    ViewFormFieldComponent.prototype.editFormFieldView = function (projectId, formId, fieldId, formFieldViewId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/' + fieldId + '/formFieldViews/edit/' + formFieldViewId);
    };
    ViewFormFieldComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    };
    return ViewFormFieldComponent;
}());
ViewFormFieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-view-formField',
        template: __webpack_require__("../../../../../src/app/main/formFields/view-formField.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/formFields/view-formField.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__["a" /* FormFieldsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_formFields_service__["a" /* FormFieldsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__formFieldViews_shared_formFieldViews_service__["a" /* FormFieldViewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__formFieldViews_shared_formFieldViews_service__["a" /* FormFieldViewsService */]) === "function" && _e || Object])
], ViewFormFieldComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view-formField.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/forms/edit-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Edit Form</md-toolbar>\r\n    <md-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout column>\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"formName\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"form.formName\"\r\n                   formControlName=\"formName\"\r\n                   [class.invalid]=\"formGroup.controls['formName'].touched && !formGroup.controls['formName'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['formName'].pristine || formGroup.controls['formName'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formName'].errors?.required\">Form Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"formTitle\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"form.formTitle\"\r\n                   formControlName=\"formTitle\"\r\n                   [class.invalid]=\"formGroup.controls['formTitle'].touched && !formGroup.controls['formTitle'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['formTitle'].pristine || formGroup.controls['formTitle'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formTitle'].errors?.required\">Form Title is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-select [(ngModel)]=\"form.dependencyID\" placeholder=\"Dependency\" formControlName=\"dependencyID\">\r\n            <md-option *ngFor=\"let currentForm of forms\" [value]=\"currentForm.id\">\r\n              {{currentForm.title}}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"formDescription\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"form.formDescription\"\r\n                   formControlName=\"formDescription\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n\r\n\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/forms/edit-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/forms/edit-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_service__ = __webpack_require__("../../../../../src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_form__ = __webpack_require__("../../../../../src/app/main/forms/shared/form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditFormComponent = (function () {
    function EditFormComponent(formBuilder, router, route, formsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formsService = formsService;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__shared_form__["a" /* Form */]();
        this.formGroup = formBuilder.group({
            id: [''],
            formName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            formTitle: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            formDescription: [''],
            dependencyID: ['']
        });
    }
    EditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            _this.projectId = params['projectid'];
            _this.formId = params['formid'];
            if (!_this.formId)
                return;
            _this.formsService.getForm(_this.formId)
                .subscribe(function (form) {
                _this.form = form;
                _this.formGroup.controls['id'].setValue(_this.formId);
                _this.formsService.getForms(_this.projectId)
                    .subscribe(function (data) {
                    _this.forms = data.filter(function (x) { return x.id != _this.formId; });
                });
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    EditFormComponent.prototype.saveForm = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.id = this.formId;
        data.projectID = this.projectId;
        this.formsService.editForm(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                _this.router.navigateByUrl('/projects/' + _this.projectId);
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    EditFormComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId);
    };
    return EditFormComponent;
}());
EditFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-edit-form',
        template: __webpack_require__("../../../../../src/app/main/forms/edit-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/forms/edit-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_forms_service__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_forms_service__["a" /* FormsService */]) === "function" && _d || Object])
], EditFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_form_component__ = __webpack_require__("../../../../../src/app/main/forms/new-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_form_component__ = __webpack_require__("../../../../../src/app/main/forms/edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_form_component__ = __webpack_require__("../../../../../src/app/main/forms/view-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_forms_service__ = __webpack_require__("../../../../../src/app/main/forms/shared/forms.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formConfig; });










var formConfig = {
    imports: [
        __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
        __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MaterialModule */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
        __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
    ],
    declarations: [
        __WEBPACK_IMPORTED_MODULE_6__new_form_component__["a" /* NewFormComponent */],
        __WEBPACK_IMPORTED_MODULE_7__edit_form_component__["a" /* EditFormComponent */],
        __WEBPACK_IMPORTED_MODULE_8__view_form_component__["a" /* ViewFormComponent */]
    ],
    providers: [
        __WEBPACK_IMPORTED_MODULE_9__shared_forms_service__["a" /* FormsService */]
    ]
};
//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/forms/forms.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_form_component__ = __webpack_require__("../../../../../src/app/main/forms/edit-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_form_component__ = __webpack_require__("../../../../../src/app/main/forms/new-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_form_component__ = __webpack_require__("../../../../../src/app/main/forms/view-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formsRoutes; });



var formsRoutes = [
    { path: 'projects/:projectid/forms/new', component: __WEBPACK_IMPORTED_MODULE_1__new_form_component__["a" /* NewFormComponent */] },
    { path: 'projects/:projectid/forms/edit/:formid', component: __WEBPACK_IMPORTED_MODULE_0__edit_form_component__["a" /* EditFormComponent */] },
    { path: 'projects/:projectid/forms/:formid', component: __WEBPACK_IMPORTED_MODULE_2__view_form_component__["a" /* ViewFormComponent */] }
];
//# sourceMappingURL=forms.routing.js.map

/***/ }),

/***/ "../../../../../src/app/main/forms/new-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Add Form</md-toolbar>\r\n    <md-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"formName\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"form.formName\"\r\n                   formControlName=\"formName\"\r\n                   [class.invalid]=\"formGroup.controls['formName'].touched && !formGroup.controls['formName'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['formName'].pristine || formGroup.controls['formName'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formName'].errors?.required\">Form Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"formTitle\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"form.formTitle\"\r\n                   formControlName=\"formTitle\"\r\n                   [class.invalid]=\"formGroup.controls['formTitle'].touched && !formGroup.controls['formTitle'].valid\" />\r\n            <md-hint [hidden]=\"formGroup.controls['formTitle'].pristine || formGroup.controls['formTitle'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formTitle'].errors?.required\">Form Title is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-select [(ngModel)]=\"form.dependencyID\" placeholder=\"Dependency\" formControlName=\"dependencyID\">\r\n            <md-option *ngFor=\"let currentForm of forms\" [value]=\"currentForm.id\">\r\n              {{currentForm.title}}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"formDescription\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"form.formDescription\"\r\n                   formControlName=\"formDescription\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/forms/new-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/forms/new-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_service__ = __webpack_require__("../../../../../src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_form__ = __webpack_require__("../../../../../src/app/main/forms/shared/form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewFormComponent = (function () {
    function NewFormComponent(formBuilder, router, route, formsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formsService = formsService;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__shared_form__["a" /* Form */]();
        this.formGroup = formBuilder.group({
            id: [''],
            formName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            formTitle: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            formDescription: [''],
            dependencyID: ['']
        });
    }
    NewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['projectid'];
            _this.formId = params['formid'];
            if (_this.formId)
                return;
            _this.formsService.getForms(_this.projectId)
                .subscribe(function (data) {
                _this.forms = data;
            });
        });
    };
    NewFormComponent.prototype.saveForm = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        this.formsService.addForm(data)
            .subscribe(function (response) {
            if (response.statusCode == 201) {
                _this.router.navigateByUrl('/projects/' + _this.projectId);
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    NewFormComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId);
    };
    return NewFormComponent;
}());
NewFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-new-form',
        template: __webpack_require__("../../../../../src/app/main/forms/new-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/forms/new-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_forms_service__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_forms_service__["a" /* FormsService */]) === "function" && _d || Object])
], NewFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/forms/shared/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
//shishir: need to evaluate if bases interface is nice to have
var Form = (function () {
    function Form() {
    }
    return Form;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ "../../../../../src/app/main/forms/shared/forms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsService = (function () {
    function FormsService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    FormsService.prototype.getForms = function (projectId) {
        return this.http.get('/api/form/GetForms?projectId=' + projectId, this.options)
            .map(this.extractData);
    };
    FormsService.prototype.getForm = function (formId) {
        return this.http.get('/api/form/GetForm?formId=' + formId)
            .map(function (res) { return res.json(); });
    };
    FormsService.prototype.addForm = function (form) {
        return this.http.post("/api/form/addform/", JSON.stringify(form), this.options)
            .map(function (res) { return res.json(); });
    };
    FormsService.prototype.editForm = function (form) {
        return this.http.put("/api/form/editform/", JSON.stringify(form), this.options)
            .map(function (res) { return res.json(); });
    };
    FormsService.prototype.deleteForm = function (id) {
        return this.http.delete("/api/form/deleteform?formid=" + id)
            .map(function (res) { return res.json(); });
    };
    FormsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return FormsService;
}());
FormsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FormsService);

var _a;
//# sourceMappingURL=forms.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/forms/view-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">View Form</md-toolbar>\r\n    <md-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"formName\"\r\n                   placeholder=\"Name\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"form.formName\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"formTitle\"\r\n                   placeholder=\"Title\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"form.formTitle\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-select [(ngModel)]=\"form.dependencyID\" placeholder=\"Dependency\" name=\"dependencyID\" [disabled]=\"true\">\r\n            <md-option *ngFor=\"let currentForm of forms\" [value]=\"currentForm.id\">\r\n              {{currentForm.title}}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"formDescription\"\r\n                   placeholder=\"Description\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"form.formDescription\" />\r\n          </md-input-container>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"warn\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Delete\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editForm(form.projectID,form.id);\">\r\n            Edit\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"addFormField(form.projectID, form.id);\">\r\n            Add Form Field\r\n          </button>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Is Required</th>\r\n                <th>Modified by</th>\r\n                <th> Modified date</th>\r\n                <th> Action   </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let formField of formFields\">\r\n                <td>{{ formField.name }}</td>\r\n                <td><button md-icon-button> <md-icon>{{ formField.isRequired?\"check\":\"close\"}}</md-icon></button></td>\r\n\r\n                <td>{{ formField.lastModifiedBy }}</td>\r\n                <td>{{ formField.lastModifiedDateUtc |date }}</td>\r\n\r\n                <td hidden=\"hidden\">{{ form.dependencyID }}</td>\r\n                <td>\r\n                  <button md-icon-button (click)=\"viewFormField(form.projectID,form.id,formField.id);\" style=\"margin-left: 1px;\"><md-icon>pageview</md-icon></button>\r\n                  <button md-icon-button (click)=\"editFormField(form.projectID,form.id,formField.id);\" style=\"margin-left: 1px;\"><md-icon>edit</md-icon></button>\r\n                  <button md-icon-button (click)=\"deleteFormField(form.projectID,form.id,formField.id);\" style=\"margin-left: 1px;\"><md-icon>delete</md-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/forms/view-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/forms/view-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_forms_service__ = __webpack_require__("../../../../../src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formFields_shared_formFields_service__ = __webpack_require__("../../../../../src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_form__ = __webpack_require__("../../../../../src/app/main/forms/shared/form.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewFormComponent = (function () {
    function ViewFormComponent(router, route, formsService, formFieldsService) {
        this.router = router;
        this.route = route;
        this.formsService = formsService;
        this.formFieldsService = formFieldsService;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__shared_form__["a" /* Form */]();
        this.cellWidths = [];
        this.tableHover = true;
        this.tableStriped = true;
        this.tableCondensed = true;
    }
    ViewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            _this.formId = params['formid'];
            _this.projectId = params['projectid'];
            if (!_this.formId)
                return;
            _this.formsService.getForm(_this.formId)
                .subscribe(function (form) {
                _this.form = form;
                _this.form.id = _this.formId;
                _this.formsService.getForms(_this.projectId)
                    .subscribe(function (data) {
                    _this.forms = data.filter(function (x) { return x.id != _this.formId; });
                });
                _this.formFieldsService.getFormFields(_this.formId)
                    .subscribe(function (data) {
                    _this.formFields = data;
                });
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    ViewFormComponent.prototype.ngAfterViewInit = function () {
    };
    ViewFormComponent.prototype.editForm = function (projectId, formId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/edit/' + formId);
    };
    ViewFormComponent.prototype.deleteForm = function (projectId, formId) {
        // to do 
    };
    ViewFormComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId);
    };
    ViewFormComponent.prototype.viewFormField = function (projectId, formId, fieldId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/' + fieldId);
    };
    ViewFormComponent.prototype.addFormField = function (projectId, formId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/new');
    };
    ViewFormComponent.prototype.editFormField = function (projectId, formId, fieldId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/edit/' + fieldId);
    };
    ViewFormComponent.prototype.deleteFormField = function (projectId, formId, fieldId) {
        // to do 
    };
    return ViewFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tbody'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ViewFormComponent.prototype, "tbody", void 0);
ViewFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-view-form',
        template: __webpack_require__("../../../../../src/app/main/forms/view-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/forms/view-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_forms_service__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_forms_service__["a" /* FormsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__formFields_shared_formFields_service__["a" /* FormFieldsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__formFields_shared_formFields_service__["a" /* FormFieldsService */]) === "function" && _e || Object])
], ViewFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n  <md-sidenav class=\"sidenav\" [opened]=\"sidenavOpen\" align=\"start\" [mode]=\"sidenavMode\" msIconSidenav #sidenav>\r\n    <ms-sidenav></ms-sidenav>\r\n  </md-sidenav>\r\n  \r\n  <div class=\"content-container\" fxLayout=\"column\">\r\n    <ms-toolbar [quickpanel]=\"quickpanel\" [sidenav]=\"sidenav\"></ms-toolbar>\r\n    <div class=\"main-container\" #scrollContainer>\r\n      <router-outlet (activate)=\"onActivate($event, scrollContainer)\"></router-outlet>\r\n    </div>\r\n  </div>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.main-toolbar {\n  background: #ffffff;\n  padding-right: 0;\n  height: 64px;\n  padding-left: 16px; }\n  .main-toolbar .user-button-container {\n    height: 100%; }\n  .main-toolbar button.fullscreen-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 50px;\n    max-width: 50px;\n    height: 100%; }\n  .main-toolbar button.quickpanel-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 75px;\n    max-width: 75px;\n    height: 100%; }\n\n.mat-sidenav.quickpanel {\n  z-index: 100;\n  width: 330px;\n  min-width: 330px;\n  max-width: 330px; }\n\n@media screen and (max-width: 959px) {\n  .mat-sidenav.quickpanel {\n    width: 250px;\n    min-width: 250px;\n    max-width: 250px; }\n  button.user-button {\n    min-width: 72px; } }\n\n@media screen and (min-width: 960px) {\n  .mat-sidenav-backdrop {\n    z-index: 50 !important; } }\n\n.sidenav {\n  width: 250px;\n  max-width: 250px;\n  background: #2B303B;\n  overflow-x: hidden;\n  z-index: 4; }\n\n.content-container {\n  height: 100%; }\n\n.main-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100% - 64px);\n  position: relative; }\n\n@media screen and (min-width: 960px) {\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: max-width, margin-left, margin-right, -webkit-transform !important;\n    transition-property: transform, max-width, margin-left, margin-right !important;\n    transition-property: transform, max-width, margin-left, margin-right, -webkit-transform !important;\n    margin-left: 0 !important;\n    background: #EEE;\n    z-index: 5;\n    overflow: hidden;\n    box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.4); }\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 250px);\n    -webkit-transform: translate3d(250px, 0, 0) !important;\n            transform: translate3d(250px, 0, 0) !important; }\n  .sidenav.icon-sidenav.collapsed + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav.collapsed + .mat-sidenav-content {\n    max-width: calc(100% - 68px);\n    -webkit-transform: translate3d(68px, 0, 0) !important;\n            transform: translate3d(68px, 0, 0) !important; }\n  .sidenav.icon-sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 68px); }\n  .sidenav.collapsed .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout; }\n  .sidenav:not(.collapsed) .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, mediaReplayService) {
        this.router = router;
        this.mediaReplayService = mediaReplayService;
        this.quickpanelOpen = false;
        this.sidenavOpen = true;
        this.sidenavMode = 'side';
        this.isMobile = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.mediaReplayService.media$.subscribe(function (change) {
            var isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.isMobile = isMobile;
            _this.sidenavMode = (isMobile) ? 'over' : 'side';
            _this.sidenavOpen = !isMobile;
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */] && _this.isMobile) {
                _this.sidenav.close();
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this._mediaSubscription.unsubscribe();
    };
    HomeComponent.prototype.onActivate = function (e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "sidenav", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-home',
        template: __webpack_require__("../../../../../src/app/main/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/home/home.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Buttons</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Material Icons</h3>\r\n            <h4>&lt;md-icon&gt;</h4>\r\n            <p>Icons are a neat way to add some live to only-text lists. Our theme comes with a great variety of icons from the official Material Icons font.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;md-icon&gt;grade&lt;/md-icon&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                    <md-icon>grade</md-icon>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(iconsHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div>\r\n        <h2>List of all Material Icons</h2>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"20%\" *ngFor=\"let icon of icons\">\r\n            <md-icon>{{ icon }}</md-icon>\r\n            <span class=\"icon-name\">{{ icon }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nmd-icon {\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n  margin: 24px 16px 8px;\n  color: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsComponent = (function () {
    function IconsComponent() {
        this.iconsHTML = "<md-icon>grade</md-icon>";
        this.icons = [
            "3d_rotation",
            "access_alarm",
            "access_alarms",
            "access_time",
            "accessibility",
            "account_balance",
            "account_balance_wallet",
            "account_box",
            "account_circle",
            "adb",
            "add",
            "add_alarm",
            "add_alert",
            "add_box",
            "add_circle",
            "add_circle_outline",
            "add_shopping_cart",
            "add_to_photos",
            "adjust",
            "airline_seat_flat",
            "airline_seat_flat_angled",
            "airline_seat_individual_suite",
            "airline_seat_legroom_extra",
            "airline_seat_legroom_normal",
            "airline_seat_legroom_reduced",
            "airline_seat_recline_extra",
            "airline_seat_recline_normal",
            "airplanemode_active",
            "airplanemode_inactive",
            "airplay",
            "alarm",
            "alarm_add",
            "alarm_off",
            "alarm_on",
            "album",
            "android",
            "announcement",
            "apps",
            "archive",
            "arrow_back",
            "arrow_drop_down",
            "arrow_drop_down_circle",
            "arrow_drop_up",
            "arrow_forward",
            "aspect_ratio",
            "assessment",
            "assignment",
            "assignment_ind",
            "assignment_late",
            "assignment_return",
            "assignment_returned",
            "assignment_turned_in",
            "assistant",
            "assistant_photo",
            "attach_file",
            "attach_money",
            "attachment",
            "audiotrack",
            "autorenew",
            "av_timer",
            "backspace",
            "backup",
            "battery_alert",
            "battery_charging_full",
            "battery_full",
            "battery_std",
            "battery_unknown",
            "beenhere",
            "block",
            "bluetooth",
            "bluetooth_audio",
            "bluetooth_connected",
            "bluetooth_disabled",
            "bluetooth_searching",
            "blur_circular",
            "blur_linear",
            "blur_off",
            "blur_on",
            "book",
            "bookmark",
            "bookmark_border",
            "border_all",
            "border_bottom",
            "border_clear",
            "border_color",
            "border_horizontal",
            "border_inner",
            "border_left",
            "border_outer",
            "border_right",
            "border_style",
            "border_top",
            "border_vertical",
            "brightness_1",
            "brightness_2",
            "brightness_3",
            "brightness_4",
            "brightness_5",
            "brightness_6",
            "brightness_7",
            "brightness_auto",
            "brightness_high",
            "brightness_low",
            "brightness_medium",
            "broken_image",
            "brush",
            "bug_report",
            "build",
            "business",
            "cached",
            "cake",
            "call",
            "call_end",
            "call_made",
            "call_merge",
            "call_missed",
            "call_received",
            "call_split",
            "camera",
            "camera_alt",
            "camera_enhance",
            "camera_front",
            "camera_rear",
            "camera_roll",
            "cancel",
            "card_giftcard",
            "card_membership",
            "card_travel",
            "cast",
            "cast_connected",
            "center_focus_strong",
            "center_focus_weak",
            "change_history",
            "chat",
            "chat_bubble",
            "chat_bubble_outline",
            "check",
            "check_box",
            "check_box_outline_blank",
            "check_circle",
            "chevron_left",
            "chevron_right",
            "chrome_reader_mode",
            "class",
            "clear",
            "clear_all",
            "close",
            "closed_caption",
            "cloud",
            "cloud_circle",
            "cloud_done",
            "cloud_download",
            "cloud_off",
            "cloud_queue",
            "cloud_upload",
            "code",
            "collections",
            "collections_bookmark",
            "color_lens",
            "colorize",
            "comment",
            "compare",
            "computer",
            "confirmation_number",
            "contact_phone",
            "contacts",
            "content_copy",
            "content_cut",
            "content_paste",
            "control_point",
            "control_point_duplicate",
            "create",
            "credit_card",
            "crop",
            "crop_16_9",
            "crop_3_2",
            "crop_5_4",
            "crop_7_5",
            "crop_din",
            "crop_free",
            "crop_landscape",
            "crop_original",
            "crop_portrait",
            "crop_square",
            "dashboard",
            "data_usage",
            "dehaze",
            "delete",
            "description",
            "desktop_mac",
            "desktop_windows",
            "details",
            "developer_board",
            "developer_mode",
            "device_hub",
            "devices",
            "dialer_sip",
            "dialpad",
            "directions",
            "directions_bike",
            "directions_boat",
            "directions_bus",
            "directions_car",
            "directions_railway",
            "directions_run",
            "directions_subway",
            "directions_transit",
            "directions_walk",
            "disc_full",
            "dns",
            "do_not_disturb",
            "do_not_disturb_alt",
            "dock",
            "domain",
            "done",
            "done_all",
            "drafts",
            "drive_eta",
            "dvr",
            "edit",
            "eject",
            "email",
            "equalizer",
            "error",
            "error_outline",
            "event",
            "event_available",
            "event_busy",
            "event_note",
            "event_seat",
            "exit_to_app",
            "expand_less",
            "expand_more",
            "explicit",
            "explore",
            "exposure",
            "exposure_neg_1",
            "exposure_neg_2",
            "exposure_plus_1",
            "exposure_plus_2",
            "exposure_zero",
            "extension",
            "face",
            "fast_forward",
            "fast_rewind",
            "favorite",
            "favorite_border",
            "feedback",
            "file_download",
            "file_upload",
            "filter",
            "filter_1",
            "filter_2",
            "filter_3",
            "filter_4",
            "filter_5",
            "filter_6",
            "filter_7",
            "filter_8",
            "filter_9",
            "filter_9_plus",
            "filter_b_and_w",
            "filter_center_focus",
            "filter_drama",
            "filter_frames",
            "filter_hdr",
            "filter_list",
            "filter_none",
            "filter_tilt_shift",
            "filter_vintage",
            "find_in_page",
            "find_replace",
            "flag",
            "flare",
            "flash_auto",
            "flash_off",
            "flash_on",
            "flight",
            "flight_land",
            "flight_takeoff",
            "flip",
            "flip_to_back",
            "flip_to_front",
            "folder",
            "folder_open",
            "folder_shared",
            "folder_special",
            "font_download",
            "format_align_center",
            "format_align_justify",
            "format_align_left",
            "format_align_right",
            "format_bold",
            "format_clear",
            "format_color_fill",
            "format_color_reset",
            "format_color_text",
            "format_indent_decrease",
            "format_indent_increase",
            "format_italic",
            "format_line_spacing",
            "format_list_bulleted",
            "format_list_numbered",
            "format_paint",
            "format_quote",
            "format_size",
            "format_strikethrough",
            "format_textdirection_l_to_r",
            "format_textdirection_r_to_l",
            "format_underlined",
            "forum",
            "forward",
            "forward_10",
            "forward_30",
            "forward_5",
            "fullscreen",
            "fullscreen_exit",
            "functions",
            "gamepad",
            "games",
            "gesture",
            "get_app",
            "gif",
            "gps_fixed",
            "gps_not_fixed",
            "gps_off",
            "grade",
            "gradient",
            "grain",
            "graphic_eq",
            "grid_off",
            "grid_on",
            "group",
            "group_add",
            "group_work",
            "hd",
            "hdr_off",
            "hdr_on",
            "hdr_strong",
            "hdr_weak",
            "headset",
            "headset_mic",
            "healing",
            "hearing",
            "help",
            "help_outline",
            "high_quality",
            "highlight_off",
            "history",
            "home",
            "hotel",
            "hourglass_empty",
            "hourglass_full",
            "http",
            "https",
            "image",
            "image_aspect_ratio",
            "import_export",
            "inbox",
            "indeterminate_check_box",
            "info",
            "info_outline",
            "input",
            "insert_chart",
            "insert_comment",
            "insert_drive_file",
            "insert_emoticon",
            "insert_invitation",
            "insert_link",
            "insert_photo",
            "invert_colors",
            "invert_colors_off",
            "iso",
            "keyboard",
            "keyboard_arrow_down",
            "keyboard_arrow_left",
            "keyboard_arrow_right",
            "keyboard_arrow_up",
            "keyboard_backspace",
            "keyboard_capslock",
            "keyboard_hide",
            "keyboard_return",
            "keyboard_tab",
            "keyboard_voice",
            "label",
            "label_outline",
            "landscape",
            "language",
            "laptop",
            "laptop_chromebook",
            "laptop_mac",
            "laptop_windows",
            "launch",
            "layers",
            "layers_clear",
            "leak_add",
            "leak_remove",
            "lens",
            "library_add",
            "library_books",
            "library_music",
            "link",
            "list",
            "live_help",
            "live_tv",
            "local_activity",
            "local_airport",
            "local_atm",
            "local_bar",
            "local_cafe",
            "local_car_wash",
            "local_convenience_store",
            "local_dining",
            "local_drink",
            "local_florist",
            "local_gas_station",
            "local_grocery_store",
            "local_hospital",
            "local_hotel",
            "local_laundry_service",
            "local_library",
            "local_mall",
            "local_movies",
            "local_offer",
            "local_parking",
            "local_pharmacy",
            "local_phone",
            "local_pizza",
            "local_play",
            "local_post_office",
            "local_printshop",
            "local_see",
            "local_shipping",
            "local_taxi",
            "location_city",
            "location_disabled",
            "location_off",
            "location_on",
            "location_searching",
            "lock",
            "lock_open",
            "lock_outline",
            "looks",
            "looks_3",
            "looks_4",
            "looks_5",
            "looks_6",
            "looks_one",
            "looks_two",
            "loop",
            "loupe",
            "loyalty",
            "mail",
            "map",
            "markunread",
            "markunread_mailbox",
            "memory",
            "menu",
            "merge_type",
            "message",
            "mic",
            "mic_none",
            "mic_off",
            "mms",
            "mode_comment",
            "mode_edit",
            "money_off",
            "monochrome_photos",
            "mood",
            "mood_bad",
            "more",
            "more_horiz",
            "more_vert",
            "mouse",
            "movie",
            "movie_creation",
            "music_note",
            "my_location",
            "nature",
            "nature_people",
            "navigate_before",
            "navigate_next",
            "navigation",
            "network_cell",
            "network_locked",
            "network_wifi",
            "new_releases",
            "nfc",
            "no_sim",
            "not_interested",
            "note_add",
            "notifications",
            "notifications_active",
            "notifications_none",
            "notifications_off",
            "notifications_paused",
            "offline_pin",
            "ondemand_video",
            "open_in_browser",
            "open_in_new",
            "open_with",
            "pages",
            "pageview",
            "palette",
            "panorama",
            "panorama_fish_eye",
            "panorama_horizontal",
            "panorama_vertical",
            "panorama_wide_angle",
            "party_mode",
            "pause",
            "pause_circle_filled",
            "pause_circle_outline",
            "payment",
            "people",
            "people_outline",
            "perm_camera_mic",
            "perm_contact_calendar",
            "perm_data_setting",
            "perm_device_information",
            "perm_identity",
            "perm_media",
            "perm_phone_msg",
            "perm_scan_wifi",
            "person",
            "person_add",
            "person_outline",
            "person_pin",
            "personal_video",
            "phone",
            "phone_android",
            "phone_bluetooth_speaker",
            "phone_forwarded",
            "phone_in_talk",
            "phone_iphone",
            "phone_locked",
            "phone_missed",
            "phone_paused",
            "phonelink",
            "phonelink_erase",
            "phonelink_lock",
            "phonelink_off",
            "phonelink_ring",
            "phonelink_setup",
            "photo",
            "photo_album",
            "photo_camera",
            "photo_library",
            "photo_size_select_actual",
            "photo_size_select_large",
            "photo_size_select_small",
            "picture_as_pdf",
            "picture_in_picture",
            "pin_drop",
            "place",
            "play_arrow",
            "play_circle_filled",
            "play_circle_outline",
            "play_for_work",
            "playlist_add",
            "plus_one",
            "poll",
            "polymer",
            "portable_wifi_off",
            "portrait",
            "power",
            "power_input",
            "power_settings_new",
            "present_to_all",
            "print",
            "public",
            "publish",
            "query_builder",
            "question_answer",
            "queue",
            "queue_music",
            "radio",
            "radio_button_checked",
            "radio_button_unchecked",
            "rate_review",
            "receipt",
            "recent_actors",
            "redeem",
            "redo",
            "refresh",
            "remove",
            "remove_circle",
            "remove_circle_outline",
            "remove_red_eye",
            "reorder",
            "repeat",
            "repeat_one",
            "replay",
            "replay_10",
            "replay_30",
            "replay_5",
            "reply",
            "reply_all",
            "report",
            "report_problem",
            "restaurant_menu",
            "restore",
            "ring_volume",
            "room",
            "rotate_90_degrees_ccw",
            "rotate_left",
            "rotate_right",
            "router",
            "satellite",
            "save",
            "scanner",
            "schedule",
            "school",
            "screen_lock_landscape",
            "screen_lock_portrait",
            "screen_lock_rotation",
            "screen_rotation",
            "sd_card",
            "sd_storage",
            "search",
            "security",
            "select_all",
            "send",
            "settings",
            "settings_applications",
            "settings_backup_restore",
            "settings_bluetooth",
            "settings_brightness",
            "settings_cell",
            "settings_ethernet",
            "settings_input_antenna",
            "settings_input_component",
            "settings_input_composite",
            "settings_input_hdmi",
            "settings_input_svideo",
            "settings_overscan",
            "settings_phone",
            "settings_power",
            "settings_remote",
            "settings_system_daydream",
            "settings_voice",
            "share",
            "shop",
            "shop_two",
            "shopping_basket",
            "shopping_cart",
            "shuffle",
            "signal_cellular_4_bar",
            "signal_cellular_connected_no_internet_4_bar",
            "signal_cellular_no_sim",
            "signal_cellular_null",
            "signal_cellular_off",
            "signal_wifi_4_bar",
            "signal_wifi_4_bar_lock",
            "signal_wifi_off",
            "sim_card",
            "sim_card_alert",
            "skip_next",
            "skip_previous",
            "slideshow",
            "smartphone",
            "sms",
            "sms_failed",
            "snooze",
            "sort",
            "sort_by_alpha",
            "space_bar",
            "speaker",
            "speaker_group",
            "speaker_notes",
            "speaker_phone",
            "spellcheck",
            "star",
            "star_border",
            "star_half",
            "stars",
            "stay_current_landscape",
            "stay_current_portrait",
            "stay_primary_landscape",
            "stay_primary_portrait",
            "stop",
            "storage",
            "store",
            "store_mall_directory",
            "straighten",
            "strikethrough_s",
            "style",
            "subject",
            "subtitles",
            "supervisor_account",
            "surround_sound",
            "swap_calls",
            "swap_horiz",
            "swap_vert",
            "swap_vertical_circle",
            "switch_camera",
            "switch_video",
            "sync",
            "sync_disabled",
            "sync_problem",
            "system_update",
            "system_update_alt",
            "tab",
            "tab_unselected",
            "tablet",
            "tablet_android",
            "tablet_mac",
            "tag_faces",
            "tap_and_play",
            "terrain",
            "text_format",
            "textsms",
            "texture",
            "theaters",
            "thumb_down",
            "thumb_up",
            "thumbs_up_down",
            "time_to_leave",
            "timelapse",
            "timer",
            "timer_10",
            "timer_3",
            "timer_off",
            "toc",
            "today",
            "toll",
            "tonality",
            "toys",
            "track_changes",
            "traffic",
            "transform",
            "translate",
            "trending_down",
            "trending_flat",
            "trending_up",
            "tune",
            "turned_in",
            "turned_in_not",
            "tv",
            "undo",
            "unfold_less",
            "unfold_more",
            "usb",
            "verified_user",
            "vertical_align_bottom",
            "vertical_align_center",
            "vertical_align_top",
            "vibration",
            "video_library",
            "videocam",
            "videocam_off",
            "view_agenda",
            "view_array",
            "view_carousel",
            "view_column",
            "view_comfy",
            "view_compact",
            "view_day",
            "view_headline",
            "view_list",
            "view_module",
            "view_quilt",
            "view_stream",
            "view_week",
            "vignette",
            "visibility",
            "visibility_off",
            "voice_chat",
            "voicemail",
            "volume_down",
            "volume_mute",
            "volume_off",
            "volume_up",
            "vpn_key",
            "vpn_lock",
            "wallpaper",
            "warning",
            "watch",
            "wb_auto",
            "wb_cloudy",
            "wb_incandescent",
            "wb_iridescent",
            "wb_sunny",
            "wc",
            "web",
            "whatshot",
            "widgets",
            "wifi",
            "wifi_lock",
            "wifi_tethering",
            "work",
            "wrap_text",
            "youtube_searched_for",
            "zoom_in",
            "zoom_out"
        ];
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-icons',
        template: __webpack_require__("../../../../../src/app/main/icons/icons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/icons/icons.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__projects_projects_routing__ = __webpack_require__("../../../../../src/app/main/projects/projects.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_forms_routing__ = __webpack_require__("../../../../../src/app/main/forms/forms.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formFields_formFields_routing__ = __webpack_require__("../../../../../src/app/main/formFields/formFields.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formFieldViews_formFieldViews_routing__ = __webpack_require__("../../../../../src/app/main/formFieldViews/formFieldViews.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons_icons_component__ = __webpack_require__("../../../../../src/app/main/icons/icons.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainRoutes; });
// ---------Routes--------------------------------------------------




// -----------------------------------------------------------------

var mainRoutes = [
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: 'icons',
        component: __WEBPACK_IMPORTED_MODULE_4__icons_icons_component__["a" /* IconsComponent */]
    }
].concat(__WEBPACK_IMPORTED_MODULE_0__projects_projects_routing__["a" /* projectsRoutes */], __WEBPACK_IMPORTED_MODULE_1__forms_forms_routing__["a" /* formsRoutes */], __WEBPACK_IMPORTED_MODULE_2__formFields_formFields_routing__["a" /* formFieldsRoutes */], __WEBPACK_IMPORTED_MODULE_3__formFieldViews_formFieldViews_routing__["a" /* formFieldViewsRoutes */]);
//# sourceMappingURL=main-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_sidenav_sidenav_item_sidenav_item_component__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_sidenav_icon_sidenav_directive__ = __webpack_require__("../../../../../src/app/core/sidenav/icon-sidenav.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_toolbar_search_search_component__ = __webpack_require__("../../../../../src/app/core/toolbar/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__ = __webpack_require__("../../../../../src/app/main/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_toolbar_toolbar_user_button_toolbar_user_button_component__ = __webpack_require__("../../../../../src/app/core/toolbar/toolbar-user-button/toolbar-user-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_utils_click_outside_directive__ = __webpack_require__("../../../../../src/app/core/utils/click-outside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_toolbar_search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/core/toolbar/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_toolbar_toolbar_notifications_toolbar_notifications_component__ = __webpack_require__("../../../../../src/app/core/toolbar/toolbar-notifications/toolbar-notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_sidenav_sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_breadcrumb_breadcrumb_service__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_material_components_module__ = __webpack_require__("../../../../../src/app/material/material-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__projects_projects_module__ = __webpack_require__("../../../../../src/app/main/projects/projects.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__forms_forms_module__ = __webpack_require__("../../../../../src/app/main/forms/forms.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__formFields_formFields_module__ = __webpack_require__("../../../../../src/app/main/formFields/formFields.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__formFieldViews_formFieldViews_module__ = __webpack_require__("../../../../../src/app/main/formFieldViews/formFieldViews.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_18__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_16__material_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forChild()
        ].concat(__WEBPACK_IMPORTED_MODULE_22__projects_projects_module__["a" /* projectConfig */].imports, __WEBPACK_IMPORTED_MODULE_23__forms_forms_module__["a" /* formConfig */].imports, __WEBPACK_IMPORTED_MODULE_24__formFields_formFields_module__["a" /* formFieldConfig */].imports, __WEBPACK_IMPORTED_MODULE_25__formFieldViews_formFieldViews_module__["a" /* formFieldViewConfig */].imports),
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__core_sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_3__core_sidenav_sidenav_item_sidenav_item_component__["a" /* SidenavItemComponent */],
            __WEBPACK_IMPORTED_MODULE_4__core_sidenav_icon_sidenav_directive__["a" /* IconSidenavDirective */],
            __WEBPACK_IMPORTED_MODULE_5__core_toolbar_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__core_breadcrumb_breadcrumb_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__core_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__core_toolbar_toolbar_user_button_toolbar_user_button_component__["a" /* ToolbarUserButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_10__core_utils_click_outside_directive__["a" /* ClickOutsideDirective */],
            __WEBPACK_IMPORTED_MODULE_11__core_toolbar_search_bar_search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__core_toolbar_toolbar_notifications_toolbar_notifications_component__["a" /* ToolbarNotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */]
        ].concat(__WEBPACK_IMPORTED_MODULE_22__projects_projects_module__["a" /* projectConfig */].declarations, __WEBPACK_IMPORTED_MODULE_23__forms_forms_module__["a" /* formConfig */].declarations, __WEBPACK_IMPORTED_MODULE_24__formFields_formFields_module__["a" /* formFieldConfig */].declarations, __WEBPACK_IMPORTED_MODULE_25__formFieldViews_formFieldViews_module__["a" /* formFieldViewConfig */].declarations),
        entryComponents: __WEBPACK_IMPORTED_MODULE_22__projects_projects_module__["a" /* projectConfig */].entryComponents.slice(),
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__core_sidenav_sidenav_service__["a" /* SidenavService */],
            __WEBPACK_IMPORTED_MODULE_14__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */],
            __WEBPACK_IMPORTED_MODULE_15__core_breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */]
        ].concat(__WEBPACK_IMPORTED_MODULE_22__projects_projects_module__["a" /* projectConfig */].providers, __WEBPACK_IMPORTED_MODULE_23__forms_forms_module__["a" /* formConfig */].providers, __WEBPACK_IMPORTED_MODULE_24__formFields_formFields_module__["a" /* formFieldConfig */].providers, __WEBPACK_IMPORTED_MODULE_25__formFieldViews_formFieldViews_module__["a" /* formFieldViewConfig */].providers)
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Edit Project</md-toolbar>\r\n    <md-card-content>\r\n      <form [formGroup]=\"projForm\" novalidate (ngSubmit)=\"saveProject(projForm.value)\">\r\n        <div fxLayout fxLayoutWrap>\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"project.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"projForm.controls['name'].touched && !projForm.controls['name'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['name'].pristine || projForm.controls['name'].valid\">\r\n              <span [hidden]=\"!projForm.controls['name'].errors?.required\">Project Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"title\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"project.title\"\r\n                   formControlName=\"title\"\r\n                   [class.invalid]=\"projForm.controls['title'].touched && !projForm.controls['title'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['title'].pristine || projForm.controls['title'].valid\">\r\n              <span [hidden]=\"!projForm.controls['title'].errors?.required\">Project Title is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rootNamespace\"\r\n                   required\r\n                   placeholder=\"RootNamespace\"\r\n                   [(ngModel)]=\"project.rootNamespace\"\r\n                   formControlName=\"rootNamespace\"\r\n                   [class.invalid]=\"projForm.controls['rootNamespace'].touched && !projForm.controls['rootNamespace'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['rootNamespace'].pristine || projForm.controls['rootNamespace'].valid\">\r\n              <span [hidden]=\"!projForm.controls['rootNamespace'].errors?.required\">Project Root Namespace is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"companyName\"\r\n                   required\r\n                   placeholder=\"CompanyName\"\r\n                   [(ngModel)]=\"project.companyName\"\r\n                   formControlName=\"companyName\"\r\n                   [class.invalid]=\"projForm.controls['companyName'].touched && !projForm.controls['companyName'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['companyName'].pristine || projForm.controls['companyName'].valid\">\r\n              <span [hidden]=\"!projForm.controls['companyName'].errors?.required\">Company Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"project.description\"\r\n                   formControlName=\"description\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!projForm.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/projects/edit-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/projects/edit-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__ = __webpack_require__("../../../../../src/app/main/projects/shared/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_project__ = __webpack_require__("../../../../../src/app/main/projects/shared/project.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProjectComponent = (function () {
    function EditProjectComponent(formBuilder, router, route, projectsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.projectsService = projectsService;
        this.project = new __WEBPACK_IMPORTED_MODULE_4__shared_project__["a" /* Project */]();
        this.projForm = formBuilder.group({
            id: [''],
            userName: [''],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            title: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            description: [''],
            rootNamespace: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            companyName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            createdDateUtc: [''],
            lastModifiedDateUtc: [''],
            lastModifiedBy: [''],
        });
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var projectid = params['projectid'];
            if (!projectid)
                return;
            _this.projectsService.getProject(projectid)
                .subscribe(function (project) {
                _this.project = project;
                _this.projForm.controls['id'].setValue(projectid);
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    EditProjectComponent.prototype.saveProject = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.userName = "a@b.com"; // need to come from cache
        this.projectsService.updateProject(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                _this.router.navigateByUrl('/projects');
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    EditProjectComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects');
    };
    return EditProjectComponent;
}());
EditProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-edit-project',
        template: __webpack_require__("../../../../../src/app/main/projects/edit-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/projects/edit-project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */]) === "function" && _d || Object])
], EditProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/list-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\r\n    <button md-fab color=\"primary\" (click)=\"addProject();\">\r\n      <md-icon>add</md-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxFlex=\"100%\" fxFlex.gt-sm>\r\n        <md-card class=\"widget\" *ngFor=\"let project of projects\" fxFlex=\"100%\" fxFlex.gt-sm>\r\n          <md-card-title fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <span class=\"name\">{{ project.name }}</span>\r\n            <span fxFlex></span>\r\n            <button md-icon-button (click)=\"viewProject(project.id);\"><md-icon [class.green]=\"true\">arrow_right</md-icon></button>\r\n          </md-card-title>\r\n          <md-card-subtitle>\r\n            <span class=\"description\">{{ project.description }}</span>\r\n          </md-card-subtitle>\r\n        </md-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/projects/list-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: calc(100% - 72px);\n  margin: 36px;\n  position: relative; }\n\n.table-container {\n  height: 100%; }\n\n.table-header {\n  height: 51px;\n  background-color: #fff;\n  color: #757575;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  .table-header > div {\n    vertical-align: bottom; }\n    .table-header > div > .name {\n      padding-left: 16px; }\n  .table-header.table-condensed > div > .name {\n    padding-left: 8px; }\n\n.table-content {\n  height: calc(100% - 51px);\n  overflow: auto; }\n\n.md-icon {\n  font-size: 20px;\n  height: 10px;\n  width: 10px;\n  color: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/projects/list-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_projects_service__ = __webpack_require__("../../../../../src/app/main/projects/shared/projects.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DemoDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListProjectComponent = (function () {
    function ListProjectComponent(projectsService, router, dialog) {
        this.projectsService = projectsService;
        this.router = router;
        this.dialog = dialog;
    }
    ListProjectComponent.prototype.ngAfterViewInit = function () {
    };
    ListProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getProjects('a@b.com')
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    ListProjectComponent.prototype.addProject = function () {
        this.router.navigateByUrl('/projects/new');
    };
    ListProjectComponent.prototype.viewProject = function (projectId) {
        this.router.navigateByUrl('/projects/' + projectId);
    };
    ListProjectComponent.prototype.editProject = function (projectId) {
        this.router.navigateByUrl('projects/edit/' + projectId);
    };
    ListProjectComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        this.dialogRef = this.dialog.open(DemoDialog, {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'Yes') {
                _this.projectsService.deleteProject(projectId)
                    .subscribe(function (response) {
                    alert(response.statusCode);
                    if (response.statusCode == 204) {
                        _this.projectsService.getProjects('a@b.com')
                            .subscribe(function (data) {
                            _this.projects = data;
                        });
                    }
                    else if (response.statusCode == 412) {
                        //  this.serverErrorMessage = "Some details were missing!";
                    }
                    else {
                        // this.serverErrorMessage = response.content;
                    }
                });
            }
            _this.dialogRef = null;
        });
    };
    return ListProjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tbody'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ListProjectComponent.prototype, "tbody", void 0);
ListProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-list-project',
        template: __webpack_require__("../../../../../src/app/main/projects/list-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/projects/list-project.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_projects_service__["a" /* ProjectsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MdDialog */]) === "function" && _d || Object])
], ListProjectComponent);

var DemoDialog = (function () {
    function DemoDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DemoDialog;
}());
DemoDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-demo-dialog',
        template: "<h1>Would you like to delete Project?</h1>\n  <md-dialog-actions align=\"end\">\n    <button md-button (click)=\"dialogRef.close('No')\">No</button>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close('Yes')\">Yes</button>\n  </md-dialog-actions>"
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MdDialogRef */]) === "function" && _e || Object])
], DemoDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=list-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/new-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Add Project</md-toolbar>\r\n    <md-card-content>\r\n      <form [formGroup]=\"projForm\" novalidate (ngSubmit)=\"saveProject(projForm.value)\">\r\n        <div fxLayout fxLayoutWrap>\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"project.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"projForm.controls['name'].touched && !projForm.controls['name'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['name'].pristine || projForm.controls['name'].valid\">\r\n              <span [hidden]=\"!projForm.controls['name'].errors?.required\">Project Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"title\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"project.title\"\r\n                   formControlName=\"title\"\r\n                   [class.invalid]=\"projForm.controls['title'].touched && !projForm.controls['title'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['title'].pristine || projForm.controls['title'].valid\">\r\n              <span [hidden]=\"!projForm.controls['title'].errors?.required\">Project Title is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rootNamespace\"\r\n                   required\r\n                   placeholder=\"RootNamespace\"\r\n                   [(ngModel)]=\"project.rootNamespace\"\r\n                   formControlName=\"rootNamespace\"\r\n                   [class.invalid]=\"projForm.controls['rootNamespace'].touched && !projForm.controls['rootNamespace'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['rootNamespace'].pristine || projForm.controls['rootNamespace'].valid\">\r\n              <span [hidden]=\"!projForm.controls['rootNamespace'].errors?.required\">Project Root Namespace is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"companyName\"\r\n                   required\r\n                   placeholder=\"CompanyName\"\r\n                   [(ngModel)]=\"project.companyName\"\r\n                   formControlName=\"companyName\"\r\n                   [class.invalid]=\"projForm.controls['companyName'].touched && !projForm.controls['companyName'].valid\" />\r\n            <md-hint [hidden]=\"projForm.controls['companyName'].pristine || projForm.controls['companyName'].valid\">\r\n              <span [hidden]=\"!projForm.controls['companyName'].errors?.required\">Company Name is required.</span>\r\n            </md-hint>\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"project.description\"\r\n                   formControlName=\"description\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!projForm.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/projects/new-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/projects/new-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__ = __webpack_require__("../../../../../src/app/main/projects/shared/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_project__ = __webpack_require__("../../../../../src/app/main/projects/shared/project.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewProjectComponent = (function () {
    function NewProjectComponent(formBuilder, router, route, projectsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.projectsService = projectsService;
        this.project = new __WEBPACK_IMPORTED_MODULE_4__shared_project__["a" /* Project */]();
        this.projForm = formBuilder.group({
            id: [''],
            userName: [''],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            title: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            description: [''],
            rootNamespace: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            companyName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            createdDateUtc: [''],
            lastModifiedDateUtc: [''],
            lastModifiedBy: [''],
        });
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        var id = this.route.params.subscribe(function (params) {
            var projectid = params['projectid'];
            if (projectid)
                return;
        });
    };
    NewProjectComponent.prototype.saveProject = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.userName = "a@b.com"; // need to come from cache
        this.projectsService.addProject(data)
            .subscribe(function (response) {
            if (response.statusCode == 201) {
                _this.router.navigateByUrl('/projects');
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    NewProjectComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects');
    };
    return NewProjectComponent;
}());
NewProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-new-project',
        template: __webpack_require__("../../../../../src/app/main/projects/new-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/projects/new-project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */]) === "function" && _d || Object])
], NewProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_project_component__ = __webpack_require__("../../../../../src/app/main/projects/list-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_project_component__ = __webpack_require__("../../../../../src/app/main/projects/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_project_component__ = __webpack_require__("../../../../../src/app/main/projects/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_project_component__ = __webpack_require__("../../../../../src/app/main/projects/view-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_projects_service__ = __webpack_require__("../../../../../src/app/main/projects/shared/projects.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projectConfig; });











var projectConfig = {
    imports: [
        __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
        __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MaterialModule */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
        __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
    ],
    declarations: [
        __WEBPACK_IMPORTED_MODULE_6__list_project_component__["a" /* ListProjectComponent */],
        __WEBPACK_IMPORTED_MODULE_6__list_project_component__["b" /* DemoDialog */],
        __WEBPACK_IMPORTED_MODULE_7__new_project_component__["a" /* NewProjectComponent */],
        __WEBPACK_IMPORTED_MODULE_8__edit_project_component__["a" /* EditProjectComponent */],
        __WEBPACK_IMPORTED_MODULE_9__view_project_component__["a" /* ViewProjectComponent */]
    ],
    entryComponents: [
        __WEBPACK_IMPORTED_MODULE_6__list_project_component__["b" /* DemoDialog */]
    ],
    providers: [
        __WEBPACK_IMPORTED_MODULE_10__shared_projects_service__["a" /* ProjectsService */]
    ]
};
//# sourceMappingURL=projects.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/projects.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_project_component__ = __webpack_require__("../../../../../src/app/main/projects/list-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_project_component__ = __webpack_require__("../../../../../src/app/main/projects/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_project_component__ = __webpack_require__("../../../../../src/app/main/projects/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_project_component__ = __webpack_require__("../../../../../src/app/main/projects/view-project.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projectsRoutes; });




var projectsRoutes = [
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_0__list_project_component__["a" /* ListProjectComponent */], pathMatch: 'full' },
    { path: 'projects/new', component: __WEBPACK_IMPORTED_MODULE_2__new_project_component__["a" /* NewProjectComponent */] },
    { path: 'projects/edit/:projectid', component: __WEBPACK_IMPORTED_MODULE_1__edit_project_component__["a" /* EditProjectComponent */] },
    { path: 'projects/:projectid', component: __WEBPACK_IMPORTED_MODULE_3__view_project_component__["a" /* ViewProjectComponent */] }
];
//# sourceMappingURL=projects.routing.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/shared/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
//shishir: need to evaluate if bases interface is nice to have
var Project = (function () {
    function Project() {
    }
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/shared/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = (function () {
    function ProjectsService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    ProjectsService.prototype.getProjects = function (userName) {
        var result;
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
        params.set('userName', userName);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({
            search: params
        });
        return this.http.get('api/project/GetProjects', options)
            .map(this.extractData);
    };
    ProjectsService.prototype.getProject = function (id) {
        return this.http.get("/api/project/GetProject?projectId=" + id)
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.addProject = function (project) {
        return this.http.post("/api/project/addproject/", JSON.stringify(project), this.options)
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.updateProject = function (project) {
        return this.http.put("/api/project/editproject/", JSON.stringify(project), this.options)
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.deleteProject = function (id) {
        return this.http.delete("/api/project/deleteproject?projectId=" + id)
            .map(function (res) { return res.json(); });
    };
    ProjectsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProjectsService);

var _a;
//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/view-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">View Project</md-toolbar>\r\n    <md-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container fxFlex=\"50\">\r\n            <input mdInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"project.name\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"title\"\r\n                   placeholder=\"Title\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"project.title\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"rootNamespace\"\r\n                   placeholder=\"RootNamespace\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"project.rootNamespace\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"companyName\"\r\n                   placeholder=\"CompanyName\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"project.companyName\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <md-input-container>\r\n            <input mdInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"project.description\" />\r\n          </md-input-container>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" disabled=\"disabled\" type=\"button\">\r\n            Build\r\n          </button>\r\n          <button md-raised-button color=\"warn\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Delete\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editProject(project.id);\">\r\n            Edit\r\n          </button>\r\n          <button md-raised-button color=\"primary\" disabled=\"disabled\" style=\"margin-left: 8px;\" type=\"button\">\r\n            Build Status\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"addForm(project.id);\">\r\n            Add Form\r\n          </button>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Title</th>\r\n                <th hidden=\"hidden\">Dependency</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let form of forms\">\r\n                <td>{{ form.name }}</td>\r\n                <td>{{ form.title }}</td>\r\n                <td hidden=\"hidden\">{{ form.dependencyID }}</td>\r\n                <td>\r\n                  <button md-icon-button (click)=\"viewForm(project.id,form.id);\" style=\"margin-left: 1px;\"><md-icon>pageview</md-icon></button>\r\n                  <button md-icon-button (click)=\"editForm(project.id,form.id);\" style=\"margin-left: 1px;\"><md-icon>edit</md-icon></button>\r\n                  <button md-icon-button (click)=\"deleteForm(project.id,form.id);\" style=\"margin-left: 1px;\"><md-icon>delete</md-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/projects/view-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/projects/view-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_projects_service__ = __webpack_require__("../../../../../src/app/main/projects/shared/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_shared_forms_service__ = __webpack_require__("../../../../../src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_project__ = __webpack_require__("../../../../../src/app/main/projects/shared/project.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewProjectComponent = (function () {
    function ViewProjectComponent(router, route, projectsService, formsService) {
        this.router = router;
        this.route = route;
        this.projectsService = projectsService;
        this.formsService = formsService;
        this.project = new __WEBPACK_IMPORTED_MODULE_4__shared_project__["a" /* Project */]();
        this.cellWidths = [];
        this.tableHover = true;
        this.tableStriped = true;
        this.tableCondensed = true;
    }
    ViewProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var projectid = params['projectid'];
            if (!projectid)
                return;
            _this.projectsService.getProject(projectid)
                .subscribe(function (project) {
                _this.project = project;
                _this.formsService.getForms(_this.project.id)
                    .subscribe(function (data) {
                    _this.forms = data;
                });
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    ViewProjectComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.tbody.nativeElement.children);
        //console.log(this.tbody.nativeElement.children.length);
        //let cells = this.tbody.nativeElement.children[0].children;
        //for (let cell of cells) {
        //    this.cellWidths.push(cell.offsetWidth);
        //}
        //let resizeSensor = new ResizeSensor(this.tbody.nativeElement, () => {
        //    this.cellWidths.length = 0;
        //    for (let cell of cells) {
        //        this.cellWidths.push(cell.offsetWidth);
        //    }
        //});
    };
    ViewProjectComponent.prototype.editProject = function (projectId) {
        this.router.navigateByUrl('/projects/edit/' + projectId);
    };
    ViewProjectComponent.prototype.viewForm = function (projectId, formId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId);
    };
    ViewProjectComponent.prototype.addForm = function (projectId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/new');
    };
    ViewProjectComponent.prototype.editForm = function (projectId, formId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/edit/' + formId);
    };
    ViewProjectComponent.prototype.deleteForm = function (projectId, formId) {
        // to do 
    };
    ViewProjectComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects');
    };
    return ViewProjectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tbody'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ViewProjectComponent.prototype, "tbody", void 0);
ViewProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-view-project',
        template: __webpack_require__("../../../../../src/app/main/projects/view-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/projects/view-project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_projects_service__["a" /* ProjectsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__forms_shared_forms_service__["a" /* FormsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__forms_shared_forms_service__["a" /* FormsService */]) === "function" && _e || Object])
], ViewProjectComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialComponentsModule = (function () {
    function MaterialComponentsModule() {
    }
    return MaterialComponentsModule;
}());
MaterialComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MdSelectModule */]
        ]
    })
], MaterialComponentsModule);

//# sourceMappingURL=material-components.module.js.map

/***/ }),

/***/ "../../../../../src/app/route.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

/*
Deprecated until Opacity works again

export let routeAnimation = trigger('routeAnimation', [
  transition('void => *', [
    style({
      transform: 'translate3d(0, 10%, 0)',
      opacity: 0,
    }),
    group([
      animate('400ms ease-in-out', style({
        //transform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
        opacity: 1,
      })),
      animate('400ms 150ms ease-in-out', style({
        opacity: 1,
      }))
    ]),
  ]),
]);
*/
var routeAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms 150ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1,
        }))
    ]),
]);
var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeInAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms 150ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1,
        }))
    ]),
]);
//# sourceMappingURL=route.animation.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/users/edit-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">Edit User Profile</md-toolbar>\r\n    <md-card-content>\r\n      <!--<form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveUser(formGroup.value)\">-->\r\n      <form >\r\n        <div fxLayout=\"column\">\r\n          <!--<md-input-container fxFlex=\"50\">\r\n\r\n          </md-input-container>-->\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button\r\n                  type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Cancel\r\n          </button>\r\n          <button md-button color=\"primary\"\r\n                  md-raised-button\r\n                  style=\"margin-left: 8px;\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"!formGroup.valid\">\r\n            Save\r\n          </button>\r\n\r\n        </div>\r\n      </form>\r\n\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/edit-user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/edit-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_users_service__ = __webpack_require__("../../../../../src/app/users/shared/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { RegisterDetail } from './shared/account';
var EditUserProfileComponent = (function () {
    function EditUserProfileComponent(formBuilder, router, route, usersService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.formGroup = formBuilder.group({
            id: ['']
        });
    }
    EditUserProfileComponent.prototype.ngOnInit = function () {
    };
    EditUserProfileComponent.prototype.saveForm = function (data) {
    };
    return EditUserProfileComponent;
}());
EditUserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-edit-user-profile',
        template: __webpack_require__("../../../../../src/app/users/edit-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/edit-user-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_users_service__["a" /* UsersService */]) === "function" && _d || Object])
], EditUserProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/shared/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersService = (function () {
    function UsersService() {
    }
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UsersService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_user_profile_component__ = __webpack_require__("../../../../../src/app/users/edit-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_user_profile_component__ = __webpack_require__("../../../../../src/app/users/view-user-profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usersRoutes; });


var usersRoutes = [
    { path: 'user-profile/edit', component: __WEBPACK_IMPORTED_MODULE_0__edit_user_profile_component__["a" /* EditUserProfileComponent */] },
    { path: 'user-profile/view', component: __WEBPACK_IMPORTED_MODULE_1__view_user_profile_component__["a" /* ViewUserProfileComponent */] },
];
//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_components_module__ = __webpack_require__("../../../../../src/app/material/material-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_users_service__ = __webpack_require__("../../../../../src/app/users/shared/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_user_profile_component__ = __webpack_require__("../../../../../src/app/users/edit-user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_user_profile_component__ = __webpack_require__("../../../../../src/app/users/view-user-profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__edit_user_profile_component__["a" /* EditUserProfileComponent */], __WEBPACK_IMPORTED_MODULE_9__view_user_profile_component__["a" /* ViewUserProfileComponent */]
        ],
        entryComponents: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_users_service__["a" /* UsersService */]
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/view-user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <md-toolbar color=\"primary\">View User Profile</md-toolbar>\r\n    <md-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <!--<md-input-container fxFlex=\"50\">\r\n\r\n          </md-input-container>-->\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editUserProfile();\">\r\n            Edit\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/view-user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/view-user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_users_service__ = __webpack_require__("../../../../../src/app/users/shared/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { RegisterDetail } from './shared/account';
var ViewUserProfileComponent = (function () {
    function ViewUserProfileComponent(formBuilder, router, route, usersService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
    }
    ViewUserProfileComponent.prototype.ngOnInit = function () {
    };
    ViewUserProfileComponent.prototype.ngAfterViewInit = function () {
    };
    ViewUserProfileComponent.prototype.editUserProfile = function () {
        this.router.navigateByUrl('/user-profile/edit');
    };
    return ViewUserProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tbody'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ViewUserProfileComponent.prototype, "tbody", void 0);
ViewUserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-edit-user-profile',
        template: __webpack_require__("../../../../../src/app/users/view-user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/view-user-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_users_service__["a" /* UsersService */]) === "function" && _e || Object])
], ViewUserProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view-user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    googleApi: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map