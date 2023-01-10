import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent as CustomerListComponent } from 'src/app/components/customerlist/customerlist';
import { OrderlistComponent as OrderListComponent } from './components/orderlist/orderlist.component';
import { CreazioneordineComponent as CreazioneordineComponent } from './components/creazioneordine/creazioneordine.component';
import { GestioneordineComponent as GestioneordineComponent } from './components/gestioneordine/gestioneordine.component';
import { PagamentoComponent as PagamentoComponent } from './components/pagamento/pagamento.component';




const routes: Routes = [  {path: 'customer-list', component: CustomerListComponent}, 
                          {path: 'order-list', component: OrderListComponent},  //carlo
                          {path: 'neworder', component: CreazioneordineComponent}, //domenico
                          {path: 'myorder', component: GestioneordineComponent}, //francesco
                          {path: 'payment', component: PagamentoComponent}, //domenico

                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
