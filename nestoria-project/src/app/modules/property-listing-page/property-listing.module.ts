import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListingComponent } from './property-listing.component';
import { SharedComponentsModule } from '../../shared/components/module';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PropertyListingComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PropertyListingModule { }
