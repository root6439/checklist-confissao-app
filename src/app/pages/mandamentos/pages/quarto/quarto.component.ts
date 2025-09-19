import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { QUARTO_MANDAMENTO } from '../../../../shared/data/QuartoMandamento';

@Component({
    selector: 'app-quarto',
    templateUrl: './quarto.component.html',
    styleUrls: ['./quarto.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class QuartoComponent {
  commandments = QUARTO_MANDAMENTO;
}
