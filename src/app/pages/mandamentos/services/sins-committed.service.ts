import { Injectable, signal } from '@angular/core';
import { ISin } from '../models/sin';

@Injectable({
  providedIn: 'root',
})
export class SinsCommittedService {
  private readonly committedSinsValue = signal<ISin[]>([]);

  readonly committedSins = this.committedSinsValue.asReadonly();

  addSin(sin: ISin) {
    this.committedSinsValue.update((sins) => [...sins, sin]);
  }

  removeSin(sin: ISin) {
    const newList = this.committedSins().filter(
      (committedSin) => committedSin.text != sin.text
    );

    this.committedSinsValue.set(newList);
  }
}
