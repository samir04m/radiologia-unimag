import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

export const app_routing = RouterModule.forRoot(app_routes);
