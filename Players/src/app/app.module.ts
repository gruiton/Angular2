import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { JugadorDetalleComponent }  from './jugador-detalle.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, JugadorDetalleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
