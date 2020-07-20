import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createcoupon',
  templateUrl: './createcoupon.component.html',
  styleUrls: ['./createcoupon.component.css']
})
export class CreatecouponComponent implements OnInit {

  couponform: FormGroup;
  value = 'val1';
  constructor() { }

  ngOnInit() {
    this.couponform = new FormGroup({
      name : new FormControl(null),
      percentoff : new FormControl(null),
      duration: new FormControl(null),
      currency: new FormControl(null),
      discountamount: new FormControl(null),
    });
  }

  onItemChange(e) {
    console.log(e.target.value);
    const type = e.target.value;
    this.value = type;
  }
  add(form) {
    console.log(form.value);
  }

}
