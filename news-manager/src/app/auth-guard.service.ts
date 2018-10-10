import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(/*private userService: UserService, */private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url }});
    return false;

    /*if (this.userService.isValid()) {
      return true;
    } else {
      this.router.navigate(['/auth'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }*/
  }
}
