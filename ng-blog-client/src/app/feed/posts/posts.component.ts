import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/internal/operators';

import { Post } from '../shared/models/post';
import { Store } from 'store';

@Component({
  selector: 'app-posts',
  styleUrls: ['posts.component.scss'],
  template:  `
    <div class="feed-wrapper" *ngIf="posts$ | async as posts; else loading;">
      <div class="card" *ngFor="let post of posts">
        <app-card [post]="post">
          <button mat-stroked-button [routerLink]="[post._id]" class="card-button">
            READ MORE
          </button>
        </app-card>
      </div>
    </div>
    <ng-template #loading>
      <div class="message">
        Fetching posts...
      </div>
    </ng-template>
  `
})
export class PostsComponent implements OnInit, OnDestroy {
  posts$: Observable<Array<Post>>;

  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.posts$ = this.store.select<Array<Post>>('posts')
      .pipe(
        takeUntil(this.ngUnsubscribe)
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
