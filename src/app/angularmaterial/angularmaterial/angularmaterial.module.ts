import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatCardModule,
        MatDividerModule,
        MatProgressSpinnerModule
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
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class AngularmaterialModule { }
