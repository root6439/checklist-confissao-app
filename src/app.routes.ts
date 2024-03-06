import { Routes } from '@angular/router';
import { ConfissaoComponent } from './app/confissao/confissao.component';
import { PerguntasComponent } from './app/perguntas/perguntas.component';
import { DicasComponent } from './app/dicas/dicas.component';

export const routes: Routes = [
  { path: 'confissao', component: ConfissaoComponent },
  { path: 'perguntas', component: PerguntasComponent },
  { path: 'dicas', component: DicasComponent },
  {
    path: 'checklist',
    loadChildren: () =>
      import('./app/mandamentos/mandamentos.routes').then(
        (mod) => mod.MANDAMENTOS_ROUTES
      ),
  },
  { path: '', redirectTo: 'confissao', pathMatch: 'full' },
];
