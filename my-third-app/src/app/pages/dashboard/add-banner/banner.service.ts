import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }
  getAdds(){
    return[
      new AddItem(JobofferComponent,{
        title: 'Software Developer',
        body: 'We are looking for software developer',
        requirement: 'ASP.NET and angular'
      }),

      new AddItem(JobofferComponent,{
        title: 'DevOps Engineer',
        body: 'We are looking for furthur information',
        requirement: 'CICD, Automation'
      }),

      new AddItem(CourseOfferComponent,{
        title: 'Industrial Software Bootcamp',
        body: 'C#, SQl,Angular,Algo',
        coursePrice: '1500 BDT'
      }),

      new AddItem(JobofferComponent,{
        title: 'Machine Learning',
        body: 'Python, tensorFlow, panda',
        coursePrice: '2500 BDT'
      }),
    ];
  }
}
