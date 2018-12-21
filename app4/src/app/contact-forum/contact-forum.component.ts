import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-forum',
  templateUrl: './contact-forum.component.html',
  styleUrls: ['./contact-forum.component.css']
})
export class ContactForumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(inputObj){
    console.log(inputObj);
  }

  submitForm(formObj){
    console.log(formObj);
    if(formObj.valid){
      console.log('Submitted to API',formObj.value); // we can directly get all data of form object using this technique
      alert('Form submitted sucessfully');
    }else {
      alert('Form is invalid')
    }

  }

  hobbieList = [
    {'id':1, 'hobbie':'coding'},
    {'id':1, 'hobbie':'music'},
    {'id':1, 'hobbie':'movies'}
  ]




}
