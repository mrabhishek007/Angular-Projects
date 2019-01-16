import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// CanActive interface enables RouteGuard capability

export class AuthGuardService implements CanActivate {

  constructor(private Router: Router, private AuthService: AuthService) {

  }

  // RouteGuard Feature
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.AuthService.isLoggedIn()) return true;
    // if not login then below code will execute
    // here if user directly enter url ex: localhost:4200/admin if not logged in, a query parameter with /?returnurl='admin' will be added and sent to login page
    // so that after successful login instead of sending user to homepage, we can fetch the queryparameter in login page it can be send directly to admin page instead of homepage
    this.Router.navigate(['/login'], {queryParams: {'returnUrl': state.url}});
    return false;
  }
}
