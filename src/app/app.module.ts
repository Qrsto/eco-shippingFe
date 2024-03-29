import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from 'src/app/components/customerlist/customerlist';
import { OrderlistComponent } from 'src/app/components/orderlist/orderlist.component';
import { CreazioneordineComponent } from './components/creazioneordine/creazioneordine.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { HomeComponent } from './components/home/home.component'
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardRiderComponent } from './components/board-rider/board-rider.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { httpInterceptorProviders } from './helpers/http.interceptor';
import { ListaOrdiniComponent } from './components/gestionecontrollo-details/listaordini.component';
import { AboutComponent } from './components/about/about.component';
import { DetailOrderComponent } from './components/gestionecontrollo-details/detailorder.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerListComponent,
    OrderlistComponent,
    CreazioneordineComponent,
    PagamentoComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardRiderComponent,
    LoginComponent,
    RegisterComponent,
    ListaOrdiniComponent,
    AboutComponent,
    DetailOrderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,


  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
