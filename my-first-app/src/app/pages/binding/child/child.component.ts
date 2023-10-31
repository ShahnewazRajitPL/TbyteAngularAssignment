import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() villian! : any;
  @Input('heroName') heroName= '';

  @output() killVillian = new EventEmitter<any>();

  onKillVillian(event: any) {
    this.killVillian.emit("Poly killed 1st villian")
  }

}
function output(): (target: ChildComponent, propertyKey: "killVillian") => void {
  throw new Error('Function not implemented.');
}

