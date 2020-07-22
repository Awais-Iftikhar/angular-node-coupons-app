import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-errordialogue',
  templateUrl: './errordialogue.component.html',
  styleUrls: ['./errordialogue.component.css']
})
export class ErrordialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) { }

  ngOnInit() {
  }

}
