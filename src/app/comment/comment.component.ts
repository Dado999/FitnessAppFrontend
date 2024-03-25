import {Component, Input} from '@angular/core';
import {User} from "../models/user.model";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
    user!: User;
    @Input() idUser!: number;
    @Input() commentText!: string;
    constructor(private userService: UserServiceService) {
    }

    ngOnInit(){
      this.getUser(this.idUser)
      console.log(this.user);
    }

    getUser(id:number): void{
      this.userService.getUserId(id).subscribe(p => {
        this.user = p;
        console.log(this.user);
      })
    }
}
