import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  addstudent:any;
  id: any;

  constructor(private fb:FormBuilder,
    private routes:Router,
    private studentservice:StudentsService,
    private url:ActivatedRoute

    ){
      this.editstudent = fb.group(
        {
          firstName:['',Validators.required,],
          lastName:['',Validators.required,],
          Due_Date:['',Validators.required,],



      })
    }
    ngOnInit(): void {
      this.id=this.url.snapshot.params['id'];
      console.log(this.id)
      
    }
  




  onSubmit(){

    console.log(this.editstudent.value)
    this.studentservice.addstudent(this.editstudent.value).subscribe((data:any)=>{
      console.log(data)
      this.routes.navigate(['/list-student']);
    })


  }

  
}
