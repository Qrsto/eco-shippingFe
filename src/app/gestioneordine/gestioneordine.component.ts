import { Component } from '@angular/core';
import { GestioneOrdineService } from './gestioneordine.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestioneordine',
  templateUrl: './gestioneordine.component.html',
  styleUrls: ['./gestioneordine.component.css']
})
export class GestioneordineComponent {

    homeform: FormGroup | undefined;
    constructor(private gestioneeordine: GestioneOrdineService ) {}

}
