import { Component, OnInit } from '@angular/core';  
import {FormControl,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';  
import { Ordine } from './ordine';
import { OrdineService } from './ordine.service';

@Component({  
  selector: 'app-aggiungiordine',  
  templateUrl: './aggiungiordine.component.html',  
  styleUrls: ['./aggiungiordine.component.css']  
})  
export class AddOrderComponent implements OnInit {  
  
  constructor(private ordineservice:OrdineService) { }  
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  
  
  
}  