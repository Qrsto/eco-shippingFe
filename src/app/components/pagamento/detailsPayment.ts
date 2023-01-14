
class DetailsPayment {
    private _cardNumber: string; 
    private _titolareCarta: string;  
    private _dataScadenza: Date;
    private _cvvNumber: number;



    constructor(cardNumber: string, titolareCarta: string, dataScadenza: Date, cvvNumber: number) {
      this._cardNumber = cardNumber;
      this._titolareCarta = titolareCarta;
      this._cvvNumber = cvvNumber;
      this.dataScadenza = dataScadenza;
    }

  public get cardNumber(): string {
    return this._cardNumber;
  }
  public set cardNumber(value: string) {
    this._cardNumber = value;
  }
    
  public get dataScadenza(): Date {
    return this._dataScadenza;
  }
  public set dataScadenza(value: Date) {
    this._dataScadenza = value;
  }
    
  public get cvvNumber(): number {
    return this._cvvNumber;
  }
  public set cvvNumber(value: number) {
    this._cvvNumber = value;
  }

  public get titolareCarta(): string {
    return this._titolareCarta;
  }
  public set titolareCarta(value: string) {
    this._titolareCarta = value;
  }


    



  }