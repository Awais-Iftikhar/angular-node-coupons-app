import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule
  } from '@angular/material';


@NgModule({

  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ]
})
export class AngularmaterialModule { }
