import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-card',
  template:  `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{post.title}}</mat-card-title>
        <mat-card-subtitle>{{post.subtitle}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="post.image" alt="">
      <mat-card-content>
        <p>
          {{post.content}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <ng-content select="button"></ng-content>
      </mat-card-actions>
    </mat-card>
  `
})
export class CardComponent {
  @Input() post;
}
