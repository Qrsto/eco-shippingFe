import { TipoStato } from "../enums/tipo-stato";
import { MetodoPagamento } from "../enums/metodo-pagamento";

export interface Order {

    idOrdine: string;
    idSpedizione: string;
    indirizzoPartenza: string;
    indirizzoConsegna: string;
    metodoPagamento: MetodoPagamento;
    costoFinale: Float32Array;
    tipoStato: TipoStato;

  }
