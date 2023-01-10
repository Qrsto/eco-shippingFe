import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    //vedi auth.services (singup)
    username: null,
    email: null,
    password: null,
    numTelefono: null,
    dataNascita: null,
    citta: null,
    cap: null,
    indirizzo: null,


  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, numTelefono, dataNascita, citta, cap, indirizzo } = this.form;

    this.authService.register(username, email, password,numTelefono,dataNascita,citta,cap,indirizzo).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}