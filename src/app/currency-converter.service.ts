import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  ACCESS_KEY= `3891474c91a02b9312be28f834239030`
  fromCurrency: string = '';
  toCurrency:string = '';
  amount:number = 0;
  private readonly BASE_URL = `http://api.exchangeratesapi.io/v1`

  constructor(private http: HttpClient) { }

  getExchangeRate(fromCurrency: string, toCurrency:string, amount:number){
    const url = `${this.BASE_URL}/convert?access_key=${this.ACCESS_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
    return this.http.get(url);
  }
}
