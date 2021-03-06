import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { buttonType } from '../../app.constants';
import { Product } from 'src/app/shared/models';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss'],
})
export class PropertySearchComponent implements OnInit, OnDestroy {
  public products: Product[];
  public items: Product[];
  private subscriptions: Subscription = new Subscription();
  public isErrorState: boolean = false;
  public isRecentSearches: boolean = false;
  public errorMessage: string = 'New error';
  public isListLocation: boolean = false;
  public value: string = '';

  public buttonFavor: string = buttonType.buttonFavor;
  public buttonSearch: string = buttonType.buttonSearch;
  public buttonLocation: string = buttonType.buttonLocation;
  public dataSource: string;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  public navigateToFavor(): void {
    this._router.navigate(['favourites']);
  }

  public doSearch(): void {
    const searchText = this.value.toLocaleLowerCase();
    if (this.value.trim().length > 0) {
      this.products = this.items.filter((it) => {
        return (
          it.location.toLocaleLowerCase().indexOf(searchText) > -1 ||
          it.description.toLocaleLowerCase().indexOf(searchText) > -1
        );
      });
    }
  }

  public getFavoriteItems(): void {
    this.dataSource = localStorage.getItem('favoriteItems');
  }

  public navigateToItem(id: number): void {
    this._router.navigate(['item', id]);
  }

  public ngOnInit(): void {
    this.subscriptions.add(
      this._productService.getProducts().subscribe((products) => {
        this.products = products;
        this.items = products;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
