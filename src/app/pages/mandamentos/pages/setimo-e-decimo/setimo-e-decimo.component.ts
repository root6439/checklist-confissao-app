import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SinListComponent } from 'src/app/pages/mandamentos/components/sin-list/sin-list.component';
import { SETIMO_E_DECIMO_MANDAMENTOS } from '../../../../shared/data/SetimoEDecimoMandamentos';

@Component({
    selector: 'app-setimo-e-decimo',
    templateUrl: './setimo-e-decimo.component.html',
    styleUrls: ['./setimo-e-decimo.component.scss'],
    imports: [IonContent, SinListComponent]
})
export class SetimoEDecimoComponent {
  commandments = SETIMO_E_DECIMO_MANDAMENTOS;
}
