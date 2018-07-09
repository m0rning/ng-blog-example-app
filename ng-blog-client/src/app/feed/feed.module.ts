import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { SharedModule } from './shared/shared.moduel';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import {PostResolver} from './shared/resolvers/post.resolver';
import {PostsResolver} from './shared/resolvers/posts.resolver';
import {MatIconModule} from '@angular/material';

export const ROUTES: Routes = [
  {
    path: '',
    resolve: {
      posts: PostsResolver
    },
    component: PostsComponent
  },
  {
    path: ':id',
    resolve: {
      post: PostResolver
    },
    component: PostComponent
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ]
})
export class FeedModule {}
