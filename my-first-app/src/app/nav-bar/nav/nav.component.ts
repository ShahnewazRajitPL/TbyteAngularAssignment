import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navRouter: Array<any>;

  constructor(){
    this.navRouter=[];
  }

  ngOnInit(): void {
    this.navRouter=[
      {routerName: 'binding', displayName: 'Binding'},
      {routerName: 'binding', displayName: 'Dashboard'},
    ]
    
  }

}
