import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  constructor(private _productService: ProductService) {}

  @Input() id: number;
  @Input() link: string;
  @Input() price: number;
  @Input() location: string;
  @Input() description: string;
  @Input() favorite: boolean = false;

  public addToFavorite(id: number, $event): void {
    this._productService.addToFavorite(id, $event);
  }
}
