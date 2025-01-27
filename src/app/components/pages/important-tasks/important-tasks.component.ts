import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-important-tasks',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './important-tasks.component.html',
  styleUrl: './important-tasks.component.scss'
})
export class ImportantTasksComponent {
  newTask = "";
  taskList: any[] = [];
  DateNow = new Date();
  httpService = inject(HttpService);

  ngOnInit() {
    this.getAllTask();
  }
  getAllTask() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.taskList = result.filter((x: any) => x.important == true);
      console.log(result)
    })
  }


  onComplete(task: any) {
    task.completed = true;
    console.log("complete", task)
    this.httpService.updateTask(task).subscribe(
      () => {

      }
    );
  }

  onImportant(task: any) {
    task.important = true;

    console.log("important", task);

    this.httpService.updateTask(task).subscribe(() => {

    });
  }
}
