import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';

import { RadiografiasComponent } from './components/radiografias/radiografias.component';
import { HombroComponent } from './components/radiografias/superiores/hombro/hombro.component';

const app_routes: Routes = [
   { path: 'inicio', component: HomeComponent },
   { path: 'informacion', component: InformacionComponent },
   {
     path: 'radiografias',
     component: RadiografiasComponent,
     children: [
        { path: 'hombro', component: HombroComponent },

        { path: '**', pathMatch: 'full', redirectTo: 'hombro' }
     ]
   },
   { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes);
