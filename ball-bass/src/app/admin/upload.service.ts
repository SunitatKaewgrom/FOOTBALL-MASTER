import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'https://admin.ballded789.co:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token') || '',

    }),
  }

  constructor(private http: HttpClient) {}

  // post file to server and return response as observable of HttpEvent type and use httpOptions to send token
  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('image', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token') || '',
      }),
    });

    return this.http.request(req);
  }
}
