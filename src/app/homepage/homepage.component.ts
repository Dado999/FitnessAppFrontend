import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterLink, RouterOutlet} from "@angular/router";
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {NgClass} from "@angular/common";
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardXlImage} from "@angular/material/card";
import {CardComponent} from "../card/card.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterOutlet, NgClass, MatFabButton, MatMiniFabButton, RouterLink, MatButton, MatFormField, MatInput, MatIconButton, MatCard, MatCardHeader, MatCardContent, MatCardXlImage, MatCardImage, CardComponent, MatGridList, MatGridTile, MatPaginator],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  constructor(private observer: BreakpointObserver) {}
  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
