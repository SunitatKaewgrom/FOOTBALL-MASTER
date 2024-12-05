import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token') || '',
    }),
  }

  constructor(private http: HttpClient) { }

  login(payload: any): Observable<any> {
    return this.http.post('https://admin.ballded789.co:3000/login', payload, this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )}

}
