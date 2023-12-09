import { Component } from '@angular/core';
import { BannerDirective } from './banner.directive';
import { AddBanner } from './add-banner';

@Component({
  selector: 'app-add-banner',
  
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.css'
})
export class AddBannerComponent impliment OnInit, OnDestroy  {

  globalListFunc : Function | undefined;
  public addItemList : AddItem[] =[];
  currentIndex = -1;

  @ViewChild(BannerDirective,{static: true}) appBanner!: BannerDirective;
  
  private clearTimer: voidFunction| undefined;


  constructor(private bannerService: BannerService, public renderer: Renderer2){
    this.addItemList= this.bannerService.getAdds();
  }

  ngOnInit() : void{
    this.getAdds();
        this.loadDirectives();

        //this.globalListFunc =this.renderer.listen('document','nouseenter', e=> {
         // console.log(e.target.className = 'course-banner' || e.target.className = 'job-banner' );

          //this.clearTimer?.();
        //})

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.clearTimer?.();
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.getAdds();

  loadDirectives() {
    this.currentIndex = ( this.cuurentIndex +1) % this.addItemsList.length;
    const addItems =this.addItemsList[this.currentIndex];
    const viewContainerRef=this.appBanner.viewContainerRef;
    viewContainerRef.clear();

    const createContainer= viewContainerRef.createComponent<AddBanner>(addItems.component);
    createContainer.instance.data =addItems.data;
  }

  getAdds( ) : any{
    const interval =setInterval(=> {
      this.loadDirectives();

    }, 3000);
    this.clearTimer = () => clearInterval(interval );
  }

  ngOnDestroy(): void{
    this.clearTimer?.();



  }
}
