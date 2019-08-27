import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'applications/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private http: HttpClient) {
    httpOptions.headers.append('Access-Control-Allow-Origin', '*"');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
   }
  url = 'http://localhost:4000';
  getUsers(){
  return this.http.get(`${this.url}/data`);
  }
}
export interface Data{
  id:number,
  login:string,
  email: string
}
