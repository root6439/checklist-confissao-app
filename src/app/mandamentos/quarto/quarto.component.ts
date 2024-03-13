import { QUARTO_MANDAMENTO } from './../../shared/data/QuartoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnDestroy } from '@angular/core';
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
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.scss'],
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
export class QuartoComponent {
  mandamentos: Mandamento = QUARTO_MANDAMENTO;

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
