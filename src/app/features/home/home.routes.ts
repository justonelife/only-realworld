import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('@features/home').then(c => c.HomeComponent),
    title: 'Home'
  }
]