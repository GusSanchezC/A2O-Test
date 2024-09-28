import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  sendData(data: any,url: string): Observable<any> { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`http://127.0.0.1:8000/problems/${url}`, data, { headers });
  }

}
