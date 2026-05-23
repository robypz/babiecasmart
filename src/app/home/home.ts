import { Component } from '@angular/core';
import { ProductsHome } from "../products/products-home/products-home";

@Component({
  selector: 'app-home',
  imports: [ProductsHome],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
