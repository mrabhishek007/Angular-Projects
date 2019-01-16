import {Headers, Http, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class OrderService {

  baseUrl = 'http://127.0.0.1:3000/api';

  constructor(private http: Http) {
  }

  getOrders() {

    let headers = new Headers();
    let token = localStorage.getItem('authToken');
    headers.append('auth-token', token);
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.baseUrl+'/order', options)
      .pipe(map( res =>{
        if(res.status==200){
          return res.json();
        }
      }));
  }
}
