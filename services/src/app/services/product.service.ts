import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log("prodcut service");
  }

  getProductData() {
    return [
      { name: 'mobile', brand: 'samsung', price: '120000' },
      { name: 'laptop', brand: 'lg', price: '100000' },
      { name: 'washing machine', brand: 'IFB', price: '40000' },
    ]
  }
}
