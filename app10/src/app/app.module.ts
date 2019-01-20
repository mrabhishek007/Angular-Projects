import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule, MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { MaterialComponent } from './material/material.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent, // importing material component to enable material design
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule, //checkbox
    MatRadioModule, //radio Button
    FormsModule,
    MatProgressSpinnerModule, // spinner
    MatSelectModule,  // dropdown list
    MatInputModule, // input

    MatDatepickerModule,
    MatNativeDateModule,

    MatIconModule, // material icons
    MatButtonModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
