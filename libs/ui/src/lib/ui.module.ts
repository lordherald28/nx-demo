import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './button/ui-button.component';
import { UiInputComponent } from './input/ui-input.component';
import { UiTableComponent } from './table/ui-table.component';
import { HeaderComponent } from './ui-header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiButtonComponent, UiInputComponent, UiTableComponent, HeaderComponent],
  exports: [UiButtonComponent, UiInputComponent, UiTableComponent, HeaderComponent],
})
export class UiModule {}
