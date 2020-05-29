import { Component } from '@angular/core';

import { buttonType } from '../../app.constants';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss']
})
export class PropertyListingComponent {

  public fakeProperty = {
    price:'3200$',
    location:'Lviv, Ukraine',
    link:'https://res.cloudinary.com/homelike/image/upload/w_1900,c_fit,f_jpg/homelike-05/uploads/bd3a8aab9d1159a0e08435506c6a6ee2ae22e51e12d0e4c56cf80b0d2a728d80.jpeg',
    bedCount: 2,
    bathroomsCount: 3,
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  };
  public buttonFavor:string = buttonType.buttonFavor;

  addToFavor(): void{
    alert("add to favor");
  }
}
