import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';


@Component({
  selector: 'app-root',
  imports: [CurrencyConverterPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code step by step';
  name = 'sanket';
  date = new Date();
  amount = 100;
}