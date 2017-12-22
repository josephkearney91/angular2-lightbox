webpackJsonp(["main"],{

/***/ "../../../../../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../demo/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var angular2_lightbox_1 = __webpack_require__("../../../../angular2-lightbox/index.js");
var AppComponent = (function () {
    function AppComponent(_lightbox, _lightboxEvent, _lighboxConfig) {
        this._lightbox = _lightbox;
        this._lightboxEvent = _lightboxEvent;
        this._lighboxConfig = _lighboxConfig;
        this.albums = [];
        this._options = {};
        for (var i = 1; i <= 4; i++) {
            var src = 'demo/img/image' + i + '.jpg';
            var caption = 'Image ' + i + ' caption here';
            var thumb = 'demo/img/image' + i + '-thumb.jpg';
            var album = {
                src: src,
                caption: caption,
                thumb: thumb
            };
            this.albums.push(album);
        }
        // set default config
        _lighboxConfig.fadeDuration = 1;
    }
    AppComponent.prototype.open = function (index) {
        var _this = this;
        this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) { return _this._onReceivedEvent(event); });
        // override the default config
        this._lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
    };
    AppComponent.prototype._onReceivedEvent = function (event) {
        if (event.id === angular2_lightbox_1.LIGHTBOX_EVENT.CLOSE) {
            this._subscription.unsubscribe();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo',
            template: "\n    <div class=\"column has-text-centered\">\n      <div class=\"img-row\" *ngFor=\"let image of albums; let i=index\">\n        <img class=\"img-frame\" [src]=\"image.thumb\" (click)=\"open(i)\"/>\n      </div>\n    </div>\n  ",
            host: {
                class: 'columns'
            }
        }),
        __metadata("design:paramtypes", [angular2_lightbox_1.Lightbox,
            angular2_lightbox_1.LightboxEvent,
            angular2_lightbox_1.LightboxConfig])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../demo/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var app_component_1 = __webpack_require__("../../../../../demo/app.component.ts");
var angular2_lightbox_1 = __webpack_require__("../../../../angular2-lightbox/index.js");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, angular2_lightbox_1.LightboxModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../demo/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = __webpack_require__("../../../../../demo/app.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../demo/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map