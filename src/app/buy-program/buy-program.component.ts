import { Component } from '@angular/core';
import {Program} from "../models/program.model";
import {ProgramService} from "../program.service";
import {ActivatedRoute} from "@angular/router";
import {MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-buy-program',
  standalone: true,
  imports: [
    MatFormField,
    MatButton,
    MatInput,
    FormsModule
  ],
  templateUrl: './buy-program.component.html',
  styleUrl: './buy-program.component.css'
})
export class BuyProgramComponent {
  constructor(private programService: ProgramService) {

  }

  confirmPurchase() {

  }
}

