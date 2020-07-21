import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule
  } from '@angular/material';


@NgModule({

  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class AngularmaterialModule { }
