import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://uoji21tz9c.execute-api.us-east-1.amazonaws.com/CloudProject';

  constructor(private http: HttpClient) { }

  getUser(id:string) {
    let url = `${this.apiUrl}/items/${id}`;
    console.log(url);
    return this.http.get(url)
      .pipe(
      catchError(error => {
        // Handle error
        return throwError(error);
      })
    );
  }

  addOrder(userId:string, tableId:string, orderItems:any) {
    const order = {
      orderName: 'exampleOrder',
      numero: 1
    };

    return this.http.post(`${this.apiUrl}/addUserOrder/${userId}`, { tableId, orderItems: [order] })
      .pipe(
      catchError(error => {
        return throwError(error);
      })
      );
  }

}
