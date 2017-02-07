import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[Showfullarticle]'
})
export class ShowfullarticleDirective {
  @HostListener('click') onclick() {
    this.showall()
  }
  constructor(private el: ElementRef, private renderer: Renderer) { }
  showall() {
    this.renderer.setElementClass(this.el.nativeElement, 'showall', true)
  }
}