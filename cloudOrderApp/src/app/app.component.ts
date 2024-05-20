import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent

/*@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'*/
@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to My App</h1>
    <app-login></app-login>
  `,
  standalone: true,
  imports: [LoginComponent] // Add LoginComponent to the imports array
})

export class AppComponent {
  title = 'cloudOrderApp';
}
