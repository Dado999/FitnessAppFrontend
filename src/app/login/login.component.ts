import {Component, ViewChild,ElementRef} from '@angular/core';
import {UsersComponent} from "../users/users.component";
import {SharedService} from "../shared.service";
import {UserServiceService} from "../user-service.service";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {RegisterComponent} from "../register/register.component";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    UsersComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RegisterComponent,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showLoginForm: boolean = true;
  constructor(private userService: UserServiceService, private router: Router,private authService: AuthService) {}
  @ViewChild('usernameInput') usernameInput!: ElementRef ;
  @ViewChild('passwordInput') passwordInput!: ElementRef ;
  onLoginClick(){
    if (this.usernameInput && this.usernameInput.nativeElement) {
       const username = this.usernameInput.nativeElement.value;
       const password = this.passwordInput.nativeElement.value;
      this.userService.getUser(username).subscribe(user => {
        if(user) {
          if(user.password === password) {
            this.authService.loginUser(user);
            this.router.navigate(['homepage']);
          }
          else
            window.alert("Incorrect password or username!");
        }
        else {
          window.alert("Incorrect password or username!");
        }
      });
    }
  }
}
