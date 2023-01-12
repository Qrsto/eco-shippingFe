import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gestioneordine } from 'src/app/models/gestioneordine.model';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';

@Component({
  selector: 'app-gestionecontrollo-details',
  templateUrl: './gestionecontrollo-details.component.html',
  styleUrls: ['./gestionecontrollo-details.component.css']
})
export class GestionecontrolloDetailsComponent implements OnInit{

orders?: Gestioneordine[];
currentOrder: Gestioneordine = {};
currentIndex = -1;
id = '';

  constructor(private gestioneordineService: GestioneordineService){}

  ngOnInit(): void {
    this.retrieveOrdini();
  }

  retrieveOrdini(): void{

    this.gestioneordineService.getAll().subscribe({next: (data) =>{this.orders = data;
    console.log(data);
    },
    error: (e) => console.error(e)
    });

  }

  searchId(): void {

    this.currentOrder = {};
    this.currentIndex = -1;

    this.gestioneordineService.get(this.id).subscribe({
      next: (data) => {
        this.orders = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });

  }

  setActiveOrders(order: Gestioneordine, index: number): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveOrdini();
    this.currentOrder = {};
    this.currentIndex = -1;
  }

  removeAllOrders(): void {
    this.gestioneordineService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }


}
