import { Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {CardComponent} from "./card/card.component";
import {ProgramDetailComponent} from "./program-detail/program-detail.component";
import {BuyProgramComponent} from "./buy-program/buy-program.component";
import {SettingsComponent} from "./settings/settings.component";

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'password-reset', component:PasswordResetComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'app-card', component: CardComponent},
  { path: 'program/:id', component: ProgramDetailComponent },
  { path: '404',component: LoginComponent},
  { path: 'buy/:id', component: BuyProgramComponent},
  { path: 'settings',component: SettingsComponent}
];
