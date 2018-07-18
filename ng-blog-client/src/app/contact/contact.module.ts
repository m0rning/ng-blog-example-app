import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {ContactComponent} from './component/contact.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ]
})
export class ContactModule {}
