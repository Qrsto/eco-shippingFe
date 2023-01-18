import { Component, Input, OnInit } from '@angular/core';
import { Ordine } from './ordine';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaordini',
  templateUrl: './listaordini.component.html',
  styleUrls: ['./listaordini.component.css']
})
export class ListaOrdiniComponent implements OnInit {

  @Input() id: number;
  currentUser: any;
  orders: Ordine[] = [];



  constructor(private gestioneOrdineServices: GestioneordineService, private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.gestioneOrdineServices.getUser();
    this.getOrderbyId_utente(this.currentUser.id);

  };

  private getOrders() {
    this.gestioneOrdineServices.getOrdersList()
      .subscribe(data => {
        this.orders = data;
      }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  private getOrderbyId_utente(id_utente: number) {

    this.gestioneOrdineServices.getOrder(id_utente)
      .subscribe(data => {
        this.orders = data;
      }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  onCreateOrder() {
    this.router.navigateByUrl("/createorder"); 
  }

  public setOrderId(id: number) {
    id++;
    sessionStorage.setItem("id", id.toString());

  }



}  