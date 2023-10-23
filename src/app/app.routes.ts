import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'page1' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'page1',
        loadComponent: () => import('./page1/page1.component'),
      },
      {
        path: 'page2',
        loadComponent: () => import('./page2/page2.component'),
      },
      {
        path: 'page3',
        loadComponent: () => import('./page3/page3.component'),
      },
    ],
  },
  { path: '**', redirectTo: 'page1' },
];
