import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/coupon.service';
import { Coupons } from '../coupons';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listofcoupons',
  templateUrl: './listofcoupons.component.html',
  styleUrls: ['./listofcoupons.component.css']
})
export class ListofcouponsComponent implements OnInit {
  data: Coupons[];

  constructor(private couponservice: CouponService) { }

  displayedColumns: string[] = ['name', 'duration', 'date', 'Actions'];
  dataSource = new MatTableDataSource<Coupons>(this.data);
  ngOnInit() {
    this.couponservice.retrieveallcoupons();
    this.couponservice.updateui().subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

}
