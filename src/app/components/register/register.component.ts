import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { role } from './role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
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

  languageObjects : role[];
  selectedObject : role;

  constructor(private authService: AuthService) { 
    this.languageObjects= [
      {id: 1, name: "ROLE_USER"},
      {id: 2, name: "ROLE_RIDER"},

    ]
  }



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
