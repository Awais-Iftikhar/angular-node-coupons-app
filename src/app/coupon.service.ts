import { Injectable } from '@angular/core';
import { Coupons } from './coupons/coupons';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  url = 'http://localhost:8081/api/coupons';
  couponlist: Coupons[] = [];
  private couponsubject = new Subject<Coupons[]>();
  loaddata = new Subject<Coupons>();

  constructor(private http: HttpClient) { }

  retrieveallcoupons() {
    return this.http.get<{data: any}>(`${this.url}`)
    .pipe(map((res) => {
      return res.data.data.map((d) => {
        const time = d.created * 1000;
        const date = new Date(time);
        return {
          id: d.id,
          name: d.name,
          duration: d.duration,
          amount_off: d.amount_off,
          percent_off: d.percent_off,
          created: date,
          valid: d.valid
        };
      });
    }))
    .subscribe(res => {
      console.log(res);
      this.couponlist = res;
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
      this.retrieveallcoupons();
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
      this.retrieveallcoupons();
      console.log(res.message);
    }, err => {
      console.log(err);
    });
  }
}
