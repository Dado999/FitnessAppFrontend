import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CommonModule} from "@angular/common";
import {UserServiceService} from "../user-service.service";
import {catchError, Observable, ReplaySubject, throwError} from "rxjs";
import {MatTooltip} from "@angular/material/tooltip";
import {AuthService} from "../auth.service";
import {CityService} from "../city.service";
import {User} from "../models/user.model";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive, MatTooltip],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserServiceService,
              protected authService: AuthService,
              private cityService: CityService,
              private http: HttpClient) { }

  @ViewChild('name') nameInput!: ElementRef ;
  @ViewChild('surname') surnameInput!: ElementRef ;
  @ViewChild('username') usernameInput!: ElementRef ;
  @ViewChild('password') passwordInput!: ElementRef ;
  @ViewChild('passwordConfirm') passwordConfirmInput!: ElementRef ;
  @ViewChild('email') emailInput!: ElementRef ;
  @ViewChild('city') cityInput!: ElementRef ;
  base64Output!: string;
  async getUserData() {
    const cityId: number = await this.getCityId(this.cityInput.nativeElement.value);
    this.authService.currentUser = {
      name: this.nameInput.nativeElement.value,
      surname: this.surnameInput.nativeElement.value,
      username: this.usernameInput.nativeElement.value,
      password: this.passwordInput.nativeElement.value,
      email: this.emailInput.nativeElement.value,
      cityByIdCity: cityId,
      avatar: "",
      admin: 0
    };
  }
  registerUser(): void {
    this.getUserData();
    if (this.passwordInput.nativeElement.value === this.passwordConfirmInput.nativeElement.value) {
      console.log(1);
      if(this.base64Output) {
        const formData = new FormData();
        formData.append('avatar',this.base64Output);
        const userBlob = new Blob([JSON.stringify(this.authService.currentUser)], {type: "application/json"});
        formData.append('user',userBlob);
        this.http.post('http://localhost:8080/users/',formData).pipe(
          catchError(error => {
            console.log(error);
            return throwError(error);
          })
        ).subscribe(response => {
          console.log(response);
        });
      }
    }
    else
      window.alert('Passwords dont match!');
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

  async getCityId(cityName: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.cityService.getCity(cityName).subscribe(c => {
        if (c && c.idCity!==undefined) {
          resolve(c.idCity);
        } else {
          this.cityService.insertCity({ name: cityName }).subscribe(newCity => {
            resolve(newCity.idCity);
          }, error => {
            reject(error); // Handle error if city insertion fails
          });
        }
      }, error => {
        reject(error); // Handle error if city retrieval fails
      });
    });
  }
}
