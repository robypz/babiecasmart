import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { ProductsHome } from "./products/products-home/products-home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ProductsHome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('babieca-smart');
}
