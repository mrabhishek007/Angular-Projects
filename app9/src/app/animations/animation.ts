import {animate, animation, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';

// creating custom reusable animations with animation()
export let customBounceLeftAnimation = animation(
  animate('1s 0.5s ease-in', keyframes([
    style({
      offset: 0.2,
      opacity: 1,
      transform: 'translateX(50px)'
    }),
    style({
      offset: 1,
      opacity: 0,
      transform: 'translateX(-100%)'
    })
  ]))
);

export let fade = trigger('fade', [

  state('void', style({opacity: 0})),

  // form curr state to void state (void state style is defined above)
  transition('* => void', [
    animate(2000)
  ]),

  // form void state to curr state (void state style is defined above)
  transition('void => *', [
    animate(2000)
  ])
]);

export let swipeLeft = trigger('swipeLeft', [

  state('void', style({transform: 'translateX(-100%)'})),

  transition('* => void', [
    animate('0.5s 1s ease-in')
  ])
]);


export let bounceLeft = trigger('bounceLeft', [

  transition('void => *',
    [
      style({transform: 'transLateX(-100px)'}),
      animate(500)
    ]
  ),

  // when comes to void state i.e. dom is removed it will animate
  transition('* => void', [
      animate('1s 0.5s ease-in', keyframes([
        style({
          offset: 0.2,
          opacity: 1,
          transform: 'translateX(50px)'
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translateX(-100%)'
        })
      ]))
    ]
  )
]);







