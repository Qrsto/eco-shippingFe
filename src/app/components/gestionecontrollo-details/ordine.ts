

export interface Ordine {  
  
    idOrdine: number;
    idSpedizione: number;
    indirizzoPartenza:String;
    indirizzoConsegna:String;
    volumeSpedizione:number;
    pesoSpedizione: number;
    numTelefonoDestinatario: String;
    metodoPagamento: string;
    fasciaOraria: string;
    noteConsegna: String;
    costoFinale: number;
    longitudinePartenza: number;
    latitudinePartenza: number;
    longitudineDestinazione: number;
    latitudineDestinazione: number;
    id_utente: number;
    
}  