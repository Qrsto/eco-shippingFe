import { Component, OnInit } from '@angular/core';
import { CreazioneOrdineService } from './creazione-ordine.service';
import { Order } from './order';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-creazioneordine',
  templateUrl: './creazioneordine.component.html',
  styleUrls: ['./creazioneordine.component.css']
})
export class CreazioneordineComponent implements OnInit {
  immagine1 = 'https://www.ship-technology.com/wp-content/uploads/sites/8/2020/10/Feature-Image-Top-10-Shipping-Companies.jpg';
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  constructor() {}
  
  ngOnInit(): void {


    
    //PROPERTY BINDING (VARIABILE A INTERMITTENZA)
    
    
  }





  //https://www.youtube.com/watch?v=U-5LaMAj0oM
 
 /* ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      colore: new FormControl(),
    });
    this.creazioneordine.createNewOrder(
      {nome: 'Domenico', email: 'domenicorrr@gdf.it'}
    ).subscribe(data => {
      console.log(data);
    });
  };
  order: any;
  */
  
  
}
