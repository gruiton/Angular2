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
var core_1 = require("@angular/core");
var jugador_1 = require("./jugador");
var JugadorDetalleComponent = (function () {
    function JugadorDetalleComponent() {
    }
    JugadorDetalleComponent.prototype.onSave = function () {
        var errores = "";
        var nombre = document.getElementById("ctrlName");
        var presentacion = document.getElementById("ctrlPresentacion");
        var puntos = document.getElementById("ctrlScore");
        var estado = document.getElementById("ctrlStatus");
        /*if(nombre.value == ""){
            errores += "The name is mandatory\n";
        }
        if(presentacion.value == ""){
            errores += "The presentation is mandatory\n";
        }
        if(puntos.value == ""){
            errores += "The score is mandatory\n";
        }
        if(estado.value == ""){
            errores += "Status is mandatory\n";
        }*/
        if (errores != "") {
            alert(errores);
        }
    };
    return JugadorDetalleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", jugador_1.Jugador)
], JugadorDetalleComponent.prototype, "jugador", void 0);
JugadorDetalleComponent = __decorate([
    core_1.Component({
        selector: 'jugador-detalle',
        templateUrl: 'html/jugador-detalle.component.html',
        styleUrls: ['css/jugador-detalle.component.css']
    })
], JugadorDetalleComponent);
exports.JugadorDetalleComponent = JugadorDetalleComponent;
//# sourceMappingURL=jugador-detalle.component.js.map