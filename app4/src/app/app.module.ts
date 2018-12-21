import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactForumComponent } from './contact-forum/contact-forum.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveForumComponent } from './reactive-forum/reactive-forum.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactForumComponent,
    ReactiveForumComponent,
    FormArrayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
