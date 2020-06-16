import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertySearchComponent } from './property-search.component';
import { SharedComponentsModule } from '../../shared/components/module';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PropertySearchComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ]
})
export class PropertySearchModule { }
