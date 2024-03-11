import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cus-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  onAcceso() {
    throw new Error('Method not implemented.');
  }
}
