import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService{

  constructor() { }

  createDb()  {

    const students: Student [] =[
      {id:1, name: "Rajit", description:'R is good'},
      {id:2, name: "poly"},
      {id:3, name: "hello"},
      {id:4, name: "gelo"},
      {id:5, name: "nio"},
      {id:6, name: "Loi"},
      {id:7, name: "JI"},
      {id:8, name: "Plo",description:'R is also good'},
      {id:9, name: "Hoy"},

    ];
    return {students};

  }

  genId(students:Student[]): number{
    return students.length>0? Math.max(...students.map((x) => x.id))+1 : 11;

  }
}
