import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from 'src/app/components/customerlist/customerlist';
import { OrderlistComponent } from 'src/app/components/orderlist/orderlist';
import { CreazioneordineComponent } from './components/creazioneordine/creazioneordine.component';
import { GestioneordineComponent } from './components/gestioneordine/gestioneordine.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    OrderlistComponent,
    CreazioneordineComponent,
    GestioneordineComponent,
    PagamentoComponent
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
