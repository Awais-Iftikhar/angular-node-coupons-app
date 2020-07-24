import { Injectable } from '@angular/core';
import { Coupons } from './coupons/coupons';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const BACKEND_URL = `${environment.apiurl}/coupons`;

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  couponlist: Coupons[] = [];
  private couponsubject = new Subject<Coupons[]>();
  loaddata = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  retrieveallcoupons() {
    return this.http.get<{data: any}>(`${BACKEND_URL}`)
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

  loadingstatus() {
    return this.loaddata.asObservable();
  }

  updateui() {
    return this.couponsubject.asObservable();
  }

  createcoupon(data) {
    console.log(data);
    this.http.post<{message: string}>(`${BACKEND_URL}`, data).subscribe(res => {
      this.loaddata.next(true);
      this.retrieveallcoupons();
      console.log(res.message);
    }, err => {
      console.log(err);
    });
  }

  getsinglecoupon(id: string) {
    // return {...this.couponlist.find((coupon => coupon.id === id))};
    return this.http.get<{data: any}>(`${BACKEND_URL}/${id}`);
  }

  deletecoupon(id: string) {
    this.http.delete<{message: string}>(`${BACKEND_URL}/${id}`).subscribe(res => {
      this.loaddata.next(true);
      this.retrieveallcoupons();
      console.log(res.message);
    }, err => {
      console.log(err);
    });
  }
}
