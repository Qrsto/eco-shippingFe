import { FasciaOraria } from "../enums/fascia-oraria";
import { MetodoPagamento } from "../enums/metodo-pagamento";

export interface Order {

    indirizzoPartenza: string;
    indirizzoDestinazione: string;
    volumeSpedizione: string;
    pesoSpedizione: string;
    numTelefonoDestinatario: string;
    metodoPagamento: MetodoPagamento;
    noteConsegna: string;
    fasciaOraria: FasciaOraria;
    
    
  }