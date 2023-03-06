import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../interfaces/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  constructor(private taskService: TaskService) {}
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe((tasks) => this.tasks = tasks);
  }
}
