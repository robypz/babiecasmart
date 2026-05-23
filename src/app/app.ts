import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { ProductsHome } from "./products/products-home/products-home";
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('babieca-smart');
}
