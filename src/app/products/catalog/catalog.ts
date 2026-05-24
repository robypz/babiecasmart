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
  private btn: any;

  ngOnInit(): void {
    this.categories.set(this.productService.getCategories()());
    this.loadAllProducts();

  }

  loadAllProducts() {
    this.products.set([]);
    this.categories().forEach((category) => {
      this.products.update((value) => value.concat(category.products));
    });
  }

  filter(name: string, event: any) {
    var element = event.target as HTMLElement;
    element.classList.toggle('active-filter');


    if (element == this.btn) {
      this.loadAllProducts();
    }
    else {
      var filteredCategories = this.categories().filter((category) =>
        category.name.toLowerCase().includes(name.toLowerCase())
      );

      this.products.set(
        filteredCategories.reduce(
          (acc, category) => acc.concat(category.products),
          [] as Product[]
        )
      );
    }

    this.btn = element;
  }

}
