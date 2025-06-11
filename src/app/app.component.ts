
import { Component } from '@angular/core';
import { TaskManagerComponent } from './task-mamager.component';
@Component({
   standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[TaskManagerComponent],
})
export class AppComponent{};