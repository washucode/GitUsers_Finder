import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private styleElem:ElementRef) {
    this.styleElem.nativeElement.style.backgroundColor='rgba(238, 90, 36,1.0)';
  }  

}
