import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';

  productData: {
    name: string;
    brand: string;
    price: string;
  }[] | undefined;

  constructor(private productService: ProductService) { }

  getProductData() {
    this.productData = this.productService.getProductData()
    console.log(this.productData);
  }
}
function getProductData() {
  throw new Error('Function not implemented.');
}