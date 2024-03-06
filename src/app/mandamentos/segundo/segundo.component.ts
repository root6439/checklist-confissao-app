import { Mandamento, Pecado } from './../../shared/models/Mandamento';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SEGUNDO_MANDAMENTO } from 'src/app/shared/data/SegundoMandamento';
import { MandamentosService } from '../mandamentos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class SegundoComponent implements OnDestroy {
  mandamentos: Mandamento = SEGUNDO_MANDAMENTO;

  constructor(public service: MandamentosService) {}

  ngOnDestroy(): void {
    let selecionados: string[] = this.mandamentos.pecados
      .filter((value) => value.selecionado)
      .map((value) => value.texto);

    this.service.pecadosSelecionados = new Set([
      ...this.service.pecadosSelecionados,
      ...selecionados,
    ]);
  }

  clearMandament(): void {
    this.mandamentos.pecados.forEach((value: Pecado) => {
      value.selecionado = false;
    });
  }

  clearAll(): void {
    this.service.pecadosSelecionados = new Set();
  }
}
