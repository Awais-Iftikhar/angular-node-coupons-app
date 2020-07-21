import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupform = new FormGroup({
      email : new FormControl(null),
      password : new FormControl(null),
    });
  }

  signup(form) {
    console.log(form.value);
  }

}
