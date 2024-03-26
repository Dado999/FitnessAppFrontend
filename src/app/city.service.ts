import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "./models/city.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {

  }
    getCity(cityName:string): Observable<City>{
       return this.http.get<City>('http://localhost:8080/cities/city/' + cityName);
    }
    insertCity(city:City):Observable<any>{
       return this.http.post('http://localhost:8080/cities/',city);
    }
}
