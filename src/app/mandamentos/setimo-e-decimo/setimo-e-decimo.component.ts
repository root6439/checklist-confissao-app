import { SETIMO_E_DECIMO_MANDAMENTOS } from './../../shared/data/SetimoEDecimoMandamentos';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-setimo-e-decimo',
  templateUrl: './setimo-e-decimo.component.html',
  styleUrls: ['./setimo-e-decimo.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    IonContent,
  ],
})
export class SetimoEDecimoComponent {
  mandamentos: Mandamento = SETIMO_E_DECIMO_MANDAMENTOS;

  constructor(public service: MandamentosService) {}

  setPecados() {
    let selecionados: string[] = this.mandamentos.pecados
      .filter((value) => value.selecionado)
      .map((value) => value.texto);

    this.service.pecadosSelecionados = new Set([
      ...this.service.pecadosSelecionados,
      ...selecionados,
    ]);
  }
}
