import { Component } from '@angular/core';

@Component({
  selector: 'auth-modal',
  template:  `
    <div mat-dialog-content>
      <router-outlet name="auth"></router-outlet>
    </div>
  `
})
export class AuthModalComponent {
}
