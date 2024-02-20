import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true, // This marks the component as standalone
  imports: [RouterOutlet, HeaderComponent, TasksComponent], // Declare imports needed by this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // This should be styleUrls, not styleUrl
})
export class AppComponent {}
