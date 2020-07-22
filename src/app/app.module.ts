import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './angularmaterial/angularmaterial/angularmaterial.module';
import { CreatecouponComponent } from './coupons/createcoupon/createcoupon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListofcouponsComponent } from './coupons/listofcoupons/listofcoupons.component';
import { HttpClientModule, ɵHttpInterceptingHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DeletedialogueComponent } from './coupons/deletedialogue/deletedialogue.component';
import { CoupondetailComponent } from './coupons/coupondetail/coupondetail.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { LoginComponent } from './auth/login/login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrordialogueComponent } from './coupons/errordialogue/errordialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatecouponComponent,
    ListofcouponsComponent,
    DeletedialogueComponent,
    CoupondetailComponent,
    SignupComponent,
    LoginComponent,
    ErrordialogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreatecouponComponent, DeletedialogueComponent, ErrordialogueComponent]
})
export class AppModule { }
