import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: SignUpComponent,
  },
//   {
//     path: 'propiedades/crear-propiedad',
//     component: CrearPropiedadComponent,
//   },
  {
    path: 'propiedades',
    component: PropiedadesComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
