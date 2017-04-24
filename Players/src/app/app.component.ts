import { Component } from '@angular/core';
import { Jugador } from './jugador';
import { Boca } from './boca';

const JUGADORES: Jugador[] = [
    {id : 1, estado : 1, name : "Eusebio", presentacion: "Soy el entrenador.", puntos: 43},
    {id : 2, estado : 2, name : "Rulli", presentacion: "Soy portero.", puntos: 22},
    {id : 3, estado : 2, name : "Iñigo Martinez", presentacion: "Soy central zurdo.", puntos: 12},
    {id : 4, estado : 3, name : "Navas", presentacion: "Soy central diestro.", puntos: 47},
    {id : 5, estado : 2, name : "Illarra", presentacion: "Soy medio centro.", puntos: 48},
    {id : 6, estado : 4, name : "Zurutuza", presentacion: "Soy mediapunta.", puntos: 24},
    {id : 7, estado : 3, name : "Agirretxe", presentacion: "Soy delantero.", puntos: 62},
    {id : 8, estado : 2, name : "Vela", presentacion: "Soy extremo izquierdo.", puntos: 54},
    {id : 9, estado : 1, name : "Oiarzabal", presentacion: "Soy delantero centro.", puntos: 96},
    {id : 10, estado : 4, name : "Xabi Prieto", presentacion: "Soy extremo derecho.", puntos: 52}
]

@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  styleUrls: ['css/app.component.css']
})

// El archivo se llama app.component.ts luego angular espera que la clase que se exporte se  llame AppComponent
export class AppComponent  { 
    
    title = "Ranking de jugadores";
    
    jugadores = JUGADORES;
    
    selPlayer : Jugador;
    
    altavoz : Boca = new Boca();
    
    constructor() {
        console.log("AppComponent class instantiated");
    }
    
    ngOnInit() : void {
        console.log("ngOnInit launched");
    }
    
    onSelect(player : Jugador): void{
        this.selPlayer = player;
        this.altavoz.habla(player.presentacion);
    };
    
    newPlayer() : void {
        console.log("New player created");
        var idj = Math.floor(Math.random() * 50) + 11;
        var obj = {
            id : idj,
            estado: 1,
            puntos: 0,
            name: "New player",
            presentacion: "Empty presentation"
        }
        this.jugadores.push(obj);
        this.selPlayer = obj;
    };
    
    onDelete(player : Jugador) : void {
        if(confirm("Are you sure you want to delete the player " + player.name + "?")){
            this.jugadores = this.jugadores.filter(el => el != player);
        }        
    }
    getLog() : void {
        this.jugadores.forEach(function(e){console.log("jugador " + e.name)});
    };
    onSave() : void {
        console.log("Saving data");
        var cadena = JSON.stringify(this.jugadores);
        localStorage.setItem("jugadores", cadena);
    }
    
    onLoad() : void {
        console.log("Loading data");
        var cadena = localStorage.getItem("jugadores");
        this.jugadores = JSON.parse(cadena);
        this.selPlayer = null;
        console.log(cadena);
    }
}

