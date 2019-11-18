import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { app_routing } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RadiografiasComponent } from './components/radiografias/radiografias.component';
import { HombroComponent } from './components/radiografias/superiores/hombro/hombro.component';
import { ListadoComponent } from './components/radiografias/listado/listado.component';
import { BrazoComponent } from './components/radiografias/superiores/brazo/brazo.component';
import { CodoComponent } from './components/radiografias/superiores/codo/codo.component';
import { AntebrazoComponent } from './components/radiografias/superiores/antebrazo/antebrazo.component';
import { ManoComponent } from './components/radiografias/superiores/mano/mano.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InformacionComponent,
    RadiografiasComponent,
    HombroComponent,
    ListadoComponent,
    BrazoComponent,
    CodoComponent,
    AntebrazoComponent,
    ManoComponent,
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
