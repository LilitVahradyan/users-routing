import { Directive, Input, AfterViewInit, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appUserImg]'
})
export class UserImgDirective implements AfterViewInit{
  
  @Input()
  public userImg: string;
 
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }
 
@HostBinding('class.hover') 
  ishovering:boolean;
 
 @HostBinding("style.cursor") get getCursor(){
    return "pointer";
 }
 
  
 ngAfterViewInit() {
    const imgPath: string = './assets/',
    element = this.elementRef.nativeElement;

    if(this.userImg) {
       this.renderer.setAttribute(element, 'src', `${imgPath}${this.userImg}`);
    } 
  }

}
