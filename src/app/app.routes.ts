import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {HomepageComponent} from "./homepage/homepage.component";

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent},
  { path: 'password-reset', component:PasswordResetComponent},
  { path: 'guest-homepage', component: HomepageComponent}
];
