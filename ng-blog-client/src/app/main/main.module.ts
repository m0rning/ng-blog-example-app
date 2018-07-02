import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    // SharedModule.forRoot()
  ]
})
export class MainModule {}
