import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

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
    indirizzoResidenza: null,
    citta: null,
    cap: null,
    dataNasc: null,
    mobile: null,
    iban: null,
    role: '1'
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
    constructor(private authService: AuthService) { 
  }



  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, nome, cognome, indirizzoResidenza, citta, cap, dataNasc, mobile, iban, role } = this.form;

    this.authService.register(username, email, password, nome, cognome, indirizzoResidenza, citta, cap, dataNasc, mobile, iban, role).subscribe({
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
