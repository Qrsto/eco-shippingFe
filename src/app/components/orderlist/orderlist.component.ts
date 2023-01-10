import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from './orderlist.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.html',
<<<<<<< HEAD:src/app/components/orderlist/orderlist.ts
  styleUrls: ['./orderlist.component.css'] 
=======
  styleUrls: ['./orderlist.component.css'] //errore?  //Bug-Fix: dovevi creare file.css del component (importato male) ora funziona
>>>>>>> 119b11e3df9ef07bbd4ee37d360a11c260bb67b6:src/app/components/orderlist/orderlist.component.ts
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
