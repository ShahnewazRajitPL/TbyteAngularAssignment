import { Component } from '@angular/core';
import { Student } from '../../_models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
  student: Student | undefined;
  constructor(private router: Router,private studentService:StudentService){

    this.loadStudent();


  }

  loadStudent(){
    const navigationBehavior =this.router.getCurrentNavigation();
    this.student= navigationBehavior?.extras?.state?.['studet'][0];

   console.log("");
    

  }

  updateStudent(student: Student){
    this.studentService.updateStudent(student).subscribe(()=>{
      this.router.navigate(['/dashboard'])
    });

  }

}
