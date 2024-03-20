import { Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { QuartoComponent } from './quarto/quarto.component';
import { QuintoComponent } from './quinto/quinto.component';
import { SextoENonoComponent } from './sexto-enono/sexto-enono.component';
import { SetimoEDecimoComponent } from './setimo-e-decimo/setimo-e-decimo.component';
import { OitavoComponent } from './oitavo/oitavo.component';
import { ImprimirComponent } from './imprimir/imprimir.component';

export const MANDAMENTOS_ROUTES: Routes = [
  { path: 'primeiro-mandamento', component: PrimeiroComponent },
  { path: 'segundo-mandamento', component: SegundoComponent },
  { path: 'terceiro-mandamento', component: TerceiroComponent },
  { path: 'quarto-mandamento', component: QuartoComponent },
  { path: 'quinto-mandamento', component: QuintoComponent },
  { path: 'sexto-e-nono-mandamentos', component: SextoENonoComponent },
  { path: 'setimo-e-decimo-mandamentos', component: SetimoEDecimoComponent },
  { path: 'oitavo-mandamento', component: OitavoComponent },
  { path: 'imprimir', component: ImprimirComponent },
  { path: '', redirectTo: 'primeiro-mandamento', pathMatch: 'full' },
];
