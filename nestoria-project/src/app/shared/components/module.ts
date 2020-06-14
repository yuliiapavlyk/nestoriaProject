import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';
import { ErrorComponent } from './error/error.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { LayoutComponent } from './layout/layout.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
	],
	declarations: [
    ButtonComponent,
    ErrorComponent,
    ProductItemComponent,
    LayoutComponent
	],
	exports: [
    ButtonComponent,
    ErrorComponent,
    ProductItemComponent,
    LayoutComponent
	],
	providers: []
})
export class SharedComponentsModule {
}
