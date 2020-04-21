function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["telefones-telefones-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/telefones/telefones.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/telefones/telefones.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTelefonesTelefonesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"danger\" [text]=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Telefones</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-title size=\"small\">{{endereco}}</ion-title>\n  </ion-toolbar>\n  <ion-item>\n    <ion-label>Filtrar Números</ion-label>\n    <ion-select placeholder=\"Selecione\" [(ngModel)]=\"filterOption\" name=\"filterOption\" (ionChange)=\"filter()\">\n      <ion-select-option value=\"n\">Nunca Visitado</ion-select-option>\n      <ion-select-option value=\"y\">Já Visitado</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let info of telefonesFiltered\">\n    <ion-item>\n      <ion-label>{{info.telefone}}</ion-label>\n      <ion-button (click)=\"go(info)\">Ligar</ion-button>\n    </ion-item>\n  \n    <ion-card-content>\n      Última Vez Contatado: {{info.ultimaVezConsultado}} \n\n      <ion-icon name=\"create-outline\" style=\"float: right;font-size: 20px;\" (click)=\"presentModal(info.telefone)\"></ion-icon>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/telefones/telefones-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/telefones/telefones-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: TelefonesPageRoutingModule */

  /***/
  function srcAppTelefonesTelefonesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelefonesPageRoutingModule", function () {
      return TelefonesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _telefones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./telefones.page */
    "./src/app/telefones/telefones.page.ts");

    var routes = [{
      path: '',
      component: _telefones_page__WEBPACK_IMPORTED_MODULE_3__["TelefonesPage"]
    }];

    var TelefonesPageRoutingModule = function TelefonesPageRoutingModule() {
      _classCallCheck(this, TelefonesPageRoutingModule);
    };

    TelefonesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TelefonesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/telefones/telefones.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/telefones/telefones.module.ts ***!
    \***********************************************/

  /*! exports provided: TelefonesPageModule */

  /***/
  function srcAppTelefonesTelefonesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelefonesPageModule", function () {
      return TelefonesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _telefones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./telefones-routing.module */
    "./src/app/telefones/telefones-routing.module.ts");
    /* harmony import */


    var _telefones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./telefones.page */
    "./src/app/telefones/telefones.page.ts");

    var TelefonesPageModule = function TelefonesPageModule() {
      _classCallCheck(this, TelefonesPageModule);
    };

    TelefonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _telefones_routing_module__WEBPACK_IMPORTED_MODULE_5__["TelefonesPageRoutingModule"]],
      declarations: [_telefones_page__WEBPACK_IMPORTED_MODULE_6__["TelefonesPage"]]
    })], TelefonesPageModule);
    /***/
  },

  /***/
  "./src/app/telefones/telefones.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/telefones/telefones.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTelefonesTelefonesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbGVmb25lcy90ZWxlZm9uZXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/telefones/telefones.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/telefones/telefones.page.ts ***!
    \*********************************************/

  /*! exports provided: TelefonesPage */

  /***/
  function srcAppTelefonesTelefonesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TelefonesPage", function () {
      return TelefonesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modal/modal.page */
    "./src/app/modal/modal.page.ts");
    /* harmony import */


    var _service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var TelefonesPage = /*#__PURE__*/function () {
      function TelefonesPage(route, http, modalController) {
        _classCallCheck(this, TelefonesPage);

        this.route = route;
        this.http = http;
        this.modalController = modalController;
      }

      _createClass(TelefonesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    moment__WEBPACK_IMPORTED_MODULE_6__["locale"]('pt-br');
                    this.endereco = this.route.snapshot.paramMap.get('endereco');
                    _context.next = 4;
                    return this.http.getAllPhonesByAddress(this.endereco);

                  case 4:
                    res = _context.sent;
                    this.total = res[0].total;
                    this.telefonesOriginal = res[0].telefones;
                    this.endereco = "".concat(this.endereco, " - Total: ").concat(this.total);
                    this.telefonesOriginal = this.telefonesOriginal.map(function (telefone) {
                      telefone.ultimaVezConsultado = telefone.ultimaVezConsultado != '' ? moment__WEBPACK_IMPORTED_MODULE_6__(telefone.ultimaVezConsultado).fromNow() : 'Nunca';
                      return telefone;
                    });
                    this.telefonesFiltered = this.telefonesOriginal;

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "go",
        value: function go(item) {
          window.open("tel:".concat(item.telefone), '_system');
        }
      }, {
        key: "filter",
        value: function filter() {
          var _this = this;

          this.telefonesFiltered = this.telefonesOriginal.filter(function (t) {
            return _this.filterOption === 'y' ? t.ultimaVezConsultado !== 'Nunca' : t.ultimaVezConsultado === 'Nunca';
          });
        }
      }, {
        key: "presentModal",
        value: function presentModal(telefone) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__["ModalPage"],
                      componentProps: {
                        'telefone': telefone
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return TelefonesPage;
    }();

    TelefonesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    TelefonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-telefones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./telefones.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/telefones/telefones.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./telefones.page.scss */
      "./src/app/telefones/telefones.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], TelefonesPage);
    /***/
  }
}]);
//# sourceMappingURL=telefones-telefones-module-es5.js.map