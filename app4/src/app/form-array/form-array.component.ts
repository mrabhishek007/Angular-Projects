import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  constructor() {
  }

  form = new FormGroup({
    myTopics: new FormArray([])
  });

  /*   QUICK RECAPS ---------------

    AbstractControl is the parent class for FormControl, FormGroup, FormArray
*
*     1. FormControl is used to store info. about an input field
*     2. FormGroup is used to group similar type of input field i.e FormControl
*     3. FormArray is used to store array of values of a input field like we do in this example
* */

  addTopic(topic: HTMLInputElement) {
    this.getTopics().push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(sub: FormControl){
   let index = this.getTopics().controls.indexOf(sub);
   this.getTopics().removeAt(index);
  }

  getTopics(){
    return this.form.get('myTopics') as FormArray;
  }

}
