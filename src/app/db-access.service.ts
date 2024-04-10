import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbAccess {

  constructor(private httpClient : HttpClient) { }

  post(body:any, action:string) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    return this.httpClient.post("http://localhost:8080/"+action,body,httpOptions);
  }

}
