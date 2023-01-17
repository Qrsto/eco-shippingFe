
export interface Order {
    
    indirizzoPartenza: string;
    indirizzoConsegna: string;
    volumeSpedizione: number;
    pesoSpedizione: number;
    numTelefonoDestinatario: String;
    metodoPagamento: string;
    fasciaOraria: string
    noteConsegna: string;
    costoFinale: number;
    longitudinePartenza: number;
    latitudinePartenza: number;
    longitudineDestinazione: number;
    latitudineDestinazione: number;
  }