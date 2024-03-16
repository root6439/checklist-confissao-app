import { Store } from '@ngrx/store';
import { Mandamento, Pecado } from './../shared/models/Mandamento';
import { Injectable } from '@angular/core';
import { clear } from '../store/sins.actions';

@Injectable()
export class MandamentosService {
  constructor(private store: Store) {}

  pecadosSelecionados: Set<string> = new Set();

  clearMandament(mandament: Mandamento): void {
    mandament.pecados.forEach((value: Pecado) => {
      value.selecionado = false;
    });
  }

  clearAll(): void {
    this.store.dispatch(clear());
  }

  atLeastOneSelected(mandament: Mandamento): boolean {
    return !mandament.pecados.some((value: Pecado) => value.selecionado);
  }

  someSinSelected(): boolean {
    return false;
  }
}
