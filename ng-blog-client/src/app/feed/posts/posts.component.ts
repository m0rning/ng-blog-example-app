import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Post} from '../shared/models/post';

@Component({
  selector: 'app-posts',
  styleUrls: ['posts.component.scss'],
  template:  `
    <div class="feed-wrapper">
      <div class="card" *ngFor="let post of posts">
        <app-card [post]="post">
          <button mat-button [routerLink]="[post.id]">READ MORE</button>
        </app-card>
      </div>
    </div>
  `
})
export class PostsComponent implements OnInit {
  posts: Array<Post>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data.posts;
  }
}
