import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-creazioneordine',
  templateUrl: './creazioneordine.component.html',
  styleUrls: ['./creazioneordine.component.css']
})
export class CreazioneordineComponent implements OnInit {

  latitudinePartenza='';
  longitudinePartenza='';
  indirizzoPartenza= '';
  
  form: any  = {
    indirizzoPartenza: null,
    indirizzoDestinazione: null,
    volumeSpedizione: null,
    pesoSpedizione: null,
    numTelefonoDestinatario: null,
    metodoPagamento: null,
    fasciaOraria: null,
    noteConsegna: null,
    costoFinale: null,
    longitudineDestinazione: null,
    latitudineDestinazione: null,
  };
  errorMessage = '';
  isSuccessful = false;
  isCreateOrderFailed = false;
  
  constructor(private gestioneOrdineService: GestioneordineService, private http: HttpClient) {}

  getCoords() {
    this.http.get(`hhttps://maps.googleapis.com/maps/api/geocode/json?address=${this.indirizzoPartenza}&key=AIzaSyBxAaAAMuDA0A9mJBvRVaz0GbPUHwTj8DA`)
      .subscribe((data: any) => {
        this.latitudinePartenza = data.results[0].geometry.location.lat;
        this.longitudinePartenza = data.results[0].geometry.location.lng;
        console.log(this.latitudinePartenza);
      });
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

