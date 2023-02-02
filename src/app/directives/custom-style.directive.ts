import {Directive, Input, ElementRef, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class CustomStyleDirective implements OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @Input('appStyle') set setStyle(styles: Object) {
    let entries = Object.entries(styles)
    // console.log(entries)
    for (let entry of entries) {
      this.renderer.setStyle(this.el.nativeElement, entry[0], entry[1])
    }
  }

  ngOnInit() {
    // (this.el.nativeElement as HTMLElement).style.backgroundColor = 'red'
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
    return
  }
}
