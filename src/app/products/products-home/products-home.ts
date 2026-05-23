import { Component, inject } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-products-home',
  imports: [],
  templateUrl: './products-home.html',
  styleUrl: './products-home.scss',
})
export class ProductsHome {
  private productService = inject(ProductService);
  public categories = this.productService.getCategories();
}
