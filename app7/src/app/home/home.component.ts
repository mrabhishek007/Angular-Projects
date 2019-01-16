import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public AuthService: AuthService, private Router : Router) { }



  ngOnInit() {

    //no need to do this bcz we are already using RouteGuard feature so if a user is not logged in user will be directly redirected to login page

/*
    // if no token available then user is invalid and page is redirected back to login screen
    if(!this.AuthService.isLoggedIn()){
      this.Router.navigate(['/login']);
    }
*/

  }

}

export interface LoginModel {
  name: string,
  email: string,
  admin: boolean,
  loginAt: number
}


