import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertySearchComponent } from './modules/property-search-page/property-search.component';
import { PropertyListingComponent } from './modules/property-listing-page/property-listing.component';
import { FavouriteComponent } from './modules/favourites-page/favourite.component';


const routes: Routes = [
  { path: 'home', component: PropertySearchComponent },
  { path: 'item/:id', component: PropertyListingComponent },
  { path: 'favourites', component: FavouriteComponent },
  { path: '**', component: PropertySearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
