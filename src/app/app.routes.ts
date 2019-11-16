import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';

const app_routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes);
