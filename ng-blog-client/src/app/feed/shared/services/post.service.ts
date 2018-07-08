import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/index';

import {Post} from '../models/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>('//');
  }

  getAllPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('');
  }
}
