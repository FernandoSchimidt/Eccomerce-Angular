import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private readonly URLAPI = 'http://localhost:8080';

  getAllProducts() {
    return this.http.get(`${this.URLAPI}/products`);
  }

  getAllCategories() {
    return this.http.get(`${this.URLAPI}/product-category`);
  }
}
