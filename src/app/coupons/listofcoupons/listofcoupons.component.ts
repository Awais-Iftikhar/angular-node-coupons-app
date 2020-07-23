import { Component, OnInit, ViewChild } from '@angular/core';
import { CouponService } from 'src/app/coupon.service';
import { Coupons } from '../coupons';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { CreatecouponComponent } from '../createcoupon/createcoupon.component';
import { DeletedialogueComponent } from '../deletedialogue/deletedialogue.component';

@Component({
  selector: 'app-listofcoupons',
  templateUrl: './listofcoupons.component.html',
  styleUrls: ['./listofcoupons.component.css']
})
export class ListofcouponsComponent implements OnInit {
  data: Coupons[];
  isloading = false;

  constructor(private couponservice: CouponService , private dialog: MatDialog) { }
  @ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'duration', 'date', 'Actions'];
  dataSource = new MatTableDataSource<Coupons>(this.data);
  ngOnInit() {
    this.couponservice.loadingstatus().subscribe(res => {
      this.isloading = res;
    });
    this.isloading = true;
    this.couponservice.retrieveallcoupons();
    this.couponservice.updateui().subscribe(res => {
      this.isloading = false;
      console.log(res);
      this.dataSource.data = res;
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    });

  }
  addcoupon() {
    const createref = this.dialog.open(CreatecouponComponent,
      {
        width: '600px',
      });
    createref.disableClose = true;
  }

  deletecoupon(row) {
    const ref = this.dialog.open(DeletedialogueComponent, {
      width: '300px',
      data: row.id,
      },
    );
    ref.disableClose = true;
    ref.afterClosed().subscribe((res) => {
      if (res === true) {
        const id = row.id;
        this.couponservice.deletecoupon(id);
      }
    });
  }

}
