import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatCardModule,
        MatDividerModule
  } from '@angular/material';


@NgModule({

  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class AngularmaterialModule { }
