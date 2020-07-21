import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import list from 'src/assets/countries.json';
import { MatDialogRef } from '@angular/material';
import { CouponService } from 'src/app/coupon.service';


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
  constructor(private couponservice: CouponService, private matref: MatDialogRef<CreatecouponComponent>) { }

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
    const data = {
      name: form.value.name,
      percentoff: form.value.percentoff,
      duration: form.value.duration,
      currency: form.value.currency,
      discountamount: form.value.discountamount,
    };
    this.couponservice.createcoupon(data);
    this.matref.close();
  }

}
