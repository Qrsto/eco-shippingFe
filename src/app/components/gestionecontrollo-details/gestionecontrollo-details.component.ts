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

/*orders?: Gestioneordine[];

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
*/
@Input() viewMode = false;

@Input() currentOrder: Gestioneordine = {

  indirizzoPartenza: '',
  indirizzoConsegna: '',
  volume : NaN ,
  peso: NaN,
  metodoPagamento: NaN,
  costoFinale: NaN
  
};

message = '';

constructor(
  private gestioneordineService: GestioneordineService,
  private route: ActivatedRoute,
  private router: Router) {}


ngOnInit(): void {
  if (!this.viewMode){

    this.message = '';
    this.getOrdine(this.route.snapshot.params["id"]);

  }
}

getOrdine(id: string): void{

  this.gestioneordineService.get(id).subscribe({next: (data: any) => {this.currentOrder = data;
  console.log(data);
},
error: (e: any) => console.error(e)
});

}

}
