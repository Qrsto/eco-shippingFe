import { Component, OnInit } from '@angular/core';  
import { Observable,Subject } from "rxjs";  
import { DataTablesModule } from 'angular-datatables';
import { StorageService } from 'src/app/services/storage.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { OrdineService } from './ordine.service';
import { Ordine } from './ordine';
  
@Component({  
  selector: 'app-listaordini',  
  templateUrl: './listaordini.component.html',  
  styleUrls: ['./listaordini.component.css']  
})  
export class ListaOrdiniComponent implements OnInit { 

   currentUser: any;
   orders: Ordine[] = [];
  
 constructor(private ordineservice:OrdineService) { }  
   
  ngOnInit(): void {  
    this.getOrders();    
    this.currentUser = this.ordineservice.getUser();
    };     
  
    private getOrders() {
        this.ordineservice.getOrdersList()
        .subscribe(data => {
            this.orders = data;
        }
        , error => {
            console.log(error.error.message);
        }
        );
    }
  
}  