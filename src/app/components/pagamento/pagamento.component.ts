import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../orderlist/order';
import { Observable, catchError } from 'rxjs';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { EventManager } from '@angular/platform-browser';
import { OrderService } from '../orderlist/orderlist.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


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
  



  constructor() {}

   //metodo che salva (in maniera insicura ) gli estremi del oagament
    //da completare 
   /*saveDetailPayment(
    cardNumber:string, 
    dataScadenza: Date,
    cvvNumber: number,
    titolareCarta: string
    ) {
      let detailPayment:DetailsPayment = new DetailsPayment(cardNumber,titolareCarta,dataScadenza,cvvNumber);
      this.estremi.push(detailPayment);    
    }
    */



  onSubmit() : boolean {
    const {
      cardNumber,
      dataScadenza,
      cvvNumber,
      titolareCarta,
    } = this.form


    
   
    if (cardNumber.length == 16 && cvvNumber.length == 3){
      return this.isSuccessful = true;
    }
    else {
      return this.isCreatePaymentFailed = true;
    }
    };

  }

  
    
    

  





