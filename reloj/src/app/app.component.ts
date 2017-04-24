import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './html/app.component.html',
	styleUrls: ['./css/app.component.css'],
})
export class AppComponent  {
	crono: any;
	texto: string = "";
	
	constructor(){
		this.crono = setInterval(this.actualiza, 1000);
	}
	
	actualiza():void{
		var fecha = new Date();
		this.texto = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
		console.log(this.texto);
	}
}
