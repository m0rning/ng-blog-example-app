import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatGridListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './navigation/app-header/app-header.component';
import { AppNavComponent } from './navigation/app-nav/app-nav.component';
import { ROUTES } from './app.routes';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    AuthModalComponent
  ],
  entryComponents: [AuthModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
