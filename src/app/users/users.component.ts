import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {UserServiceService} from "../user-service.service";
import {CommonModule} from "@angular/common";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  user!: User
  constructor(private userService: UserServiceService,private sharedService: SharedService) {
    console.log('1');
    this.sharedService.trigger$.subscribe((username:string) => this.getUser(username));
  }

  ngOnInit(): void{
  }
  getUser(username:string): void {
    this.userService.getUser(username).subscribe((user: User) => {
      this.user = user;
    });
    console.log(this.user?.username + this.user?.email);
  }
}
