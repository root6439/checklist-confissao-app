import { Routes } from '@angular/router';

export const MANDAMENTOS_ROUTES: Routes = [
  {
    path: 'primeiro-mandamento',
    loadComponent: () =>
      import('./primeiro/primeiro.component').then((c) => c.PrimeiroComponent),
  },
  {
    path: 'segundo-mandamento',
    loadComponent: () =>
      import('./segundo/segundo.component').then((c) => c.SegundoComponent),
  },
  {
    path: 'terceiro-mandamento',
    loadComponent: () =>
      import('./terceiro/terceiro.component').then((c) => c.TerceiroComponent),
  },
  {
    path: 'quarto-mandamento',
    loadComponent: () =>
      import('./quarto/quarto.component').then((c) => c.QuartoComponent),
  },
  {
    path: 'quinto-mandamento',
    loadComponent: () =>
      import('./quinto/quinto.component').then((c) => c.QuintoComponent),
  },
  {
    path: 'sexto-e-nono-mandamentos',
    loadComponent: () =>
      import('./sexto-enono/sexto-enono.component').then(
        (c) => c.SextoENonoComponent
      ),
  },
  {
    path: 'setimo-e-decimo-mandamentos',
    loadComponent: () =>
      import('./setimo-e-decimo/setimo-e-decimo.component').then(
        (c) => c.SetimoEDecimoComponent
      ),
  },
  {
    path: 'oitavo-mandamento',
    loadComponent: () =>
      import('./oitavo/oitavo.component').then((c) => c.OitavoComponent),
  },
  {
    path: 'imprimir',
    loadComponent: () =>
      import('./imprimir/imprimir.component').then((c) => c.ImprimirComponent),
  },
  { path: '', redirectTo: 'primeiro-mandamento', pathMatch: 'full' },
];
