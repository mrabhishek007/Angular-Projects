import { Component } from '@angular/core';
import {FavouriteChangedModel} from './favourite/favourite.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

/*
    VALID STYLES AND TEMPLATE( Only use when few template & styles want to use)
  styles:[`

  `],
  template:`
    <h1>Hello World</h1>
  `*/

})

export class AppComponent {

   post = {
     isFavourite:false,
     title: 'Angular'
   };

   // when state of favourite component changes it is notified here
  onFavouriteChanged(isChangedObj: FavouriteChangedModel) {
    console.log('Favourite is changed !', isChangedObj );
  }


}
