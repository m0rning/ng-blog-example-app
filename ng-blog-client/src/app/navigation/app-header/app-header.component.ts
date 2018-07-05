import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { AuthModalComponent } from '../../auth/auth-modal/auth-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
  }

  openDialog() {
    this.router.navigate([{ outlets: { auth: ['login'] } }])
      .then(() => {
        const dialogRef = this.dialog.open(AuthModalComponent, {
          minHeight: 350,
          // hasBackdrop: false,
          panelClass: 'auth-modal'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.router.navigate([{ outlets: { auth: null } }]);
        });
    });
  }

}
