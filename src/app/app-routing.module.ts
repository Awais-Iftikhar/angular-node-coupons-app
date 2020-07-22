import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoupondetailComponent } from './coupons/coupondetail/coupondetail.component';
import { ListofcouponsComponent } from './coupons/listofcoupons/listofcoupons.component';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'coupon' , component: ListofcouponsComponent},
  {path: 'coupon/:couponid' , component: CoupondetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
