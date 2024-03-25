import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./models/user.model";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUser(username:string): Observable<User>{
    return this.http.get<User>('http://localhost:8080/users/username/'+username);
  }

  getUserId(id:number):Observable<User>{
    return this.http.get<User>('http://localhost:8080/users/id/' + id);
  }

  registerUser(userData: any): Observable<any>{
    return this.http.post('http://localhost:8080/users/',userData);
  }
}
