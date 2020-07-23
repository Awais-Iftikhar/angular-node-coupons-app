import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
isloading = false;
  signupform: FormGroup;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.loadfn();
    setTimeout(() => {
      this.isloading = false;
    }, 1000);
    this.authservice.updateloginstatus().subscribe(res => {
      this.isloading = res;
    });
    this.signupform = new FormGroup({
      email : new FormControl(null, {validators: [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]}),
      password : new FormControl(null, {validators: [Validators.required , Validators.minLength(5)]}),
    });
  }
  loadfn() {
    this.isloading = true;
  }
  getemail() {
    return this.signupform.get('email');
  }
  getpassword() {
    return this.signupform.get('password');
  }
  signup(form) {
    if (form.invalid) {
      return true;
    }
    const data = {
      email: form.value.email,
      password: form.value.password
    };
    this.authservice.signupuser(data);
    this.isloading = true;
  }

}
