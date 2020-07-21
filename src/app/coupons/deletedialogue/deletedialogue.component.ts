import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletedialogue',
  templateUrl: './deletedialogue.component.html',
  styleUrls: ['./deletedialogue.component.css']
})
export class DeletedialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletedialogueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
