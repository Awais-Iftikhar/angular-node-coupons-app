import { Injectable } from '@angular/core';
import { Coupons } from './coupons/coupons';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  url = 'http://localhost:8081/api/coupons';
  couponlist: Coupons[] = [];
  private couponsubject = new Subject<Coupons[]>();

  constructor(private http: HttpClient) { }

  retrieveallcoupons() {
    return this.http.get<{data: any }>(`${this.url}`)
    .subscribe(res => {
      console.log(res.data.data);
      this.couponlist = res.data.data;
      this.couponsubject.next([...this.couponlist]);
    }, err => {
      console.log(err.message);
    });

  }

  updateui() {
    return this.couponsubject.asObservable();
  }

  createcoupon(data) {
    console.log(data);
    this.http.post<{message: string}>(`${this.url}`, data).subscribe(res => {
      console.log(res.message);
    }, err => {
      console.log(err);
    });
  }

  getsinglecoupon(id: string) {
    return {...this.couponlist.find((coupon => coupon.id === id))};
  }

  deletecoupon(id: string) {
    this.http.delete<{message: string}>(`${this.url}/${id}`).subscribe(res => {
      console.log(res.message);
    }, err => {
      console.log(err);
    });
  }
}
