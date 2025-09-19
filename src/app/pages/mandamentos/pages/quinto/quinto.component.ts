import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { QUINTO_MANDAMENTO } from '../../../../shared/data/QuintoMandamento';

@Component({
    selector: 'app-quinto',
    templateUrl: './quinto.component.html',
    styleUrls: ['./quinto.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class QuintoComponent {
  commandments = QUINTO_MANDAMENTO;
}
