import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gestioneordine } from 'src/app/models/gestioneordine.model';
import { GestioneordineService } from 'src/app/services/gestioneordine.service';
import { Order } from './order';
import { OrderService } from './orderlist.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.html',
  styleUrls: ['./orderlist.component.css'] 
})


export class OrderlistComponent implements OnInit {
  
  @Input() viewMode = false;

  @Input() currentOrder: Gestioneordine = {
    id: undefined,
    indirizzoPartenza: '',
    indirizzoConsegna: ''
  };
  
  message = '';

  constructor(
    private gestioneordineService: GestioneordineService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getOrder(this.route.snapshot.params["id"]);
    }
  }

  getOrder(id: number): void {
    this.gestioneordineService.get(id)
      .subscribe({
        next: (data) => {
          this.currentOrder = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentOrder.id,
      description: this.currentOrder.indirizzoPartenza,
      published: this.currentOrder.indirizzoConsegna
    };

    this.message = '';

  }

}
