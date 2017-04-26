import { Component } from '@angular/core';

@Component({
	selector: 'reloj-digital',
	templateUrl: './html/app.digital.html',
	styleUrls: ['./css/app.digital.css'],
})
export class AppDigital  {
	crono: any;
	texto: string = "";
	
	constructor(){
		this.crono = setInterval(() => {this.actualiza()}, 1000);
	}
	
	actualiza():void{
		var fecha = new Date();
		//this.texto = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
        this.texto = fecha.toLocaleTimeString();
	}
}





