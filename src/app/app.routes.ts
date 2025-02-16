import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SugerenciaComponent } from './components/sugerencia/sugerencia.component';
import { PlatosComponent } from './components/platos/platos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'sugerencia', component: SugerenciaComponent},
    {path: 'platos', component: PlatosComponent},
    {path: 'login', component: LoginComponent},
];
