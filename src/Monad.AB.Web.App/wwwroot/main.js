(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accounts/accounts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/accounts/accounts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: accountsRoutes, userManagementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountsRoutes", function() { return accountsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userManagementRoutes", function() { return userManagementRoutes; });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/accounts/login.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "./src/app/accounts/register.component.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/accounts/forgot-password.component.ts");
/* harmony import */ var _list_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-user.component */ "./src/app/accounts/list-user.component.ts");
/* harmony import */ var _new_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-user.component */ "./src/app/accounts/new-user.component.ts");
/* harmony import */ var _edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user.component */ "./src/app/accounts/edit-user.component.ts");
/* harmony import */ var _view_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-user.component */ "./src/app/accounts/view-user.component.ts");
// ---------Routes--------------------------------------------------







// -----------------------------------------------------------------
var accountsRoutes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], pathMatch: 'full' },
    { path: 'register', component: _register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"], pathMatch: 'full' },
    { path: 'forgot-password', component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"], pathMatch: 'full' },
];
var userManagementRoutes = [
    { path: 'users', component: _list_user_component__WEBPACK_IMPORTED_MODULE_3__["ListUserComponent"], pathMatch: 'full' },
    { path: 'users/new', component: _new_user_component__WEBPACK_IMPORTED_MODULE_4__["NewUserComponent"], pathMatch: 'full' },
    { path: 'users/:userId', component: _view_user_component__WEBPACK_IMPORTED_MODULE_6__["ViewUserComponent"], pathMatch: 'full' },
    { path: 'users/edit/:userId', component: _edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"], pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/accounts/accounts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/accounts/accounts.module.ts ***!
  \*********************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-components.module */ "./src/app/shared/shared-components.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_accounts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login.component */ "./src/app/accounts/login.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register.component */ "./src/app/accounts/register.component.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/accounts/forgot-password.component.ts");
/* harmony import */ var _list_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-user.component */ "./src/app/accounts/list-user.component.ts");
/* harmony import */ var _edit_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-user.component */ "./src/app/accounts/edit-user.component.ts");
/* harmony import */ var _new_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-user.component */ "./src/app/accounts/new-user.component.ts");
/* harmony import */ var _view_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-user.component */ "./src/app/accounts/view-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialComponentsModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"], _list_user_component__WEBPACK_IMPORTED_MODULE_13__["ListUserComponent"], _edit_user_component__WEBPACK_IMPORTED_MODULE_14__["EditUserComponent"], _new_user_component__WEBPACK_IMPORTED_MODULE_15__["NewUserComponent"], _view_user_component__WEBPACK_IMPORTED_MODULE_16__["ViewUserComponent"]
            ],
            entryComponents: [],
            providers: [
                _shared_accounts_service__WEBPACK_IMPORTED_MODULE_9__["AccountsService"]
            ]
        })
    ], AccountsModule);
    return AccountsModule;
}());



/***/ }),

/***/ "./src/app/accounts/edit-user.component.html":
/*!***************************************************!*\
  !*** ./src/app/accounts/edit-user.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'User.Edit'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit user</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"userForm\" novalidate (ngSubmit)=\"saveUser(userForm.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"userName\" placeholder=\"User Name\" required [(ngModel)]=\"user.userName\" formControlName=\"userName\" [class.invalid]=\"userForm.controls['userName'].touched && !userForm.controls['userName'].valid\"\r\n            readonly=\"true\" />           \r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"email\" placeholder=\"email\" required [(ngModel)]=\"user.email\" formControlName=\"email\" [class.invalid]=\"userForm.controls['email'].touched && !userForm.controls['email'].valid\"\r\n            readonly=\"true\"/>           \r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"firstName\" placeholder=\"First Name\" required [(ngModel)]=\"user.firstName\" formControlName=\"firstName\"\r\n              [class.invalid]=\"userForm.controls['firstName'].touched && !userForm.controls['firstName'].valid\" />\r\n            <mat-hint [hidden]=\"userForm.controls['firstName'].pristine || userForm.controls['firstName'].valid\">\r\n              <span [hidden]=\"!userForm.controls['firstName'].errors?.required\">First Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"lastName\" placeholder=\"Last Name\" required [(ngModel)]=\"user.lastName\" formControlName=\"lastName\" [class.invalid]=\"userForm.controls['lastName'].touched && !userForm.controls['lastName'].valid\"\r\n            />\r\n            <mat-hint [hidden]=\"userForm.controls['lastName'].pristine || userForm.controls['lastName'].valid\">\r\n              <span [hidden]=\"!userForm.controls['lastName'].errors?.required\">First Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"addressLine1\" placeholder=\"Address Line1\" required [(ngModel)]=\"user.addressLine1\" formControlName=\"addressLine1\"\r\n              [class.invalid]=\"userForm.controls['addressLine1'].touched && !userForm.controls['addressLine1'].valid\" />\r\n            <mat-hint [hidden]=\"userForm.controls['addressLine1'].pristine || userForm.controls['addressLine1'].valid\">\r\n              <span [hidden]=\"!userForm.controls['addressLine1'].errors?.required\">Address Line 1 is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        \r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"user.roleId\" placeholder=\"Role Name\" formControlName=\"roleId\">\r\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.roleId\">\r\n              {{role.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\" md-raised-button style=\"margin-left: 8px;\" type=\"submit\" [disabled]=\"!userForm.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n       <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\" *msElementAccess=\"'Form.List'\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Resource</th>\r\n                <th>View</th>\r\n                <th>List</th>\r\n                <th>Add</th>\r\n                <th>Edit</th>\r\n                <th>Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let userClaim of userClaims\">\r\n                <td>{{ userClaim.resourceName }}</td>\r\n                <td><mat-checkbox [(ngModel)]=\"userClaim.isView\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"userClaim.isList\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"userClaim.isAdd\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"userClaim.isEdit\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"userClaim.isDelete\" color=\"primary\"></mat-checkbox></td>               \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/edit-user.component.scss":
/*!***************************************************!*\
  !*** ./src/app/accounts/edit-user.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcYWNjb3VudHNcXGVkaXQtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsMEJBQXVEO0VBQ3ZELDBGQUF5RjtFQUN6Rix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL192YXJcIjtcclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/accounts/edit-user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/accounts/edit-user.component.ts ***!
  \*************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var _roles_shared_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roles/shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
/* harmony import */ var _shared_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/account */ "./src/app/accounts/shared/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(router, formBuilder, route, snackBar, dialogService, rolesService, accountsService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.rolesService = rolesService;
        this.accountsService = accountsService;
        this.user = new _shared_account__WEBPACK_IMPORTED_MODULE_7__["UserEditViewModel"]();
        this.userForm = formBuilder.group({
            id: [''],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            addressLine1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            roleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var userGuid = params['userId'];
            if (!userGuid)
                return;
            _this.accountsService.GetUser(userGuid)
                .subscribe(function (data) {
                _this.user = data;
                _this.userId = data.userId;
                _this.userForm.controls['id'].setValue(data.id);
                _this.rolesService.getRoles()
                    .subscribe(function (roles) {
                    _this.roles = roles;
                });
                _this.accountsService.getUserClaims(userGuid)
                    .subscribe(function (userClaims) {
                    _this.userClaims = userClaims;
                    console.log(_this.userClaims);
                });
            });
        });
    };
    EditUserComponent.prototype.saveUser = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.userId = this.userId;
        ; // int value for application database        
        //-- this form will be used by admin so generally he or she will not worry about mopst of the demographic details 
        // --so copy the data retrieved duing pull to data being posted 
        data.addressLine2 = this.user.addressLine2;
        data.city = this.user.city;
        data.state = this.user.state;
        data.zip = this.user.zip;
        data.isEnabled = this.user.isEnabled;
        data.gender = this.user.gender;
        data.phoneNumber = this.user.phoneNumber;
        data.fullName = this.user.fullName;
        data.userText = this.user.userText;
        data.lastModifiedBy = this.user.lastModifiedBy;
        data.lastModifiedDateUtc = this.user.lastModifiedDateUtc;
        //--- 
        this.accountsService.editUser(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                _this.accountsService.saveUserClains(data.id, _this.userClaims)
                    .subscribe(function (resp) {
                    if (resp.statusCode == 204) {
                        var snackBarRef = _this.snackBar.open('User Updated Successfully!', 'Close', {
                            duration: 1000
                        });
                        snackBarRef.afterDismissed().subscribe(function () {
                            _this.router.navigateByUrl('/users');
                        });
                    }
                    else {
                        _this.serverErrorMessage = resp.content;
                    }
                });
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    EditUserComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/users');
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/accounts/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/accounts/edit-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _roles_shared_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"],
            _shared_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/accounts/forgot-password.component.html":
/*!*********************************************************!*\
  !*** ./src/app/accounts/forgot-password.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"forgot mat-elevation-z12\">\r\n    <div class=\"forgot-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"forgotPassword()\">\r\n      <div class=\"forgot-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"User Name\" type=\"text\" name=\"userName\" required [(ngModel)]=\"userName\">\r\n        </mat-form-field>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">Get Password</button>\r\n        <p class=\"note\"><a [routerLink]=\"['/login']\">Back to login</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accounts/forgot-password.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/accounts/forgot-password.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.forgot {\n  background: white;\n  width: 380px; }\n\n.forgot .forgot-header {\n    background: #2B303B;\n    padding: 24px; }\n\n.forgot .forgot-content {\n    padding: 24px 42px 42px; }\n\n.forgot .forgot-content md-input-container {\n      width: 100%;\n      margin: 6px 0 18px; }\n\n.forgot .forgot-content a {\n      text-decoration: none;\n      color: #2196F3; }\n\n.forgot .forgot-content a:hover {\n        text-decoration: underline; }\n\n.forgot .forgot-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcYWNjb3VudHNcXGZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXHN0eWxlc1xcX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBYztFQUNkLG9GQUFtRjtFQUNuRix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixhQUFZLEVBOEJiOztBQWhDRDtJQUtJLG9CQ1ZvQztJRFdwQyxjQUFhLEVBQ2Q7O0FBUEg7SUFVSSx3QkFBdUIsRUFxQnhCOztBQS9CSDtNQWFNLFlBQVc7TUFDWCxtQkFBa0IsRUFDbkI7O0FBZkw7TUFrQk0sc0JBQXFCO01BQ3JCLGVBQWMsRUFLZjs7QUF4Qkw7UUFzQlEsMkJBQTBCLEVBQzNCOztBQXZCUDtNQTJCTSxZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvX3ZhclwiO1xyXG5cclxuaG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzLzMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAzODBweDtcclxuXHJcbiAgLmZvcmdvdC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjRweCA0MnB4IDQycHg7XHJcblxyXG4gICAgbWQtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogNnB4IDAgMThweDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogIzIxOTZGMztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5vdGUge1xyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgICAgbWFyZ2luOiAyNHB4IDAgMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLy8gU2lkZW5hdlxyXG4kY29sb3JfX3NpZGVuYXYtbGlzdDogI0E3QTlBRTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LXRvb2xiYXI6ICMyNzJCMzU7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0OiAjMkIzMDNCO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3QsIDIpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdCwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMSwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDEsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDIsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNDogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMywgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNCwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDU6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDUsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19ob3ZlcjtcclxuXHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsMjogMTBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWwzOiAyMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDQ6IDMwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNTogNDBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw2OiA0MHB4O1xyXG5cclxuJHdpZHRoX19zaWRlbmF2OiAyNTBweDtcclxuXHJcbiRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtOiAyNHB4O1xyXG4kbWFyZ2luLWxlZnRfX3NpZGVuYXYtbGlzdF9faXRlbS1uYW1lOiAkcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbTtcclxuJHdpZHRoLWhlaWdodF9fc2lkZW5hdi1saXN0X19pY29uOiAxOHB4O1xyXG5cclxuJG1heC13aWR0aF9faWNvbi1zaWRlbmF2OiAoJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW0gKiAyKSArICR3aWR0aC1oZWlnaHRfX3NpZGVuYXYtbGlzdF9faWNvbiArIDI7XHJcblxyXG4kei1pbmRleF9fbWQtc2lkZW5hdjogNDtcclxuJHotaW5kZXhfX21kLXNpZGVuYXYtY29udGVudDogNTtcclxuJHotaW5kZXhfX21haW4tdG9vbGJhcjogNTAwO1xyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyOiA2NHB4O1xyXG5cclxuLy8gTWl4aW5zXHJcblxyXG5AbWl4aW4gbWRTaGFkb3ctejMgKCkge1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLy8gTm90aWZpY2F0aW9uc1xyXG4kY29sb3JfX3ByaW1hcnk6ICM0Q0FGNTA7XHJcbiRjb2xvcl9fYWNjZW50OiAjRTkxRTYzO1xyXG4kY29sb3JfX3dhcm46ICNmNDQzMzY7XHJcblxyXG4kY29sb3JfX3ByaW1hcnktY29udHJhc3Q6ICNGRkY7XHJcbiRjb2xvcl9fYWNjZW50LWNvbnRyYXN0OiAjRkZGO1xyXG4kY29sb3JfX3dhcm4tY29udHJhc3Q6ICNGRkY7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/accounts/forgot-password.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/accounts/forgot-password.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route.animation */ "./src/app/route.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router) {
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/']);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/accounts/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/accounts/forgot-password.component.scss")],
            host: {
                '[@fadeInAnimation]': 'true'
            },
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/accounts/list-user.component.html":
/*!***************************************************!*\
  !*** ./src/app/accounts/list-user.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\" align=\"end\" *msElementAccess=\"'User.Add'\">\r\n  <button mdTooltip=\"New Project\" md-fab color=\"primary\" (click)=\"addUser();\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'User.List'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-card-content>\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>User Name</th>\r\n                <th>Email</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of users\">\r\n                <td>{{ user.userName }}</td>\r\n                <td>{{ user.email }}</td>\r\n                <!--<td><button mat-icon-button> <mat-icon>{{ role.isActive?\"check\":\"close\"}}</mat-icon></button></td>-->\r\n                <td>\r\n                  <button mat-icon-button (click)=\"viewUser(user.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'User.View'\"><mat-icon>pageview</mat-icon></button>\r\n                  <button mat-icon-button (click)=\"editUser(user.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'User.Edit'\"><mat-icon>edit</mat-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accounts/list-user.component.scss":
/*!***************************************************!*\
  !*** ./src/app/accounts/list-user.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcYWNjb3VudHNcXGxpc3QtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsMEJBQXVEO0VBQ3ZELDBGQUF5RjtFQUN6Rix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy9saXN0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL192YXJcIjtcclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/accounts/list-user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/accounts/list-user.component.ts ***!
  \*************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(router, route, snackBar, dialogService, accountsService) {
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.accountsService = accountsService;
    }
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsService.getAllUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ListUserComponent.prototype.addUser = function () {
        this.router.navigateByUrl('/users/new');
    };
    ListUserComponent.prototype.viewUser = function (userId) {
        this.router.navigateByUrl('/users/' + userId);
    };
    ListUserComponent.prototype.editUser = function (userId) {
        this.router.navigateByUrl('/users/edit/' + userId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tbody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListUserComponent.prototype, "tbody", void 0);
    ListUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-list-user',
            template: __webpack_require__(/*! ./list-user.component.html */ "./src/app/accounts/list-user.component.html"),
            styles: [__webpack_require__(/*! ./list-user.component.scss */ "./src/app/accounts/list-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _shared_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/accounts/login.component.html":
/*!***********************************************!*\
  !*** ./src/app/accounts/login.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"login mat-elevation-z12\">\r\n    <div class=\"login-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"login()\">\r\n      <div class=\"login-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"loginDetail.userName\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"loginDetail.password\">\r\n        </mat-form-field>\r\n        <div class=\"extra-options\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <mat-checkbox color=\"primary\" class=\"remember-me\" name=\"rememberMe\" [(ngModel)]=\"loginDetail.rememberMe\">Remember Me</mat-checkbox>\r\n          <a class=\"forgot-password\" [routerLink]=\"['/forgot-password']\">Forgot Password?</a>\r\n        </div>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">SIGN IN</button>\r\n        <p class=\"note\">Don't have an account?<br /> <a [routerLink]=\"['/register']\">Click here to create one</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accounts/login.component.scss":
/*!***********************************************!*\
  !*** ./src/app/accounts/login.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.login {\n  background: white;\n  width: 380px; }\n\n.login .login-header {\n    background: #2B303B;\n    padding: 24px; }\n\n.login .login-content {\n    padding: 24px 42px 42px; }\n\n.login .login-content md-input-container {\n      width: 100%;\n      margin: 6px 0; }\n\n.login .login-content .extra-options {\n      margin: 16px 0 32px; }\n\n.login .login-content .extra-options .remember-me {\n        color: #777; }\n\n.login .login-content a {\n      text-decoration: none;\n      color: #2196F3; }\n\n.login .login-content a:hover {\n        text-decoration: underline; }\n\n.login .login-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcYWNjb3VudHNcXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcc3R5bGVzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFjO0VBQ2Qsb0ZBQW1GO0VBQ25GLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGFBQVksRUFzQ2I7O0FBeENEO0lBS0ksb0JDVm9DO0lEV3BDLGNBQWEsRUFDZDs7QUFQSDtJQVVJLHdCQUF1QixFQTZCeEI7O0FBdkNIO01BYU0sWUFBVztNQUNYLGNBQWEsRUFDZDs7QUFmTDtNQWtCTSxvQkFBbUIsRUFLcEI7O0FBdkJMO1FBcUJRLFlBQVcsRUFDWjs7QUF0QlA7TUEwQk0sc0JBQXFCO01BQ3JCLGVBQWMsRUFLZjs7QUFoQ0w7UUE4QlEsMkJBQTBCLEVBQzNCOztBQS9CUDtNQW1DTSxZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzLzMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG5cclxuICAubG9naW4taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3Q7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjRweCA0MnB4IDQycHg7XHJcblxyXG4gICAgbWQtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4dHJhLW9wdGlvbnMge1xyXG4gICAgICBtYXJnaW46IDE2cHggMCAzMnB4O1xyXG5cclxuICAgICAgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMjE5NkYzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm90ZSB7XHJcbiAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICBtYXJnaW46IDI0cHggMCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFNpZGVuYXZcclxuJGNvbG9yX19zaWRlbmF2LWxpc3Q6ICNBN0E5QUU7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi10b29sYmFyOiAjMjcyQjM1O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdDogIzJCMzAzQjtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0LCAyKTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMTogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3QsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDEsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDFfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMzogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMiwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMywgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsM19faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQ6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDMsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDRfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNSwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNiwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNl9faG92ZXI7XHJcblxyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDI6IDEwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsMzogMjBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw0OiAzMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDU6IDQwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNjogNDBweDtcclxuXHJcbiR3aWR0aF9fc2lkZW5hdjogMjUwcHg7XHJcblxyXG4kcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbTogMjRweDtcclxuJG1hcmdpbi1sZWZ0X19zaWRlbmF2LWxpc3RfX2l0ZW0tbmFtZTogJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW07XHJcbiR3aWR0aC1oZWlnaHRfX3NpZGVuYXYtbGlzdF9faWNvbjogMThweDtcclxuXHJcbiRtYXgtd2lkdGhfX2ljb24tc2lkZW5hdjogKCRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtICogMikgKyAkd2lkdGgtaGVpZ2h0X19zaWRlbmF2LWxpc3RfX2ljb24gKyAyO1xyXG5cclxuJHotaW5kZXhfX21kLXNpZGVuYXY6IDQ7XHJcbiR6LWluZGV4X19tZC1zaWRlbmF2LWNvbnRlbnQ6IDU7XHJcbiR6LWluZGV4X19tYWluLXRvb2xiYXI6IDUwMDtcclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcjogNjRweDtcclxuXHJcbi8vIE1peGluc1xyXG5cclxuQG1peGluIG1kU2hhZG93LXozICgpIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi8vIE5vdGlmaWNhdGlvbnNcclxuJGNvbG9yX19wcmltYXJ5OiAjNENBRjUwO1xyXG4kY29sb3JfX2FjY2VudDogI0U5MUU2MztcclxuJGNvbG9yX193YXJuOiAjZjQ0MzM2O1xyXG5cclxuJGNvbG9yX19wcmltYXJ5LWNvbnRyYXN0OiAjRkZGO1xyXG4kY29sb3JfX2FjY2VudC1jb250cmFzdDogI0ZGRjtcclxuJGNvbG9yX193YXJuLWNvbnRyYXN0OiAjRkZGO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/accounts/login.component.ts":
/*!*********************************************!*\
  !*** ./src/app/accounts/login.component.ts ***!
  \*********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route.animation */ "./src/app/route.animation.ts");
/* harmony import */ var _shared_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var _shared_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/account */ "./src/app/accounts/shared/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, accountsService) {
        this.router = router;
        this.accountsService = accountsService;
        this.loginDetail = new _shared_account__WEBPACK_IMPORTED_MODULE_4__["LoginDetail"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.accountsService.login(this.loginDetail)
            .subscribe(function (response) {
            if (response.statusCode == 200) {
                sessionStorage.setItem('currentUser', response.content.user.userName);
                sessionStorage.setItem('isCurrentUserAuthenticated', response.content.authenticated);
                sessionStorage.setItem('currentUserToken', response.content.token);
                sessionStorage.setItem('accessRights', JSON.stringify(response.content.claims));
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
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/accounts/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/accounts/login.component.scss")],
            host: {
                '[@fadeInAnimation]': 'true'
            },
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/accounts/new-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/accounts/new-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'User.Add'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Add user</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"userForm\" novalidate (ngSubmit)=\"saveUser(userForm.value)\">\r\n        <div fxLayout=\"column\">\r\n\r\n          <mat-form-field>\r\n            <input matInput name=\"userName\" placeholder=\"User Name\" required [(ngModel)]=\"user.userName\" formControlName=\"userName\" [class.invalid]=\"userForm.controls['userName'].touched && !userForm.controls['userName'].valid\"\r\n            />\r\n            <mat-hint [hidden]=\"userForm.controls['userName'].pristine || userForm.controls['userName'].valid\">\r\n              <span [hidden]=\"!userForm.controls['userName'].errors?.required\">User Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"email\" placeholder=\"email\" required [(ngModel)]=\"user.email\" formControlName=\"email\" [class.invalid]=\"userForm.controls['email'].touched && !userForm.controls['email'].valid\"\r\n            />\r\n            <mat-hint [hidden]=\"userForm.controls['email'].pristine || userForm.controls['email'].valid\">\r\n              <span [hidden]=\"!userForm.controls['email'].errors?.required\">Email Address is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"firstName\" placeholder=\"First Name\" required [(ngModel)]=\"user.firstName\" formControlName=\"firstName\"\r\n              [class.invalid]=\"userForm.controls['firstName'].touched && !userForm.controls['firstName'].valid\" />\r\n            <mat-hint [hidden]=\"userForm.controls['firstName'].pristine || userForm.controls['firstName'].valid\">\r\n              <span [hidden]=\"!userForm.controls['firstName'].errors?.required\">First Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"lastName\" placeholder=\"Last Name\" required [(ngModel)]=\"user.lastName\" formControlName=\"lastName\" [class.invalid]=\"userForm.controls['lastName'].touched && !userForm.controls['lastName'].valid\"\r\n            />\r\n            <mat-hint [hidden]=\"userForm.controls['lastName'].pristine || userForm.controls['lastName'].valid\">\r\n              <span [hidden]=\"!userForm.controls['lastName'].errors?.required\">First Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"addressLine1\" placeholder=\"Address Line1\" required [(ngModel)]=\"user.addressLine1\" formControlName=\"addressLine1\" [class.invalid]=\"userForm.controls['addressLine1'].touched && !userForm.controls['addressLine1'].valid\"\r\n            />\r\n            <mat-hint [hidden]=\"userForm.controls['addressLine1'].pristine || userForm.controls['addressLine1'].valid\">\r\n              <span [hidden]=\"!userForm.controls['addressLine1'].errors?.required\">Address Line 1 is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n         <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"user.roleId\" placeholder=\"Role Name\" formControlName=\"roleId\">\r\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.roleId\">\r\n              {{role.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\" md-raised-button style=\"margin-left: 8px;\" type=\"submit\" [disabled]=\"!userForm.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accounts/new-user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/accounts/new-user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcYWNjb3VudHNcXG5ldy11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL25ldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHg6ICRoZWlnaHRfX21haW4tdG9vbGJhciArIDhweDtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4fSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9hcmNoLXBhdHRlcm4ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWQtaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/accounts/new-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/accounts/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var _roles_shared_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roles/shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
/* harmony import */ var _shared_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/account */ "./src/app/accounts/shared/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(router, formBuilder, route, snackBar, dialogService, rolesService, accountsService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.rolesService = rolesService;
        this.accountsService = accountsService;
        this.user = new _shared_account__WEBPACK_IMPORTED_MODULE_7__["AddUserViewModel"]();
        this.userForm = formBuilder.group({
            id: [''],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            addressLine1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            roleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var userid = params['userid'];
            if (userid)
                return;
            _this.rolesService.getRoles()
                .subscribe(function (data) {
                _this.roles = data;
                console.log(data);
            });
        });
    };
    NewUserComponent.prototype.saveUser = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        this.accountsService.addUser(data)
            .subscribe(function (response) {
            if (response.statusCode == 201) {
                var snackBarRef = _this.snackBar.open('User created Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/users');
                });
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    NewUserComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/users');
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/accounts/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.scss */ "./src/app/accounts/new-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _roles_shared_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"],
            _shared_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/accounts/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/accounts/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"register mat-elevation-z12\">\r\n    <div class=\"register-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"register()\">\r\n      <div class=\"register-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">       \r\n        <mat-form-field>\r\n          <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"registerDetail.email\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"registerDetail.password\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Password (Confirm)\" type=\"password\" name=\"password-confirm\" required [(ngModel)]=\"registerDetail.confirmPassword\">\r\n        </mat-form-field>\r\n        <div class=\"extra-options\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <mat-checkbox class=\"remember-me\" color=\"primary\" >I accept the <a href=\"#\">terms and conditions.</a></mat-checkbox>\r\n        </div>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">CREATE ACCOUNT</button>\r\n        <p class=\"note\">Already have an account?<br /> <a [routerLink]=\"['/login']\">Sign in here</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/accounts/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/accounts/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.register {\n  background: white;\n  width: 380px; }\n\n.register .register-header {\n    background: #2B303B;\n    padding: 24px; }\n\n.register .register-content {\n    padding: 24px 42px 42px; }\n\n.register .register-content md-input-container {\n      width: 100%;\n      margin: 6px 0; }\n\n.register .register-content .extra-options {\n      margin: 16px 0 32px; }\n\n.register .register-content .extra-options .remember-me {\n        color: #777; }\n\n.register .register-content a {\n      text-decoration: none;\n      color: #2196F3; }\n\n.register .register-content a:hover {\n        text-decoration: underline; }\n\n.register .register-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcYWNjb3VudHNcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50cy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcc3R5bGVzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFjO0VBQ2Qsb0ZBQW1GO0VBQ25GLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLGFBQVksRUFzQ2I7O0FBeENEO0lBS0ksb0JDVm9DO0lEV3BDLGNBQWEsRUFDZDs7QUFQSDtJQVVJLHdCQUF1QixFQTZCeEI7O0FBdkNIO01BYU0sWUFBVztNQUNYLGNBQWEsRUFDZDs7QUFmTDtNQWtCTSxvQkFBbUIsRUFLcEI7O0FBdkJMO1FBcUJRLFlBQVcsRUFDWjs7QUF0QlA7TUEwQk0sc0JBQXFCO01BQ3JCLGVBQWMsRUFLZjs7QUFoQ0w7UUE4QlEsMkJBQTBCLEVBQzNCOztBQS9CUDtNQW1DTSxZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzLzMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG5cclxuICAucmVnaXN0ZXItaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3Q7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjRweCA0MnB4IDQycHg7XHJcblxyXG4gICAgbWQtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4dHJhLW9wdGlvbnMge1xyXG4gICAgICBtYXJnaW46IDE2cHggMCAzMnB4O1xyXG5cclxuICAgICAgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMjE5NkYzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm90ZSB7XHJcbiAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICBtYXJnaW46IDI0cHggMCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFNpZGVuYXZcclxuJGNvbG9yX19zaWRlbmF2LWxpc3Q6ICNBN0E5QUU7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi10b29sYmFyOiAjMjcyQjM1O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdDogIzJCMzAzQjtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0LCAyKTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMTogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3QsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDEsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDFfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMzogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMiwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMywgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsM19faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQ6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDMsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDRfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNSwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNiwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNl9faG92ZXI7XHJcblxyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDI6IDEwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsMzogMjBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw0OiAzMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDU6IDQwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNjogNDBweDtcclxuXHJcbiR3aWR0aF9fc2lkZW5hdjogMjUwcHg7XHJcblxyXG4kcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbTogMjRweDtcclxuJG1hcmdpbi1sZWZ0X19zaWRlbmF2LWxpc3RfX2l0ZW0tbmFtZTogJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW07XHJcbiR3aWR0aC1oZWlnaHRfX3NpZGVuYXYtbGlzdF9faWNvbjogMThweDtcclxuXHJcbiRtYXgtd2lkdGhfX2ljb24tc2lkZW5hdjogKCRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtICogMikgKyAkd2lkdGgtaGVpZ2h0X19zaWRlbmF2LWxpc3RfX2ljb24gKyAyO1xyXG5cclxuJHotaW5kZXhfX21kLXNpZGVuYXY6IDQ7XHJcbiR6LWluZGV4X19tZC1zaWRlbmF2LWNvbnRlbnQ6IDU7XHJcbiR6LWluZGV4X19tYWluLXRvb2xiYXI6IDUwMDtcclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcjogNjRweDtcclxuXHJcbi8vIE1peGluc1xyXG5cclxuQG1peGluIG1kU2hhZG93LXozICgpIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi8vIE5vdGlmaWNhdGlvbnNcclxuJGNvbG9yX19wcmltYXJ5OiAjNENBRjUwO1xyXG4kY29sb3JfX2FjY2VudDogI0U5MUU2MztcclxuJGNvbG9yX193YXJuOiAjZjQ0MzM2O1xyXG5cclxuJGNvbG9yX19wcmltYXJ5LWNvbnRyYXN0OiAjRkZGO1xyXG4kY29sb3JfX2FjY2VudC1jb250cmFzdDogI0ZGRjtcclxuJGNvbG9yX193YXJuLWNvbnRyYXN0OiAjRkZGO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/accounts/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/accounts/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route.animation */ "./src/app/route.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var _shared_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/account */ "./src/app/accounts/shared/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, accountsService) {
        this.router = router;
        this.accountsService = accountsService;
        this.registerDetail = new _shared_account__WEBPACK_IMPORTED_MODULE_4__["RegisterDetail"]();
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
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/accounts/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/accounts/register.component.scss")],
            host: {
                '[@fadeInAnimation]': 'true'
            },
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/accounts/shared/account.ts":
/*!********************************************!*\
  !*** ./src/app/accounts/shared/account.ts ***!
  \********************************************/
/*! exports provided: LoginDetail, RegisterDetail, LogoutDetail, ManagerViewModel, CommonUserViewModel, UserViewModel, AddUserViewModel, AddUserResultViewmodel, UserEditViewModel, UserClaimsViewModel, UpdateUserClaimsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDetail", function() { return LoginDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDetail", function() { return RegisterDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDetail", function() { return LogoutDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerViewModel", function() { return ManagerViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUserViewModel", function() { return CommonUserViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserViewModel", function() { return AddUserViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserResultViewmodel", function() { return AddUserResultViewmodel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditViewModel", function() { return UserEditViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserClaimsViewModel", function() { return UserClaimsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserClaimsViewModel", function() { return UpdateUserClaimsViewModel; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoginDetail = /** @class */ (function () {
    function LoginDetail() {
    }
    return LoginDetail;
}());

var RegisterDetail = /** @class */ (function () {
    function RegisterDetail() {
    }
    return RegisterDetail;
}());

var LogoutDetail = /** @class */ (function () {
    function LogoutDetail() {
    }
    return LogoutDetail;
}());

var ManagerViewModel = /** @class */ (function () {
    function ManagerViewModel() {
    }
    return ManagerViewModel;
}());

var CommonUserViewModel = /** @class */ (function () {
    function CommonUserViewModel() {
    }
    return CommonUserViewModel;
}());

var UserViewModel = /** @class */ (function (_super) {
    __extends(UserViewModel, _super);
    function UserViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserViewModel;
}(CommonUserViewModel));

var AddUserViewModel = /** @class */ (function (_super) {
    __extends(AddUserViewModel, _super);
    function AddUserViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AddUserViewModel;
}(CommonUserViewModel));

var AddUserResultViewmodel = /** @class */ (function () {
    function AddUserResultViewmodel() {
    }
    return AddUserResultViewmodel;
}());

var UserEditViewModel = /** @class */ (function (_super) {
    __extends(UserEditViewModel, _super);
    function UserEditViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserEditViewModel;
}(UserViewModel));

var UserClaimsViewModel = /** @class */ (function () {
    function UserClaimsViewModel() {
    }
    return UserClaimsViewModel;
}());

var UpdateUserClaimsViewModel = /** @class */ (function () {
    function UpdateUserClaimsViewModel() {
    }
    return UpdateUserClaimsViewModel;
}());



/***/ }),

/***/ "./src/app/accounts/shared/accounts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/accounts/shared/accounts.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account */ "./src/app/accounts/shared/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountsService = /** @class */ (function () {
    function AccountsService(http, location) {
        this.http = http;
        this.location = location;
    }
    AccountsService.prototype.login = function (loginUser) {
        return this.http.post("/api/account/login", JSON.stringify(loginUser))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.register = function (registerUser) {
        return this.http.post("/api/account/register", JSON.stringify(registerUser))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.logout = function (logoutUser) {
        return this.http.post("/api/account/LogOff", JSON.stringify(logoutUser))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.getAllUsers = function () {
        return this.http.get("/api/account/GetAllUsers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.addUser = function (userData) {
        return this.http.post("/api/account/addUser", JSON.stringify(userData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.GetUser = function (userId) {
        return this.http.get("/api/account/GetUser?userId=" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.editUser = function (userData) {
        return this.http.put("/api/account/editUser", JSON.stringify(userData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.getUserClaims = function (userId) {
        return this.http.get('/api/account/GetUserClaims?userId=' + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.saveUserClains = function (userId, userClaims) {
        var data = new _account__WEBPACK_IMPORTED_MODULE_4__["UpdateUserClaimsViewModel"]();
        data.userId = userId;
        data.claims = userClaims;
        return this.http.put('/api/account/UpdateUserClaims', JSON.stringify(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) { return res.json(); }));
    };
    AccountsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AccountsService);
    return AccountsService;
}());



/***/ }),

/***/ "./src/app/accounts/view-user.component.html":
/*!***************************************************!*\
  !*** ./src/app/accounts/view-user.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'User.Edit'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit user</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"userForm\" novalidate (ngSubmit)=\"saveUser(userForm.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"userName\" placeholder=\"User Name\" required [(ngModel)]=\"user.userName\" formControlName=\"userName\" readonly=\"true\"\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"email\" placeholder=\"email\" required [(ngModel)]=\"user.email\" formControlName=\"email\" readonly=\"true\"\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"firstName\" placeholder=\"First Name\" required [(ngModel)]=\"user.firstName\" formControlName=\"firstName\"\r\n              readonly=\"true\" />\r\n\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"lastName\" placeholder=\"Last Name\" required [(ngModel)]=\"user.lastName\" formControlName=\"lastName\" readonly=\"true\"\r\n            />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput name=\"addressLine1\" placeholder=\"Address Line1\" required [(ngModel)]=\"user.addressLine1\" formControlName=\"addressLine1\"\r\n              readonly=\"true\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"user.roleId\" placeholder=\"Role Name\" formControlName=\"roleId\" [disabled]=\"true\">\r\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.roleId\">\r\n              {{role.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button type=\"button\" (click)=\"editUser(user.id);\" color=\"primary\" style=\"margin-left: 8px;\">\r\n              Edit\r\n            </button>\r\n          <button md-raised-button type=\"button\" (click)=\"cancelChanges($event);\" color=\"primary\" style=\"margin-left: 8px;\">\r\n              Go Back\r\n            </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/accounts/view-user.component.scss":
/*!***************************************************!*\
  !*** ./src/app/accounts/view-user.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcYWNjb3VudHNcXHZpZXctdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsMEJBQXVEO0VBQ3ZELDBGQUF5RjtFQUN6Rix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy92aWV3LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL192YXJcIjtcclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/accounts/view-user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/accounts/view-user.component.ts ***!
  \*************************************************/
/*! exports provided: ViewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function() { return ViewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var _roles_shared_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roles/shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
/* harmony import */ var _shared_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/account */ "./src/app/accounts/shared/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewUserComponent = /** @class */ (function () {
    function ViewUserComponent(router, formBuilder, route, snackBar, dialogService, rolesService, accountsService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.rolesService = rolesService;
        this.accountsService = accountsService;
        this.user = new _shared_account__WEBPACK_IMPORTED_MODULE_7__["UserEditViewModel"]();
        this.userForm = formBuilder.group({
            id: [''],
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            addressLine1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            roleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ViewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var userGuid = params['userId'];
            if (!userGuid)
                return;
            _this.accountsService.GetUser(userGuid)
                .subscribe(function (data) {
                _this.user = data;
                _this.userId = data.userId;
                _this.userForm.controls['id'].setValue(data.id);
                _this.rolesService.getRoles()
                    .subscribe(function (roles) {
                    _this.roles = roles;
                });
                _this.accountsService.getUserClaims(userGuid)
                    .subscribe(function (userClaims) {
                    _this.userClaims = userClaims;
                    console.log(_this.userClaims);
                });
            });
        });
    };
    ViewUserComponent.prototype.editUser = function (userId) {
        this.router.navigateByUrl('/users/edit/' + userId);
    };
    ViewUserComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/users');
    };
    ViewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-view-user',
            template: __webpack_require__(/*! ./view-user.component.html */ "./src/app/accounts/view-user.component.html"),
            styles: [__webpack_require__(/*! ./view-user.component.scss */ "./src/app/accounts/view-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _roles_shared_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"],
            _shared_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]])
    ], ViewUserComponent);
    return ViewUserComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _shared_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/not-found.component */ "./src/app/shared/not-found.component.ts");
/* harmony import */ var _shared_access_denied_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/access-denied.component */ "./src/app/shared/access-denied.component.ts");
/* harmony import */ var _shared_internal_server_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/internal-server-error.component */ "./src/app/shared/internal-server-error.component.ts");
/* harmony import */ var _shared_guards_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/index */ "./src/app/shared/guards/index.ts");
/* harmony import */ var _main_main_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _accounts_accounts_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accounts/accounts-routing.module */ "./src/app/accounts/accounts-routing.module.ts");
/* harmony import */ var _userProfiles_userProfiles_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userProfiles/userProfiles.routing */ "./src/app/userProfiles/userProfiles.routing.ts");
/* harmony import */ var _roles_roles_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./roles/roles.routing */ "./src/app/roles/roles.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// ---------Routes----------





//-------------
var routes = _accounts_accounts_routing_module__WEBPACK_IMPORTED_MODULE_8__["accountsRoutes"].concat([
    {
        path: '',
        component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_shared_guards_index__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: _main_main_routing_module__WEBPACK_IMPORTED_MODULE_7__["mainRoutes"].concat(_userProfiles_userProfiles_routing__WEBPACK_IMPORTED_MODULE_9__["userProfilesRoutes"], _roles_roles_routing__WEBPACK_IMPORTED_MODULE_10__["rolesRoutes"], _accounts_accounts_routing_module__WEBPACK_IMPORTED_MODULE_8__["userManagementRoutes"])
    },
    { path: 'notFound', component: _shared_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
    { path: 'accessDenied', component: _shared_access_denied_component__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedComponent"] },
    { path: 'internalServerError', component: _shared_internal_server_error_component__WEBPACK_IMPORTED_MODULE_5__["InternalServerErrorComponent"] }
    //{ path: '**', redirectTo: '/notFound' }
]);
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-load-animation\">\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widgets_sidenav_mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/sidenav/mediareplay/media-replay.service */ "./src/app/widgets/sidenav/mediareplay/media-replay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(mediaReplayService) {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_widgets_sidenav_mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_1__["MediaReplayService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_guards_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/index */ "./src/app/shared/guards/index.ts");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared-components.module */ "./src/app/shared/shared-components.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./accounts/accounts.module */ "./src/app/accounts/accounts.module.ts");
/* harmony import */ var _userProfiles_userProfiles_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./userProfiles/userProfiles.module */ "./src/app/userProfiles/userProfiles.module.ts");
/* harmony import */ var _roles_roles_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./roles/roles.module */ "./src/app/roles/roles.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-sortablejs */ "./node_modules/angular-sortablejs/dist/index.js");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular_sortablejs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _shared_httpFactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/httpFactory */ "./src/app/shared/httpFactory.ts");
/* harmony import */ var _shared_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/not-found.component */ "./src/app/shared/not-found.component.ts");
/* harmony import */ var _shared_access_denied_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/access-denied.component */ "./src/app/shared/access-denied.component.ts");
/* harmony import */ var _shared_internal_server_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/internal-server-error.component */ "./src/app/shared/internal-server-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var perfectScrollbarConfig = {
    suppressScrollX: true,
};
var sortablejsConfig = {
    animation: 300
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _shared_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"], _shared_access_denied_component__WEBPACK_IMPORTED_MODULE_21__["AccessDeniedComponent"], _shared_internal_server_error_component__WEBPACK_IMPORTED_MODULE_22__["InternalServerErrorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["RoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_13__["MainModule"],
                _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_14__["AccountsModule"],
                _userProfiles_userProfiles_module__WEBPACK_IMPORTED_MODULE_15__["UserProfilesModule"],
                _roles_roles_module__WEBPACK_IMPORTED_MODULE_16__["RolesModule"],
                angular_sortablejs__WEBPACK_IMPORTED_MODULE_18__["SortablejsModule"],
                _shared_material_components_module__WEBPACK_IMPORTED_MODULE_4__["MaterialComponentsModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], _shared_guards_index__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_17__["Http"],
                    useFactory: _shared_httpFactory__WEBPACK_IMPORTED_MODULE_19__["httpFactory"],
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_17__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["RequestOptions"]]
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/formFieldViews/edit-formFieldView.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/formFieldViews/edit-formFieldView.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit Form Field View</mat-toolbar>\r\n    <mat-card-content>\r\n\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveFormFieldView(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   formControlName=\"name\"\r\n                   placeholder=\"View Name\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formViewType.name\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"row\"\r\n                   placeholder=\"Row\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.row\"\r\n                   formControlName=\"row\"\r\n                   [class.invalid]=\"formGroup.controls['row'].touched && !formGroup.controls['row'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['row'].pristine || formGroup.controls['row'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['row'].errors?.required\">Row Number is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Row Span\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.rowSpan\"\r\n                   formControlName=\"rowSpan\"\r\n                   [class.invalid]=\"formGroup.controls['row'].touched && !formGroup.controls['rowSpan'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['rowSpan'].pristine || formGroup.controls['rowSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowSpan'].errors?.required\">Row Span is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"column\"\r\n                   placeholder=\"Column\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.column\"\r\n                   formControlName=\"column\"\r\n                   [class.invalid]=\"formGroup.controls['column'].touched && !formGroup.controls['column'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['column'].pristine || formGroup.controls['column'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['column'].errors?.required\">Column Number is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   required\r\n                   [(ngModel)]=\"formFieldView.columnSpan\"\r\n                   formControlName=\"columnSpan\"\r\n                   [class.invalid]=\"formGroup.controls['columnSpan'].touched && !formGroup.controls['columnSpan'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['columnSpan'].pristine || formGroup.controls['columnSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnSpan'].errors?.required\">Column Span is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-slide-toggle [(ngModel)]=\"formFieldView.readOnly\"\r\n                           formControlName=\"readOnly\" color=\"primary\">\r\n            Read only\r\n          </mat-slide-toggle>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-slide-toggle [(ngModel)]=\"formFieldView.hidden\"\r\n                           formControlName=\"hidden\" color=\"primary\">\r\n            Hidden\r\n          </mat-slide-toggle>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/formFieldViews/edit-formFieldView.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/formFieldViews/edit-formFieldView.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb3JtRmllbGRWaWV3cy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxmb3JtRmllbGRWaWV3c1xcZWRpdC1mb3JtRmllbGRWaWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9ybUZpZWxkVmlld3MvZWRpdC1mb3JtRmllbGRWaWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/formFieldViews/edit-formFieldView.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/formFieldViews/edit-formFieldView.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditFormFieldViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormFieldViewComponent", function() { return EditFormFieldViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_formFieldViews_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/formFieldViews.service */ "./src/app/main/formFieldViews/shared/formFieldViews.service.ts");
/* harmony import */ var _formFields_shared_formField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formFields/shared/formField */ "./src/app/main/formFields/shared/formField.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditFormFieldViewComponent = /** @class */ (function () {
    function EditFormFieldViewComponent(snackBar, formBuilder, router, route, formFieldViewsService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formFieldViewsService = formFieldViewsService;
        this.formFieldView = new _formFields_shared_formField__WEBPACK_IMPORTED_MODULE_5__["FormFieldView"]();
        this.formViewType = new _formFields_shared_formField__WEBPACK_IMPORTED_MODULE_5__["FormViewTypeModel"]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: this.formBuilder.control({ value: '', disabled: true }),
            row: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rowSpan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            column: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            columnSpan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            readOnly: [''],
            hidden: [''],
        });
    }
    EditFormFieldViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectId = params['projectid'];
            _this.formId = params['formid'];
            _this.formfieldId = params['formfieldid'];
            _this.formFieldViewId = params['formFieldViewid'];
            if (!_this.formFieldViewId)
                return;
            _this.formFieldViewsService.getFormFieldView(_this.formFieldViewId)
                .subscribe(function (formFieldView) {
                _this.formFieldView = formFieldView;
                _this.formViewType = formFieldView.view;
                console.log(formFieldView.view);
                _this.formGroup.controls['id'].setValue(_this.formFieldViewId);
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    EditFormFieldViewComponent.prototype.saveFormFieldView = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        data.id = this.formFieldViewId;
        data.view = this.formViewType;
        data.formFieldId = this.formfieldId;
        data.fieldID = this.formfieldId;
        this.formFieldViewsService.editFormFieldView(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                var snackBarRef = _this.snackBar.open('Field View saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/projects/' + _this.projectId + '/forms/' + _this.formId + '/fields/' + _this.formfieldId);
                });
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
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId + '/fields/' + this.formfieldId);
    };
    EditFormFieldViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-formFieldView',
            template: __webpack_require__(/*! ./edit-formFieldView.component.html */ "./src/app/main/formFieldViews/edit-formFieldView.component.html"),
            styles: [__webpack_require__(/*! ./edit-formFieldView.component.scss */ "./src/app/main/formFieldViews/edit-formFieldView.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_formFieldViews_service__WEBPACK_IMPORTED_MODULE_4__["FormFieldViewsService"]])
    ], EditFormFieldViewComponent);
    return EditFormFieldViewComponent;
}());



/***/ }),

/***/ "./src/app/main/formFieldViews/formFieldViews.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/formFieldViews/formFieldViews.module.ts ***!
  \**************************************************************/
/*! exports provided: formFieldViewConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFieldViewConfig", function() { return formFieldViewConfig; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _edit_formFieldView_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-formFieldView.component */ "./src/app/main/formFieldViews/edit-formFieldView.component.ts");
/* harmony import */ var _shared_formFieldViews_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/formFieldViews.service */ "./src/app/main/formFieldViews/shared/formFieldViews.service.ts");


// import { MaterialModule } from '@angular/material';





var formFieldViewConfig = {
    imports: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        // MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
    ],
    declarations: [
        _edit_formFieldView_component__WEBPACK_IMPORTED_MODULE_5__["EditFormFieldViewComponent"]
    ],
    providers: [
        _shared_formFieldViews_service__WEBPACK_IMPORTED_MODULE_6__["FormFieldViewsService"]
    ]
};


/***/ }),

/***/ "./src/app/main/formFieldViews/formFieldViews.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/formFieldViews/formFieldViews.routing.ts ***!
  \***************************************************************/
/*! exports provided: formFieldViewsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFieldViewsRoutes", function() { return formFieldViewsRoutes; });
/* harmony import */ var _edit_formFieldView_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-formFieldView.component */ "./src/app/main/formFieldViews/edit-formFieldView.component.ts");

var formFieldViewsRoutes = [
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid/formFieldViews/edit/:formFieldViewid', component: _edit_formFieldView_component__WEBPACK_IMPORTED_MODULE_0__["EditFormFieldViewComponent"] }
];


/***/ }),

/***/ "./src/app/main/formFieldViews/shared/formFieldViews.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/formFieldViews/shared/formFieldViews.service.ts ***!
  \**********************************************************************/
/*! exports provided: FormFieldViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldViewsService", function() { return FormFieldViewsService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormFieldViewsService = /** @class */ (function () {
    function FormFieldViewsService(http) {
        this.http = http;
    }
    FormFieldViewsService.prototype.getFormFieldViews = function (fieldId) {
        return this.http.get('/api/formField/GetFormFieldView?fieldId=' + fieldId)
            .map(this.extractData);
    };
    FormFieldViewsService.prototype.getFormFieldView = function (formFieldViewId) {
        return this.http.get('/api/formField/GetFieldView?formFieldViewId=' + formFieldViewId)
            .map(function (res) { return res.json(); });
    };
    FormFieldViewsService.prototype.editFormFieldView = function (formFieldView) {
        return this.http.put('/api/formField/EditFormFieldView', JSON.stringify(formFieldView))
            .map(function (res) { return res.json(); });
    };
    FormFieldViewsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FormFieldViewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], FormFieldViewsService);
    return FormFieldViewsService;
}());



/***/ }),

/***/ "./src/app/main/formFields/edit-formField.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/formFields/edit-formField.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'FormField.Edit'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit Form Field</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"formField.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"formGroup.controls['name'].touched && !formGroup.controls['name'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['name'].pristine || formGroup.controls['name'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['name'].errors?.required\">Field Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"label\"\r\n                   placeholder=\"Label\"\r\n                   [(ngModel)]=\"formField.label\"\r\n                   formControlName=\"label\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"formField.description\"\r\n                   formControlName=\"description\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"formField.fieldTypeID\" placeholder=\"Field Type\" formControlName=\"fieldTypeID\">\r\n            <mat-option *ngFor=\"let fieldType of fieldTypes\" [value]=\"fieldType.id\">\r\n              {{fieldType.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"width\"\r\n                   placeholder=\"Width\"\r\n                   [(ngModel)]=\"formField.width\"\r\n                   formControlName=\"width\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rowNumber\"\r\n                   placeholder=\"Row Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowNumber\"\r\n                   formControlName=\"rowNumber\"\r\n                   [class.invalid]=\"formGroup.controls['rowNumber'].touched && !formGroup.controls['rowNumber'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['rowNumber'].pristine || formGroup.controls['rowNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowNumber'].errors?.required\">Row Number is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Rowspan\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowSpan\"\r\n                   formControlName=\"rowSpan\"\r\n                   [class.invalid]=\"formGroup.controls['rowSpan'].touched && !formGroup.controls['rowSpan'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['rowSpan'].pristine || formGroup.controls['rowSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowSpan'].errors?.required\">Row span is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"columnNumber\"\r\n                   placeholder=\"Column Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnNumber\"\r\n                   formControlName=\"columnNumber\"\r\n                   [class.invalid]=\"formGroup.controls['columnNumber'].touched && !formGroup.controls['columnNumber'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['columnNumber'].pristine || formGroup.controls['columnNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnNumber'].errors?.required\">Column Number is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnSpan\"\r\n                   formControlName=\"columnSpan\"\r\n                   [class.invalid]=\"formGroup.controls['columnSpan'].touched && !formGroup.controls['columnSpan'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['columnSpan'].pristine || formGroup.controls['columnSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnSpan'].errors?.required\">Column Span is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-slide-toggle name=\"isRequired\" [(ngModel)]=\"formField.isRequired\" formControlName=\"isRequired\" color=\"primary\">\r\n            Is Required\r\n          </mat-slide-toggle>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/formFields/edit-formField.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main/formFields/edit-formField.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb3JtRmllbGRzL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXG1haW5cXGZvcm1GaWVsZHNcXGVkaXQtZm9ybUZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9ybUZpZWxkcy9lZGl0LWZvcm1GaWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3ZhclwiO1xyXG5cclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHg6ICRoZWlnaHRfX21haW4tdG9vbGJhciArIDhweDtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4fSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9hcmNoLXBhdHRlcm4ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWQtaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/formFields/edit-formField.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/formFields/edit-formField.component.ts ***!
  \*************************************************************/
/*! exports provided: EditFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormFieldComponent", function() { return EditFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_formFields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/formFields.service */ "./src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var _shared_formField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/formField */ "./src/app/main/formFields/shared/formField.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditFormFieldComponent = /** @class */ (function () {
    function EditFormFieldComponent(snackBar, formBuilder, router, route, formFieldsService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formFieldsService = formFieldsService;
        this.formField = new _shared_formField__WEBPACK_IMPORTED_MODULE_5__["FormField"]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            label: [''],
            description: [''],
            fieldTypeID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            width: [''],
            rowNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rowSpan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            columnNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            columnSpan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
                var snackBarRef = _this.snackBar.open('Form Field saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/projects/' + _this.projectId + '/forms/' + _this.formId);
                });
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
    EditFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-formField',
            template: __webpack_require__(/*! ./edit-formField.component.html */ "./src/app/main/formFields/edit-formField.component.html"),
            styles: [__webpack_require__(/*! ./edit-formField.component.scss */ "./src/app/main/formFields/edit-formField.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_formFields_service__WEBPACK_IMPORTED_MODULE_4__["FormFieldsService"]])
    ], EditFormFieldComponent);
    return EditFormFieldComponent;
}());



/***/ }),

/***/ "./src/app/main/formFields/formFields.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/formFields/formFields.module.ts ***!
  \******************************************************/
/*! exports provided: formFieldConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFieldConfig", function() { return formFieldConfig; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _new_formField_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-formField.component */ "./src/app/main/formFields/new-formField.component.ts");
/* harmony import */ var _edit_formField_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-formField.component */ "./src/app/main/formFields/edit-formField.component.ts");
/* harmony import */ var _view_formField_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-formField.component */ "./src/app/main/formFields/view-formField.component.ts");
/* harmony import */ var _shared_formFields_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/formFields.service */ "./src/app/main/formFields/shared/formFields.service.ts");


// import { MaterialModule } from '@angular/material';







var formFieldConfig = {
    imports: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        // MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
    ],
    declarations: [
        _new_formField_component__WEBPACK_IMPORTED_MODULE_5__["NewFormFieldComponent"],
        _edit_formField_component__WEBPACK_IMPORTED_MODULE_6__["EditFormFieldComponent"],
        _view_formField_component__WEBPACK_IMPORTED_MODULE_7__["ViewFormFieldComponent"]
    ],
    providers: [
        _shared_formFields_service__WEBPACK_IMPORTED_MODULE_8__["FormFieldsService"]
    ]
};


/***/ }),

/***/ "./src/app/main/formFields/formFields.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/formFields/formFields.routing.ts ***!
  \*******************************************************/
/*! exports provided: formFieldsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFieldsRoutes", function() { return formFieldsRoutes; });
/* harmony import */ var _new_formField_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-formField.component */ "./src/app/main/formFields/new-formField.component.ts");
/* harmony import */ var _edit_formField_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-formField.component */ "./src/app/main/formFields/edit-formField.component.ts");
/* harmony import */ var _view_formField_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-formField.component */ "./src/app/main/formFields/view-formField.component.ts");



var formFieldsRoutes = [
    { path: 'projects/:projectid/forms/:formid/fields/new', component: _new_formField_component__WEBPACK_IMPORTED_MODULE_0__["NewFormFieldComponent"] },
    { path: 'projects/:projectid/forms/:formid/fields/edit/:formfieldid', component: _edit_formField_component__WEBPACK_IMPORTED_MODULE_1__["EditFormFieldComponent"] },
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid', component: _view_formField_component__WEBPACK_IMPORTED_MODULE_2__["ViewFormFieldComponent"] }
];


/***/ }),

/***/ "./src/app/main/formFields/new-formField.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/formFields/new-formField.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'FormField.Add'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Add Form Field</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"formField.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"formGroup.controls['name'].touched && !formGroup.controls['name'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['name'].pristine || formGroup.controls['name'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['name'].errors?.required\">Field Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"label\"\r\n                   placeholder=\"Label\"\r\n                   [(ngModel)]=\"formField.label\"\r\n                   formControlName=\"label\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"formField.description\"\r\n                   formControlName=\"description\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"formField.fieldTypeID\" placeholder=\"Field Type\" formControlName=\"fieldTypeID\">\r\n            <mat-option *ngFor=\"let fieldType of fieldTypes\" [value]=\"fieldType.id\">\r\n              {{fieldType.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"width\"\r\n                   placeholder=\"Width\"\r\n                   [(ngModel)]=\"formField.width\"\r\n                   formControlName=\"width\" />\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rowNumber\"\r\n                   placeholder=\"Row Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowNumber\"\r\n                   formControlName=\"rowNumber\"\r\n                   [class.invalid]=\"formGroup.controls['rowNumber'].touched && !formGroup.controls['rowNumber'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['rowNumber'].pristine || formGroup.controls['rowNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowNumber'].errors?.required\">Row Number is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Rowspan\"\r\n                   required\r\n                   [(ngModel)]=\"formField.rowSpan\"\r\n                   formControlName=\"rowSpan\"\r\n                   [class.invalid]=\"formGroup.controls['rowSpan'].touched && !formGroup.controls['rowSpan'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['rowSpan'].pristine || formGroup.controls['rowSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['rowSpan'].errors?.required\">Row span is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"columnNumber\"\r\n                   placeholder=\"Column Number\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnNumber\"\r\n                   formControlName=\"columnNumber\"\r\n                   [class.invalid]=\"formGroup.controls['columnNumber'].touched && !formGroup.controls['columnNumber'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['columnNumber'].pristine || formGroup.controls['columnNumber'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnNumber'].errors?.required\">Column Number is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   required\r\n                   [(ngModel)]=\"formField.columnSpan\"\r\n                   formControlName=\"columnSpan\"\r\n                   [class.invalid]=\"formGroup.controls['columnSpan'].touched && !formGroup.controls['columnSpan'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['columnSpan'].pristine || formGroup.controls['columnSpan'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['columnSpan'].errors?.required\">Column Span is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-slide-toggle name=\"isRequired\" [(ngModel)]=\"formField.isRequired\" formControlName=\"isRequired\" color=\"primary\">\r\n            Is Required\r\n          </mat-slide-toggle>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/formFields/new-formField.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/formFields/new-formField.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb3JtRmllbGRzL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXG1haW5cXGZvcm1GaWVsZHNcXG5ldy1mb3JtRmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLDBCQUF1RDtFQUN2RCwwRkFBeUY7RUFDekYsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9mb3JtRmllbGRzL25ldy1mb3JtRmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL192YXJcIjtcclxuXHJcblxyXG4kaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4OiAkaGVpZ2h0X19tYWluLXRvb2xiYXIgKyA4cHg7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMzZweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweH0pO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvYXJjaC1wYXR0ZXJuLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbm1kLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/formFields/new-formField.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/formFields/new-formField.component.ts ***!
  \************************************************************/
/*! exports provided: NewFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormFieldComponent", function() { return NewFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_formFields_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/formFields.service */ "./src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var _shared_formField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/formField */ "./src/app/main/formFields/shared/formField.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewFormFieldComponent = /** @class */ (function () {
    function NewFormFieldComponent(snackBar, formBuilder, router, route, formFieldsService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formFieldsService = formFieldsService;
        this.formField = new _shared_formField__WEBPACK_IMPORTED_MODULE_5__["FormField"]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            label: [''],
            description: [''],
            fieldTypeID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            width: [''],
            rowNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rowSpan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            columnNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            columnSpan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
                var snackBarRef = _this.snackBar.open('Form Field saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/projects/' + _this.projectId + '/forms/' + _this.formId);
                });
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
    NewFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-new-formField',
            template: __webpack_require__(/*! ./new-formField.component.html */ "./src/app/main/formFields/new-formField.component.html"),
            styles: [__webpack_require__(/*! ./new-formField.component.scss */ "./src/app/main/formFields/new-formField.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_formFields_service__WEBPACK_IMPORTED_MODULE_4__["FormFieldsService"]])
    ], NewFormFieldComponent);
    return NewFormFieldComponent;
}());



/***/ }),

/***/ "./src/app/main/formFields/shared/formField.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/formFields/shared/formField.ts ***!
  \*****************************************************/
/*! exports provided: FormViewTypeModel, FormFieldView, FormField, EditFormFields, DeleteFormFields, EditFormFieldsView, FieldType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormViewTypeModel", function() { return FormViewTypeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldView", function() { return FormFieldView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormField", function() { return FormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormFields", function() { return EditFormFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFormFields", function() { return DeleteFormFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormFieldsView", function() { return EditFormFieldsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return FieldType; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FormViewTypeModel = /** @class */ (function () {
    function FormViewTypeModel() {
    }
    return FormViewTypeModel;
}());

var FormFieldView = /** @class */ (function () {
    function FormFieldView() {
    }
    return FormFieldView;
}());

var FormField = /** @class */ (function () {
    function FormField() {
    }
    return FormField;
}());

var EditFormFields = /** @class */ (function (_super) {
    __extends(EditFormFields, _super);
    function EditFormFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EditFormFields;
}(FormField));

var DeleteFormFields = /** @class */ (function (_super) {
    __extends(DeleteFormFields, _super);
    function DeleteFormFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeleteFormFields;
}(FormField));

var EditFormFieldsView = /** @class */ (function (_super) {
    __extends(EditFormFieldsView, _super);
    function EditFormFieldsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EditFormFieldsView;
}(FormField));

var FieldType = /** @class */ (function () {
    function FieldType() {
    }
    return FieldType;
}());



/***/ }),

/***/ "./src/app/main/formFields/shared/formFields.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/formFields/shared/formFields.service.ts ***!
  \**************************************************************/
/*! exports provided: FormFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldsService", function() { return FormFieldsService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormFieldsService = /** @class */ (function () {
    function FormFieldsService(http) {
        this.http = http;
    }
    FormFieldsService.prototype.getFormFields = function (formId) {
        return this.http.get('/api/formField/GetFormFields?formId=' + formId)
            .map(this.extractData);
    };
    FormFieldsService.prototype.getFormField = function (fieldId) {
        return this.http.get('/api/formField/GetFormField?fieldId=' + fieldId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FormFieldsService.prototype.addFormField = function (formField) {
        return this.http.post('/api/formField/AddFormField', JSON.stringify(formField))
            .map(function (res) { return res.json(); });
    };
    FormFieldsService.prototype.editFormField = function (formField) {
        return this.http.put('/api/formField/EditFormField', JSON.stringify(formField))
            .map(function (res) { return res.json(); });
    };
    FormFieldsService.prototype.deleteFormField = function (formFieldId) {
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
    FormFieldsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], FormFieldsService);
    return FormFieldsService;
}());



/***/ }),

/***/ "./src/app/main/formFields/view-formField.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/formFields/view-formField.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'FormField.View'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">View Form Field</mat-toolbar>\r\n    <mat-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.name\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"label\"\r\n                   placeholder=\"Label\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.label\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.description\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"formField.fieldTypeID\" placeholder=\"Field Type\" name=\"fieldTypeID\"  [disabled]=\"true\">\r\n            <mat-option *ngFor=\"let fieldType of fieldTypes\" [value]=\"fieldType.id\">\r\n              {{fieldType.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"width\"\r\n                   placeholder=\"Width\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.width\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"rowNumber\"\r\n                   placeholder=\"Row Number\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.rowNumber\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"rowSpan\"\r\n                   placeholder=\"Row span\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.rowSpan\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"columnNumber\"\r\n                   placeholder=\"Column Number\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.columnNumber\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"columnSpan\"\r\n                   placeholder=\"Column Span\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"formField.columnSpan\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-checkbox name=\"isRequired\"\r\n                       [disabled]=\"true\"\r\n                       [(ngModel)]=\"formField.isRequired\"\r\n                       color=\"primary\">\r\n            Is Required\r\n          </mat-checkbox>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"warn\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"deleteFormField(projectId,formField.formID,formField.id)\" *msElementAccess=\"'FormField.Delete'\">\r\n            Delete\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editFormField(projectId,formField.formID,formField.id);\" *msElementAccess=\"'FormField.Edit'\">\r\n            Edit\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>View Name</th>\r\n                <th>Row</th>\r\n                <th>Row Span</th>\r\n                <th>Column</th>\r\n                <th>Column Span</th>\r\n                <th>Read Only</th>\r\n                <th>Hidden</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let formFieldView of formFieldViews\">\r\n                <td>{{ formFieldView.view.name }}</td>\r\n                <td>{{ formFieldView.row }}</td>\r\n                <td>{{ formFieldView.rowSpan }}</td>\r\n                <td>{{ formFieldView.column }}</td>\r\n                <td>{{ formFieldView.columnSpan }}</td>\r\n                <td><button mat-icon-button> <mat-icon>{{ formFieldView.readOnly?\"check\":\"close\"}}</mat-icon></button></td>\r\n                <td><button mat-icon-button> <mat-icon>{{ formFieldView.hidden?\"check\":\"close\"}}</mat-icon></button></td>\r\n                <td>\r\n                  <button mat-icon-button (click)=\"editFormFieldView(this.projectId,formField.formID,formField.id, formFieldView.id);\" style=\"margin-left: 1px;\"><mat-icon>edit</mat-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/formFields/view-formField.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main/formFields/view-formField.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb3JtRmllbGRzL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXG1haW5cXGZvcm1GaWVsZHNcXHZpZXctZm9ybUZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9ybUZpZWxkcy92aWV3LWZvcm1GaWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3ZhclwiO1xyXG5cclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHg6ICRoZWlnaHRfX21haW4tdG9vbGJhciArIDhweDtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4fSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9hcmNoLXBhdHRlcm4ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWQtaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/formFields/view-formField.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/formFields/view-formField.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewFormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFormFieldComponent", function() { return ViewFormFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_formFields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/formFields.service */ "./src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var _formFieldViews_shared_formFieldViews_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../formFieldViews/shared/formFieldViews.service */ "./src/app/main/formFieldViews/shared/formFieldViews.service.ts");
/* harmony import */ var _shared_formField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/formField */ "./src/app/main/formFields/shared/formField.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewFormFieldComponent = /** @class */ (function () {
    function ViewFormFieldComponent(formBuilder, router, route, snackBar, dialogService, formFieldsService, formFieldViewsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.formFieldsService = formFieldsService;
        this.formFieldViewsService = formFieldViewsService;
        this.formField = new _shared_formField__WEBPACK_IMPORTED_MODULE_7__["FormField"]();
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
    ViewFormFieldComponent.prototype.deleteFormField = function (projectId, formId, fieldId) {
        var _this = this;
        this.dialogService.confirm('Delete Field', 'Are you sure want to delete this Field?')
            .subscribe(function (result) {
            var res = result;
            if (res == 'yes') {
                _this.formFieldsService.deleteFormField(fieldId)
                    .subscribe(function (response) {
                    if (response.statusCode == 204) {
                        var snackBarRef = _this.snackBar.open('Field deleted Successfully!', 'Close', {
                            duration: 500
                        });
                        snackBarRef.afterDismissed().subscribe(function () {
                            _this.router.navigateByUrl('/projects/' + _this.projectId + '/forms/' + _this.formId);
                        });
                    }
                    else if (response.statusCode == 412) {
                        _this.serverErrorMessage = "Some details were missing!";
                    }
                    else {
                        _this.serverErrorMessage = response.content;
                    }
                });
            }
        });
    };
    ViewFormFieldComponent.prototype.editFormFieldView = function (projectId, formId, fieldId, formFieldViewId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/' + fieldId + '/formFieldViews/edit/' + formFieldViewId);
    };
    ViewFormFieldComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    };
    ViewFormFieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-view-formField',
            template: __webpack_require__(/*! ./view-formField.component.html */ "./src/app/main/formFields/view-formField.component.html"),
            styles: [__webpack_require__(/*! ./view-formField.component.scss */ "./src/app/main/formFields/view-formField.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _shared_formFields_service__WEBPACK_IMPORTED_MODULE_5__["FormFieldsService"],
            _formFieldViews_shared_formFieldViews_service__WEBPACK_IMPORTED_MODULE_6__["FormFieldViewsService"]])
    ], ViewFormFieldComponent);
    return ViewFormFieldComponent;
}());



/***/ }),

/***/ "./src/app/main/forms/edit-form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/forms/edit-form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Form.Edit'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit Form</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout column>\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"formName\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"form.formName\"\r\n                   formControlName=\"formName\"\r\n                   [class.invalid]=\"formGroup.controls['formName'].touched && !formGroup.controls['formName'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['formName'].pristine || formGroup.controls['formName'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formName'].errors?.required\">Form Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"formTitle\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"form.formTitle\"\r\n                   formControlName=\"formTitle\"\r\n                   [class.invalid]=\"formGroup.controls['formTitle'].touched && !formGroup.controls['formTitle'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['formTitle'].pristine || formGroup.controls['formTitle'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formTitle'].errors?.required\">Form Title is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"form.dependencyID\" placeholder=\"Dependency\" formControlName=\"dependencyID\">\r\n            <mat-option *ngFor=\"let currentForm of forms\" [value]=\"currentForm.id\">\r\n              {{currentForm.title}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"formDescription\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"form.formDescription\"\r\n                   formControlName=\"formDescription\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/forms/edit-form.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/forms/edit-form.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb3Jtcy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxmb3Jtc1xcZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9ybXMvZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/forms/edit-form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/forms/edit-form.component.ts ***!
  \***************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/forms.service */ "./src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/form */ "./src/app/main/forms/shared/form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditFormComponent = /** @class */ (function () {
    function EditFormComponent(snackBar, formBuilder, router, route, formsService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formsService = formsService;
        this.form = new _shared_form__WEBPACK_IMPORTED_MODULE_5__["Form"]();
        this.formGroup = formBuilder.group({
            id: [''],
            formName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
                var snackBarRef = _this.snackBar.open('Form information saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/projects/' + _this.projectId);
                });
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
    EditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-form',
            template: __webpack_require__(/*! ./edit-form.component.html */ "./src/app/main/forms/edit-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-form.component.scss */ "./src/app/main/forms/edit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]])
    ], EditFormComponent);
    return EditFormComponent;
}());



/***/ }),

/***/ "./src/app/main/forms/forms.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/forms/forms.module.ts ***!
  \********************************************/
/*! exports provided: formConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formConfig", function() { return formConfig; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _new_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-form.component */ "./src/app/main/forms/new-form.component.ts");
/* harmony import */ var _edit_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-form.component */ "./src/app/main/forms/edit-form.component.ts");
/* harmony import */ var _view_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-form.component */ "./src/app/main/forms/view-form.component.ts");
/* harmony import */ var _shared_forms_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/forms.service */ "./src/app/main/forms/shared/forms.service.ts");


// import { MaterialModule } from '@angular/material';







var formConfig = {
    imports: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        // MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
    ],
    declarations: [
        _new_form_component__WEBPACK_IMPORTED_MODULE_5__["NewFormComponent"],
        _edit_form_component__WEBPACK_IMPORTED_MODULE_6__["EditFormComponent"],
        _view_form_component__WEBPACK_IMPORTED_MODULE_7__["ViewFormComponent"]
    ],
    providers: [
        _shared_forms_service__WEBPACK_IMPORTED_MODULE_8__["FormsService"]
    ]
};


/***/ }),

/***/ "./src/app/main/forms/forms.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/main/forms/forms.routing.ts ***!
  \*********************************************/
/*! exports provided: formsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formsRoutes", function() { return formsRoutes; });
/* harmony import */ var _edit_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-form.component */ "./src/app/main/forms/edit-form.component.ts");
/* harmony import */ var _new_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-form.component */ "./src/app/main/forms/new-form.component.ts");
/* harmony import */ var _view_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-form.component */ "./src/app/main/forms/view-form.component.ts");



var formsRoutes = [
    { path: 'projects/:projectid/forms/new', component: _new_form_component__WEBPACK_IMPORTED_MODULE_1__["NewFormComponent"] },
    { path: 'projects/:projectid/forms/edit/:formid', component: _edit_form_component__WEBPACK_IMPORTED_MODULE_0__["EditFormComponent"] },
    { path: 'projects/:projectid/forms/:formid', component: _view_form_component__WEBPACK_IMPORTED_MODULE_2__["ViewFormComponent"] }
];


/***/ }),

/***/ "./src/app/main/forms/new-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/forms/new-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\"*msElementAccess=\"'Form.Add'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Add Form</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveForm(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"formName\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"form.formName\"\r\n                   formControlName=\"formName\"\r\n                   [class.invalid]=\"formGroup.controls['formName'].touched && !formGroup.controls['formName'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['formName'].pristine || formGroup.controls['formName'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formName'].errors?.required\">Form Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"formTitle\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"form.formTitle\"\r\n                   formControlName=\"formTitle\"\r\n                   [class.invalid]=\"formGroup.controls['formTitle'].touched && !formGroup.controls['formTitle'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['formTitle'].pristine || formGroup.controls['formTitle'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['formTitle'].errors?.required\">Form Title is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"form.dependencyID\" placeholder=\"Dependency\" formControlName=\"dependencyID\">\r\n            <mat-option *ngFor=\"let currentForm of forms\" [value]=\"currentForm.id\">\r\n              {{currentForm.title}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"formDescription\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"form.formDescription\"\r\n                   formControlName=\"formDescription\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/forms/new-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/forms/new-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb3Jtcy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxmb3Jtc1xcbmV3LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLDBCQUF1RDtFQUN2RCwwRkFBeUY7RUFDekYsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9mb3Jtcy9uZXctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3ZhclwiO1xyXG5cclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHg6ICRoZWlnaHRfX21haW4tdG9vbGJhciArIDhweDtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4fSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9hcmNoLXBhdHRlcm4ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWQtaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/forms/new-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/forms/new-form.component.ts ***!
  \**************************************************/
/*! exports provided: NewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormComponent", function() { return NewFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/forms.service */ "./src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/form */ "./src/app/main/forms/shared/form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewFormComponent = /** @class */ (function () {
    function NewFormComponent(snackBar, formBuilder, router, route, formsService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.formsService = formsService;
        this.form = new _shared_form__WEBPACK_IMPORTED_MODULE_5__["Form"]();
        this.formGroup = formBuilder.group({
            id: [''],
            formName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            formTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
                var snackBarRef = _this.snackBar.open('Form information saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/projects/' + _this.projectId);
                });
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
    NewFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-new-form',
            template: __webpack_require__(/*! ./new-form.component.html */ "./src/app/main/forms/new-form.component.html"),
            styles: [__webpack_require__(/*! ./new-form.component.scss */ "./src/app/main/forms/new-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]])
    ], NewFormComponent);
    return NewFormComponent;
}());



/***/ }),

/***/ "./src/app/main/forms/shared/form.ts":
/*!*******************************************!*\
  !*** ./src/app/main/forms/shared/form.ts ***!
  \*******************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
//shishir: need to evaluate if bases interface is nice to have
var Form = /** @class */ (function () {
    function Form() {
    }
    return Form;
}());



/***/ }),

/***/ "./src/app/main/forms/shared/forms.service.ts":
/*!****************************************************!*\
  !*** ./src/app/main/forms/shared/forms.service.ts ***!
  \****************************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsService = /** @class */ (function () {
    function FormsService(http) {
        this.http = http;
    }
    FormsService.prototype.getForms = function (projectId) {
        return this.http.get('/api/form/GetForms?projectId=' + projectId)
            .map(this.extractData);
    };
    FormsService.prototype.getForm = function (formId) {
        return this.http.get('/api/form/GetForm?formId=' + formId)
            .map(function (res) { return res.json(); });
    };
    FormsService.prototype.addForm = function (form) {
        return this.http.post("/api/form/addform/", JSON.stringify(form))
            .map(function (res) { return res.json(); });
    };
    FormsService.prototype.editForm = function (form) {
        return this.http.put("/api/form/editform/", JSON.stringify(form))
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
    FormsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], FormsService);
    return FormsService;
}());



/***/ }),

/***/ "./src/app/main/forms/view-form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/forms/view-form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Form.View'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">View Form</mat-toolbar>\r\n    <mat-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"formName\"\r\n                   placeholder=\"Name\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"form.formName\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"formTitle\"\r\n                   placeholder=\"Title\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"form.formTitle\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-select [(ngModel)]=\"form.dependencyID\" placeholder=\"Dependency\" name=\"dependencyID\" [disabled]=\"true\">\r\n            <mat-option *ngFor=\"let currentForm of forms\" [value]=\"currentForm.id\">\r\n              {{currentForm.title}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"formDescription\"\r\n                   placeholder=\"Description\"\r\n                   [disabled]=\"true\"\r\n                   [(ngModel)]=\"form.formDescription\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"warn\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"deleteForm(form.projectID,form.id);\" *msElementAccess=\"'Form.Delete'\">\r\n            Delete\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editForm(form.projectID,form.id);\" *msElementAccess=\"'Form.Edit'\">\r\n            Edit\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\" *msElementAccess=\"'FormField.Add'\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"addFormField(form.projectID, form.id);\">\r\n            Add Form Field\r\n          </button>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\" *msElementAccess=\"'FormField.List'\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Is Required</th>\r\n                <th>Modified by</th>\r\n                <th>Modified date</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let formField of formFields\">\r\n                <td>{{ formField.name }}</td>\r\n                <td><button mat-icon-button> <mat-icon>{{ formField.isRequired?\"check\":\"close\"}}</mat-icon></button></td>\r\n\r\n                <td>{{ formField.lastModifiedBy }}</td>\r\n                <td>{{ formField.lastModifiedDateUtc |date }}</td>\r\n\r\n                <td hidden=\"hidden\">{{ form.dependencyID }}</td>\r\n                <td>\r\n                  <button mat-icon-button (click)=\"viewFormField(form.projectID,form.id,formField.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'FormField.View'\"><mat-icon>pageview</mat-icon></button>\r\n                  <button mat-icon-button (click)=\"editFormField(form.projectID,form.id,formField.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'FormField.Edit'\"><mat-icon>edit</mat-icon></button>\r\n                  <button mat-icon-button (click)=\"deleteFormField(form.projectID,form.id,formField.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'FormField.Delete'\"><mat-icon>delete</mat-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/forms/view-form.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/forms/view-form.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mb3Jtcy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxmb3Jtc1xcdmlldy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vZm9ybXMvdmlldy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/forms/view-form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/forms/view-form.component.ts ***!
  \***************************************************/
/*! exports provided: ViewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFormComponent", function() { return ViewFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/forms.service */ "./src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var _formFields_shared_formFields_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formFields/shared/formFields.service */ "./src/app/main/formFields/shared/formFields.service.ts");
/* harmony import */ var _shared_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/form */ "./src/app/main/forms/shared/form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewFormComponent = /** @class */ (function () {
    function ViewFormComponent(router, route, snackBar, dialogService, formsService, formFieldsService) {
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.formsService = formsService;
        this.formFieldsService = formFieldsService;
        this.form = new _shared_form__WEBPACK_IMPORTED_MODULE_6__["Form"]();
        this.cellWidths = [];
        this.tableHover = true;
        this.tableStriped = true;
        this.tableCondensed = true;
    }
    ViewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
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
        var _this = this;
        this.dialogService.confirm('Delete Form', 'Are you sure want to delete this form?')
            .subscribe(function (result) {
            var res = result;
            if (res == 'yes') {
                _this.formsService.deleteForm(formId)
                    .subscribe(function (response) {
                    if (response.statusCode == 204) {
                        var snackBarRef = _this.snackBar.open('Form deleted Successfully!', 'Close', {
                            duration: 500
                        });
                        snackBarRef.afterDismissed().subscribe(function () {
                            _this.router.navigateByUrl('/projects/' + _this.projectId);
                        });
                    }
                    else if (response.statusCode == 412) {
                        _this.serverErrorMessage = "Some details were missing!";
                    }
                    else {
                        _this.serverErrorMessage = response.content;
                    }
                });
            }
        });
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
        var _this = this;
        this.dialogService.confirm('Delete Field', 'Are you sure want to delete this Field?')
            .subscribe(function (result) {
            var res = result;
            if (res == 'yes') {
                _this.formFieldsService.deleteFormField(fieldId)
                    .subscribe(function (response) {
                    if (response.statusCode == 204) {
                        var snackBarRef = _this.snackBar.open('Field deleted Successfully!', 'Close', {
                            duration: 500
                        });
                        snackBarRef.afterDismissed().subscribe(function () {
                            _this.formFieldsService.getFormFields(formId)
                                .subscribe(function (data) {
                                _this.formFields = data;
                            });
                        });
                    }
                    else if (response.statusCode == 412) {
                        _this.serverErrorMessage = "Some details were missing!";
                    }
                    else {
                        _this.serverErrorMessage = response.content;
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tbody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewFormComponent.prototype, "tbody", void 0);
    ViewFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-view-form',
            template: __webpack_require__(/*! ./view-form.component.html */ "./src/app/main/forms/view-form.component.html"),
            styles: [__webpack_require__(/*! ./view-form.component.scss */ "./src/app/main/forms/view-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _shared_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"],
            _formFields_shared_formFields_service__WEBPACK_IMPORTED_MODULE_5__["FormFieldsService"]])
    ], ViewFormComponent);
    return ViewFormComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container *msElementAccess=\"'Dashboard.View'\">\r\n  <mat-sidenav class=\"sidenav\" [opened]=\"sidenavOpen\" align=\"start\" [mode]=\"sidenavMode\" msIconSidenav #sidenav>\r\n    <ms-sidenav></ms-sidenav>\r\n  </mat-sidenav>\r\n  \r\n  <div class=\"content-container\" fxLayout=\"column\">\r\n    <ms-toolbar [quickpanel]=\"quickpanel\" [sidenav]=\"sidenav\"></ms-toolbar>\r\n    <div class=\"main-container\" #scrollContainer>\r\n      <router-outlet (activate)=\"onActivate($event, scrollContainer)\"></router-outlet>\r\n    </div>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.main-toolbar {\n  background: #ffffff;\n  padding-right: 0;\n  height: 64px;\n  padding-left: 16px; }\n\n.main-toolbar .user-button-container {\n    height: 100%; }\n\n.main-toolbar button.fullscreen-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 50px;\n    max-width: 50px;\n    height: 100%; }\n\n.main-toolbar button.quickpanel-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 75px;\n    max-width: 75px;\n    height: 100%; }\n\n.mat-sidenav.quickpanel {\n  z-index: 100;\n  width: 330px;\n  min-width: 330px;\n  max-width: 330px; }\n\n@media screen and (max-width: 959px) {\n  .mat-sidenav.quickpanel {\n    width: 250px;\n    min-width: 250px;\n    max-width: 250px; }\n  button.user-button {\n    min-width: 72px; } }\n\n@media screen and (min-width: 960px) {\n  .mat-sidenav-backdrop {\n    z-index: 50 !important; } }\n\n.sidenav {\n  width: 250px;\n  max-width: 250px;\n  background: #2B303B;\n  overflow-x: hidden;\n  z-index: 4; }\n\n.content-container {\n  height: 100%; }\n\n.main-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100% - 64px);\n  position: relative; }\n\n@media screen and (min-width: 960px) {\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: max-width, margin-left, margin-right, -webkit-transform !important;\n    transition-property: transform, max-width, margin-left, margin-right !important;\n    transition-property: transform, max-width, margin-left, margin-right, -webkit-transform !important;\n    margin-left: 0 !important;\n    background: #EEE;\n    z-index: 5;\n    overflow: hidden;\n    box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.4); }\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 250px);\n    -webkit-transform: translate3d(250px, 0, 0) !important;\n            transform: translate3d(250px, 0, 0) !important; }\n  .sidenav.icon-sidenav.collapsed + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav.collapsed + .mat-sidenav-content {\n    max-width: calc(100% - 68px);\n    -webkit-transform: translate3d(68px, 0, 0) !important;\n            transform: translate3d(68px, 0, 0) !important; }\n  .sidenav.icon-sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 68px); }\n  .sidenav.collapsed .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout; }\n  .sidenav:not(.collapsed) .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXG1haW5cXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vaG9tZS9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcc3R5bGVzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUdaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRSxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixtQkFBa0IsRUFxQm5COztBQXpCRDtJQU9JLGFBQVksRUFDYjs7QUFSSDtJQVdJLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1YsZ0JBQWU7SUFDZixnQkFBZTtJQUNmLGFBQVksRUFDYjs7QUFoQkg7SUFtQkksaUJBQWdCO0lBQ2hCLFdBQVU7SUFDVixnQkFBZTtJQUNmLGdCQUFlO0lBQ2YsYUFBWSxFQUNiOztBQUdIO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0U7SUFDRSxhQUFZO0lBQ1osaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUNqQjtFQUVEO0lBQ0UsZ0JBQWUsRUFDaEIsRUFBQTs7QUFHSDtFQUNFO0lBQ0UsdUJBQXNCLEVBQ3ZCLEVBQUE7O0FBR0g7RUFDRSxhQ3JDb0I7RURzQ3BCLGlCQ3RDb0I7RUR1Q3BCLG9CQ3pFc0M7RUQwRXRDLG1CQUFrQjtFQUNsQixXQ2pDcUIsRURrQ3RCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQiwwQkFBNkM7RUFDN0MsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0U7SUFDRSxzREFBOEM7SUFDOUMsd0ZBQStFO0lBQS9FLGdGQUErRTtJQUEvRSxtR0FBK0U7SUFDL0UsMEJBQXlCO0lBQ3pCLGlCQUFnQjtJQUNoQixXQ3BEMkI7SURxRDNCLGlCQUFnQjtJQUNoQixvREFBZ0QsRUFDakQ7RUFFRDtJQUNFLDhCQUEwQztJQUMxQyx1REFBd0Q7WUFBeEQsK0NBQXdELEVBQ3pEO0VBRUQ7SUFDRSw2QkFBbUQ7SUFDbkQsc0RBQWlFO1lBQWpFLDhDQUFpRSxFQUNsRTtFQUVEO0lBQ0UsNkJBQW1ELEVBQ3BEO0VBRUQ7SUFHTSxzRkFBc0U7WUFBdEUsOEVBQXNFLEVBQ3ZFO0VBSkw7SUFTTSxxRkFBcUU7WUFBckUsNkVBQXFFLEVBQ3RFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3Zhci5zY3NzXCI7XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgLnVzZXItYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBidXR0b24uZnVsbHNjcmVlbi10b2dnbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBidXR0b24ucXVpY2twYW5lbC10b2dnbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4td2lkdGg6IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYucXVpY2twYW5lbCB7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBtaW4td2lkdGg6IDMzMHB4O1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgLm1hdC1zaWRlbmF2LnF1aWNrcGFuZWwge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24udXNlci1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiA3MnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAubWF0LXNpZGVuYXYtYmFja2Ryb3Age1xyXG4gICAgei1pbmRleDogNTAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogJHdpZHRoX19zaWRlbmF2O1xyXG4gIG1heC13aWR0aDogJHdpZHRoX19zaWRlbmF2O1xyXG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3Q7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHotaW5kZXg6ICR6LWluZGV4X19tZC1zaWRlbmF2O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9fbWFpbi10b29sYmFyfSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gIC5zaWRlbmF2ICsgLmNkay12aXN1YWxseS1oaWRkZW4gKyAubWF0LXNpZGVuYXYtY29udGVudCwgLnNpZGVuYXYgKyAubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBtYXgtd2lkdGgsIG1hcmdpbi1sZWZ0LCBtYXJnaW4tcmlnaHQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVFO1xyXG4gICAgei1pbmRleDogJHotaW5kZXhfX21kLXNpZGVuYXYtY29udGVudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCA3cHggMCA5cHggLTdweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdiArIC5jZGstdmlzdWFsbHktaGlkZGVuICsgLm1hdC1zaWRlbmF2LWNvbnRlbnQsIC5zaWRlbmF2ICsgLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyR3aWR0aF9fc2lkZW5hdn0pO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkd2lkdGhfX3NpZGVuYXYsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdi5pY29uLXNpZGVuYXYuY29sbGFwc2VkICsgLmNkay12aXN1YWxseS1oaWRkZW4gKyAubWF0LXNpZGVuYXYtY29udGVudCwgLnNpZGVuYXYuaWNvbi1zaWRlbmF2LmNvbGxhcHNlZCArIC5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gI3skbWF4LXdpZHRoX19pY29uLXNpZGVuYXZ9KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJG1heC13aWR0aF9faWNvbi1zaWRlbmF2LCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYuaWNvbi1zaWRlbmF2ICsgLmNkay12aXN1YWxseS1oaWRkZW4gKyAubWF0LXNpZGVuYXYtY29udGVudCwgLnNpZGVuYXYuaWNvbi1zaWRlbmF2ICsgLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRtYXgtd2lkdGhfX2ljb24tc2lkZW5hdn0pO1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgJi5jb2xsYXBzZWQge1xyXG4gICAgICAuZmFkZS1pbi1vbi1pY29uLXNpZGVuYXYge1xyXG4gICAgICAgIGFuaW1hdGlvbjogLjVzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIDBzIG5vcm1hbCBmb3J3YXJkcyAxIGZhZGVvdXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCguY29sbGFwc2VkKSB7XHJcbiAgICAgIC5mYWRlLWluLW9uLWljb24tc2lkZW5hdiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAuNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSkgMHMgbm9ybWFsIGZvcndhcmRzIDEgZmFkZWluO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFNpZGVuYXZcclxuJGNvbG9yX19zaWRlbmF2LWxpc3Q6ICNBN0E5QUU7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi10b29sYmFyOiAjMjcyQjM1O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdDogIzJCMzAzQjtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0LCAyKTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMTogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3QsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDEsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDFfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMzogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMiwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMywgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsM19faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQ6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDMsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDRfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNSwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNiwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNl9faG92ZXI7XHJcblxyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDI6IDEwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsMzogMjBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw0OiAzMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDU6IDQwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNjogNDBweDtcclxuXHJcbiR3aWR0aF9fc2lkZW5hdjogMjUwcHg7XHJcblxyXG4kcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbTogMjRweDtcclxuJG1hcmdpbi1sZWZ0X19zaWRlbmF2LWxpc3RfX2l0ZW0tbmFtZTogJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW07XHJcbiR3aWR0aC1oZWlnaHRfX3NpZGVuYXYtbGlzdF9faWNvbjogMThweDtcclxuXHJcbiRtYXgtd2lkdGhfX2ljb24tc2lkZW5hdjogKCRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtICogMikgKyAkd2lkdGgtaGVpZ2h0X19zaWRlbmF2LWxpc3RfX2ljb24gKyAyO1xyXG5cclxuJHotaW5kZXhfX21kLXNpZGVuYXY6IDQ7XHJcbiR6LWluZGV4X19tZC1zaWRlbmF2LWNvbnRlbnQ6IDU7XHJcbiR6LWluZGV4X19tYWluLXRvb2xiYXI6IDUwMDtcclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcjogNjRweDtcclxuXHJcbi8vIE1peGluc1xyXG5cclxuQG1peGluIG1kU2hhZG93LXozICgpIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi8vIE5vdGlmaWNhdGlvbnNcclxuJGNvbG9yX19wcmltYXJ5OiAjNENBRjUwO1xyXG4kY29sb3JfX2FjY2VudDogI0U5MUU2MztcclxuJGNvbG9yX193YXJuOiAjZjQ0MzM2O1xyXG5cclxuJGNvbG9yX19wcmltYXJ5LWNvbnRyYXN0OiAjRkZGO1xyXG4kY29sb3JfX2FjY2VudC1jb250cmFzdDogI0ZGRjtcclxuJGNvbG9yX193YXJuLWNvbnRyYXN0OiAjRkZGO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _widgets_sidenav_mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widgets/sidenav/mediareplay/media-replay.service */ "./src/app/widgets/sidenav/mediareplay/media-replay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
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
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && _this.isMobile) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "sidenav", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/main/home/home.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _widgets_sidenav_mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_2__["MediaReplayService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: mainRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainRoutes", function() { return mainRoutes; });
/* harmony import */ var _projects_projects_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projects.routing */ "./src/app/main/projects/projects.routing.ts");
/* harmony import */ var _forms_forms_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/forms.routing */ "./src/app/main/forms/forms.routing.ts");
/* harmony import */ var _formFields_formFields_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formFields/formFields.routing */ "./src/app/main/formFields/formFields.routing.ts");
/* harmony import */ var _formFieldViews_formFieldViews_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formFieldViews/formFieldViews.routing */ "./src/app/main/formFieldViews/formFieldViews.routing.ts");
/* harmony import */ var _widgets_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/icons/icons.component */ "./src/app/widgets/icons/icons.component.ts");
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
        component: _widgets_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]
    }
].concat(_projects_projects_routing__WEBPACK_IMPORTED_MODULE_0__["projectsRoutes"], _forms_forms_routing__WEBPACK_IMPORTED_MODULE_1__["formsRoutes"], _formFields_formFields_routing__WEBPACK_IMPORTED_MODULE_2__["formFieldsRoutes"], _formFieldViews_formFieldViews_routing__WEBPACK_IMPORTED_MODULE_3__["formFieldViewsRoutes"]);


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _widgets_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/sidenav/sidenav.component */ "./src/app/widgets/sidenav/sidenav.component.ts");
/* harmony import */ var _widgets_sidenav_sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/sidenav/sidenav-item/sidenav-item.component */ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.ts");
/* harmony import */ var _widgets_sidenav_icon_sidenav_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/sidenav/icon-sidenav.directive */ "./src/app/widgets/sidenav/icon-sidenav.directive.ts");
/* harmony import */ var _widgets_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/breadcrumb/breadcrumb.component */ "./src/app/widgets/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _widgets_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/icons/icons.component */ "./src/app/widgets/icons/icons.component.ts");
/* harmony import */ var _widgets_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/toolbar/toolbar.component */ "./src/app/widgets/toolbar/toolbar.component.ts");
/* harmony import */ var _widgets_toolbar_toolbar_user_button_toolbar_user_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/toolbar/toolbar-user-button/toolbar-user-button.component */ "./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.ts");
/* harmony import */ var _widgets_utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/utils/click-outside.directive */ "./src/app/widgets/utils/click-outside.directive.ts");
/* harmony import */ var _widgets_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/sidenav/sidenav.service */ "./src/app/widgets/sidenav/sidenav.service.ts");
/* harmony import */ var _widgets_sidenav_mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../widgets/sidenav/mediareplay/media-replay.service */ "./src/app/widgets/sidenav/mediareplay/media-replay.service.ts");
/* harmony import */ var _widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../widgets/breadcrumb/breadcrumb.service */ "./src/app/widgets/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/shared-components.module */ "./src/app/shared/shared-components.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widgets_dialogs_dialog_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../widgets/dialogs/dialog.module */ "./src/app/widgets/dialogs/dialog.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./projects/projects.module */ "./src/app/main/projects/projects.module.ts");
/* harmony import */ var _forms_forms_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./forms/forms.module */ "./src/app/main/forms/forms.module.ts");
/* harmony import */ var _formFields_formFields_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./formFields/formFields.module */ "./src/app/main/formFields/formFields.module.ts");
/* harmony import */ var _formFieldViews_formFieldViews_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./formFieldViews/formFieldViews.module */ "./src/app/main/formFieldViews/formFieldViews.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _shared_material_components_module__WEBPACK_IMPORTED_MODULE_14__["MaterialComponentsModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_15__["SharedComponentsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _widgets_dialogs_dialog_module__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__["PerfectScrollbarModule"]
            ].concat(_projects_projects_module__WEBPACK_IMPORTED_MODULE_22__["projectConfig"].imports, _forms_forms_module__WEBPACK_IMPORTED_MODULE_23__["formConfig"].imports, _formFields_formFields_module__WEBPACK_IMPORTED_MODULE_24__["formFieldConfig"].imports, _formFieldViews_formFieldViews_module__WEBPACK_IMPORTED_MODULE_25__["formFieldViewConfig"].imports),
            declarations: [
                _widgets_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"],
                _widgets_sidenav_sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_4__["SidenavItemComponent"],
                _widgets_sidenav_icon_sidenav_directive__WEBPACK_IMPORTED_MODULE_5__["IconSidenavDirective"],
                _widgets_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"],
                _widgets_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
                _widgets_toolbar_toolbar_user_button_toolbar_user_button_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarUserButtonComponent"],
                _widgets_utils_click_outside_directive__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideDirective"],
                _widgets_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__["IconsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
            ].concat(_projects_projects_module__WEBPACK_IMPORTED_MODULE_22__["projectConfig"].declarations, _forms_forms_module__WEBPACK_IMPORTED_MODULE_23__["formConfig"].declarations, _formFields_formFields_module__WEBPACK_IMPORTED_MODULE_24__["formFieldConfig"].declarations, _formFieldViews_formFieldViews_module__WEBPACK_IMPORTED_MODULE_25__["formFieldViewConfig"].declarations),
            entryComponents: _projects_projects_module__WEBPACK_IMPORTED_MODULE_22__["projectConfig"].entryComponents.slice(),
            providers: [
                _widgets_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_11__["SidenavService"],
                _widgets_sidenav_mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_12__["MediaReplayService"],
                _widgets_breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbService"]
            ].concat(_projects_projects_module__WEBPACK_IMPORTED_MODULE_22__["projectConfig"].providers, _forms_forms_module__WEBPACK_IMPORTED_MODULE_23__["formConfig"].providers, _formFields_formFields_module__WEBPACK_IMPORTED_MODULE_24__["formFieldConfig"].providers, _formFieldViews_formFieldViews_module__WEBPACK_IMPORTED_MODULE_25__["formFieldViewConfig"].providers)
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/projects/edit-project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/projects/edit-project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\"*msElementAccess=\"'Project.Edit'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit Project</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"projForm\" novalidate (ngSubmit)=\"saveProject(projForm.value)\">\r\n        <div fxLayout fxLayoutWrap>\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"project.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"projForm.controls['name'].touched && !projForm.controls['name'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['name'].pristine || projForm.controls['name'].valid\">\r\n              <span [hidden]=\"!projForm.controls['name'].errors?.required\">Project Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"title\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"project.title\"\r\n                   formControlName=\"title\"\r\n                   [class.invalid]=\"projForm.controls['title'].touched && !projForm.controls['title'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['title'].pristine || projForm.controls['title'].valid\">\r\n              <span [hidden]=\"!projForm.controls['title'].errors?.required\">Project Title is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rootNamespace\"\r\n                   required\r\n                   placeholder=\"RootNamespace\"\r\n                   [(ngModel)]=\"project.rootNamespace\"\r\n                   formControlName=\"rootNamespace\"\r\n                   [class.invalid]=\"projForm.controls['rootNamespace'].touched && !projForm.controls['rootNamespace'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['rootNamespace'].pristine || projForm.controls['rootNamespace'].valid\">\r\n              <span [hidden]=\"!projForm.controls['rootNamespace'].errors?.required\">Project Root Namespace is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"companyName\"\r\n                   required\r\n                   placeholder=\"CompanyName\"\r\n                   [(ngModel)]=\"project.companyName\"\r\n                   formControlName=\"companyName\"\r\n                   [class.invalid]=\"projForm.controls['companyName'].touched && !projForm.controls['companyName'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['companyName'].pristine || projForm.controls['companyName'].valid\">\r\n              <span [hidden]=\"!projForm.controls['companyName'].errors?.required\">Company Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"project.description\"\r\n                   formControlName=\"description\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!projForm.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/projects/edit-project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/projects/edit-project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9qZWN0cy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxwcm9qZWN0c1xcZWRpdC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvamVjdHMvZWRpdC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/projects/edit-project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/projects/edit-project.component.ts ***!
  \*********************************************************/
/*! exports provided: EditProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProjectComponent", function() { return EditProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/projects.service */ "./src/app/main/projects/shared/projects.service.ts");
/* harmony import */ var _shared_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/project */ "./src/app/main/projects/shared/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProjectComponent = /** @class */ (function () {
    function EditProjectComponent(snackBar, formBuilder, router, route, projectsService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.projectsService = projectsService;
        this.project = new _shared_project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.projForm = formBuilder.group({
            id: [''],
            userName: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [''],
            rootNamespace: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
        data.userName = sessionStorage.getItem('currentUser');
        this.projectsService.updateProject(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                var snackBarRef = _this.snackBar.open('Project information saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/projects');
                });
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
    EditProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-project',
            template: __webpack_require__(/*! ./edit-project.component.html */ "./src/app/main/projects/edit-project.component.html"),
            styles: [__webpack_require__(/*! ./edit-project.component.scss */ "./src/app/main/projects/edit-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
    ], EditProjectComponent);
    return EditProjectComponent;
}());



/***/ }),

/***/ "./src/app/main/projects/list-project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/projects/list-project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" *msElementAccess=\"'Project.List'\">\r\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\" align=\"end\">\r\n    <button mdTooltip=\"New Project\" md-fab color=\"primary\" (click)=\"addProject();\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxFlex=\"100%\" fxFlex.gt-sm>\r\n        <mat-card class=\"widget\" *ngFor=\"let project of projects\" fxFlex=\"100%\" fxFlex.gt-sm>\r\n          <mat-card-title fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <span class=\"name\">{{ project.name }}</span>\r\n            <span fxFlex></span>\r\n            <button mat-icon-button (click)=\"viewProject(project.id);\"><mat-icon [class.green]=\"true\">arrow_right</mat-icon></button>\r\n          </mat-card-title>\r\n          <mat-card-subtitle>\r\n            <span class=\"description\">{{ project.description }}</span>\r\n          </mat-card-subtitle>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/projects/list-project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/projects/list-project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: calc(100% - 72px);\n  margin: 36px;\n  position: relative; }\n\n.table-container {\n  height: 100%; }\n\n.table-header {\n  height: 51px;\n  background-color: #fff;\n  color: #757575;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.table-header > div {\n    vertical-align: bottom; }\n\n.table-header > div > .name {\n      padding-left: 16px; }\n\n.table-header.table-condensed > div > .name {\n    padding-left: 8px; }\n\n.table-content {\n  height: calc(100% - 51px);\n  overflow: auto; }\n\n.mat-icon {\n  font-size: 20px;\n  height: 10px;\n  width: 10px;\n  color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9qZWN0cy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxwcm9qZWN0c1xcbGlzdC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLDBCQUF1RDtFQUN2RCxhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsYUFmeUI7RUFnQnpCLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsNkNBQXdDLEVBaUJ6Qzs7QUFyQkQ7SUFPSSx1QkFBc0IsRUFLdkI7O0FBWkg7TUFVTSxtQkFBa0IsRUFDbkI7O0FBWEw7SUFpQlEsa0JBQWlCLEVBQ2xCOztBQUtQO0VBQ0UsMEJBQTZDO0VBQzdDLGVBQWMsRUFDZjs7QUFHRDtFQUNFLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVc7RUFDWCxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9tYWluL3Byb2plY3RzL2xpc3QtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3ZhclwiO1xyXG5cclxuJGhlaWdodF9fdGFibGUtaGVhZGVyOiA1MXB4O1xyXG4kaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4OiAkaGVpZ2h0X19tYWluLXRvb2xiYXIgKyA4cHg7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBtYXJnaW46IDM2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXIge1xyXG4gIGhlaWdodDogJGhlaWdodF9fdGFibGUtaGVhZGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cclxuICAgICYgPiAubmFtZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudGFibGUtY29uZGVuc2VkIHtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICAmID4gLm5hbWUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtY29udGVudCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX3RhYmxlLWhlYWRlcn0pO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/projects/list-project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/projects/list-project.component.ts ***!
  \*********************************************************/
/*! exports provided: ListProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProjectComponent", function() { return ListProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../route.animation */ "./src/app/route.animation.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/projects.service */ "./src/app/main/projects/shared/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListProjectComponent = /** @class */ (function () {
    function ListProjectComponent(projectsService, router) {
        this.projectsService = projectsService;
        this.router = router;
    }
    ListProjectComponent.prototype.ngAfterViewInit = function () {
    };
    ListProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getProjects(sessionStorage.getItem('currentUser'))
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tbody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListProjectComponent.prototype, "tbody", void 0);
    ListProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-list-project',
            template: __webpack_require__(/*! ./list-project.component.html */ "./src/app/main/projects/list-project.component.html"),
            styles: [__webpack_require__(/*! ./list-project.component.scss */ "./src/app/main/projects/list-project.component.scss")],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["routeAnimation"]]
        }),
        __metadata("design:paramtypes", [_shared_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListProjectComponent);
    return ListProjectComponent;
}());



/***/ }),

/***/ "./src/app/main/projects/new-project.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main/projects/new-project.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Project.Add'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Add Project</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"projForm\" novalidate (ngSubmit)=\"saveProject(projForm.value)\">\r\n        <div fxLayout fxLayoutWrap>\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"project.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"projForm.controls['name'].touched && !projForm.controls['name'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['name'].pristine || projForm.controls['name'].valid\">\r\n              <span [hidden]=\"!projForm.controls['name'].errors?.required\">Project Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"title\"\r\n                   required\r\n                   placeholder=\"Title\"\r\n                   [(ngModel)]=\"project.title\"\r\n                   formControlName=\"title\"\r\n                   [class.invalid]=\"projForm.controls['title'].touched && !projForm.controls['title'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['title'].pristine || projForm.controls['title'].valid\">\r\n              <span [hidden]=\"!projForm.controls['title'].errors?.required\">Project Title is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rootNamespace\"\r\n                   required\r\n                   placeholder=\"RootNamespace\"\r\n                   [(ngModel)]=\"project.rootNamespace\"\r\n                   formControlName=\"rootNamespace\"\r\n                   [class.invalid]=\"projForm.controls['rootNamespace'].touched && !projForm.controls['rootNamespace'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['rootNamespace'].pristine || projForm.controls['rootNamespace'].valid\">\r\n              <span [hidden]=\"!projForm.controls['rootNamespace'].errors?.required\">Project Root Namespace is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"companyName\"\r\n                   required\r\n                   placeholder=\"CompanyName\"\r\n                   [(ngModel)]=\"project.companyName\"\r\n                   formControlName=\"companyName\"\r\n                   [class.invalid]=\"projForm.controls['companyName'].touched && !projForm.controls['companyName'].valid\" />\r\n            <mat-hint [hidden]=\"projForm.controls['companyName'].pristine || projForm.controls['companyName'].valid\">\r\n              <span [hidden]=\"!projForm.controls['companyName'].errors?.required\">Company Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"project.description\"\r\n                   formControlName=\"description\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <label class=\"control-label\">\r\n              {{ serverErrorMessage}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!projForm.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/projects/new-project.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main/projects/new-project.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9qZWN0cy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxwcm9qZWN0c1xcbmV3LXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLDBCQUF1RDtFQUN2RCwwRkFBeUY7RUFDekYsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9wcm9qZWN0cy9uZXctcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvX3ZhclwiO1xyXG5cclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHg6ICRoZWlnaHRfX21haW4tdG9vbGJhciArIDhweDtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAzNnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4fSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kcy9hcmNoLXBhdHRlcm4ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxubWQtaW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/projects/new-project.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/projects/new-project.component.ts ***!
  \********************************************************/
/*! exports provided: NewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function() { return NewProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/projects.service */ "./src/app/main/projects/shared/projects.service.ts");
/* harmony import */ var _shared_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/project */ "./src/app/main/projects/shared/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewProjectComponent = /** @class */ (function () {
    function NewProjectComponent(snackBar, formBuilder, router, route, projectsService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.projectsService = projectsService;
        this.project = new _shared_project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.projForm = formBuilder.group({
            id: [''],
            userName: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [''],
            rootNamespace: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
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
        data.userName = sessionStorage.getItem('currentUser');
        this.projectsService.addProject(data)
            .subscribe(function (response) {
            if (response.statusCode == 201) {
                var snackBarRef = _this.snackBar.open('Project information saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/projects');
                });
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
    NewProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-new-project',
            template: __webpack_require__(/*! ./new-project.component.html */ "./src/app/main/projects/new-project.component.html"),
            styles: [__webpack_require__(/*! ./new-project.component.scss */ "./src/app/main/projects/new-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
    ], NewProjectComponent);
    return NewProjectComponent;
}());



/***/ }),

/***/ "./src/app/main/projects/projects.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/projects/projects.module.ts ***!
  \**************************************************/
/*! exports provided: projectConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectConfig", function() { return projectConfig; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _list_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-project.component */ "./src/app/main/projects/list-project.component.ts");
/* harmony import */ var _new_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-project.component */ "./src/app/main/projects/new-project.component.ts");
/* harmony import */ var _edit_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-project.component */ "./src/app/main/projects/edit-project.component.ts");
/* harmony import */ var _view_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-project.component */ "./src/app/main/projects/view-project.component.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/projects.service */ "./src/app/main/projects/shared/projects.service.ts");


// import { MaterialModule } from '@angular/material';









var projectConfig = {
    imports: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
    ],
    declarations: [
        _list_project_component__WEBPACK_IMPORTED_MODULE_6__["ListProjectComponent"],
        _new_project_component__WEBPACK_IMPORTED_MODULE_7__["NewProjectComponent"],
        _edit_project_component__WEBPACK_IMPORTED_MODULE_8__["EditProjectComponent"],
        _view_project_component__WEBPACK_IMPORTED_MODULE_9__["ViewProjectComponent"]
    ],
    entryComponents: [],
    providers: [
        _shared_projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"]
    ]
};


/***/ }),

/***/ "./src/app/main/projects/projects.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/main/projects/projects.routing.ts ***!
  \***************************************************/
/*! exports provided: projectsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsRoutes", function() { return projectsRoutes; });
/* harmony import */ var _list_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-project.component */ "./src/app/main/projects/list-project.component.ts");
/* harmony import */ var _edit_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-project.component */ "./src/app/main/projects/edit-project.component.ts");
/* harmony import */ var _new_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-project.component */ "./src/app/main/projects/new-project.component.ts");
/* harmony import */ var _view_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-project.component */ "./src/app/main/projects/view-project.component.ts");




var projectsRoutes = [
    { path: 'projects', component: _list_project_component__WEBPACK_IMPORTED_MODULE_0__["ListProjectComponent"], pathMatch: 'full' },
    { path: 'projects/new', component: _new_project_component__WEBPACK_IMPORTED_MODULE_2__["NewProjectComponent"] },
    { path: 'projects/edit/:projectid', component: _edit_project_component__WEBPACK_IMPORTED_MODULE_1__["EditProjectComponent"] },
    { path: 'projects/:projectid', component: _view_project_component__WEBPACK_IMPORTED_MODULE_3__["ViewProjectComponent"] }
];


/***/ }),

/***/ "./src/app/main/projects/shared/project.ts":
/*!*************************************************!*\
  !*** ./src/app/main/projects/shared/project.ts ***!
  \*************************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
//shishir: need to evaluate if bases interface is nice to have
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/main/projects/shared/projects.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/projects/shared/projects.service.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]();
    }
    ProjectsService.prototype.getProjects = function (userName) {
        var result;
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["URLSearchParams"]();
        params.set('userName', userName);
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            search: params
        });
        return this.http.get('/api/project/GetProjects', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    ProjectsService.prototype.getProject = function (id) {
        return this.http.get("/api/project/GetProject?projectId=" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProjectsService.prototype.addProject = function (project) {
        return this.http.post("/api/project/addproject/", JSON.stringify(project))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProjectsService.prototype.updateProject = function (project) {
        return this.http.put("/api/project/editproject/", JSON.stringify(project))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProjectsService.prototype.deleteProject = function (id) {
        return this.http.delete("/api/project/deleteproject?projectId=" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProjectsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/main/projects/view-project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/projects/view-project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Project.View'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">View Project</mat-toolbar>\r\n    <mat-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"project.name\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"title\"\r\n                   placeholder=\"Title\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"project.title\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"rootNamespace\"\r\n                   placeholder=\"RootNamespace\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"project.rootNamespace\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"companyName\"\r\n                   placeholder=\"CompanyName\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"project.companyName\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"project.description\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" disabled=\"disabled\" type=\"button\">\r\n            Build\r\n          </button>\r\n          <button md-raised-button color=\"warn\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"deleteProject(project.id);\" *msElementAccess=\"'Project.Delete'\">\r\n            Delete\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editProject(project.id);\" *msElementAccess=\"'Project.Edit'\">\r\n            Edit\r\n          </button>\r\n          <button md-raised-button color=\"primary\" disabled=\"disabled\" style=\"margin-left: 8px;\" type=\"button\">\r\n            Build Status\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\" *msElementAccess=\"'Form.Add'\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"addForm(project.id);\" >\r\n            Add Form\r\n          </button>\r\n        </div>\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\" *msElementAccess=\"'Form.List'\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Title</th>\r\n                <th hidden=\"hidden\">Dependency</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let form of forms\">\r\n                <td>{{ form.name }}</td>\r\n                <td>{{ form.title }}</td>\r\n                <td hidden=\"hidden\">{{ form.dependencyID }}</td>\r\n                <td>\r\n                  <button mat-icon-button (click)=\"viewForm(project.id,form.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'Form.View'\"><mat-icon>pageview</mat-icon></button>\r\n                  <button mat-icon-button (click)=\"editForm(project.id,form.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'Form.Edit'\"><mat-icon>edit</mat-icon></button>\r\n                  <button mat-icon-button (click)=\"deleteForm(project.id,form.id);\" style=\"margin-left: 1px;\" *msElementAccess=\"'Form.Delete'\"><mat-icon>delete</mat-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/projects/view-project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/projects/view-project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9wcm9qZWN0cy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFxtYWluXFxwcm9qZWN0c1xcdmlldy1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvamVjdHMvdmlldy1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/projects/view-project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/projects/view-project.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectComponent", function() { return ViewProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/projects.service */ "./src/app/main/projects/shared/projects.service.ts");
/* harmony import */ var _forms_shared_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/shared/forms.service */ "./src/app/main/forms/shared/forms.service.ts");
/* harmony import */ var _shared_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/project */ "./src/app/main/projects/shared/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewProjectComponent = /** @class */ (function () {
    function ViewProjectComponent(router, route, snackBar, dialogService, projectsService, formsService) {
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.projectsService = projectsService;
        this.formsService = formsService;
        this.project = new _shared_project__WEBPACK_IMPORTED_MODULE_6__["Project"]();
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
    };
    ViewProjectComponent.prototype.editProject = function (projectId) {
        this.router.navigateByUrl('/projects/edit/' + projectId);
    };
    ViewProjectComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        this.dialogService.confirm('Delete Project', 'Are you sure want to delete this project?')
            .subscribe(function (result) {
            var res = result;
            if (res == 'yes') {
                _this.projectsService.deleteProject(projectId)
                    .subscribe(function (response) {
                    if (response.statusCode == 204) {
                        var snackBarRef = _this.snackBar.open('Project deleted Successfully!', 'Close', {
                            duration: 500
                        });
                        snackBarRef.afterDismissed().subscribe(function () {
                            _this.router.navigateByUrl('/projects');
                        });
                    }
                    else if (response.statusCode == 412) {
                        _this.serverErrorMessage = "Some details were missing!";
                    }
                    else {
                        _this.serverErrorMessage = response.content;
                    }
                });
            }
        });
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
        var _this = this;
        this.dialogService.confirm('Delete Form', 'Are you sure want to delete this form?')
            .subscribe(function (result) {
            var res = result;
            if (res == 'yes') {
                _this.formsService.deleteForm(formId)
                    .subscribe(function (response) {
                    if (response.statusCode == 204) {
                        var snackBarRef = _this.snackBar.open('Form deleted Successfully!', 'Close', {
                            duration: 500
                        });
                        snackBarRef.afterDismissed().subscribe(function () {
                            _this.formsService.getForms(projectId)
                                .subscribe(function (data) {
                                _this.forms = data;
                            });
                        });
                    }
                    else if (response.statusCode == 412) {
                        _this.serverErrorMessage = "Some details were missing!";
                    }
                    else {
                        _this.serverErrorMessage = response.content;
                    }
                });
            }
        });
    };
    ViewProjectComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tbody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewProjectComponent.prototype, "tbody", void 0);
    ViewProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-view-project',
            template: __webpack_require__(/*! ./view-project.component.html */ "./src/app/main/projects/view-project.component.html"),
            styles: [__webpack_require__(/*! ./view-project.component.scss */ "./src/app/main/projects/view-project.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"],
            _forms_shared_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]])
    ], ViewProjectComponent);
    return ViewProjectComponent;
}());



/***/ }),

/***/ "./src/app/roles/edit-role.component.html":
/*!************************************************!*\
  !*** ./src/app/roles/edit-role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Role.Edit'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit Role</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveRole(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"role.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"formGroup.controls['name'].touched && !formGroup.controls['name'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['name'].pristine || formGroup.controls['name'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['name'].errors?.required\">Field Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"role.description\"\r\n                   formControlName=\"description\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-slide-toggle name=\"isActive\" [(ngModel)]=\"role.isActive\" formControlName=\"isActive\" color=\"primary\">\r\n            Is Active\r\n          </mat-slide-toggle>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/edit-role.component.scss":
/*!************************************************!*\
  !*** ./src/app/roles/edit-role.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxccm9sZXNcXGVkaXQtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsMEJBQXVEO0VBQ3ZELDBGQUF5RjtFQUN6Rix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9lZGl0LXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL192YXJcIjtcclxuXHJcblxyXG4kaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4OiAkaGVpZ2h0X19tYWluLXRvb2xiYXIgKyA4cHg7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMzZweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweH0pO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvYXJjaC1wYXR0ZXJuLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbm1kLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/edit-role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/roles/edit-role.component.ts ***!
  \**********************************************/
/*! exports provided: EditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function() { return EditRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
/* harmony import */ var _shared_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/role */ "./src/app/roles/shared/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditRoleComponent = /** @class */ (function () {
    function EditRoleComponent(snackBar, formBuilder, router, route, rolesService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.rolesService = rolesService;
        this.role = new _shared_role__WEBPACK_IMPORTED_MODULE_5__["RoleViewModel"]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [''],
            isActive: [''],
        });
    }
    EditRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.roleId = params['roleid'];
            if (!_this.roleId)
                return;
            _this.rolesService.getRole(_this.roleId)
                .subscribe(function (role) {
                _this.role = role;
                _this.formGroup.controls['id'].setValue(_this.roleId);
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    EditRoleComponent.prototype.saveRole = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        data.roleId = this.roleId;
        this.rolesService.updateRole(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                var snackBarRef = _this.snackBar.open('Role saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/roles');
                });
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    EditRoleComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/roles');
    };
    EditRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-role',
            template: __webpack_require__(/*! ./edit-role.component.html */ "./src/app/roles/edit-role.component.html"),
            styles: [__webpack_require__(/*! ./edit-role.component.scss */ "./src/app/roles/edit-role.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"]])
    ], EditRoleComponent);
    return EditRoleComponent;
}());



/***/ }),

/***/ "./src/app/roles/list-role.component.html":
/*!************************************************!*\
  !*** ./src/app/roles/list-role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\" align=\"end\" *msElementAccess=\"'Role.Add'\">\r\n  <button mdTooltip=\"New Project\" md-fab color=\"primary\" (click)=\"addRole();\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Role.List'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-card-content>\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Description</th>\r\n                <th>Is Active</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let role of roles\">\r\n                <td>{{ role.name }}</td>\r\n                <td>{{ role.description }}</td>\r\n                <td><button mat-icon-button> <mat-icon>{{ role.isActive?\"check\":\"close\"}}</mat-icon></button></td>\r\n                <td>\r\n                  <button mat-icon-button (click)=\"viewRole(role.roleId);\" style=\"margin-left: 1px;\" *msElementAccess=\"'Role.View'\"><mat-icon>pageview</mat-icon></button>\r\n                  <button mat-icon-button (click)=\"editRole(role.roleId);\" style=\"margin-left: 1px;\" *msElementAccess=\"'Role.Edit'\"><mat-icon>edit</mat-icon></button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/list-role.component.scss":
/*!************************************************!*\
  !*** ./src/app/roles/list-role.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxccm9sZXNcXGxpc3Qtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2IsMEJBQXVEO0VBQ3ZELDBGQUF5RjtFQUN6Rix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9saXN0LXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL192YXJcIjtcclxuXHJcblxyXG4kaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4OiAkaGVpZ2h0X19tYWluLXRvb2xiYXIgKyA4cHg7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMzZweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweH0pO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvYXJjaC1wYXR0ZXJuLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbm1kLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/list-role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/roles/list-role.component.ts ***!
  \**********************************************/
/*! exports provided: ListRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoleComponent", function() { return ListRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListRoleComponent = /** @class */ (function () {
    function ListRoleComponent(router, route, snackBar, dialogService, rolesService) {
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.rolesService = rolesService;
    }
    ListRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('On Init');
        this.rolesService.getRoles()
            .subscribe(function (data) {
            _this.roles = data;
        });
    };
    ListRoleComponent.prototype.addRole = function () {
        this.router.navigateByUrl('/roles/new');
    };
    ListRoleComponent.prototype.viewRole = function (roleId) {
        this.router.navigateByUrl('/roles/' + roleId);
    };
    ListRoleComponent.prototype.editRole = function (roleId) {
        this.router.navigateByUrl('/roles/edit/' + roleId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tbody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListRoleComponent.prototype, "tbody", void 0);
    ListRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-list-role',
            template: __webpack_require__(/*! ./list-role.component.html */ "./src/app/roles/list-role.component.html"),
            styles: [__webpack_require__(/*! ./list-role.component.scss */ "./src/app/roles/list-role.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"]])
    ], ListRoleComponent);
    return ListRoleComponent;
}());



/***/ }),

/***/ "./src/app/roles/new-role.component.html":
/*!***********************************************!*\
  !*** ./src/app/roles/new-role.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Role.Edit'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit Role</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveRole(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   required\r\n                   [(ngModel)]=\"role.name\"\r\n                   formControlName=\"name\"\r\n                   [class.invalid]=\"formGroup.controls['name'].touched && !formGroup.controls['name'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['name'].pristine || formGroup.controls['name'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['name'].errors?.required\">Field Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"description\"\r\n                   placeholder=\"Description\"\r\n                   [(ngModel)]=\"role.description\"\r\n                   formControlName=\"description\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-slide-toggle name=\"isActive\" [(ngModel)]=\"role.isActive\" formControlName=\"isActive\" color=\"primary\">\r\n            Is Active\r\n          </mat-slide-toggle>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <button md-raised-button\r\n                    type=\"button\" (click)=\"cancelChanges($event);\">\r\n              Cancel\r\n            </button>\r\n            <button md-button color=\"primary\"\r\n                    md-raised-button\r\n                    style=\"margin-left: 8px;\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!formGroup.valid\">\r\n              Save\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/new-role.component.scss":
/*!***********************************************!*\
  !*** ./src/app/roles/new-role.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxccm9sZXNcXG5ldy1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiwwQkFBdUQ7RUFDdkQsMEZBQXlGO0VBQ3pGLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL25ldy1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweDogJGhlaWdodF9fbWFpbi10b29sYmFyICsgOHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDM2cHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWlnaHRfX21haW4tdG9vbGJhcl9fcGx1c184cHh9KTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2FyY2gtcGF0dGVybi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tZC1pbnB1dC1jb250YWluZXIge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/roles/new-role.component.ts":
/*!*********************************************!*\
  !*** ./src/app/roles/new-role.component.ts ***!
  \*********************************************/
/*! exports provided: NewRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoleComponent", function() { return NewRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
/* harmony import */ var _shared_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/role */ "./src/app/roles/shared/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewRoleComponent = /** @class */ (function () {
    function NewRoleComponent(snackBar, formBuilder, router, route, rolesService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.rolesService = rolesService;
        this.role = new _shared_role__WEBPACK_IMPORTED_MODULE_5__["AddRoleViewModel"]();
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: [''],
            isActive: [''],
        });
    }
    NewRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.roleId = params['roleid'];
            if (_this.roleId)
                return;
        });
    };
    NewRoleComponent.prototype.saveRole = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        this.rolesService.addRole(data)
            .subscribe(function (response) {
            if (response.statusCode == 201) {
                var snackBarRef = _this.snackBar.open('Role saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/roles');
                });
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    NewRoleComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/roles');
    };
    NewRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-new-role',
            template: __webpack_require__(/*! ./new-role.component.html */ "./src/app/roles/new-role.component.html"),
            styles: [__webpack_require__(/*! ./new-role.component.scss */ "./src/app/roles/new-role.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"]])
    ], NewRoleComponent);
    return NewRoleComponent;
}());



/***/ }),

/***/ "./src/app/roles/roles.module.ts":
/*!***************************************!*\
  !*** ./src/app/roles/roles.module.ts ***!
  \***************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-components.module */ "./src/app/shared/shared-components.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_roles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
/* harmony import */ var _list_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-role.component */ "./src/app/roles/list-role.component.ts");
/* harmony import */ var _edit_role_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-role.component */ "./src/app/roles/edit-role.component.ts");
/* harmony import */ var _new_role_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-role.component */ "./src/app/roles/new-role.component.ts");
/* harmony import */ var _view_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-role.component */ "./src/app/roles/view-role.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialComponentsModule"],
                _shared_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            ],
            declarations: [
                _list_role_component__WEBPACK_IMPORTED_MODULE_9__["ListRoleComponent"], _edit_role_component__WEBPACK_IMPORTED_MODULE_10__["EditRoleComponent"], _new_role_component__WEBPACK_IMPORTED_MODULE_11__["NewRoleComponent"], _view_role_component__WEBPACK_IMPORTED_MODULE_12__["ViewRoleComponent"]
            ],
            entryComponents: [],
            providers: [
                _shared_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"]
            ]
        })
    ], RolesModule);
    return RolesModule;
}());



/***/ }),

/***/ "./src/app/roles/roles.routing.ts":
/*!****************************************!*\
  !*** ./src/app/roles/roles.routing.ts ***!
  \****************************************/
/*! exports provided: rolesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rolesRoutes", function() { return rolesRoutes; });
/* harmony import */ var _list_role_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-role.component */ "./src/app/roles/list-role.component.ts");
/* harmony import */ var _new_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-role.component */ "./src/app/roles/new-role.component.ts");
/* harmony import */ var _edit_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-role.component */ "./src/app/roles/edit-role.component.ts");
/* harmony import */ var _view_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-role.component */ "./src/app/roles/view-role.component.ts");




var rolesRoutes = [
    { path: 'roles', component: _list_role_component__WEBPACK_IMPORTED_MODULE_0__["ListRoleComponent"] },
    { path: 'roles/new', component: _new_role_component__WEBPACK_IMPORTED_MODULE_1__["NewRoleComponent"] },
    { path: 'roles/:roleid', component: _view_role_component__WEBPACK_IMPORTED_MODULE_3__["ViewRoleComponent"] },
    { path: 'roles/edit/:roleid', component: _edit_role_component__WEBPACK_IMPORTED_MODULE_2__["EditRoleComponent"] }
];


/***/ }),

/***/ "./src/app/roles/shared/role.ts":
/*!**************************************!*\
  !*** ./src/app/roles/shared/role.ts ***!
  \**************************************/
/*! exports provided: AddRoleViewModel, RoleViewModel, UserRoleViewModel, RoleRightsViewModel, UpdateRoleRightsViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleViewModel", function() { return AddRoleViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleViewModel", function() { return RoleViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleViewModel", function() { return UserRoleViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRightsViewModel", function() { return RoleRightsViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRoleRightsViewModel", function() { return UpdateRoleRightsViewModel; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AddRoleViewModel = /** @class */ (function () {
    function AddRoleViewModel() {
    }
    return AddRoleViewModel;
}());

var RoleViewModel = /** @class */ (function (_super) {
    __extends(RoleViewModel, _super);
    function RoleViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RoleViewModel;
}(AddRoleViewModel));

var UserRoleViewModel = /** @class */ (function (_super) {
    __extends(UserRoleViewModel, _super);
    function UserRoleViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserRoleViewModel;
}(RoleViewModel));

var RoleRightsViewModel = /** @class */ (function () {
    function RoleRightsViewModel() {
    }
    return RoleRightsViewModel;
}());

var UpdateRoleRightsViewModel = /** @class */ (function () {
    function UpdateRoleRightsViewModel() {
    }
    return UpdateRoleRightsViewModel;
}());



/***/ }),

/***/ "./src/app/roles/shared/roles.service.ts":
/*!***********************************************!*\
  !*** ./src/app/roles/shared/roles.service.ts ***!
  \***********************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ "./src/app/roles/shared/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolesService = /** @class */ (function () {
    function RolesService(http) {
        this.http = http;
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]();
    }
    RolesService.prototype.getRoles = function () {
        return this.http.get('/api/role/GetAllRoles')
            .map(function (res) { return res.json(); });
    };
    RolesService.prototype.getRole = function (id) {
        return this.http.get("/api/role/GetRoleById?roleId=" + id)
            .map(function (res) { return res.json(); });
    };
    RolesService.prototype.addRole = function (role) {
        return this.http.post("/api/role/addrole/", JSON.stringify(role))
            .map(function (res) { return res.json(); });
    };
    RolesService.prototype.updateRole = function (role) {
        return this.http.put("/api/role/editrole/", JSON.stringify(role))
            .map(function (res) { return res.json(); });
    };
    RolesService.prototype.getRolePermission = function (roleName) {
        return this.http.get('/api/role/GetRolePermissions?roleName=' + roleName)
            .map(function (res) { return res.json(); });
    };
    RolesService.prototype.saveRolePermission = function (roleId, rolePermissions) {
        var data = new _role__WEBPACK_IMPORTED_MODULE_2__["UpdateRoleRightsViewModel"]();
        data.applicationRoleId = roleId;
        data.roleRights = rolePermissions;
        return this.http.put('/api/role/UpdateRoleRights', JSON.stringify(data))
            .map(function (res) { return res.json(); });
    };
    RolesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "./src/app/roles/view-role.component.html":
/*!************************************************!*\
  !*** ./src/app/roles/view-role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" *msElementAccess=\"'Role.View'\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">View Role</mat-toolbar>\r\n    <mat-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"name\"\r\n                   placeholder=\"Name\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"role.name\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   name=\"Description\"\r\n                   placeholder=\"Name\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"role.description\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <mat-checkbox name=\"isActive\"\r\n                     [disabled]=\"true\"\r\n                     [(ngModel)]=\"role.isActive\"\r\n                     color=\"primary\">\r\n          Is Active\r\n        </mat-checkbox>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"saveChanges(role.roleId);\" *msElementAccess=\"'Role.Edit'\">\r\n            SaveChanges\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div fxLayout=\"row\" fxLayout.gt-md=\"column\" style=\"margin-top: 20px;\">\r\n\r\n        <div fxLayout=\"row\" class=\"table-container mat-elevation-z2\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\" *msElementAccess=\"'Form.List'\">\r\n          <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Resource</th>\r\n                <th>View</th>\r\n                <th>List</th>\r\n                <th>Add</th>\r\n                <th>Edit</th>\r\n                <th>Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let rolePermission of rolePermissions\">\r\n                <td>{{ rolePermission.resourceName }}</td>\r\n                <td><mat-checkbox [(ngModel)]=\"rolePermission.isView\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"rolePermission.isList\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"rolePermission.isAdd\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"rolePermission.isEdit\" color=\"primary\"></mat-checkbox></td>\r\n                <td><mat-checkbox [(ngModel)]=\"rolePermission.isDelete\" color=\"primary\"></mat-checkbox></td>               \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/view-role.component.scss":
/*!************************************************!*\
  !*** ./src/app/roles/view-role.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3ZpZXctcm9sZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/roles/view-role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/roles/view-role.component.ts ***!
  \**********************************************/
/*! exports provided: ViewRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoleComponent", function() { return ViewRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/dialogs/dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/roles.service */ "./src/app/roles/shared/roles.service.ts");
/* harmony import */ var _shared_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/role */ "./src/app/roles/shared/role.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewRoleComponent = /** @class */ (function () {
    function ViewRoleComponent(router, route, snackBar, dialogService, rolesService) {
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.rolesService = rolesService;
        this.role = new _shared_role__WEBPACK_IMPORTED_MODULE_5__["RoleViewModel"]();
    }
    ViewRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.roleId = params['roleid'];
            if (!_this.roleId)
                return;
            _this.rolesService.getRole(_this.roleId)
                .subscribe(function (role) {
                _this.role = role;
                _this.rolesService.getRolePermission(_this.role.name)
                    .subscribe(function (permissions) {
                    _this.rolePermissions = permissions;
                });
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    ViewRoleComponent.prototype.saveChanges = function (roleId) {
        var _this = this;
        if (!this.roleId)
            return;
        this.rolesService.saveRolePermission(this.role.roleId, this.rolePermissions)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                var snackBarRef = _this.snackBar.open('Role Rights information saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/roles');
                });
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    ViewRoleComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/roles');
    };
    ViewRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-view-role',
            template: __webpack_require__(/*! ./view-role.component.html */ "./src/app/roles/view-role.component.html"),
            styles: [__webpack_require__(/*! ./view-role.component.scss */ "./src/app/roles/view-role.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _widgets_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _shared_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"]])
    ], ViewRoleComponent);
    return ViewRoleComponent;
}());



/***/ }),

/***/ "./src/app/route.animation.ts":
/*!************************************!*\
  !*** ./src/app/route.animation.ts ***!
  \************************************/
/*! exports provided: routeAnimation, fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimation", function() { return routeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

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
var routeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 150ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }))
    ]),
]);
var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 150ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }))
    ]),
]);


/***/ }),

/***/ "./src/app/shared/HttpInterceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/HttpInterceptor.ts ***!
  \*******************************************/
/*! exports provided: HttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptor", function() { return HttpInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpInterceptor = /** @class */ (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, defaultOptions, location) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.location = location;
        _this.pendingRequests = 0;
        _this.showLoading = false;
        _this.numberOfAttempts = 3;
        return _this;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        var _this = this;
        return _super.prototype.request.call(this, url, this.getRequestOptions(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.interceptErrors(error);
        }));
    };
    HttpInterceptor.prototype.get = function (url, options) {
        var _this = this;
        return _super.prototype.get.call(this, url, this.getRequestOptions(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.interceptErrors(error);
        }));
    };
    HttpInterceptor.prototype.post = function (url, body, options) {
        var _this = this;
        return _super.prototype.post.call(this, url, body, this.getRequestOptions(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.interceptErrors(error);
        }));
    };
    HttpInterceptor.prototype.put = function (url, body, options) {
        var _this = this;
        return _super.prototype.put.call(this, url, body, this.getRequestOptions(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.interceptErrors(error);
        }));
    };
    HttpInterceptor.prototype.delete = function (url, options) {
        var _this = this;
        return _super.prototype.delete.call(this, url, this.getRequestOptions(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.interceptErrors(error);
        }));
    };
    HttpInterceptor.prototype.patch = function (url, body, options) {
        return _super.prototype.delete.call(this, url, this.getRequestOptions(options));
    };
    HttpInterceptor.prototype.head = function (url, options) {
        var _this = this;
        return _super.prototype.head.call(this, url, this.getRequestOptions(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.interceptErrors(error);
        }));
    };
    HttpInterceptor.prototype.options = function (url, options) {
        var _this = this;
        return _super.prototype.options.call(this, url, this.getRequestOptions(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.interceptErrors(error);
        }));
    };
    HttpInterceptor.prototype.getRequestOptions = function (options) {
        if (!options) {
            options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]();
        }
        if (!options.headers) {
            options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('If-Modified-Since', 'Sun, 01 Jan 2017 00:00:00 GMT');
        options.headers.append('Cache-Control', 'no-store, no-cache');
        options.headers.append('Pragma', 'no-cache Expires: 0');
        if (sessionStorage.getItem('currentUser')) {
            options.headers.append('x-access-token', sessionStorage.getItem('currentUserToken'));
        }
        return options;
    };
    HttpInterceptor.prototype.interceptErrors = function (err) {
        var locationPath = (location.origin);
        var lastCharacter = locationPath.substr(locationPath.length - 1);
        debugger;
        if (lastCharacter != '/') {
            locationPath = locationPath + '/';
        }
        if (err.status === 404) {
            window.location.href = locationPath + 'notFound';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        else if (err.status === 401 || err.status === 403) {
            window.location.href = locationPath + 'accessDenied';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        else if (err.status === 410) {
            sessionStorage.clear();
            window.location.href = locationPath + 'login';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        else if (err.status >= 500) {
            window.location.href = locationPath + 'internalServerError';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }
    };
    HttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
        // mimicking intercptor of angualrjs. Adding  token and centralized error handling 
        ,
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["ConnectionBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], HttpInterceptor);
    return HttpInterceptor;
}(_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]));



/***/ }),

/***/ "./src/app/shared/access-denied.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/access-denied.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <mat-card-content fxLayout=\"column\">\r\n    <div class=\"content-container\" fxLayout=\"column\">\r\n      <h1 class=\"error-number\">404</h1>\r\n      <h2>Houston, we have a problem </h2>\r\n      <p>\r\n        You are not authorized to  view this page. \r\n      </p>\r\n      <p>\r\n        <a href=\"/\">Let us take you home.</a>\r\n      </p>\r\n    </div>\r\n  </mat-card-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/access-denied.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/access-denied.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/access-denied.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/access-denied.component.ts ***!
  \***************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccessDeniedComponent = /** @class */ (function () {
    function AccessDeniedComponent() {
    }
    AccessDeniedComponent.prototype.ngOnInit = function () {
    };
    AccessDeniedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-access-denied',
            template: __webpack_require__(/*! ./access-denied.component.html */ "./src/app/shared/access-denied.component.html"),
            styles: [__webpack_require__(/*! ./access-denied.component.scss */ "./src/app/shared/access-denied.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('isCurrentUserAuthenticated') == 'true') {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/guards/index.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/httpFactory.ts":
/*!***************************************!*\
  !*** ./src/app/shared/httpFactory.ts ***!
  \***************************************/
/*! exports provided: httpFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFactory", function() { return httpFactory; });
/* harmony import */ var _HttpInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpInterceptor */ "./src/app/shared/HttpInterceptor.ts");

function httpFactory(xhrBackend, requestOptions, location) {
    return new _HttpInterceptor__WEBPACK_IMPORTED_MODULE_0__["HttpInterceptor"](xhrBackend, requestOptions, location);
}


/***/ }),

/***/ "./src/app/shared/internal-server-error.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/internal-server-error.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <mat-card-content fxLayout=\"column\">\r\n    <div class=\"content-container\" fxLayout=\"column\">\r\n      <h1 class=\"error-number\">500</h1>\r\n      <h2>Houston, we have a problem </h2>\r\n      <p>\r\n        We track these errors automatically, but if the problem persists feel free to contact us. In the meantime, try refreshing.\r\n      </p>\r\n      <p>\r\n        <a href=\"/\">Let us take you home.</a>\r\n      </p>\r\n    </div>\r\n  </mat-card-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/internal-server-error.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/internal-server-error.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnRlcm5hbC1zZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/internal-server-error.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/internal-server-error.component.ts ***!
  \***********************************************************/
/*! exports provided: InternalServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function() { return InternalServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternalServerErrorComponent = /** @class */ (function () {
    function InternalServerErrorComponent() {
    }
    InternalServerErrorComponent.prototype.ngOnInit = function () {
    };
    InternalServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-internal-server-error',
            template: __webpack_require__(/*! ./internal-server-error.component.html */ "./src/app/shared/internal-server-error.component.html"),
            styles: [__webpack_require__(/*! ./internal-server-error.component.scss */ "./src/app/shared/internal-server-error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InternalServerErrorComponent);
    return InternalServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/material-components.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/material-components.module.ts ***!
  \******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/not-found.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/not-found.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <mat-card-content fxLayout=\"column\">\r\n    <div class=\"content-container\" fxLayout=\"column\">\r\n      <h1 class=\"error-number\">404</h1>\r\n      <h2>Houston, we have a problem </h2>\r\n      <p>\r\n        We can't seem to find you are looking for.\r\n      </p>\r\n      <p>\r\n        <a href=\"/\">Let us take you home.</a>\r\n      </p>\r\n    </div>\r\n  </mat-card-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/not-found.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/not-found.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/not-found.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/not-found.component.ts ***!
  \***********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/shared/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared-components.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/shared-components.module.ts ***!
  \****************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _widgets_element_access_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/element-access.directive */ "./src/app/widgets/element-access.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_widgets_element_access_directive__WEBPACK_IMPORTED_MODULE_2__["ElementAccessDirective"]],
            exports: [
                _widgets_element_access_directive__WEBPACK_IMPORTED_MODULE_2__["ElementAccessDirective"]
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "./src/app/userProfiles/edit-user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/userProfiles/edit-user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">Edit User Profile</mat-toolbar>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"saveUser(formGroup.value)\">\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"userName\"\r\n                   placeholder=\"UserName\"\r\n                   readonly =\"readonly\"                   \r\n                   formControlName=\"userName\"\r\n                   [(ngModel)]=\"user.userName\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"firstName\"\r\n                   placeholder=\"First Name\"\r\n                   required\r\n                   [(ngModel)]=\"user.firstName\"\r\n                   formControlName=\"firstName\"\r\n                   [class.invalid]=\"formGroup.controls['firstName'].touched && !formGroup.controls['firstName'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['firstName'].pristine || formGroup.controls['firstName'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['firstName'].errors?.required\">First Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"lastName\"\r\n                   placeholder=\"Last Name\"\r\n                   required\r\n                   [(ngModel)]=\"user.lastName\"\r\n                   formControlName=\"lastName\"\r\n                   [class.invalid]=\"formGroup.controls['lastName'].touched && !formGroup.controls['lastName'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['lastName'].pristine || formGroup.controls['lastName'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['lastName'].errors?.required\">Last Name is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"emailAddress\"\r\n                   placeholder=\"Email Address\"\r\n                   required\r\n                   [(ngModel)]=\"user.emailAddress\"\r\n                   formControlName=\"emailAddress\"\r\n                   [class.invalid]=\"formGroup.controls['emailAddress'].touched && !formGroup.controls['emailAddress'].valid\" />\r\n            <mat-hint [hidden]=\"formGroup.controls['emailAddress'].pristine || formGroup.controls['emailAddress'].valid\">\r\n              <span [hidden]=\"!formGroup.controls['emailAddress'].errors?.required\">Email is required.</span>\r\n            </mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"designation\"\r\n                   placeholder=\"Designation\"\r\n                   [(ngModel)]=\"user.designation\"\r\n                   formControlName=\"designation\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"addressLine1\"\r\n                   placeholder=\"Address Line 1\"\r\n                   [(ngModel)]=\"user.addressLine1\"\r\n                   formControlName=\"addressLine1\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"addressLine2\"\r\n                   placeholder=\"Address Line 2\"\r\n                   [(ngModel)]=\"user.addressLine2\"\r\n                   formControlName=\"addressLine2\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"zip\"\r\n                   placeholder=\"Zip\"\r\n                   [(ngModel)]=\"user.zip\"\r\n                   formControlName=\"zip\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"city\"\r\n                   placeholder=\"City\"\r\n                   [(ngModel)]=\"user.city\"\r\n                   formControlName=\"city\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"state\"\r\n                   placeholder=\"State\"\r\n                   [(ngModel)]=\"user.state\"\r\n                   formControlName=\"state\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n          <button md-button color=\"primary\"\r\n                  md-raised-button\r\n                  style=\"margin-left: 8px;\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"!formGroup.valid\">\r\n            Save\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/userProfiles/edit-user-profile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/userProfiles/edit-user-profile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlclByb2ZpbGVzL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXHVzZXJQcm9maWxlc1xcZWRpdC11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLDBCQUF1RDtFQUN2RCwwRkFBeUY7RUFDekYsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlclByb2ZpbGVzL2VkaXQtdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG4kaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4OiAkaGVpZ2h0X19tYWluLXRvb2xiYXIgKyA4cHg7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMzZweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweH0pO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvYXJjaC1wYXR0ZXJuLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbm1kLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/userProfiles/edit-user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/userProfiles/edit-user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: EditUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileComponent", function() { return EditUserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/users.service */ "./src/app/userProfiles/shared/users.service.ts");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/user */ "./src/app/userProfiles/shared/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditUserProfileComponent = /** @class */ (function () {
    function EditUserProfileComponent(snackBar, formBuilder, router, route, usersService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_5__["ApplicationUser"]();
        this.formGroup = formBuilder.group({
            id: [''],
            userName: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            designation: [''],
            addressLine1: [''],
            addressLine2: [''],
            zip: [''],
            city: [''],
            state: [''],
        });
    }
    EditUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = sessionStorage.getItem('currentUser');
        this.usersService.getUserProfile(this.userName)
            .subscribe(function (user) {
            _this.user = user;
            _this.formGroup.controls['id'].setValue(_this.user.id);
        }, function (response) {
            if (response.status == 404) {
                _this.router.navigate(['NotFound']);
            }
        });
    };
    EditUserProfileComponent.prototype.saveUser = function (data) {
        var _this = this;
        this.serverErrorMessage = '';
        this.usersService.editUserProfile(data)
            .subscribe(function (response) {
            if (response.statusCode == 204) {
                var snackBarRef = _this.snackBar.open('User Profile data saved Successfully!', 'Close', {
                    duration: 500
                });
                snackBarRef.afterDismissed().subscribe(function () {
                    _this.router.navigateByUrl('/user-profile/view');
                });
            }
            else if (response.statusCode == 412) {
                _this.serverErrorMessage = "Some details were missing!";
            }
            else {
                _this.serverErrorMessage = response.content;
            }
        });
    };
    EditUserProfileComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/user-profile/view');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tbody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditUserProfileComponent.prototype, "tbody", void 0);
    EditUserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-user-profile',
            template: __webpack_require__(/*! ./edit-user-profile.component.html */ "./src/app/userProfiles/edit-user-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-user-profile.component.scss */ "./src/app/userProfiles/edit-user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], EditUserProfileComponent);
    return EditUserProfileComponent;
}());



/***/ }),

/***/ "./src/app/userProfiles/shared/user.ts":
/*!*********************************************!*\
  !*** ./src/app/userProfiles/shared/user.ts ***!
  \*********************************************/
/*! exports provided: ApplicationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return ApplicationUser; });
var ApplicationUser = /** @class */ (function () {
    function ApplicationUser() {
    }
    return ApplicationUser;
}());



/***/ }),

/***/ "./src/app/userProfiles/shared/users.service.ts":
/*!******************************************************!*\
  !*** ./src/app/userProfiles/shared/users.service.ts ***!
  \******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
    }
    UsersService.prototype.getUserProfile = function (userName) {
        return this.http.get('/api/userprofile/GetUserDetails?userName=' + userName)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.editUserProfile = function (user) {
        return this.http.put("/api/userprofile/EditUserProfile/", JSON.stringify(user), this.options)
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/userProfiles/userProfiles.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/userProfiles/userProfiles.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesModule", function() { return UserProfilesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material-components.module */ "./src/app/shared/material-components.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/users.service */ "./src/app/userProfiles/shared/users.service.ts");
/* harmony import */ var _edit_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-user-profile.component */ "./src/app/userProfiles/edit-user-profile.component.ts");
/* harmony import */ var _view_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-user-profile.component */ "./src/app/userProfiles/view-user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserProfilesModule = /** @class */ (function () {
    function UserProfilesModule() {
    }
    UserProfilesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__["MaterialComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            ],
            declarations: [
                _edit_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditUserProfileComponent"], _view_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["ViewUserProfileComponent"]
            ],
            entryComponents: [],
            providers: [
                _shared_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
            ]
        })
    ], UserProfilesModule);
    return UserProfilesModule;
}());



/***/ }),

/***/ "./src/app/userProfiles/userProfiles.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/userProfiles/userProfiles.routing.ts ***!
  \******************************************************/
/*! exports provided: userProfilesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfilesRoutes", function() { return userProfilesRoutes; });
/* harmony import */ var _edit_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user-profile.component */ "./src/app/userProfiles/edit-user-profile.component.ts");
/* harmony import */ var _view_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-user-profile.component */ "./src/app/userProfiles/view-user-profile.component.ts");


var userProfilesRoutes = [
    { path: 'user-profile/edit', component: _edit_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["EditUserProfileComponent"] },
    { path: 'user-profile/view', component: _view_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["ViewUserProfileComponent"] },
];


/***/ }),

/***/ "./src/app/userProfiles/view-user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/userProfiles/view-user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <mat-card style=\"padding: 16px;\" fxFlex=\"90%\">\r\n    <mat-toolbar color=\"primary\">View User Profile</mat-toolbar>\r\n    <mat-card-content>\r\n      <form>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"userName\"\r\n                   placeholder=\"UserName\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.userName\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"firstName\"\r\n                   placeholder=\"First Name\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.firstName\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"lastName\"\r\n                   placeholder=\"Last Name\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.lastName\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"emailAddress\"\r\n                   placeholder=\"Email Address\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.emailAddress\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"designation\"\r\n                   placeholder=\"Designation\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.designation\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"addressLine1\"\r\n                   placeholder=\"Address Line 1\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.addressLine1\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"addressLine2\"\r\n                   placeholder=\"Address Line 2\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.addressLine2\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"zip\"\r\n                   placeholder=\"Zip\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.zip\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"city\"\r\n                   placeholder=\"City\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.city\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput\r\n                   name=\"state\"\r\n                   placeholder=\"State\"\r\n                   readonly=\"readonly\"\r\n                   [(ngModel)]=\"user.state\" />\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"end center\">\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"cancelChanges($event);\">\r\n            Go Back\r\n          </button>\r\n          <button md-raised-button color=\"primary\" style=\"margin-left: 8px;\" type=\"button\" (click)=\"editUserProfile();\">\r\n            Edit\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/userProfiles/view-user-profile.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/userProfiles/view-user-profile.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/arch-pattern.png\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlclByb2ZpbGVzL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXHVzZXJQcm9maWxlc1xcdmlldy11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLDBCQUF1RDtFQUN2RCwwRkFBeUY7RUFDekYsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlclByb2ZpbGVzL3ZpZXctdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG4kaGVpZ2h0X19tYWluLXRvb2xiYXJfX3BsdXNfOHB4OiAkaGVpZ2h0X19tYWluLXRvb2xiYXIgKyA4cHg7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMzZweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9fbWFpbi10b29sYmFyX19wbHVzXzhweH0pO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZHMvYXJjaC1wYXR0ZXJuLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbm1kLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/userProfiles/view-user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/userProfiles/view-user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUserProfileComponent", function() { return ViewUserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/users.service */ "./src/app/userProfiles/shared/users.service.ts");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/user */ "./src/app/userProfiles/shared/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewUserProfileComponent = /** @class */ (function () {
    function ViewUserProfileComponent(location, formBuilder, router, route, usersService) {
        this.location = location;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.user = new _shared_user__WEBPACK_IMPORTED_MODULE_5__["ApplicationUser"]();
    }
    ViewUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = sessionStorage.getItem('currentUser');
        this.usersService.getUserProfile(this.userName)
            .subscribe(function (user) {
            _this.user = user;
        }, function (response) {
            if (response.status == 404) {
                _this.router.navigate(['NotFound']);
            }
        });
    };
    ViewUserProfileComponent.prototype.ngAfterViewInit = function () {
    };
    ViewUserProfileComponent.prototype.editUserProfile = function () {
        this.router.navigateByUrl('/user-profile/edit');
    };
    ViewUserProfileComponent.prototype.cancelChanges = function (e) {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tbody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewUserProfileComponent.prototype, "tbody", void 0);
    ViewUserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-edit-user-profile',
            template: __webpack_require__(/*! ./view-user-profile.component.html */ "./src/app/userProfiles/view-user-profile.component.html"),
            styles: [__webpack_require__(/*! ./view-user-profile.component.scss */ "./src/app/userProfiles/view-user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], ViewUserProfileComponent);
    return ViewUserProfileComponent;
}());



/***/ }),

/***/ "./src/app/widgets/breadcrumb/breadcrumb.component.html":
/*!**************************************************************!*\
  !*** ./src/app/widgets/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumbs\" fxLayout=\"row\">\r\n  <li *ngFor=\"let url of urls; let last = last; let first = first\" [ngClass]=\"{'active': last}\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> <!-- disable link of last item -->\r\n    <mat-icon *ngIf=\"!first\">keyboard_arrow_right</mat-icon>\r\n    <a role=\"button\" *ngIf=\"!last && url == prefix\">{{url}}</a>\r\n    <a role=\"button\" *ngIf=\"!last && url != prefix\">{{friendlyName(url)}}</a>\r\n    <span *ngIf=\"last\">{{friendlyName(url)}}</span>\r\n    <span *ngIf=\"last && url == prefix\">{{friendlyName('/')}}</span>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/widgets/breadcrumb/breadcrumb.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/widgets/breadcrumb/breadcrumb.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumbs {\n  margin: 0;\n  padding: 0 16px;\n  list-style: none;\n  font-weight: 400;\n  font-size: 20px; }\n  .breadcrumbs li {\n    line-height: 64px; }\n  .breadcrumbs li mat-icon {\n      margin: 0 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9icmVhZGNydW1iL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXHdpZGdldHNcXGJyZWFkY3J1bWJcXGJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFTO0VBQ1QsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBU2hCO0VBZEQ7SUFRSSxrQkFBaUIsRUFLbEI7RUFiSDtNQVdNLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWJzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gIGxpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/widgets/breadcrumb/breadcrumb.component.ts":
/*!************************************************************!*\
  !*** ./src/app/widgets/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.service */ "./src/app/widgets/breadcrumb/breadcrumb.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('prefix'),
        __metadata("design:type", String)
    ], BreadcrumbsComponent.prototype, "prefix", void 0);
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/widgets/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/widgets/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/breadcrumb/breadcrumb.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/widgets/breadcrumb/breadcrumb.service.ts ***!
  \**********************************************************/
/*! exports provided: BreadcrumbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbService", function() { return BreadcrumbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BreadcrumbService = /** @class */ (function () {
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
    BreadcrumbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BreadcrumbService);
    return BreadcrumbService;
}());



/***/ }),

/***/ "./src/app/widgets/dialogs/dialog.component.html":
/*!*******************************************************!*\
  !*** ./src/app/widgets/dialogs/dialog.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<h3>{{message}}</h3>\r\n<mat-dialog-actions align=\"center\">\r\n  <button md-button (click)=\"dialogRef.close('no')\">No</button>\r\n  <button md-button color=\"primary\" (click)=\"dialogRef.close('yes')\">Yes</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/widgets/dialogs/dialog.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/widgets/dialogs/dialog.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9kaWFsb2dzL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXHdpZGdldHNcXGRpYWxvZ3NcXGRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZGlhbG9ncy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhclwiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/widgets/dialogs/dialog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/widgets/dialogs/dialog.component.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return ConfirmDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialog.prototype.ngOnInit = function () {
    };
    ConfirmDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/widgets/dialogs/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/widgets/dialogs/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], ConfirmDialog);
    return ConfirmDialog;
}());



/***/ }),

/***/ "./src/app/widgets/dialogs/dialog.module.ts":
/*!**************************************************!*\
  !*** ./src/app/widgets/dialogs/dialog.module.ts ***!
  \**************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.service */ "./src/app/widgets/dialogs/dialog.service.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.component */ "./src/app/widgets/dialogs/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
            ],
            declarations: [
                _dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialog"]
            ],
            exports: [
                _dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialog"]
            ],
            entryComponents: [
                _dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialog"]
            ],
            providers: [
                _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
            ]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "./src/app/widgets/dialogs/dialog.service.ts":
/*!***************************************************!*\
  !*** ./src/app/widgets/dialogs/dialog.service.ts ***!
  \***************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.component */ "./src/app/widgets/dialogs/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.confirm = function (title, message) {
        var dialogRef = this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialog"]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/widgets/element-access.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/widgets/element-access.directive.ts ***!
  \*****************************************************/
/*! exports provided: ElementAccessDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAccessDirective", function() { return ElementAccessDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementAccessDirective = /** @class */ (function () {
    function ElementAccessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(ElementAccessDirective.prototype, "msElementAccess", {
        set: function (accessRight) {
            var acessControlList = JSON.parse(sessionStorage.getItem('accessRights'));
            var foundAccessRight = acessControlList.filter(function (ac) { return ac.claimValue == accessRight; });
            if (foundAccessRight.length > 0) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear; // Remove lement from Dom 
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ElementAccessDirective.prototype, "msElementAccess", null);
    ElementAccessDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[msElementAccess]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ElementAccessDirective);
    return ElementAccessDirective;
}());



/***/ }),

/***/ "./src/app/widgets/icons/icons.component.html":
/*!****************************************************!*\
  !*** ./src/app/widgets/icons/icons.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <mat-card fxFlex=\"90%\">\r\n    <mat-card-title>Material Buttons</mat-card-title>\r\n\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Material Icons</h3>\r\n            <h4>&lt;mat-icon&gt;</h4>\r\n            <p>Icons are a neat way to add some live to only-text lists. Our theme comes with a great variety of icons from the official Material Icons font.</p>\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <mat-tab-group>\r\n            <mat-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <mat-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <mat-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                    <mat-icon>grade</mat-icon>\r\n                  </mat-card-content>\r\n                </mat-card>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"HTML\">\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-divider></mat-divider>\r\n\r\n      <div>\r\n        <h2>List of all Material Icons</h2>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"20%\" *ngFor=\"let icon of icons\">\r\n            <mat-icon>{{ icon }}</mat-icon>\r\n            <span class=\"icon-name\">{{ icon }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </mat-card-content>\r\n\r\n  </mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/widgets/icons/icons.component.scss":
/*!****************************************************!*\
  !*** ./src/app/widgets/icons/icons.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\nmat-icon {\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n  margin: 24px 16px 8px;\n  color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9pY29ucy9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFx3aWRnZXRzXFxpY29uc1xcaWNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvaWNvbnMvaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbjogMjRweCAxNnB4IDhweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/widgets/icons/icons.component.ts":
/*!**************************************************!*\
  !*** ./src/app/widgets/icons/icons.component.ts ***!
  \**************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../route.animation */ "./src/app/route.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.iconsHTML = "<mat-icon>grade</mat-icon>";
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
        return lodash__WEBPACK_IMPORTED_MODULE_1__["escape"](text);
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/widgets/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/widgets/icons/icons.component.scss")],
            host: {
                '[@fadeInAnimation]': 'true'
            },
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/sidenav/icon-sidenav.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/widgets/sidenav/icon-sidenav.directive.ts ***!
  \***********************************************************/
/*! exports provided: IconSidenavDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSidenavDirective", function() { return IconSidenavDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.service */ "./src/app/widgets/sidenav/sidenav.service.ts");
/* harmony import */ var _mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mediareplay/media-replay.service */ "./src/app/widgets/sidenav/mediareplay/media-replay.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconSidenavDirective = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.icon-sidenav'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], IconSidenavDirective.prototype, "isIconSidenav", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.collapsed'),
        __metadata("design:type", Boolean)
    ], IconSidenavDirective.prototype, "collapsed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IconSidenavDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], IconSidenavDirective.prototype, "onMouseLeave", null);
    IconSidenavDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[msIconSidenav]'
        }),
        __metadata("design:paramtypes", [_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"],
            _mediareplay_media_replay_service__WEBPACK_IMPORTED_MODULE_2__["MediaReplayService"]])
    ], IconSidenavDirective);
    return IconSidenavDirective;
}());



/***/ }),

/***/ "./src/app/widgets/sidenav/mediareplay/media-replay.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/widgets/sidenav/mediareplay/media-replay.service.ts ***!
  \*********************************************************************/
/*! exports provided: MediaReplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaReplayService", function() { return MediaReplayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaReplayService = /** @class */ (function () {
    function MediaReplayService(media) {
        var _this = this;
        this._media$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
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
    MediaReplayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], MediaReplayService);
    return MediaReplayService;
}());



/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item.isRouteString(); then routeNavItem else functionNavItem\"></div>\r\n\r\n<ng-template #functionNavItem>\r\n  <a class=\"sidenav-anchor\" [ngClass]=\"item.customClass\"\r\n     *ngIf=\"!item.hasSubItems()\"\r\n     md-list-item md-ripple (click)=\"item.route()\">\r\n\r\n    <mat-icon>{{ item.icon }}</mat-icon>\r\n    <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n    <span fxFlex><!-- fill space --></span>\r\n    <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\">{{ item.badge }}</span>\r\n  </a>\r\n</ng-template>\r\n\r\n\r\n<ng-template #routeNavItem>\r\n  <a class=\"sidenav-anchor\" [ngClass]=\"item.customClass\"\r\n     *ngIf=\"!item.hasSubItems()\"\r\n     md-list-item md-ripple\r\n     [routerLink]=\"[item.route]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\r\n    <mat-icon>{{ item.icon }}</mat-icon>\r\n    <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n    <span fxFlex><!-- fill space --></span>\r\n    <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\">{{ item.badge }}</span>\r\n  </a>\r\n</ng-template>\r\n\r\n<a class=\"sidenav-anchor\"\r\n   *ngIf=\"item.hasSubItems()\"\r\n   md-list-item md-ripple\r\n   (click)=\"toggleDropdown()\"\r\n   [ngClass]=\"item.customClass\">\r\n\r\n  <mat-icon>{{ item.icon }}</mat-icon>\r\n  <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n  <span fxFlex><!-- fill space --></span>\r\n  <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\" style=\"margin-right: 12px;\">{{ item.badge }}</span>\r\n  <mat-icon *ngIf=\"item.hasSubItems()\" class=\"sidenav-item-dropdown-indicator rotate fade-in-on-icon-sidenav\">expand_more</mat-icon>\r\n\r\n</a>\r\n\r\n<mat-nav-list class=\"sidenav-list sidenav-list-nested\"\r\n     fxLayout=\"column\" [style.height]=\"getSubItemsHeight()\">\r\n  <ms-sidenav-item *ngFor=\"let subItem of item.subItems\" [item]=\"subItem\"></ms-sidenav-item>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\nmd-nav-list a.sidenav-anchor.mat-list-item .mat-list-item-content {\n  padding-left: 24px;\n  padding-right: 24px; }\n\nmd-nav-list a.sidenav-anchor .sidenav-item-name {\n  margin-left: 24px;\n  font-size: 14px; }\n\nmd-nav-list a.sidenav-anchor mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px; }\n\n.sidenav-list {\n  transition: height 0.4s cubic-bezier(0.35, 0, 0.25, 1); }\n\n.sidenav-list > ms-sidenav-item.open > .sidenav-anchor .sidenav-item-dropdown-indicator {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.sidenav-list > ms-sidenav-item .sidenav-item-dropdown-indicator {\n    transition: -webkit-transform .25s;\n    transition: transform .25s;\n    transition: transform .25s, -webkit-transform .25s; }\n\n.sidenav-list > ms-sidenav-item .badge {\n    padding: 4px 8px;\n    font-size: 12px;\n    background: #2196F3;\n    border-radius: 5px;\n    color: #FFF; }\n\n.sidenav-toplevel .sidenav-anchor {\n  position: relative;\n  cursor: pointer;\n  color: #A7A9AE;\n  transition: color .1s;\n  outline: none; }\n\n.sidenav-toplevel .sidenav-anchor:hover {\n    color: #FFFFFF; }\n\n.sidenav-toplevel .sidenav-anchor.active {\n    color: #FFFFFF; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor:hover {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor.active {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n  background: #262a34; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n    background: #22262f; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n    background: #22262f; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n    background: #20242c; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n      padding-left: 10px; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n        background: #1d2028; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n        background: #1d2028; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n      background: #1b1e25; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n        padding-left: 20px; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n          background: #181a20; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n          background: #181a20; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n        background: #16181e; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n          padding-left: 30px; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n            background: #121419; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n            background: #121419; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n          background: #101216; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #0d0e12; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #0d0e12; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #08080a; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #08080a; }\n\n.sidenav-toplevel .sidenav-item .sidenav-list-nested {\n  position: relative;\n  padding: 0;\n  overflow: hidden; }\n\n.sidenav-toplevel .sidenav-item .sidenav-list-nested:before, .sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    content: \" \";\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    z-index: 3; }\n\n.sidenav-toplevel .sidenav-item .sidenav-list-nested:before {\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    top: 0; }\n\n.sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9zaWRlbmF2L3NpZGVuYXYtaXRlbS9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcYXBwXFx3aWRnZXRzXFxzaWRlbmF2XFxzaWRlbmF2LWl0ZW1cXHNpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0cy9zaWRlbmF2L3NpZGVuYXYtaXRlbS9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcc3R5bGVzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFHSSxtQkNnQ2lEO0VEL0JqRCxvQkMrQmlELEVEOUJsRDs7QUFMSDtFQVFJLGtCQzJCaUQ7RUQxQmpELGdCQUFlLEVBQ2hCOztBQVZIO0VBYUksWUN3Qm1DO0VEdkJuQyxhQ3VCbUM7RUR0Qm5DLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2xCOztBQUdIO0VBQ0UsdURBQW1ELEVBd0JwRDs7QUF6QkQ7SUFRVSxrQ0FBeUI7WUFBekIsMEJBQXlCLEVBQzFCOztBQVRUO0lBY00sbUNBQTBCO0lBQTFCLDJCQUEwQjtJQUExQixtREFBMEIsRUFDM0I7O0FBZkw7SUFrQk0saUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixZQUFXLEVBQ1o7O0FBSUw7RUFJSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixlQzFEeUI7RUQyRHpCLHNCQUFxQjtFQUNyQixjQUFhLEVBU2Q7O0FBakJIO0lBV00sZUFBYyxFQUNmOztBQVpMO0lBZU0sZUFBYyxFQUNmOztBQWhCTDtFQXVCUSxvQkN0RTBFLEVEdUUzRTs7QUF4QlA7RUEyQlEsb0JDMUUwRSxFRDJFM0U7O0FBNUJQO0VBZ0NNLG9CQzVFK0UsRURxS2hGOztBQXpITDtJQW9DVSxvQkMvRTBGLEVEZ0YzRjs7QUFyQ1Q7SUF3Q1Usb0JDbkYwRixFRG9GM0Y7O0FBekNUO0lBNkNRLG9CQ3JGcUYsRURnS3RGOztBQXhIUDtNQWdEVSxtQkNwRTBCLEVENkUzQjs7QUF6RFQ7UUFtRFksb0JDMUZ3RixFRDJGekY7O0FBcERYO1FBdURZLG9CQzlGd0YsRUQrRnpGOztBQXhEWDtNQTREVSxvQkNoR21GLEVEMkpwRjs7QUF2SFQ7UUErRFksbUJDbEZ3QixFRDJGekI7O0FBeEVYO1VBa0VjLG9CQ3JHc0YsRURzR3ZGOztBQW5FYjtVQXNFYyxvQkN6R3NGLEVEMEd2Rjs7QUF2RWI7UUEyRVksb0JDM0dpRixFRHNKbEY7O0FBdEhYO1VBOEVjLG1CQ2hHc0IsRUR5R3ZCOztBQXZGYjtZQWlGZ0Isb0JDaEhvRixFRGlIckY7O0FBbEZmO1lBcUZnQixvQkNwSG9GLEVEcUhyRjs7QUF0RmY7VUEwRmMsb0JDdEgrRSxFRGlKaEY7O0FBckhiO1lBNkZnQixtQkM5R29CLEVEdUhyQjs7QUF0R2Y7Y0FnR2tCLG9CQzNIa0YsRUQ0SG5GOztBQWpHakI7Y0FvR2tCLG9CQy9Ia0YsRURnSW5GOztBQXJHakI7WUEwR2tCLG1CQzFIa0IsRURtSW5COztBQW5IakI7Y0E2R29CLG9CQ3BJZ0YsRURxSWpGOztBQTlHbkI7Y0FpSG9CLG9CQ3hJZ0YsRUR5SWpGOztBQWxIbkI7RUE2SEksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixpQkFBZ0IsRUFvQmpCOztBQW5KSDtJQWtJTSxhQUFZO0lBQ1osUUFBTztJQUNQLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsWUFBVztJQUNYLFdBQVUsRUFDWDs7QUF4SUw7SUEySU0sdUVBQWtFO0lBQ2xFLE9BQU0sRUFDUDs7QUE3SUw7SUFnSk0sd0VBQW1FO0lBQ25FLFVBQVMsRUFDViIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvc2lkZW5hdi9zaWRlbmF2LWl0ZW0vc2lkZW5hdi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1kLW5hdi1saXN0IGEuc2lkZW5hdi1hbmNob3Ige1xyXG5cclxuICAmLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW07XHJcbiAgfVxyXG5cclxuICAuc2lkZW5hdi1pdGVtLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tbGVmdF9fc2lkZW5hdi1saXN0X19pdGVtLW5hbWU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogJHdpZHRoLWhlaWdodF9fc2lkZW5hdi1saXN0X19pY29uO1xyXG4gICAgaGVpZ2h0OiAkd2lkdGgtaGVpZ2h0X19zaWRlbmF2LWxpc3RfX2ljb247XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LWxpc3Qge1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAuNHMgY3ViaWMtYmV6aWVyKC4zNSwgMCwgLjI1LCAxKTtcclxuXHJcbiAgPiBtcy1zaWRlbmF2LWl0ZW0ge1xyXG4gICAgJi5vcGVuIHtcclxuXHJcbiAgICAgID4gLnNpZGVuYXYtYW5jaG9yIHtcclxuICAgICAgICAuc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWluZGljYXRvciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlbmF2LWl0ZW0tZHJvcGRvd24taW5kaWNhdG9yIHtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtdG9wbGV2ZWwge1xyXG5cclxuICAvLyBFdmVyeSBzaWRlbmF2LWFuY2hvciBpbiB0aGlzIHNpZGVuYXZcclxuICAuc2lkZW5hdi1hbmNob3Ige1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICRjb2xvcl9fc2lkZW5hdi1saXN0O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjFzO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gLnNpZGVuYXYtaXRlbSB7IC8vIFRvcCBMZXZlbCBJdGVtXHJcblxyXG4gICAgPiAuc2lkZW5hdi1hbmNob3Ige1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2FjdGl2ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgID4gLnNpZGVuYXYtbGlzdC1uZXN0ZWQgPiAuc2lkZW5hdi1pdGVtIHsgLy8gTGV2ZWwgMSBha2EgMXN0IERyb3Bkb3duXHJcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMTtcclxuXHJcbiAgICAgID4gLnNpZGVuYXYtYW5jaG9yIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDFfX2FjdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gLnNpZGVuYXYtbGlzdC1uZXN0ZWQgPiAuc2lkZW5hdi1pdGVtIHsgLy8gTGV2ZWwgMlxyXG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMjtcclxuXHJcbiAgICAgICAgPiAuc2lkZW5hdi1hbmNob3Ige1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDI7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9faG92ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2FjdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gLnNpZGVuYXYtbGlzdC1uZXN0ZWQgPiAuc2lkZW5hdi1pdGVtIHsgLy8gTGV2ZWwgM1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzO1xyXG5cclxuICAgICAgICAgID4gLnNpZGVuYXYtYW5jaG9yIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2hvdmVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19hY3RpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA+IC5zaWRlbmF2LWxpc3QtbmVzdGVkID4gLnNpZGVuYXYtaXRlbSB7IC8vIExldmVsIDRcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0O1xyXG5cclxuICAgICAgICAgICAgPiAuc2lkZW5hdi1hbmNob3Ige1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw0O1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDRfX2FjdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gLnNpZGVuYXYtbGlzdC1uZXN0ZWQgPiAuc2lkZW5hdi1pdGVtIHsgLy8gTGV2ZWwgNVxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNTtcclxuXHJcbiAgICAgICAgICAgICAgPiAuc2lkZW5hdi1hbmNob3Ige1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9faG92ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2FjdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zaWRlbmF2LWxpc3QtbmVzdGVkID4gLnNpZGVuYXYtaXRlbSB7IC8vIEluZmluaXRlIExldmVscyBhZnRlclxyXG4gICAgICAgICAgICAgICAgPiAuc2lkZW5hdi1hbmNob3Ige1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNl9faG92ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2FjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYtaXRlbSAuc2lkZW5hdi1saXN0LW5lc3RlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgei1pbmRleDogMztcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwwLDAsLjMpIDAsIHRyYW5zcGFyZW50KTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSgwLDAsMCwuMykgMCwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gU2lkZW5hdlxyXG4kY29sb3JfX3NpZGVuYXYtbGlzdDogI0E3QTlBRTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LXRvb2xiYXI6ICMyNzJCMzU7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0OiAjMkIzMDNCO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3QsIDIpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdCwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMSwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDEsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDIsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNDogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMywgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNCwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDU6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDUsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19ob3ZlcjtcclxuXHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsMjogMTBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWwzOiAyMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDQ6IDMwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNTogNDBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw2OiA0MHB4O1xyXG5cclxuJHdpZHRoX19zaWRlbmF2OiAyNTBweDtcclxuXHJcbiRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtOiAyNHB4O1xyXG4kbWFyZ2luLWxlZnRfX3NpZGVuYXYtbGlzdF9faXRlbS1uYW1lOiAkcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbTtcclxuJHdpZHRoLWhlaWdodF9fc2lkZW5hdi1saXN0X19pY29uOiAxOHB4O1xyXG5cclxuJG1heC13aWR0aF9faWNvbi1zaWRlbmF2OiAoJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW0gKiAyKSArICR3aWR0aC1oZWlnaHRfX3NpZGVuYXYtbGlzdF9faWNvbiArIDI7XHJcblxyXG4kei1pbmRleF9fbWQtc2lkZW5hdjogNDtcclxuJHotaW5kZXhfX21kLXNpZGVuYXYtY29udGVudDogNTtcclxuJHotaW5kZXhfX21haW4tdG9vbGJhcjogNTAwO1xyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyOiA2NHB4O1xyXG5cclxuLy8gTWl4aW5zXHJcblxyXG5AbWl4aW4gbWRTaGFkb3ctejMgKCkge1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLy8gTm90aWZpY2F0aW9uc1xyXG4kY29sb3JfX3ByaW1hcnk6ICM0Q0FGNTA7XHJcbiRjb2xvcl9fYWNjZW50OiAjRTkxRTYzO1xyXG4kY29sb3JfX3dhcm46ICNmNDQzMzY7XHJcblxyXG4kY29sb3JfX3ByaW1hcnktY29udHJhc3Q6ICNGRkY7XHJcbiRjb2xvcl9fYWNjZW50LWNvbnRyYXN0OiAjRkZGO1xyXG4kY29sb3JfX3dhcm4tY29udHJhc3Q6ICNGRkY7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.ts ***!
  \************************************************************************/
/*! exports provided: SidenavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavItemComponent", function() { return SidenavItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-item.model */ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.model.ts");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav.service */ "./src/app/widgets/sidenav/sidenav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavItemComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", _sidenav_item_model__WEBPACK_IMPORTED_MODULE_1__["SidenavItem"])
    ], SidenavItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SidenavItemComponent.prototype, "isOpen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sidenav-item'),
        __metadata("design:type", Boolean)
    ], SidenavItemComponent.prototype, "sidenavItemClass", void 0);
    SidenavItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-sidenav-item',
            template: __webpack_require__(/*! ./sidenav-item.component.html */ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-item.component.scss */ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]])
    ], SidenavItemComponent);
    return SidenavItemComponent;
}());



/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav-item/sidenav-item.model.ts ***!
  \********************************************************************/
/*! exports provided: SidenavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavItem", function() { return SidenavItem; });
var SidenavItem = /** @class */ (function () {
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



/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav.component.html":
/*!********************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-container\" fxLayout=\"column\">\r\n  <mat-toolbar color=\"primary\" class=\"sidenav-toolbar mat-elevation-z2\">\r\n    <div fxLayout=\"row\" style=\"width: 100%;\">\r\n      <span style=\"width: 22px; text-align: center; margin-left: -3px;\" fxFlexAlign=\"center\"><img src=\"assets/img/icon.png\" style=\"width: 25px; vertical-align: text-top;\"></span>\r\n      <img style=\"height: 35px; margin-left: 24px; margin-bottom: -5px;\" src=\"assets/img/logo.png\" fxFlexAlign=\"center\" class=\"fade-in-on-icon-sidenav\">\r\n      <span fxFlex><!-- fill space --></span>\r\n      <div fxHide=\"true\" fxHide.gt-sm=\"false\" fxFlexAlign=\"center\">\r\n        <button mat-icon-button (click)=\"toggleIconSidenav()\">\r\n          <mat-icon class=\"icon-sidenav-toggle fade-in-on-icon-sidenav\" [class.rotate]=\"isIconSidenav()\">chevron_left</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar>\r\n  <div class=\"sidenav-scrollbar-container\" fxLayout=\"column\">\r\n      <mat-nav-list  fxLayout=\"column\" class=\"sidenav-list sidenav-toplevel\">\r\n        <ms-sidenav-item *ngFor=\"let item of items\" [item]=\"item\"></ms-sidenav-item>\r\n      </mat-nav-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar.mat-toolbar.sidenav-toolbar {\n  background: #272B35;\n  padding: 0 14px 0 24px;\n  z-index: 3; }\n\n.sidenav-container, .sidenav-scrollbar-container {\n  height: 100%; }\n\n.cdk-focus-trap-content, md-sidenav {\n  overflow-y: hidden !important;\n  overflow-x: hidden; }\n\n.icon-sidenav-toggle {\n  color: #A7A9AE;\n  transition: -webkit-transform .25s;\n  transition: transform .25s;\n  transition: transform .25s, -webkit-transform .25s; }\n\n.icon-sidenav-toggle.rotate {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9zaWRlbmF2L0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXHdpZGdldHNcXHNpZGVuYXZcXHNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpZGdldHMvc2lkZW5hdi9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcc3R5bGVzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkNBeUM7RURDekMsdUJBQXNCO0VBQ3RCLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLDhCQUE2QjtFQUM3QixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxlQ2pCMkI7RURrQjNCLG1DQUEwQjtFQUExQiwyQkFBMEI7RUFBMUIsbURBQTBCLEVBSzNCOztBQVBEO0lBS0ksbUNBQTBCO1lBQTFCLDJCQUEwQixFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9fdmFyXCI7XHJcblxyXG5tYXQtdG9vbGJhci5tYXQtdG9vbGJhci5zaWRlbmF2LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LXRvb2xiYXI7XHJcbiAgcGFkZGluZzogMCAxNHB4IDAgMjRweDtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIsIC5zaWRlbmF2LXNjcm9sbGJhci1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNkay1mb2N1cy10cmFwLWNvbnRlbnQsIG1kLXNpZGVuYXYge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmljb24tc2lkZW5hdi10b2dnbGUge1xyXG4gIGNvbG9yOiAkY29sb3JfX3NpZGVuYXYtbGlzdDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cztcclxuXHJcbiAgJi5yb3RhdGUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFNpZGVuYXZcclxuJGNvbG9yX19zaWRlbmF2LWxpc3Q6ICNBN0E5QUU7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi10b29sYmFyOiAjMjcyQjM1O1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdDogIzJCMzAzQjtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0LCAyKTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMTogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3QsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDEsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDFfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMzogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMiwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMywgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsM19faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQ6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDMsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDRfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNSwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNiwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNl9faG92ZXI7XHJcblxyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDI6IDEwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsMzogMjBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw0OiAzMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDU6IDQwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNjogNDBweDtcclxuXHJcbiR3aWR0aF9fc2lkZW5hdjogMjUwcHg7XHJcblxyXG4kcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbTogMjRweDtcclxuJG1hcmdpbi1sZWZ0X19zaWRlbmF2LWxpc3RfX2l0ZW0tbmFtZTogJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW07XHJcbiR3aWR0aC1oZWlnaHRfX3NpZGVuYXYtbGlzdF9faWNvbjogMThweDtcclxuXHJcbiRtYXgtd2lkdGhfX2ljb24tc2lkZW5hdjogKCRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtICogMikgKyAkd2lkdGgtaGVpZ2h0X19zaWRlbmF2LWxpc3RfX2ljb24gKyAyO1xyXG5cclxuJHotaW5kZXhfX21kLXNpZGVuYXY6IDQ7XHJcbiR6LWluZGV4X19tZC1zaWRlbmF2LWNvbnRlbnQ6IDU7XHJcbiR6LWluZGV4X19tYWluLXRvb2xiYXI6IDUwMDtcclxuXHJcbiRoZWlnaHRfX21haW4tdG9vbGJhcjogNjRweDtcclxuXHJcbi8vIE1peGluc1xyXG5cclxuQG1peGluIG1kU2hhZG93LXozICgpIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAzcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA4cHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi8vIE5vdGlmaWNhdGlvbnNcclxuJGNvbG9yX19wcmltYXJ5OiAjNENBRjUwO1xyXG4kY29sb3JfX2FjY2VudDogI0U5MUU2MztcclxuJGNvbG9yX193YXJuOiAjZjQ0MzM2O1xyXG5cclxuJGNvbG9yX19wcmltYXJ5LWNvbnRyYXN0OiAjRkZGO1xyXG4kY29sb3JfX2FjY2VudC1jb250cmFzdDogI0ZGRjtcclxuJGNvbG9yX193YXJuLWNvbnRyYXN0OiAjRkZGO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav.component.ts ***!
  \******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.service */ "./src/app/widgets/sidenav/sidenav.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.service */ "./src/app/widgets/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(sidenavService, router, breadcrumbService, snackBar) {
        this.sidenavService = sidenavService;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.snackBar = snackBar;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidenavService.buildMenu(sessionStorage.getItem('currentUser'));
        this._itemsSubscription = this.sidenavService.items$
            .subscribe(function (items) {
            _this.items = _this.sortRecursive(items, 'position');
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
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
            var keys = lodash__WEBPACK_IMPORTED_MODULE_2__["keys"](item);
            keys.forEach(function (key) {
                if (lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"](item[key])) {
                    item[key] = that.sortRecursive(item[key], propertyName);
                }
            });
        });
        return lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](array, propertyName);
    };
    ;
    SidenavComponent.prototype.ngOnDestroy = function () {
        this._itemsSubscription.unsubscribe();
        this._routerEventsSubscription.unsubscribe();
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/widgets/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/widgets/sidenav/sidenav.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _breadcrumb_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/widgets/sidenav/sidenav.service.ts":
/*!****************************************************!*\
  !*** ./src/app/widgets/sidenav/sidenav.service.ts ***!
  \****************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_item_sidenav_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.model */ "./src/app/widgets/sidenav/sidenav-item/sidenav-item.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidenavService = /** @class */ (function () {
    function SidenavService(http, snackbar) {
        this.http = http;
        this.snackbar = snackbar;
        this._itemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._items = [];
        this.items$ = this._itemsSubject.asObservable();
        this._currentlyOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
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
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["URLSearchParams"]();
        params.set('userName', userName);
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({
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
        var item = new _sidenav_item_sidenav_item_model__WEBPACK_IMPORTED_MODULE_1__["SidenavItem"]({
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
        var item = new _sidenav_item_sidenav_item_model__WEBPACK_IMPORTED_MODULE_1__["SidenavItem"]({
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
        var result = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](collection, { 'route': route });
        if (!result) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["each"](collection, function (item) {
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
    SidenavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SidenavService);
    return SidenavService;
}());



/***/ }),

/***/ "./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-button-container\" #userButton (msClickOutside)=\"onClickOutside()\">\r\n  <button class=\"user-button\" md-button (click)=\"toggleDropdown()\" [class.open]=\"isOpen\">\r\n    <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <img class=\"avatar\" src=\"assets/img/avatars/noavatar.png\">\r\n      <span class=\"name\" fxHide fxShow.gt-sm>{{userName}}</span>\r\n      <mat-icon class=\"icon\" fxHide fxShow.gt-sm>keyboard_arrow_down</mat-icon>\r\n    </span>\r\n  </button>\r\n\r\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\r\n    <div class=\"content\">\r\n      <div class=\"list\">\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple (click)=\"viewUserProfile();\">\r\n          <mat-icon class=\"icon\">account_circle</mat-icon>\r\n          <span class=\"title\">Profile</span>\r\n        </div>\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\r\n          <mat-icon class=\"icon\">settings</mat-icon>\r\n          <span class=\"title\">Settings</span>\r\n        </div>\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\r\n          <mat-icon class=\"icon\">help</mat-icon>\r\n          <span class=\"title\">Help</span>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple (click)=\"logout();\">         \r\n          <mat-icon class=\"icon\">exit_to_app</mat-icon>\r\n          <span class=\"title\">Logout</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-button-container {\n  height: 100%;\n  position: relative; }\n  .user-button-container .user-button {\n    height: 100%;\n    min-width: 72px; }\n  .user-button-container .user-button .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%; }\n  .user-button-container .user-button .name {\n      margin: 0 8px 0 10px; }\n  .user-button-container .user-button .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .user-button-container .user-button.open {\n      background: rgba(0, 0, 0, 0.05); }\n  .user-button-container .user-button.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n  .user-button-container .dropdown {\n    background: white;\n    position: absolute;\n    top: 64px;\n    right: 0;\n    width: 100%;\n    min-width: 160px;\n    z-index: -1;\n    -webkit-transform: translateY(-110%);\n            transform: translateY(-110%);\n    visibility: hidden;\n    transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .user-button-container .dropdown .content .list .item {\n      height: 48px;\n      padding: 0 16px;\n      position: relative;\n      cursor: pointer; }\n  .user-button-container .dropdown .content .list .item .icon {\n        padding-right: 12px; }\n  .user-button-container .dropdown.open {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy90b29sYmFyL3Rvb2xiYXItdXNlci1idXR0b24vQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXGFwcFxcd2lkZ2V0c1xcdG9vbGJhclxcdG9vbGJhci11c2VyLWJ1dHRvblxcdG9vbGJhci11c2VyLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0cy90b29sYmFyL3Rvb2xiYXItdXNlci1idXR0b24vQzpcXExlYXJuaW5nXFxBcHBCdWlsZGVyXFxzcmNcXE1vbmFkLkFCLldlYi5uZy9zcmNcXHN0eWxlc1xcX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBWTtFQUNaLG1CQUFrQixFQXNFbkI7RUF4RUQ7SUFLSSxhQUFZO0lBQ1osZ0JBQWUsRUEyQmhCO0VBakNIO01BU00sWUFBVztNQUNYLGFBQVk7TUFDWixtQkFBa0IsRUFDbkI7RUFaTDtNQWVNLHFCQUFvQixFQUNyQjtFQWhCTDtNQW1CTSxZQUFXO01BQ1gsYUFBWTtNQUNaLGdCQUFlO01BQ2YsNkJBQW9CO2NBQXBCLHFCQUFvQjtNQUNwQixxRUFBcUQ7TUFBckQsNkRBQXFEO01BQXJELHVIQUFxRCxFQUN0RDtFQXhCTDtNQTJCTSxnQ0FBOEIsRUFLL0I7RUFoQ0w7UUE4QlEsbUNBQTBCO2dCQUExQiwyQkFBMEIsRUFDM0I7RUEvQlA7SUFvQ0ksa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixVQ1d1QjtJRFZ2QixTQUFRO0lBQ1IsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixZQUFXO0lBQ1gscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUM1QixtQkFBa0I7SUFDbEIsc0hBQStGO0lBQS9GLDhHQUErRjtJQUEvRix1S0FBK0YsRUEwQmhHO0VBdkVIO01BbURVLGFBQVk7TUFDWixnQkFBZTtNQUNmLG1CQUFrQjtNQUNsQixnQkFBZSxFQVNoQjtFQS9EVDtRQXlEWSxvQkFBbUIsRUFDcEI7RUExRFg7TUFvRU0saUNBQXdCO2NBQXhCLHlCQUF3QjtNQUN4QixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL3Rvb2xiYXIvdG9vbGJhci11c2VyLWJ1dHRvbi90b29sYmFyLXVzZXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy92YXJcIjtcclxuXHJcbi51c2VyLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC51c2VyLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDcycHg7XHJcblxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIG1hcmdpbjogMCA4cHggMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICRoZWlnaHRfX21haW4tdG9vbGJhcjtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExMCUpO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSwgdmlzaWJpbGl0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAubGlzdCB7XHJcblxyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBTaWRlbmF2XHJcbiRjb2xvcl9fc2lkZW5hdi1saXN0OiAjQTdBOUFFO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtdG9vbGJhcjogIzI3MkIzNTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3Q6ICMyQjMwM0I7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdCwgMik7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDE6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDFfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDFfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMSwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMiwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDM6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDIsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsM19faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDMsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsM19fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDRfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDRfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0X19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNTogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNCwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNSwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDY6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDUsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNl9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDYsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNl9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2hvdmVyO1xyXG5cclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWwyOiAxMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDM6IDIwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNDogMzBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw1OiA0MHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDY6IDQwcHg7XHJcblxyXG4kd2lkdGhfX3NpZGVuYXY6IDI1MHB4O1xyXG5cclxuJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW06IDI0cHg7XHJcbiRtYXJnaW4tbGVmdF9fc2lkZW5hdi1saXN0X19pdGVtLW5hbWU6ICRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtO1xyXG4kd2lkdGgtaGVpZ2h0X19zaWRlbmF2LWxpc3RfX2ljb246IDE4cHg7XHJcblxyXG4kbWF4LXdpZHRoX19pY29uLXNpZGVuYXY6ICgkcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbSAqIDIpICsgJHdpZHRoLWhlaWdodF9fc2lkZW5hdi1saXN0X19pY29uICsgMjtcclxuXHJcbiR6LWluZGV4X19tZC1zaWRlbmF2OiA0O1xyXG4kei1pbmRleF9fbWQtc2lkZW5hdi1jb250ZW50OiA1O1xyXG4kei1pbmRleF9fbWFpbi10b29sYmFyOiA1MDA7XHJcblxyXG4kaGVpZ2h0X19tYWluLXRvb2xiYXI6IDY0cHg7XHJcblxyXG4vLyBNaXhpbnNcclxuXHJcbkBtaXhpbiBtZFNoYWRvdy16MyAoKSB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG4vLyBOb3RpZmljYXRpb25zXHJcbiRjb2xvcl9fcHJpbWFyeTogIzRDQUY1MDtcclxuJGNvbG9yX19hY2NlbnQ6ICNFOTFFNjM7XHJcbiRjb2xvcl9fd2FybjogI2Y0NDMzNjtcclxuXHJcbiRjb2xvcl9fcHJpbWFyeS1jb250cmFzdDogI0ZGRjtcclxuJGNvbG9yX19hY2NlbnQtY29udHJhc3Q6ICNGRkY7XHJcbiRjb2xvcl9fd2Fybi1jb250cmFzdDogI0ZGRjtcclxuIl19 */"

/***/ }),

/***/ "./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ToolbarUserButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarUserButtonComponent", function() { return ToolbarUserButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accounts_shared_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../accounts/shared/accounts.service */ "./src/app/accounts/shared/accounts.service.ts");
/* harmony import */ var _accounts_shared_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../accounts/shared/account */ "./src/app/accounts/shared/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarUserButtonComponent = /** @class */ (function () {
    function ToolbarUserButtonComponent(router, route, accountService) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.logoutDetail = new _accounts_shared_account__WEBPACK_IMPORTED_MODULE_3__["LogoutDetail"]();
    }
    ToolbarUserButtonComponent.prototype.ngOnInit = function () {
        this.userName = sessionStorage.getItem('currentUser');
    };
    ToolbarUserButtonComponent.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    ToolbarUserButtonComponent.prototype.logout = function () {
        var _this = this;
        this.logoutDetail.UserName = this.userName;
        this.accountService.logout(this.logoutDetail)
            .subscribe(function (response) {
            if (response.statusCode == 200) {
                sessionStorage.removeItem('currentUser');
                sessionStorage.removeItem('currentUserToken');
                sessionStorage.removeItem('isCurrentUserAuthenticated');
                _this.router.navigateByUrl('/login');
            }
        });
    };
    ToolbarUserButtonComponent.prototype.viewUserProfile = function () {
        this.router.navigateByUrl('/user-profile/view');
    };
    ToolbarUserButtonComponent.prototype.onClickOutside = function () {
        this.isOpen = false;
    };
    ToolbarUserButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-toolbar-user-button',
            template: __webpack_require__(/*! ./toolbar-user-button.component.html */ "./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-user-button.component.scss */ "./src/app/widgets/toolbar/toolbar-user-button/toolbar-user-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _accounts_shared_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]])
    ], ToolbarUserButtonComponent);
    return ToolbarUserButtonComponent;
}());



/***/ }),

/***/ "./src/app/widgets/toolbar/toolbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/widgets/toolbar/toolbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-toolbar mat-elevation-z2\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide=\"false\" fxHide.gt-sm>\r\n    <button (click)=\"sidenav.open()\" mat-icon-button>\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <ms-breadcrumbs *ngIf=\"showBreadcrumbs\" [fxHide]=\"true\" [fxHide.gt-sm]=\"false\"></ms-breadcrumbs>\r\n\r\n  <span fxFlex></span>\r\n\r\n  <button [fxHide]=\"true\" [fxHide.gt-sm]=\"false\" md-button class=\"fullscreen-toggle\" (click)=\"toggleFullscreen()\">\r\n    <mat-icon *ngIf=\"!isFullscreen\">fullscreen</mat-icon>\r\n    <mat-icon *ngIf=\"isFullscreen\">fullscreen_exit</mat-icon>\r\n  </button>\r\n\r\n\r\n  <div class=\"user-button-container\">\r\n    <ms-toolbar-user-button></ms-toolbar-user-button>\r\n  </div>\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/widgets/toolbar/toolbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/widgets/toolbar/toolbar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy90b29sYmFyL0M6XFxMZWFybmluZ1xcQXBwQnVpbGRlclxcc3JjXFxNb25hZC5BQi5XZWIubmcvc3JjXFxhcHBcXHdpZGdldHNcXHRvb2xiYXJcXHRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpZGdldHMvdG9vbGJhci9DOlxcTGVhcm5pbmdcXEFwcEJ1aWxkZXJcXHNyY1xcTW9uYWQuQUIuV2ViLm5nL3NyY1xcc3R5bGVzXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQzhDeUIsRUQ3QzFCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhclwiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHotaW5kZXg6ICR6LWluZGV4X19tYWluLXRvb2xiYXI7XHJcbn1cclxuIiwiLy8gU2lkZW5hdlxyXG4kY29sb3JfX3NpZGVuYXYtbGlzdDogI0E3QTlBRTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LXRvb2xiYXI6ICMyNzJCMzU7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0OiAjMkIzMDNCO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3QsIDIpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdCwgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxX19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMSwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwxX19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMV9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDEsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDIsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMl9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDJfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwyLCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzLCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDNfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWwzX19ob3ZlcjtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNDogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsMywgMi41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0X19ob3ZlcjogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNCwgMS41KTtcclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw0X19hY3RpdmU6ICRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNF9faG92ZXI7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDU6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDQsIDIuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9faG92ZXI6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDUsIDEuNSk7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yX19zaWRlbmF2LWxpc3RfX2xldmVsNV9fYWN0aXZlOiAkYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDVfX2hvdmVyO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2OiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw1LCAyLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2hvdmVyOiBkYXJrZW4oJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2LCAxLjUpO1xyXG4kYmFja2dyb3VuZC1jb2xvcl9fc2lkZW5hdi1saXN0X19sZXZlbDZfX2FjdGl2ZTogJGJhY2tncm91bmQtY29sb3JfX3NpZGVuYXYtbGlzdF9fbGV2ZWw2X19ob3ZlcjtcclxuXHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsMjogMTBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWwzOiAyMHB4O1xyXG4kcGFkZGluZ19fc2lkZW5hdi1pdGVtX19sZXZlbDQ6IDMwcHg7XHJcbiRwYWRkaW5nX19zaWRlbmF2LWl0ZW1fX2xldmVsNTogNDBweDtcclxuJHBhZGRpbmdfX3NpZGVuYXYtaXRlbV9fbGV2ZWw2OiA0MHB4O1xyXG5cclxuJHdpZHRoX19zaWRlbmF2OiAyNTBweDtcclxuXHJcbiRwYWRkaW5nLWxlZnQtcmlnaHRfX3NpZGVuYXYtbGlzdF9fbWQtbGlzdC1pdGVtOiAyNHB4O1xyXG4kbWFyZ2luLWxlZnRfX3NpZGVuYXYtbGlzdF9faXRlbS1uYW1lOiAkcGFkZGluZy1sZWZ0LXJpZ2h0X19zaWRlbmF2LWxpc3RfX21kLWxpc3QtaXRlbTtcclxuJHdpZHRoLWhlaWdodF9fc2lkZW5hdi1saXN0X19pY29uOiAxOHB4O1xyXG5cclxuJG1heC13aWR0aF9faWNvbi1zaWRlbmF2OiAoJHBhZGRpbmctbGVmdC1yaWdodF9fc2lkZW5hdi1saXN0X19tZC1saXN0LWl0ZW0gKiAyKSArICR3aWR0aC1oZWlnaHRfX3NpZGVuYXYtbGlzdF9faWNvbiArIDI7XHJcblxyXG4kei1pbmRleF9fbWQtc2lkZW5hdjogNDtcclxuJHotaW5kZXhfX21kLXNpZGVuYXYtY29udGVudDogNTtcclxuJHotaW5kZXhfX21haW4tdG9vbGJhcjogNTAwO1xyXG5cclxuJGhlaWdodF9fbWFpbi10b29sYmFyOiA2NHB4O1xyXG5cclxuLy8gTWl4aW5zXHJcblxyXG5AbWl4aW4gbWRTaGFkb3ctejMgKCkge1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDNweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLy8gTm90aWZpY2F0aW9uc1xyXG4kY29sb3JfX3ByaW1hcnk6ICM0Q0FGNTA7XHJcbiRjb2xvcl9fYWNjZW50OiAjRTkxRTYzO1xyXG4kY29sb3JfX3dhcm46ICNmNDQzMzY7XHJcblxyXG4kY29sb3JfX3ByaW1hcnktY29udHJhc3Q6ICNGRkY7XHJcbiRjb2xvcl9fYWNjZW50LWNvbnRyYXN0OiAjRkZGO1xyXG4kY29sb3JfX3dhcm4tY29udHJhc3Q6ICNGRkY7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/widgets/toolbar/toolbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widgets/toolbar/toolbar.component.ts ***!
  \******************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.isFullscreen = false;
        this.showBreadcrumbs = true;
    }
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.toggleFullscreen = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('quickpanel'),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "quickpanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sidenav'),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidenav", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/widgets/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/widgets/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/widgets/utils/click-outside.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/widgets/utils/click-outside.directive.ts ***!
  \**********************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.msClickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "msClickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[msClickOutside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    googleApi: ''
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Learning\AppBuilder\src\Monad.AB.Web.ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map