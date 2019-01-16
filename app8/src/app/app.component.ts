import {Component, OnDestroy} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  courseList = [];
  courseSubscription: Subscription; // observable returns subscription. Uses to unsubscribe
  singleCourse;
  singleCourseSubscription: Subscription;


  // USING ASYNC PIPE
  courseList$;
  singleCourse$;
  author$;

  constructor(public db: AngularFireDatabase) {

    this.getCourses(); // Using traditional approach (Manually preventing memory leak)

    this.getCoursesUsingAsyncPipe(); // Using async pipe (Cleaner code and automatic memory cleanup prevent Memory leak)

  }

  getCourses() {

    //Unsubscribe form observable manually to prevent memory leaks or use async pipe to do the process automatically

    // CASE 1 -> MANUAL PROCESS

    this.courseSubscription = this.db.list('/Course').valueChanges() // retrieving list
      .subscribe(result => {
        this.courseList = result;
        console.log(result);
      });

    this.singleCourseSubscription = this.db.object('/Course/Course1').valueChanges()  // retrieving single obj
      .subscribe(result => {
        this.singleCourse = result;
        console.log(result);
      });

  };


  getCoursesUsingAsyncPipe() {

    // CASE 2 -> Using Async Pipes Automatic Process (No need to subscribe manually) [1 line of code is required only]

    this.courseList$ = this.db.list('/Course').valueChanges(); // retrieving list
    this.singleCourse$ = this.db.object('/Course/Course1').valueChanges();  // retrieving single obj

    this.author$ = this.db.object('/Author/1').valueChanges(); // retrieving complex obj

  }


  // Unsubscribe all the active Observables while routing otherwise it will cause memory leak
  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe(); // unsubscribe observable to prevent memory leaks while routing
    this.singleCourseSubscription.unsubscribe();
  }

}
