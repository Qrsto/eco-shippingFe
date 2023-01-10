import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  onLogin(obj: any) : Observable<any> {
    return this.http.post('http://localhost:8080/authenticate',obj);
  }
  getCustomers() : Observable<any> {

    return this.http.get('http://localhost:8080/getallutenti');
  }

  uploadfile(obj:any) : Observable<any> {

    return this.http.post('http://storeapi.gerasim.in/api/GetValet/uploadFile',obj);
  }
}
