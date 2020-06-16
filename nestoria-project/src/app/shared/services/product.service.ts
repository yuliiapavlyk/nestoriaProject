import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public dataSource: string;

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
        return item;
      })
    );
  }

  private getFavoriteItems(): void {
    this.dataSource = localStorage.getItem('favoriteItems');
  }

  public addToFavorite(id: number, $event): void {
    var isAlreadyFavor: boolean = this.checkUniqueFavorite(id);
    if (!isAlreadyFavor) {
      if (this.dataSource?.length > 0) {
        this.dataSource += ` ${id}`;
      } else {
        this.dataSource = ` ${id}`;
      }
      localStorage.setItem('favoriteItems', this.dataSource);

    }
    $event.stopPropagation();
  }

  private checkUniqueFavorite(id: number): boolean {
    this.getFavoriteItems();
    return this.dataSource.indexOf(String(id)) > -1;
  }
}
