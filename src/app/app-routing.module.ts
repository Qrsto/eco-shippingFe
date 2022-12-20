import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerList } from 'src/customerlist/customerlist';

const routes: Routes = [ {path: 'customer-list', component: CustomerList},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
