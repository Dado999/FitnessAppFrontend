import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatToolbar} from "@angular/material/toolbar";
import {MatTooltip} from "@angular/material/tooltip";
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Program} from "../models/program.model";
import {AuthService} from "../auth.service";
import {MatDialog} from "@angular/material/dialog";
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatInput,
    MatToolbar,
    MatTooltip,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  constructor(protected authService: AuthService,private dialog: MatDialog) { }
  programs: Program[] = [];
  searchedPrograms: Program[] = [];
  search : string = "";

  ngOnInit(){
  }

  filterPrograms(): void {
    this.programs = this.authService.programs;
    this.searchedPrograms = this.authService.searchedPrograms;
    if(this.search.length == 0) {
      this.authService.searchedPrograms = this.programs;
    }
    else{
      const searchTerm = this.search.toLowerCase();
      this.searchedPrograms = this.programs.filter(program => program.name.toLowerCase().includes(searchTerm));
      this.authService.searchedPrograms =  this.searchedPrograms;
    }
  }
  openSettingsForm(){
    const dialogRef = this.dialog.open(SettingsComponent);
  }
}
