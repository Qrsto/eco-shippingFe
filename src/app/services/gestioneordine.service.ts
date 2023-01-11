import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Gestioneordine } from '../models/gestioneordine.model';
import { Order } from '../components/orderlist/order';
import { MetodoPagamento } from '../enums/metodo-pagamento';
import { FasciaOraria } from '../enums/fascia-oraria';

//header per inserimento post 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//api "radice"
const baseUrl = 'http://localhost:8080/api/order'

@Injectable({
  providedIn: 'root'
})
export class GestioneordineService {

  constructor(private http: HttpClient) { }

  //metodo che da informazioni su un ordine dato l'id 
  get(id: any): Observable<any> {
    return this.http.get(`{baseUrl}/${id}`)
  }

  //metodo che fornisce una lista di ordini passati 
  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl + `/orders`);  
  }

  //metodio per la creazione di un nuovo ordine
  create(
    indirizzoPartenza: string,
    indirizzoConsegna: string,
    volumeSpedizione: number,
    pesoSpedizione: number,
    numTelefonoDestinatario: string,
    metodoPagamento : MetodoPagamento,
    fasciaOraria : FasciaOraria,
    noteConsegna : string,
    costoFinale: number,
    longitudinePartenza: number,
    latitudinePartenza: number,
    longitudineDestinazione: number,
    latitudineDestinazione: number,
  ): Observable<any> {
    return this.http.post(
      baseUrl + `new`,{
        indirizzoPartenza,
        indirizzoConsegna,
        volumeSpedizione,
        pesoSpedizione,
        numTelefonoDestinatario,
        metodoPagamento,
        fasciaOraria,
        noteConsegna,
        costoFinale,
        longitudinePartenza,
        latitudinePartenza,
        longitudineDestinazione,
        latitudineDestinazione
      }
    )

  }

  }
  

