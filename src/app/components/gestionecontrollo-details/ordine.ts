import { FasciaOraria } from "../enums/fascia-oraria";
import { MetodoPagamento } from "../enums/metodo-pagamento";

export interface Ordine {  
  
    idOrdine: number;
    idSpedizione: number;
    indirizzoPartenza:String;
    indirizzoConsegna:String;
    volumeSpedizione:number;
    pesoSpedizione: number;
    numTelefonoDestinatario: String;
    metodoPagamento: MetodoPagamento;
    fasciaOraria: FasciaOraria;
    noteConsegna: String;
    costoFinale: number;
    longitudinePartenza: number;
    latitudinePartenza: number;
    longitudineDestinazione: number;
    latitudineDestinazione: number;
    
}  