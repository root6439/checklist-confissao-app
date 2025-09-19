import { Routes } from '@angular/router';

export const commandmentsRoutes: Routes = [
  {
    path: 'primeiro-mandamento',
    loadComponent: () =>
      import('./pages/primeiro/primeiro.component').then((c) => c.PrimeiroComponent),
    data: { preload: true },
  },
  {
    path: 'segundo-mandamento',
    loadComponent: () =>
      import('./pages/segundo/segundo.component').then((c) => c.SegundoComponent),
    data: { preload: true },
  },
  {
    path: 'terceiro-mandamento',
    loadComponent: () =>
      import('./pages/terceiro/terceiro.component').then((c) => c.TerceiroComponent),
    data: { preload: true },
  },
  {
    path: 'quarto-mandamento',
    loadComponent: () =>
      import('./pages/quarto/quarto.component').then((c) => c.QuartoComponent),
    data: { preload: true },
  },
  {
    path: 'quinto-mandamento',
    loadComponent: () =>
      import('./pages/quinto/quinto.component').then((c) => c.QuintoComponent),
    data: { preload: true },
  },
  {
    path: 'sexto-e-nono-mandamentos',
    loadComponent: () =>
      import('./pages/sexto-enono/sexto-enono.component').then(
        (c) => c.SextoENonoComponent
      ),
    data: { preload: true },
  },
  {
    path: 'setimo-e-decimo-mandamentos',
    loadComponent: () =>
      import('./pages/setimo-e-decimo/setimo-e-decimo.component').then(
        (c) => c.SetimoEDecimoComponent
      ),
    data: { preload: true },
  },
  {
    path: 'oitavo-mandamento',
    loadComponent: () =>
      import('./pages/oitavo/oitavo.component').then((c) => c.OitavoComponent),
    data: { preload: true },
  },
  {
    path: 'imprimir',
    loadComponent: () =>
      import('./pages/imprimir/imprimir.component').then((c) => c.ImprimirComponent),
    data: { preload: true },
  },
  { path: '', redirectTo: 'primeiro-mandamento', pathMatch: 'full' },
];
