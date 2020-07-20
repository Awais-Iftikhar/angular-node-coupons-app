import { Component, OnInit, ViewChild } from '@angular/core';
import { CouponService } from 'src/app/coupon.service';
import { Coupons } from '../coupons';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-listofcoupons',
  templateUrl: './listofcoupons.component.html',
  styleUrls: ['./listofcoupons.component.css']
})
export class ListofcouponsComponent implements OnInit {
  data: Coupons[];

  constructor(private couponservice: CouponService) { }
  @ViewChild(MatSort , {static: false}) sort: MatSort;
  @ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'duration', 'date', 'Actions'];
  dataSource = new MatTableDataSource<Coupons>(this.data);
  ngOnInit() {
    this.couponservice.retrieveallcoupons();
    this.couponservice.updateui().subscribe(res => {
      console.log(res);
      this.dataSource.data = res;
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    });

  }

}
