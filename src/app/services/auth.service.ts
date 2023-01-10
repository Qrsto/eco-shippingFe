import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


//Service che mi permette di fare login, logout e  registrazione
const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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

  //registrazione nuovo utente (CLIENTE)

  register(username: string, email: string, password: string, numTelefono: string, dataNascita: Date, citta: string, cap: string, indirizzo: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        numTelefono,
        dataNascita,
        citta,
        cap,
        indirizzo


      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}