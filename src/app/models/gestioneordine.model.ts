import { FasciaOraria } from "../enums/fascia-oraria";
import { MetodoPagamento } from "../enums/metodo-pagamento";

export class Gestioneordine {

    id?: number;
    indirizzoPartenza?: string;
    indirizzoConsegna?: string;
    volumeSpedizione?: number;
    pesoSpedizione?: number;
    metodoPagamento?: MetodoPagamento;
    noteConsegna?: string;
    costoFinale?: number;


}
