import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product';
@Injectable({
  providedIn: 'root',
})
export class Productservice {

  private http = inject(HttpClient);
  getProducts(): Observable<{ products: product[] }> {
    return this.http.get<{ products: product[] }>('https://dummyjson.com/products');
  }
}
