import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isInvalid = false;

  constructor(public AuthService: AuthService, private ActivatedRoute: ActivatedRoute, private Router: Router) {
  }

  ngOnInit() {
  }


  // valid data in server = { userName: 'Vikash', password: '12345' }

  submitForm(form) {
    if (form.valid) {

      const loginCredential = form.value;
      console.log(loginCredential);

      // Make a API call ( Here i am using a dummy Node js Server to make Api call )
      this.AuthService.login(loginCredential)
        .subscribe( isAuthenticated => {
          if(isAuthenticated) {
            const returnUrl = this.ActivatedRoute.snapshot.queryParamMap.get('returnUrl'); // getting the url of direct url from queryparam if available otherwise null
            console.log(returnUrl);
            this.Router.navigate([returnUrl || '/']); //if there is return url then directly send to returnurl otherwise homepage
            this.isInvalid = false;
          }else {
            this.isInvalid = true;
          }
        },error =>{
          console.log(error);
          this.isInvalid= true;
        }); // error handling is mandatory while using map operator
    }
  }


}
