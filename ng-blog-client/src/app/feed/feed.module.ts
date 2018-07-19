import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { SharedModule } from './shared/shared.moduel';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostsResolver } from './shared/resolvers/posts.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    resolve: {
      posts: PostsResolver
    },
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':id',
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
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
