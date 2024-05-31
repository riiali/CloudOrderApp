import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent
import { AuthenticationFlowComponent } from './authentication-flow/authentication-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, AuthenticationFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cloudOrderApp';
}
