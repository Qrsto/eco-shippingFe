import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerList as CustomerListComponent } from 'src/customerlist/customerlist';
import { OrderlistComponent as OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [  {path: 'customer-list', component: CustomerListComponent}, 
                          {path: 'order-list', component: OrderlistComponent},
                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
