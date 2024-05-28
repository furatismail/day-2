import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day-2';
}


// reducer.ts

state = [];
switch (Action.type) {
  case 'ADD':

    break;
  case 'DELETE':

    break;
  default:
    break;
}

// action.ts

class ADD() {
  constructor(payload: any) {

  }
}