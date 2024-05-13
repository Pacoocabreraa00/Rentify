import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './guard/guard.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { ChatComponent } from './chat/chat.component';

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
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard],
  },
];