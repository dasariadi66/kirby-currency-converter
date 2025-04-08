import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'https://bcd-api-dca-ipa.cbsa-asfc.cloud-nuage.canada.ca/exchange-rate-lambda/exchange-rates'
 
  private getExchangeRate(): Observable<any> {  
    return this.http.get<any>(this.apiUrl)
  }
  convertAmount(amount: number, fromCurrency: string, toCurrency: string){

  }
}
