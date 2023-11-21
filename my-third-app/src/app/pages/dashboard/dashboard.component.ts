import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';
import { NavigationExtras, Router } from '@angular/router';
import { StudentsCach } from '../_models/students-mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[] =[];
  constructor(private studentSevice : StudentService, private router: Router){}
  ngOnInit(): void {
    this.loadStudent();
    this.students= StudentsCach;
  }
  loadStudent() {
    this.studentSevice.getStudents().subscribe({next: (res) => {
      this.students= res;
    }})
  }

  navigateStudent(id: number){
    this.studentSevice.getStudentsById(id).subscribe({next: (res:Student) =>{
      if(res){
        const navigationExtras: NavigationExtras={
          state: {student: res}
        }
        this.router.navigateByUrl('/detail/${id}', navigationExtras)
        //console.log(res);

      }else{
        console.log("there is no student found");
      }
    }})
  }

  addStudent(name: string): void{

    name =name.trim();
    if(!name){return;}

    this.studentService.saveStudent({name} as Student).subscribe(student =>{
      this.students.push(student);
    })

  }

  removeStudents(student: Student): void{

    this.students= this.students.filter(res =>res !=student);
    {
      this.studentService.removeStudentById(student.id).subscribe();

      }

    }
  }

}
