import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from './orderlist.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.html',
  styleUrls: ['./orderlist.component.css'] //errore?  //Bug-Fix: dovevi creare file.css del component (importato male) ora funziona
})


export class OrderlistComponent implements OnInit 
{
  orderlist:Order[] = [];
  constructor(private orderService: OrderService) { }
  ngOnInit(): void {
    this.getOrder();
  }
  getOrder(): void {

    this.orderService.getOrderList()

    .subscribe(orderlist => this.orderlist = orderlist);
  }
}
