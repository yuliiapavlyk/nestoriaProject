import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models';
import { Router } from '@angular/router';
import { buttonType } from 'src/app/app.constants';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit,OnDestroy {

  public dataSource:string;
  public products:Product[];
  public items:Product[];
  public buttonBack: buttonType.buttonBack;

  private subscriptions: Subscription = new Subscription();

  constructor(private _productService: ProductService,
              private _router:Router) { }

  public getFavoriteItems(): void {
    this.dataSource = localStorage.getItem('favoriteItems');
  }

  public navigateToItem(id: number): void {
    this._router.navigate(['item', id]);
  }

  public navigateToMain():void{
    this._router.navigate(['items']);
  }

  public ngOnInit(): void {
    this.getFavoriteItems();

    this.subscriptions.add(
      this._productService.getProducts().subscribe((products) => {
        this.products = products;
        this.items = this.products.filter(x=> this.dataSource.indexOf(String(x.id)) > -1
        )
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
