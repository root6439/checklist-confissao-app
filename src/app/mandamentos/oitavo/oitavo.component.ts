import { MatCheckboxModule } from '@angular/material/checkbox';
import { OITAVO_MANDAMENTO } from './../../shared/data/OitavoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-oitavo',
  templateUrl: './oitavo.component.html',
  styleUrls: ['./oitavo.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    IonContent,
  ],
})
export class OitavoComponent {
  mandamentos: Mandamento = OITAVO_MANDAMENTO;

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
