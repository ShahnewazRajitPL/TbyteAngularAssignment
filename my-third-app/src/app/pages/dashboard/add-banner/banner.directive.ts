import { Directive } from '@angular/core';

@Directive({
  selector: '[appBanner]',
  
})
export class BannerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
