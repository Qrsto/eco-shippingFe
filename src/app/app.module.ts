import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from 'src/app/customerlist/customerlist';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RegistrautenteComponent } from './registrautente/registrautente.component';
import { AccessoutenteComponent } from './accessoutente/accessoutente.component';
import { CreazioneordineComponent } from './creazioneordine/creazioneordine.component';
import { GestioneordineComponent } from './gestioneordine/gestioneordine.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//angular material 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProvaComponent } from './prova/prova.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    OrderlistComponent,
    RegistrautenteComponent,
    AccessoutenteComponent,
    CreazioneordineComponent,
    GestioneordineComponent,
    PagamentoComponent,
    ProvaComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
