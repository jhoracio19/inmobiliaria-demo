import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'propiedades',
    renderMode: RenderMode.Client,
  },
  {
    path: 'propiedad/:slug',
    renderMode: RenderMode.Client,
  },
  {
    path: 'agencia',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'servicios',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'calculadora',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
