import {Component,  Input, OnInit, Output, EventEmitter} from '@angular/core';


export interface FavouriteChangedModel {
  newValue: boolean;
}

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit {

 @Input() isFavourite: boolean;  // making isFavourite input type dynamically
 // @Input('is-favourite') isFavourite: boolean;  // with alias name(optional)

  //making a property which listen to change event
 @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    // this.change.emit(); // creating a change event when favourite is clicked. subscriber of this event will be notified....
    this.change.emit({ 'newValue': this.isFavourite }); //  also passing some data with event (optional)
  }

  isSave = true;
  
}
