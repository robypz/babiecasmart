import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../product.model';
import { Category } from '../../categories/category.model';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  private productService = inject(ProductService);
  public products = signal<Product[]>([]);
  public categories = signal<Category[]>([]);

  ngOnInit(): void {
    this.categories.set(this.productService.getCategories()());
    this.categories().forEach((category) => {
      this.products.update((value) => value.concat(category.products));
    });

  }


}
