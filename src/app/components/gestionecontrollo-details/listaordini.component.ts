import { Component, OnInit } from '@angular/core';  
import { Observable,Subject } from "rxjs";  
import { DataTablesModule } from 'angular-datatables';
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { OrdineService } from './ordine.service';
import { Ordine } from './ordine';
  
@Component({  
  selector: 'app-listaordini',  
  templateUrl: './listaordini.component.html',  
  styleUrls: ['./listaordini.component.css']  
})  
export class ListaOrdiniComponent implements OnInit { 
  
 constructor(private ordineservice:OrdineService) { }  
  
  ordiniArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  ordini: Observable<Ordine[]>;  
  ordine : Ordine=new Ordine();  
  deleteMessage=false;  
  ordinelist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.ordineservice.getOrdersList().subscribe(data =>{  
    this.ordini =data;  
    this.dtTrigger.next(1);  
    })  
  }  
  
  updateOrder(id: number){  
    this.ordineservice.getOrder(id)  
      .subscribe(  
        data => {  
          this.ordinelist=data             
        },  
        error => console.log(error));  
  }  
  
  ordineupdateform=new FormGroup({  
    ordine_id:new FormControl(),  
    ordine_indirizzopartenza:new FormControl(),  
    ordine_indirizzoconsegna:new FormControl(),  
    ordine_branch:new FormControl()  
  });  

  updateOrd(updstu: any){  
    this.ordine=new Ordine();   
   this.ordine.id=this.OrdineId?.value;  
   this.ordine.indirizzoPartenza=this.OrdineIndirizzoPartenza?.value;  
   this.ordine.indirizzoConsegna=this.OrdineIndirizzoConsegna?.value;  
   console.log(this.OrdineId?.value);  



   this.ordineservice.updateOrder(this.ordine.id,this.ordine).subscribe(  
    data => {       
      this.isupdated=true;  
      this.ordineservice.getOrdersList().subscribe(data =>{  
        this.ordini =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get OrdineIndirizzoPartenza(){  
    return this.ordineupdateform.get('indirizzoPartenza');  
  }  
  
  get OrdineIndirizzoConsegna(){  
    return this.ordineupdateform.get('indirizzoConsegna');  
  }  
  
  get OrdineId(){  
    return this.ordineupdateform.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  