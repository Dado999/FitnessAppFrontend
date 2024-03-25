import {Component, signal} from '@angular/core';
import {ProgramService} from "../program.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Program} from "../models/program.model";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {CardComponent} from "../card/card.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatToolbar} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import {CommentComponent} from "../comment/comment.component";
import {map, Observable} from "rxjs";
import {CommentService} from "../comment.service";
import {Comment} from "../models/comment.model";
import {AuthService} from "../auth.service";
import {MatTooltip} from "@angular/material/tooltip";
import {BuyProgramComponent} from "../buy-program/buy-program.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCard,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatIcon,
    NgIf,
    RouterLink,
    MatButton,
    MatIconButton,
    MatInput,
    MatToolbar,
    FormsModule,
    MatCardContent,
    MatCardHeader,
    MatFormField,
    DatePipe,
    CommentComponent,
    NgForOf,
    MatTooltip
  ],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css',
  providers:[Program,CardComponent]
})
export class ProgramDetailComponent {

  comments: Comment[] = [];
  constructor(
    private route: ActivatedRoute,
    protected router: Router,
    private programService: ProgramService,
    protected authService: AuthService,
    protected program:Program,
    protected cardComp:CardComponent,
    private commentService: CommentService,
    private dialog: MatDialog) {
  }
  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('id')!;
    this.programService.getProgram(id).subscribe({
      next: (program) => {
        if (program) {
          this.program = program;
          this.getCommentsForProgram(program.idprogram);
        } else {
          this.router.navigate(['/404']);
          console.log(1);// navigate to a 404 page
        }
      },
      error: () => {
        this.router.navigate(['/404']);
      }
    });
  }
  getCommentsForProgram(id: number): void {
    this.commentService.getComments().pipe(
      map(comments => comments.filter(comment => comment.idprogram === id))
    ).subscribe(filteredComments => {
      this.comments = filteredComments;
      console.log(this.comments);
    });
  }
  openBuyForm(){
    const dialogRef = this.dialog.open(BuyProgramComponent);
  }
}
