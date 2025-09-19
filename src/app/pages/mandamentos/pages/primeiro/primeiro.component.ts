import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { PrimeiroMandamento } from 'src/app/shared/data/PrimeiroMandamento';

@Component({
    selector: 'app-primeiro',
    templateUrl: './primeiro.component.html',
    styleUrls: ['./primeiro.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class PrimeiroComponent {
  commandments = PrimeiroMandamento;
}
