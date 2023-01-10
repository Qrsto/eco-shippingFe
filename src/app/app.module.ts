import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from 'src/app/components/customerlist/customerlist';
import { OrderlistComponent } from 'src/app/components/orderlist/orderlist.component';
import { CreazioneordineComponent } from './components/creazioneordine/creazioneordine.component';
import { GestioneordineComponent } from './components/gestioneordine/gestioneordine.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    UserLoginComponent,
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
<<<<<<< HEAD
    FormsModule
=======
    MatButtonModule,
    MatCardModule,
    MatInputModule,
>>>>>>> 119b11e3df9ef07bbd4ee37d360a11c260bb67b6

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
