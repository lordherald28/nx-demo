import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [AngularCommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export default class CommonModule {}
