import { Component } from '@angular/core';
import { TaskManagerComponent } from '../task-manager/task-manager.component'; // ✅ correct path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskManagerComponent], // ✅ import standalone component here
  template: `<app-task-manager></app-task-manager>`,
})
export class AppComponent {
  title = 'Task Manager';
}