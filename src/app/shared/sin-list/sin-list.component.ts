import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { addSin, removeSin } from 'src/app/store/sins.actions';
import { Pecado } from '../models/Mandamento';
import { selectSins } from 'src/app/store/sins.selectors';
import { ISin } from 'src/app/store/app-state';

@Component({
  selector: 'app-sin-list',
  templateUrl: './sin-list.component.html',
  styleUrls: ['./sin-list.component.scss'],
  standalone: true,
  imports: [IonContent, RouterModule, MatCheckboxModule],
})
export class SinListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  sins: Pecado[] = [];

  @Input()
  previousRoute = '';

  @Input()
  nextRoute = '';

  selectedSins: string[] = [];

  ngOnInit() {
    this.store
      .select(selectSins)
      .subscribe(
        (resp) => (this.selectedSins = resp.map((value) => value.text))
      );
  }

  sinAlreadyChecked(sin: string) {
    return this.selectedSins.includes(sin);
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
