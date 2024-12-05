import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  private baseUrl = 'https://admin.ballded789.co:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token') || '',
    }),
  }

  constructor(private http: HttpClient) { }

  // get tb1 data (/tb1all)
  getTb1(): Observable<any> {
    return this.http.get(this.baseUrl + '/tb1all', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // get tb2 data (/tb2all)
  getTb2(): Observable<any> {
    return this.http.get(this.baseUrl + '/tb2all', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // get tb3 data (/tb3all)
  getTb3(): Observable<any> {
    return this.http.get(this.baseUrl + '/tb3all', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // masterall
  getMaster(): Observable<any> {
    return this.http.get(this.baseUrl + '/masterall', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }

  // get message
  getMessage(): Observable<any> {
    return this.http.get(this.baseUrl + '/message', this.httpOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return error;
      }),
    )
  }



}
