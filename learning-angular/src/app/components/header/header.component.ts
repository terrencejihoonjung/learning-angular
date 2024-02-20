import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true, // This marks the component as standalone
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // This should be styleUrls, not styleUrl
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('TOGGLE');
  }
}
