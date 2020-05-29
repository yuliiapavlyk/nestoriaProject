import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListingComponent } from './property-listing.component';
import { SharedComponentsModule } from '../../shared/components/module';

@NgModule({
  declarations: [PropertyListingComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class PropertyListingModule { }
