import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertySearchModule } from './modules/property-search-page/property-search.module';
import { SharedComponentsModule } from './shared/components/module';
import { PropertyListingModule } from './modules/property-listing-page/property-listing.module';

import { FakeBackendInterceptor } from './shared/services/interceptor.service';
import { SearchResultsPageModule } from './modules/search-results-page/search-results-page.module';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    PropertySearchModule,
    PropertyListingModule,
    SearchResultsPageModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
