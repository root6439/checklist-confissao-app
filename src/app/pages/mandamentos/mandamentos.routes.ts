import { Routes } from '@angular/router';

export const commandmentsRoutes: Routes = [
  {
    path: 'primeiro-mandamento',
    loadComponent: () =>
      import('./primeiro/primeiro.component').then((c) => c.PrimeiroComponent),
    data: { preload: true },
  },
  {
    path: 'segundo-mandamento',
    loadComponent: () =>
      import('./segundo/segundo.component').then((c) => c.SegundoComponent),
    data: { preload: true },
  },
  {
    path: 'terceiro-mandamento',
    loadComponent: () =>
      import('./terceiro/terceiro.component').then((c) => c.TerceiroComponent),
    data: { preload: true },
  },
  {
    path: 'quarto-mandamento',
    loadComponent: () =>
      import('./quarto/quarto.component').then((c) => c.QuartoComponent),
    data: { preload: true },
  },
  {
    path: 'quinto-mandamento',
    loadComponent: () =>
      import('./quinto/quinto.component').then((c) => c.QuintoComponent),
    data: { preload: true },
  },
  {
    path: 'sexto-e-nono-mandamentos',
    loadComponent: () =>
      import('./sexto-enono/sexto-enono.component').then(
        (c) => c.SextoENonoComponent
      ),
    data: { preload: true },
  },
  {
    path: 'setimo-e-decimo-mandamentos',
    loadComponent: () =>
      import('./setimo-e-decimo/setimo-e-decimo.component').then(
        (c) => c.SetimoEDecimoComponent
      ),
    data: { preload: true },
  },
  {
    path: 'oitavo-mandamento',
    loadComponent: () =>
      import('./oitavo/oitavo.component').then((c) => c.OitavoComponent),
    data: { preload: true },
  },
  {
    path: 'imprimir',
    loadComponent: () =>
      import('./imprimir/imprimir.component').then((c) => c.ImprimirComponent),
    data: { preload: true },
  },
  { path: '', redirectTo: 'primeiro-mandamento', pathMatch: 'full' },
];
