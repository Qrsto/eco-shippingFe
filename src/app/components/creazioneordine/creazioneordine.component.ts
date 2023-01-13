import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';
import { StorageService } from 'src/app/services/storage.service';



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
  
  constructor(private gestioneOrdineService: GestioneordineService, private http: HttpClient, private readonly router: Router) {}

  goToPayment() {
    this.router.navigate(['payment']);
  }


  ngOnInit(): void { 
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
      costoFinale,
      longitudinePartenza,
      latitudinePartenza,
      longitudineDestinazione,
      latitudineDestinazione,
      } = this.form;
  
    this.gestioneOrdineService.create(
      indirizzoPartenza,
      indirizzoDestinazione,
      volumeSpedizione,
      pesoSpedizione,
      numTelefonoDestinatario,
      metodoPagamento,
      fasciaOraria,
      noteConsegna,
      costoFinale,
      longitudinePartenza,
      latitudinePartenza,
      longitudineDestinazione,
      latitudineDestinazione).subscribe({
        next : data => {
          console.log(data);
          this.isSuccessful = true;
          this.isCreateOrderFailed = false;
          
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isCreateOrderFailed = true;
        }
    });
  }
}

