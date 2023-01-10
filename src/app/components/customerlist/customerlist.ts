import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customerlist.service';

@Component({
  selector: 'customerlist',
  templateUrl: './customerlist.html',
  styleUrls: ['./customerlist.component.css']
})


export class CustomerListComponent implements OnInit 
{
  customerlist: Customer[] = [];
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.getCustomer();
  }
  getCustomer(): void {

    this.customerService.getCustomerList()

    .subscribe(customerlist => this.customerlist = customerlist);
  }
}
