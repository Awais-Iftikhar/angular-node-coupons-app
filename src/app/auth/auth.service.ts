import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient, private route: Router) { }

  signupuser(user) {
    this.http.post<{message: string}>(`${this.url}/signup` , user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err.error.message);
    });

  }

  loginuser(user) {
    this.http.post<{message: string}>(`${this.url}/login` , user).subscribe(res => {
      console.log(res);
      this.route.navigate(['/coupon']);
    }, err => {
      console.log(err.error.message);
    });

  }
}
