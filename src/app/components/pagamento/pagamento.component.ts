import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../orderlist/order';
import { Observable, catchError } from 'rxjs';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { EventManager } from '@angular/platform-browser';
import { OrderService } from '../orderlist/orderlist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  //attendo un input da creaOrdinecomponent
  @Input() ordine: any;


  ngOnInit(): void {

  }

  

  form : any = {
    cardNumber: null,
    dataScadenza: null,
    cvvNumber: null,
    titolareCarta: null,

  };
  errorMessage = '';
  isSuccessful = false;
  isCreatePaymentFailed = false;


  constructor(private readonly router:Router) {}

  

  

  onSubmit() : boolean {
    const {
      cardNumber,
      dataScadenza,
      cvvNumber,
      titolareCarta,
    } = this.form;


    
    if (cardNumber.length == 16 && cvvNumber.length == 3){
      return this.isSuccessful = true;
    }
    else {
      return this.isCreatePaymentFailed = true;
    }

  }

  
    
    

  }





