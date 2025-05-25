import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  input,
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { addSin, removeSin } from 'src/app/store/sins.actions';
import { Pecado } from '../models/Mandamento';
import { selectSins } from 'src/app/store/sins.selectors';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'sin-list',
  templateUrl: './sin-list.component.html',
  styleUrls: ['./sin-list.component.scss'],
  imports: [
    RouterModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinListComponent implements OnInit {
  private store = inject<Store<AppState>>(Store);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  readonly title = input('');

  readonly subtitle = input('');

  readonly sins = input<Pecado[]>([]);

  readonly nextRoute = input('');

  selectedSins: string[] = [];

  private readonly destroy: DestroyRef = inject(DestroyRef);

  ngOnInit() {
    this.store
      .select(selectSins)
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(
        (resp) => (this.selectedSins = resp.map((value) => value.text))
      );
  }

  toggleSin(text: string, add: boolean) {
    add ? this.addSin(text) : this.removeSin(text);
  }

  addSin(text: string) {
    this.store.dispatch(addSin({ text }));
  }

  removeSin(text: string) {
    this.store.dispatch(removeSin({ text }));
  }
}
