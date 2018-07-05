import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    <auth-form (submitted)="loginUser($event)">
      <button mat-raised-button class="login-button">Login</button>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  `
})
export class LoginComponent {
  error: string;

  constructor(private authService: AuthService,
              private router: Router) {}

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    this.authService.loginUser(email, password).subscribe(
      () => this.router.navigate(['/']),
      (err) => this.error = err.message
    );
  }
}
