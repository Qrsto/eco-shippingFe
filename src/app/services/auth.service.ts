import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private storageservice: StorageService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, nome: string, cognome: string, indirizzoResidenza: string, citta: string, cap: string, dataNasc: Date, mobile: string, iban: string, role: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        nome,
        cognome,
        indirizzoResidenza,
        citta,
        cap,
        dataNasc,
        mobile,
        iban,
        role
      },
      httpOptions
    );
  }


   logout(): Observable<any> {
      return new Observable(observer => {
        this.storageservice.clean();
      });
    }
  
  
}
  

