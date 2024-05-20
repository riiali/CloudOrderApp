import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import {autoSignIn, AuthError, AuthSession, AuthTokens, AuthUser} from '@aws-amplify/auth';
import { AuthTokenStorageKeys } from '@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/types';
Amplify.configure(awsExports);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Import FormsModule and CommonModule here
})
export class LoginComponent {
  email: string = '';
  message: string = '';

  constructor() {}

  async sendMagicLink() {
    try {

    } catch (error) {

    }
  }
}
