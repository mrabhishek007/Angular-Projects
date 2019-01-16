import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {bounceLeft,  customBounceLeftAnimation, fade, swipeLeft} from '../animations/animation';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],


  /*
        style will be always in camel case

     // Case 1 (Not recommended bcz the code has too much repeation ) although it is valid

    animations: [
      trigger('fade', [

        // when a dom element is generated element moves from void state to current state (fade in effect)
        transition('void => *', [/!* 'void' means void state , '*' means destination state  (here animate() refers to destination state)    *!/
          style({opacity: 0/!*, backgroundColor: 'lightsalmon'*!/}),
          animate(2000) // returns to default style after 2s animation even if we don't provide after style
          // animate(2000, style({backgroundColor: 'white', opacity: 1}))  (not required bcz at last animation will back to its default state just use the above syntax)
        ]),

        /!*when dom element is removed state from current state to void state (fade out effect)  *!/
        transition('* => void', [ /!* destination state to void state  here animate() refers to void state *!/
          animate(2000, style({opacity: 0}))
        ])
      ])
    ]

    */
  /*
    /!*case 2 (recommended)  we are using state here which helps to write cleaner code *!/

    animations: [
      trigger('fade', [

        state('void', style({opacity: 0})),

        // form curr state to void state (void state style is defined above)
        transition('* => void', [
          animate(2000)
        ]),

        // form void state to curr state (void state style is defined above)
        transition('void => *', [
          animate(2000)
        ])

        // if we have multiple transition with same implementation we can simply use bidirectional arrow symbol to write code in
        //    single line , here fade in & fade out has same implementation so we can write code like following :

        /!*   Valid (above code in a single line)
         transition('void <=> *', [
              animate(200);
            ])
        *!/

      ])
    ]

    */

//  CASE 3            REUSABLE ANIMATIONS
// defining the trigger in another file so animation can be reusable anywhere
  animations: [
    fade,
    swipeLeft,
    bounceLeft,
    trigger('bounceLeftCustom', [

      transition('void => *', [
        style({opacity: 0}),
        animate(500)
      ]),

      transition('* => void', [
        style({backgroundColor: 'red'}), // 1st animation  ends
        animate(1000),
        useAnimation(customBounceLeftAnimation) // 2nd animation start
      ])
    ])
  ]


})

export class TodoComponent {

  constructor() {
  }

  list = [
    'This is me',
    'Hoe are you',
    'Are you feeling well ?',
    'I will talk to you later'
  ];


  add(item: HTMLInputElement) {
    this.list.push(item.value);
    item.value = '';
  }

  remove(item) {
    const itemiIndex = this.list.indexOf(item);
    this.list.splice(itemiIndex, 1);
  }


}
