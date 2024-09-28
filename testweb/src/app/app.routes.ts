import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'index',
        loadComponent: () => import('./pages/main/main.component')
    },
    {
        path: 'problem1',
        title: 'problem 1',
        loadComponent: () => import('./pages/problem1/problem1.component')
    },
    {
        path: 'problem2',
        title: 'problem 2',
        loadComponent: () => import('./pages/problem2/problem2.component')
    }
];
