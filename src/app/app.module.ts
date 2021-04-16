import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { AvengerModule } from './avenger/avenger.module';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule,
    AvengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
