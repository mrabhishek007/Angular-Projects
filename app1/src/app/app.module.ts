import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from "./courses/courses.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /*enables [ngModel]*/
  ],
  providers: [
    CoursesService // service provider needs to be mentioned here otherwise it won't work
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
