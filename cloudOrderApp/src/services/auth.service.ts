import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://cognito-idp.us-east-1.amazonaws.com/';
  private clientId = '4n1jrippa9cilu522vhjieckoa';

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string) {
    const body = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: this.clientId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password
      }
    };
    return this.http.post(`${this.apiUrl}`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-amz-json-1.1',
        'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
      })
    });
  }

  signUp(username: string, password: string, email: string) {
    const body = {
      ClientId: this.clientId,
      Username: username,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email
        }
      ]
    };
    return this.http.post(`${this.apiUrl}`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-amz-json-1.1',
        'X-Amz-Target': 'AWSCognitoIdentityProviderService.SignUp'
      })
    });
  }
}
