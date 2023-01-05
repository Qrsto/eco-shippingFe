import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent as CustomerListComponent } from 'src/app/customerlist/customerlist';
import { AccessoutenteComponent } from './accessoutente/accessoutente.component';
import { CreazioneordineComponent } from './creazioneordine/creazioneordine.component';
import { GestioneordineComponent } from './gestioneordine/gestioneordine.component';
import { OrderlistComponent as OrderlistComponent } from 'src/app/orderlist/orderlist';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { RegistrautenteComponent } from './registrautente/registrautente.component';

const routes: Routes = [  {path: 'customer-list', component: CustomerListComponent}, 
                          {path: 'order-list', component: OrderlistComponent},  //carlo
                          {path: 'register', component: RegistrautenteComponent}, //danilo
                          {path: 'neworder', component: CreazioneordineComponent}, //domenico
                          {path: 'myorder', component: GestioneordineComponent}, //francesco
                          {path: 'payment', component: PagamentoComponent}, //domenico
                          {path: 'login', component: AccessoutenteComponent} //danilo
                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
