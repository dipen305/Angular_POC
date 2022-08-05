import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector:'[appHighlightBgColor]'
})
export class HighlightBgColorDirective implements OnInit {
@HostBinding('style.backgroundColor') backgroundColor!:string;

  @Input() customBgColor:any;
constructor(private elementRef:ElementRef,private renderer:Renderer2){}
ngOnInit() {
  // this.renderer.setStyle(this.elementRef.nativeElement,'background',this.customBgColor);
  this.backgroundColor = this.customBgColor;
}
@HostListener('mouseenter') mouseover(){
  this.backgroundColor = '#a2eda2';
  // this.renderer.setStyle(this.elementRef.nativeElement,'background','red');
}
@HostListener('mouseleave') mouseleave(){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background','transparent');
  this.backgroundColor = 'transparent'
}
}