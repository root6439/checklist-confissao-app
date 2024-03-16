import { QUINTO_MANDAMENTO } from './../../shared/data/QuintoMandamento';
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/shared/sin-list/sin-list.component';

@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.component.html',
  styleUrls: ['./quinto.component.scss'],
  standalone: true,
  imports: [IonContent, SinListComponent],
})
export class QuintoComponent {
  commandments = QUINTO_MANDAMENTO;
}
