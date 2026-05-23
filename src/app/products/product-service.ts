import { inject, Injectable, signal, Signal } from '@angular/core';
import { Category } from '../categories/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories = signal<Category[]>([]);
  private httpClient = inject(HttpClient);

  constructor() {
    this.loadCategories();
  }

  private loadCategories() {
    this.httpClient.get<Category[]>('/data/data.json').subscribe({
      next: (response) => {
        this.categories.set(response);
      }
    });
  }

  public getCategories(): Signal<Category[]> {
    return this.categories.asReadonly();
  }
}
