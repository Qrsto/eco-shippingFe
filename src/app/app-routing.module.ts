import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent as CustomerListComponent } from 'src/app/components/customerlist/customerlist';
import { OrderlistComponent as OrderListComponent } from './components/orderlist/orderlist.component';
import { CreazioneordineComponent as CreazioneordineComponent } from './components/creazioneordine/creazioneordine.component';
import { GestioneordineComponent as GestioneordineComponent } from './components/gestioneordine/gestioneordine.component';
import { PagamentoComponent as PagamentoComponent } from './components/pagamento/pagamento.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';





const routes: Routes = [  {path: '',
                          component: UserLoginComponent
                          }, 
                          {path: 'order-list',
                           component: OrderListComponent
                          },  //carlo
                          {path: 'neworder',
                           component: CreazioneordineComponent
                          }, //domenico
                          {path: 'myorder',
                           component: GestioneordineComponent
                          }, //francesco
                          {path: 'payment',
                           component: PagamentoComponent
                          }, //domenico

                          {path: 'customer-list',
                            component: CustomerListComponent
                          } 
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
