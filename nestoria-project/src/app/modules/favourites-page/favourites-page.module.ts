import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteComponent } from './favourite.component';
import { SharedComponentsModule } from 'src/app/shared/components/module';



@NgModule({
  declarations: [FavouriteComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class FavouritesPageModule { }
