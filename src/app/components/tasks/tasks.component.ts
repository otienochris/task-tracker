import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../interfaces/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task?: Task) {
    if (task !== undefined) {
      this.taskService.deleteTask(task).subscribe((task) => this.tasks = this.tasks.filter(t => t.id !== task.id));
    } else {
      alert("Cannot delete undefined task")
    }
  }

  toggleReminder(task?: Task) {
    if (task !== undefined){
      task.reminder = !task.reminder;
      this.taskService.updateTaskReminder(task).subscribe();
    }
  }
}
