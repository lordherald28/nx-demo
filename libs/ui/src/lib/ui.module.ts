import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './button/ui-button.component';
import { UiInputComponent } from './input/ui-input.component';
import { UiTableComponent } from './table/ui-table.component';
import { HeaderComponent } from './ui-header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule} from '@angular/router';

import {UtilsModule} from '@demo-inycom/utils';

@NgModule({
  imports: [CommonModule,RouterModule,UtilsModule],
  declarations: [UiButtonComponent, UiInputComponent, UiTableComponent, HeaderComponent, MenuComponent],
  exports: [UiButtonComponent, UiInputComponent, UiTableComponent, HeaderComponent,MenuComponent],
})
export class UiModule {}
