import { Routes } from '@angular/router';

export const routes: Routes = [ 
  { 
    path: '', 
    loadComponent: () => import('./components/home/home').then(m => m.Home),
    pathMatch: 'full'
  }, 
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about').then(m => m.About)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact').then(m => m.Contact)
  },
  { 
    path: 'experience', 
    loadComponent: () => import('./components/experience/experience').then(m => m.Experience)
  },
  { 
    path: 'rowing', 
    loadComponent: () => import('./components/rowing/rowing').then(m => m.Rowing)
  },
  { 
    path: 'skills', 
    loadComponent: () => import('./components/skills/skills').then(m => m.Skills)
  },
  { 
    path: '**', 
    loadComponent: () => import('./components/errorcomponent/errorcomponent').then(m => m.ErrorComponent)
  }
];