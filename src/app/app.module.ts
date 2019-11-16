import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { app_routing } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RadiografiasComponent } from './components/radiografias/radiografias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InformacionComponent,
    RadiografiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
