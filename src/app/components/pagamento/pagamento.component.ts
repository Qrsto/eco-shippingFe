import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../orderlist/order';
import { Observable, catchError } from 'rxjs';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { EventManager } from '@angular/platform-browser';
import { OrderService } from '../orderlist/orderlist.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { detailsPayment } from './detailsPayment';
import { DetailsPayment } from 'src/app/creazioneordine/details-payment';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  

  ngOnInit(): void {

  }

  form : any = {
    cardNumber: 1234123412341234,
    dataScadenza: null,
    cvvNumber: null,
    titolareCarta: "",

  };
  errorMessage = '';
  isSuccessful = false;
  isCreatePaymentFailed = false;
  estremi: detailsPayment [] = [];


  constructor() {}

   //metodo che salva (in maniera insicura ) gli estremi del oagament
    //da completare 
   saveDetailPayment(
    cardNumber:number, 
    dataScadenza: Date,
    cvvNumber: number,
    titolareCarta: string) {
      let detailsPayment = new DetailsPayment()
    this.estremi.push();
   }



  onSubmit() : boolean {
    const {
      cardNumber,
      dataScadenza,
      cvvNumber,
      titolareCarta,
    } = this.form 


    
   
    if (this.form.cardNumber.length == 16 && this.form.cvvNumber.length == 3){
      return this.isSuccessful = true;
    }
    else {
      return this.isCreatePaymentFailed = true;
    }
    };

  }

  
    
    

  





