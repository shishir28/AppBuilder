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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_admin_admin_component__ = __webpack_require__("../../../../../src/app/core/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_projects_list_project_component__ = __webpack_require__("../../../../../src/app/main/projects/list-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_projects_view_project_component__ = __webpack_require__("../../../../../src/app/main/projects/view-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_projects_edit_project_component__ = __webpack_require__("../../../../../src/app/main/projects/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_projects_new_project_component__ = __webpack_require__("../../../../../src/app/main/projects/new-project.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { LoginComponent } from "./demo/custom-pages/login/login.component";
// -------------------




//-------------
var routes = [
    //{
    //    path: 'login',
    //    component: LoginComponent
    //},
    ////{
    //    path: 'register',
    //    component: RegisterComponent
    //},
    //{
    //    path: 'forgot-password',
    //    component: ForgotPasswordComponent
    //},
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__core_admin_admin_component__["a" /* AdminComponent */],
        children: [
            //{
            //    path: '',
            //    component: DashboardComponent,
            //    pathMatch: 'full'
            //},
            {
                path: 'projects',
                component: __WEBPACK_IMPORTED_MODULE_3__main_projects_list_project_component__["a" /* ListProjectComponent */]
            },
            {
                path: 'projects/new',
                component: __WEBPACK_IMPORTED_MODULE_6__main_projects_new_project_component__["a" /* NewProjectComponent */]
            },
            {
                path: 'projects/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__main_projects_view_project_component__["a" /* ViewProjectComponent */]
            },
            {
                path: 'projects/edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_5__main_projects_edit_project_component__["a" /* EditProjectComponent */]
            }
        ]
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular_sortablejs__);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_11__main_main_module__["a" /* MainModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(perfectScrollbarConfig),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdIconRegistry */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n\r\n  <md-sidenav class=\"quickpanel\" [opened]=\"quickpanelOpen\" align=\"end\" mode=\"over\" #quickpanel>\r\n\r\n    <ms-quickpanel></ms-quickpanel>\r\n\r\n  </md-sidenav>\r\n\r\n  <md-sidenav class=\"sidenav\" [opened]=\"sidenavOpen\" align=\"start\" [mode]=\"sidenavMode\" msIconSidenav #sidenav>\r\n\r\n    <ms-sidenav></ms-sidenav>\r\n\r\n  </md-sidenav>\r\n\r\n  <div class=\"content-container\" fxLayout=\"column\">\r\n    <ms-toolbar [quickpanel]=\"quickpanel\" [sidenav]=\"sidenav\"></ms-toolbar>\r\n\r\n    <div  #scrollContainer >\r\n      <router-outlet (activate)=\"onActivate($event, scrollContainer)\" ></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.main-toolbar {\n  background: #ffffff;\n  padding-right: 0;\n  height: 64px;\n  padding-left: 16px; }\n  .main-toolbar .user-button-container {\n    height: 100%; }\n  .main-toolbar button.fullscreen-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 50px;\n    max-width: 50px;\n    height: 100%; }\n  .main-toolbar button.quickpanel-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 75px;\n    max-width: 75px;\n    height: 100%; }\n\n.mat-sidenav.quickpanel {\n  z-index: 100;\n  width: 330px;\n  min-width: 330px;\n  max-width: 330px; }\n\n@media screen and (max-width: 959px) {\n  .mat-sidenav.quickpanel {\n    width: 250px;\n    min-width: 250px;\n    max-width: 250px; }\n  button.user-button {\n    min-width: 72px; } }\n\n@media screen and (min-width: 960px) {\n  .mat-sidenav-backdrop {\n    z-index: 50 !important; } }\n\n.sidenav {\n  width: 250px;\n  max-width: 250px;\n  background: #2B303B;\n  overflow-x: hidden;\n  z-index: 4; }\n\n.content-container {\n  height: 100%; }\n\n.main-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100% - 64px);\n  position: relative; }\n\n@media screen and (min-width: 960px) {\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: max-width, margin-left, margin-right, -webkit-transform !important;\n    transition-property: transform, max-width, margin-left, margin-right !important;\n    transition-property: transform, max-width, margin-left, margin-right, -webkit-transform !important;\n    margin-left: 0 !important;\n    background: #EEE;\n    z-index: 5;\n    overflow: hidden;\n    box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.4); }\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 250px);\n    -webkit-transform: translate3d(250px, 0, 0) !important;\n            transform: translate3d(250px, 0, 0) !important; }\n  .sidenav.icon-sidenav.collapsed + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav.collapsed + .mat-sidenav-content {\n    max-width: calc(100% - 68px);\n    -webkit-transform: translate3d(68px, 0, 0) !important;\n            transform: translate3d(68px, 0, 0) !important; }\n  .sidenav.icon-sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 68px); }\n  .sidenav.collapsed .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout; }\n  .sidenav:not(.collapsed) .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(router, mediaReplayService) {
        this.router = router;
        this.mediaReplayService = mediaReplayService;
        this.quickpanelOpen = false;
        this.sidenavOpen = true;
        this.sidenavMode = 'side';
        this.isMobile = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
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
    AdminComponent.prototype.ngOnDestroy = function () {
        this._mediaSubscription.unsubscribe();
    };
    AdminComponent.prototype.onActivate = function (e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    };
    return AdminComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
    __metadata("design:type", Object)
], AdminComponent.prototype, "sidenav", void 0);
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-admin',
        template: __webpack_require__("../../../../../src/app/core/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/admin/admin.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _b || Object])
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

/***/ "../../../../../src/app/core/charts/nvD3/nvD3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nvD3; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var nvD3 = (function () {
    function nvD3(elementRef, nvD3Service) {
        this.el = elementRef.nativeElement;
        this.d3 = nvD3Service.getD3();
        this.nv = nvD3Service.getNv();
    }
    nvD3.prototype.ngOnChanges = function (changes) {
        if (this.options) {
            if (!this.chart || this.chartType !== this.options.chart.type) {
                this.initChart(this.options);
            }
            else {
                this.updateWithOptions(this.options);
            }
        }
    };
    nvD3.prototype.initChart = function (options) {
        var _this = this;
        // Clearing
        this.clearElement();
        if (!options)
            return;
        // Initialize chart with specific type
        this.chart = this.nv.models[options.chart.type]();
        this.chartType = this.options.chart.type;
        // Generate random chart ID
        this.chart.id = Math.random().toString(36).substr(2, 15);
        this.updateWithOptions(options);
        this.nv.addGraph(function () {
            if (!_this.chart)
                return;
            // Remove resize handler. Due to async execution should be placed here, not in the clearElement
            if (_this.chart.resizeHandler)
                _this.chart.resizeHandler.clear();
            _this.chart.resizeHandler = _this.nv.utils.windowResize(function () {
                _this.chart && _this.chart.update && _this.chart.update();
            });
            return _this.chart;
        }, options.chart['callback']);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    };
    /**
     * Update chart with new options.
     * @param options
     */
    nvD3.prototype.updateWithOptions = function (options) {
        // Exit if options are not yet bound
        if (!options)
            return;
        for (var key in this.chart) {
            if (!this.chart.hasOwnProperty(key))
                continue;
            var value = this.chart[key];
            if (key[0] === '_') { }
            else if ([
                'clearHighlights',
                'highlightPoint',
                'id',
                'options',
                'resizeHandler',
                'state',
                'open',
                'close',
                'tooltipContent'
            ].indexOf(key) >= 0) { }
            else if (key === 'dispatch')
                this.configureEvents(this.chart[key], options.chart[key]);
            else if ([
                'bars',
                'bars1',
                'bars2',
                'boxplot',
                'bullet',
                'controls',
                'discretebar',
                'distX',
                'distY',
                'interactiveLayer',
                'legend',
                'lines',
                'lines1',
                'lines2',
                'multibar',
                'pie',
                'scatter',
                'scatters1',
                'scatters2',
                'sparkline',
                'stack1',
                'stack2',
                'sunburst',
                'tooltip',
                'x2Axis',
                'xAxis',
                'y1Axis',
                'y2Axis',
                'y3Axis',
                'y4Axis',
                'yAxis',
                'yAxis1',
                'yAxis2'
            ].indexOf(key) >= 0 ||
                // stacked is a component for stackedAreaChart, but a boolean for multiBarChart and multiBarHorizontalChart
                (key === 'stacked' && options.chart.type === 'stackedAreaChart')) {
                this.configure(this.chart[key], options.chart[key], options.chart.type);
            }
            else if ((key === 'xTickFormat' || key === 'yTickFormat') && options.chart.type === 'lineWithFocusChart') {
            }
            else if ((key === 'tooltips') && options.chart.type === 'boxPlotChart') {
            }
            else if ((key === 'tooltipXContent' || key === 'tooltipYContent') && options.chart.type === 'scatterChart') {
            }
            else if (options.chart[key] === undefined || options.chart[key] === null) {
            }
            else
                this.chart[key](options.chart[key]);
        }
        this.updateWithData(this.data);
    };
    /**
     * Update chart with new chartDataArray.
     * @param data
     */
    nvD3.prototype.updateWithData = function (data) {
        if (data) {
            // Select the add <svg> element (create it if necessary) and to render the chart in
            {
                var svgElement = this.el.querySelector('svg');
                if (!svgElement) {
                    this.svg = this.d3.select(this.el).append('svg');
                }
                else {
                    this.svg = this.d3.select(svgElement);
                }
            }
            this.updateSize();
            this.svg.datum(data).call(this.chart);
        }
    };
    /**
     * Update the chart size.
     */
    nvD3.prototype.updateSize = function () {
        if (this.svg) {
            var h = void 0, w = void 0;
            if (h = this.options.chart.height) {
                if (!isNaN(+h))
                    h += 'px';
                this.svg.attr('height', h).style({ height: h });
            }
            if (w = this.options.chart.width) {
                if (!isNaN(+w))
                    w += 'px';
                this.svg.attr('width', w).style({ width: w });
            }
            else {
                this.svg.attr('width', '100%').style({ width: '100%' });
            }
        }
    };
    /**
     * Synchronize the options with the options of the nvd3 chart.
     * @param chart
     * @param options
     * @param chartType
     */
    nvD3.prototype.configure = function (chart, options, chartType) {
        if (chart && options) {
            for (var key in chart) {
                if (!chart.hasOwnProperty(key))
                    continue;
                var value = chart[key];
                if (key[0] === '_') {
                }
                else if (key === 'dispatch')
                    this.configureEvents(value, options[key]);
                else if (key === 'tooltip')
                    this.configure(chart[key], options[key], chartType);
                else if (key === 'contentGenerator') {
                    if (options[key])
                        chart[key](options[key]);
                }
                else if ([
                    'axis',
                    'clearHighlights',
                    'defined',
                    'highlightPoint',
                    'nvPointerEventsClass',
                    'options',
                    'rangeBand',
                    'rangeBands',
                    'scatter',
                    'open',
                    'close'
                ].indexOf(key) === -1) {
                    if (options[key] === undefined || options[key] === null) {
                    }
                    else
                        chart[key](options[key]);
                }
            }
        }
    };
    /**
     * Configure dispatch events.
     * @param dispatch
     * @param options
     */
    nvD3.prototype.configureEvents = function (dispatch, options) {
        if (dispatch && options) {
            for (var key in dispatch) {
                if (!dispatch.hasOwnProperty(key))
                    continue;
                var value = dispatch[key];
                if (options[key] === undefined || options[key] === null) {
                }
                else
                    dispatch.on(key + '._', options[key]);
            }
        }
    };
    /**
     * Cleanup an element.
     */
    nvD3.prototype.clearElement = function () {
        var nv = this.nv;
        this.el.innerHTML = '';
        // remove tooltip if exists
        if (this.chart && this.chart.tooltip && this.chart.tooltip.id) {
            this.d3.select('#' + this.chart.tooltip.id()).remove();
        }
        // To be compatible with old nvd3 (v1.7.1)
        if (nv['graphs'] && this.chart) {
            for (var i = nv['graphs'].length - 1; i >= 0; i--) {
                if (nv['graphs'][i] && (nv['graphs'][i].id === this.chart.id)) {
                    nv['graphs'].splice(i, 1);
                }
            }
        }
        if (nv.tooltip && nv.tooltip.cleanup) {
            nv.tooltip.cleanup();
        }
        if (this.chart && this.chart.resizeHandler)
            this.chart.resizeHandler.clear();
        this.chart = null;
    };
    return nvD3;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], nvD3.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], nvD3.prototype, "data", void 0);
nvD3 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nvd3',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nvD3_service__["a" /* D3ChartService */]) === "function" && _b || Object])
], nvD3);

var _a, _b;
//# sourceMappingURL=nvD3.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/charts/nvD3/nvD3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nvd3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3ChartService = (function () {
    function D3ChartService() {
    }
    D3ChartService.prototype.getD3 = function () {
        return __WEBPACK_IMPORTED_MODULE_1_d3__;
    };
    D3ChartService.prototype.getNv = function () {
        return __WEBPACK_IMPORTED_MODULE_2_nvd3__;
    };
    return D3ChartService;
}());
D3ChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], D3ChartService);

//# sourceMappingURL=nvD3.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidenav_sidenav_item_sidenav_item_component__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidenav_icon_sidenav_directive__ = __webpack_require__("../../../../../src/app/core/sidenav/icon-sidenav.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_search_search_component__ = __webpack_require__("../../../../../src/app/core/toolbar/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__ = __webpack_require__("../../../../../src/app/core/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quickpanel_quickpanel_component__ = __webpack_require__("../../../../../src/app/core/quickpanel/quickpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toolbar_toolbar_user_button_toolbar_user_button_component__ = __webpack_require__("../../../../../src/app/core/toolbar/toolbar-user-button/toolbar-user-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_click_outside_directive__ = __webpack_require__("../../../../../src/app/core/utils/click-outside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toolbar_search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/core/toolbar/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__toolbar_toolbar_notifications_toolbar_notifications_component__ = __webpack_require__("../../../../../src/app/core/toolbar/toolbar-notifications/toolbar-notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidenav_sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__breadcrumb_breadcrumb_service__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_material_components_module__ = __webpack_require__("../../../../../src/app/material/material-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_19__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_17__material_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forChild()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_3__sidenav_sidenav_item_sidenav_item_component__["a" /* SidenavItemComponent */],
            __WEBPACK_IMPORTED_MODULE_4__sidenav_icon_sidenav_directive__["a" /* IconSidenavDirective */],
            __WEBPACK_IMPORTED_MODULE_5__toolbar_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__breadcrumb_breadcrumb_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_8__quickpanel_quickpanel_component__["a" /* QuickpanelComponent */],
            __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__toolbar_toolbar_user_button_toolbar_user_button_component__["a" /* ToolbarUserButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_11__utils_click_outside_directive__["a" /* ClickOutsideDirective */],
            __WEBPACK_IMPORTED_MODULE_12__toolbar_search_bar_search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__toolbar_toolbar_notifications_toolbar_notifications_component__["a" /* ToolbarNotificationsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__sidenav_sidenav_service__["a" /* SidenavService */],
            __WEBPACK_IMPORTED_MODULE_15__sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */],
            __WEBPACK_IMPORTED_MODULE_16__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/highlightjs/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(elem) {
        this.elem = elem;
    }
    HighlightDirective.prototype.ngAfterViewInit = function () {
        hljs.highlightBlock(this.elem.nativeElement);
    };
    return HighlightDirective;
}());
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'code[msHighlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HighlightDirective);

var _a;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/highlightjs/highlight.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__highlight_directive__ = __webpack_require__("../../../../../src/app/core/highlightjs/highlight.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HighlightModule = (function () {
    function HighlightModule() {
    }
    return HighlightModule;
}());
HighlightModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__highlight_directive__["a" /* HighlightDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__highlight_directive__["a" /* HighlightDirective */]]
    })
], HighlightModule);

//# sourceMappingURL=highlight.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/loading-overlay/loading-overlay.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-overlay\" [class.show]=\"isLoading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/loading-overlay/loading-overlay.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-overlay {\n  background-color: rgba(255, 255, 255, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  transition: all .25s ease-in-out;\n  opacity: 0;\n  visibility: hidden; }\n  .loading-overlay.show {\n    opacity: 1;\n    visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/loading-overlay/loading-overlay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingOverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingOverlayComponent = (function () {
    function LoadingOverlayComponent() {
    }
    LoadingOverlayComponent.prototype.ngOnInit = function () {
    };
    return LoadingOverlayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isLoading'),
    __metadata("design:type", Boolean)
], LoadingOverlayComponent.prototype, "isLoading", void 0);
LoadingOverlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-loading-overlay',
        template: __webpack_require__("../../../../../src/app/core/loading-overlay/loading-overlay.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/loading-overlay/loading-overlay.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoadingOverlayComponent);

//# sourceMappingURL=loading-overlay.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/quickpanel/quickpanel.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\r\n  <md-tab label=\"Overview\">\r\n      <perfect-scrollbar class=\"overflow-container\">\r\n          <div class=\"text-padding\">\r\n            <p>TODAY</p>\r\n            <p class=\"h1\">\r\n              <span>{{ todayDay }}</span> <br/>\r\n              <span>{{ todayDate }}</span><span style=\"font-size: 18px; vertical-align: top;\">{{ todayDateSuffix }}</span><span>{{ todayMonth }}</span>\r\n            </p>\r\n          </div>\r\n\r\n          <md-divider></md-divider>\r\n\r\n          <md-nav-list>\r\n            <h3 md-subheader>Upcoming Events</h3>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Business Meeting</h4>\r\n              <p md-line>In 16 Minutes, Meeting Room</p>\r\n            </a>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Ask for Vacation</h4>\r\n              <p md-line>12:00 PM</p>\r\n            </a>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Dinner with Sophie</h4>\r\n              <p md-line>18:30 PM</p>\r\n            </a>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Deadline for Project X</h4>\r\n              <p  md-line>21:00 PM</p>\r\n            </a>\r\n            <md-divider></md-divider>\r\n            <h3 md-subheader>TODO-List</h3>\r\n            <a md-list-item>\r\n              <h4 md-line>Invite Jack to play golf</h4>\r\n              <p md-line>Added: 6 hours ago</p>\r\n            </a>\r\n            <a md-list-item>\r\n              <h4 md-line>Get to know Angular more</h4>\r\n              <p md-line>Added: 2 days ago</p>\r\n            </a>\r\n            <a md-list-item>\r\n              <h4 md-line>Configure that new router</h4>\r\n              <p md-line>Added: 5 days ago</p>\r\n            </a>\r\n            <md-divider></md-divider>\r\n            <h3 md-subheader>Server Statistics</h3>\r\n            <a md-list-item>\r\n              <p md-line>CPU Load (71% / 100%)</p>\r\n              <p md-line><md-progress-bar mode=\"determinate\" color=\"primary\" value=\"71\"></md-progress-bar></p>\r\n            </a>\r\n            <a md-list-item>\r\n              <p md-line>RAM Usage (6,175 MB / 16,384 MB)</p>\r\n              <p md-line><md-progress-bar mode=\"determinate\" color=\"accent\" value=\"34\"></md-progress-bar></p>\r\n            </a>\r\n            <a md-list-item>\r\n              <p md-line>CPU Temp (43° / 80°)</p>\r\n              <p md-line><md-progress-bar mode=\"determinate\" color=\"warn\" value=\"54\"></md-progress-bar></p>\r\n            </a>\r\n          </md-nav-list>\r\n      </perfect-scrollbar>\r\n  </md-tab>\r\n  <md-tab label=\"Notifications\">\r\n    <perfect-scrollbar class=\"overflow-container\">\r\n      <md-nav-list>\r\n        <h3 md-subheader>Friends</h3>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/1.png\">\r\n          <h3 md-line> Sophie </h3>\r\n          <p md-line>\r\n            <span> Dinner? </span>\r\n            <span class=\"\"> -- Are we still going out tonight? </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/4.png\">\r\n          <h3 md-line> Jack </h3>\r\n          <p md-line>\r\n            <span> Golf weekend </span>\r\n            <span class=\"\"> -- Hey! You wanted to go play Golf? </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/9.png\">\r\n          <h3 md-line> Cody </h3>\r\n          <p md-line>\r\n            <span> Code Quality </span>\r\n            <span class=\"\"> -- Love your newest theme, so clean and slick! </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/16.png\">\r\n          <h3 md-line> James </h3>\r\n          <p md-line>\r\n            <span> Gaming? </span>\r\n            <span class=\"\"> -- You wanna throw a party this weekend? </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/19.png\">\r\n          <h3 md-line> Jessica </h3>\r\n          <p md-line>\r\n            <span> Love you... </span>\r\n            <span class=\"\"> -- Hope we can see us again soon :) </span>\r\n          </p>\r\n        </a>\r\n\r\n        <md-divider></md-divider>\r\n\r\n        <h3 md-subheader>Server Statistics</h3>\r\n        <a md-list-item>\r\n          <p md-line>CPU Load (71% / 100%)</p>\r\n          <p md-line><md-progress-bar mode=\"determinate\" color=\"primary\" value=\"71\"></md-progress-bar></p>\r\n        </a>\r\n        <a md-list-item>\r\n          <p md-line>RAM Usage (6,175 MB / 16,384 MB)</p>\r\n          <p md-line><md-progress-bar mode=\"determinate\" color=\"accent\" value=\"34\"></md-progress-bar></p>\r\n        </a>\r\n        <a md-list-item>\r\n          <p md-line>CPU Temp (43° / 80°)</p>\r\n          <p md-line><md-progress-bar mode=\"determinate\" color=\"warn\" value=\"54\"></md-progress-bar></p>\r\n        </a>\r\n      </md-nav-list>\r\n    </perfect-scrollbar>\r\n  </md-tab>\r\n</md-tab-group>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/quickpanel/quickpanel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overflow-container {\n  height: 100%;\n  overflow-x: hidden;\n  position: absolute;\n  width: 100%; }\n\n.text-padding {\n  padding: 24px; }\n\np {\n  color: #444; }\n\n.h1 {\n  font-size: 32px;\n  font-weight: 500;\n  margin-bottom: 0; }\n\nh4 {\n  color: #212121; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/quickpanel/quickpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickpanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickpanelComponent = (function () {
    function QuickpanelComponent() {
    }
    QuickpanelComponent.prototype.ngOnInit = function () {
        this.todayDay = __WEBPACK_IMPORTED_MODULE_1_moment__().format('dddd');
        this.todayDate = __WEBPACK_IMPORTED_MODULE_1_moment__().format('Do');
        this.todayDate = this.todayDate.replace(/\D/g, '');
        this.todayDateSuffix = __WEBPACK_IMPORTED_MODULE_1_moment__().format('Do');
        this.todayDateSuffix = this.todayDateSuffix.replace(/[0-9]/g, '');
        this.todayMonth = __WEBPACK_IMPORTED_MODULE_1_moment__().format('MMMM');
    };
    return QuickpanelComponent;
}());
QuickpanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-quickpanel',
        template: __webpack_require__("../../../../../src/app/core/quickpanel/quickpanel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/quickpanel/quickpanel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], QuickpanelComponent);

//# sourceMappingURL=quickpanel.component.js.map

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
        this.breadcrumbService.addFriendlyNameForRoute('/', "Dashboard");
        //this.breadcrumbService.addFriendlyNameForRoute('/apps', "Apps");
        //this.breadcrumbService.addFriendlyNameForRoute('/apps/inbox', "Inbox");
        //this.breadcrumbService.addFriendlyNameForRoute('/apps/calendar', "Calendar");
        //this.breadcrumbService.addFriendlyNameForRoute('/apps/chat', "Chat");
        //this.breadcrumbService.addFriendlyNameForRoute('/components', "Components");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/autocomplete', "Autocomplete");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/buttons', "Buttons");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/cards', "Cards");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/dialogs', "Dialogs");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/grid-list', "Grid List");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/lists', "Lists");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/menu', "Menu");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/slider', "Slider");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/snack-bar', "Snack-Bar");
        //this.breadcrumbService.addFriendlyNameForRoute('/components/tooltips', "Tooltips");
        this.breadcrumbService.addFriendlyNameForRoute('/forms', "Forms");
        //this.breadcrumbService.addFriendlyNameForRoute('/forms/form-elements', "Form Elements");
        //this.breadcrumbService.addFriendlyNameForRoute('/forms/form-wizard', "Form Wizard");
        this.breadcrumbService.addFriendlyNameForRoute('/projects', "Projects");
        //this.breadcrumbService.addFriendlyNameForRoute('/tables', "Tables");
        //this.breadcrumbService.addFriendlyNameForRoute('/tables/simple-table', "Simple Table");
        //this.breadcrumbService.addFriendlyNameForRoute('/tables/fixed-header-table', "Fixed Header Table");
        //this.breadcrumbService.addFriendlyNameForRoute('/maps', "Maps");
        //this.breadcrumbService.addFriendlyNameForRoute('/maps/google-maps', "Google Maps");
        //this.breadcrumbService.addFriendlyNameForRoute('/icons', "Material Icons");
        //this.breadcrumbService.addFriendlyNameForRoute('/dashboard-v1', "Dashboard v1");
        //this.breadcrumbService.addFriendlyNameForRoute('/drag-and-drop', "Drag & Drop");
        //this.breadcrumbService.addFriendlyNameForRoute('/editor', "WYSISYG Editor");
        //this.breadcrumbService.addFriendlyNameForRoute('/dynamic-menu', "Dynamic Menu");
        //this.breadcrumbService.addFriendlyNameForRoute('/level1', "Level 1");
        //this.breadcrumbService.addFriendlyNameForRoute('/level1/level2', "Level 2");
        //this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3', "Level 3");
        //this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4', "Level 4");
        //this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4/level5', "Level 5");
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MdSnackBar */]) === "function" && _d || Object])
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
    function SidenavService(snackbar) {
        this._itemsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._items = [];
        this.items$ = this._itemsSubject.asObservable();
        this._currentlyOpenSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._currentlyOpen = [];
        this.currentlyOpen$ = this._currentlyOpenSubject.asObservable();
        var menu = this;
        var dashboard = menu.addItem('Dashboard', 'dashboard', '/', 1);
        //menu.addItem('Inbox', 'mail', '/apps/inbox', 1, '22', '#7986CC');
        //menu.addItem('Chat', 'chat', '/apps/chat', 2, '14', '#E15C74');
        //menu.addItem('Calendar', 'date_range', '/apps/calendar', 3);
        //let components =  menu.addItem('Components', 'layers', null, 3);
        //menu.addSubItem(components, 'Autocomplete', '/components/autocomplete', 1);
        //menu.addSubItem(components, 'Buttons', '/components/buttons', 2);
        //menu.addSubItem(components, 'Cards', '/components/cards', 3);
        //menu.addSubItem(components, 'Dialogs', '/components/dialogs', 4);
        //menu.addSubItem(components, 'Grid List', '/components/grid-list', 5);
        //menu.addSubItem(components, 'Lists', '/components/lists', 6);
        //menu.addSubItem(components, 'Menu', '/components/menu', 7);
        //menu.addSubItem(components, 'Slider', '/components/slider', 8);
        //menu.addSubItem(components, 'Snack-Bar', '/components/snack-bar', 9);
        //menu.addSubItem(components, 'Tooltips', '/components/tooltips', 10);
        var forms = menu.addItem('Forms', 'insert_comment', null, 4);
        //menu.addSubItem(forms, 'Form Elements', '/forms/form-elements', 1);
        //menu.addSubItem(forms, 'Form Wizard', '/forms/form-wizard', 2);
        menu.addSubItem(forms, 'Projects', '/projects', 3);
        //let tables =  menu.addItem('Tables', 'format_line_spacing', null, 5);
        //menu.addSubItem(tables, 'Simple Table', '/tables/simple-table', 1);
        //menu.addSubItem(tables, 'Fixed Header Table', '/tables/fixed-header-table', 2);
        //let maps =  menu.addItem('Maps', 'map', null, 6, '3', '#4CAF50');
        //menu.addSubItem(maps, 'Google Maps', '/maps/google-maps', 1);
        //let icons = menu.addItem('Material Icons', 'grade', '/icons', 7);
        //let customPages = menu.addItem('Custom Pages', 'web', null, 8);
        //menu.addSubItem(customPages, 'Login Page', '/login', 1);
        //menu.addSubItem(customPages, 'Register Page', '/register', 2);
        //menu.addSubItem(customPages, 'Forgot Password', '/forgot-password', 3);
        //menu.addSubItem(customPages, 'Dashboard v1', '/dashboard-v1', 4);
        //let dragAndDrop = menu.addItem('Drag & Drop', 'mouse', '/drag-and-drop', 9);
        //let editor = menu.addItem('WYSIWYG Editor', 'format_shapes', '/editor', 10, 'NEW', '#3F51B5');
        //let multiLevel = menu.addItem('Multi-Level Menu', 'menu', null, 11);
        //let level1 = menu.addSubItem(multiLevel, 'Level 1', '/level1', 1);
        //let level2 = menu.addSubItem(level1, 'Level 2', '/level1/level2', 2);
        //let level3 = menu.addSubItem(level2, 'Level 3', '/level1/level2/level3', 3);
        //let level4 = menu.addSubItem(level3, 'Level 4', '/level1/level2/level3/level4', 4);
        //let level5 = menu.addSubItem(level4, 'Level 5', '/level1/level2/level3/level4/level5', 5);
        var dynamicMenuFunctionDemo = function () {
            var dynamicFunction = function () {
                var snackbarRef = snackbar.open('This menu item got added dynamically!', 'Remove item', {
                    duration: 5000
                });
                snackbarRef.onAction().subscribe(function () {
                    menu.removeItem(dynamicMenu);
                });
            };
            var dynamicMenu = menu.addItem('Dynamic Menu Item', 'extension', dynamicFunction, 12);
        };
        var addMenu = menu.addItem('Add Menu Item', 'add', dynamicMenuFunctionDemo, 99, null, null, 'add-dynamic-menu');
    }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MdSnackBar */]) === "function" && _a || Object])
], SidenavService);

var _a;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__["a" /* SidenavService */]) === "function" && _b || Object])
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

module.exports = "<div class=\"user-button-container\" #userButton (msClickOutside)=\"onClickOutside()\">\n  <button class=\"user-button\" md-button (click)=\"toggleDropdown()\" [class.open]=\"isOpen\">\n    <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <img class=\"avatar\" src=\"assets/img/avatars/noavatar.png\">\n      <span class=\"name\" fxHide fxShow.gt-sm>David Smith</span>\n      <md-icon class=\"icon\" fxHide fxShow.gt-sm>keyboard_arrow_down</md-icon>\n    </span>\n  </button>\n\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    <div class=\"content\">\n      <div class=\"list\">\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">account_circle</md-icon>\n          <span class=\"title\">Profile</span>\n        </div>\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">settings</md-icon>\n          <span class=\"title\">Settings</span>\n        </div>\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple>\n          <md-icon class=\"icon\">help</md-icon>\n          <span class=\"title\">Help</span>\n        </div>\n        <md-divider></md-divider>\n        <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" md-ripple [routerLink]=\"['/login']\">\n          <md-icon class=\"icon\">exit_to_app</md-icon>\n          <span class=\"title\">Logout</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
    function ToolbarUserButtonComponent() {
    }
    ToolbarUserButtonComponent.prototype.ngOnInit = function () {
    };
    ToolbarUserButtonComponent.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
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
    __metadata("design:paramtypes", [])
], ToolbarUserButtonComponent);

//# sourceMappingURL=toolbar-user-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-toolbar mat-elevation-z2\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide=\"false\" fxHide.gt-sm>\r\n    <button (click)=\"sidenav.open()\" md-icon-button>\r\n      <md-icon>menu</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"500px\" fxHide fxShow.gt-md>\r\n    <ms-search-bar></ms-search-bar>\r\n  </div>\r\n\r\n  <ms-breadcrumbs *ngIf=\"showBreadcrumbs\" [fxHide]=\"true\" [fxHide.gt-sm]=\"false\"></ms-breadcrumbs>\r\n\r\n  <span fxFlex></span>\r\n\r\n  <button [fxHide]=\"true\" [fxHide.gt-sm]=\"false\" md-button class=\"fullscreen-toggle\" (click)=\"toggleFullscreen()\">\r\n    <md-icon *ngIf=\"!isFullscreen\">fullscreen</md-icon>\r\n    <md-icon *ngIf=\"isFullscreen\">fullscreen_exit</md-icon>\r\n  </button>\r\n\r\n  <ms-search></ms-search>\r\n\r\n  <div class=\"\">\r\n    <ms-toolbar-notifications></ms-toolbar-notifications>\r\n  </div>\r\n\r\n  <div class=\"user-button-container\">\r\n    <ms-toolbar-user-button></ms-toolbar-user-button>\r\n  </div>\r\n\r\n  <button md-button class=\"quickpanel-toggle\" (click)=\"quickpanel.open()\">\r\n    <md-icon>format_align_right</md-icon>\r\n  </button>\r\n</div>\r\n"

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

/***/ "../../../../../src/app/core/widgets/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-card mat-elevation-z2\">\r\n  <div class=\"title-container\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ title }}</span>\r\n      <span class=\"extra\">{{ subTitle }}</span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"content\">\r\n    <md-nav-list>\r\n      <a href=\"javascript:\" md-list-item *ngFor=\"let feed of feeds\">\r\n        <img md-list-avatar [src]=\"feed.image\" alt=\"...\">\r\n        <h3 md-line> {{ feed.name }} </h3>\r\n        <p md-line>\r\n          <span class=\"title\"> {{ feed.subject }} </span>\r\n          <span class=\"extra\"> -- {{ feed.content }} </span>\r\n        </p>\r\n      </a>\r\n    </md-nav-list>\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityComponent = (function () {
    function ActivityComponent() {
        this.title = 'Recent Activities';
        this.subTitle = 'Your daily news feed';
        this.isLoading = false;
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return ActivityComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('feeds'),
    __metadata("design:type", Array)
], ActivityComponent.prototype, "feeds", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], ActivityComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subTitle'),
    __metadata("design:type", String)
], ActivityComponent.prototype, "subTitle", void 0);
ActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-activity',
        template: __webpack_require__("../../../../../src/app/core/widgets/activity/activity.component.html")
    }),
    __metadata("design:paramtypes", [])
], ActivityComponent);

//# sourceMappingURL=activity.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/bar-chart/bar-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-widget mat-elevation-z2\" [style.background]=\"bgColor\">\r\n  <div class=\"title-container\" [style.color]=\"textColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ widgetTitle }}</span>\r\n      <span class=\"extra\">\r\n        <md-icon class=\"arrow\" *ngIf=\"gain > 0\">\r\n          arrow_upward\r\n        </md-icon>\r\n        <md-icon class=\"arrow\" *ngIf=\"gain < 0\">\r\n          arrow_downward\r\n        </md-icon>\r\n        <span>{{ gain }}{{ comparedTo }}</span>\r\n      </span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"chart-container\">\r\n    <nvd3 class=\"thin-discrete-bar\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/bar-chart/bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BarChartComponent = (function () {
    function BarChartComponent(d3ChartService) {
        this.isLoading = false;
        this.d3 = d3ChartService.getD3();
    }
    BarChartComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        if (!this.chartOptions) {
            this.chartOptions = {
                chart: {
                    type: 'discreteBarChart',
                    height: 120,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    x: function (d) { return d.date; },
                    y: function (d) { return d.value; },
                    showXAxis: false,
                    showYAxis: false,
                    xAxis: {
                        ticks: d3.time.days,
                        axisLabel: '',
                        tickFormat: function (d) {
                            return d3.time.format('%a %d.%m.%Y')(new Date(d));
                        }
                    },
                    showLegend: false,
                    useInteractiveGuideline: true,
                    color: [this.chartColor],
                    rectClass: 'bar-rect'
                },
            };
        }
    };
    BarChartComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return BarChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('widgetTitle'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "widgetTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bgColor'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "bgColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('textColor'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "textColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartColor'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "chartColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('gain'),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "gain", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('comparedTo'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "comparedTo", void 0);
BarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-bar-chart',
        template: __webpack_require__("../../../../../src/app/core/widgets/bar-chart/bar-chart.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], BarChartComponent);

var _a;
//# sourceMappingURL=bar-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [style.height]=\"height\" [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"styles\" [scrollwheel]=\"false\"></agm-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapsWidgetComponent = (function () {
    function GoogleMapsWidgetComponent() {
        this.height = '450px';
        this.lat = 40.730610;
        this.lng = -73.935242;
        this.styles = [
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "invert_lightness": false
                    },
                    {
                        "color": "#004963"
                    },
                    {
                        "weight": 8
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "invert_lightness": false
                    },
                    {
                        "color": "#b7ebeb"
                    },
                    {
                        "saturation": -53
                    },
                    {
                        "lightness": 2
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "invert_lightness": false
                    },
                    {
                        "hue": "#767878"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": 56
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#b8dbe0"
                    },
                    {
                        "saturation": -7
                    },
                    {
                        "lightness": 33
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -1
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d1e6d7"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 61
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 80
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#d74340"
                    },
                    {
                        "saturation": -32
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d74340"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "gamma": 2.05
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": 100
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 78
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 54
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 28
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ];
    }
    GoogleMapsWidgetComponent.prototype.ngOnInit = function () {
    };
    return GoogleMapsWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('height'),
    __metadata("design:type", String)
], GoogleMapsWidgetComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lat'),
    __metadata("design:type", Number)
], GoogleMapsWidgetComponent.prototype, "lat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lng'),
    __metadata("design:type", Number)
], GoogleMapsWidgetComponent.prototype, "lng", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('styles'),
    __metadata("design:type", Object)
], GoogleMapsWidgetComponent.prototype, "styles", void 0);
GoogleMapsWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-google-maps-widget',
        template: __webpack_require__("../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.html")
    }),
    __metadata("design:paramtypes", [])
], GoogleMapsWidgetComponent);

//# sourceMappingURL=google-maps-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/pie-chart/pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"piechart-widget chart-widget mat-elevation-z2\" [style.background]=\"bgColor\">\r\n  <div class=\"title-container\" [style.color]=\"textColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ widgetTitle }}</span>\r\n      <span class=\"extra\">{{ subTitle }}</span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"chart-container\">\r\n    <nvd3 class=\"intense-colors-pie-chart white-labels-pie-chart\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </div>\r\n  <div class=\"chart-footer\" fxLayout=\"row\">\r\n    <div class=\"border-right text-center\" fxFlex fxLayout=\"column\">\r\n      <span class=\"title\">1096</span>\r\n      <span class=\"extra\">Total Sales</span>\r\n    </div>\r\n    <div class=\"text-center\" fxFlex fxLayout=\"column\">\r\n      <span class=\"title\">598</span>\r\n      <span class=\"extra\">Sales from these Categories</span>\r\n    </div>\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PieChartComponent = (function () {
    function PieChartComponent(d3ChartService) {
        this.isLoading = false;
        this.d3 = d3ChartService.getD3();
    }
    PieChartComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        if (!this.chartOptions) {
            this.chartOptions = {
                chart: {
                    type: 'pieChart',
                    height: 400,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    x: function (d) { return d.label; },
                    y: function (d) { return d.value; },
                    showXAxis: false,
                    showYAxis: false,
                    showLegend: true,
                    useInteractiveGuideline: true,
                    donut: true,
                    color: ['#1E88E5', '#D81B60', '#00897B', '#3949AB', '#e53935']
                },
            };
        }
    };
    PieChartComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return PieChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('widgetTitle'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "widgetTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subTitle'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "subTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bgColor'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "bgColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('textColor'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "textColor", void 0);
PieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-pie-chart',
        template: __webpack_require__("../../../../../src/app/core/widgets/pie-chart/pie-chart.component.html")
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], PieChartComponent);

var _a;
//# sourceMappingURL=pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"traffic-sources-card chart-widget mat-elevation-z2\">\r\n  <div class=\"title-container\" [style.color]=\"textColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ title }}</span>\r\n      <span class=\"extra\">{{ subTitle }}</span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\r\n\r\n    <div class=\"section\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" *ngFor=\"let data of chartData\">\r\n\r\n      <div class=\"source\" fxFlex=\"100px\" fxLayout=\"row\" fxLayoutAlign=\"center center\" [style.background-color]=\"data[0].color\">\r\n        {{ data[0].key }}\r\n      </div>\r\n\r\n      <span class=\"value\" fxFlex=\"80px\" fxFlex.gt-sm=\"150px\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        {{ data[0].sum | number: '1.0-0' }}\r\n      </span>\r\n\r\n      <nvd3 fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficSourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficSourcesComponent = (function () {
    function TrafficSourcesComponent(nvD3Service) {
        this.title = 'Traffic Sources';
        this.subTitle = 'Total Visits over the last week';
        this.isLoading = false;
        this.d3 = nvD3Service.getD3();
    }
    TrafficSourcesComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 50,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        return d3.time.format('%a %d.%m.%Y')(new Date(d));
                    }
                },
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    TrafficSourcesComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return TrafficSourcesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], TrafficSourcesComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subTitle'),
    __metadata("design:type", String)
], TrafficSourcesComponent.prototype, "subTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
    __metadata("design:type", Array)
], TrafficSourcesComponent.prototype, "chartData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], TrafficSourcesComponent.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('textColor'),
    __metadata("design:type", Object)
], TrafficSourcesComponent.prototype, "textColor", void 0);
TrafficSourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-traffic-sources',
        template: __webpack_require__("../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], TrafficSourcesComponent);

var _a;
//# sourceMappingURL=traffic-sources.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"widget source-overview-widget\">\r\n  <md-card-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"name\">{{ options.name }}</span>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </md-card-title>\r\n\r\n  <md-divider></md-divider>\r\n\r\n  <md-card-content>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\r\n\r\n      <div class=\"section\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" *ngFor=\"let chartData of chartDataArray\">\r\n        <div fxFlex=\"100px\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"source\" [style.background-color]=\"chartData[0].color\">\r\n          {{ chartData[0].key }}\r\n        </div>\r\n        <span fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"value\">\r\n          {{ chartData[0].sum | number: '1.0-0' }}\r\n        </span>\r\n        <nvd3 fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" [options]=\"chartOptions\" [data]=\"chartData\"></nvd3>\r\n      </div>\r\n\r\n    </div>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-menu #menu=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\n  color: #333;\n  margin: 12px;\n  width: 100%; }\n  .widget .name {\n    font-size: 22px; }\n  .widget .source {\n    font-size: 16px;\n    color: #FFF;\n    background-color: #000;\n    padding: 5px 0;\n    border-radius: 15px; }\n  .widget .value {\n    color: #555;\n    font-size: 20px;\n    font-weight: 500; }\n  .widget md-card-content {\n    position: relative;\n    height: calc(100% - 57px); }\n  .widget md-card-content > div {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceOverviewWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SourceOverviewWidgetComponent = (function () {
    function SourceOverviewWidgetComponent(nvD3Service) {
        this.d3 = nvD3Service.getD3();
    }
    SourceOverviewWidgetComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 40,
                margin: {
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        return d3.time.format('%a %d.%m.%Y')(new Date(d));
                    }
                },
                interpolate: 'cardinal',
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    return SourceOverviewWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartDataArray'),
    __metadata("design:type", Object)
], SourceOverviewWidgetComponent.prototype, "chartDataArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], SourceOverviewWidgetComponent.prototype, "options", void 0);
SourceOverviewWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-source-overview-widget',
        template: __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], SourceOverviewWidgetComponent);

var _a;
//# sourceMappingURL=source-overview-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"widget\">\r\n  <md-card-title fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <md-icon class=\"icon\">{{ options.icon }}</md-icon>\r\n    <span class=\"name\">{{ options.name }}</span>\r\n    <span fxFlex></span>\r\n    <span class=\"number\">{{ options.number | number: '1.0-0' }}</span>\r\n  </md-card-title>\r\n  <md-card-subtitle>\r\n    <md-icon class=\"arrow\"\r\n             [class.green]=\"options.gain > 0\"\r\n             [class.red]=\"options.gain < 0\">\r\n      {{ options.arrow }}\r\n    </md-icon>\r\n    <span class=\"description\">{{ options.gain }}{{ options.description }}</span>\r\n  </md-card-subtitle>\r\n\r\n  <md-card-content>\r\n    <nvd3 class=\"fill-bg-opacity\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\n  margin: 12px;\n  color: #333; }\n  .widget .icon {\n    vertical-align: middle;\n    color: #7A8B93; }\n  .widget .name {\n    margin-left: 10px;\n    font-size: 18px; }\n  .widget .number {\n    font-size: 30px;\n    font-weight: 300;\n    letter-spacing: 0.05em; }\n  .widget .arrow {\n    width: 22px;\n    height: 22px;\n    font-size: 22px;\n    vertical-align: top; }\n    .widget .arrow.red {\n      color: red; }\n    .widget .arrow.green {\n      color: green; }\n  .widget .description {\n    font-size: 16px; }\n  .widget md-card-title {\n    margin-bottom: 10px; }\n  .widget md-card-subtitle {\n    margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = (function () {
    function WidgetComponent(d3ChartService) {
        this.d3 = d3ChartService.getD3();
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 60,
                margin: {
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        return d3.time.format('%a %d.%m.%Y')(new Date(d));
                    }
                },
                interpolate: 'cardinal',
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    return WidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "options", void 0);
WidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-widget-v1',
        template: __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], WidgetComponent);

var _a;
//# sourceMappingURL=widget-v1.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_widgets_widgets_v1_widget_v1_widget_v1_component__ = __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_widgets_widgets_v1_source_overview_widget_source_overview_widget_component__ = __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_charts_nvD3_nvD3_component__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_widgets_bar_chart_bar_chart_component__ = __webpack_require__("../../../../../src/app/core/widgets/bar-chart/bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_widgets_pie_chart_pie_chart_component__ = __webpack_require__("../../../../../src/app/core/widgets/pie-chart/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_widgets_google_maps_widget_google_maps_widget_component__ = __webpack_require__("../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_widgets_activity_activity_component__ = __webpack_require__("../../../../../src/app/core/widgets/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_widgets_traffic_sources_traffic_sources_component__ = __webpack_require__("../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_loading_overlay_loading_overlay_component__ = __webpack_require__("../../../../../src/app/core/loading-overlay/loading-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_material_components_module__ = __webpack_require__("../../../../../src/app/material/material-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_highlightjs_highlight_module__ = __webpack_require__("../../../../../src/app/core/highlightjs/highlight.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__projects_projects_module__ = __webpack_require__("../../../../../src/app/main/projects/projects.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { LoginComponent } from './custom-pages/login/login.component';





















var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18__app_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_19__material_material_components_module__["a" /* MaterialComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_21__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].googleApi
            }),
            __WEBPACK_IMPORTED_MODULE_24_ngx_quill__["a" /* QuillModule */],
            __WEBPACK_IMPORTED_MODULE_22__core_highlightjs_highlight_module__["a" /* HighlightModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_25__projects_projects_module__["a" /* ProjectsModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_23_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forChild(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__core_widgets_widgets_v1_widget_v1_widget_v1_component__["a" /* WidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_3__core_widgets_widgets_v1_source_overview_widget_source_overview_widget_component__["a" /* SourceOverviewWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_4__core_charts_nvD3_nvD3_component__["a" /* nvD3 */],
            //LoginComponent,
            __WEBPACK_IMPORTED_MODULE_5__core_widgets_bar_chart_bar_chart_component__["a" /* BarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_6__core_widgets_pie_chart_pie_chart_component__["a" /* PieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_7__core_widgets_google_maps_widget_google_maps_widget_component__["a" /* GoogleMapsWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_8__core_widgets_activity_activity_component__["a" /* ActivityComponent */],
            __WEBPACK_IMPORTED_MODULE_9__core_widgets_traffic_sources_traffic_sources_component__["a" /* TrafficSourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__core_loading_overlay_loading_overlay_component__["a" /* LoadingOverlayComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__core_charts_nvD3_nvD3_service__["a" /* D3ChartService */]
        ]
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start\">\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\n    <md-toolbar color=\"primary\">Edit Project</md-toolbar>\n    <md-card-content>\n      <form [formGroup]=\"projForm\" novalidate (ngSubmit)=\"saveProject(projForm.value)\">\n        <div fxLayout fxLayoutWrap>\n          <md-input-container fxFlex=\"50\">\n            <input mdInput\n                   name=\"name\"\n                   placeholder=\"Name\"\n                   required\n                   [(ngModel)]=\"project.name\"\n                   formControlName=\"name\"\n                   [class.invalid]=\"projForm.controls['name'].touched && !projForm.controls['name'].valid\" />\n            <md-hint [hidden]=\"projForm.controls['name'].pristine || projForm.controls['name'].valid\">\n              <span [hidden]=\"!projForm.controls['name'].errors?.required\">Project Name is required.</span>\n            </md-hint>\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"title\"\n                   required\n                   placeholder=\"Title\"\n                   [(ngModel)]=\"project.title\"\n                   formControlName=\"title\"\n                   [class.invalid]=\"projForm.controls['title'].touched && !projForm.controls['title'].valid\" />\n            <md-hint [hidden]=\"projForm.controls['title'].pristine || projForm.controls['title'].valid\">\n              <span [hidden]=\"!projForm.controls['title'].errors?.required\">Project Title is required.</span>\n            </md-hint>\n\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"rootNamespace\"\n                   required\n                   placeholder=\"RootNamespace\"\n                   [(ngModel)]=\"project.rootNamespace\"\n                   formControlName=\"rootNamespace\"\n                   [class.invalid]=\"projForm.controls['rootNamespace'].touched && !projForm.controls['rootNamespace'].valid\" />\n\n            <md-hint [hidden]=\"projForm.controls['rootNamespace'].pristine || projForm.controls['rootNamespace'].valid\">\n              <span [hidden]=\"!projForm.controls['rootNamespace'].errors?.required\">Project Root Namespace is required.</span>\n            </md-hint>\n\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"companyName\"\n                   required\n                   placeholder=\"CompanyName\"\n                   [(ngModel)]=\"project.companyName\"\n                   formControlName=\"companyName\"\n                   [class.invalid]=\"projForm.controls['companyName'].touched && !projForm.controls['companyName'].valid\" />\n\n            <md-hint [hidden]=\"projForm.controls['companyName'].pristine || projForm.controls['companyName'].valid\">\n              <span [hidden]=\"!projForm.controls['companyName'].errors?.required\">Company Name is required.</span>\n            </md-hint>\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"description\"\n                   placeholder=\"Description\"\n                   [(ngModel)]=\"project.description\"\n                   formControlName=\"description\" />\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <label class=\"control-label\">\n             {{ serverErrorMessage}}             \n            </label>\n          </div>\n        </div>\n\n        <div fxLayout=\"column\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button md-raised-button\n                    type=\"button\" (click)=\"cancelChanges($event);\">\n              Cancel\n            </button>\n            <button md-button color=\"primary\"\n                    md-raised-button\n                    style=\"margin-left: 8px;\"\n                    type=\"submit\"\n                    [disabled]=\"!projForm.valid\">\n              Save\n            </button>\n          </div>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n</div>\n\n"

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
            var id = params['id'];
            if (!id)
                return;
            _this.projectsService.getProject(id)
                .subscribe(function (project) {
                _this.project = project;
                _this.projForm.controls['id'].setValue(id);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */]) === "function" && _d || Object])
], EditProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/list-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n    <a class=\"btn-floating btn-large waves-effect waves-light green\"\n       routerLink=\"/projects/new\">\n      <i class=\"material-icons\">add</i>\n    </a>\n  </div>\n\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\" style=\"height: 100%;\">\n    <div fxFlex class=\"table-container mat-elevation-z2\">\n      <div class=\"table-header\" fxLayout=\"row\" [class.table-condensed]=\"tableCondensed\">\n        <div [style.width.px]=\"cellWidths[0]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <span class=\"name\">Name</span>\n        </div>\n        <div [style.width.px]=\"cellWidths[1]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <span class=\"name\">Title</span>\n        </div>\n        <div [style.width.px]=\"cellWidths[2]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <span class=\"name\">Description</span>\n        </div>\n        <div [style.width.px]=\"cellWidths[3]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <span class=\"name\">RootNamespace</span>\n        </div>\n        <div [style.width.px]=\"cellWidths[4]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <span class=\"name\">CompanyName</span>\n        </div>\n        <div [style.width.px]=\"cellWidths[5]\"></div>\n        <div [style.width.px]=\"cellWidths[6]\"></div>\n        <div [style.width.px]=\"cellWidths[7]\"></div>\n      </div>\n\n      <div class=\"table-content\">\n        <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\n          <tbody #tbody>\n            <tr *ngFor=\"let project of projects\">\n              <td>{{ project.name }}</td>\n              <td>{{ project.title }}</td>\n              <td>{{ project.description }}</td>\n              <td>{{ project.rootNamespace }}</td>\n              <td>{{ project.companyName }}</td>            \n\n              <td><button md-icon-button (click)=\"viewProject(project.id);\"><md-icon>pageview</md-icon></button></td>\n              <td><button md-icon-button (click)=\"editProject(project.id);\"><md-icon>edit</md-icon></button></td>\n              <td><button md-icon-button (click)=\"deleteProject(project.id);\"><md-icon>delete</md-icon></button></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

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
        this.cellWidths = [];
        this.tableHover = true;
        this.tableStriped = true;
        this.tableCondensed = true;
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
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["a" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_projects_service__["a" /* ProjectsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdDialog */]) === "function" && _d || Object])
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
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */]) === "function" && _e || Object])
], DemoDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=list-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/new-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start\">\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\n    <md-toolbar color=\"primary\">Add Project</md-toolbar>\n    <md-card-content>\n      <form [formGroup]=\"projForm\" novalidate (ngSubmit)=\"saveProject(projForm.value)\">\n        <div fxLayout fxLayoutWrap>\n          <md-input-container fxFlex=\"50\">\n            <input mdInput\n                   name=\"name\"\n                   placeholder=\"Name\"\n                   required\n                   [(ngModel)]=\"project.name\"\n                   formControlName=\"name\"\n                   [class.invalid]=\"projForm.controls['name'].touched && !projForm.controls['name'].valid\" />\n            <md-hint [hidden]=\"projForm.controls['name'].pristine || projForm.controls['name'].valid\">\n              <span [hidden]=\"!projForm.controls['name'].errors?.required\">Project Name is required.</span>\n            </md-hint>\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"title\"\n                   required\n                   placeholder=\"Title\"\n                   [(ngModel)]=\"project.title\"\n                   formControlName=\"title\"\n                   [class.invalid]=\"projForm.controls['title'].touched && !projForm.controls['title'].valid\" />\n            <md-hint [hidden]=\"projForm.controls['title'].pristine || projForm.controls['title'].valid\">\n              <span [hidden]=\"!projForm.controls['title'].errors?.required\">Project Title is required.</span>\n            </md-hint>\n\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"rootNamespace\"\n                   required\n                   placeholder=\"RootNamespace\"\n                   [(ngModel)]=\"project.rootNamespace\"\n                   formControlName=\"rootNamespace\"\n                   [class.invalid]=\"projForm.controls['rootNamespace'].touched && !projForm.controls['rootNamespace'].valid\" />\n\n            <md-hint [hidden]=\"projForm.controls['rootNamespace'].pristine || projForm.controls['rootNamespace'].valid\">\n              <span [hidden]=\"!projForm.controls['rootNamespace'].errors?.required\">Project Root Namespace is required.</span>\n            </md-hint>\n\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"companyName\"\n                   required\n                   placeholder=\"CompanyName\"\n                   [(ngModel)]=\"project.companyName\"\n                   formControlName=\"companyName\"\n                   [class.invalid]=\"projForm.controls['companyName'].touched && !projForm.controls['companyName'].valid\" />\n\n            <md-hint [hidden]=\"projForm.controls['companyName'].pristine || projForm.controls['companyName'].valid\">\n              <span [hidden]=\"!projForm.controls['companyName'].errors?.required\">Company Name is required.</span>\n            </md-hint>\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"description\"\n                   placeholder=\"Description\"\n                   [(ngModel)]=\"project.description\"\n                   formControlName=\"description\" />\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\" *ngIf=\"serverErrorMessage\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <label class=\"control-label\">\n              {{ serverErrorMessage}}\n            </label>\n          </div>\n        </div>\n\n        <div fxLayout=\"column\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button md-raised-button\n                    type=\"button\" (click)=\"cancelChanges($event);\">\n              Cancel\n            </button>\n            <button md-button color=\"primary\"\n                    md-raised-button\n                    style=\"margin-left: 8px;\"\n                    type=\"submit\"\n                    [disabled]=\"!projForm.valid\">\n              Save\n            </button>\n          </div>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n</div>\n\n"

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
            var id = params['id'];
            if (id)
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_projects_service__["a" /* ProjectsService */]) === "function" && _d || Object])
], NewProjectComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_project_component__ = __webpack_require__("../../../../../src/app/main/projects/list-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_project_component__ = __webpack_require__("../../../../../src/app/main/projects/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_project_component__ = __webpack_require__("../../../../../src/app/main/projects/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_project_component__ = __webpack_require__("../../../../../src/app/main/projects/view-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_projects_service__ = __webpack_require__("../../../../../src/app/main/projects/shared/projects.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    return ProjectsModule;
}());
ProjectsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__list_project_component__["a" /* ListProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_7__list_project_component__["b" /* DemoDialog */],
            __WEBPACK_IMPORTED_MODULE_8__new_project_component__["a" /* NewProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_9__edit_project_component__["a" /* EditProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_10__view_project_component__["a" /* ViewProjectComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__list_project_component__["b" /* DemoDialog */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__list_project_component__["a" /* ListProjectComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__shared_projects_service__["a" /* ProjectsService */]
        ]
    })
], ProjectsModule);

//# sourceMappingURL=projects.module.js.map

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

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start\">\n  <md-card style=\"padding: 16px;\" fxFlex=\"90%\">\n    <md-toolbar color=\"primary\">View Project</md-toolbar>\n    <md-card-content>\n      <form>\n        <div fxLayout fxLayoutWrap>\n          <md-input-container fxFlex=\"50\">\n            <input mdInput\n                   name=\"name\"\n                   [disabled]=\"true\"\n                   [(ngModel)]=\"project.name\" />\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"title\"\n                   [disabled]=\"true\"\n                   [(ngModel)]=\"project.title\" />\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"rootNamespace\"\n                   [disabled]=\"true\"\n                   [(ngModel)]=\"project.rootNamespace\" />\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"companyName\"\n                   [disabled]=\"true\"\n                   [(ngModel)]=\"project.companyName\" />\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <md-input-container>\n            <input mdInput\n                   name=\"description\"\n                   [disabled]=\"true\"\n                   [(ngModel)]=\"project.description\" />\n          </md-input-container>\n        </div>\n\n        <div fxLayout=\"column\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <button md-raised-button\n                    type=\"button\" (click)=\"cancelChanges($event);\">\n              Go Back\n            </button>\n          </div>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n</div>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_project__ = __webpack_require__("../../../../../src/app/main/projects/shared/project.ts");
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
    function ViewProjectComponent(router, route, projectsService) {
        this.router = router;
        this.route = route;
        this.projectsService = projectsService;
        this.project = new __WEBPACK_IMPORTED_MODULE_3__shared_project__["a" /* Project */]();
    }
    ViewProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (!id)
                return;
            _this.projectsService.getProject(id)
                .subscribe(function (project) {
                _this.project = project;
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    ViewProjectComponent.prototype.cancelChanges = function (e) {
        this.router.navigateByUrl('/projects');
    };
    return ViewProjectComponent;
}());
ViewProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-view-project',
        template: __webpack_require__("../../../../../src/app/main/projects/view-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/projects/view-project.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_projects_service__["a" /* ProjectsService */]) === "function" && _c || Object])
], ViewProjectComponent);

var _a, _b, _c;
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
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MdSelectModule */]
        ]
    })
], MaterialComponentsModule);

//# sourceMappingURL=material-components.module.js.map

/***/ }),

/***/ "../../../../../src/app/route.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeAnimation; });
/* unused harmony export fadeInAnimation */

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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
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
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map