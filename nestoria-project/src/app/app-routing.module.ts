import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertySearchComponent } from './modules/property-search-page/property-search.component';
import { PropertyListingComponent } from './modules/property-listing-page/property-listing.component';


const routes: Routes = [
  { path: 'home', component: PropertySearchComponent },
  { path: 'property', component: PropertyListingComponent },
  { path: '**', component: PropertySearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
