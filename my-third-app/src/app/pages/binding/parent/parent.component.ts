import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  hero='Ms. poly';
  villians=[
    {id: 1, name: 'Dipjol'},
  ];

  polyKilled(event: any){
    console.log(event);

  }

}
