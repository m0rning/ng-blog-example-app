import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Resolve} from '@angular/router';

import { Observable } from 'rxjs/index';

import {Post} from '../models/post';
import {PostService} from '../services/post.service';

@Injectable()
export class PostsResolver implements Resolve<void> {

  constructor(private postsService: PostService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<void> {
    return this.postsService.getAllPosts();
  }
}
