import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from 'src/app/customerlist/customerlist';
import { OrderlistComponent } from 'src/app/orderlist/orderlist';
import { RegistrautenteComponent } from './registrautente/registrautente.component';
import { CreazioneordineComponent } from './creazioneordine/creazioneordine.component';
import { GestioneordineComponent } from './gestioneordine/gestioneordine.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { AccessoutenteComponent } from './accessoutente/accessoutente.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    OrderlistComponent,
    RegistrautenteComponent,
    CreazioneordineComponent,
    GestioneordineComponent,
    PagamentoComponent,
    AccessoutenteComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
