import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
        ]
    },
    {
        path: 'projects',
        component: MainLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) }
        ]
    }
];
