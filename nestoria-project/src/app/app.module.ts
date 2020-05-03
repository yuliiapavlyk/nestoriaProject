import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertySearchModule } from './modules/property-search-page/property-search.module';
import { SharedComponentsModule } from './shared/components/module';
import { PropertyListingModule } from './modules/property-listing-page/property-listing.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    PropertySearchModule,
    PropertyListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
