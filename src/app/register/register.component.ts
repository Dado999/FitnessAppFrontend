import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CommonModule} from "@angular/common";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userData={
    name: '',
    surname: '',
    username: '',
    password: '',
    email: '',
    city: ''
  }

  constructor(private userService: UserServiceService) {
  }
  @ViewChild('name') nameInput!: ElementRef ;
  @ViewChild('surname') surnameInput!: ElementRef ;
  @ViewChild('username') usernameInput!: ElementRef ;
  @ViewChild('password') passwordInput!: ElementRef ;
  @ViewChild('passwordConfirm') passwordConfirmInput!: ElementRef ;
  @ViewChild('email') emailInput!: ElementRef ;
  @ViewChild('city') cityInput!: ElementRef ;
  getUserData(): void{
    this.userData.name = this.nameInput.nativeElement.value;
    console.log(this.userData.name);
    this.userData.surname = this.surnameInput.nativeElement.value;
    console.log(this.userData.surname);
    this.userData.username = this.usernameInput.nativeElement.value;
    console.log(this.userData.username);
    this.userData.password = this.passwordInput.nativeElement.value;
    console.log(this.userData.password);
    this.userData.email = this.emailInput.nativeElement.value;
    console.log(this.userData.email);
    this.userData.city = this.cityInput.nativeElement.value;
    console.log(this.userData.city);
  }
  registerUser(): void {
    this.getUserData();
    if (this.userData.password === this.passwordConfirmInput.nativeElement.value) {
      console.log('1')
      this.userService.registerUser(this.userData).subscribe(response => {
        window.alert('User registered successfully!');
      })
    }
    else
      window.alert('Passwords dont match!');
  }
}
