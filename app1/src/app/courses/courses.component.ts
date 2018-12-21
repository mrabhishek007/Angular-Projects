import {Component, OnInit} from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html', // html file which will be rendered
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  myCourseList;
  imgUrl = 'https://source.unsplash.com/random/20*18';

  isActive = true; // dynamically enabling  styles

  // Dependency injection(Angular automatically creates a instance of service and pass it through the parameter)

  constructor(service: CoursesService) { // also register this service in app.modules.ts

    // let service = new CoursesService(); //no need of creating object instead get service instance from constructor

    this.myCourseList = service.getCoursesList();
  }


  ngOnInit() {
  }

  private mycoursetitle: string = 'Course Title';

  getTitle(): string {
    return this.mycoursetitle;
  }


  // Event handling


  onSave($event) {
    console.log('Button was clicked..');
    console.log('Button Event : ', $event);
  }


  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log('Enter key was pressed....');
    }
  }

  showVal(email) {
    console.log(email);
  }

  // Two way data binding

  myval1: any = 'I love u';
  myval2: any = 'I hate u';

  getVal() {
    console.log('MyValue : ' + this.myval1);
  }

  getVal2() {
    console.log('myVal2 ; ', this.myval2);
  }
    // Pipes (Shortcuts for uppercase, currency, date etc)

  course : {title:string, rating:number, students:number, price: number, releaseDate:any} = {
    title : 'The Angular Course',
    rating : 4.696545,
    students : 15000,
    price : 700.56,
    releaseDate : new Date(2018,2,25)
  };



}

