import { MetodoPagamento } from "../enums/metodo-pagamento";
import { FasciaOraria } from "../enums/fascia-oraria";

export interface Order {
    
    indirizzoPartenza: string;
    indirizzoConsegna: string;
    volumeSpedizione: number;
    pesoSpedizione: number;
    numTelefonoDestinatario: String;
    metodoPagamento: MetodoPagamento;
    fasciaOraria: FasciaOraria;
    noteConsegna: string;
    costoFinale: number;
    longitudinePartenza: number;
    latitudinePartenza: number;
    longitudineDestinazione: number;
    latitudineDestinazione: number;
  }