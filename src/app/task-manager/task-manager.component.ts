import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']

})
export class TaskManagerComponent {
  newTask: string = '';
  tasks: string[] = [];

  ngOnInit(): void {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
      this.updateLocalStorage();
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}


