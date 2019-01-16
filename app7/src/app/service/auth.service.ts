import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {LoginModel} from '../home/home.component';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable()
export class AuthService {


  constructor(
    private http: Http, private Router: Router, private ActivatedRoute: ActivatedRoute) {
  }

  baseUrl = 'http://127.0.0.1:3000/api';


  login(credentials) {

    //returns Observable
    return this.http.post(this.baseUrl + '/login', credentials)
    // with the map operator we can return other value on the result and it returns observable
      .pipe(map(res => {
        console.log(res);
        const data = res.json();
        if (data && data.token) {
          localStorage.setItem('authToken', data.token);
          return true;
        }
        else return false;
      }));
  }

  logout() {
    localStorage.removeItem('authToken');
    this.Router.navigate(['/login']);
  }

  isLoggedIn() {

    let token = localStorage.getItem('authToken');
    if (token) {

      /*     Not working now
      let jwtHelper = new JwtHelperService();
      let decodedToken = jwtHelper.decodeToken(token);
      let expDate = jwtHelper.getTokenExpirationDate(decodedToken);
      let isExpired = jwtHelper.isTokenExpired(decodedToken);
      if (!isExpired return true)
      console.log(decodedToken, expDate, isExpired);*/

      // Manually working with token

      const payLoadData = token.split('.')[1]; // 1 index will give the data
      if (payLoadData) return true; //token is valid
      else return false;

    } else {
      return false;
    }
  }

  getUser() {
    let token = localStorage.getItem('authToken');
    if (token) {
      const payLoad: LoginModel = JSON.parse(atob(token.split('.')[1])); // decoding base64 then sending payload if token available
      return payLoad;
    } else {
      return null;
    }
  }


}
