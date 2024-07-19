import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('@shared/components/app-layout/app-layout.component').then(c => c.AppLayoutComponent),
    loadChildren: () => import('@features/home').then(r => r.routes),
  }
];
