import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';
import { ErrorComponent } from './error/error.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
    ButtonComponent,
    ErrorComponent,
    ProductItemComponent
	],
	exports: [
    ButtonComponent,
    ErrorComponent,
    ProductItemComponent
	],
	providers: []
})
export class SharedComponentsModule {
}
