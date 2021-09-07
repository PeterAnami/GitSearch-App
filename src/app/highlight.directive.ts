import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}
  @Input() defaultColor: string;
  @Input("highlight") highlightColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || "#72ed26");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
