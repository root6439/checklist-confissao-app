import { MandamentosService } from './../mandamentos.service';
import { Mandamento, Pecado } from './../../shared/models/Mandamento';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeiroMandamento } from 'src/app/shared/data/PrimeiroMandamento';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.scss'],
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
export class PrimeiroComponent implements OnDestroy {
  mandamentos: Mandamento = PrimeiroMandamento;

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
}
