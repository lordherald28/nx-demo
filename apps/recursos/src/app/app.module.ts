import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiModule } from '@demo-inycom/ui';
import { UtilsModule } from '@demo-inycom/utils';
import { HomeComponent } from './page/home/home.component';
import {FeatureModule} from '@demo-inycom/feature';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), UiModule,UtilsModule, FeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
