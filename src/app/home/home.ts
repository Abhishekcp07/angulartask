import { Component, inject, signal } from '@angular/core';
import { Productservice } from '../productservice';
import { product } from '../product';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private productservice = inject(Productservice);
  products = signal<product[]>([]);
  showdetail:any =null;

  ngOnInit() {
    this.productservice.getProducts().subscribe({
      next: (response) => {
        this.products.set(response.products);
      },
    });
  }
}
