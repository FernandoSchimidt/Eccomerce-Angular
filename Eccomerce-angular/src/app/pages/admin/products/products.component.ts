import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isSidePanelVisible: boolean = false;
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "cretedDate": new Date,
    "deleiveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""

  }

  newProduct() {
    this.isSidePanelVisible = true;
  }
  close() {
    this.isSidePanelVisible = false;
  }
}
