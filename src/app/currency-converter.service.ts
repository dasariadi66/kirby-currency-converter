import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  ACCESS_KEY= `3ba393714aaafaadbcb7f0ba`
  fromCurrency: string = '';
  toCurrency:string = '';
  amount:number = 0;
  private readonly BASE_URL = `https://v6.exchangerate-api.com/v6/${this.ACCESS_KEY}/latest`

  constructor(private http: HttpClient) { }

  getExchangeRate(fromCurrency: string){
    const url = `${this.BASE_URL}/${fromCurrency}`
    return this.http.get(url);
  }
}
