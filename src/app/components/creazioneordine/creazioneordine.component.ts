import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { nextTick } from 'process';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';
import { StorageService } from 'src/app/services/storage.service';
import { MetodoPagamento } from '../enums/metodo-pagamento';
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
    fasciaOraria: null,
    noteConsegna: null,
    costoFinale: null,
    longitudinePartenza: null,
    latitudinePartenza: null,
    longitudineDestinazione: null,
    latitudineDestinazione: null
  };
  errorMessage = '';
  isSuccessful = false;
  isCreateOrderFailed = false;
  isContantiMethod = false;
  

  

  
  constructor(private gestioneOrdineService: GestioneordineService, private http: HttpClient,private router:Router ) {
  }
  ordine: Order;

  ngOnInit(): void { 
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
      noteConsegna
      } = this.form;

    this.gestioneOrdineService.create(
      this.form.indirizzoPartenza,
      this.form.indirizzoDestinazione,
      this.form.volumeSpedizione,
      this.form.pesoSpedizione,
      this.form.numTelefonoDestinatario,
      this.form.metodoPagamento,
      this.form.fasciaOraria,
      this.form.noteConsegna,
      ).subscribe({
        next : data => {
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

