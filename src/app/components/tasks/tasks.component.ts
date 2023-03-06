import { Component } from '@angular/core';
import {TASKS} from "../../mock-tasks";
import {Task} from "../../interfaces/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: Task[] = TASKS;
}
