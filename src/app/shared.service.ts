import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private trigger = new Subject<string>();

  trigger$ = this.trigger.asObservable();
  findUserByUsername(username:string){
    this.trigger.next(username);
  }
  constructor() { }
}
