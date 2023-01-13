import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class OrdineService {  
  
  private baseUrl = 'http://localhost:8080/api/order/';  
  
  constructor(private http:HttpClient) { }  
  
  getOrdersList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'orders');  
  }  
  
  getOrder(id: number): Observable<Object> {  
    return this.http.get(`{baseUrl}/${id}`);
  }  

  createOrder(ordine: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/new', ordine);  
  }  

  deleteOrder(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });  
  }  

  updateOrder(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/update/${id}`, value);  
  }  
    
}  