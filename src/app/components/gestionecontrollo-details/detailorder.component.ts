import { Component, Input, OnInit } from '@angular/core';  
import { SpedizioneService } from 'src/app/services/spedizione.service';
import { Ordine } from './ordine';
import { Spedizione } from './shipment';
  
@Component({  
  selector: 'app-detailorder',  
  templateUrl: './detailorder.component.html',  
  styleUrls: ['./detailorder.component.css']  
})  
export class DetailOrderComponent implements OnInit { 
  
 constructor(private spedizioneservice : SpedizioneService) { }  

    ngOnInit(): void {
        
        this.getShipmentbyId(Number(sessionStorage.getItem("id")))
    }

    shipment : Spedizione

    private getShipmentbyId(id: number) {

        this.spedizioneservice.getShipment(id)
        .subscribe(data => {
            this.shipment = data;
        }
        , error => {
          console.log(error.error.message);
        }
        );
        

  
  
      }

}