import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoupondetailComponent } from './coupons/coupondetail/coupondetail.component';
import { ListofcouponsComponent } from './coupons/listofcoupons/listofcoupons.component';


const routes: Routes = [
  {path: '' , component: ListofcouponsComponent},
  {path: 'coupon/:couponid' , component: CoupondetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
