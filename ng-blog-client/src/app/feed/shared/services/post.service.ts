import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

import { Post } from '../models/post';
import { environment } from '../../../../environments/environment';
import { Store } from 'store';

@Injectable()
export class PostService {

  constructor(private http: HttpClient,
              private store: Store) { }

  getPost(key: string): Observable<Post> {
    return this.store.select<Array<Post>>('posts')
      .pipe(
        map((posts: Array<Post>) => posts.find((post: Post) => post._id === key))
      );
  }

  getAllPosts(): Observable<void> {
    return this.http.get<Array<Post>>(`${environment.API}/posts`)
      .pipe(
        map((posts: Array<Post>) => this.store.set('posts', posts))
      );
  }
}
