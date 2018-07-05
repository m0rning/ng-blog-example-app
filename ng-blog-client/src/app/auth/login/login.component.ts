import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  template: `
    <auth-form (submitted)="loginUser($event)">
      <button mat-raised-button class="login-button">Login</button>
      <img src="../../../assets/images/signin.svg" alt="">
      <p>WELCOME BACK</p>
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
