import {Component, OnInit} from '@angular/core';
import {GithubFollowersService} from '../services/github-followers.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
// import 'rxjs/add/observable/combineLatest' // factory method to get functionality to combine 2 observables

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {

  followers: any[];

  constructor(
    private route: ActivatedRoute, // used to fetch query params & params.
    private service: GithubFollowersService) {
  }

  ngOnInit() {
    this.getQueryParameter();

    this.service.getAll()
      .subscribe(
        followers => {
          this.followers = followers.json();
          console.log(followers);
        },
        (error: Response) => {
          console.log('error', error);
        });
  }

  getQueryParameter() {

    // since the data will change on next page so better use observable instead of directly using snapshot
    // let pageNo =  +this.route.snapshot.queryParamMap.get('page');

    this.route.queryParamMap
      .subscribe(params => {
        let pageNo = +params.get('page');
        console.log('queryParams :',pageNo)
      });

/*      // suppose you want to combine multiple observable to get data from both observable and perform an opertaion use below technique

    let combinedObs = Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]);

    combinedObs.subscribe(combined => {
      let myId = combined[0].get('id');
      let myPage = combined[1].get('page');
    })*/

  }


}
