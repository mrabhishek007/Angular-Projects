import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  courseList = ['Angular', 'Node.js', 'MongoDB'];

  viewMode = 'map'; // used for switch code

  countryList = [
    {"id":1, "country":"India"},
    {"id":2, "country":"UK"},
    {"id":3, "country":"US"},
  ];

  onAdd(){
    this.countryList.push({"id":(this.countryList.length+1), country: "Norway"})
  }

  onRemove(country){
   const index =  this.countryList.indexOf(country);
   this.countryList.splice(index,1)
  }

  onChange(country){
    country.country = 'Updated';
  }

  person = {
    name: 'raj',
    age: 21,
    address : {
      city: 'Bangalore'
    }     /*address : null */

  }




}
