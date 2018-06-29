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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sobre{\n\tshape-margin: 10px;\n\ttext-align: center;\n}\nimg{\n\twidth: 50%;\n}\n.imgTime:hover{\t\n\t-webkit-transform: scale(1.1);\t\n\t        transform: scale(1.1);\n\ttransition: -webkit-transform 0.5s;\n\ttransition: transform 0.5s;\n\ttransition: transform 0.5s, -webkit-transform 0.5s;\n}\n.imgTime{\n\ttransition: width 0.5s, height 0.5s;\t\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- INÍCIO DO CONTEÚDO -->\n      <div class=\"container\">\n          <!-- About div -->\n\t\t    <div class=\"mb-0\" id=\"about\">\n\t\t      <div class=\"container\">\n\t\t        <h2 class=\" mt-4 text-center text-uppercase\">Sobre nós</h2>\n\t\t        <hr class=\"star-light mb-5\">\n\t\t        <div class=\"sobre\">\n\t\t            <p class=\"lead\">\"Somos estudantes do curso Sistemas de Informação da Universidade do Estado do Amazonas e esse foi um trabalho desenvolvido para a disciplina de Oficina de Desenvolvimento de Sistemas II ministrada pelo professor Fábio dos Santos. O projeto tem como objetivo criar um modelo de sistema de recomendação utilizando técnicas que foram ensinadas na disciplina.\"</p>\n\t\t        </div>\n\t\t       \n\t\t      </div>\n\t\t    </div>\n            <hr class=\"star-light mb-5\">         \n\t\t\t\t\n\t\t        <div class=\"row\">\n\t\t          <div class=\"col-lg-12 text-center\">\n\t\t            <h2 class=\"div-heading text-uppercase mb-5\">Conheça o nosso Time</h2>\n\t\t          </div>\n\t\t        </div>\n\t\t        <div class=\"row\">\n\t\t          \n\t\t\t          <div class=\"col-lg-4 col-md-4 text-center imgTime\">\n\t\t\t          \t<a href=\"https://github.com/carolbastos292\">\n\t\t\t              <img class=\"mx-auto img-responsive rounded-circle \" src=\"../../assets../../assets/img/time/ane.jpg\" alt=\"\">\n\t\t\t\t\t\t</a> \n\t\t\t              <h4>Ane Caroline</h4>\n\n\t\t\t              <p class=\"text-muted\">Desenvolvedora Front-End</p> \n\n\t\t\t          </div>\n\t\t      \t  \n\t\t          <div class=\"col-lg-4 col-md-4 text-center imgTime\">\t\n\t\t          \t  <a href=\"https://github.com/borgesbsb\">\t            \n\t\t              \t<img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/ben.jpg\" alt=\"\">\n\t\t              </a>\n\t\t              <h4>Benjamin Borges</h4>\n\t\t              <p class=\"text-muted\">Programador</p>\n\t\t              \t            \n\t\t          </div>\n\t\t          <div class=\"col-lg-4 col-md-4 text-center imgTime\">\t\n\t\t          \t  <a href=\"https://github.com/jacksonks\">\t            \n\t\t              \t<img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/jack.jpg\" alt=\"\">\n\t\t              </a>\n\t\t              <h4>Jackson Kelvin</h4>\n\t\t              <p class=\"text-muted\">Pesquisador</p>\n\t\t              \t\t            \n\t\t          </div>\n\t\t        </div> <!-- Fecha row1 -->\n\t\t        <div class=\"row\">\n\t\t        \t<div class=\"col-lg-4 col-md-4 text-center imgTime\">\n\t\t        \t\t<a href=\"https://github.com/julianyraiol\">\t\t\t\t            \n\t\t\t              <img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/ju.jpg\" alt=\"\">\n\t\t\t            </a>\n\t\t\t            <h4>Juliany Rayol</h4>\n\t\t\t            <p class=\"text-muted\">Programadora</p>  \n\t\t\t        </div>\t\t\t         \n\n\t\t\t         <div class=\"col-lg-4 col-md-4 text-center imgTime\">\n\t\t\t         \t<a href=\"https://github.com/raisantos\">\t\t\t           \n\t\t\t              <img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/rai.jpg\" alt=\"\">\n\t\t\t            </a>\n\t\t\t              <h4>Raí Santos</h4>\n\t\t\t              <p class=\"text-muted\">Programador</p>\n\t\t\t              \t\t            \n\t\t\t         </div>\n\n\t\t\t            <div class=\"col-lg-4 col-md-4 text-center imgTime\">\t\t\t\t            \n\t\t\t\t            <a href=\"https://github.com/richardson-souza\">\n\t\t\t\t              <img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/rich.jpg\" alt=\"\">\n\t\t\t\t            </a>\n\t\t\t\t              <h4>Richardson Souza</h4>\n\t\t\t\t              <p class=\"text-muted\">Programador</p>\n\t\t\t\t              \t\t\t            \n\t\t\t\t        </div>\n\t\t\t\t         \n\t\t\t         </div> <!-- Fecha row2 -->\n\t\t\t         <div class=\"row\">\n\t\t\t         \t<div class=\"col-lg-4 col-md-4 text-center imgTime\">\t\t\t\t            \n\t\t\t\t            <a href=\"https://github.com/SergioPinheiro\"> \n\t\t\t\t              <img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/sergio.jpg\" alt=\"\">\n\t\t\t\t            </a>\n\t\t\t\t              <h4>Sérgio Pinheiro</h4>\n\t\t\t\t              <p class=\"text-muted\">Programador</p>\n\t\t\t\t              \t\t\t            \n\t\t\t\t         </div>\n\n\t\t\t\t         <div class=\"col-lg-4 col-md-4 text-center imgTime\">\t\t\t\t       \n\t\t\t\t         \t<a href=\"https://github.com/wilsoncalisto\">\n\t\t\t\t              <img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/calisto.jpg\" alt=\"\">\n\t\t\t\t            </a>\n\t\t\t\t              <h4>Wilson Calixto</h4>\n\t\t\t\t              <p class=\"text-muted\">Programador</p>\n\t\t\t\t              \t\t\t            \n\t\t\t\t         </div>\n\n\t\t\t\t         <div class=\"col-lg-4 col-md-4 text-center imgTime\">\t\t\t\t       \n\t\t\t\t         \t<a href=\"https://github.com/netoolii\">\n\t\t\t\t              <img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/neto.jpg\" alt=\"\">\n\t\t\t\t            </a>\n\t\t\t\t              <h4>Wilson Neto</h4>\n\t\t\t\t              <p class=\"text-muted\">Programador</p>\n\t\t\t\t              \t\t\t\t            \n\t\t\t\t         </div>\n\t\t\t         </div> <!-- Fecha row3 -->\n\t\t\t         <div class=\"row \">\n\t\t\t         \t<!-- <div class=\"col-lg-offset-4 col-lg-4 col-md-4 b\"></div> -->\n\n\t\t\t         \t<div class=\"col-lg-4 mx-auto col-md-4 text-center imgTime \">\t\t\t\t      <a href=\"https://github.com/fsantosgit\">      \n\t\t\t\t              \t<img class=\"mx-auto img-responsive rounded-circle  \" src=\"../../assets/img/time/fabio.jpg\" alt=\"\">\n\t\t\t\t          \t  </a>\n\t\t\t\t              <h4>Fábio Santos</h4>\n\t\t\t\t              <p class=\"text-muted\">Professor e Orientador do Projeto</p>\n\t\t\t\t              \t\t\t\t            \n\t\t\t\t         </div>\n\t\t\t    \t\n\t\t\t    \t</div>\n\t\t        </div> <!-- Fecha Container -->\n\t\t      \n       \n     \n\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n <eqv-header></eqv-header>\n    <div class=\"home\">\n      <router-outlet></router-outlet>\n    </div>\n</div>\n\n<!--<div class=\"wrapper\">\n <eqv-header></eqv-header>\n  <div class=\"content-wrapper\">\n    <div class=\"container\">\n\n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n</div>-->"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'eqv';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/http-error-handler.service.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _avaliar_temas_avaliar_temas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./avaliar-temas/avaliar-temas.component */ "./src/app/avaliar-temas/avaliar-temas.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _candidatos_recomendados_candidatos_recomendados_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./candidatos-recomendados/candidatos-recomendados.component */ "./src/app/candidatos-recomendados/candidatos-recomendados.component.ts");
/* harmony import */ var _avaliar_temas_tema_tema_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./avaliar-temas/tema/tema.component */ "./src/app/avaliar-temas/tema/tema.component.ts");
/* harmony import */ var _avaliar_temas_tema_subtema_subtema_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./avaliar-temas/tema/subtema/subtema.component */ "./src/app/avaliar-temas/tema/subtema/subtema.component.ts");
/* harmony import */ var _tema_subtemas_tema_subtemas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tema-subtemas/tema-subtemas.component */ "./src/app/tema-subtemas/tema-subtemas.component.ts");
/* harmony import */ var _candidato_detalhes_candidato_detalhes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./candidato-detalhes/candidato-detalhes.component */ "./src/app/candidato-detalhes/candidato-detalhes.component.ts");
/* harmony import */ var _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contatos/contatos.component */ "./src/app/contatos/contatos.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _avaliar_temas_avaliar_temas_component__WEBPACK_IMPORTED_MODULE_12__["AvaliarTemasComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _candidatos_recomendados_candidatos_recomendados_component__WEBPACK_IMPORTED_MODULE_14__["CandidatosRecomendadosComponent"],
                _avaliar_temas_tema_tema_component__WEBPACK_IMPORTED_MODULE_15__["TemaComponent"],
                _avaliar_temas_tema_subtema_subtema_component__WEBPACK_IMPORTED_MODULE_16__["SubtemaComponent"],
                _tema_subtemas_tema_subtemas_component__WEBPACK_IMPORTED_MODULE_17__["TemaSubtemasComponent"],
                _candidato_detalhes_candidato_detalhes_component__WEBPACK_IMPORTED_MODULE_18__["CandidatoDetalhesComponent"],
                _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_19__["ContatosComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_21__["ROUTES"]),
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"]
            ],
            providers: [_http_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpErrorHandler"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _avaliar_temas_avaliar_temas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avaliar-temas/avaliar-temas.component */ "./src/app/avaliar-temas/avaliar-temas.component.ts");
/* harmony import */ var _tema_subtemas_tema_subtemas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tema-subtemas/tema-subtemas.component */ "./src/app/tema-subtemas/tema-subtemas.component.ts");
/* harmony import */ var _candidatos_recomendados_candidatos_recomendados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candidatos-recomendados/candidatos-recomendados.component */ "./src/app/candidatos-recomendados/candidatos-recomendados.component.ts");
/* harmony import */ var _candidato_detalhes_candidato_detalhes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidato-detalhes/candidato-detalhes.component */ "./src/app/candidato-detalhes/candidato-detalhes.component.ts");
/* harmony import */ var _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contatos/contatos.component */ "./src/app/contatos/contatos.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");








var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'avaliar-temas', component: _avaliar_temas_avaliar_temas_component__WEBPACK_IMPORTED_MODULE_2__["AvaliarTemasComponent"] },
    { path: 'temas/:id', component: _tema_subtemas_tema_subtemas_component__WEBPACK_IMPORTED_MODULE_3__["TemaSubtemasComponent"] },
    { path: 'candidatos-recomendados', component: _candidatos_recomendados_candidatos_recomendados_component__WEBPACK_IMPORTED_MODULE_4__["CandidatosRecomendadosComponent"] },
    { path: 'candidato-detalhes', component: _candidato_detalhes_candidato_detalhes_component__WEBPACK_IMPORTED_MODULE_5__["CandidatoDetalhesComponent"] },
    { path: 'contatos', component: _contatos_contatos_component__WEBPACK_IMPORTED_MODULE_6__["ContatosComponent"] },
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"] }
];


/***/ }),

/***/ "./src/app/avaliar-temas/avaliar-temas.component.css":
/*!***********************************************************!*\
  !*** ./src/app/avaliar-temas/avaliar-temas.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/avaliar-temas/avaliar-temas.component.html":
/*!************************************************************!*\
  !*** ./src/app/avaliar-temas/avaliar-temas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temasContent\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '20px' }\"></ngx-loading>\n\t<h3 class=\" text-muted text-center mt-4 font-weight-light\">Avalie os temas que você mais tem interesse nas propostas de um candidato.</h3>\n\t<div class=\"row rowTemas\">\n\t\t<div *ngFor= \"let tema of themes_recomender\" class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3 text-center\">\n      \t\t<eqv-tema [tema]=\"tema\"></eqv-tema>\n      \t\t<mat-slider thumbLabel tickInterval=\"1\" min=\"1\"  max=\"5\" step=\"1\" [(value)]=\"tema.peso\" (input)='setSlidervalue($event,tema)' valVar=\"someValue\"  ></mat-slider>\n    \t</div>\n  \t</div>\n\n\t<div class=\"text-center\">\n\t\t<button (click)= \"goRecomender()\"  class=\"btn btn-outline-success btn-xl text-uppercase\">Buscar</button>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/avaliar-temas/avaliar-temas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/avaliar-temas/avaliar-temas.component.ts ***!
  \**********************************************************/
/*! exports provided: AvaliarTemasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliarTemasComponent", function() { return AvaliarTemasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _avaliar_temas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avaliar-temas.service */ "./src/app/avaliar-temas/avaliar-temas.service.ts");
/* harmony import */ var _candidatos_recomendados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidatos-recomendados.service */ "./src/app/candidatos-recomendados.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AvaliarTemasComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function AvaliarTemasComponent(route, themesService, _userEmail, candidatoService, router) {
        var _this = this;
        this.route = route;
        this.themesService = themesService;
        this._userEmail = _userEmail;
        this.candidatoService = candidatoService;
        this.router = router;
        //array de temas
        this.email = '';
        this.themes_recomender = [];
        this.status_code = '';
        this.loading = false;
        this.loading = true;
        this.themesService.getThemesAll().subscribe(function (data) {
            _this.themes = data['themes'];
            _this.setRecomender(_this.themes);
            _this.loading = false;
        });
        this._userEmail.setEmail({ user_email: this._userEmail.getEmail().user_email + this.generateRandomString1(10) });
        this.email = this._userEmail.getEmail().user_email;
        console.log(this.email);
    }
    AvaliarTemasComponent.prototype.generateRandomString1 = function (l) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charsLength = chars.length;
        var string = '';
        for (var i = 0; i < l; i++) {
            string += chars.charAt(Math.floor(Math.random() * charsLength));
        }
        return string;
    };
    AvaliarTemasComponent.prototype.setRecomender = function (thma) {
        for (var _i = 0, thma_1 = thma; _i < thma_1.length; _i++) {
            var tem = thma_1[_i];
            var objeto = {
                nome: tem.theme_name,
                peso: 3,
            };
            this.themes_recomender.push(objeto);
        }
    };
    AvaliarTemasComponent.prototype.setSlidervalue = function (event, tema) {
        this[event.source._elementRef.nativeElement.attributes.valvar.nodeValue] = event.value;
        tema.peso = event.value;
        console.log(event.value);
    };
    AvaliarTemasComponent.prototype.pitch = function (event) {
        console.log(event.value);
    };
    AvaliarTemasComponent.prototype.criandoString = function (objeto) {
        var messagem = '{';
        for (var _i = 0, objeto_1 = objeto; _i < objeto_1.length; _i++) {
            var campo = objeto_1[_i];
            messagem += '\'' + campo.nome + '\': ' + '\'' + campo.peso + '\'' + ',';
        }
        messagem += '\}';
        return messagem;
    };
    AvaliarTemasComponent.prototype.addEmail = function () {
        var _this = this;
        this._userEmail.addEmail().subscribe(function (res) {
            _this.status_code = res['status_code'];
        }, function (err) {
            _this.status_code = err.error['status_code'];
        });
    };
    AvaliarTemasComponent.prototype.gerarRecomendacao = function () {
        var _this = this;
        this.themesService.recomendar(this.email).subscribe(function (lista_recomendacao) {
            _this.candidatoService.setRecomendacao(lista_recomendacao['candidates']);
            _this.router.navigate(['/candidatos-recomendados']);
            _this.loading = false;
        });
    };
    AvaliarTemasComponent.prototype.gerarSimilaridade = function () {
        this.themesService.gerarSimilaridade(this.email).subscribe();
    };
    AvaliarTemasComponent.prototype.goRecomender = function () {
        var _this = this;
        this.loading = true;
        this.addEmail();
        this.cadastrando_peso = { user_email: this.email, user_ratings: this.criandoString(this.themes_recomender) };
        this.themesService.addPesos(this.cadastrando_peso).subscribe(function (res) {
            console.log(res['status']);
            _this.gerarSimilaridade();
            _this.gerarRecomendacao();
        }, function (err) {
            if (err.error instanceof Error) {
                console.log(err);
                _this.gerarSimilaridade();
                _this.gerarRecomendacao();
            }
            else {
                console.log(_this.email);
                _this.gerarSimilaridade();
                _this.gerarRecomendacao();
            }
        });
    };
    AvaliarTemasComponent.prototype.ngOnInit = function () {
    };
    AvaliarTemasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-avaliar-temas',
            template: __webpack_require__(/*! ./avaliar-temas.component.html */ "./src/app/avaliar-temas/avaliar-temas.component.html"),
            providers: [_avaliar_temas_service__WEBPACK_IMPORTED_MODULE_1__["AvaliarTemasService"]],
            styles: [__webpack_require__(/*! ./avaliar-temas.component.css */ "./src/app/avaliar-temas/avaliar-temas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _avaliar_temas_service__WEBPACK_IMPORTED_MODULE_1__["AvaliarTemasService"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            _candidatos_recomendados_service__WEBPACK_IMPORTED_MODULE_2__["CandidatosRecomendadosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AvaliarTemasComponent);
    return AvaliarTemasComponent;
}());



/***/ }),

/***/ "./src/app/avaliar-temas/avaliar-temas.service.ts":
/*!********************************************************!*\
  !*** ./src/app/avaliar-temas/avaliar-temas.service.ts ***!
  \********************************************************/
/*! exports provided: AvaliarTemasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliarTemasService", function() { return AvaliarTemasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var AvaliarTemasService = /** @class */ (function () {
    function AvaliarTemasService(http) {
        this.http = http;
        this.url = 'https://emquemvotar-api-heroku.herokuapp.com/api/theme/all';
        this.url2 = 'https://emquemvotar-api-heroku.herokuapp.com/api/rating/register';
        this.recomendar_url = 'https://emquemvotar-api-heroku.herokuapp.com/api/recommender/';
        this.gerar_similaridade_url = 'https://emquemvotar-api-heroku.herokuapp.com/api/recommender/register';
    }
    AvaliarTemasService.prototype.getThemesAll = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
    };
    AvaliarTemasService.prototype.addPesos = function (resposta2) {
        return this.http.post(this.url2, resposta2, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
    };
    AvaliarTemasService.prototype.gerarSimilaridade = function (email) {
        // tslint:disable-next-line:prefer-const
        var email_objeto = { user_email: email };
        return this.http.post(this.gerar_similaridade_url, email_objeto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
    };
    AvaliarTemasService.prototype.recomendar = function (email) {
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.recomendar_url + email, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
    };
    AvaliarTemasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AvaliarTemasService);
    return AvaliarTemasService;
}());



/***/ }),

/***/ "./src/app/avaliar-temas/tema/subtema/subtema.component.css":
/*!******************************************************************!*\
  !*** ./src/app/avaliar-temas/tema/subtema/subtema.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/avaliar-temas/tema/subtema/subtema.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/avaliar-temas/tema/subtema/subtema.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temasContent\">\n\t<h3 class=\" text-muted text-center subtitulo font-weight-light\">\n\tSelecione os subtemas que você mais tem interesse nas propostas de um candidato.</h3>\n\t<div class=\"row\">\n\t\t<div class=\"custom-control custom-checkbox\">\n\t\t  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n\t\t  <label class=\"custom-control-label\" for=\"customCheck1\">Subtema</label>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/avaliar-temas/tema/subtema/subtema.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/avaliar-temas/tema/subtema/subtema.component.ts ***!
  \*****************************************************************/
/*! exports provided: SubtemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtemaComponent", function() { return SubtemaComponent; });
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

var SubtemaComponent = /** @class */ (function () {
    function SubtemaComponent() {
    }
    SubtemaComponent.prototype.ngOnInit = function () {
    };
    SubtemaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-subtema',
            template: __webpack_require__(/*! ./subtema.component.html */ "./src/app/avaliar-temas/tema/subtema/subtema.component.html"),
            styles: [__webpack_require__(/*! ./subtema.component.css */ "./src/app/avaliar-temas/tema/subtema/subtema.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubtemaComponent);
    return SubtemaComponent;
}());



/***/ }),

/***/ "./src/app/avaliar-temas/tema/tema.component.css":
/*!*******************************************************!*\
  !*** ./src/app/avaliar-temas/tema/tema.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".temaImg{\n\tmax-width: 100px;\n\tmax-height: 200px;\n\n}\n\n.checked{\n\tcolor:orange;\n}\n\n\n"

/***/ }),

/***/ "./src/app/avaliar-temas/tema/tema.component.html":
/*!********************************************************!*\
  !*** ./src/app/avaliar-temas/tema/tema.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a>\n\t<img src=\"../../../assets/img/icons/{{tema.nome}}.png\" class=\"temaImg img-responsive\">\n\t<h6 align=\"center\" >{{tema.nome}}</h6>\n</a>\n"

/***/ }),

/***/ "./src/app/avaliar-temas/tema/tema.component.ts":
/*!******************************************************!*\
  !*** ./src/app/avaliar-temas/tema/tema.component.ts ***!
  \******************************************************/
/*! exports provided: TemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaComponent", function() { return TemaComponent; });
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

var TemaComponent = /** @class */ (function () {
    function TemaComponent() {
    }
    TemaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemaComponent.prototype, "tema", void 0);
    TemaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-tema',
            template: __webpack_require__(/*! ./tema.component.html */ "./src/app/avaliar-temas/tema/tema.component.html"),
            styles: [__webpack_require__(/*! ./tema.component.css */ "./src/app/avaliar-temas/tema/tema.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemaComponent);
    return TemaComponent;
}());



/***/ }),

/***/ "./src/app/candidato-detalhes/candidato-detalhes.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/candidato-detalhes/candidato-detalhes.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-detal{\n\tpadding-top: 4%;\n}"

/***/ }),

/***/ "./src/app/candidato-detalhes/candidato-detalhes.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/candidato-detalhes/candidato-detalhes.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"content-detal mt-5\">\n\t\t<div class=\"card bg-light \" >\n\t\t  <div class=\"card-body list-group-item list-group-item-action\">\n\t        <div class=\"media\">\n\t          <img class=\"foto-candidato mr-3\" src=\"../assets/img/candidatos/lula.jpg\" >\n\t          <div class=\"media-body\">\n\t            <li class=\"list-inline-item h3 card-title\">{{candidato.candidate_name}}</li>\n\t            <li class=\"list-inline-item h3 card-subtitle font-weight-light\"> | {{candidato.candidate_political_party}}</li>\n\t            <p class=\"card-text text-justify\" >Luiz Inácio Lula da Silva é um político, ex-sindicalista e ex-metalúrgico brasileiro, o 35.º presidente do Brasil entre 2003 e 2011. Membro fundador e presidente de honra do Partido dos Trabalhadores, elegeu-se presidente da República na eleição de 2002, sendo reeleito em 2006. Atualmente, encontra-se cumprindo pena em Curitiba após ser condenado por corrupção.</p>\n\t          </div>\n\t        </div>\n\t      </div>\n\t\t</div>\n\n\t\t<div class=\"row mt-2\">\n\t\t\t<div class=\"col-sm-12 col-md-8 col-lg-8\">\n        <h3 class=\" text-center mb-4 mt-3 font-weight\">Links Recomendados</h3>\n        <div *ngFor= \"let source of detalhesPerfil\">\n\t\t\t\t\t<div class=\"card \">\n\t\t\t\t\t    <div class=\"card-body list-group-item list-group-item-action\">\n\t\t\t\t\t        <div class=\"media\">\n\t\t\t\t\t            <div class=\"media-body\">\n\t\t\t\t\t            \t<div class=\"row\">\n\t\t\t\t\t            \t\t<div class=\"col-lg-6\">\n\t\t\t\t\t            \t\t\t<h4 class=\"text-left card-title\">{{source.source_url}}</h4>\n\t\t\t\t\t            \t\t</div>\n                        </div>\n\t\t\t\t            \t\t<div>\n\t\t\t\t            \t\t\t<a href=\"#\">{{source.source_url}}</a>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t            </div>\n\t\t\t\t\t        </div>\n\t\t\t\t\t    </div>\n\t\t\t\t    </div>\n\t\t\t</div>\n    </div>\n\t\t</div> <!-- Fecha row-->\n\t</div> <!--Fecha  content -->\n</div> <!-- Fecha container -->\n\n"

/***/ }),

/***/ "./src/app/candidato-detalhes/candidato-detalhes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/candidato-detalhes/candidato-detalhes.component.ts ***!
  \********************************************************************/
/*! exports provided: CandidatoDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatoDetalhesComponent", function() { return CandidatoDetalhesComponent; });
/* harmony import */ var _candidatos_recomendados_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../candidatos-recomendados.service */ "./src/app/candidatos-recomendados.service.ts");
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


var CandidatoDetalhesComponent = /** @class */ (function () {
    function CandidatoDetalhesComponent(candidatoService) {
        var _this = this;
        this.candidatoService = candidatoService;
        this.detalhesPerfil = this.candidatoService.getCandidatoDetalhes();
        this.candidato = this.candidatoService.getCandidato();
        this.detalhesPerfil = this.candidatoService.getCandidatoDetalhes();
        this.candidatoService.getSourceCandidate(this.candidato.candidate_cpf).subscribe(function (sourceDetalhes) {
            _this.detalhesPerfil = sourceDetalhes['sources'];
        });
    }
    CandidatoDetalhesComponent.prototype.ngOnInit = function () {
    };
    CandidatoDetalhesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eqv-candidato-detalhes',
            template: __webpack_require__(/*! ./candidato-detalhes.component.html */ "./src/app/candidato-detalhes/candidato-detalhes.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./candidato-detalhes.component.css */ "./src/app/candidato-detalhes/candidato-detalhes.component.css")]
        }),
        __metadata("design:paramtypes", [_candidatos_recomendados_service__WEBPACK_IMPORTED_MODULE_0__["CandidatosRecomendadosService"]])
    ], CandidatoDetalhesComponent);
    return CandidatoDetalhesComponent;
}());



/***/ }),

/***/ "./src/app/candidatos-recomendados.service.ts":
/*!****************************************************!*\
  !*** ./src/app/candidatos-recomendados.service.ts ***!
  \****************************************************/
/*! exports provided: CandidatosRecomendadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatosRecomendadosService", function() { return CandidatosRecomendadosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var CandidatosRecomendadosService = /** @class */ (function () {
    function CandidatosRecomendadosService(http) {
        this.http = http;
        this.rota_source = 'http://emquemvotar-api-heroku.herokuapp.com/api/source/';
        this.rota_similaridade = 'https://emquemvotar-api-heroku.herokuapp.com/api/similarity/';
    }
    CandidatosRecomendadosService.prototype.getCandidato = function () {
        return this.candidato;
    };
    CandidatosRecomendadosService.prototype.setCandidato = function (candidato) {
        this.candidato = candidato;
    };
    CandidatosRecomendadosService.prototype.setRecomendacao = function (candidatos) {
        this.candidatosRecomendados = candidatos;
    };
    CandidatosRecomendadosService.prototype.getRecomendacao = function () {
        return this.candidatosRecomendados;
    };
    CandidatosRecomendadosService.prototype.setCandidatoDetalhes = function (candidatoDetalhes) {
        this.candidatoDetalhes = candidatoDetalhes;
    };
    CandidatosRecomendadosService.prototype.getCandidatoDetalhes = function () {
        return this.candidatoDetalhes;
    };
    CandidatosRecomendadosService.prototype.getSourceCandidate = function (cpf) {
        return this.http.get(this.rota_source + cpf + '/items')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
    };
    CandidatosRecomendadosService.prototype.getSimilaridade = function (email) {
        return this.http.get(this.rota_similaridade + email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
    };
    CandidatosRecomendadosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CandidatosRecomendadosService);
    return CandidatosRecomendadosService;
}());



/***/ }),

/***/ "./src/app/candidatos-recomendados/candidatos-recomendados.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/candidatos-recomendados/candidatos-recomendados.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foto-candidato{\n\twidth: 160px;\n\theight: 122px;\n}"

/***/ }),

/***/ "./src/app/candidatos-recomendados/candidatos-recomendados.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/candidatos-recomendados/candidatos-recomendados.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container list-group\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <h3 class=\"mb-4 text-center mt-4 font-weight-light\">Candidatos Recomendados</h3>\n  <nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Cargos</a></li>\n\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Presidente da República</li>\n  </ol>\n</nav>\n\n<div *ngFor= \"let candidato_recomendado of listCandidatos; \">\n    <div class=\"card mt-2 \">\n      <div class=\"card-body list-group-item list-group-item-action\">\n        <div class=\"media\">\n          <img class=\"foto-candidato mr-3\"  src=\"../assets/img/candidatos/{{ candidato_recomendado.candidato.candidate_political_party }}.jpg\" >\n          <div class=\"media-body\">\n\n              <li class=\"list-inline-item h3 card-title\">{{candidato_recomendado.candidato.candidate_name}}</li>\n              <li class=\"list-inline-item h3 card-subtitle font-weight-light\"> | {{candidato_recomendado.candidato.candidate_political_party}}</li>\n\n            <p><ngb-progressbar [value]=\"candidato_recomendado.similaridade\">{{candidato_recomendado.similaridade}}%</ngb-progressbar></p>\n\n            <!-- <p class=\"card-text text-truncate\" sty\n            le=\"max-width: 800px;\">Luiz Inácio Lula da Silva é um político, ex-sindicalista e ex-metalúrgico brasileiro, o 35.º presidente do Brasil entre 2003 e 2011. Membro fundador e presidente de honra do Partido dos Trabalhadores, elegeu-se presidente da República na eleição de 2002, sendo reeleito em 2006. Atualmente, encontra-se cumprindo pena em Curitiba após ser condenado por corrupção.</p> -->\n\n            <button type=\"button\" (click)=\"getPerfil(candidato_recomendado.candidato);\"  class=\"mt-4 btn btn-outline-success pb-1\">Ver Mais</button>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/candidatos-recomendados/candidatos-recomendados.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/candidatos-recomendados/candidatos-recomendados.component.ts ***!
  \******************************************************************************/
/*! exports provided: CandidatosRecomendadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatosRecomendadosComponent", function() { return CandidatosRecomendadosComponent; });
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidatos_recomendados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidatos-recomendados.service */ "./src/app/candidatos-recomendados.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CandidatosRecomendadosComponent = /** @class */ (function () {
    function CandidatosRecomendadosComponent(_candidatosRecomendadosService, emailService, config, router) {
        var _this = this;
        this._candidatosRecomendadosService = _candidatosRecomendadosService;
        this.emailService = emailService;
        this.router = router;
        this.listCandidatos = [];
        this.email = '';
        this.loading = false;
        this.loading = true;
        this._candidatosLista = _candidatosRecomendadosService.getRecomendacao();
        this.email = this.emailService.getEmail().user_email;
        this._candidatosRecomendadosService.getSimilaridade(this.email).subscribe(function (res) {
            _this.similaridades = res['similarity'];
            _this.createList();
            config.max = 100;
            config.striped = true;
            config.animated = true;
            config.type = 'danger';
            config.height = '20px';
            _this.loading = false;
        });
    }
    CandidatosRecomendadosComponent.prototype.createList = function () {
        for (var i = 0; i < this._candidatosLista.length; i++) {
            this.listCandidatos.push({
                candidato: this._candidatosLista[i],
                similaridade: (this.similaridades[i].rating + 1) * 50
            });
        }
    };
    CandidatosRecomendadosComponent.prototype.getPerfil = function (candidato) {
        this._candidatosRecomendadosService.setCandidato(candidato);
        this.router.navigate(['/candidato-detalhes']);
    };
    CandidatosRecomendadosComponent.prototype.ngOnInit = function () {
    };
    CandidatosRecomendadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eqv-candidatos-recomendados',
            template: __webpack_require__(/*! ./candidatos-recomendados.component.html */ "./src/app/candidatos-recomendados/candidatos-recomendados.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./candidatos-recomendados.component.css */ "./src/app/candidatos-recomendados/candidatos-recomendados.component.css")]
        }),
        __metadata("design:paramtypes", [_candidatos_recomendados_service__WEBPACK_IMPORTED_MODULE_2__["CandidatosRecomendadosService"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_0__["HomeService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbarConfig"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CandidatosRecomendadosComponent);
    return CandidatosRecomendadosComponent;
}());



/***/ }),

/***/ "./src/app/contatos/contatos.component.css":
/*!*************************************************!*\
  !*** ./src/app/contatos/contatos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contatos/contatos.component.html":
/*!**************************************************!*\
  !*** ./src/app/contatos/contatos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h3 class=\"font-weight-light pb-3\"></h3>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-6 col-lg-6\">\n    \t<h3 class=\"font-weight-light pb-3\">Encontre-nos aqui</h3>\n      \t<div class=\"embed-responsive embed-responsive-16by9\">\n \t\t \t<iframe src=\"https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127488.32798275417!2d-60.08800470989292!3d-3.0919304942559953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x926c1aa5a5540129%3A0x148088e86e2c44f7!2suea+est!3m2!1d-3.0919328!2d-60.0179641!5e0!3m2!1spt-BR!2sbr!4v1528836614710\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\t\t</div>\n    </div>\n    <div class=\"col-sm-6 col-md-6 col-lg-6\">\n    \t<h3 class=\"font-weight-light pb-3\">Contate-nos</h3>\n      \t<form>\n\t\t  <div class=\"form-group\">\n\n\t\t    <input type=\"name\" class=\"form-control mb-4\" name=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Nome\">\n\n\t\t    <input type=\"email\" class=\"form-control mb-4\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Email\">\n\t\t      <textarea class=\"form-control mb-2\" name=\"message\" rows=\"4\" placeholder=\"Mensagem\"></textarea>\n        </div>\n\t\t  <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n\t\t</form>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contatos/contatos.component.ts":
/*!************************************************!*\
  !*** ./src/app/contatos/contatos.component.ts ***!
  \************************************************/
/*! exports provided: ContatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosComponent", function() { return ContatosComponent; });
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

var ContatosComponent = /** @class */ (function () {
    function ContatosComponent() {
    }
    ContatosComponent.prototype.ngOnInit = function () {
    };
    ContatosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-contatos',
            template: __webpack_require__(/*! ./contatos.component.html */ "./src/app/contatos/contatos.component.html"),
            styles: [__webpack_require__(/*! ./contatos.component.css */ "./src/app/contatos/contatos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatosComponent);
    return ContatosComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n\tbackground-color: white; /*#27ae60*/\n\tbox-shadow: 0 2px 2px rgba(0,0,0,0.15);\n\tposition:relative;\n    z-index: 0;\n\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);\n}\n .nav-link.disabled{\n \tmargin-right: 0.5em;\n \tcolor: #7bb78c ; /*#dbf0db*/\n }\n .nav-link{\n \tmargin-right: 0.5em;\n \tcolor: #0b9e4a;\n }\n .nav-link.disabled:hover{\n \t\n \tcolor: #0b9e4a;\n }\n img {\n    margin:auto;\n}\n .image {\n\tpadding-top: 10px;\n    min-height:50px;\n    margin: auto;\n}\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top justify-content-between\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <a  class=\"navbar-brand\" [routerLink]=\"['/']\">\n\t\t<img alt=\"logo_eqv\" src=\"../assets/img/f_verde.png\" width=\"auto\" height=\"40\">\n\t</a>\n  <div class=\"collapse navbar-collapse \" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0 h5 \">\n      <li class=\"nav-item active \">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" [routerLink]=\"['/about']\">Sobre</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" [routerLink]=\"['/avaliar-temas']\">Temas De Interesse</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" [routerLink]=\"['/contatos']\">Contatos</a>\n      </li>\n    </ul>\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Login</button>\n  </div>\n</nav> \n\n\n\n<!--<nav class=\"navbar navbar-expand-lg  fixed-top\">\n        <a class=\"navbar-brand\" href=\"#\">Fixed navbar</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Link</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n            </li>\n          </ul>\n          <form class=\"form-inline mt-2 mt-md-0\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n          </form>\n        </div>\n      </nav>-->\n\n\n\n\n  \n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-xl {\n    font-size: 18px;\n    padding: 20px 40px;\n\n}\n\n.bg-home{\n    color: black;\n    overflow: auto;\n    display: block;\n    margin: 0 auto;\n    max-width: 100%;\n    overflow: hidden;  \n    \n}\n\n.bg-home img.img-back{\n    width: 100%;\n    display: block;\n    height: 570px;\n    margin: 0 auto;\n    overflow: hidden;\n    position: relative;\n    transition: opacity 1s;\n    opacity: 1;\n}\n\n.button-avaliar{\n\tpadding: 0 3%;\n    position: absolute;\n    top: 22%;\n    transition: color 1s;\n    width: 30%;\n}\n\nh2{\n\tfont-size: 32px;\n    font-weight: 84;\n    line-height: 46px;\n}\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"classUrna \">\n\t<div class=\"container \">\n\t\t  <div class=\"row \">\n\t\t    <div class=\"col-sm-9 col-lg-3\">\n\t\t      <img src=\"../../assets/img/urna_circle2-02.png\"  id=\"IdUrna\" class=\"img-fluid mx-auto d-block \" alt=\"EmQuemVotar\">\n\t\t    </div>\n\t\t    <div class=\"textoHome col-9 col-sm-9 col-lg-9 align-self-center\">\n\t\t      <h1 class=\"font-weight-normal\" style=\"color:#1c7d43;\">Não sabe em quem votar nessas eleições?\n\t\t      \t\t<h4 class=\"font-weight-light \" style=\" padding-top:2px; color:#90a397;\">Selecione os temas mais relevantes pra você nas propostas de um candidato e receba as recomendações dos nossos robôs!</h4>\n\t\t  \t  </h1>\n\t\t    </div>\n      </div>\n      <div class=\"text-center\">\n            <div class=\"form-group\"  >\n              <input type=\"text\" #email\n\t\t\t\t\t class=\"form-control mb-4 align-self-center form-control\"\n\t\t\t\t\t name=\"email\" placeholder=\"Email\"\n\t\t\t\t\t required>\n            </div>-->\n          <!--button (click)=\"addEmail(email.value); email.value='' \"  class=\"btn btn-outline-success btn-xl text-uppercase\">Selecionar Temas</button-->\n        <!--  <button (click)= \"goThemes(email.value);\"  class=\"btn btn-outline-success btn-xl text-uppercase\">Selecionar Temas</button>\n          <router-outlet></router-outlet>\n        </div>\n\t</div>\n</div> -->\n<div class=\"bg-home\">\n\t<img src=\"../../assets/img/home/urna2.jpg\" class=\"img-back\" alt=\"emquemvotar\">\n\t<div class=\"button-avaliar\">\n\t\t<h2 class=\"text-white text-lg-left font-weight-normal\">\n\t\t\tAvalie os temas mais relevantes pra você nas propostas de um candidato e receba as recomendações dos nossos robôs!\n\t\t</h2>\n\t\t<div class=\"form-group\"  >\n              <input type=\"text\" #email\n\t\t\t\t\t class=\"form-control  mt-2 align-self-center form-control\"\n\t\t\t\t\t name=\"email\" placeholder=\"Insira seu email\"\n\t\t\t\t\t required>\n        </div>\n\t\t<button (click)= \"goThemes(email.value);\"  class=\"btn btn-success btn-xl text-uppercase mt-3\">Avaliar Temas</button> \n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n\t\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
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



var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService, router) {
        this.homeService = homeService;
        this.router = router;
        this.email = '';
        this.status_code = '';
    }
    HomeComponent.prototype.goThemes = function (user_email) {
        var newEmail = { user_email: user_email };
        this.homeService.setEmail(newEmail);
        this.router.navigate(['/avaliar-temas']);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.emailUrl = 'https://emquemvotar-api-heroku.herokuapp.com/api/auth/register';
    }
    HomeService.prototype.setEmail = function (email) {
        this.email = email;
    };
    HomeService.prototype.getEmail = function () {
        return this.email;
    };
    HomeService.prototype.addEmail = function () {
        return this.http.post(this.emailUrl, this.email, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3));
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/http-error-handler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/http-error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/tema-subtemas/tema-subtemas.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tema-subtemas/tema-subtemas.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rowTemas{\n\tpadding-top: 2%;\n\talignment-baseline: central;\n\tpadding-right: 30%;\n\tpadding-left: 30%;\n}\n.subtitulo{\n\tpadding-top: 10%;\n}"

/***/ }),

/***/ "./src/app/tema-subtemas/tema-subtemas.component.html":
/*!************************************************************!*\
  !*** ./src/app/tema-subtemas/tema-subtemas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h3 class=\"text-muted text-center subtitulo font-weight-light\">Selecione os subtemas que você mais tem interesse.</h3>\n\t<div class=\"row rowTemas\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"mb-1 custom-control custom-checkbox\">\n\t\t\t  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n\t\t\t  \t<label class=\"custom-control-label\" for=\"customCheck1\">subtema1</label>\t\n\t\t\t</div>\n\t\t\t<div class=\"mb-1 custom-control custom-checkbox\">\n\t\t\t  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\n\t\t\t  \t<label class=\"custom-control-label\" for=\"customCheck2\">subtema2</label>\n\t\t\t</div>\n\t\t\t<div class=\"mb-1 custom-control custom-checkbox\">\n\t\t\t  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\">\n\t\t\t  \t<label class=\"custom-control-label\" for=\"customCheck3\">subtema3</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"mb-1 custom-control custom-checkbox\">\n\t\t\t  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\">\n\t\t\t  \t<label class=\"custom-control-label\" for=\"customCheck4\">subtema4</label>\t\n\t\t\t</div>\n\t\t\t<div class=\"mb-1 custom-control custom-checkbox\">\n\t\t\t  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck5\">\n\t\t\t  \t<label class=\"custom-control-label\" for=\"customCheck5\">subtema5</label>\n\t\t\t</div>\n\t\t\t<div class=\"mb-1 custom-control custom-checkbox\">\n\t\t\t  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck6\">\n\t\t\t  \t<label class=\"custom-control-label\" for=\"customCheck6\">subtema6</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tema-subtemas/tema-subtemas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tema-subtemas/tema-subtemas.component.ts ***!
  \**********************************************************/
/*! exports provided: TemaSubtemasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaSubtemasComponent", function() { return TemaSubtemasComponent; });
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

var TemaSubtemasComponent = /** @class */ (function () {
    function TemaSubtemasComponent() {
    }
    TemaSubtemasComponent.prototype.ngOnInit = function () {
    };
    TemaSubtemasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'eqv-tema-subtemas',
            template: __webpack_require__(/*! ./tema-subtemas.component.html */ "./src/app/tema-subtemas/tema-subtemas.component.html"),
            styles: [__webpack_require__(/*! ./tema-subtemas.component.css */ "./src/app/tema-subtemas/tema-subtemas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemaSubtemasComponent);
    return TemaSubtemasComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/borgesbsb/driver/uea/periodo_7/oficina2/trabalho2/EmQuemVotar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map