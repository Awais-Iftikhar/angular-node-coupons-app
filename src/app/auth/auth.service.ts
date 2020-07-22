import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8081/api/users';
  private token: string;
  private authstatus = new Subject<boolean>();
  private isauthenticated = false;


  constructor(private http: HttpClient, private route: Router) { }

  signupuser(user) {
    this.http.post<{message: string}>(`${this.url}/signup` , user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err.error.message);
    });

  }

  loginuser(user) {
    this.http.post<{message: string, token: string}>(`${this.url}/login` , user).subscribe(res => {
      console.log(res);
      const token = res.token;
      this.token = token;
      this.authstatus.next(true);
      this.isauthenticated = true;
      this.saveauthtoken(token);
      this.route.navigate(['/coupon']);
    }, err => {
      console.log(err.error.message);
    });

  }

  gettoken() {
    return this.token;
  }
  getisauth() {
    return this.isauthenticated;
  }
  updateloginstatus() {
    return this.authstatus.asObservable();
  }

  loadauthstatus() {
    const authdata = this.getauthdata();
    console.log(authdata);
    if (authdata === undefined) {
      return;
    }
    this.token = authdata;
    this.isauthenticated = true;
    this.authstatus.next(true);
  }
  getauthdata() {
    const tokenvalue = localStorage.getItem('token');
    if (!tokenvalue) {
      return;
    }
    console.log(tokenvalue);
    return tokenvalue;
  }
  saveauthtoken(token: string) {
    localStorage.setItem('token', token);
  }
  logout() {
    localStorage.removeItem('token');
    this.isauthenticated = false;
    this.authstatus.next(false);
    this.route.navigate(['/']);
  }
}
