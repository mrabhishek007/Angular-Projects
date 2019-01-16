import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import ThenableReference = firebase.database.ThenableReference;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  courses$: AngularFireList<any>;
  courseList$;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.courses$ = this.db.list('/Course');
    this.courseList$ = this.courses$.snapshotChanges();
    console.log(this.courseList$);

  }

  showInputText(parentDiv: HTMLInputElement, inputText: HTMLInputElement) {
    parentDiv.style.setProperty('display', 'none', 'important');
    inputText.style.setProperty('display', 'block');
  }


  update(course, inputEle: HTMLInputElement, divEle) { // course is a firebase obj

    let updatedVal = inputEle.value;

    let key = course.payload.key;
    let val = course.payload.val();

    //  set => Replaces the current obj entirely in the database with the new value specified as the parameter.
    this.db.object('/Course/' + key).set(updatedVal)
      .then(res => {
        console.log('course updated');
        inputEle.style.display = 'none'; //making input text invisible & showing curr val again after updating
        divEle.style.setProperty('display', 'block', 'important');

      })
      .catch(err => {
        console.log(err);
      });


    // update => updates the current value with in the database with the new value specified as the parameter.
    /*
        this.db.object('/Course/' + key).update({
            'name': updatedVal,  // adds new property if not avail, old property will not get deleted
            // 'isAvail': true //if this property is there it will not get deletec
          }
        )
          .then(res => {
            console.log('course updated');
            inputEle.style.display = 'none'; //making input text invisible & showing curr val again after updating
            divEle.style.setProperty('display', 'block');

          })
          .catch(err => {
            console.log(err);
          });
    */

  }

  delete(course) {
    this.db.object('/Course/' + course.payload.key).remove()
      .then(resolve => {
        console.log('Deleted Sucessfully');
      })
      .catch(reject => {
        alert('Unabler to delete');
      });
  }


  add(data: HTMLInputElement) {

    /* Adding Simple Obj (unique key will be automatically provided by firebase)
    let course = data.value;
    */

    // Adding complex object (unique key will be provided by firebase)
    let course = {
      'isLive': true,
      'price': 1000,
      'name': data.value,
      'topics': [
        'Component',
        'Routing',
        'Services'
      ]
    };

    let add: ThenableReference = this.courses$.push(course);

    add.then(res => {
      console.log('value added');
      data.value = '';
    }, rej => {
      console.log(rej);
    });

    const courseKey = add.key;
    console.log(' key ', courseKey);

  }


}
