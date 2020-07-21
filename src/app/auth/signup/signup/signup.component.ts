import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  constructor(private authserivce: AuthService) { }

  ngOnInit() {
    this.signupform = new FormGroup({
      email : new FormControl(null),
      password : new FormControl(null),
    });
  }

  signup(form) {
    if (form.invalid) {
      return true;
    }
    const data = {
      email: form.value.email,
      password: form.value.password
    };
    this.authserivce.signupuser(data);
  }

}
