import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() villian: any;
  @Input('heroName') heroName= '';

  @Output() killVillian = new EventEmitter<any>();

  onKillvillian(event:any){
    this.killVillian.emit("Poly killed 1st villain")
  }

}
