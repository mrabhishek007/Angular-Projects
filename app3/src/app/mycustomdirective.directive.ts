import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMycustomdirective]'
})
export class MycustomdirectiveDirective {

  /* ElementRef gives acces to dom object of entire project*/
  constructor(private domRef: ElementRef) {

  }


  @HostListener('focus')
  onFocus(){
    console.log('focus ');
  }

  @Input() caseType; // creating an input field on dom to check the case type (optional)

  @HostListener('blur')
  onBlur(){
    console.log('blur');
    let inputText: string = this.domRef.nativeElement.value;

    // from input type we get which type of format we want to use after blur
    if(this.caseType == 'lowercase') this.domRef.nativeElement.value = inputText.toLowerCase();
    if(this.caseType == 'uppercase')  this.domRef.nativeElement.value = inputText.toUpperCase();

  }

}
