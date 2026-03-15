import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home/home').then((m) => m.Home),
  },

  {
    path: 'propiedades',
    loadComponent: () =>
      import('./features/properties/pages/property-list/property-list').then((m) => m.PropertyList),
  },

  {
    path: 'propiedad/:slug',
    loadComponent: () =>
      import('./features/properties/pages/property-detail/property-detail').then(
        (m) => m.PropertyDetail,
      ),
  },

  {
    path: 'agencia',
    loadComponent: () =>
      import('./features/agency/agency-page/agency-page').then((m) => m.AgencyPage),
  },

  {
    path: 'servicios',
    loadComponent: () =>
      import('./features/services/services-page/services-page').then((m) => m.ServicesPage),
  },

  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog-list/blog-list').then((m) => m.BlogList),
  },
  {
    path: 'calculadora',
    loadComponent: () =>
      import('./features/mortgage-calculator/mortgage-calculator/mortgage-calculator').then(
        (m) => m.MortgageCalculator,
      ),
  },
];
