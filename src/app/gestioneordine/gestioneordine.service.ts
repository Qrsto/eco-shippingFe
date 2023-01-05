import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GestioneOrdineService {

  private orderUrl = 'http://localhost:8080/ordine/ordini'
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) { }

  GetOrder() {
      return this.http.get<Ordine>(this.orderUrl)
    }

}
