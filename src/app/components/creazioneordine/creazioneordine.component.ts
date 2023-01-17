import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { nextTick } from 'process';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';
import { StorageService } from 'src/app/services/storage.service';
import { OrderService } from '../orderlist/orderlist.service';
import { Order } from './order';
import { ListaOrdiniComponent } from '../gestionecontrollo-details/listaordini.component';



@Component({
  selector: 'app-creazioneordine',
  templateUrl: './creazioneordine.component.html',
  styleUrls: ['./creazioneordine.component.css']
})
export class CreazioneordineComponent implements OnInit {


  form: any  = {
  
    indirizzoPartenza: null,
    indirizzoDestinazione: null,
    volumeSpedizione: null,
    pesoSpedizione: null,
    numTelefonoDestinatario: null,
    noteConsegna: null,
    costoFinale: null,
    longitudinePartenza: null,
    latitudinePartenza: null,
    longitudineDestinazione: null,
    latitudineDestinazione: null,
    metodoPagamento:'CONTANTI',
    fasciaOraria:'MATTINA',
    id_utente : null,
  };


  //dichiarazione variabili
  errorMessage = '';
  isSuccessful = false;
  isCreateOrderFailed = false;
  isContantiMethod = false;
  ordine: Order;
  currentUser: any;
  id_utente : number;


  

  
  constructor(private gestioneOrdineService: GestioneordineService, private http: HttpClient,private router:Router ) {
  }
  

  ngOnInit(): void {
    this.currentUser = this.gestioneOrdineService.getUser();
  }


  onPaymentPage() {
    this.router.navigateByUrl("/payment");
  }

   onSubmit(): void {
    const { 
      indirizzoPartenza,
      indirizzoDestinazione,
      volumeSpedizione,
      pesoSpedizione,
      numTelefonoDestinatario,
      metodoPagamento,
      fasciaOraria,
      noteConsegna,
      } = this.form;

      this.id_utente = this.currentUser.id;

    //Richiamo metodo del service per creazione dell'ordine  
    this.gestioneOrdineService.create(indirizzoPartenza,indirizzoDestinazione,volumeSpedizione,pesoSpedizione,numTelefonoDestinatario,metodoPagamento,fasciaOraria,noteConsegna,this.id_utente)
    .subscribe({ next : data => {
          if ("CONTANTI" == this.form.metodoPagamento) {
            this.isContantiMethod = true;
          }
          console.log(data);
          this.isSuccessful = true;
          this.isCreateOrderFailed = false;
          console.log(this.isContantiMethod);
          
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isCreateOrderFailed = true;
        }
    });
  }
}

