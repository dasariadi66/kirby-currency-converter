import { Component } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';

@Component({
  selector: 'app-kirby-converter',
  templateUrl: './kirby-converter.component.html',
  styleUrl: './kirby-converter.component.css'
})
export class KirbyConverterComponent {
constructor(private currencyConverterService: CurrencyConverterService){}
}
