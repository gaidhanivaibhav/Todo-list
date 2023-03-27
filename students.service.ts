import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private http:HttpClient) { }

  addstudent( student:any){
    return this.http.post('http://localhost:8080/student/add-student',student);
  }
  liststudent( ){
    return this.http.get('http://localhost:8080/student/');
  }

  deletstudent(id:any){
  return this.http.delete('http://localhost:8080/student/del-student/'+id);
  }

  
  singlestudent(id:any){
    return this.http.post('http://localhost:8080/student/edit',id);
    }
}
