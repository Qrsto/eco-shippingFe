import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';
import { StorageService } from 'src/app/services/storage.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

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
    metodoPagamento: null,
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
  
<<<<<<< HEAD
  constructor(private gestioneOrdineService: GestioneordineService,private http: HttpClient) {}
  address= "via roma 10, gioia del colle";
  

  ngOnInit(): void { 
=======
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
    

>>>>>>> b89bcb4bbf66faf6b3dc4db69dd3b9f04889ca4e
  }

  getCoordinates(address: string) {
    const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1`;
    this.http.get<{ features: any[] }>(url).subscribe(result => {
      console.log(result.features[0].center);
    });
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

