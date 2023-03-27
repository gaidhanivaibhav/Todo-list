import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
students:any;
  student: any;
  constructor(private studentservice:StudentsService,
    private routes:Router){}



  ngOnInit():void{
    this.loadstudent();

  }
loadstudent(){
  this.studentservice.liststudent().subscribe((data:any)=>{
    // console.log(data)
    this.students = data;
  })
}

delstudent(datas:any){
  this.studentservice.deletstudent(datas._id).subscribe(data=>{
    console.log(data);
    this.students = this.students.filter((u:any)=>u!==datas)
  })
}
}
