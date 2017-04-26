import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppDigital }  from './app.digital';
import { AppAnalogico }  from './app.analogico';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppDigital, AppAnalogico ],
  bootstrap:    [ AppDigital, AppAnalogico ]
})
export class AppModule { }
