import { Component } from '@angular/core';

@Component({
  selector: 'app-gestioneordine',
  templateUrl: './gestioneordine.component.html',
  styleUrls: ['./gestioneordine.component.css']
})
export class GestioneordineComponent implements OnInit  {

  gestioneordinelist: Customer[] = [];
    constructor(private gestioneordineService: gestioneordineService) { }
    ngOnInit(): void {
      this.getOrder();
    }
    getOrder(): void {

      this.customerService.getOrderList()

      .subscribe(gestioneordinelist => this.gestioneordinelist = gestioneordinelist);
    }

}
