import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import list from 'src/assets/countries.json';


@Component({
  selector: 'app-createcoupon',
  templateUrl: './createcoupon.component.html',
  styleUrls: ['./createcoupon.component.css']
})
export class CreatecouponComponent implements OnInit {

  couponform: FormGroup;
  value = 'val1';
  countries: [] = list;
  countrycode = '';
  constructor() { }

  ngOnInit() {

    this.couponform = new FormGroup({
      name : new FormControl(null),
      percentoff : new FormControl(null),
      duration: new FormControl(null),
      currency: new FormControl(null),
      discountamount: new FormControl(null),
    });
    this.countries = list;
  }

  onItemChange(e) {
    console.log(e.target.value);
    const type = e.target.value;
    this.value = type;
  }
  oncountrychange(e) {
    console.log(e.target.value);
    const code = e.target.value;
    this.countrycode = code;
  }
  add(form) {
    console.log(form.value);
  }

}
