import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'confissao',
    loadComponent: () =>
      import('./app/pages/confissao/confissao.component').then(
        (c) => c.ConfissaoComponent
      ),
  },
  {
    path: 'perguntas',
    loadComponent: () =>
      import('./app/pages/perguntas/perguntas.component').then(
        (c) => c.PerguntasComponent
      ),
  },
  {
    path: 'dicas',
    loadComponent: () =>
      import('./app/pages/dicas/dicas.component').then((c) => c.DicasComponent),
  },
  {
    path: 'checklist',
    loadChildren: () =>
      import('./app/pages/mandamentos/mandamentos.routes').then(
        (mod) => mod.commandmentsRoutes
      ),
    data: { preload: true },
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./app/pages/history/history.component').then((c) => c.HistoryComponent),
  },
  { path: '', redirectTo: 'checklist', pathMatch: 'full' },
];
