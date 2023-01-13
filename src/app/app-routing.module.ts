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
import { GestionecontrolloDetailsComponent } from './components/gestionecontrollo-details/gestionecontrollo-details.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'rider', component: BoardRiderComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'createorder', component: CreazioneordineComponent},
  { path: 'getOrders', component: GestionecontrolloDetailsComponent},
  { path: 'payment', component: PagamentoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }