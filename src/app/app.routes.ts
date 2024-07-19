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
    children: [
      {
        path: 'home',
        loadChildren: () => import('@features/home').then(r => r.routes)
      },
      {
        path: 'login',
        loadComponent: () => import('@features/unauthorized').then(c => c.LoginComponent),
        title: 'Login'
      },
      {
        path: 'register',
        loadComponent: () => import('@features/unauthorized').then(c => c.RegisterComponent),
        title: 'Register'
      }
    ]
  }
];
