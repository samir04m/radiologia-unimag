import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';

import { RadiografiasComponent } from './components/radiografias/radiografias.component';
import { ListadoComponent } from './components/radiografias/listado/listado.component';
import { HombroComponent } from './components/radiografias/superiores/hombro/hombro.component';
import { BrazoComponent } from './components/radiografias/superiores/brazo/brazo.component';

const app_routes: Routes = [
   { path: 'inicio', component: HomeComponent },
   { path: 'informacion', component: InformacionComponent },
   {
     path: 'radiografias',
     component: RadiografiasComponent,
     children: [
        { path: '', component: ListadoComponent },
        { path: 'listado', component: ListadoComponent },
        { path: 'hombro', component: HombroComponent },
        { path: 'brazo', component: BrazoComponent },

        { path: '**', pathMatch: 'full', redirectTo: 'listado' }
     ]
   },
   { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes);
