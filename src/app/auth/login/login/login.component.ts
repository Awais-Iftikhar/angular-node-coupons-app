import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl(null),
      password : new FormControl(null),
    });
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
  }

}
