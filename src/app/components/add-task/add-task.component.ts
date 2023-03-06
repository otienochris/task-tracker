import { Component, Output, EventEmitter } from '@angular/core';
import {Task} from "../../interfaces/Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text ?: string;
  day: string = '';
  reminder: boolean = false;

  showAddTask?: boolean;
  subscription?: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  onSubmit() {
    if (!this.text) {
      alert('Please add a task ');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // @todo - emit event
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
