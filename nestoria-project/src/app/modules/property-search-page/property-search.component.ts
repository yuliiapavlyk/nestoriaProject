import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  public isErrorState: boolean = false;
  public isRecentSearches: boolean = false;
  public errorMessage: string = '';
  public isListLocation: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public navigateToFavor(): void {
    alert("Navigate to favorite items!")
  }


}
