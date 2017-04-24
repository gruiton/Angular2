import { Component, Input } from '@angular/core';
import { Jugador } from './jugador';

@Component({
	selector: 'jugador-detalle',
	templateUrl : 'html/jugador-detalle.component.html',
    styleUrls : ['css/jugador-detalle.component.css']
})

export class JugadorDetalleComponent {
	// Le decimos a angular que jugador es una propiedad de tipo
	// Jugador, y que se gestiona como un input
	@Input() jugador: Jugador;
    
    onSave() : void {
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
        if(errores != ""){
            alert(errores);
        }
    }
}

