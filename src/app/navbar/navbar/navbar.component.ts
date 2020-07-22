import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
authstatus = false;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authstatus = this.authservice.getisauth();
    console.log(this.authstatus);
    this.authservice.updateloginstatus().subscribe(res => {
      console.log(res);
      this.authstatus = res;
    });
  }

  logout() {
    this.authservice.logout();
  }

}
