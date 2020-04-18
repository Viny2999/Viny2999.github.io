(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["telefones-telefones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/telefones/telefones.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/telefones/telefones.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Telefones</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-title size=\"small\">{{endereco}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let info of telefones\">\n    <ion-item>\n      <ion-label>{{info.telefone}}</ion-label>\n      <ion-button (click)=\"go(info)\">Ligar</ion-button>\n    </ion-item>\n  \n    <ion-card-content>\n      Última Vez Contatado: {{info.ultimaVezConsultado}} \n\n      <ion-icon name=\"create-outline\" style=\"float: right;font-size: 20px;\" (click)=\"presentModal(info.telefone)\"></ion-icon>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/telefones/telefones-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/telefones/telefones-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TelefonesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefonesPageRoutingModule", function() { return TelefonesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _telefones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telefones.page */ "./src/app/telefones/telefones.page.ts");




const routes = [
    {
        path: '',
        component: _telefones_page__WEBPACK_IMPORTED_MODULE_3__["TelefonesPage"]
    }
];
let TelefonesPageRoutingModule = class TelefonesPageRoutingModule {
};
TelefonesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TelefonesPageRoutingModule);



/***/ }),

/***/ "./src/app/telefones/telefones.module.ts":
/*!***********************************************!*\
  !*** ./src/app/telefones/telefones.module.ts ***!
  \***********************************************/
/*! exports provided: TelefonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefonesPageModule", function() { return TelefonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _telefones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./telefones-routing.module */ "./src/app/telefones/telefones-routing.module.ts");
/* harmony import */ var _telefones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./telefones.page */ "./src/app/telefones/telefones.page.ts");







let TelefonesPageModule = class TelefonesPageModule {
};
TelefonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _telefones_routing_module__WEBPACK_IMPORTED_MODULE_5__["TelefonesPageRoutingModule"]
        ],
        declarations: [_telefones_page__WEBPACK_IMPORTED_MODULE_6__["TelefonesPage"]]
    })
], TelefonesPageModule);



/***/ }),

/***/ "./src/app/telefones/telefones.page.scss":
/*!***********************************************!*\
  !*** ./src/app/telefones/telefones.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbGVmb25lcy90ZWxlZm9uZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/telefones/telefones.page.ts":
/*!*********************************************!*\
  !*** ./src/app/telefones/telefones.page.ts ***!
  \*********************************************/
/*! exports provided: TelefonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelefonesPage", function() { return TelefonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");








let TelefonesPage = class TelefonesPage {
    constructor(route, http, modalController) {
        this.route = route;
        this.http = http;
        this.modalController = modalController;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('pt-br');
        this.endereco = this.route.snapshot.paramMap.get('endereco');
        this.http.get(`${this.API_URL}/telefones/${this.endereco}`).subscribe(res => {
            this.total = res[0].total;
            this.telefones = res[0].telefones;
            this.endereco = `${this.endereco} - Total: ${this.total}`;
            this.telefones = this.telefones.map(telefone => {
                telefone.ultimaVezConsultado = telefone.ultimaVezConsultado != '' ? moment__WEBPACK_IMPORTED_MODULE_4__(telefone.ultimaVezConsultado).fromNow() : 'Nunca';
                return telefone;
            });
        });
    }
    go(item) {
        window.open(`tel:${item.telefone}`, '_system');
    }
    presentModal(telefone) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__["ModalPage"],
                componentProps: {
                    'telefone': telefone
                }
            });
            return yield modal.present();
        });
    }
};
TelefonesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
TelefonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-telefones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./telefones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/telefones/telefones.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./telefones.page.scss */ "./src/app/telefones/telefones.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], TelefonesPage);



/***/ })

}]);
//# sourceMappingURL=telefones-telefones-module-es2015.js.map