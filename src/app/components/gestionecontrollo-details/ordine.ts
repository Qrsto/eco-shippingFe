import { FasciaOraria } from "../enums/fascia-oraria";
import { MetodoPagamento } from "../enums/metodo-pagamento";

export interface Ordine {  
  
    id: number;
    idSpedizione: number;
    indirizzoPartenza:String;
    indirizzoConsegna:String;
    volumeSpedizione:number;
    pesoSpedizione: number;
    numTelefonoDestinatario: number;
    metodoPagamento: MetodoPagamento;
    fasciaOraria: FasciaOraria;
    noteConsegna: string;
    costoFinale: number;
    longitudinePartenza: number;
    latitudinePartenza: number;
    longitudineDestinazione: number;
    latitudineDestinazione: number;
    
}  