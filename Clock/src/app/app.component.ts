import { Component } from '@angular/core';

@Component({
	selector : 'my-app',
	templateUrl : 'app/html/app.component.html',
	styleUrls : ['app/css/app.component.css']

})
export class AppComponent  { 
	hours : number;
	minutes : number;
	seconds : number;
	hoursRotation : number;
	minutesRotation : number;
	secondsRotation : number;
	constructor() {
		this.getTime();
		setInterval(() => { this.getTime(); }, 1000);
	}
	getTime() : void{
		var now = new Date();
		this.hours = now.getHours();
		this.minutes = now.getMinutes();  
		this.seconds = now.getSeconds();
		this.setRotation();		
	}
	setRotation() : void {
		this.hoursRotation = this.hours * 6;
		this.minutesRotation = this.minutes * 6;
		this.secondsRotation = this.seconds * 6;
	}
	digitalFormat(input : number) : string{
		return ("0" + input).slice(-2);
	}
}
