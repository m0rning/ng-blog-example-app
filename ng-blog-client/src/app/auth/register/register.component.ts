import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'register',
  template: `
    <auth-form (submitted)="registerUser($event)">
      <h1>Register</h1>
      <a [routerLink]="['', { outlets: { auth: ['login'] } }]">Already have an account?</a>
      <button mat-raised-button>Create account</button>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  `
})
export class RegisterComponent {
  error: string;

  constructor(private authService: AuthService,
              private router: Router) {}

  registerUser(event: FormGroup) {
    const { email, password } = event.value;
    this.authService.createUser(email, password).subscribe(
      () => this.router.navigate(['/']),
      (err) => this.error = err.message
    );
  }
}
