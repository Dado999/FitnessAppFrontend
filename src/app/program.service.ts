import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Program} from "./models/program.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) {
  }
  getPrograms(): Observable<Program[]>{
      return this.http.get<Program[]>('http://localhost:8080/programs')
  }
  getProgram(id:number): Observable<Program>{
    return this.http.get<Program>('http://localhost:8080/programs/' + id);
  }
}
