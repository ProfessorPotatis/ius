import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUrl = 'https://demo-fpapi.iusin.se/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService) { }

  loginUser(user) {
    return this.http
      .post<any>(this._authUrl, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  isAuthenticated() {
    return !!this.cookie.get('access_token');
  }

  logoutUser() {
    this.cookie.delete('access_token');
    this.router.navigate(['/auth']);
  }

  getToken() {
    return this.cookie.get('access_token');
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }
}
