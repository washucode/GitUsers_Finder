import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private styleElem:ElementRef) {
    this.styleElem.nativeElement.style.backgroundColor='#161716';
    this.styleElem.nativeElement.style.color ='white';
  }  

}
