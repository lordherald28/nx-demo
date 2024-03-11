import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'com-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
