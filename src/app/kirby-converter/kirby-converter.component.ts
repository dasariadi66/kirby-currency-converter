import { Component } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kirby-converter',
  imports: [CommonModule],
  templateUrl: './kirby-converter.component.html',
  styleUrl: './kirby-converter.component.css'
})
export class KirbyConverterComponent {
convertedAmount: number | null = null
constructor(private currencyConverterService: CurrencyConverterService){}

convertCurrency(from: string, to: string, amount: number){
  this.currencyConverterService.getExchangeRate(from, to, amount).subscribe(
    (response: any)=>{
      if(response.success){
        this.convertedAmount = response.result;
      } else {
        console.error('Error in conversion:', response.error);
      }
     (error: any) => {
      console.error('API call failed:', error);
     } 
    })
}
}
