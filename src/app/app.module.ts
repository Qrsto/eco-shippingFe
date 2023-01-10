import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from 'src/app/components/customerlist/customerlist';
import { OrderlistComponent } from 'src/app/components/orderlist/orderlist.component';
import { CreazioneordineComponent } from './components/creazioneordine/creazioneordine.component';
import { GestioneordineComponent } from './components/gestioneordine/gestioneordine.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
<<<<<<< HEAD


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { httpInterceptorProviders } from './helpers/auth.interceptor';
import { LoginComponent } from './components/login/login.component';


import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';

=======

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { GestionecontrolloDetailsComponent } from './components/gestionecontrollo-details/gestionecontrollo-details.component';
>>>>>>> 5cc98ec569eb80e19eb03427c81d5106099f4a42


@NgModule({
  declarations: [
<<<<<<< HEAD

  
=======
>>>>>>> 5cc98ec569eb80e19eb03427c81d5106099f4a42
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomerListComponent,
    OrderlistComponent,
    CreazioneordineComponent,
    GestioneordineComponent,
    PagamentoComponent,
<<<<<<< HEAD
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    AppRoutingModule,
    
    
  
=======
    GestionecontrolloDetailsComponent
>>>>>>> 5cc98ec569eb80e19eb03427c81d5106099f4a42
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    NgModule,
    Router,
    RouterModule
    
    


  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
