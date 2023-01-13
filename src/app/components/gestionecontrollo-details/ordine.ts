import { FasciaOraria } from "../enums/fascia-oraria";
import { MetodoPagamento } from "../enums/metodo-pagamento";

export class Ordine {  
  
    id?: any;
    indirizzoPartenza?:String;
    indirizzoConsegna?:String;
    volumeSpedizione?:number;
    
}  