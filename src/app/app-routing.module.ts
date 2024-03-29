import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardRiderComponent } from './components/board-rider/board-rider.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreazioneordineComponent } from './components/creazioneordine/creazioneordine.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { ListaOrdiniComponent } from './components/gestionecontrollo-details/listaordini.component';
import { DetailOrderComponent } from './components/gestionecontrollo-details/detailorder.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'rider', component: BoardRiderComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'createorder', component: CreazioneordineComponent},
  { path: 'user', component: ListaOrdiniComponent},
  { path: 'payment', component: PagamentoComponent},
  { path: 'shipment', component: DetailOrderComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'thanks', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }