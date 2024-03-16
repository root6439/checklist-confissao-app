import { QUARTO_MANDAMENTO } from './../../shared/data/QuartoMandamento';
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/shared/sin-list/sin-list.component';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.scss'],
  standalone: true,
  imports: [IonContent, SinListComponent],
})
export class QuartoComponent {
  commandments = QUARTO_MANDAMENTO;
}
