import { Route } from '@angular/router';

export const ROUTES: Array<Route> = [
  { path: '', pathMatch: 'full', loadChildren: './main/main.module#MainModule' },
  { path: 'login', outlet: 'auth', loadChildren: './auth/login/login.module#LoginModule'},
  { path: 'register', outlet: 'auth', loadChildren: './auth/register/register.module#RegisterModule'},
];
