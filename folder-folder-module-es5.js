function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div>\n    <ion-searchbar placeholder=\"Pesquisar Ruas\" autocomplete=\"on\" (ionInput)=\"filterList($event)\"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor=\"let item of goalList\" (click)=\"go(item)\">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/folder/folder-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/folder/folder-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FolderPageRoutingModule */

  /***/
  function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
      return FolderPageRoutingModule;
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


    var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");

    var routes = [{
      path: '',
      component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }];

    var FolderPageRoutingModule = function FolderPageRoutingModule() {
      _classCallCheck(this, FolderPageRoutingModule);
    };

    FolderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FolderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.module.ts ***!
    \*****************************************/

  /*! exports provided: FolderPageModule */

  /***/
  function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
      return FolderPageModule;
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


    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-routing.module */
    "./src/app/folder/folder-routing.module.ts");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");

    var FolderPageModule = function FolderPageModule() {
      _classCallCheck(this, FolderPageModule);
    };

    FolderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]],
      declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })], FolderPageModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpbnkyOTk5L0RvY3VtZW50b3MvUHJvamVjdHMvdGVsZWZvbmVzLWFwcC9zcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/folder/folder.page.ts":
  /*!***************************************!*\
    !*** ./src/app/folder/folder.page.ts ***!
    \***************************************/

  /*! exports provided: FolderPage */

  /***/
  function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
      return FolderPage;
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


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _environments_ruas_rdp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/ruas-rdp */
    "./src/environments/ruas-rdp.ts");
    /* harmony import */


    var _environments_ruas_jd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/ruas-jd */
    "./src/environments/ruas-jd.ts");

    var FolderPage = /*#__PURE__*/function () {
      function FolderPage(router, route, data) {
        _classCallCheck(this, FolderPage);

        this.router = router;
        this.route = route;
        this.data = data;
      }

      _createClass(FolderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.folder = 'Ruas do Território';
          this.congregacao = this.route.snapshot.paramMap.get('congregacao');
          this.data.changeCongregacao(this.congregacao);

          if (this.congregacao === 'Jardim Violeta') {
            this.goalList = _environments_ruas_jd__WEBPACK_IMPORTED_MODULE_5__["ruas_jd"].sort();
          } else if (this.congregacao === 'Rio da Prata') {
            this.goalList = _environments_ruas_rdp__WEBPACK_IMPORTED_MODULE_4__["ruas_rdp"].sort();
          }

          this.goalListOriginal = this.goalList;
        }
      }, {
        key: "filterList",
        value: function filterList(evt) {
          var searchTerm = evt.srcElement.value;

          if (!searchTerm) {
            this.goalList = this.goalListOriginal;
            return;
          }

          this.goalList = this.goalList.filter(function (currentGoal) {
            if (currentGoal && searchTerm) {
              if (currentGoal.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                return true;
              }

              return false;
            }
          });
        }
      }, {
        key: "go",
        value: function go(item) {
          this.router.navigate(['/telefones', item]);
        }
      }]);

      return FolderPage;
    }();

    FolderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    FolderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./folder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./folder.page.scss */
      "./src/app/folder/folder.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], FolderPage);
    /***/
  },

  /***/
  "./src/environments/ruas-jd.ts":
  /*!*************************************!*\
    !*** ./src/environments/ruas-jd.ts ***!
    \*************************************/

  /*! exports provided: ruas_jd */

  /***/
  function srcEnvironmentsRuasJdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ruas_jd", function () {
      return ruas_jd;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ruas_jd = ["Avenida Carlos Sampaio Correia", "Rua Acepe", "Rua Aguinaldo Rocha", "Rua Almiro Bernardo", "Rua Antônio Alfredo Campos", "Rua Armisticio", "Rua Bandeirante Lourdes Rocha", "Rua Benares", "Rua Bombaim", "Rua Santana Riacho", "Rua Cairo", "Rua Canaan", "Rua Claudino Pinheiro", "Rua Cristo Vive", "Rua Dom Pedro I", "Rua Engenheiro Paula Lopes", "Rua Hermann Blumenau", "Rua José Filho", "Rua Júlio Isnard", "Rua Lesseps", "Rua Marmiari", "Rua Mucuripe", "Rua Natal", "Rua Orlando Martins", "Rua Osaka", "Rua Oscar Schade", "Rua Otacílio Francesconi Porto", "Rua Paulo Mendes Rodrigues", "Rua Paulo Pereira", "Rua Paulo Rola", "Rua Santa Eulália", "Rua Santa Márcia", "Rua Santana", "Rua Severino Filho", "Rua Suez", "Rua São Rupeto", "Rua Tiquia", "Rua Toquio", "Rua Valdemar Fidalgo", "Rua Volga", "Rua da Aclamação", "Rua da Aeronáutica", "Rua da Felicidade", "Rua das Mangueiras", "Rua do Encanamento"];
    /***/
  },

  /***/
  "./src/environments/ruas-rdp.ts":
  /*!**************************************!*\
    !*** ./src/environments/ruas-rdp.ts ***!
    \**************************************/

  /*! exports provided: ruas_rdp */

  /***/
  function srcEnvironmentsRuasRdpTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ruas_rdp", function () {
      return ruas_rdp;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ruas_rdp = ["Avenida Cônego Vasconcelos", "Avenida Josino Fernandes", //"Avenida de Santa Cruz",
    "Estrada Maravilha", "Rua 12 de Fevereiro", "Rua Acanto", "Rua Adonis", "Rua Aglaia", "Rua Ailanto", "Rua Ajuara", "Rua Alfredo Carneiro", "Rua Amanajó", "Rua Antônio Canedo", "Rua Antônio Carlos Cabral", "Rua Aracitaba", "Rua Arimbu", "Rua Arnaldo Henrique", "Rua Bangu", "Rua Barão de Capanema", "Rua Belo Horizonte", "Rua Benares", "Rua Biriba", "Rua Boaria", "Rua Boiobi", "Rua Bombaim", "Rua Cassiterita", "Rua Cavani", "Rua Cobé", "Rua Cordisburgo", "Rua Cordislândia", "Rua Coronel Tamarindo", "Rua César Bahar", "Rua Djalma Batista", "Rua Dom Cavati", "Rua Dom Pedro I", "Rua Edson Neves Quaresma", "Rua Eduardo Timóteo Filho", "Rua Engenheiro Paula Lopes", "Rua Fonseca", "Rua Francisco Barreto", "Rua Francisco Franco", "Rua Francisco Real", "Rua Frederico Leal", "Rua Graciliano Ramos", "Rua Henrique Domingues", "Rua Hélio Carvalho Araújo", "Rua Ibora", "Rua Imaruí", "Rua Itacarambi", "Rua Jacinto Alcides", "Rua José Campos Barreto", "Rua João Hammes", "Rua Julião Machado", "Rua Jundiaí", "Rua Júlio César", "Rua Laranjal Paulista", "Rua Laranjal Paulista ", "Rua Major Oscar Costa", "Rua Maravilha", "Rua Milton Palmeira", "Rua Milton Palmeira Castro", "Rua Minerva", "Rua Minuanos", "Rua Mongolia", "Rua Oliveira Ribeiro", "Rua Osaka", "Rua Padre Josino Tavares", "Rua Palmiro Alves", "Rua Pierre Curie", "Rua Pirapitinga", "Rua Professor Clemente Ferreira", "Rua Péricles", "Rua Rangel Pestana", "Rua Renato Rebecchi", "Rua Rio da Prata", "Rua Roberto Doyle Maia", "Rua Ronaldo Mourt Queiroz", "Rua Santa Cecília", "Rua Silva Cardoso", "Rua Simon Cristiano", "Rua Simão Cristino", "Rua Tibagi", "Rua Tietê", "Rua Toquio", "Rua Ubaldo Ramalhete", "Rua Urucum", "Rua Vitória", "Rua Volga", "Rua Washington Lima", "Rua da Feira", "Rua da Fiação", "Rua da Fábrica", "Rua da Pedreira", "Rua das Artes", "Rua dos Açudes", "Rua dos Banguenses", "Rua dos Curvelos", "Rua dos Estampadores", "Rua dos Limadores"];
    /***/
  }
}]);
//# sourceMappingURL=folder-folder-module-es5.js.map