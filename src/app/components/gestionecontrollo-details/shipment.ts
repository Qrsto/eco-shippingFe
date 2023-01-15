import { TipoStato } from "../enums/tipo-stato";

export interface Spedizione {  
  
    id: number;
    dataEvasione: Date;
    idRider: number;
    tipoStato: TipoStato;
    id_utente: number;
    
}  