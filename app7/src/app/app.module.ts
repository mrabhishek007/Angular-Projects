import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoacessComponent } from './noacess/noacess.component';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {fakeBackendProvider} from './helpers/fake-backend';
import {AuthService} from './service/auth.service';
import {OrderService} from './service/order.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthGuardService} from './service/auth-guard.service';
import {AdminAuthGuardService} from './service/admin-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    NoacessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, // it contains all the dependency injection of http services
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path:'admin',
        component: AdminComponent,

        // AuthGuardService : prevent admin page access  when user is logged out (Router-Guard)
        // AdminAuthGuardService : if user is not admin move to access denied page if user is logged in
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'no-access',
        component: NoacessComponent
      }
    ])
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuardService // provide Router-Guard feature
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
