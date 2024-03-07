import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {UserServiceService} from "../user-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void{
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
