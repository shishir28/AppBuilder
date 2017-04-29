webpackJsonp([1,4],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__(60);
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

/***/ 131:
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
    return SidenavItem;
}());

//# sourceMappingURL=sidenav-item.model.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
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
        selector: 'app-forgot-password',
        template: __webpack_require__(322),
        styles: [__webpack_require__(296)],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ForgotPasswordComponent);

var _a;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_screenfull__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_screenfull__);
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
    function HomeComponent(media, router) {
        this.media = media;
        this.router = router;
        this.sidenavOpen = false;
        this.sidenavMode = 'side';
        this.isMobile = false;
        this.quickpanelOpen = false;
        this.isFullscreen = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.media.asObservable().subscribe(function (change) {
            var isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.isMobile = isMobile;
            _this.sidenavMode = (isMobile) ? 'over' : 'side';
            _this.sidenavOpen = !isMobile;
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */] && _this.isMobile) {
                _this.sidenav.close();
            }
        });
    };
    HomeComponent.prototype.toggleFullscreen = function () {
        if (__WEBPACK_IMPORTED_MODULE_3_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_3_screenfull__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
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
        selector: 'app-home',
        template: __webpack_require__(323),
        styles: [__webpack_require__(297)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__(86);
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
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['/']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(324),
        styles: [__webpack_require__(298)],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
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
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.router.navigate(['/']);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(325),
        styles: [__webpack_require__(299)],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 201;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(229);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import {DashboardV1Component} from "./demo/custom-pages/dashboard-v1/dashboard-v1.component";
//import {AdminComponent} from "./core/admin/admin.component";
//import {ButtonsComponent} from "./demo/components/buttons/buttons.component";
//import {CardsComponent} from "./demo/components/cards/cards.component";
//import {DialogsComponent} from "./demo/components/dialogs/dialogs.component";
//import {GridListComponent} from "./demo/components/grid-list/grid-list.component";
//import {ListsComponent} from "./demo/components/lists/lists.component";
//import {MenuComponent} from "./demo/components/menu/menu.component";
//import {SliderComponent} from "./demo/components/slider/slider.component";
//import {SnackBarComponent} from "./demo/components/snack-bar/snack-bar.component";
//import {TooltipComponent} from "./demo/components/tooltip/tooltip.component";
//import {DynamicMenuComponent} from "./demo/dynamic-menu/dynamic-menu.component";
//import {FormElementsComponent} from "./demo/forms/form-elements/form-elements.component";
//import {FormWizardComponent} from "./demo/forms/form-wizard/form-wizard.component";
//import {IconsComponent} from "./demo/icons/icons.component";
//import {Level5Component} from "./demo/levels/level5/level5.component";
//import {GoogleMapsComponent} from "./demo/maps/google-maps/google-maps.component";
//import {SimpleTableComponent} from "./demo/tables/simple-table/simple-table.component";
//import {FixedHeaderTableComponent} from "./demo/tables/fixed-header-table/fixed-header-table.component";
//import {RegisterComponent} from "./demo/custom-pages/register/register.component";
//import {ForgotPasswordComponent} from "./demo/custom-pages/forgot-password/forgot-password.component";
//import {EditorComponent} from "./demo/editor/editor.component";
//import {DashboardComponent} from "./demo/dashboard/dashboard.component";
//import {DragAndDropComponent} from "./demo/drag-and-drop/drag-and-drop.component";
//import {InboxComponent} from "./demo/apps/inbox/inbox.component";
//import {CalendarComponent} from "./demo/apps/calendar/calendar.component";
//import {ChatComponent} from "./demo/apps/chat/chat.component";
//import {AutocompleteComponent} from "./demo/components/autocomplete/autocomplete.component";
var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: []
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_mediareplay_media_replay_service__ = __webpack_require__(130);
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
        template: __webpack_require__(318),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_sidenav_sidenav_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_sidenav_item_sidenav_item_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_sidenav_sidenav_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_sidenav_icon_sidenav_directive__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_breadcrumb_breadcrumb_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_breadcrumb_breadcrumb_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_perfect_scrollbar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_mediareplay_media_replay_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__forgot_password_forgot_password_component__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { DashboardV1Component } from './demo/custom-pages/dashboard-v1/dashboard-v1.component';
//import { ButtonsComponent } from './demo/components/buttons/buttons.component';
//import { HighlightModule } from "./core/highlightjs/highlight.module";
//import { FormElementsComponent } from './demo/forms/form-elements/form-elements.component';
//import { SearchComponent } from './core/search/search.component';


//import { ListsComponent } from './demo/components/lists/lists.component';
//import { WidgetComponent } from './core/widgets-v1/widget-v1/widget-v1.component';
//import { D3ChartService } from "./core/nvD3/nvD3.service";
//import { nvD3 } from "./core/nvD3/nvD3.component";
//import { LineChartWidgetComponent } from './core/widgets-v1/line-chart-widget/line-chart-widget.component';
//import { SourceOverviewWidgetComponent } from './core/widgets-v1/source-overview-widget/source-overview-widget.component';
//import { SimpleTableComponent } from './demo/tables/simple-table/simple-table.component';
//import { FixedHeaderTableComponent } from './demo/tables/fixed-header-table/fixed-header-table.component';
//import { FormWizardComponent } from './demo/forms/form-wizard/form-wizard.component';
//import { GoogleMapsComponent } from './demo/maps/google-maps/google-maps.component';
//import { CardsComponent } from './demo/components/cards/cards.component';
//import { DialogsComponent, DemoDialog } from './demo/components/dialogs/dialogs.component';
//import { IconsComponent } from './demo/icons/icons.component';
//import { GridListComponent } from './demo/components/grid-list/grid-list.component';
//import { MenuComponent } from './demo/components/menu/menu.component';
//import { SliderComponent } from './demo/components/slider/slider.component';
//import { SnackBarComponent } from './demo/components/snack-bar/snack-bar.component';
//import { TooltipComponent } from './demo/components/tooltip/tooltip.component';
//import { DynamicMenuComponent } from './demo/dynamic-menu/dynamic-menu.component';
//import { environment } from "../environments/environment";
//import { Level5Component } from './demo/levels/level5/level5.component';
//import { DynamicMenuService } from "./demo/dynamic-menu/dynamic-menu.service";
//import { AdminComponent } from './core/admin/admin.component';
//import { RegisterComponent } from './demo/custom-pages/register/register.component';
//import { ForgotPasswordComponent } from './demo/custom-pages/forgot-password/forgot-password.component';
//import { QuillModule } from 'ngx-quill';
//import { EditorComponent } from './demo/editor/editor.component';
//import { QuickpanelComponent } from './core/quickpanel/quickpanel.component';
//import { DashboardComponent } from './demo/dashboard/dashboard.component';
//import { BarChartComponent } from './core/widgets/bar-chart/bar-chart.component';
//import { LineChartComponent } from './core/widgets/line-chart/line-chart.component';
//import { RecentSalesComponent } from './core/widgets/recent-sales/recent-sales.component';
//import { PieChartComponent } from './core/widgets/pie-chart/pie-chart.component';
//import { GoogleMapsWidgetComponent } from './core/widgets/google-maps-widget/google-maps-widget.component';
//import { ActivityComponent } from './core/widgets/activity/activity.component';
//import { TrafficSourcesComponent } from './core/widgets/traffic-sources/traffic-sources.component';
//import { LoadingOverlayComponent } from './core/loading-overlay/loading-overlay.component';
//import { SortablejsModule, SortablejsOptions } from "angular-sortablejs";
//import { DragAndDropComponent } from './demo/drag-and-drop/drag-and-drop.component';
//import { InboxComponent } from './demo/apps/inbox/inbox.component';
//import { MailService } from "./demo/apps/inbox/mail.service";
//import { InboxComposeComponent } from './demo/apps/inbox/inbox-compose/inbox-compose.component';
//import { CalendarModule } from "angular-calendar";
//import { CalendarComponent } from './demo/apps/calendar/calendar.component';
//import { CalendarEditComponent } from './demo/apps/calendar/calendar-edit/calendar-edit.component';
//import { ChatComponent } from './demo/apps/chat/chat.component';

//import { AutocompleteComponent } from './demo/components/autocomplete/autocomplete.component';

//import { AgmCoreModule } from "@agm/core";






var perfectScrollbarConfig = {
    suppressScrollX: true,
    swipePropagation: false
};
//const sortablejsConfig: SortablejsOptions = {
//    animation: 300
//};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__core_sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__core_sidenav_item_sidenav_item_component__["a" /* SidenavItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__core_sidenav_icon_sidenav_directive__["a" /* IconSidenavDirective */],
            //DashboardV1Component,
            //ButtonsComponent,
            //FormElementsComponent,
            //SearchComponent,
            __WEBPACK_IMPORTED_MODULE_12__core_breadcrumb_breadcrumb_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
        ],
        entryComponents: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(perfectScrollbarConfig),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__core_sidenav_sidenav_service__["a" /* SidenavService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_13__core_breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */],
            //DynamicMenuService,
            //D3ChartService,
            //MailService,
            __WEBPACK_IMPORTED_MODULE_18__core_mediareplay_media_replay_service__["a" /* MediaReplayService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__(85);
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
        template: __webpack_require__(319),
        styles: [__webpack_require__(293)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _b || Object])
], BreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_item_model__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__ = __webpack_require__(61);
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
        template: __webpack_require__(320),
        styles: [__webpack_require__(294)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sidenav_sidenav_service__["a" /* SidenavService */]) === "function" && _b || Object])
], SidenavItemComponent);

var _a, _b;
//# sourceMappingURL=sidenav-item.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__(60);
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
    function IconSidenavDirective(sidenavService, media) {
        this.sidenavService = sidenavService;
        this.media = media;
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
        this._mediaSubscription = this.media.asObservable().subscribe(function (change) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _b || Object])
], IconSidenavDirective);

var _a, _b;
//# sourceMappingURL=icon-sidenav.directive.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(129);
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
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationEnd */]) {
                _this.sidenavService.nextCurrentlyOpenByRoute(event.url);
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 400);
            }
        });
        //this.breadcrumbService.addFriendlyNameForRoute('/', "Dashboard");
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
        //this.breadcrumbService.addFriendlyNameForRoute('/forms', "Forms");
        //this.breadcrumbService.addFriendlyNameForRoute('/forms/form-elements', "Form Elements");
        //this.breadcrumbService.addFriendlyNameForRoute('/forms/form-wizard', "Form Wizard");
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
        if (this.sidenavService.isIconSidenav) {
            this.snackBar.open('You activated Icon-Sidenav, move your mouse to the content and see what happens!', '', {
                duration: 10000
            });
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
        template: __webpack_require__(321),
        styles: [__webpack_require__(295)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdSnackBar */]) === "function" && _d || Object])
], SidenavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".breadcrumbs {\n  margin: 0;\n  padding: 0 16px;\n  list-style: none; }\n  .breadcrumbs li {\n    line-height: 64px; }\n    .breadcrumbs li md-icon {\n      margin: 0 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nmd-nav-list a.sidenav-anchor.mat-list-item .mat-list-item-content {\n  padding-left: 24px;\n  padding-right: 24px; }\n\nmd-nav-list a.sidenav-anchor .sidenav-item-name {\n  margin-left: 24px;\n  font-size: 14px; }\n\nmd-nav-list a.sidenav-anchor md-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px; }\n\n.sidenav-list {\n  transition: height 0.4s cubic-bezier(0.35, 0, 0.25, 1); }\n  .sidenav-list > ms-sidenav-item.open > .sidenav-anchor .sidenav-item-dropdown-indicator {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .sidenav-list > ms-sidenav-item .sidenav-item-dropdown-indicator {\n    transition: -webkit-transform .25s;\n    transition: transform .25s;\n    transition: transform .25s, -webkit-transform .25s; }\n  .sidenav-list > ms-sidenav-item .badge {\n    padding: 4px 8px;\n    font-size: 12px;\n    background: #2196F3;\n    border-radius: 5px;\n    color: #FFF; }\n\n.sidenav-toplevel .sidenav-anchor {\n  position: relative;\n  cursor: pointer;\n  color: #A7A9AE;\n  transition: color .1s; }\n  .sidenav-toplevel .sidenav-anchor:hover {\n    color: #FFFFFF; }\n  .sidenav-toplevel .sidenav-anchor.active {\n    color: #FFFFFF; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor:hover {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor.active {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n  background: #262a34; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n    background: #22262f; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n    background: #22262f; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n    background: #20242c; }\n    .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n      padding-left: 10px; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n        background: #1d2028; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n        background: #1d2028; }\n    .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n      background: #1b1e25; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n        padding-left: 20px; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n          background: #181a20; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n          background: #181a20; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n        background: #16181e; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n          padding-left: 30px; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n            background: #121419; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n            background: #121419; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n          background: #101216; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #0d0e12; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #0d0e12; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #08080a; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #08080a; }\n\n.sidenav-toplevel .sidenav-item .sidenav-list-nested {\n  position: relative;\n  padding: 0;\n  overflow: hidden; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:before, .sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    content: \" \";\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    z-index: 3; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:before {\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    top: 0; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "md-toolbar.mat-toolbar.sidenav-toolbar {\n  background: #272B35;\n  padding: 0 14px 0 24px;\n  z-index: 3; }\n\n.sidenav-container, .sidenav-scrollbar-container {\n  height: 100%; }\n\n.cdk-focus-trap-content, md-sidenav {\n  overflow-y: hidden !important;\n  overflow-x: hidden; }\n\n.icon-sidenav-toggle {\n  color: #A7A9AE;\n  transition: -webkit-transform .25s;\n  transition: transform .25s;\n  transition: transform .25s, -webkit-transform .25s; }\n  .icon-sidenav-toggle.rotate {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.forgot {\n  background: white;\n  width: 380px; }\n  .forgot .forgot-header {\n    background: #2B303B;\n    padding: 24px; }\n  .forgot .forgot-content {\n    padding: 24px 42px 42px; }\n    .forgot .forgot-content md-input-container {\n      width: 100%;\n      margin: 6px 0 18px; }\n    .forgot .forgot-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .forgot .forgot-content a:hover {\n        text-decoration: underline; }\n    .forgot .forgot-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.main-toolbar {\n  background: #ffffff;\n  position: relative;\n  overflow-x: hidden;\n  z-index: 4;\n  padding-right: 0; }\n  .main-toolbar .user-button {\n    height: 100%;\n    border-radius: 0; }\n    .main-toolbar .user-button md-icon {\n      font-size: 16px;\n      width: 16px;\n      height: 16px; }\n  .main-toolbar button.fullscreen-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 50px;\n    max-width: 50px;\n    height: 100%; }\n  .main-toolbar button.quickpanel-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 75px;\n    max-width: 75px;\n    height: 100%; }\n\n.mat-sidenav.quickpanel {\n  z-index: 100;\n  width: 330px;\n  min-width: 330px;\n  max-width: 330px; }\n\n@media screen and (max-width: 959px) {\n  .mat-sidenav.quickpanel {\n    width: 250px;\n    min-width: 250px;\n    max-width: 250px; }\n  button.user-button {\n    min-width: 72px; } }\n\n@media screen and (min-width: 960px) {\n  .mat-sidenav-backdrop {\n    z-index: 50 !important; } }\n\n.sidenav {\n  width: 250px;\n  max-width: 250px;\n  background: #2B303B;\n  overflow-x: hidden;\n  z-index: 4; }\n\n.main-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100% - 64px);\n  position: relative; }\n\n@media screen and (min-width: 960px) {\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: max-width, margin-left, margin-right, -webkit-transform !important;\n    transition-property: transform, max-width, margin-left, margin-right !important;\n    transition-property: transform, max-width, margin-left, margin-right, -webkit-transform !important;\n    margin-left: 0 !important;\n    background: #EEE;\n    z-index: 5;\n    overflow: hidden;\n    box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.4); }\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 250px);\n    -webkit-transform: translate3d(250px, 0, 0) !important;\n            transform: translate3d(250px, 0, 0) !important; }\n  .sidenav.icon-sidenav.collapsed + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav.collapsed + .mat-sidenav-content {\n    max-width: calc(100% - 68px);\n    -webkit-transform: translate3d(68px, 0, 0) !important;\n            transform: translate3d(68px, 0, 0) !important; }\n  .sidenav.icon-sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 68px); }\n  .sidenav.collapsed .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout; }\n  .sidenav:not(.collapsed) .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.login {\n  background: white;\n  width: 380px; }\n  .login .login-header {\n    background: #2B303B;\n    padding: 24px; }\n  .login .login-content {\n    padding: 24px 42px 42px; }\n    .login .login-content md-input-container {\n      width: 100%;\n      margin: 6px 0; }\n    .login .login-content .extra-options {\n      margin: 16px 0 32px; }\n      .login .login-content .extra-options .remember-me {\n        color: #777; }\n    .login .login-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .login .login-content a:hover {\n        text-decoration: underline; }\n    .login .login-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.register {\n  background: white;\n  width: 380px; }\n  .register .register-header {\n    background: #2B303B;\n    padding: 24px; }\n  .register .register-content {\n    padding: 24px 42px 42px; }\n    .register .register-content md-input-container {\n      width: 100%;\n      margin: 6px 0; }\n    .register .register-content .extra-options {\n      margin: 16px 0 32px; }\n      .register .register-content .extra-options .remember-me {\n        color: #777; }\n    .register .register-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .register .register-content a:hover {\n        text-decoration: underline; }\n    .register .register-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumbs\" fxLayout=\"row\">\r\n  <li *ngFor=\"let url of urls; let last = last; let first = first\" [ngClass]=\"{'active': last}\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> <!-- disable link of last item -->\r\n    <md-icon *ngIf=\"!first\">keyboard_arrow_right</md-icon>\r\n    <a role=\"button\" *ngIf=\"!last && url == prefix\">{{url}}</a>\r\n    <a role=\"button\" *ngIf=\"!last && url != prefix\">{{friendlyName(url)}}</a>\r\n    <span *ngIf=\"last\">{{friendlyName(url)}}</span>\r\n    <span *ngIf=\"last && url == prefix\">{{friendlyName('/')}}</span>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<a class=\"sidenav-anchor\"\r\n   *ngIf=\"!item.hasSubItems()\"\r\n   md-list-item md-ripple\r\n   [routerLink]=\"[item.route]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\r\n  <md-icon>{{ item.icon }}</md-icon>\r\n  <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n  <span fxFlex><!-- fill space --></span>\r\n  <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\">{{ item.badge }}</span>\r\n</a>\r\n\r\n<a class=\"sidenav-anchor\"\r\n   *ngIf=\"item.hasSubItems()\"\r\n   md-list-item md-ripple\r\n   (click)=\"toggleDropdown()\">\r\n\r\n  <md-icon>{{ item.icon }}</md-icon>\r\n  <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n  <span fxFlex><!-- fill space --></span>\r\n  <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\" style=\"margin-right: 12px;\">{{ item.badge }}</span>\r\n  <md-icon *ngIf=\"item.hasSubItems()\" class=\"sidenav-item-dropdown-indicator rotate fade-in-on-icon-sidenav\">expand_more</md-icon>\r\n\r\n</a>\r\n\r\n<md-nav-list class=\"sidenav-list sidenav-list-nested\"\r\n     fxLayout=\"column\" [style.height]=\"getSubItemsHeight()\">\r\n  <ms-sidenav-item *ngFor=\"let subItem of item.subItems\" [item]=\"subItem\"></ms-sidenav-item>\r\n</md-nav-list>\r\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-container\" fxLayout=\"column\">\r\n\r\n  <md-toolbar color=\"primary\" class=\"sidenav-toolbar mat-elevation-z2\">\r\n    <div fxLayout=\"row\" style=\"width: 100%;\">\r\n      <span style=\"width: 22px; text-align: center; margin-left: -3px;\" fxFlexAlign=\"center\"><img src=\"assets/img/icon.png\" style=\"width: 25px; vertical-align: text-top;\"></span>\r\n      <img style=\"height: 35px; margin-left: 24px; margin-bottom: -5px;\" src=\"assets/img/logo.png\" fxFlexAlign=\"center\" class=\"fade-in-on-icon-sidenav\">\r\n      <span fxFlex><!-- fill space --></span>\r\n      <div fxHide=\"true\" fxHide.gt-sm=\"false\" fxFlexAlign=\"center\">\r\n        <button md-icon-button (click)=\"toggleIconSidenav()\">\r\n          <md-icon class=\"icon-sidenav-toggle fade-in-on-icon-sidenav\" [class.rotate]=\"isIconSidenav()\">chevron_left</md-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </md-toolbar>\r\n\r\n  <div class=\"sidenav-scrollbar-container\" fxLayout=\"column\">\r\n      <md-nav-list [perfect-scrollbar] fxLayout=\"column\" class=\"sidenav-list sidenav-toplevel\">\r\n        <ms-sidenav-item *ngFor=\"let item of items\" [item]=\"item\"></ms-sidenav-item>\r\n      </md-nav-list>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"forgot mat-elevation-z12\">\r\n    <div class=\"forgot-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"send()\">\r\n      <div class=\"forgot-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n        </md-input-container>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">RECOVER PASSWORD</button>\r\n        <p class=\"note\"><a [routerLink]=\"['/login']\">Back to login</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n\r\n  <md-sidenav class=\"quickpanel\" [opened]=\"quickpanelOpen\" align=\"end\" mode=\"over\" #quickpanel>\r\n\r\n    <!--<ms-quickpanel></ms-quickpanel>-->\r\n\r\n  </md-sidenav>\r\n\r\n  <md-sidenav class=\"sidenav\" [opened]=\"sidenavOpen\" align=\"start\" [mode]=\"sidenavMode\" msIconSidenav #sidenav>\r\n\r\n    <ms-sidenav></ms-sidenav>\r\n\r\n  </md-sidenav>\r\n\r\n  <md-toolbar class=\"main-toolbar mat-elevation-z2\">\r\n    <div fxHide=\"false\" fxHide.gt-sm>\r\n      <button (click)=\"sidenav.open()\" md-icon-button>\r\n        <md-icon>menu</md-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <ms-breadcrumbs fxHide=\"true\" fxHide.gt-sm=\"false\"></ms-breadcrumbs>\r\n\r\n    <span fxFlex></span>\r\n\r\n    <button fxHide=\"true\" fxHide.gt-sm=\"false\" md-button class=\"fullscreen-toggle\" (click)=\"toggleFullscreen()\">\r\n      <md-icon *ngIf=\"!isFullscreen\">fullscreen</md-icon>\r\n      <md-icon *ngIf=\"isFullscreen\">fullscreen_exit</md-icon>\r\n    </button>\r\n\r\n    <!--<ms-search></ms-search>-->\r\n\r\n    <button class=\"user-button\" md-button [mdMenuTriggerFor]=\"menu\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <img src=\"assets/img/avatars/noavatar.png\" class=\"avatar-flex\" />\r\n        <span fxHide=\"true\" fxHide.gt-sm=\"false\" style=\"font-weight: 500; margin-left: 5px;\">Shishir Mishra</span>\r\n        <md-icon fxHide=\"true\" fxHide.gt-sm=\"false\">keyboard_arrow_down</md-icon>\r\n      </div>\r\n    </button> \r\n\r\n\r\n    <button md-button class=\"quickpanel-toggle\" (click)=\"quickpanel.open()\">\r\n      <md-icon>format_align_right</md-icon>\r\n    </button>\r\n\r\n\r\n    <md-menu class=\"user-menu\" x-position=\"before\" y-position=\"below\" #menu=\"mdMenu\">\r\n      <button md-menu-item>\r\n        <md-icon>account_circle</md-icon>\r\n        <span>Profile</span>\r\n      </button>\r\n      <button md-menu-item>\r\n        <md-icon>settings</md-icon>\r\n        <span>Settings</span>\r\n      </button>\r\n      <button md-menu-item>\r\n        <md-icon>help</md-icon>\r\n        <span>Help</span>\r\n      </button>\r\n      <md-divider></md-divider>\r\n      <button [routerLink]=\"['/login']\" md-menu-item>\r\n        <md-icon>exit_to_app</md-icon>\r\n        <span>Logout</span>\r\n      </button>\r\n    </md-menu>\r\n  </md-toolbar>\r\n\r\n  <div class=\"main-container\" #scrollContainer>\r\n    <router-outlet (activate)=\"onActivate($event, scrollContainer)\"></router-outlet>\r\n  </div>\r\n\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"login mat-elevation-z12\">\r\n    <div class=\"login-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"login()\">\r\n      <div class=\"login-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n        </md-input-container>\r\n        <div class=\"extra-options\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <md-checkbox class=\"remember-me\">Remember Me</md-checkbox>\r\n          <a class=\"forgot-password\" [routerLink]=\"['/forgot-password']\">Forgot Password?</a>\r\n        </div>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">SIGN IN</button>\r\n        <p class=\"note\">Don't have an account?<br /> <a [routerLink]=\"['/register']\">Click here to create one</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"register mat-elevation-z12\">\r\n    <div class=\"register-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"register()\">\r\n      <div class=\"register-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"Name\" type=\"text\" name=\"name\" required [(ngModel)]=\"name\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"Password (Confirm)\" type=\"password\" name=\"password-confirm\" required [(ngModel)]=\"passwordConfirm\">\r\n        </md-input-container>\r\n        <div class=\"extra-options\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <md-checkbox class=\"remember-me\">I accept the <a href=\"#\">terms and conditions.</a></md-checkbox>\r\n        </div>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">CREATE ACCOUNT</button>\r\n        <p class=\"note\">Already have an account?<br /> <a [routerLink]=\"['/login']\">Sign in here</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(202);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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
    function SidenavService() {
        this._itemsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._items = [];
        this.items$ = this._itemsSubject.asObservable();
        this._currentlyOpenSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._currentlyOpen = [];
        this.currentlyOpen$ = this._currentlyOpenSubject.asObservable();
        var menu = this;
        //let dashboard = menu.addItem('Dashboard', 'dashboard', '/', 1);
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
        //let forms = menu.addItem('Forms', 'insert_comment', null, 4);
        //menu.addSubItem(forms, 'Form Elements', '/forms/form-elements', 1);
        //menu.addSubItem(forms, 'Form Wizard', '/forms/form-wizard', 1);
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
        //let dynamicMenu = menu.addItem('Dynamic Menu', 'extension', '/dynamic-menu', 11);
        //let multiLevel = menu.addItem('Multi-Level Menu', 'menu', null, 12);
        //let level1 = menu.addSubItem(multiLevel, 'Level 1', '/level1', 1);
        //let level2 = menu.addSubItem(level1, 'Level 2', '/level1/level2', 2);
        //let level3 = menu.addSubItem(level2, 'Level 3', '/level1/level2/level3', 3);
        //let level4 = menu.addSubItem(level3, 'Level 4', '/level1/level2/level3/level4', 4);
        //let level5 = menu.addSubItem(level4, 'Level 5', '/level1/level2/level3/level4/level5', 5);
    }
    SidenavService.prototype.addItem = function (name, icon, route, position, badge, badgeColor) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__["a" /* SidenavItem */]({
            name: name,
            icon: icon,
            route: route,
            subItems: [],
            position: position || 99,
            badge: badge || null,
            badgeColor: badgeColor || null
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
    return SidenavService;
}());
SidenavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SidenavService);

//# sourceMappingURL=sidenav.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(79);
/* unused harmony export routeAnimation */
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

/***/ })

},[578]);
//# sourceMappingURL=main.bundle.js.map