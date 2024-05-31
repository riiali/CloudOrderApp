import { Component, NgModule, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import {autoSignIn, AuthError, AuthSession, AuthTokens, AuthUser} from '@aws-amplify/auth';
import { AuthTokenStorageKeys } from '@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/types';
Amplify.configure(awsExports);
import { ApiService } from '../../services/sendMagicLinkApiService'
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [ApiService]
})
export class LoginComponent {
  email: string = '';
  username: string = '';
  groupId: any = null;
  constructor(private apiService: ApiService) {}

  checkIfExistingUser(){

  }
  sendMagicLink() {
    console.log('Sending magic link to:', this.email);
    this.apiService.sendEmail(this.email, this.username, this.groupId).subscribe(
      response => {
        console.log('Magic link sent successfully');
        alert('Magic link sent successfully!');
      },
      error => {
        console.error('Failed to send magic link:', error);
        alert('Failed to send magic link. Please try again.');
      }
    );
  }

}
