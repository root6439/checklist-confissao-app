import { Component } from '@angular/core';
import { PrimeiroMandamento } from 'src/app/shared/data/PrimeiroMandamento';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/shared/components/sin-list/sin-list.component';

@Component({
    selector: 'app-primeiro',
    templateUrl: './primeiro.component.html',
    styleUrls: ['./primeiro.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class PrimeiroComponent {
  commandments = PrimeiroMandamento;
}
