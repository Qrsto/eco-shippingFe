import { FasciaOraria } from "../enums/fascia-oraria";
import { MetodoPagamento } from "../enums/metodo-pagamento";

export interface Order {

    indirizzoPartenza: string;
    indirizzoConsegna: string;
    volumeSpedizione: Float32Array;
    pesoSpedizione: Float32Array;
    numTelefonoDestinatario: number;
    metodoPagamento: MetodoPagamento;
    noteConsegna: string;
    fasciaOraria: FasciaOraria;
    latitudinePartenza: number;
    longitudinePartenza: number;
    latitudineDestinazione: number;
    longitudineDestinazione: number;
    


    
  }