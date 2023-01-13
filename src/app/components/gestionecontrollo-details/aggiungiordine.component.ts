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
  
  ordine : Ordine=new Ordine();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  ordinesaveform =new FormGroup({    
    indirizzoPartenza:new FormControl(),  
    indirizzoConsegna:new FormControl()  
  });  
  
  saveOrder(saveOrder: any){  
    this.ordine=new Ordine();       
    this.ordine.indirizzoPartenza=this.indirizzoPartenza?.value;  
    this.ordine.indirizzoConsegna=this.indirizzoConsegna?.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.ordineservice.createOrder(this.ordine)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.ordine = new Ordine();  
  }  
  
  get indirizzoPartenza(){  
    return this.ordinesaveform.get('indirizzoPartenza');  
  }  
  
  get indirizzoConsegna(){  
    return this.ordinesaveform.get('indirizzoConsegna');  
  }  
  
  addOrderForm(){  
    this.submitted=false;  
    this.ordinesaveform.reset();  
  }  
}  