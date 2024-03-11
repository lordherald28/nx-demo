import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './cus-login/login.component';
import { FeatureRoutingModule } from './feature.routes';

@NgModule({
  imports: [CommonModule, FeatureRoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class FeatureModule {}
