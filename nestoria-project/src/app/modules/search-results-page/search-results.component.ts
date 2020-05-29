import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit , OnDestroy{

  public products: Product[];
  private subscriptions: Subscription = new Subscription();

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    debugger
    this.subscriptions.add(this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
      }));
  }

  ngOnDestroy():void{
    this.subscriptions.unsubscribe()
  }

}
