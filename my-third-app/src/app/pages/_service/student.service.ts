import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //Read(Get)

  private studentsUrl = 'api/students';
  httpOptions ={
    headers :new HttpHeaders({'Content-Type': 'application/json'})
  }


  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      tap((_) => console.log('Fetched all students')),
      catchError(this.handleErrorResponse<Student[]>('getStudents',[]))
    )
  }

  getStudentsById(id: number): Observable<Student>{
    const url= '${this.studentsUrl}?id= ${id}';
    return this.http.get<Student>(url).pipe(
      tap((_) => console.log('Fetched student by ${id}')),
      catchError(this.handleErrorResponse<Student>('getStudentsby ${id}'))
    )
  }

  saveStudent(student:Student) : Observable<Student> {
    return this.http.post<Student>(this.studentsUrl,student,this.httpOptions).pipe(
      tap((newStudent: Student) => console.log('Add new Student w/id  ${newStudent.id}')),
      catchError(this.handleErrorResponse<Student>('Save Student'))
    )

  }

  removeStudentById(id: number): Observable<Student>{
    const url= '${this.studentsUrl}/${id}';
    return this.http.delete<Student>(url).pipe(
      tap((_) => console.log('Updated student')),
      catchError(this.handleErrorResponse<Student>('Update student'))
    )
  }


  updateStudent(student:Student) : Observable<Student> {
    return this.http.put<Student>(this.studentsUrl,student,this.httpOption).pipe(
      tap((newStudent: Student) => console.log('Add new Student w/id  ${newStudent.id}')),
      catchError(this.handleErrorResponse<Student>('Save Student'))
    )

  }

  searchStudents(terms: string): Observable<Student>{
    if(!terms.trim()) return of([]);
    return this.http.get<Student[]>(this.studentsUrl,student,this.httpOption).pipe(
      tap((_) => console.log('Fetched student')),
      catchError(this.handleErrorResponse<Student[]>('getStudents',[]))
    )
  }

  private handleErrorResponse<T> (opertaion ='operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      console.log('${opertaion} failed: $(error.message)');
      return of(result as T);

    }
  }
}
