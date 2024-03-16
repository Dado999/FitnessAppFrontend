import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {CardComponent} from "./card/card.component";

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'password-reset', component:PasswordResetComponent},
  { path: 'guest-homepage', component: HomepageComponent},
  { path: 'app-card', component: CardComponent}
];
