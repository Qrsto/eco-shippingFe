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
<<<<<<< HEAD
import { AccessoutenteComponent } from './accessoutente/accessoutente.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//angular material 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProvaComponent } from './prova/prova.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
>>>>>>> ced062d7fd7360c5b4684343d3e175fbd8e5544a



@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    OrderlistComponent,
    RegistrautenteComponent,
    CreazioneordineComponent,
    GestioneordineComponent,
    PagamentoComponent,
<<<<<<< HEAD
    AccessoutenteComponent,

=======
    ProvaComponent,
     
>>>>>>> ced062d7fd7360c5b4684343d3e175fbd8e5544a
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
