import { Component } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-kirby-converter',
  imports: [CommonModule, FormsModule],
  templateUrl: './kirby-converter.component.html',
  styleUrl: './kirby-converter.component.css'
})
export class KirbyConverterComponent {
convertedAmount: number | null = null
fromCurrency: string = '';
toCurrency: string = '';
amount: number = 0;
constructor(private currencyConverterService: CurrencyConverterService){}

convertCurrency(){
  this.currencyConverterService.getExchangeRate(this.fromCurrency).subscribe(
    (response: any)=>{
      if(response.result === "success"){
        const exchangeRate = response.conversion_rates[this.toCurrency];
        this.convertedAmount = this.amount * exchangeRate
      } else {
        console.error('Error in conversion:', response.error);
      }
     (error: any) => {
      console.error('API call failed:', error);
     } 
    })
}
}
