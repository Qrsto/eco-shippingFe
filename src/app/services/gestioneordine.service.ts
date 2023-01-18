import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Gestioneordine } from '../models/gestioneordine.model';
import { Order } from '../components/orderlist/order';
import { OrderService } from '../components/orderlist/orderlist.service';

//header per inserimento post 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//api "radice"
const baseUrl = 'http://localhost:8080/api/order/'
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class GestioneordineService {

  constructor(private http: HttpClient) {
    
   }

  //metodo che da informazioni su un ordine dato l'id 
  get(id: any): Observable<any> {
    return this.http.get(`{baseUrl}${id}`);
  }



  //metodo che fornisce una lista di ordini passati 
  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl + `orders`);  
  }

  //update dell'ordine
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  //WARNING 
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  order:Order;
  //metodio per la creazione di un nuovo ordine
  create(
    indirizzoPartenza: string,
    indirizzoConsegna: string,
    volumeSpedizione: number,
    pesoSpedizione: number,
    numTelefonoDestinatario: string,
    metodoPagamento : string,
    fasciaOraria : string,
    noteConsegna : string,
    id_utente: number,
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
        id_utente,
      }, httpOptions
    );

  }

  //metodo per avere id dell'user
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  //metodo per lista ordini 
  getOrdersList(): Observable<any> {  
    return this.http.get<any>(baseUrl + 'orders');  
  }  

  //metodo per l'ordine dato un idutente
  getOrder(id_utente: number): Observable<any> {  
    return this.http.get<any>(`${baseUrl + 'userorders/'}${id_utente}`);  
  }




  }
  

