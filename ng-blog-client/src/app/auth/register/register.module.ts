import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { ROUTES } from './register.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}
