import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/coupon.service';

@Component({
  selector: 'app-listofcoupons',
  templateUrl: './listofcoupons.component.html',
  styleUrls: ['./listofcoupons.component.css']
})
export class ListofcouponsComponent implements OnInit {

  constructor(private couponservice: CouponService) { }

  ngOnInit() {
    this.couponservice.retrieveallcoupons();
  }

}
