import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
 
    {
      path:'',component:ListStudentComponent
  },
  {
     path:'add-student',component:AddStudentComponent
  },{
    path:'list-student',component:ListStudentComponent
  },
  {
      path:'edit-student/:id',component:EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
