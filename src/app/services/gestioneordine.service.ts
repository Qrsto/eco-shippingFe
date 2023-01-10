import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Gestioneordine } from '../models/gestioneordine.model';

const baseUrl = 'http://localhost:8080/ordine'

@Injectable({
  providedIn: 'root'
})
export class GestioneordineService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<Gestioneordine> {

    return this.http.get(`${baseUrl}/${id}`)

  }

  getAll(): Observable<Gestioneordine[]> {

    return this.http.get<Gestioneordine[]>(baseUrl);

  }
  //Inserisco le funzioni che voglio

}