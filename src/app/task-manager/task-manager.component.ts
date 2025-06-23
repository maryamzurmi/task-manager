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
  tasks: Array<{ name: string; completed: boolean }> = [];

  editIndex: number | null = null;
  editedTaskName: string = '';


  ngOnInit(): void {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = '';
      this.updateLocalStorage();
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.updateLocalStorage();
  }
  toggleStatus(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.updateLocalStorage();
  }

  editTask(index: number) {
    this.editIndex = index;
    this.editedTaskName = this.tasks[index].name;
  }

  saveEditedTask() {
    if (this.editIndex !== null) {
      this.tasks[this.editIndex].name = this.editedTaskName.trim();
      this.editIndex = null;
      this.editedTaskName = '';
      this.updateLocalStorage();
    }
  }

  cancelEdit() {
    this.editIndex = null;
    this.editedTaskName = '';
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}


