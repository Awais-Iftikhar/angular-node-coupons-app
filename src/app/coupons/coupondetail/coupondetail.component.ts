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
  coupondata: Coupons;
  constructor(private couponservice: CouponService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res) => {
      this.couponid = res.get('couponid');
      this.coupondata = this.couponservice.getsinglecoupon(this.couponid);
      console.log(this.coupondata);
    });
  }

}
