import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ReusableComponent } from './reusable/reusable.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    ReusableComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
