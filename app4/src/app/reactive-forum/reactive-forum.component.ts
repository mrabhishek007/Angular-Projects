import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../custom-validators/UsernameValidators';

@Component({
  selector: 'app-reactive-forum',
  templateUrl: './reactive-forum.component.html',
  styleUrls: ['./reactive-forum.component.css']
})
export class ReactiveForumComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(formObj) {
    console.log(formObj);
  }

  myForm = new FormGroup({
    'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace, /*custom validators*/
      ],
      UsernameValidators.shouldBeUnique /*custom asynchronous validators*/
    ),
    // it 2nd args accepts single validators or array of validators if u want to add multiple validations, 3rd args accepts async validators

    'password': new FormControl('', Validators.required)
  });


  // when user submit the form handle the error (dummy form)
  onSubmit() {
    this.myForm.setErrors({
      isInvalidUsername: true
    });
    console.log(this.myForm);
  }

}
