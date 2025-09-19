import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { OITAVO_MANDAMENTO } from '../../../../shared/data/OitavoMandamento';

@Component({
    selector: 'app-oitavo',
    templateUrl: './oitavo.component.html',
    styleUrls: ['./oitavo.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class OitavoComponent {
  commandments = OITAVO_MANDAMENTO;
}
