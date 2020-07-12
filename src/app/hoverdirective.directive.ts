import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverdirective]'
})
export class HoverdirectiveDirective {
  @HostBinding('style.color') color: string = '#5bb1d3';
  constructor() { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.color = 'white';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.color = '#5bb1d3';
  }

}
