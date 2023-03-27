import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addstudent:any;

  constructor(private fb:FormBuilder,
    private routes:Router,
    private studentservice:StudentsService
    ){
      this.addstudent = fb.group(
        {
          firstName:['',Validators.required,],
          lastName:['',Validators.required,],
          Due_Date:['',Validators.required,],



      })
    }
    ngOnInit(): void {
      
    }
  




  onSubmit(){

    console.log(this.addstudent.value)
    this.studentservice.addstudent(this.addstudent.value).subscribe((data:any)=>{
      console.log(data)
      this.routes.navigate(['/list-student']);
    })


  }

  
}
