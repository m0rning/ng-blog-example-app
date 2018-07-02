import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
