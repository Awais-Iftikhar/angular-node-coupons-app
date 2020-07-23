import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isloading = false;
  form: FormGroup;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.loadfn();
    setTimeout(() => {
      this.isloading = false;
    }, 1000);
    this.authservice.updateloginstatus().subscribe(res => {
      this.isloading = res;
    });
    this.form = new FormGroup({
      email : new FormControl(null, {validators: [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]}),
      password : new FormControl(null, {validators: [Validators.required , Validators.minLength(5)]}),
    });
  }
  loadfn() {
    this.isloading = true;
  }
  getemail() {
    return this.form.get('email');
  }

  getpassword() {
    return this.form.get('password');
  }

  login(form) {
    if (form.invalid) {
      return;
    }
    const data = {
      email: form.value.email,
      password: form.value.password
    };
    this.authservice.loginuser(data);
    this.isloading = true;
  }

}
