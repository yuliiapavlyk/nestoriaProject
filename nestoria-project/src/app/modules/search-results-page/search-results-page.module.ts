import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { SharedComponentsModule } from 'src/app/shared/components/module';


@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class SearchResultsPageModule { }
