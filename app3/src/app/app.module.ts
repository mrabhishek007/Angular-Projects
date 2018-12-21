import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { MycustomdirectiveDirective } from './mycustomdirective.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MycustomdirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
