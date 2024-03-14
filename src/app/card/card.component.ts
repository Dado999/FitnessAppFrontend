import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIcon],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
