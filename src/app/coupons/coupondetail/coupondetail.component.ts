import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { CouponService } from 'src/app/coupon.service';
import { Coupons } from '../coupons';

@Component({
  selector: 'app-coupondetail',
  templateUrl: './coupondetail.component.html',
  styleUrls: ['./coupondetail.component.css']
})
export class CoupondetailComponent implements OnInit {

  couponid;
  coupondata;
  discountvalue;
  currency;
  constructor(private couponservice: CouponService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res) => {
      if (res.has('couponid')) {
        this.couponid = res.get('couponid');
        console.log(this.couponid);
        this.coupondata = this.couponservice.getsinglecoupon(this.couponid);
        console.log(this.coupondata);
        const percentdiscount = this.coupondata.percent_off;
        const amountdiscount = this.coupondata.amount_off;
        const currencyvalue = this.coupondata.currency;
        if (amountdiscount === null || currencyvalue === null) {
          this.discountvalue = percentdiscount;
          this.currency = ' %';
        } else {
          this.discountvalue = amountdiscount;
          this.currency = currencyvalue;
        }
      }
    });
  }

}
