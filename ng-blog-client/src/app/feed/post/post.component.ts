import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Post} from '../shared/models/post';

@Component({
  selector: 'app-post',
  styleUrls: ['post.component.scss'],
  template:  `
    <div class="post">
      <h1 class="post-title">{{post.title}}</h1>
      <p class="written-by">Written by: {{post.author}}</p>
      <img [src]="post.image" alt="" class="post-image">
      <p class="post-content">{{post.content}}</p>
    </div>
  `
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.post = this.route.snapshot.data.post;
  }
}
