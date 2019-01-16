import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService {

  private gitUrl = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private  http: Http) {
  }

  getAll(){
   return this.http.get(this.gitUrl);
  }
}
