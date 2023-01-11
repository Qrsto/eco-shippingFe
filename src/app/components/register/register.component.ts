import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
<<<<<<< HEAD
export class RegisterComponent  {

}
=======
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    nome: null,
    cognome: null,
    IndirizzoResidenza: null,
    citta: null,
    cap: null,
    dataNasc: null,
    mobile: null,
    iban: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, nome, cognome, IndirizzoResidenza, citta, cap, dataNasc, mobile, iban } = this.form;

    this.authService.register(username, email, password, nome, cognome, IndirizzoResidenza, citta, cap, dataNasc, mobile, iban).subscribe({
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
>>>>>>> ef1e82026e79ce5fcacd78ec6723d527ba18e92f
