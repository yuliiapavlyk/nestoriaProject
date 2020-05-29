import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from './button/button.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
    ButtonComponent,
    ErrorComponent
	],
	exports: [
    ButtonComponent,
    ErrorComponent
	],
	providers: []
})
export class SharedComponentsModule {
}
