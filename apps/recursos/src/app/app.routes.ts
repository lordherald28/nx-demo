import { Route } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const appRoutes: Route[] = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    // {
    //     path:'login',
    //     loadChildren:() => import('@demo-inycom/feature').then(m=>m.FeatureModule),
    //     title:'Login'
    // }
];
