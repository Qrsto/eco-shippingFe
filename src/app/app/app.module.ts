import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccessoutenteComponent } from '../accessoutente/accessoutente.component';
import { CreazioneordineComponent } from '../creazioneordine/creazioneordine.component';
import { CustomerListComponent } from '../customerlist/customerlist';
import { GestioneordineComponent } from '../gestioneordine/gestioneordine.component';
import { LogoutComponent } from '../logout/logout.component';
import { OrderlistComponent } from '../orderlist/orderlist';
import { PagamentoComponent } from '../pagamento/pagamento.component';
import { ProvaComponent } from '../prova/prova.component';
import { RegistrautenteComponent } from '../registrautente/registrautente.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  declarations: [
    AccessoutenteComponent,
    CreazioneordineComponent,
    CustomerListComponent,
    GestioneordineComponent,
    LogoutComponent,
    OrderlistComponent,
    PagamentoComponent,
    ProvaComponent,
    RegistrautenteComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }