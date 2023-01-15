import { Component, Input, OnInit } from '@angular/core';  
import { OrdineService } from '../../services/ordine.service';
import { Ordine } from './ordine';
  
@Component({  
  selector: 'app-listaordini',  
  templateUrl: './listaordini.component.html',  
  styleUrls: ['./listaordini.component.css']  
})  
export class ListaOrdiniComponent implements OnInit { 

  @Input() id: number;
   currentUser: any;
   orders: Ordine[] = [];
  
 constructor(private ordineservice:OrdineService) { }  
   
  ngOnInit(): void {    
    this.currentUser = this.ordineservice.getUser();
    this.getOrderbyId_utente(this.currentUser.id); 
    
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

    private getOrderbyId_utente(id_utente : number) {

      this.ordineservice.getOrder(id_utente)
      .subscribe(data => {
          this.orders = data;
      }
      , error => {
        console.log(error.error.message);
      }
      );
    }

    public setOrderId(id : number) {

      sessionStorage.setItem("id", id.toString());

    }

    
  
}  