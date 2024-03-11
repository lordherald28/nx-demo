import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path:'',
        component:NxWelcomeComponent,
        pathMatch:'full'
    },
    {
        path:'login',
        loadChildren:() => import('@demo-inycom/feature').then(m=>m.FeatureModule),
        title:'Login'
    }
];
