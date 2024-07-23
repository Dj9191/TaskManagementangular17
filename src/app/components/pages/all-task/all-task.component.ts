import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';


@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule,DatePipe,PageTitleComponent,TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
  newTask="";
  taskList:any[]=[];
 DateNow= new Date();
httpService=inject(HttpService);

ngOnInit()
{
  this.getAllTask();
}

  addTask()
  {
    console.log("addtasks",this.newTask);
    this.httpService.addTask(this.newTask).subscribe(()=>{
    console.log("Added");
    this.newTask="";
    this.getAllTask();
  })
  }


  getAllTask()
  {
    this.httpService.getAllTasks().subscribe((result:any)=>
    {
      this.taskList=result;
      console.log(result)
    })
  }
  

  onComplete(task:any)
  {
    task.completed=true;
console.log("complete",task)
this.httpService.updateTask(task).subscribe(
  ()=>{

  }
);
  }

  onImportant(task:any)
  {
    task.important=true;
    
console.log("important",task);

this.httpService.updateTask(task).subscribe(()=>
{

});
  }


  search(searchterm:string)
  {
console.log(searchterm);
  }
}
