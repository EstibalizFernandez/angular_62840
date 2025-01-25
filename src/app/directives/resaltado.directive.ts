import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: false
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = "orange"
    
  }

}
