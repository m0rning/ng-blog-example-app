import { Route } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';

export const ROUTES: Array<Route> = [
  { path: '', pathMatch: 'full', loadChildren: './main/main.module#MainModule' },
  {
    path: 'auth',
    children: [
      { path: 'login', outlet: 'auth', loadChildren: './auth/login/login.module#LoginModule'},
      { path: 'register', outlet: 'auth', loadChildren: './auth/register/register.module#RegisterModule'},
    ]
  }
];
