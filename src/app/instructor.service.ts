import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Instructor} from "./models/instructor.model";

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  getInstructor(id:number): Observable<Instructor>{
    return this.http.get<Instructor>('http://localhost:8080/instructors/' + id);
  }
}
