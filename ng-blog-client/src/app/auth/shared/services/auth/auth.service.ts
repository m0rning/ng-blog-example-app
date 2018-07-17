import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/index';

import { User } from '../../../../shared/models/user/user';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.API}/auth/register`, {email, password});
  }

  loginUser(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.API}/auth/login`, {email, password});
  }

  logoutUser() {
    return this.http.get('');
  }
}
