import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Program} from "../models/program.model";
import {AsyncPipe, NgIf} from "@angular/common";
import {Instructor} from "../models/instructor.model";
import {InstructorService} from "../instructor.service";
import {Observable, tap} from "rxjs";
import {Router, RouterLink} from "@angular/router";
import {ProgramService} from "../program.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIcon, NgIf, AsyncPipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() program!: Program;
  instructor$!: Observable<Instructor>;

  constructor(private insService: InstructorService) {
  }

  ngOnInit() {
    this.instructor$ = this.getInstructor(this.program.instructorByIdInstructor);
  }

  getInstructor(id: number): Observable<Instructor> {
    return this.insService.getInstructor(id).pipe(
      tap((instructor: Instructor) => {
      })
    );
  }
}
