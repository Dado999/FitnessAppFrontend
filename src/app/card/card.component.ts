import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Program} from "../models/program.model";
import {NgIf} from "@angular/common";
import {Instructor} from "../models/instructor.model";
import {map, Observable} from "rxjs";
import {InstructorService} from "../instructor.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIcon, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() program!: Program;
  instructor!: Instructor;

  constructor(private insService: InstructorService) {
  }
  protected readonly Array = Array;

  getInstructorName(): string{
    this.getInstructor(this.program.instructorByIdInstructor);
    return this.instructor.name + " " + this.instructor.lastName;
  }

  getInstructor(id: number){
    this.insService.getInstructor(id.toString()).subscribe((ins:Instructor) => {
      this.instructor = ins;
      console.log(this.instructor);
    })
  }
}
