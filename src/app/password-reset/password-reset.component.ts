import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    CommonModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {

}
