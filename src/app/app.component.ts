import { Component } from '@angular/core';
import { KirbyConverterComponent } from "./kirby-converter/kirby-converter.component";

@Component({
  selector: 'app-root',
  imports: [KirbyConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kirby-currency-converter';
}
