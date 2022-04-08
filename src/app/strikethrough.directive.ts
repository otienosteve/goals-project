import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(public elem:ElementRef) {
  
   }

   @HostListener('click') onClick(){
    this.textDeco('line-through')
   }
   @HostListener('dblclick') onDbClick(){
    this.textDeco('None')
  }
  textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }
}
