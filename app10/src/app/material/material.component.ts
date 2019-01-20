import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({
        opacity: 0
      })),

      transition('void <=> *', [
        animate(500)
      ])


    ])
  ]
})
export class MaterialComponent implements OnInit {

  isChecked = true;
  choice2 = 'Female';
  gender = this.choice2;

  colorList = [
    {name : 'Green', id : 1},
    {name : 'Red', id : 2},
    {name : 'Yellow', id : 3},
    {name : 'Black', id : 4}
  ];
  selectedColor;
  minDate = new Date(); // today date
  maxDate = new Date(2020, 12, 31);
  selectedDate ;

  constructor() {
  }

  ngOnInit() {
  }

  capture(userNamee){
    console.log(userNamee);
  }

  onChanged(event) {
    console.log(event);
  }

  onDateChanged(event: MatDatepickerInputEvent<Date>){
    this.selectedDate = event.value;
  }

}
