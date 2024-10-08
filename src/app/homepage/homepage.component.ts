import {Component, Input} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardXlImage} from "@angular/material/card";
import {CardComponent} from "../card/card.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ProgramService} from "../program.service";
import {Program} from "../models/program.model";
import {MatTableDataSource} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {MatTooltip} from "@angular/material/tooltip";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterOutlet, NgClass, MatFabButton, MatMiniFabButton, RouterLink, MatButton, MatFormField, MatInput, MatIconButton, MatCard, MatCardHeader, MatCardContent, MatCardXlImage, MatCardImage, CardComponent, MatGridList, MatGridTile, MatPaginator, NgForOf, AsyncPipe, FormsModule, NgIf, MatTooltip, ToolbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  dataSource = new MatTableDataSource<Program>(this.authService.programs);
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 8,
    length: this.authService.programs.length
  };
  constructor(private observer: BreakpointObserver,
              private programService: ProgramService,
              protected authService: AuthService,
              protected router:Router) {
    this.programService.getPrograms().subscribe((programs: Program[]) => {
      this.authService.programs = programs;
    });
  }
  ngOnInit() {
    this.programService.getPrograms().subscribe((programs: Program[]) => {
      this.authService.programs = programs;
      this.authService.searchedPrograms = programs;
      this.dataSource = new MatTableDataSource<Program>(this.authService.searchedPrograms);
    });
  }

    protected readonly AuthService = AuthService;
}
