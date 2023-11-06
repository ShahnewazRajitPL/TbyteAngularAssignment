import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //Read(Get)

  private studentsUrl = 'app/students';
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

  private handleErrorResponse<T> (opertaion ='operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      console.log('${opertaion} failed: $(error.message)');
      return of(result as T);

    }
  }
}
