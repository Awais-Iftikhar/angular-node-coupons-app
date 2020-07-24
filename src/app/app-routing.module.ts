import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoupondetailComponent } from './coupons/coupondetail/coupondetail.component';
import { ListofcouponsComponent } from './coupons/listofcoupons/listofcoupons.component';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { Authguard } from './auth/auth.guard';


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'coupon' , component: ListofcouponsComponent , canActivate: [Authguard]},
  {path: 'coupon/:couponid' , component: CoupondetailComponent , canActivate: [Authguard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Authguard]
})
export class AppRoutingModule { }
