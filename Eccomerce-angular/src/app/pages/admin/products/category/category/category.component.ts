import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Category } from './category';
import { CategoryService } from '../../../../../services/category/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
interface categoryForm {
  name: FormControl;
}
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
  ],
  providers: [CategoryService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  readonly displayedColumns: string[] = ['id', 'name'];
  isSidePanelVisible: boolean = false;
  categoryForm!: FormGroup<categoryForm>;
  categoryObj: any = {
    name: '',
  };

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
  categoryList: any[] = [];

  onSubmit() {
    this.categoryService.createCategory(this.categoryForm.value).subscribe({
      next: () => {
        this.openSnackBar('Category created', 'Success');
        this.getAllCategories();
        this.isSidePanelVisible = false;
      },
      error: () => {
        this.openSnackBar('Error', 'Error');
      },
    });
  }

  newCategory() {
    this.isSidePanelVisible = true;
  }
  createCategory() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  close() {
    this.isSidePanelVisible = false;
  }
  dataSource: any[] = [];
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((res: any) => {
      this.dataSource = res;
    });
  }
}
