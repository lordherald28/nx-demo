import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cus-login/login.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
        path:'',
        component:LoginComponent,
        title:'Login'
    },

];

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class FeatureRoutingModule {}

