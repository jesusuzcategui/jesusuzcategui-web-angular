import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: ':lang',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/es', // Redirige a español si no hay idioma en la URL
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/es', // Redirige al idioma predeterminado para rutas no válidas
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
