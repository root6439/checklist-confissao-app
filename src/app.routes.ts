import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'confissao',
    loadComponent: () =>
      import('./app/confissao/confissao.component').then(
        (c) => c.ConfissaoComponent
      ),
  },
  {
    path: 'perguntas',
    loadComponent: () =>
      import('./app/perguntas/perguntas.component').then(
        (c) => c.PerguntasComponent
      ),
  },
  {
    path: 'dicas',
    loadComponent: () =>
      import('./app/dicas/dicas.component').then((c) => c.DicasComponent),
  },
  {
    path: 'checklist',
    loadChildren: () =>
      import('./app/mandamentos/mandamentos.routes').then(
        (mod) => mod.MANDAMENTOS_ROUTES
      ),
    data: { preload: true },
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./app/history/history.component').then((c) => c.HistoryComponent),
  },
  { path: '', redirectTo: 'checklist', pathMatch: 'full' },
];
