import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiModule } from '@demo-inycom/ui';
import { UtilsModule } from '@demo-inycom/utils';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), UiModule,UtilsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
