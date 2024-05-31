import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://uoji21tz9c.execute-api.us-east-1.amazonaws.com/CloudProject';

  constructor(private http: HttpClient) { }

  sendEmail(email:string, username:string, groupId = null, token = null) {
    const body: { email: string; username: string; groupId?: any; token?: any } = {
      email: email,
      username: username
    };

    if (groupId) {
      body.groupId = groupId;
    }
    if (token) {
      body.token = token;
    }

    const jsonBody = JSON.stringify({ body: body });
    return this.http.post(this.apiUrl, jsonBody).pipe(
      catchError(error => {
        console.error('Error sending magic link', error);
        return throwError(error);
      })
    );
  }
}
