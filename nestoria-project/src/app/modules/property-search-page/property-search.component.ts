import { Component, OnInit } from '@angular/core';

import { buttonType } from '../../app.constants';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.scss']
})
export class PropertySearchComponent {


  public isErrorState: boolean = false;
  public isRecentSearches: boolean = false;
  public errorMessage: string = 'New error';
  public isListLocation: boolean = false;

  public buttonFavor: string = buttonType.buttonFavor;
  public buttonSearch: string = buttonType.buttonSearch;
  public buttonLocation: string = buttonType.buttonLocation;

  public products:Product[] = [];

  public navigateToFavor(): void {
    alert("Navigate to favorite items!")
  }

  public doSearch(): void {
    alert('search');
  }

  public defineLocation(): void {
    alert('define Location');
  }

}
