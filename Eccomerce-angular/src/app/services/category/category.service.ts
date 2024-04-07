import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Category } from '../../pages/admin/products/category/category/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  private readonly URLAPI = 'http://localhost:8080';

  createCategory(record: Partial<Category>) {
    return this.http
      .post<Category>(`${this.URLAPI}/product-category`, record)
      .pipe(first());
  }

  getAllCategories() {
    return this.http.get('http://localhost:8080/product-category');
  }
}
