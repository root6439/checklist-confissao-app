import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { OITAVO_MANDAMENTO } from './../../shared/data/OitavoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IonContent } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { addSin, removeSin } from 'src/app/store/sins.actions';

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

  constructor(
    public service: MandamentosService,
    private store: Store<AppState>
  ) {}

  addSin(text: string, evt: MatCheckboxChange) {
    evt.checked
      ? this.store.dispatch(addSin({ text }))
      : this.store.dispatch(removeSin({ text }));
  }
}
