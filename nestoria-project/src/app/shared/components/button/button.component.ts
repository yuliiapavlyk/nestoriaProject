import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

@Input() label: string = 'Test text';

@Input() disabled: boolean = false;

@Input() width: string = '';

@Input("id") buttonId: string;

}

