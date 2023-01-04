import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerList as CustomerListComponent } from 'src/customerlist/customerlist';
import { AccessoutenteComponent } from './accessoutente/accessoutente.component';
import { CreazioneordineComponent } from './creazioneordine/creazioneordine.component';
import { GestioneordineComponent } from './gestioneordine/gestioneordine.component';
import { OrderlistComponent as OrderlistComponent } from './orderlist/orderlist.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { RegistrautenteComponent } from './registrautente/registrautente.component';

const routes: Routes = [  {path: 'customer-list', component: CustomerListComponent}, 
                          {path: 'order-list', component: OrderlistComponent},  //carlo
                          {path: 'login', component: AccessoutenteComponent}, //danilo
                          {path: 'register', component: RegistrautenteComponent}, //danilo
                          {path: 'neworder', component: CreazioneordineComponent}, //domenico
                          {path: 'myorder', component: GestioneordineComponent}, //francesco
                          {path: 'payment', component: PagamentoComponent}, //domenico
                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
