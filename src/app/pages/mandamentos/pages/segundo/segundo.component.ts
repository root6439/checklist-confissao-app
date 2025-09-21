import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { SEGUNDO_MANDAMENTO } from 'src/app/shared/data/SegundoMandamento';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss'],
  imports: [IonContent, SinListComponent],
})
export class SegundoComponent {
  commandments = SEGUNDO_MANDAMENTO;
}
