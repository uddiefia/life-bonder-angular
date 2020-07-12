import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolldirective]'
})
export class ScrolldirectiveDirective {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 45) {
      document.getElementById('nav-menu').classList.add('is-scrolling');
    }
    if (document.documentElement.scrollTop < 45) {
      document.getElementById('nav-menu').classList.remove('is-scrolling');
    }
  }

}
