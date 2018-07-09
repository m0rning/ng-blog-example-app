import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/index';

import {Post} from '../models/post';
import {environment} from '../../../../environments/environment';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.API}/posts/${id}`);
  }

  getAllPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${environment.API}/posts`);
  }
}
