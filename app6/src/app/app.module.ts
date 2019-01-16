import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {HttpModule} from '@angular/http';
import {PostService} from './services/post.service';
import {RouterModule} from '@angular/router';
import {GithubFollowerComponent} from './github-follower/github-follower.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {GithubFollowersService} from './services/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GithubFollowerComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule, // it contains all the dependency injection of http services

    /* Specific routes will be declared first otherwise router with beginning characters will get bigger priority*/
    RouterModule.forRoot([
      /*order is important. write specific routes first, later common routes*/

      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:id/:username/:profileUrl',   /*suppose there is a route url as 'profile'. so use profile after 'profile/:username otherwise profile will execute every time even we call 'profile/:username' */
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowerComponent
      },
      {
        path: 'post',
        component: PostComponent
      },
      {
        path: '**', // if any url other than above
        component: NotfoundComponent
      }
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
