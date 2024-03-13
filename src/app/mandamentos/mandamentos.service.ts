import { OITAVO_MANDAMENTO } from './../shared/data/OitavoMandamento';
import { SETIMO_E_DECIMO_MANDAMENTOS } from './../shared/data/SetimoEDecimoMandamentos';
import { SEXTO_E_NONO_MANDAMENTOS } from './../shared/data/SextoENonoMandamento';
import { QUINTO_MANDAMENTO } from './../shared/data/QuintoMandamento';
import { QUARTO_MANDAMENTO } from './../shared/data/QuartoMandamento';
import { TERCEIRO_MANDAMENTO } from './../shared/data/TerceiroMandamento';
import { SEGUNDO_MANDAMENTO } from './../shared/data/SegundoMandamento';
import { PrimeiroMandamento } from './../shared/data/PrimeiroMandamento';
import { Mandamento, Pecado } from './../shared/models/Mandamento';
import { Injectable } from '@angular/core';

@Injectable()
export class MandamentosService {
  mandamentos: Mandamento[] = [
    PrimeiroMandamento,
    SEGUNDO_MANDAMENTO,
    TERCEIRO_MANDAMENTO,
    QUARTO_MANDAMENTO,
    QUINTO_MANDAMENTO,
    SEXTO_E_NONO_MANDAMENTOS,
    SETIMO_E_DECIMO_MANDAMENTOS,
    OITAVO_MANDAMENTO,
  ];

  pecadosSelecionados: Set<string> = new Set();

  clearMandament(mandament: Mandamento): void {
    mandament.pecados.forEach((value: Pecado) => {
      value.selecionado = false;
    });
  }

  clearAll(): void {
    this.mandamentos.forEach((value: Mandamento) => {
      value.pecados.forEach((pecado: Pecado) => {
        pecado.selecionado = false;
      });
    });
  }

  atLeastOneSelected(mandament: Mandamento): boolean {
    return !mandament.pecados.some((value: Pecado) => value.selecionado);
  }

  somePecadoSelected(): boolean {
    return !this.mandamentos.some((obj: Mandamento) =>
      obj.pecados.some((value: Pecado) => value.selecionado)
    );
  }
}
