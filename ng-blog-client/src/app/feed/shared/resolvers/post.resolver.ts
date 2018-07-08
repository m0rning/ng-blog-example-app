import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs/index';

import {Post} from '../models/post';
import {PostService} from '../services/post.service';

@Injectable()
export class PostResolver implements Resolve<Post> {

  constructor(private postsService: PostService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    return this.postsService.getPost(route.params.id);
  }
}
