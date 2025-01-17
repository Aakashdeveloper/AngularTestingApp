import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightEntry]',
  standalone: true
})
export class HighlightEntryDirective {

  e:ElementRef
  constructor(el:ElementRef) { 
    this.e = el;
  }

  @HostListener('mouseenter')
  changeFontFamily(){
    this.e.nativeElement.style.fontFamily = 'cursive'
  }

  @HostListener('mouseleave')
  resetFontFamily(){
    this.e.nativeElement.style.fontFamily = 'Arial'
  }
}
