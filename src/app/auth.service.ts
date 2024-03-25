import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import {Program} from "./models/program.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  currentUser: User | null = null;
  programs: Program[] = [];
  searchedPrograms: Program[] = [];
  search : string = "";

  constructor() {
    this.loadUserFromLocalStorage();
  }

  loginUser(user: User) {
    this.currentUser = user;
    this.loggedIn = true;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logoutUser() {
    this.currentUser = null;
    this.loggedIn = false;
    localStorage.removeItem('currentUser');
  }

  private loadUserFromLocalStorage() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
      this.loggedIn = true;
    }
  }
}
