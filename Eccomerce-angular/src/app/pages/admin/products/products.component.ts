import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../../../services/product/product.service';
import { MatSelectModule } from '@angular/material/select';
import {} from '@angular/material/input';
import {} from '@angular/material/form-field';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    cretedDate: new Date(),
    deleiveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  categoryList: any[] = [];

  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }
  createProduct() {}

  getAllCategories() {
    this.prodService.getAllCategories().subscribe((res: any) => {
      this.categoryList = res;
    });
  }

  newProduct() {
    this.isSidePanelVisible = true;
  }
  close() {
    this.isSidePanelVisible = false;
  }
}
