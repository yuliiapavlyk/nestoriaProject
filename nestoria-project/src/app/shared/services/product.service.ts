import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get('/items').pipe(
      map((items: Product[]) => {
        return items;
      })
    );
  }

  getProductById(id:number): Observable<Product> {
    const url = `/item/${id}`;
    return this.http.get(url).pipe(
      map((item: Product) => {
        console.log(item);
        return item;
      })
    );
  }
}
