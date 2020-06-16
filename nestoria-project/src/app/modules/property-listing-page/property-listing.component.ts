import { Component, OnInit } from '@angular/core';

import { buttonType } from '../../app.constants';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss'],
})
export class PropertyListingComponent implements OnInit {
  public buttonFavor: string = buttonType.buttonFavor;
  public buttonBack: string = buttonType.buttonBack;
  public buttonGoFavorite: string = buttonType.buttonGoFavorite;
  public itemId: number;
  public item: Product;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private _productService: ProductService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {}

  public addToFavorite(id: number, $event): void {
    this._productService.addToFavorite(id, $event);
  }

  public goToFavorite(): void {
    this._router.navigate(['favourites']);
  }

  ngOnInit(): void {
    this.itemId = this._activateRoute.snapshot.params['id'];

    this.subscriptions.add(
      this._productService.getProductById(this.itemId).subscribe((product) => {
        this.item = product;
      })
    );
  }

  public navigateToSearch(): void {
    this._router.navigate(['items']);
  }
}
