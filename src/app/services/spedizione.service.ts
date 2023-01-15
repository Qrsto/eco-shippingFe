import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({  
  providedIn: 'root'  
})  
  

export class SpedizioneService {  

  private baseUrl = 'http://localhost:8080/api/shipment/';  
  
  constructor(private http:HttpClient) { }  

  getShipment(id: number): Observable<any> {  
    return this.http.get<any>(`${this.baseUrl}${id}`);  
  }  

}