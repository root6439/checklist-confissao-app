import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { TERCEIRO_MANDAMENTO } from '../../../../shared/data/TerceiroMandamento';

@Component({
    selector: 'app-terceiro',
    templateUrl: './terceiro.component.html',
    styleUrls: ['./terceiro.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class TerceiroComponent {
  commandments = TERCEIRO_MANDAMENTO;
}
