import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
const USER_KEY = 'auth-user';

@Injectable({  
  providedIn: 'root'  
})  
  

export class OrdineService {  

  private baseUrl = 'http://localhost:8080/api/order/';  
  
  constructor(private http:HttpClient) { }  
  
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  getOrdersList(): Observable<any> {  
    return this.http.get<any>(this.baseUrl + 'orders');  
  }  

  getOrder(id_utente: number): Observable<any> {  
    return this.http.get<any>(`${this.baseUrl + 'userorders/'}${id_utente}`);  
  }  
    
}  