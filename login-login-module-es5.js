function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Território App</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-title size= \"small\">Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"formLogin\" (ngSubmit)=\"processForm()\">\n    <ion-item>\n      <ion-label position=\"stacked\">Nome de Usuario</ion-label>\n      <ion-input formControlName=\"username\" type=\"text\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"stacked\">Senha</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n    </ion-item>\n  </form>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\"> \n  <div class=\"ion-padding\" style=\"margin-top: 2%;\">\n    <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"processForm()\" [disabled]=\"!formLogin.valid\">Login</ion-button>\n  </div>\n\n  <div class=\"ion-padding\" style=\"margin-top: 2%;\">\n    <ion-button color=\"success\" expand=\"block\" class=\"ion-no-margin\" (click)=\"cadaster()\">Cadastre-se</ion-button>\n  </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _login_modal_login_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login-modal/login-modal.page */
    "./src/app/login-modal/login-modal.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/http.service */
    "./src/app/service/http.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, modalController, formBuilder, http, alertController, app) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertController = alertController;
        this.app = app;
        this.formLogin = this.formBuilder.group({
          'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
          'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4)])]
        });
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.app.setShow();
          this.http.getMain();
          var username = window.localStorage['myData'] ? JSON.parse(window.localStorage['myData']).username : '';

          if (username !== '') {
            this.router.navigate(['/ruas']);
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.ngOnInit();
        }
      }, {
        key: "processForm",
        value: function processForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var user, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    user = {
                      username: this.formLogin.get('username').value,
                      password: this.formLogin.get('password').value
                    };
                    _context.prev = 1;
                    _context.next = 4;
                    return this.http.postLogin(user);

                  case 4:
                    this.loginResponse = _context.sent;

                    if (this.loginResponse.authorization === true) {
                      window.localStorage['myData'] = JSON.stringify({
                        username: this.formLogin.get('username').value,
                        congregation: this.loginResponse.congregation,
                        name: this.loginResponse.name
                      });
                      this.router.navigate(['/ruas']);
                    }

                    _context.next = 15;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](1);
                    _context.next = 12;
                    return this.alertController.create({
                      header: 'Desculpe',
                      message: 'Usuário ou Senha incorretos, tente novamente',
                      buttons: [{
                        text: 'OK'
                      }]
                    });

                  case 12:
                    alert = _context.sent;
                    _context.next = 15;
                    return alert.present();

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 8]]);
          }));
        }
      }, {
        key: "cadaster",
        value: function cadaster() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _login_modal_login_modal_page__WEBPACK_IMPORTED_MODULE_4__["LoginModalPage"]
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

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map