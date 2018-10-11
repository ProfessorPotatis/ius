import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginUserData = {};

  constructor(
    private _auth: AuthService,
    private cookie: CookieService) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          this.cookie.set('access_token', res);
        },
        err => console.log(err)
      )
  }

}
