import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';

import { RadiografiasComponent } from './components/radiografias/radiografias.component';
import { ListadoComponent } from './components/radiografias/listado/listado.component';
import { HombroComponent } from './components/radiografias/superiores/hombro/hombro.component';
import { BrazoComponent } from './components/radiografias/superiores/brazo/brazo.component';
import { AntebrazoComponent } from './components/radiografias/superiores/antebrazo/antebrazo.component';
import { CodoComponent } from './components/radiografias/superiores/codo/codo.component';
import { ManoComponent } from './components/radiografias/superiores/mano/mano.component';
import { MusloComponent } from './components/radiografias/inferiores/muslo/muslo.component';
import { PieComponent } from './components/radiografias/inferiores/pie/pie.component';
import { RodillaComponent } from './components/radiografias/inferiores/rodilla/rodilla.component';
import { SacrogluteaComponent } from './components/radiografias/inferiores/sacroglutea/sacroglutea.component';
import { TobilloComponent } from './components/radiografias/inferiores/tobillo/tobillo.component';


const app_routes: Routes = [
   { path: 'inicio', component: HomeComponent },
   { path: 'informacion', component: InformacionComponent },
   {
     path: 'resonancias',
     component: RadiografiasComponent,
     children: [
        { path: '', component: ListadoComponent },
        { path: 'listado', component: ListadoComponent },
        { path: 'hombro', component: HombroComponent },
        { path: 'brazo', component: BrazoComponent },
        { path: 'antebrazo', component: AntebrazoComponent },
        { path: 'codo', component: CodoComponent },
        { path: 'mano', component: ManoComponent },
        { path: 'muslo', component: MusloComponent  },
        { path: 'pie', component: PieComponent  },
        { path: 'rodilla', component: RodillaComponent  },
        { path: 'sacroglutea', component: SacrogluteaComponent  },
        { path: 'tobillo', component: TobilloComponent  },

        { path: '**', pathMatch: 'full', redirectTo: 'listado' }
     ]
   },
   { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(app_routes);
