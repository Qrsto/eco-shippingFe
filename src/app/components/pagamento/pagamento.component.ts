import { Component, OnInit } from '@angular/core';
import { Order } from '../orderlist/order';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
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

  constructor() {}

  onSubmit(): void {
    
  }

  
    
    

  }





