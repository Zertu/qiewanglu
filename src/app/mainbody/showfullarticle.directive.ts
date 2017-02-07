import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[Showfullarticle]'
})
export class ShowfullarticleDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    console.log(el)
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}