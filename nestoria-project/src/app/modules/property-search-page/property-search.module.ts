import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertySearchComponent } from './property-search.component';
import { SharedComponentsModule } from '../../shared/components/module';

@NgModule({
  declarations: [PropertySearchComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class PropertySearchModule { }
