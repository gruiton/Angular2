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
var boca_1 = require("./boca");
var JUGADORES = [
    { id: 1, estado: 1, name: "Eusebio", presentacion: "Soy el entrenador.", puntos: 43 },
    { id: 2, estado: 2, name: "Rulli", presentacion: "Soy portero.", puntos: 22 },
    { id: 3, estado: 2, name: "Iñigo Martinez", presentacion: "Soy central zurdo.", puntos: 12 },
    { id: 4, estado: 3, name: "Navas", presentacion: "Soy central diestro.", puntos: 47 },
    { id: 5, estado: 2, name: "Illarra", presentacion: "Soy medio centro.", puntos: 48 },
    { id: 6, estado: 4, name: "Zurutuza", presentacion: "Soy mediapunta.", puntos: 24 },
    { id: 7, estado: 3, name: "Agirretxe", presentacion: "Soy delantero.", puntos: 62 },
    { id: 8, estado: 2, name: "Vela", presentacion: "Soy extremo izquierdo.", puntos: 54 },
    { id: 9, estado: 1, name: "Oiarzabal", presentacion: "Soy delantero centro.", puntos: 96 },
    { id: 10, estado: 4, name: "Xabi Prieto", presentacion: "Soy extremo derecho.", puntos: 52 }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ranking de jugadores";
        this.jugadores = JUGADORES;
        this.altavoz = new boca_1.Boca();
        console.log("AppComponent class instantiated");
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit launched");
    };
    AppComponent.prototype.onSelect = function (player) {
        this.selPlayer = player;
        this.altavoz.habla(player.presentacion);
    };
    ;
    AppComponent.prototype.newPlayer = function () {
        console.log("New player created");
        var idj = Math.floor(Math.random() * 50) + 11;
        var obj = {
            id: idj,
            estado: 1,
            puntos: 0,
            name: "New player",
            presentacion: "Empty presentation"
        };
        this.jugadores.push(obj);
        this.selPlayer = obj;
    };
    ;
    AppComponent.prototype.onDelete = function (player) {
        if (confirm("Are you sure you want to delete the player " + player.name + "?")) {
            this.jugadores = this.jugadores.filter(function (el) { return el != player; });
        }
    };
    AppComponent.prototype.getLog = function () {
        this.jugadores.forEach(function (e) { console.log("jugador " + e.name); });
    };
    ;
    AppComponent.prototype.onSave = function () {
        console.log("Saving data");
        var cadena = JSON.stringify(this.jugadores);
        localStorage.setItem("jugadores", cadena);
    };
    AppComponent.prototype.onLoad = function () {
        console.log("Loading data");
        var cadena = localStorage.getItem("jugadores");
        this.jugadores = JSON.parse(cadena);
        this.selPlayer = null;
        console.log(cadena);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'html/app.component.html',
        styleUrls: ['css/app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map