import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private AuthService:AuthService, private Router: Router) { }

  // if user is admin then we only allow user to acesss admin page otherwise user will be redirected to noacess page
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.AuthService.getUser() && this.AuthService.getUser().admin){
      return true;
    }

    this.Router.navigate(['/no-access']); // redirected to access denied page if user is not admin
    return false;
  }
}
