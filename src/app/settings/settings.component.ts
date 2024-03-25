import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {AuthService} from "../auth.service";
import {NgIf, NgStyle} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, ReplaySubject, throwError} from "rxjs";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    FormsModule,
    ToolbarComponent,
    NgIf,
    NgStyle,
    MatTooltip
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  password = '';
  showPassword = false;
  currentAvatar: File | undefined;
  // @ts-ignore
  avatarCopy: string = this.authService.currentUser.avatar;
  base64Output!: string;

  constructor(protected authService: AuthService,
              private dialogRef: MatDialogRef<SettingsComponent>,
              private http: HttpClient) {
  }

  saveChanges() {
    const formData = new FormData();
    formData.append('newAvatar', this.base64Output);
    formData.append('user',JSON.stringify(this.authService.currentUser,['name','surname','username','password','avatar','email','admin','cityByIdCity']));
    this.http.put<any>(`http://localhost:8080/users/`+ this.authService.currentUser?.iduser,formData).pipe(
      catchError(error => {
        console.log(error);
        return throwError(error); // Forward the error to the subscriber
      })
    ).subscribe(response => {
        console.log(response);
      });
    this.dialogRef.close();
  }
  onFileSelected(event: Event) {
    if (event.target instanceof HTMLInputElement && event.target.files && event.target.files.length > 0) {
      this.handleFileInput(event.target.files[0]).subscribe(base64 => {
        this.base64Output = base64;
        console.log(this.base64Output);
      });
    }
  }
  handleFileInput(file: File):Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    // @ts-ignore
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }
  togglePassword(){ this.showPassword = !this.showPassword; }
}
