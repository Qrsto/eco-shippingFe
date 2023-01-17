import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
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
    const { username, email, password, nome, cognome, indirizzoResidenza, citta, cap, dataNasc, mobile, iban, role } = this.form;

    this.authService.register(username, email, password, nome, cognome, indirizzoResidenza, citta, cap, dataNasc, mobile, iban, role).subscribe({
      next: data => {
        console.log(data);
        if (data.role == "1") {
          data.role = "ROLE_USER";
        }
        else if (data.role == "2"){
          data.role = "ROLE_RIDER";
        }
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(data);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
