import {Component, OnInit} from '@angular/core';
import {GithubFollowersService} from '../services/github-followers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  id;
  username;
  profileUrl;

  // In order to get access to route parameters we have to inject or use 'ActiveRoute' Class provided by Angular
  // In order to navigate user programmatically and add query parm & add query string dynamically we need 'Router' service
  constructor(
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // CASE 1
    /*if we don't want to stay on current route and always stay on this page use this technique. ex: transition page with next & prev button where previous data is related to the next data */
    this.id = +this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');
    this.profileUrl = this.route.snapshot.paramMap.get('profileUrl');

    /*
    // CASE 2
    // Use case when to use observable
    // if we wan't to change the route every time then use observable (this technique) ex: page when click next data is completely new & prev data is unrelated to new data
    this.route.paramMap
      .subscribe(params => {
        let gitUserId =   +params.get('id');
        let username =    params.get('login');
        let profileUrl =    params.get('profileUrl');
      });*/
  }

  goBack() {
    this.router.navigate(['/followers',],/*this is route link we can also add params here */ {
      queryParams: {page: 1, order: 'newestfollowers'}, // adding query params dynamically,
    });
  }


}
