import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from './orderlist.service';

@Component({
  selector: 'orderlist',
  templateUrl: './orderlist.html',
  styleUrls: ['./orderlist.component.css'] 
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
